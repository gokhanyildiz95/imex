import 'dotenv/config';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createTransport, describeSmtpError, missingEnv } from './mailer.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, '..', 'build');
const isProd = process.env.NODE_ENV === 'production';
const port = Number(process.env.PORT) || 3000;

const app = express();
app.disable('x-powered-by');
app.set('trust proxy', 1);
app.use(express.json({ limit: '20kb' }));

// --- Contact form ---------------------------------------------------------

const missing = missingEnv();
const transporter = missing.length ? null : createTransport();
if (missing.length) console.warn(`Contact form: missing ${missing.join(', ')}`);

// Very small in-memory rate limit: 5 messages per IP per hour.
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 60 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

const clean = (v, max) => String(v ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, max);
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.post('/api/contact', async (req, res) => {
  const body = req.body || {};

  // Honeypot: real visitors never fill this hidden field.
  if (body.website) return res.json({ ok: true });

  if (rateLimited(req.ip)) {
    return res.status(429).json({ ok: false, error: 'Too many messages. Please try again later.' });
  }

  const name = clean(body.name, 120);
  const company = clean(body.company, 160);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 60);
  const category = clean(body.category, 160);
  const message = String(body.message ?? '').trim().slice(0, 4000);

  if (!name || !emailRe.test(email) || message.length < 10) {
    return res.status(400).json({ ok: false, error: 'Please fill in your name, a valid e-mail and a message.' });
  }

  // The form requires the KVKK privacy notice to be acknowledged; keep that on record.
  if (!body.kvkk) {
    return res.status(400).json({ ok: false, error: 'Please confirm that you have read the KVKK privacy notice.' });
  }

  const text = [
    `Name: ${name}`,
    `Company: ${company || '-'}`,
    `E-mail: ${email}`,
    `Phone: ${phone || '-'}`,
    `Category: ${category || '-'}`,
    `KVKK notice acknowledged: yes (${new Date().toISOString()})`,
    '',
    message,
  ].join('\n');

  if (!transporter) {
    if (isProd) {
      console.error(`Contact form is not configured: missing ${missing.join(', ')}`);
      return res.status(503).json({ ok: false, error: 'The contact form is not available right now.' });
    }
    console.log('\n--- Contact form (SMTP not configured, printing instead) ---\n' + text + '\n');
    return res.json({ ok: true });
  }

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: process.env.MAIL_TO,
      replyTo: `${name} <${email}>`,
      subject: `Website inquiry from ${name}`,
      text,
    });
    return res.json({ ok: true });
  } catch (err) {
    console.error(`Failed to send contact e-mail: ${describeSmtpError(err)}`);
    return res.status(502).json({ ok: false, error: 'The message could not be sent. Please try again.' });
  }
});

// `mail` tells whether the SMTP settings are present (never their values), to check a deployment.
app.get('/api/health', (_req, res) => res.json({ ok: true, mail: missing.length === 0 }));

// --- Static site (production build) ----------------------------------------

app.use(express.static(dist, { maxAge: isProd ? '7d' : 0, index: false }));
app.use((_req, res) => res.sendFile(path.join(dist, 'index.html')));

app.listen(port, () => {
  console.log(`IMEX Inspection server listening on http://localhost:${port}`);
});

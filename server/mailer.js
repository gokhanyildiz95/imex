import nodemailer from 'nodemailer';

// Contact-form SMTP settings, shared by the server and `npm run check:mail`.
export const REQUIRED_ENV = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS', 'MAIL_TO'];

export const missingEnv = () => REQUIRED_ENV.filter((k) => !process.env[k]);

export function createTransport() {
  const port = Number(process.env.SMTP_PORT) || 587;
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    // Fail fast instead of hanging until the hosting proxy cuts the request.
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  });
}

// One readable line for the logs: what failed and what the SMTP server said.
export const describeSmtpError = (err) =>
  [err.code, err.responseCode, err.response || err.message].filter(Boolean).join(' | ');

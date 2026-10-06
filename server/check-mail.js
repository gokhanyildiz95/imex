// Checks the contact-form SMTP settings without sending anything: `npm run check:mail`.
import 'dotenv/config';
import { createTransport, describeSmtpError, missingEnv } from './mailer.js';

const missing = missingEnv();
if (missing.length) {
  console.error(`Missing environment variables: ${missing.join(', ')}`);
  process.exit(1);
}

console.log(`Connecting to ${process.env.SMTP_HOST}:${process.env.SMTP_PORT || 587} as ${process.env.SMTP_USER} ...`);
try {
  await createTransport().verify();
  console.log('OK: the SMTP server accepted the login. The contact form can send e-mail.');
} catch (err) {
  console.error(`FAILED: ${describeSmtpError(err)}`);
  process.exit(1);
}

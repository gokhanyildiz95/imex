# IMEX Inspection website (imexinspection.com)

Corporate site for IMEX Inspection. React 18 + Vite on the front end, a small Node.js (Express) server that serves the built site and handles the contact form.

The site is bilingual (English default, Turkish toggle in the header). The visitor's choice is remembered in the browser.

## Requirements

- Node.js 18 or newer

## Run it locally

```bash
npm install
cp .env.example .env     # optional in development
npm run dev
```

- Site (Vite dev server): http://localhost:5173
- API (Express): http://localhost:3000 (Vite proxies `/api` to it)

In development, if SMTP is not configured, contact form submissions are printed in the terminal instead of being e-mailed.

## Build and run for production

```bash
npm run build
NODE_ENV=production npm start
```

Express serves `build/` and the `/api/contact` endpoint on `PORT` (default 3000). Put it behind your web server or hosting platform's reverse proxy with HTTPS.

In production the contact form needs SMTP settings, otherwise it answers with an error instead of silently dropping messages. Set these environment variables (see `.env.example`):

`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `MAIL_TO`, `MAIL_FROM`

## Deploy on Hostinger

The site must run as a **Node.js web app**, not as a static site: the contact form posts to `/api/contact`, which only exists while `server/index.js` is running. If `https://<domain>/api/contact` answers with an HTML 404 page, the site is being served statically.

In hPanel, set up the domain as a Node.js web app with:

| Setting | Value |
| --- | --- |
| Framework / preset | Express (not Vite) |
| Branch | the branch that holds the latest code |
| Node.js version | 18 or newer |
| Build command | `npm run build` |
| Start command / entry file | `npm start` / `server/index.js` |
| Environment variables | `NODE_ENV=production`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `MAIL_TO`, `MAIL_FROM` |

Make sure `public_html` does not hold an uploaded copy of the site, otherwise it is served instead of the app. Restart the app after changing environment variables.

Check a deployment:

- `https://<domain>/api/health` should return `{"ok":true,"mail":true}`. `"mail":false` means the SMTP variables are not loaded; an HTML page means the Node.js app is not running.
- `npm run check:mail` (locally, with a `.env`) logs in to the SMTP server without sending anything and prints the result.
- If sending fails, the app log shows `Failed to send contact e-mail: <code> | <SMTP reply>`.

## Where to edit things

| What | File |
| --- | --- |
| All text, English and Turkish | `src/content/content.js` |
| E-mail, phone, address (empty = hidden) | `src/content/site.config.js` |
| Colors, fonts, spacing | `src/styles.css` (tokens at the top) |
| Logos and favicon | `public/logo.png`, `public/logo-white.png`, `public/favicon.png` |
| Contact form endpoint | `server/index.js` |

## Publish to GitHub

```bash
git init
git add .
git commit -m "Initial IMEX Inspection website"
git branch -M main
git remote add origin https://github.com/<your-account>/<your-repo>.git
git push -u origin main
```

A GitHub Actions workflow (`.github/workflows/ci.yml`) installs dependencies and builds the site on every push and pull request.

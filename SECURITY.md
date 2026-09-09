# Security Policy

## Scope
This repository contains a static informational website. It has no server-side application,
database, authentication system, payment flow, user accounts, or user-submitted content.

## Reporting
Email **karencrozer@gmail.com** with the subject **Designing for Cal-GETC security issue**.
Do not include passwords, student records, or other sensitive information.

## Current production controls
- Same-origin scripts/styles/images/fonts only.
- No third-party executable resources or embeds.
- No analytics, cookies, browser storage, service worker, forms, or uploads.
- No fetch/XHR/WebSocket/beacon calls.
- CSP blocks script-initiated network connections, frames, plugins, workers, and form submissions.
- External links use no-referrer.
- Checker values come from a fixed allowlist and dynamic text is inserted with `textContent`.

## GitHub Pages deployment checklist
1. Enable **Enforce HTTPS** in Settings → Pages.
2. Treat every deployed repository file as public; never commit secrets/private files.
3. If a custom domain is added later, verify it in GitHub and avoid wildcard DNS.
4. Re-audit before adding analytics, forms, embeds, APIs, third-party scripts, accounts, or storage.

## Stronger response headers
If the hosting layer supports custom response headers, add real HTTP headers in addition to the
in-document CSP/referrer policy:

```text
Content-Security-Policy: default-src 'none'; script-src 'self'; script-src-attr 'none'; style-src 'self'; style-src-attr 'none'; img-src 'self' data:; font-src 'self'; connect-src 'none'; media-src 'none'; object-src 'none'; frame-src 'none'; worker-src 'none'; manifest-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'; upgrade-insecure-requests
Referrer-Policy: no-referrer
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()
```

`frame-ancestors`, X-Frame-Options, X-Content-Type-Options, and Permissions Policy must be sent as
HTTP response headers; unsupported `<meta>` imitations should not be used.

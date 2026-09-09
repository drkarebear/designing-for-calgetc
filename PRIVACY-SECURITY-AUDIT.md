# Designing for Cal-GETC — Privacy & Security Audit

**Audit date:** September 8, 2026  
**Audited build:** V10  
**Hardened build:** V11

## Executive assessment
Overall risk is **low** for the current feature set. The site is static and does not process
visitor-submitted information. There is no backend, database, authentication, dependency tree,
third-party executable code, analytics, advertising, or persistent browser storage.

The V11 work is primarily defense-in-depth and privacy minimization.

## Findings remediated
1. **No CSP:** added a restrictive same-origin CSP.
2. **Default referrer behavior:** changed to `no-referrer`; external links also use `noreferrer`.
3. **Area choice in query string:** changed `?area=1a` to `#area=1a`.
4. **Dynamic `innerHTML`:** removed; dynamic checker content now uses DOM nodes and `textContent`.
5. **Unused source-master graphics in production:** removed.
6. **Image metadata minimization:** deployment PNGs re-encoded without nonessential metadata.
7. **No public privacy page:** added `privacy.html`.
8. **Inline styles:** removed so CSP can block inline style attributes.
9. **Duplicate redirect indexing:** compatibility redirect pages now use `noindex,follow`.

## Positive findings
- No API keys, passwords, tokens, or private keys detected.
- No forms, accounts, uploads, user-generated content, or sensitive transactions.
- No third-party scripts, stylesheets, fonts, images, iframes, or widgets.
- No cookies, localStorage, sessionStorage, service worker, or tracking.
- No fetch, XHR, WebSocket, or beacon calls.
- No package/dependency manifests or server-side executable code.
- No source maps, backups, logs, or dotfiles.
- External links use HTTPS.
- Checker area values are allowlisted.

## Residual hosting-level items
The in-document CSP cannot provide `frame-ancestors`, and HTML cannot reliably set response headers
such as X-Frame-Options, X-Content-Type-Options, or Permissions-Policy. If the host/CDN supports
custom headers, add them there. Clickjacking impact is low here because the site has no sensitive,
state-changing actions.

## Accepted tradeoff
`karencrozer@gmail.com` is public by design so accessibility and security issues have a direct contact route.
That can attract spam. If spam becomes burdensome, use a dedicated forwarding alias rather than
hiding the address in an inaccessible way.

## Re-audit before adding
Analytics, ads, forms, surveys, uploads, user accounts, cloud APIs, serverless functions, external
JavaScript, embeds, maps, videos, remote search, cookies, browser persistence, or service workers.

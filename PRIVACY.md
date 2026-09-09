# Privacy Notes for Maintainers

Public statement: `privacy.html`

The production site currently has:
- no analytics, ads, cookies, localStorage, sessionStorage, service worker, forms, uploads, accounts,
  third-party scripts/fonts/CDNs, fetch/XHR/WebSocket/beacon calls, or saved checker history;
- area preselection via URL fragment (`#area=...`) rather than query string;
- a public contact email, `karencrozer@gmail.com`, intentionally exposed for accessibility/privacy/security feedback.

Hosting providers necessarily process routine network information to deliver a public website.
Do not promise that no data exists anywhere; the public statement instead describes what the site
itself does and does not collect.

Update the public statement before adding any data-processing feature.

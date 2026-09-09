# Designing for Cal-GETC

Faculty-facing plain-language guide to Cal-GETC course design and course-outline review.

## v2 prototype

This build improves the homepage architecture and begins the next site sections.

### Homepage changes
- Uses the actual California ridge favicon and mountain artwork.
- Clarifies immediately that the audience is CCC faculty, not students.
- Adds a visible current-version signal for Cal-GETC 1.4.
- Prioritizes a three-step faculty workflow: Find My Area → Design My Course → Check My COR.
- Moves Standards, Changes, and Gray Areas into supporting resources instead of giving all six tasks equal weight.
- Adds a source-first explanation so official requirements, reviewer guidance, and faculty interpretation stay distinct.
- Removes the nonfunctional search control.
- Replaces the duplicated desktop top navigation with a smaller utility bar.
- Adds a responsive, no-JavaScript mobile menu.
- Moves shared styles into `assets/css/site.css` so the site can scale beyond one page.

### New page framework
- `find-my-area.html`
- `design-my-course.html`
- `check-my-cor.html`
- `standards.html`
- `changes.html`
- `faqs.html`
- `sources.html`
- `about.html`
- `accessibility.html`

The content-heavy pages are intentionally framed as source-grounded shells until the current standards, reviewer notes, COR guidance, and relevant CCN materials are added to the project.

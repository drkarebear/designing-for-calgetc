# Designing for Cal-GETC — WCAG 2.2 Accessibility Review

**Review date:** September 8, 2026  
**Target:** WCAG 2.2 Level AA  
**Scope:** Designing for Cal-GETC V9 static site, including area pages, navigation, the Cal-GETC area checker, responsive styles, and shared page templates.

## Important status statement

This review is an accessibility engineering review, not a third-party certification of conformance.
The site is designed toward WCAG 2.2 Level AA. Full conformance should continue to be evaluated
with manual assistive-technology and disabled-user testing as the site changes.

## Accessibility feedback

Accessibility issues can be reported to **Karen Crozer** at **karencrozer@gmail.com**.

The site is an **independent faculty-created resource** and is **not affiliated with or endorsed by
the California Community Colleges Chancellor's Office**.

## Issues reviewed and fixes made

### 1. Perceivable

- **1.1.1 Non-text Content:** Decorative mountain, poppy, and brand artwork continues to use empty
  alternative text or CSS backgrounds when it adds no informational content.
- **1.3.1 Info and Relationships:** Visually prominent source-box titles were converted from bold text
  to semantic headings. Evidence tables now include captions and explicit column-header scope.
- **1.3.2 Meaningful Sequence:** The interactive checker was reordered so the DOM reading sequence
  matches the visible numbered sequence.
- **1.4.3 Contrast (Minimum):** Primary text, muted text, purple, navy, teal, and labeled source-pill
  combinations were checked against their intended backgrounds.
- **1.4.10 Reflow:** Global clipping on `<main>` was removed. Responsive single-column layouts remain
  in place; data tables may use their own horizontal scrolling when necessary.
- **1.4.11 Non-text Contrast:** Selects and other bordered controls now use a darker control border
  with sufficient contrast against white backgrounds.
- **1.4.12 Text Spacing:** Content containers use minimum heights rather than rigid text heights and
  permit wrapping/reflow.

### 2. Operable

- **2.1.1 Keyboard:** Interactive functionality uses native links, buttons, selects, details/summary,
  and checkboxes.
- **2.4.1 Bypass Blocks:** A skip-to-main-content link is present on substantive pages and redirect
  fallback pages.
- **2.4.6 Headings and Labels:** Heading hierarchy was repaired on area pages; form controls have
  programmatic labels.
- **2.4.7 Focus Visible:** Explicit focus-visible styling now covers links, buttons, summaries,
  inputs, selects, and textareas.
- **2.4.11 Focus Not Obscured (Minimum):** Scroll padding/margins were added so sticky navigation is
  less likely to cover focused or anchored content.
- **2.5.8 Target Size (Minimum):** Major controls are 44 CSS pixels or larger where practical;
  checkboxes and small subarea controls were enlarged.
- **Reduced motion:** Smooth scrolling is disabled when `prefers-reduced-motion` is requested, and
  hover transforms are suppressed.

### 3. Understandable

- **3.2.2 On Input:** Area-jump selects no longer navigate immediately when the value changes.
  Users explicitly activate a **Go to area** button.
- **3.2.3 Consistent Navigation:** Shared site navigation remains in a consistent order.
- **3.2.6 Consistent Help:** Accessibility contact information now appears in the same footer location
  across substantive pages.
- **3.3.2 Labels or Instructions:** Selects and checker controls retain associated labels/instructions.

### 4. Robust

- **4.1.2 Name, Role, Value:** Native HTML controls are used wherever possible.
- **4.1.3 Status Messages:** The area checker uses live regions for dynamically updated area/status
  information without forcing focus changes.

## WCAG 2.2 criteria that are not materially triggered by this site

The current site does not use dragging interactions, authentication, CAPTCHA/cognitive-function
tests, repeated data-entry workflows, timed sessions, audio/video, flashing content, or complex
pointer gestures. Those criteria should be reassessed if those features are added later.

## Manual testing still recommended

Before describing the site as formally conformant, perform periodic manual checks with:
- VoiceOver + Safari on macOS/iOS
- NVDA + Firefox or Chrome on Windows
- Keyboard-only navigation at desktop and mobile breakpoints
- 200% and 400% zoom/reflow
- Windows High Contrast / forced-colors mode
- A screen magnifier
- Disabled faculty users when possible

External websites and official PDFs linked from Designing for Cal-GETC are maintained by other
organizations and are outside this site's accessibility control.


## V10 cognitive-accessibility and usability pass

A second pass focused on usability at narrow/reflowed layouts and on screen-reader/keyboard efficiency, especially on four representative experiences: Home, Areas & Standards, Area 1A, and Check My Cal-GETC Area.

Changes include:
- reduced decision density on the homepage by placing the eligibility pre-check in an explicit disclosure;
- shortened task-card copy and top utility language;
- replaced code-only subarea links with code + full area name;
- added a mobile/narrow-layout “On this page” disclosure to long area guides;
- reordered Area 1A so the general standard comes before ENGL C1000-specific material;
- moved ENGL C1000, writing-minimum gray areas, and version-history detail into progressive disclosures;
- corrected nested heading levels inside Area 1A cards;
- converted checkbox sections in the area checker to fieldset/legend groups;
- stopped announcing checklist progress after every checkbox change, reducing screen-reader chatter;
- shortened very large headings at <=420 CSS px to reduce magnification/reflow burden.

Responsive CSS was reviewed at the 640 CSS-pixel and 320 CSS-pixel breakpoints used as practical equivalents for high-zoom/reflow testing. This source-based review does not replace final manual browser zoom and assistive-technology testing.


## September 2026 follow-up: density and link-group clarity
A later usability pass addressed clustered adjacent links and controls that were technically operable
but visually cramped. The Areas directory now presents subarea navigation as semantic lists of
full-width, named choices rather than adjacent inline links. Group overview calls to action also
include the subarea names rather than relying on codes alone. This improves recognition, zoom/reflow
behavior, target separation, and graceful rendering if styles fail to load.

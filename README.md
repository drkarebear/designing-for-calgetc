# Designing for Cal-GETC — V3

Faculty-first static prototype grounded in the uploaded statewide source packet.

## Major V3 changes
- Homepage organized around four faculty tasks.
- Merged Find My Area + Understand the Standards into **Areas & Standards**.
- Added **Approval & ASSIST**.
- Added baseline Cal-GETC eligibility pre-check.
- Added an 8-step course-design workflow.
- Added interactive, local-only COR checklist.
- Added detailed **Area 1A** prototype page.
- Added area-page architecture for the remaining Cal-GETC areas.
- Added four source claim labels: Cal-GETC Standard, Title 5/COR, Reviewer Guidance, Faculty Design Note.
- Preserved old find-my-area.html and standards.html as redirects.

## Source note
The uploaded packet includes the **Guiding Notes Summary of Changes**, not the complete current Guiding Notes. Reviewer-detail content is therefore limited to what the uploaded summary directly supports. Expand the remaining area pages after adding the complete Guiding Notes.


## V4 updates
- Completed all eleven Cal-GETC area guides from the official Version 1.4 standards.
- Added plain-language good-fit / not-fit screening cues, clearly labeled as Faculty Design Notes.
- Added a consistent COR evidence map to every area page.
- Added an area-to-area jump menu and stronger next-step navigation.
- Improved the Areas index with meaningful descriptions rather than repeated placeholder copy.
- Added area navigation and reset controls to the COR checklist.
- Kept reviewer claims limited to what is supported by the uploaded Guiding Notes Summary of Changes; the full current Guiding Notes should still be added before deeper reviewer-specific area advice.


## V11 changes
- Expanded Area 1A with a clear Cal-GETC vs. ENGL C1000 companion comparison.
- Added a faculty-facing formal / context-dependent / informal writing discussion framework for C1000.
- Added a caution explaining that Area 1B explicitly permits process/peer/informal writing in its 5,000-word total while Area 1A does not state the same rule.
- Rebuilt Check My Cal-GETC Area so the area selector dynamically adds area-specific checklist items instead of navigating away.
- Area pages now preselect their area when sending faculty to Check My Cal-GETC Area.
- Added Print / Save PDF support without uploading or storing faculty data.


## V11 naming and scope refinement
- Renamed the primary checker from **Check My COR** to **Check My Cal-GETC Area**.
- Primary URL is now `check-my-area.html`.
- `check-my-cor.html` remains as a compatibility redirect.
- Clarified that the checker is a Cal-GETC readiness/gap-finding tool, not a complete Title 5 or local curriculum compliance audit.


## V11 faculty-usability pass
- Added a homepage "Already know your area?" jump menu.
- Tightened homepage copy while retaining the task-based entry points.
- Changed the checker to an area-first flow: no long checklist appears until faculty choose an area.
- Reordered the checker around Cal-GETC readiness: baseline eligibility → area requirements → reviewer visibility → readings/materials.
- Moved broader Title 5/COR context into a separate disclosure so the Cal-GETC tool does not imply a full compliance audit.
- Removed the general lab-manual check from non-lab proposals; it remains in Area 5C.
- Marked OER review as conditional and excluded it from the core progress count.
- Added clearer next steps back to the area guide and Approval & ASSIST.


## V11 area hierarchy
- Added grouped overview pages for Area 1, Area 3, and Area 5.
- Rebuilt Areas & Standards around the six numbered Cal-GETC areas rather than presenting all subareas as equal-level choices.
- Added explicit subarea relationships and sequencing/combination notes.
- Clarified on Area 5 that 5C is a laboratory requirement and does not necessarily require a third course.
- Added parent-area breadcrumbs and overview links to 1A/1B/1C, 3A/3B, and 5A/5B/5C.
- Updated area jump menus to include the grouped overview pages.


## V11 accessibility and independence pass
- Performed a sitewide WCAG 2.2 Level AA-oriented source review.
- Repaired semantic heading structure in the area guidance boxes.
- Added captions and column-header scope to COR evidence tables.
- Replaced automatic select-based page navigation with an explicit **Go to area** button.
- Increased interactive-control border contrast and expanded visible focus styling.
- Increased checkbox and small navigation target sizes.
- Removed global main-content overflow clipping and added scroll offsets for focused/anchored content near sticky navigation.
- Reordered the Cal-GETC checker so its DOM/reading order matches its visible numbered sequence.
- Added a consistent accessibility feedback mechanism: karencrozer@gmail.com.
- Added explicit sitewide language that the project is independent and is not affiliated with or endorsed by the California Community Colleges Chancellor's Office.
- Expanded the public Accessibility page.
- Added `ACCESSIBILITY-AUDIT.md` documenting the review and remaining manual-testing recommendations.


## V11 cognitive-accessibility pass
- Simplified the homepage and made the eligibility pre-check optional via progressive disclosure.
- Replaced ambiguous code-only subarea buttons with full subarea names.
- Added narrow-layout “On this page” navigation to every detailed area guide.
- Reworked Area 1A for progressive disclosure and corrected nested heading semantics.
- Converted checker groups to fieldset/legend semantics and reduced live-region chatter.
- Improved very narrow-layout heading sizing and maintained 44px-oriented touch targets.


## V11 privacy and security hardening
- Restrictive Content Security Policy on every HTML page.
- `no-referrer` policy plus `noreferrer` on external links.
- Checker preselection moved from query strings to URL fragments.
- Dynamic `innerHTML` sinks removed.
- Public Privacy & Security page added.
- SECURITY.md, PRIVACY.md, and PRIVACY-SECURITY-AUDIT.md added.
- Unused source-master graphics removed from production.
- Production PNGs re-encoded without nonessential metadata.
- Inline styles removed for strict CSP compatibility.
- Redirect stubs marked `noindex,follow`.

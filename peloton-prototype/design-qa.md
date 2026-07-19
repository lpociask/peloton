# Design QA — Peloton #01 multiplatform reading flow

## Evidence

- Selected visual language: `/Users/lpociask/.codex/generated_images/019f7b88-a3d5-7c02-884d-370c9244a19f/exec-3c260911-d39a-4c4f-9fa8-f5ec008f1762.png`
- Structural moodboard: `/Users/lpociask/Desktop/Koncepcja aplikacji magazynowej Relour.png`
- Generated flow source: `/Users/lpociask/Documents/magazyny/peloton-prototype/reference-flow-mock.png`
- Normalized contents source: `/Users/lpociask/Documents/magazyny/peloton-prototype/reference-contents-390x844.png`
- Normalized article source: `/Users/lpociask/Documents/magazyny/peloton-prototype/reference-story-390x844.png`
- Browser-rendered contents: `/Users/lpociask/Documents/magazyny/peloton-prototype/implementation-contents-390x844-final.jpg`
- Browser-rendered article opening: `/Users/lpociask/Documents/magazyny/peloton-prototype/implementation-story-390x844-final.jpg`
- Final combined comparison: `/Users/lpociask/Documents/magazyny/peloton-prototype/comparison-flow-final.jpg`
- Responsive comparison board: `/Users/lpociask/Documents/magazyny/peloton-prototype/qa-responsive-comparison.html`
- Responsive QA captures: `/Users/lpociask/Documents/magazyny/peloton-prototype/responsive-design-qa-lower-final.jpg` and `/Users/lpociask/Documents/magazyny/peloton-prototype/responsive-design-qa-story-final.jpg`
- Desktop before/after source pair: `/Users/lpociask/Documents/magazyny/peloton-prototype/public/qa/before-desktop-1440x900.jpg` and `/Users/lpociask/Documents/magazyny/peloton-prototype/public/qa/desktop-cover-1440x900.jpg`
- Final platform captures: `/Users/lpociask/Documents/magazyny/peloton-prototype/public/qa/phone-*.jpg`, `/Users/lpociask/Documents/magazyny/peloton-prototype/public/qa/tablet-*.jpg`, and `/Users/lpociask/Documents/magazyny/peloton-prototype/public/qa/desktop-*.jpg`
- Responsive evidence: `/Users/lpociask/Documents/magazyny/peloton-prototype/responsive-contents-320x700.jpg` and `/Users/lpociask/Documents/magazyny/peloton-prototype/responsive-story-320x700.jpg`
- Primary viewports: phone 390 × 844 px, tablet 834 × 1194 px, desktop 1440 × 900 px
- Additional resilience checks: 320 × 568, 412 × 915, 844 × 390, 1194 × 834, and 1280 × 720 px
- States: issue #01 table of contents and first fold of “Przed świtem”
- Local implementation: `http://localhost:4173/`

The Image Gen board produced 493 × 923 source panels. Each panel was normalized to the required 390 × 844 implementation viewport for same-frame comparison. Because that normalization changes the source’s horizontal and vertical scale by different amounts, exact glyph metrics were not treated as pixel truth; hierarchy, relative measure, fold position, spacing rhythm, palette, and asset direction were compared directly.

The combined comparison keeps both 390 × 844 states at native size, with the masthead, metadata, story copy, image crops, CTA, article title, lead, controls, and first-fold transition clearly readable. A separate focused-region composite was therefore not needed.

## Comparison History

### Pass 1 — blocked

Evidence: `/Users/lpociask/Documents/magazyny/peloton-prototype/comparison-flow-pass1.jpg`

- [P2] Article-opening display hierarchy was too quiet. The first implementation used a 58 px title and moved into the illustration earlier than the source, reducing the first-spread feeling.
  - Location: `.article-opening h1`, `.article-opening`.
  - Fix: increased the display title to 74 px at 390 px, increased the opening inset and rule spacing, and kept the dedicated illustration deliberately cut by the fold.
- [P2] The contents image rail was visually underweighted. Initial 74 px thumbnails felt more like utility thumbnails than editorial art.
  - Location: `.story-list` and `.story-list__thumb`.
  - Fix: increased the image rail to 90 px while preserving readable copy measure and ruled-row rhythm.

### Final pass — passed

Post-fix evidence: `/Users/lpociask/Documents/magazyny/peloton-prototype/comparison-flow-final.jpg`

The contents hierarchy, image rail, orange CTA, article title, fold position, toolbar, and illustration now preserve the intended editorial weight at the true 390 × 844 viewport. No actionable P0, P1, or P2 mismatch remains.

### Responsive pass 1 — blocked

- [P1] The entire publication was constrained to `390 × 844 px`, leaving a centered iPhone card and dark surround at every larger viewport.
  - Location: `.mobile-prototype` and `.prototype-stage`.
  - Fix: made the publication shell fill `100vw × 100dvh`, removed the device-frame shadow, and introduced explicit phone, tablet, and desktop compositions.
- [P2] At desktop height 720 px, fixed 160 px story thumbnails overflowed the contents sheet and competed with the reading CTA.
  - Location: desktop `.story-list__thumb`, row padding, and `.contents-screen` rhythm.
  - Fix: added a height-aware desktop composition with 128 × 126 px thumbnails, tighter rows, and a taller usable sheet.
- [P2] The first low-height landscape rule made the contents canvas taller than the phone viewport, which could place the CTA outside the clipped shell.
  - Location: the 768–1199 px / max-height 600 px contents layout.
  - Fix: replaced the artificial minimum height with a native horizontal two-column contents composition and a reachable 250 px CTA rail.

### Responsive final pass — passed

The combined comparison places the approved mobile source, the original desktop failure, and the final phone/tablet/desktop cover, contents, and reader states in shared comparison frames. Typography, paper texture, illustration language, rule weight, orange actions, and editorial hierarchy remain consistent while each viewport uses its own composition. No actionable P0, P1, or P2 mismatch remains.

## Required Fidelity Surfaces

- Fonts and typography: Newsreader remains the display face and Inter handles UI metadata. The contents title, story hierarchy, two-line article title, lead, byline, reading time, line heights, tracking, and optical weights follow the source. Text wraps intentionally at 390 and 320 px without clipping.
- Spacing and layout rhythm: the contents screen uses a 54 px reader bar, physical ruled sheet, three equal story rows, folio, and persistent 52 px reading CTA. The article uses a 70 px sticky toolbar, 2 px progress line, generous opening composition, and a full-width image crossing the fold. Borders remain thin and shadows restrained.
- Colors and visual tokens: cream paper, near-black ink, muted olive, taupe, and burnt orange map to the selected cover. Contrast remains strong and the paper texture does not interfere with small copy.
- Image quality and asset fidelity: all visible editorial art is real raster work. The 600 × 1500 contents triptych and 1200 × 2133 article illustration match the selected flat collage, faceless figures, monumental bicycle geometry, matte gouache, cut-paper construction, and screen-print grain. No CSS drawings, custom SVG art, gradients, or placeholders are used.
- Copy and content: all Polish issue metadata, story titles, descriptions, reading times, lead, byline, caption, and navigation labels are coherent in the standalone prototype. The reading times intentionally use the product data rather than Image Gen’s draft values.
- Icons: all controls use the same Phosphor family at consistent 18–25 px optical sizes. Back, export/share, bookmark, clock, menu, close, and directional arrows remain aligned inside minimum 44 × 44 px controls.
- Responsiveness: the shell fills the viewport without a simulated-device surround. Below 768 px it preserves the approved single-column phone flow; 768–1199 px uses tablet spreads; 1200 px and above uses a three-part cover and full editorial desktop spreads. Portrait, landscape, low-height, and 412 px Android checks show no horizontal overflow, clipped control, or missing CTA.
- Accessibility: one `h1` per state, semantic `ol`, buttons for full interactive rows, `time`, `article`, `figure`, and `figcaption`; labeled controls; focus transfer on screen changes; focus trap and return in the menu; `aria-pressed` bookmarks; live share result; reduced-motion handling; and a real progressbar with value attributes.

## Findings

No actionable P0, P1, or P2 findings remain.

## Open Questions

None for the cover → contents → first-story journey.

## Primary Interactions Tested

- Open issue #01 from the cover.
- Return from contents to the cover.
- Open each story row and the “Czytaj od początku” CTA.
- Return from the article to the contents.
- Save a story and confirm the state persists when leaving and reopening it.
- Share using the browser clipboard fallback and confirm the live status message.
- Move to the next story from the end-of-article control.
- Open and close the magazine menu with focus returned to its trigger.
- Verify cover → contents → reader at phone, tablet, desktop, phone-landscape, and low-height desktop sizes.
- Verify the bookmark `aria-pressed` state, clipboard share status, reading-progress change from 4% to 54%, and reset to 4% on the next story.
- Console errors and warnings checked: none.

## Implementation Checklist

- [x] Preserve the selected cover and design tokens.
- [x] Build a non-feed editorial contents screen.
- [x] Build a dedicated first-spread article opening.
- [x] Add project-local raster artwork for all new visible imagery.
- [x] Keep the full reading path interactive.
- [x] Verify 390 × 844 and 320 × 700 browser states.
- [x] Replace the fixed phone frame with adaptive phone, tablet, and desktop layouts.
- [x] Verify 834 × 1194, 1194 × 834, 1440 × 900, 1280 × 720, 412 × 915, and 844 × 390 browser states.
- [x] Put source and implementation captures into shared comparison boards and inspect all three core screens.
- [x] Verify production build and console output.

## Follow-up Polish

- [P3] A production art director could commission story-specific opening illustrations for articles 02 and 03; the prototype currently reuses selected crops from the issue triptych for those secondary stories.

final result: passed

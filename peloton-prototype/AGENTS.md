# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

## Durable Product Decisions

- The publication shell is adaptive, not a fixed phone mock: phone `<768px`, tablet `768–1199px`, desktop `>=1200px`.
- Phone keeps the approved single-column composition; tablet and desktop use editorial spreads without a dark device frame.
- The selected visual target is the third image from the latest Peloton cover exploration: `/Users/lpociask/.codex/generated_images/019f7b88-a3d5-7c02-884d-370c9244a19f/exec-3c260911-d39a-4c4f-9fa8-f5ec008f1762.png`.
- Keep the restrained cream-paper mobile layout, high-contrast editorial serif masthead, thin black rules, bordered physical cover, and orange primary action.
- Peloton illustration language is flat editorial collage: faceless figures, monumental scale, black/taupe/off-white shapes, vivid orange accent, matte gouache, cut-paper geometry, and coarse screen-print grain.
- The chosen first-issue cover concept uses an oversized bicycle wheel as an eclipse, an orange sun at the hub, a cyclist viewed from above, and cropped chain links.
- Avoid photorealism, glossy 3D, gradients, neon, glassmorphism, generic cards, ads, badges, and feed-like layouts.
- The issue table of contents is a physical editorial sheet: ruled story rows, a narrow right-side illustration rail, orange folio accents, and an orange bottom reading CTA. It must not become a feed of rounded cards; issue #01 contains five rows.
- Every Peloton issue contains exactly five editorial stories, each assigned to one of the five specialist writing agents.
- Article openings are composed like a first magazine spread: sticky reader toolbar, slim progress line, metadata, oversized two-line serif title, short olive rule, editorial lead/byline, then a full-width illustration deliberately cut by the viewport fold.
- Use `/public/assets/peloton-contents-triptych.png` for issue-section vignettes and `/public/assets/peloton-story-dawn.png` as the dedicated opening illustration for “Przed świtem.”
- Every issue contains one longform cyclist portrait. The first profile is Michał Kwiatkowski, with a dated editorial forecast clearly separated from verified facts.
- Core articles target 10–15 minutes of calm reading and combine original reportage, reflective cycling culture, and technically checked practical detail.
- Longform stories use several paced editorial interludes rather than one repeated decorative image. Inline art is lazy-loaded through WebP with PNG fallback and alternates between wide, standard, and portrait layouts.
- Issue #01 includes a fifth, 13-minute profile of Szymon Gruchalski, framed as one of Poland's leading cycling photographers. It covers his own road riding and a photographic language in which the cyclist is not always the principal subject.
- The Kwiatkowski profile includes verified, privacy-respecting sections on family, the Veloart project, the historic 2015 Warsaw–Kampinos ride, and Polish fan support. Warsaw is described as a social address, not an unverified permanent training base.
- Issue #02 uses the selected third August-cover concept at `/public/assets/peloton-cover-02-po-tourze-option-3.jpg`: a surreal pearl-white helmet as a gateway for riders leaving the Tour behind.
- Until issue #02 has content, show it below the current issue as a static “coming soon” preview. It must not be a button, link, disabled control, or route into issue #01.
- Promotions for the publisher’s cycling apps belong in one restrained “Od wydawcy” colophon after the issue #02 preview, never as banners, popups, cards, or repeated interruptions inside longform stories. Keep them clearly labeled, bilingual, App Store-only, and typographically integrated with the magazine.
- The owner is editor-in-chief of both Peloton and Rowki and is the sole author of every editor’s letter. Five fictional specialist writing agents produce the five issue stories under the editor-in-chief’s direction; they never write an editor’s letter, imitate the editor-in-chief’s voice, or publish without approval.
- Keep the “Redaktorzy” destination visible as a persistent text tab in the cover masthead; it must not be discoverable only through the slide-out menu.

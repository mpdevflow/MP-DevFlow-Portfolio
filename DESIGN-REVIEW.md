# Design review — 2026-10-30

Direction B, Product field journal. Approved in chat, including senior-led positioning, DinkOS as the lead project, and the redesign of all existing routes. No deployment authorized.

## Step 7 critique gate

| Category                      | Score | Evidence and decisions                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Distinctiveness               | 4/5   | Logo-swap: DinkOS's double-booking problem and usage evidence, MP's direct involvement, numbered field notes, and Brief / Delivered make this specific to MPDevFlow. Source test: no Mercury or Wired brand assets, colors or literal layouts. Squint test: short left-led hero, asymmetric work spread, ruled services, delivery sequence and marginal notes. |
| Concept fidelity              | 5/5   | Numbered entries, fine rules, project annotations and the useful Brief / Delivered control all express a working journal of shipped products.                                                                                                                                                                                                                  |
| Hierarchy and copy            | 4/5   | One orange conversion action per action group, secondary text links, work immediately after the hero. Senior involvement, clear scope, communication and double-booking prevention give the copy concrete meaning. Existing legal text is preserved.                                                                                                           |
| Token fidelity and craft      | 4/5   | Root tokens across new layouts and preserved legal/form surfaces. Reviewed fluid typography, mobile stacking, selected states, focus, hover, active and applicable disabled styles. The original tablet wrapping defect is fixed by collapsing nav below 1024px.                                                                                               |
| Accessibility and performance | 4/5   | Contrast checks, labelled form fields, announced validation, named modal, focus trap/restoration, Escape, touch controls, reduced-motion behavior, reserved image frames, optimized WebP assets and lazy secondary images. No full Lighthouse or assistive-technology audit claimed.                                                                           |

All scores are at least 4 after fixes.

## Visual verification

Inspected rendered homepage and all ten routes across 375, 768 and 1440px captures, including project pages and legal pages. Reviewed homepage full-page composition, Brief state, form validation, and mobile calendar container. Browser checks report no horizontal overflow at these widths, one H1 per route, and no broken loaded images. Additional work images load when their native disclosure is opened.

Screenshots are QA artifacts under `/private/tmp/mpdevflow-*.png` and the ignored `.playwright-mcp/` directory. The screenshot tool sometimes captured a transient navigation scroll position; stable single-page captures and DOM header bounds were also reviewed. The site uses immediate route-top restoration and deliberate smooth anchor navigation (automatic under reduced motion).

## Functional verification

- Brief / Delivered changes both visible content and `aria-pressed` selection, with no overflow or height change at 375/768/1440px.
- Mobile menu routes to Services and closes; cross-page Work and Studio destinations remain real hash links.
- Booking opens from shared layout and page calls to action. Focus enters the dialog, Tab and Shift+Tab wrap, Escape closes, and focus restores.
- Empty inquiry produces the three expected field errors. Valid inquiry builds Gmail and mail-app drafts with the entered project details. Browser interception verified the destinations without opening or sending messages.
- The existing Calendly destination renders its date picker; a direct-calendar fallback link is also available. No booking submitted.
- Reduced-motion emulation yields `scroll-behavior: auto` and zero transition duration. Fixed the old HTML `scroll-smooth` class that overrode the reduced-motion rule.
- Each route updates its title, description, social tags and canonical URL. Replaced the existing non-updating metadata behavior with a direct head update while preserving the SEO component's API.
- Brand text contrast: ink/surface 16.69:1; secondary/surface 6.87:1; white/orange primary 5.18:1; accent links/surface 5.18:1; input border/surface 3.49:1.

## Assets and evidence

- DinkOS: current public-site capture at `https://dinkos.co`, not a private operational screen. The double-booking focus, active clients and 500+ bookings/month are confirmed by the user in chat; no fabricated technology stack, personal role or guaranteed zero-conflict outcome is claimed.
- GameLobbyPH: optimized copy of the pre-existing tracked portfolio interface image. Its public site now redirects to sign-in, so the new sign-in capture was replaced with that existing project asset.
- Supra Data: current public-site capture at `https://supra.com/data/`.
- Serbisyo Barangay: optimized existing project image, explicitly labelled as a concept.
- Diwata AI: existing logo with contain fit.
- GameLobbyPH's existing detailed features, six-week timeline, outcomes and client feedback are retained in the shared case-study design. No new customer quote, identity or business result was invented.

## Checks and limitations

Final checks passed: `pnpm build`, `pnpm exec tsc --noEmit` and `pnpm test --run` (eleven tests). `git diff --check` is clean. The optional `@google/design.md` linter is not installed; no package was fetched solely to lint the design document. Native CSS/Markdown structure and tokens were reviewed directly.

The live calendar and public project destinations remain third-party services. No deployment, remote publication, form sending, or appointment submission was performed.

## Project order update

Applied the requested order: DinkOS, Serbisyo Barangay, Diwata AI, Supra Data, GameLobbyPH. The supporting project now reads its accessible label, category and description from the selected project, so the new Serbisyo Barangay entry does not inherit gaming copy. Reviewed the expanded work section at 375, 768 and 1440px; all five numbered entries appear in order without horizontal overflow. Step 7 scores remain 4/5, 5/5, 4/5, 4/5 and 4/5 respectively; the established composition, signature interaction and tokens are preserved. Build and whitespace checks passed.

## Approved UI detail fixes

Replaced fragmented text decoration with a single continuous underline spanning label, gap and arrow on shared text links. The booking close control is now a centered, non-shrinking 44×44px circle. Brief / Delivered segments are 32px tall (42px outer frame), with transparent expanded hit areas retaining 44px touch height. Removed the selected-work padding exception so its divider spacing matches Services: 40px on desktop/tablet and 32px on mobile.

Reviewed screenshots of links, work sections and the dialog at 375, 768 and 1440px. Browser assertions confirm equal close-button dimensions, compact toggle heights, matching section spacing and no horizontal overflow. Verified keyboard toggle selection, expanded hit-area clicking and dialog closing. Step 7 scores remain 4/5 distinctiveness, 5/5 concept fidelity, 4/5 hierarchy/copy, 4/5 token fidelity/craft and 4/5 accessibility/performance. Build, TypeScript, all eleven existing tests and whitespace checks pass.

## Unified spacing for sections 1–6

Following explicit user confirmation, all six numbered homepage sections now share one CSS rule: 80px top/bottom padding at desktop and tablet sizes, 32px on mobile, and no horizontal inset within the content container. Removed the hero's earlier 24/32px vertical padding and 16px desktop inset. This supersedes the earlier 40px selected-work/services spacing decision.

Reviewed full-page screenshots at 375, 768 and 1440px. Browser measurements confirm identical top/bottom padding, zero outer margins, and aligned chapter left edges across all six sections at each width. No horizontal overflow. Step 7 scores remain at least 4/5: distinctiveness 4, concept fidelity 5, hierarchy/copy 4, token fidelity/craft 4, accessibility/performance 4. Production build and whitespace checks pass. Existing non-homepage section spacing is preserved.

## Approved MP favicon — 2026-10-31

Applied the user's selected linked MP monogram to the existing SVG favicon. The mark uses custom vector paths, cream and burnt orange on charcoal, and a shared M/P stem. The site wordmark is preserved. Added a version query to the existing icon reference to refresh cached copies. Inspected the selected preview at 16/24/32/48px and the actual built SVG at 256px; verified valid SVG, no font dependency, and matching source/build output. No page layout or interaction changes. Step 7 scores remain at least 4/5 across all five categories. Production build and whitespace checks pass. Changes are local; no push or deployment performed.

## Approved brand and SEO rollout — 2026-10-31

Adopted the selected MP monogram as the shared brand mark beside the existing MPDevFlow wordmark in the header and footer. The lockup uses the existing 32px size, 12px gap and 44px link target. The icon is decorative beside one named home link. Exported matching 512px PNG logo and 180px touch icon. The new 1200×630 share image uses the same mark, cream canvas, charcoal text, burnt-orange accent, editorial typography and existing headline; its editable source is `design/brand-share.html`.

`src/data/seo.ts` now owns metadata for all ten public routes, including concise project descriptions. The Vite plugin in `scripts/seo-html.ts` writes page-specific titles, descriptions, canonical URLs, Open Graph/Twitter tags and Organization/WebSite/WebPage data into HTML before JavaScript runs. Client navigation reads that same catalog and updates the existing tags without duplication. Organization data references the approved PNG logo; no registered-trademark claim or invented social account was added. The sitemap is generated from the route catalog, including Serbisyo Barangay and DinkOS, without stale or fabricated modification dates.

Static output includes clean `.html` and directory-index forms with one canonical URL per page. This fixes a production-preview fallback found during testing, where the slashless route initially received homepage metadata. React still renders page content on the client; this change pre-generates metadata, not the full page body. Deployment must preserve the emitted files and serve them before a SPA fallback. Hosting configuration and live search-result appearance were not changed or verified.

### Verification

- Browser requests returned HTTP 200 and the expected raw title/canonical for all ten production routes. A separate JavaScript-disabled browser context confirmed DinkOS metadata and logo data remain available before app rendering.
- Verified the ten-entry production sitemap and development metadata/sitemap responses, including the previously missing Serbisyo Barangay route.
- Verified production asset responses and exact export dimensions: share image 1200×630, Organization logo 512×512, touch icon 180×180. The share image is about 50KB. Every emitted HTML file references the new share asset and contains one title and one structured-data block.
- Verified in-app DinkOS → Services → Home navigation updates title, canonical and WebPage data without duplicate tags.
- Inspected header/footer captures at 375, 768 and 1440px. Both marks load at 32×32px; no horizontal overflow. Inspected the exported share card and PNG logo directly.
- Final code checks passed: production build, TypeScript, 27 tests (16 SEO cases plus 11 existing modal cases), and `git diff --check`.

### Step 7 critique

| Category                      | Score | Evidence                                                                                                                                                                                        |
| ----------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Distinctiveness               | 4/5   | The custom linked MP mark is consistent across browser icon, site lockups and share artwork. Existing work-led composition remains intact.                                                      |
| Concept fidelity              | 5/5   | The restrained mark, ruled share card and editorial headline extend the approved product field journal.                                                                                         |
| Hierarchy and copy            | 4/5   | The wordmark stays readable, booking remains the main action, and metadata uses existing verified project context.                                                                              |
| Token fidelity and craft      | 4/5   | Lockup spacing uses existing tokens, image dimensions reserve space, artwork fits its export canvas, and responsive headers/footers remain aligned.                                             |
| Accessibility and performance | 4/5   | One accessible home-link name, decorative icon semantics, compact static assets, raw-HTML metadata and focused regression tests. Full external SEO/assistive-technology audits are not claimed. |

Implementation references: [Google Organization logo guidance](https://developers.google.com/search/docs/appearance/structured-data/organization), [Google JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics), and [Vite Plugin API](https://vite.dev/guide/api-plugin), with hook behavior checked against the installed Vite 6 code.

No commit, push, deployment or search indexing submission was performed for this rollout.

## Header/footer wordmark refinement — 2026-10-31

Following user confirmation, the shared lockup now displays the approved MP mark beside “DevFlow”, avoiding a repeated MP prefix. Its accessible name remains “MPDevFlow home”; page titles, Organization data and other full-name SEO values remain MPDevFlow. Inspected header/footer renders at 375, 768 and 1440px and verified both visible labels, both accessible home-link names, unchanged full-name metadata and no horizontal overflow. Production build and whitespace checks pass. Step 7 scores remain 4/5 distinctiveness, 5/5 concept fidelity, 4/5 hierarchy/copy, 4/5 token fidelity/craft and 4/5 accessibility/performance. Changes remain local.

## Tighter logo/text gap — 2026-10-31

Reduced the shared header/footer brand gap from 12px to the existing 8px token. Inspected renders at 375, 768 and 1440px and confirmed both computed gaps are 8px. The compact lockup retains its existing image, type, accessible name and link target. Build and whitespace checks pass. Step 7 scores remain 4/5, 5/5, 4/5, 4/5 and 4/5 across the existing five categories. Changes remain local.

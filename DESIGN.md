---
name: MPDevFlow — Product field journal
version: 1
colors:
  canvas: '#F5F2EB'
  surface: '#FFFDFA'
  surface-tint: '#F1EDE4'
  accent-soft: '#F5E6DF'
  primary: '#B94727'
  primary-hover: '#98391F'
  on-primary: '#FFFDFA'
  ink: '#1C1D19'
  secondary: '#595A52'
  hairline: '#D8D4CA'
  control-border: '#8B887E'
  night: '#1C1D19'
  night-raised: '#2D2E27'
  on-dark: '#F5F2EB'
  fog: '#D8D4CA'
  slate: '#8B887E'
typography:
  display: { fontFamily: Manrope, fontWeight: 700, fontSize: 80px, lineHeight: 1.05 }
  editorial: { fontFamily: Source Serif 4, fontWeight: 400, fontSize: 80px, lineHeight: 1.05 }
  heading: { fontFamily: Manrope, fontWeight: 600, fontSize: 48px, lineHeight: 1.12 }
  title: { fontFamily: Manrope, fontWeight: 600, fontSize: 24px, lineHeight: 1.3 }
  body: { fontFamily: Manrope, fontWeight: 400, fontSize: 16px, lineHeight: 1.65 }
  lead: { fontFamily: Manrope, fontWeight: 400, fontSize: 20px, lineHeight: 1.5 }
  meta: { fontFamily: IBM Plex Mono, fontWeight: 400, fontSize: 11px, lineHeight: 1.6 }
rounded: { none: 0px, xs: 4px, sm: 8px, md: 12px, lg: 16px, full: 9999px }
spacing:
  {
    xs: 8px,
    sm: 12px,
    md: 16px,
    lg: 20px,
    xl: 24px,
    xxl: 32px,
    huge: 40px,
    section: 80px,
    section-lg: 128px,
  }
---

| Section                                  | Source   | Notes                                                                                                         |
| ---------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------- |
| Layout / Components / Shapes / Elevation | Mercury  | Quiet product framing, 8px rhythm, tonal surfaces; approved mockup overrides centered layout and pill shape   |
| Typography / Atmosphere                  | Wired    | Editorial hierarchy; Manrope and Source Serif 4 replace proprietary faces; IBM Plex Mono for journal metadata |
| Color                                    | OWN      | Burnt orange seed #B94727; warm light ladder retains base surface roles                                       |
| Concept & motifs                         | OWN      | A working journal of products shipped: numbered entries, fine rules, marginal notes                           |
| Signature moment                         | Invented | Featured DinkOS Brief / Delivered control                                                                     |

## Overview

A senior-led product studio in the Philippines. Conversion goal: book a project call. Audience: founders, business owners, agencies, and teams needing accountable product delivery. Impression: capable, precise, human. Anti-vibe: generic agency spectacle.

Approved reference: desktop/mobile Direction B mockup supplied in chat. DinkOS replaces the illustrative lead project; use existing and captured real assets, never the concept's invented interfaces. Preserve all existing destinations and booking/email behavior.

## Research notes

- [thoughtbot](https://thoughtbot.com/): services and business problems lead into case studies and delivery expertise. Broad agency navigation can hide the actual work.
- [Metalab](https://www.metalab.com/): concise claim followed by a work-led experience; drag galleries prioritize exploration over readable project context.
- [ustwo](https://ustwo.com/): product outcomes, work, services, and studio story. A broad studio offer needs concrete evidence.
- [Hiring experiences](https://www.reddit.com/r/AppDevelopers/comments/1rsl3m2/have_you_had_any_unpleasant_experiences_working/): anecdotal concerns about disappearing developers, unclear scope, and poor communication. Use as qualitative angles, not general evidence.
- Avoid niche clichés: enormous empty heroes, wall-of-logos trust claims, moving project rails, vague agency superlatives.
- Copy angles: clear milestones; direct senior involvement; useful software already doing real operational work.
- Differentiator: DinkOS addresses double bookings and handles 500+ bookings/month for active clients (owner-confirmed 2026-10-30).
- Public DinkOS site verifies pickleball booking and operations context; it does not independently verify the booking metric. Captures show the public website, not private client data.

## Recipe decision

A / Safe: Mercury + Oura, calm conversion-oriented product framing.
B / Bold / selected: Mercury + Wired, a product field journal with legible evidence and editorial hierarchy.
C / Wildcard: Notion + DJI, a delivery notebook with technical product-showroom imagery.

Retain B because the user already approved its visual direction. The external recipe log was empty when reviewed; this pair is not a repeat. Recipe: 2026-10-30 | MPDevFlow | Mercury + Wired | working journal of products shipped | Brief / Delivered.

## Colors

Map every color to CSS variables. Warm canvas/surface/tint ladder, dark ink and secondary ladder, one orange action seed. Light-only UI; night tokens support tonal illustration or limited inverse content, not a user-selectable theme. Body text requires >=4.5:1, large text and essential UI >=3:1. Decorative dividers are not controls; inputs use control-border. White/orange contrast must be checked before delivery.

## Typography

Manrope 400/600/700 for structure; Source Serif 4 400 for selected phrases; IBM Plex Mono 400 for short numbered labels. Serif never carries controls. Sans lead phrase is tight, serif continuation is restrained and regular. Display fluid 36–80px; sections 32–48px; body 16px; caption 14px; metadata 11px. Load only needed weights with swap and stable fallbacks.

## Layout

Additional structural tokens: 72px mobile header, 44px touch target, 800px reading column, 1280px content width, 1px rule, 2px focus stroke, 4px focus offset. Type scale also includes 10px compact metadata and 36px mobile display. Responsive breakpoints are structural exceptions to the spacing scale.

Container max 1280px; desktop gutters 40px, mobile 20px. Static 80px navigation with bottom rule, collapsing below 1024px. Hero stays concise; selected work follows directly after it. Asymmetric 2:1 featured-work grid and numbered journal sections are the two primary non-standard compositions. Remaining work becomes a two-column secondary grid, then compact ruled rows. Mobile stacks all work. Breakpoints 640, 768, 1024, 1200px. CTAs never wrap; minimum 44px hit areas. Numbered homepage sections 1–6 share 80px top and bottom padding on desktop/tablet, 32px on mobile, and zero horizontal inset within the shared content container. Other page sections use their existing 40/80px rhythm; metadata uses 8/12px spacing.

## Elevation & shapes

Mostly flat. 1px dividers, 4/8px control and image radii, 12px dialog. Avoid capsule buttons and generic rounded card grids. No glow or decorative gradients. Only modal shadow is permitted for separation.

## Art direction

Real public project captures, natural color and legible crop, no mockup fabricated UI or misleading devices. DinkOS uses a public-site capture and explicit caption. Existing Serbisyo capture remains a concept, labelled as such. Diwata uses its existing logo with contain fit. Do not stretch images; reserve aspect ratio and lazy-load below-fold imagery. No stock photos or invented avatars. Lucide only for functional arrows/menu/close, 1.5 stroke where appropriate. No emoji. Fine rules, entry numbers and marginal annotations supply the journal texture without a raster grain overlay.

## Components & states

Primary action orange with surface text; hover darker, active translateY(1px), focus-visible 2px orange outline with 4px offset; disabled opacity plus disabled cursor. Secondary actions are quiet underlined links. Metadata is mono, never essential text at low contrast. Service rows show number, title, concrete scope and arrow. Dialogs have names, focus trapping, Escape close, scroll lock and focus restoration. Form controls have programmatic labels, field errors and a visible focus. Preserve email drafting and calendar functionality. Error/empty/loading UI is only required where an actual asynchronous operation exists; portfolio content is static.

## Signature moment

Exactly one: DinkOS Brief / Delivered. Default Delivered shows an authentic public-site capture. Brief shows the confirmed operational problem and product goal in a journal panel of identical reserved dimensions. Two native buttons with aria-pressed and a labelled region support touch, keyboard and announced selection. No autoplay. Only transform/opacity motion, and no nonessential movement under reduced-motion.

## Do's and Don'ts

- Give the work room; keep one primary action per action group and all others quiet.
- Use open fonts, calm tonal separation, readable editorial hierarchy and comfortable line lengths.
- Preserve the brand's own palette, approved modest radii and left alignment where source recipes disagree.
- Use honest scope, existing client feedback, owner-confirmed metrics and explicit concept labels.
- Do not copy source logos, names, proprietary fonts, copy or screenshots.
- Do not introduce indigo/violet blobs, glass, decorative terminals, emoji icons, generic three-icon grids, centered everything, uniform rounded containers, fake trust badges, stock smiling portraits or inflated claims.
- Do not animate essential portfolio content continuously or hide work behind dragging.

## Verification gate

Review rendered screenshots at 375, 768 and 1440px; inspect every route. Verify Brief / Delivered, menu, booking validation, calendar, dialog keyboard behavior, contact and project links, reduced motion, contrast, image loading and horizontal overflow. Run build, TypeScript and existing tests. Record Step 7 scores and fixes in DESIGN-REVIEW.md; all five categories must score >=4 based on visual review. No deployment is authorized.

## Approved detail refinements

Text links use one continuous rule across label, gap and arrow. Dialog close buttons are 44px squares with a full radius and a centered icon. Brief / Delivered uses 32px visible segments with a 44px expanded hit area; its surrounding frame is 42px tall. All six numbered homepage sections share the same outer spacing: 80px desktop/tablet and 32px mobile. The hero has no extra horizontal inset.

## Approved favicon

Use the linked MP monogram selected by the user: M and P share a stem, with cream lettering and a burnt-orange P bowl on a charcoal rounded square. The favicon uses custom vector outlines with no font dependency. Pair the approved MP mark with the visible text “DevFlow” in both header and footer, so the monogram supplies the MP prefix; use a 32px mark, 8px gap and at least a 44px link target. The combined lockup keeps “MPDevFlow home” as its accessible name, with the mark treated as decorative beside the text. Preserve MPDevFlow as the full name in SEO and structured data.

## Approved brand and SEO rollout — 2026-10-31

Use the linked MP mark across favicon, shared header/footer lockups, the 512px Organization logo, the 180px Apple touch icon, and the 1200×630 social share image. The share card continues the cream/charcoal/orange editorial system with the approved sans/serif headline, hairline rules, existing studio claim and URL; no invented outcome or badge. Its source uses an 8px spacing rhythm at export dimensions.

The shared page catalog supplies build-time metadata and client navigation updates. Every public route gets its own title, description, canonical URL, social tags and structured data before JavaScript runs. Generate the sitemap from the same catalog, including Serbisyo Barangay and DinkOS. Do not invent modification dates or social profiles. This is metadata generation, not server rendering of React page content.

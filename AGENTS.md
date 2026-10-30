# Project instructions

Before a feature or bugfix, clarify missing requirements, present the technical approach, and wait for confirmation. The current redesign approach was approved in chat on 2026-10-30, including all existing pages, DinkOS as the featured project, and senior-led positioning. Do not deploy without authorization.

Always run the build before marking a task complete.

## Design system

- All UI must follow `DESIGN.md` at the repo root. Read it before any UI change.
- Use design tokens only (CSS variables or Tailwind `@theme`). No raw hex values, and no pixel values that aren't on the scale.
- If `DESIGN.md` is missing, run the **design-remix** skill before writing any UI. The skill lives in `~/Documents/Personal/AI Skills/design-remix/SKILL.md`.
- Before calling UI work done, run design-remix Step 7 (anti-generic critique) and fix any score below 4.

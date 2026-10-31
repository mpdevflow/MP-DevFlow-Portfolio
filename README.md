# MP DevFlow Portfolio

A high-performance, product-centric digital agency portfolio designed for speed, scalability, and maintainability. This project showcases a modern approach to web development, combining rigorous engineering standards with premium aesthetics.

## Key Features

- **Performance-First Architecture**: Built on React 19 and Vite for instant load times and optimal bundle sizes.
- **Type-Safe Scalability**: Comprehensive TypeScript implementation ensuring robust code quality and improved developer experience.
- **Modern Design System**: Custom Tailwind CSS configuration with local asset management, ensuring no dependency on external CDNs.
- **Interactive UI**: Smooth scroll mechanics, responsive layouts, and polished micro-interactions using standard CSS and optimized React hooks.
- **Robust Form Handling**: Integrated `Zod` schema validation with `React Hook Form` for secure, error-free user input.
- **SEO Optimization**: Shared page metadata is written into production HTML at build time, with matching updates during client-side navigation.

## Engineering Standards

This project adheres to strict quality assurance protocols ensures long-term maintainability:

- **Modular Architecture**: Components are strictly categorized (`sections`, `modals`, `ui`) within a clean `src/` directory structure.
- **Centralized Configuration**: Constants and project data are decoupled from UI logic (`src/constants.ts`, `src/data/projects.ts`), promoting DRY principles.
- **Automated Quality Control**:
  - **Linting**: Strict ESLint optimization for React Hooks and TypeScript best practices.
  - **Formatting**: Automated Prettier formatting enforced via `lint-staged`.
  - **Testing**: Unit test suite using `Vitest` and `React Testing Library`, covering critical user flows like form validation.
  - **CI/CD Hooks**: `Husky` git hooks prevent bad commits and ensure all tests pass before pushing.

## Technology Stack

- **Core**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS, PostCSS
- **Testing**: Vitest, React Testing Library
- **Validation**: Zod, React Hook Form
- **SEO**: Shared route catalog, static page metadata, sitemap generation and Organization logo data
- **Tooling**: ESLint, Prettier, Husky, lint-staged

## Getting Started

**Prerequisites**: Node.js and pnpm.

1.  **Install dependencies**

    ```bash
    pnpm install
    ```

2.  **Start development server**

    ```bash
    pnpm dev
    ```

3.  **Run test suite**

    ```bash
    pnpm test
    ```

4.  **Production build**
    ```bash
    pnpm build
    ```

---

© 2025 MP DevFlow. Built for performance.

## Brand and SEO maintenance

- `public/assets/mpdevflow-mark.svg` is the approved linked MP mark used beside the wordmark in the header and footer. The matching browser icon is `public/favicon.svg`; the PNG logo and Apple touch icon are exported at 512px and 180px.
- `design/brand-share.html` is the editable 1200×630 social-card source. Render it with its fonts loaded to update `public/assets/mpdevflow-share.png`. The new filename refreshes existing social image caches without removing the legacy image asset.
- `src/data/seo.ts` owns titles, descriptions, canonical paths, social metadata and structured data. Project routes follow `src/data/projects.ts`; give new projects a concise description in the SEO catalog.
- `scripts/seo-html.ts` generates per-page HTML and `sitemap.xml` during `pnpm build`. It also provides matching metadata and the sitemap during development.
- Deploy the complete `dist/` directory. Preserve the emitted `.html` and directory-index files; configure the host to serve existing page files before any SPA fallback. The app still renders page content in React; the metadata and structured data are available without JavaScript.
- `pnpm test --run` checks metadata escaping, canonical URLs, project/sitemap coverage, static-host output forms and existing inquiry behavior.

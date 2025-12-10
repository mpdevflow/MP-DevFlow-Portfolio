# MP DevFlow Portfolio

A high-performance, product-centric digital agency portfolio designed for speed, scalability, and maintainability. This project showcases a modern approach to web development, combining rigorous engineering standards with premium aesthetics.

## Key Features

- **Performance-First Architecture**: Built on React 19 and Vite for instant load times and optimal bundle sizes.
- **Type-Safe Scalability**: Comprehensive TypeScript implementation ensuring robust code quality and improved developer experience.
- **Modern Design System**: Custom Tailwind CSS configuration with local asset management, ensuring no dependency on external CDNs.
- **Interactive UI**: Smooth scroll mechanics, responsive layouts, and polished micro-interactions using standard CSS and optimized React hooks.
- **Robust Form Handling**: Integrated `Zod` schema validation with `React Hook Form` for secure, error-free user input.
- **SEO Optimization**: Dynamic meta-tag management using `react-helmet-async` for improved search engine visibility.

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
- **SEO**: React Helmet Async
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

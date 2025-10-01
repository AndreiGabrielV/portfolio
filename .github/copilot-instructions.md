# Copilot Instructions for This Astro Portfolio

## Project Overview

- **Framework:** [Astro](https://astro.build/) with Tailwind CSS
- **Structure:**
  - `src/pages/`: Route-based pages (`.astro`, `.md`)
  - `src/components/`: UI components (Astro, possibly React/Vue/Svelte/Preact)
  - `src/layouts/`: Shared layout components
  - `src/content/`: Markdown content (e.g., projects, experience)
  - `public/`: Static assets (images, fonts)
  - `astro.config.mjs`, `tailwind.config.mjs`: Project and styling config

## Key Workflows

- **Install dependencies:** `pnpm install`
- **Start dev server:** `pnpm dev` (localhost:4321)
- **Build for production:** `pnpm build` (output: `dist/`)
- **Preview build:** `pnpm preview`
- **Astro CLI:** `pnpm astro ...` (e.g., `pnpm astro add`, `pnpm astro check`)

## Patterns & Conventions

- **Pages:**
  - All routes are defined by files in `src/pages/`.
  - Use `.astro` for component-based pages, `.md` for content-driven pages.
- **Components:**
  - Place reusable UI in `src/components/`.
  - Use Astro components for most UI; interop with other frameworks is possible but not present by default.
- **Layouts:**
  - Shared layouts (e.g., `BaseLayout.astro`, `ProjectLayout.astro`) are in `src/layouts/`.
  - Layouts are imported and used in pages to provide consistent structure.
- **Content Collections:**
  - Markdown files in `src/content/` (e.g., `projects/ultra-zound.md`) are used for dynamic content.
  - Content config in `src/content.config.ts`.
- **Assets:**
  - Place images and fonts in `public/` or `src/assets/` as appropriate.

## Notable Files

- `src/pages/index.astro`: Main landing page
- `src/components/BaseHead.astro`: Likely sets up `<head>` tags
- `src/layouts/BaseLayout.astro`: Base layout for pages
- `src/content/projects/`: Example of project content in markdown

## External Integrations

- **Tailwind CSS**: Configured via `tailwind.config.mjs`
- **pnpm**: Used for dependency management

## Tips for AI Agents

- Follow Astro's file-based routing and component conventions
- Use Tailwind utility classes for styling
- Reference `README.md` for basic commands and structure
- When adding new content, prefer markdown in `src/content/` and reference via content collections
- For new pages, add `.astro` or `.md` files to `src/pages/`

---

_If any conventions or workflows are unclear, ask for clarification or check the README._

# Architecture

Personal portfolio site. React 19 + TypeScript + Vite, styled with Tailwind v4. No backend, no router — single page.

## Structure

- `src/main.tsx` — entry point, mounts `Portfolio`.
- `src/Portfolio.tsx` — top-level page layout.
- `src/components/` — `Navbar`, `ProjectLister` (renders project cards/groups), `ProjectModal` (detail popup).
- `src/data/projects.ts` — all project content lives here as plain arrays: `mainProjects`, `hackathons`, `hobbyWeb`.
- `public/assets/` — project screenshots (`.webp`) referenced by each entry's `img` field.

## Adding a new project

1. Drop the screenshot in `public/assets/`.
2. Add an entry to the right array in `src/data/projects.ts` (`mainProjects` for full projects with `bullets`/`demoUrl`/`statusUrl`/`group`, `hackathons` or `hobbyWeb` for smaller ones — copy the shape of a sibling entry).

That's it — `ProjectLister` reads from these arrays, no other file needs to change.

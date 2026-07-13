# Repository Guidelines

## Project Structure & Module Organization

`apps/web` is the Next.js frontend: routes in `app/`, local examples in `components/`, and static files in `public/`. `apps/api` is a .NET 10 modular monolith: `Api/` is the host, `Foundation/` holds cross-cutting layers, and `Modules/<Feature>/` owns feature code. Shared frontend code is in `packages/ui`; shared lint, TypeScript, and Tailwind configuration is in `packages/*-config`. Architecture decisions live in `docs/ADRs/`.

## Build, Test, and Development Commands

Use Node 18+ and pnpm 10.

- `pnpm install` installs workspace dependencies.
- `pnpm dev` starts all development tasks; `pnpm --filter web dev` runs only the web app on port 3000.
- `pnpm build`, `pnpm lint`, and `pnpm check-types` build, lint, and type-check workspaces.
- `pnpm format` applies Prettier to TypeScript and Markdown.
- `dotnet build apps/api/Api.slnx` builds the API solution.

No automated test project is configured. Add focused tests with behavior changes and run lint, type checks, and relevant builds before review.

## Coding Style & Naming Conventions

Follow the existing TypeScript/React style: four-space indentation, semicolons, double-quoted imports, and PascalCase component filenames (for example, `Button.Tooltip.tsx`). Keep hooks and variables camelCase; use `type` imports where appropriate. Place reusable UI in the matching `@repo/ui` category and export it publicly. For C#, preserve nullable reference types and implicit usings; use PascalCase public members and retain module boundaries.

## UI Component Documentation

`packages/ui/src/components/**/GUIDE.md` is the authoritative UI documentation. Before using, changing, or extending a component, read its directory’s `GUIDE.md` and follow its API, semantic variants, responsive behavior, accessibility expectations, and composition patterns. Guides cover `AutoGrid`, `SplitScreen`, `Stack`, `Menu`, `Button`, `Field`, `Text`, `Background`, and `Container`.

Every UI feature change must update its adjacent `GUIDE.md` in the same pull request. Keep imports, props, defaults, supported values, behavior, and examples accurate. Add a guide for each new component family.

## Commit & Pull Request Guidelines

Git history is unavailable in this checkout, so no repository-specific convention can be confirmed. Use short, imperative, scoped subjects, such as `web: add project filter`. Pull requests should explain intent, note affected modules or ADR implications, link issues, include frontend screenshots, and list validation commands. Avoid unrelated refactors.

## Security & Configuration

Do not commit secrets or local `.env*` files. Keep tenant isolation, authentication, and module ownership constraints in mind when modifying API behavior.

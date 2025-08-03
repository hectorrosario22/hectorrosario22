# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Package Manager**: Use `pnpm` (version 10.10.0 as specified in packageManager field)

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Type checking
pnpm type-check

# Linting (with auto-fix)
pnpm lint

# Format code
pnpm format

# Preview production build
pnpm preview
```

## Project Architecture

This is a **Vue 3 + TypeScript portfolio website** built with:
- **Vite** as build tool
- **Vue Router 4** for routing (single-page app with HomeView)
- **Vue I18n** for internationalization (English/Spanish)
- **Tailwind CSS** with custom design system
- **FontAwesome** icons
- **Vue3 Smooth Scroll** for navigation

### Key Architecture Patterns

**Single Page Application**: All content is rendered in `App.vue` as sections rather than separate routes. The app uses a single `HomeView` component that imports all section components.

**Theme System**: 
- Dark/light mode toggle managed in `App.vue`
- Custom color palette defined in `tailwind.config.js` with primary/secondary color scales
- CSS custom properties for consistent theming
- Automatic system preference detection with localStorage persistence

**Internationalization**:
- Managed via Vue I18n with composable pattern
- Locale files in `src/i18n/locales/` (en.ts, es.ts)
- Data composition using `useI18n()` in data files (see `src/data/personal.ts`)

**Component Organization**:
```
src/components/
├── layout/          # Navbar, Footer, ScrollToTop
└── sections/        # HeroSection, AboutSection, etc.
```

**Data Layer**:
- Static data files in `src/data/` export composables that use i18n
- TypeScript interfaces in `src/types/`
- Personal information, projects, skills, and experience data

### Styling Approach

**Tailwind Configuration**:
- Custom animations (fade-in, slide-up, slide-down, scale-in, float)
- Extended color palette (primary/secondary with 50-900 scales)
- Custom glass morphism utilities
- Responsive design patterns

**Animation System**:
- Custom keyframes for entrance animations
- Glassmorphism effects with backdrop-blur
- Smooth transitions for theme changes
- Custom scrollbar styling

## Environment Variables

Create `.env` file for local development:
```
VITE_BASE_URL=/
```

For GitHub Pages deployment, the workflow uses:
```
VITE_BASE_URL=/hectorrosario22/
```

## Static Assets

- **Images**: Located in `public/images/` with organized subdirectories
- **Resumes**: CV files in `public/resumes/` (cv-en.pdf, cv-es.pdf)
- **Favicon**: SVG format in `public/favicon.svg`

## Deployment

The project auto-deploys to GitHub Pages via GitHub Actions when pushing to the `portfolio` branch. See `DEPLOYMENT.md` for details.

## TypeScript Configuration

Uses Vue 3 composition API with `<script setup>` syntax. TypeScript configuration split across:
- `tsconfig.json` (references)
- `tsconfig.app.json` (app-specific config)
- `tsconfig.node.json` (build tools config)
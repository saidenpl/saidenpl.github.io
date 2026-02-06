# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **SAIDEN** - a static business website for a Polish software development company. Built with Nuxt 4 and deployed to GitHub Pages.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run generate # Generate static site for GitHub Pages
npm run preview  # Preview production build locally
```

## Architecture

- **Framework**: Nuxt 4 with Vue 3
- **Styling**: Tailwind CSS via @nuxt/ui, dark theme only
- **Font**: Space Grotesk (Google Fonts via @nuxt/fonts)
- **i18n**: English (default) and Polish, using prefix strategy (`/pl/contact` for Polish)

### Key Directories

- `app/pages/` - Route pages (index, terms, privacy, contact)
- `app/layouts/` - Default layout with navbar and language switcher
- `app/components/` - Reusable components
- `i18n/` - Translation files (`en.json`, `pl.json`)

### Deployment

Pushes to `master` trigger GitHub Actions workflow that runs `npm run generate` and deploys `.output/public/` to GitHub Pages.

## i18n Usage

Use composables in Vue components:
```vue
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const { t } = useI18n()

// Navigation
<NuxtLink :to="localePath('/contact')">{{ $t('nav.contact') }}</NuxtLink>

// Language switch
<NuxtLink :to="switchLocalePath('pl')">PL</NuxtLink>
```

Translation keys are nested objects in `i18n/*.json`. Add new keys to both `en.json` and `pl.json`.

## Styling Notes

- Brand color: red-500 (#ef4444) for accents and active states
- Background: pure black (#000)
- Text: white with opacity variants (text-white/60, text-white/40)
- Border: white/10 for subtle dividers

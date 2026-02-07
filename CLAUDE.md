# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **SAIDEN** - a static business website for a Polish software development company. Built with Nuxt 4 and deployed to GitHub Pages. Production site: https://saiden.pl

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

## MCP Servers

This project uses several MCP (Model Context Protocol) servers configured in `.mcp.json`:

### nuxt (dev server)
Built-in via `nuxt-mcp-dev` module. Requires dev server running.
- `get-nuxt-config` - Nuxt configuration (ssr, modules, runtime config)
- `get-vite-config` - Vite config (root, resolve, plugins)
- `list-nuxt-pages` - Registered pages with i18n variants
- `list-nuxt-components` - All registered components
- `list-nuxt-auto-imports-items` - Available auto-imports (Vue, Nuxt, i18n, UI)
- `get-vite-module-info` - Module graph info for a specific file
- `nuxt-scaffold` - Scaffold components/pages/layouts/middleware/etc.

**Note**: MCP log shows port 3000, but uses actual dev server port. With `npm run dev -- --port 8080`, MCP is at `http://localhost:8080/__mcp/sse`.

### nuxt-ui (`@riyenz/nuxt-ui-mcp-server`)
Nuxt UI component documentation and examples.
- `list_components` - List all Nuxt UI components
- `get_component` - Get component markdown with source and theme file

### nuxt-docs (`https://nuxt.com/mcp`)
Remote Nuxt documentation access.

### claude-browse (global)
Browser automation for testing. Available tools:
- `goto`, `back`, `forward`, `reload` - Navigation
- `screenshot` - Capture page screenshots
- `click`, `type` - User interactions
- `query` - CSS selector queries (returns elements with attributes)
- `html` - Get page HTML content
- `eval` - Execute JavaScript in browser context
- `wait` - Wait for specified milliseconds
- `url` - Get current URL and title

## Styling Notes

- Brand color: red-500 (#ef4444) for accents and active states
- Background: pure black (#000)
- Text: white with opacity variants (text-white/60, text-white/40)
- Border: white/10 for subtle dividers

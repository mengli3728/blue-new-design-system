---
name: Blue New Design System
description: An Internet-style (互联网风格) design system for enterprise back-office and energy/power control products — CSS tokens, component specs, preview cards, and a runnable React UI kit
user-invocable: false
---

# Blue New Design System

A reusable Claude Design-style design system package. This skill provides design rules, CSS tokens, preview cards, and a runnable React UI kit for generating enterprise back-office and energy/power control interfaces.

This SKILL.md includes: What is inside, Source context, When to use, How to use, and design-system highlights grounded in source evidence.

---

## What's inside

The Blue New Design System package contains:

- DESIGN.md — 9-section design contract with product context, visual foundations, color palette with OKLch values, typography scale (12px–20px at Medium 600 and Regular 400), spacing scale (2px–224px with density rules), BorderLayout and FlowLayout patterns, 10+ component specifications (navigation, tree view, form controls, tables, pagination, buttons, modal dialogs, loading states, badges, steps wizard, carousel, breadcrumbs, search, lists, upload, calendar), motion and interaction tokens, voice and brand guidelines, and enforced anti-patterns.
- colors_and_type.css — 90+ CSS custom properties bound directly to DESIGN.md tokens, plus reusable component base classes (`.btn`, `.form-input`, `.badge`, `.nav-item`, `.tree-node`, `.pagination`, `.spinner`, `.steps`).
- preview/ — 10 focused review cards: colors-primary, colors-theme-light, colors-theme-dark, typography-specimens, spacing-tokens, spacing-radius, spacing-shadows, components-buttons, components-inputs, brand-assets.
- build/ — Runtime binary asset directory (no binary assets in source evidence).
- assets/ — Brand asset reference directory.
- fonts/ — Font file directory (no font files in source evidence).
- source_examples/ — Source component extracts directory (no TSX source in evidence).
- ui_kits/app/ — Runnable React 18 demo with 5 modular JSX components (App shell, Sidebar, DashboardPanel, DataTable, FormPanel) loaded via Babel standalone from ui_kits/app/components/.
- context/ — Evidence snapshots: context/source-context.md, original spec file assets_deepseek_markdown_20260604_eb6df0.md.

---

## Source Context

This design system was built from a Chinese enterprise back-office UI specification file (assets_deepseek_markdown_20260604_eb6df0.md) captured during project setup. No linked GitHub repositories, local code folders, or Figma files were provided. The specification describes an Internet-style (互联网风格) interface for energy/power control products with dense data tables, tree navigation, multi-level menus, and status-driven workflows. The canonical design system title recorded during setup is "Blue New Design System."

Source evidence files:
- context/source-context.md — Provenance manifest and intake documentation.
- assets_deepseek_markdown_20260604_eb6df0.md — Original specification file.
- DESIGN.md — Design rules derived from the specification.
- colors_and_type.css — Token implementation from DESIGN.md values.
- preview/*.html — Visual specimens implementing DESIGN.md tokens.
- ui_kits/app/ — React demo applying the design system to a product surface.

---

## When to use

Use this skill when generating enterprise back-office dashboards, energy/power control management consoles, industrial IoT interfaces, data-dense administration surfaces with tables and tree navigation, or any project requiring the Blue New visual identity (primary blue `#2C7CF5`, light grey-blue `#F0F6FA` page background, PingFang SC plus system sans-serif font stack, BorderLayout page composition, status-indicator system).

Do not use this skill for consumer mobile apps, editorial/magazine layouts, marketing sites, or projects requiring warm/beige/pink color palettes.

---

## How to use

1. Read DESIGN.md (all 9 sections) as the complete design contract before writing any artifact.
2. Import colors_and_type.css via `<link>` or `@import` into target projects. Bind `:root` tokens from DESIGN.md sections 2 (color), 3 (typography), and 4 (spacing).
3. **Hard Rule — Brand Logo is mandatory.** Use `logo-default.png` as the standard brand mark in navigation bars, login pages, and page headers. Use `logo-white.png` on dark backgrounds/surfaces. Use `logo-blue.png` for single-tone or monochrome brand contexts. See `preview/brand-assets.html` for visual reference. When the design system is active, always render the Blue New logo in the top navigation bar of generated prototypes unless the brief specifies otherwise. This rule takes priority over any default placeholder or omitted-logo behavior.

4. **Hard Rule — Type Scale is mandatory.** Generated prototypes must use the Blue New type scale (20px/16px/14px/13px/12px) with their assigned weights and color tokens as specified in DESIGN.md §3. Do not substitute arbitrary font sizes, weights, or text colors for page titles, card titles, body text, secondary information, or annotations — the system font stack (`--font-family`) and mono stack (`--font-mono`) must be preserved. Except: when the user explicitly requests different typography values in their brief.

5. Check component specs in DESIGN.md §6 for correct states — every component must include default, hover, focus, active, and disabled visual forms.
6. Review anti-patterns in DESIGN.md §9 before shipping. The section explicitly forbids warm tones, mixed alignment within regions, missing semantic states, and excessive gradients.
7. Open preview/*.html files in the Design System tab for visual reference cards.
8. Run ui_kits/app/index.html in a browser to see composed component patterns.

### Quick-start template

Use this HTML skeleton when starting a new prototype with Blue New. It imports the token CSS and renders a page shell with the brand logo and system button:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Blue New — Page</title>
  <link rel="stylesheet" href="colors_and_type.css">
</head>
<body style="background:var(--bg-page);font-family:var(--font-family);margin:0;padding:20px;">

  <!-- Top navigation bar with brand logo -->
  <nav class="nav-topbar">
    <img class="nav-brand-logo" src="logo-default.png" alt="Blue New">
    <span style="font-size:var(--text-sm);color:var(--text-body);margin-left:var(--space-20);">Dashboard</span>
  </nav>

  <!-- Card with title + body -->
  <div class="card" style="margin-top:var(--space-20);max-width:800px;">
    <div class="card-title">Station Overview</div>
    <p style="font-size:var(--text-sm);color:var(--text-secondary);">
      12 active stations · 47 devices reporting normal status
    </p>

    <!-- Primary + secondary buttons -->
    <div style="display:flex;gap:var(--space-10);margin-top:var(--space-16);">
      <button class="btn btn-primary">Create Station</button>
      <button class="btn btn-secondary">Export Report</button>
    </div>

    <!-- Status badge -->
    <span class="badge badge-success" style="margin-top:var(--space-16);">● Online</span>
  </div>

</body>
</html>
```

### Token reference for generated prototypes

| Token purpose | CSS variable | Example value |
|---------------|-------------|---------------|
| Page background | `var(--bg-page)` | `#F2F5F9` |
| Card/surface background | `var(--bg-surface)` | `#FFFFFF` |
| Primary action | `var(--color-primary)` | `#2C7CF5` |
| Body text | `var(--text-body)` | `#4A4A4A` |
| Page title | `--text-xxl` 20px 600 | `var(--text-heading)` |
| Card title | `--text-xl` 16px 600 | `var(--text-body)` |
| Body / table text | `--text-sm` 14px 400 | `var(--text-body)` |
| Secondary / label | `--text-13` 13px 400 | `var(--text-secondary)` |
| Annotation | `--text-xs` 12px 400 | `var(--text-label)` |
| Button radius | `var(--radius-base)` | 8px |
| Modal radius | `var(--radius-lg)` | 16px |
| Vertical gap between controls | `var(--space-10)` | 10px |
| Horizontal gap between columns | `var(--space-20)` | 20px |
| Button horizontal padding | `var(--space-18)` | 18px |

### Component class usage

Components are defined as base classes in colors_and_type.css. Apply them directly in HTML:

| Component | Class | Notes |
|-----------|-------|-------|
| Button | `.btn.btn-primary` / `.btn-secondary` / `.btn-danger` / `.btn-ghost` | Gap 10px, h-padding 18px |
| Card | `.card` / `.card-title` | Radius 8px, padding 20px |
| Input | `.form-input` | Min-width 136px, focus: primary border |
| Table wrap | `.table-wrap` + `table th` / `table td` | Row hover highlight, sortable headers |
| Badge | `.badge.badge-success` / `.badge-warning` / `.badge-danger` | Pill shape, tinted bg |
| Tag | `.tag` | Radius 4px, inline |
| Sidebar nav | `.nav-sidebar` + `.nav-item.active` | Width 240px, selected=primary fill |
| Topbar nav | `.nav-topbar` + `.nav-brand-logo` | Height 48px, logo 28px |
| Tree node | `.tree-node.selected` / `.tree-toggle.expanded` | Hover: primary-bg |
| Steps | `.steps` > `.step.active` / `.step.completed` | Circle indicator + connecting line |
| Spinner | `.spinner` | 32px rotating circle |

---

## Design System Highlights

The following table documents key design dimensions, with each specification grounded in source evidence files:

| Area | Specification | Source evidence |
|------|--------------|-----------------|
| Brand assets | Three logo variants preserved: `logo-default.png` (multi-color brand mark for light surfaces), `logo-white.png` (light-on-dark for dark backgrounds), `logo-blue.png` (single-tone blue for monochrome contexts). Agents always render the brand logo in navigation bars of generated prototypes by default. | preview/brand-assets.html, project root logo-*.png files |
| Primary palette | Single saturated blue (#2C7CF5, oklch 56% 0.18 250) against light grey-blue page background (#F2F5F9, oklch 96% 0.01 225). Used for navigation selected state, primary buttons, highlighted text, loading indicators, and focus borders. | DESIGN.md §2, colors_and_type.css --color-primary |
| Semantic colors | Success green (#00D6A5, oklch 72% 0.20 165), warning amber (#FAAD14, oklch 75% 0.16 85), danger red (#FF5959, oklch 65% 0.22 30). Used for status badges, validation messages, and indicator dots. | DESIGN.md §2, colors_and_type.css --color-success/warning/danger |
| Type scale | 5 sizes: 12px (annotations, labels) to 20px (page titles, top-level nav). Medium 600 weight for headings, Regular 400 for body text. Tabular-nums for numeric data alignment. Generated prototypes must use this type scale — arbitrary overrides are prohibited unless the user explicitly requests different values. | DESIGN.md §3, colors_and_type.css --text-* tokens |
| Font stacks | System-first stack: PingFang SC for CJK, Helvetica Neue and Roboto for Latin, Segoe UI and Arial as fallbacks. Mono stack: SF Mono, JetBrains Mono, Menlo, Consolas. | DESIGN.md §3, colors_and_type.css --font-family and --font-mono |
| Spacing scale | 11 steps from 2px (icon-text gaps) to 224px (default form control width at 1920px). Density rules: 10px between controls, 12px module spacing, 20px column/card gaps. | DESIGN.md §4, colors_and_type.css --space-* tokens |
| Border radius | 4 levels: 2px tags/badges, 4px buttons/inputs, 8px modals/flyout-panels, 999px pills/status-dots/avatars. Table wrapper & cells: 0px (no radius). | DESIGN.md §4, colors_and_type.css --radius-* tokens |
| Shadows | 3 elevations: sm 0 1px 2px rgba(0,0,0,0.06) for card elevation, base 0 2px 8px rgba(0,0,0,0.15) for modals/dropdowns, lg 0 4px 16px rgba(0,0,0,0.18) for notifications. | DESIGN.md §4, colors_and_type.css --shadow-* tokens |
| Motion | 3 transition durations: fast 0.15s ease, base 0.2s ease, modal 0.25s ease-out. Reduced-motion media query support via prefers-reduced-motion. | DESIGN.md §7, colors_and_type.css --transition-* tokens |
| Layout | BorderLayout (North/East/South/West/Center) with fixed shell regions. FlowLayout for left-to-right card wrapping. 1920x1080 baseline with percentage-based responsive width. | DESIGN.md §5 |
| Components | 10+ specifications: navigation system, tree view (standard/checkbox/dropdown), form controls, tables (standard/multi-header/action/merged), pagination, buttons (primary/secondary/icon), modal dialogs, loading/empty states, badges, steps, carousel, sliders, breadcrumbs, search, lists, upload, calendar. | DESIGN.md §6 |
| UI kit | Runnable React 18 demo: App shell + Sidebar + DashboardPanel (KPI cards) + DataTable (sortable) + FormPanel (validated form). Loads via Babel standalone from modular JSX files. | ui_kits/app/index.html, ui_kits/app/components/*.jsx |
| Anti-patterns | Enforced: no warm tones (beige/cream/pink/orange), no mixed alignment within a region, no missing semantic states, no excessive gradients, no overriding the system font stack. | DESIGN.md §9 |

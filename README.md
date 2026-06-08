# JoinBright-Blue Design System

> **Version:** 1.0.0 | **Category:** Custom | **Surface:** Web | **Baseline:** 1920×1080

An Internet-style (互联网风格) design system for enterprise-level back-office and energy/power control products. This package provides CSS tokens, component specifications, reviewable preview cards, preserved assets, and a runnable React UI kit for generating consistent enterprise interfaces.

---

## Product Overview

**JoinBright-Blue** is an enterprise back-office design system built for energy/power control and industrial IoT (IIoT) applications. The design language was extracted from a Chinese enterprise back-office UI specification and organized into a reusable Claude Design-style package.

### Product definition

JoinBright-Blue powers monitoring dashboards, station/device management consoles, work-order tracking systems, and configuration panels for operators and system administrators. Every design decision prioritizes information density, operational clarity, and professional restraint over decoration.

### Primary UI Surfaces

| Surface | Description |
|---------|-------------|
| Dashboard | Aggregated KPIs, status summaries, real-time monitoring panels with colored indicators |
| Station / Device Management | Searchable tree views, device cards, status badges, multi-level navigation |
| Work Order & Task Flow | Step wizards, vertical timeline views, status transitions with semantic colors |
| System Configuration | Dense forms with validation, modal dialogs, tabbed panels, paginated tables |

### Core Capabilities

- Data-dense tables with sort, filter, and flyout panel support; fixed header with scroll
- Multi-level navigation (global top menu + collapsible sidebar tree with favorites)
- Tree view supporting standard, checkbox, and dropdown variants with expand/collapse
- Form system with label-above layout, validation states, and 224px default control width
- Status indication via colored badges (success green, warning amber, danger red)
- Responsive collapse: left navigation shrinks to icon-only on narrow viewports
- Modal/dialog system with 8px radius, centered layout, overlay backdrop

### Source Evidence

This design system was constructed from a Chinese enterprise back-office UI specification file (`assets_deepseek_markdown_20260604_eb6df0.md`) captured during project setup. The specification describes an Internet-style (互联网风格) interface for energy/power control products. The canonical name recorded during setup is "JoinBright-Blue Design System."

- Setup metadata: Custom category, Web surface, version 1.0.0
- Evidence snapshots: context/source-context.md
- Original spec file: assets_deepseek_markdown_20260604_eb6df0.md
- Package root: ds-blue-new-design-system/

---

## Package Contents

```
ds-blue-new-design-system/
├── DESIGN.md                    # Canonical 9-section design rules (source of truth)
├── README.md                    # Package guide (this file)
├── SKILL.md                     # Agent-usable Claude Design skill entry
├── colors_and_type.css          # 90+ CSS custom properties + component base classes
├── build/                       # Runtime binary assets (none from source evidence)
├── assets/                      # Brand asset reference directory
├── fonts/                       # Font files (none from source evidence)
├── source_examples/             # Source component extracts (none from evidence)
├── context/
│   ├── source-context.md        # Evidence provenance manifest
│   └── github/, local-code/, figma/ (empty)
├── preview/                     # 21 reviewable token/component HTML cards
│   ├── colors-primary.html
│   ├── colors-theme-light.html
│   ├── colors-theme-dark.html
│   ├── typography-specimens.html
│   ├── spacing-tokens.html
│   ├── spacing-radius.html
│   ├── spacing-shadows.html
│   ├── components-buttons.html
│   ├── components-inputs.html
│   ├── components-navigation.html
│   ├── components-badges.html
│   ├── components-tables.html
│   ├── components-pagination.html
│   ├── components-tree.html
│   ├── components-steps.html
│   ├── components-loading.html
│   ├── components-cards.html
│   ├── components-modal.html
│   ├── components-breadcrumb.html
│   ├── components-search.html
│   ├── components-lists.html
│   ├── components-upload.html
│   ├── components-carousel.html
│   ├── components-slider.html
│   └── brand-assets.html
└── ui_kits/app/                 # Runnable React 18 UI kit
    ├── index.html               # Entry — loads colors_and_type.css + components via Babel
    ├── README.md                # Kit structure and usage guide
    └── components/
        ├── App.jsx              # Shell — composes all components
        ├── Sidebar.jsx          # Navigation tree with section headers
        ├── DashboardPanel.jsx   # KPI stat cards in responsive grid
        ├── DataTable.jsx        # Sortable table with header/footer
        └── FormPanel.jsx        # Validated form with input/select/button demo
```

DESIGN.md is the canonical 9-section design contract. colors_and_type.css provides the token implementation. preview/ contains visual review cards. ui_kits/app/ is the runnable React kit.

---

## Preview Manifest

| Preview path | What to inspect | Demonstrates |
|---|---|---|
| `preview/colors-primary.html` | Primary blue ramp (#2C7CF5 to #ECF7FF) with usage labels | DESIGN.md section 2 color tokens |
| `preview/colors-theme-light.html` | Page background (#F2F5F9), white surface cards, BorderLayout composition | DESIGN.md section 2 background tokens |
| `preview/colors-theme-dark.html` | Dark theme adaptation with inverted backgrounds | Color system extensibility |
| `preview/typography-specimens.html` | Full type scale (12px to 20px), Chinese and English specimens | DESIGN.md section 3 typography tokens |
| `preview/spacing-tokens.html` | 11 spacing steps (2px to 224px) as measurement bars | DESIGN.md section 4 spacing tokens |
| `preview/spacing-radius.html` | 4 radius levels on component shapes (2px/4px/8px/999px) | DESIGN.md section 4 radius tokens |
| `preview/spacing-shadows.html` | 3 elevation levels (sm/base/lg) on sample cards | DESIGN.md section 4 shadow tokens |
| `preview/components-buttons.html` | 4 button variants (primary/secondary/danger/ghost) with hover and disabled states | DESIGN.md section 6.6 button specs |
| `preview/components-inputs.html` | Input states (default/focus/error/disabled) with form composition demo | DESIGN.md section 6.3 form specs |
| `preview/components-navigation.html` | Gradient top bar + light variant + sidebar with states and specs | DESIGN.md section 6.1 nav specs |
| `preview/components-badges.html` | Status badges (success/warning/danger), numeric badges, tag labels | DESIGN.md section 6.9 badge & tag specs |
| `preview/components-tables.html` | Data table with status badges, sortable headers, row hover | DESIGN.md section 6.4 table specs |
| `preview/components-pagination.html` | Page navigation with active/disabled states, row count | DESIGN.md section 6.5 pagination specs |
| `preview/components-tree.html` | Expand/collapse tree with selection and hover states | DESIGN.md section 6.2 tree view specs |
| `preview/components-steps.html` | Horizontal step wizard (active/completed/default states) | DESIGN.md section 6.10 steps specs |
| `preview/components-loading.html` | Spinner, inline loading, empty state with CTA button | DESIGN.md section 6.8 loading specs |
| `preview/components-cards.html` | Standard cards, KPI stat cards with tabular numerics | DESIGN.md section 6.11 card specs |
| `preview/components-modal.html` | Modal dialog with header/body/footer structure | DESIGN.md section 6.7 modal specs |
| `preview/components-breadcrumb.html` | Path hierarchy with interactive link states | DESIGN.md section 6.12 breadcrumb specs |
| `preview/components-search.html` | Inline search bar with icon, focus, and placeholder states | DESIGN.md section 6.12 search specs |
| `preview/components-lists.html` | Action list with icons, hover, and active states | DESIGN.md section 6.12 list specs |
| `preview/components-upload.html` | Upload zone with dashed border, hover state, uploaded file state | DESIGN.md section 6.12 upload specs |
| `preview/components-carousel.html` | Content carousel with auto-play and dot indicators | DESIGN.md section 6.12 carousel specs |
| `preview/components-slider.html` | Progress bars (primary/success/warning) and range slider | DESIGN.md section 6.12 slider specs |
| `preview/brand-assets.html` | Brand mark, logo lockup, color swatches, provenance notes | Visual identity |

---

## Preserved Assets

**Build (build/resources):** No binary runtime assets captured. Directory preserved for future installer icons, tray icons, or app icons.

**Fonts (fonts/woff2):** No font files captured. System uses PingFang SC, Helvetica Neue, Roboto, Segoe UI, Arial bound via colors_and_type.css.

**Source examples (source_examples/files):** No original TSX source files captured. Directory preserved for future component snapshots.

---

## Reuse Workflow

### For designers
Read DESIGN.md (all 9 sections) as the shared design contract. Open preview/colors-primary.html and preview/colors-theme-light.html to validate the palette. Check preview/typography-specimens.html for type scale. Reference preview/components-buttons.html and preview/components-inputs.html for component patterns. Use preview/brand-assets.html for brand identity.

### For developers
Load the token CSS: `<link rel="stylesheet" href="path/to/colors_and_type.css">`. Use CSS custom properties (var(--bg-surface), var(--text-body), var(--space-16)). Apply base classes (.btn, .form-input, .badge, .nav-item). Reference DESIGN.md section 6 for component states. Run ui_kits/app/index.html to see composed components.

### For future agents
Read DESIGN.md before generating artifacts. Load colors_and_type.css and bind :root tokens. Open preview/*.html for visual validation. Check component specs in DESIGN.md section 6. Review DESIGN.md section 9 anti-patterns before shipping. Run package audit: design-system-package-audit --path . --fail-on-warnings.

### For reviewers
Open preview/*.html files sequentially in the Design System tab. Recommended order: colors-primary → typography → spacing tokens/radius/shadows → components-buttons → components-inputs → components-navigation → components-badges → components-tables → components-tree → components-steps → components-modal → components-cards → components-pagination → components-loading → components-breadcrumb → components-search → components-lists → components-upload → components-carousel → components-slider → brand-assets. After individual review, open ui_kits/app/index.html to see all components composed.

---

## Source and Context References

- Original spec file: `assets_deepseek_markdown_20260604_eb6df0.md` at project root. Raw Chinese enterprise back-office UI specification captured during setup.
- Context manifest: `context/source-context.md`. Evidence provenance, setup metadata, intake command log.
- GitHub evidence: `context/github/` (empty — no GitHub repositories linked).
- Local code evidence: `context/local-code/` (empty — no local code folders linked).
- Figma evidence: `context/figma/` (empty — no Figma files linked).

---

## UI Kit

The UI kit at `ui_kits/app/` is a runnable React 18 demo applying JoinBright-Blue tokens to an enterprise dashboard. It loads `../../colors_and_type.css`, React 18 with Babel standalone, and composes 5 modular JSX components from `ui_kits/app/components/`:

- App (components/App.jsx): Shell composing Sidebar, DashboardPanel, DataTable, FormPanel
- Sidebar (components/Sidebar.jsx): Navigation tree with section headers
- DashboardPanel (components/DashboardPanel.jsx): KPI stat cards in responsive grid
- DataTable (components/DataTable.jsx): Sortable table with header, footer, row hover
- FormPanel (components/FormPanel.jsx): Validated form with inputs, selects, buttons

Each component exposes `window.ComponentName` for composition via Babel standalone.

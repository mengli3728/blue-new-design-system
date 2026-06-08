# JoinBright-Blue — App UI Kit

## Overview

The `ui_kits/app/` directory contains a runnable React application that demonstrates how JoinBright-Blue design tokens and component patterns compose into a real enterprise back-office surface. Designed for energy/power control dashboard scenarios.

## Structure

```
ui_kits/app/
├── README.md                    # This file
├── index.html                   # Runnable entry point (browser)
└── components/
    ├── App.jsx                  # App shell — composes all components
    ├── Sidebar.jsx              # Left navigation with tree items
    ├── DashboardPanel.jsx       # KPI stat cards + summary panels
    ├── DataTable.jsx            # Sortable data table with status badges
    └── FormPanel.jsx            # Form controls for creating/editing
```

## Usage

Open `ui_kits/app/index.html` in a browser. The page loads React 18, ReactDOM, and Babel standalone from CDN, then mounts the composed UI kit.

No build step required — JSX is transpiled in-browser by Babel standalone.

## Component Files

Each component file:
- Is loaded as `<script type="text/babel" src="components/Name.jsx">`
- Exports itself as `window.ComponentName` (e.g. `window.Sidebar = Sidebar`)
- Uses `colors_and_type.css` tokens via `className` utility classes and inline `style` objects referencing the CSS custom properties

## Design Notes

- Uses the JoinBright-Blue color tokens: `var(--color-primary)` (#2C7CF5), `var(--bg-page)` (#F0F6FA), `var(--bg-surface)` (#FFFFFF)
- Form layout follows label-above, control-below pattern with 10px row gaps
- Sidebar uses active state with primary background color
- Table headers are sortable with visual indicator
- Status badges use the semantic color system (success/warning/danger)

## Source Basis

The components are modeled after the JoinBright-Blue design specification captured in `assets_deepseek_markdown_20260604_eb6df0.md`, which describes an Internet-style (互联网风格) enterprise back-office interface for energy/power control with:
- BorderLayout navigation pattern
- Tree-style sidebar navigation
- Data-dense table views with sort/filter
- Status-driven badge indicators
- Form controls with explicit density rules

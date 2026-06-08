# Blue New Design System

> Category: Custom
> Surface: web
> Version: 1.0.0

Blue New — an Internet-style design system for enterprise-level back-office and energy/power control products. The system prioritizes simplicity, brightness, neutrality, and practicality, designed for efficient handling of complex data with clear information hierarchy and operational clarity.

## Source Context

This design system was built from a Chinese enterprise back-office UI specification captured during project setup (`assets_deepseek_markdown_20260604_eb6df0.md`). No linked GitHub repositories, local code folders, or Figma files were provided during setup. The source specification describes an Internet-style (互联网风格) interface for energy/power control products with dense data tables, tree navigation, multi-level menus, and status-driven workflows. The canonical design system title is "Blue New Design System."

---

## Product Context

**Product name:** Blue New
**Domain:** Enterprise back-office / energy power control / industrial IoT
**Target surface:** Web (1920×1080 baseline, responsive)
**Primary users:** Station operators, device monitoring engineers, system administrators
**Core workflows:** Dashboard monitoring, station/device management, work-order tracking, system configuration, report generation

## 1. Visual Theme & Atmosphere

**Visual mood:** Internet-style (互联网风格) for enterprise back-office and energy/power control products. The overall pursuit is simplicity, brightness, neutrality, and practicality.

**Product context:** Efficient handling of complex data, emphasizing information clarity and operational efficiency across dashboards, station management, device monitoring, work-order tracking, and system configuration surfaces.

**Emotional expression:** Professional, stable, restrained — avoiding excessive decoration, using clean light grey-blue backgrounds with a highly saturated primary blue to guide core actions and draw attention to interactive elements.

**Design philosophy:** Data density is a feature. Every pixel serves information or action. Decoration is justified only when it clarifies hierarchy or improves scanability.

---

## 2. Color

### Brand / Primary Colors

| Token | Value (Hex) | Value (OKLch) | Usage |
|-------|-------------|---------------|-------|
| `--color-primary` | `#2C7CF5` | `oklch(56% 0.18 250)` | Navigation selected state, primary buttons, highlighted text, loading indicators, focus borders |
| `--color-primary-hover` | `#4091F9` | `oklch(62% 0.16 250)` | Primary button hover |
| `--color-primary-light` | `#EBF3FF` | `oklch(91% 0.05 250)` | Secondary button hover fill, light primary backgrounds |
| `--color-primary-bg` | `#ECF7FF` | `oklch(95% 0.03 240)` | Hover background for form controls, navigation tree items |

### Semantic / Status Colors

| Token | Value (Hex) | Value (OKLch) | Usage |
|-------|-------------|---------------|-------|
| `--color-success` | `#00D6A5` | `oklch(72% 0.20 165)` | Success notification, validation success, load success |
| `--color-warning` | `#FAAD14` | `oklch(75% 0.16 85)` | Warning/neutral state, data expired, pending update |
| `--color-danger` | `#FF5959` | `oklch(65% 0.22 30)` | Error, warning, delete action, failure state |
| `--color-danger-text` | `#FF5959` | `oklch(65% 0.22 30)` | Error text, validation messages |

### Background & Surfaces

| Token | Value (Hex) | Value (OKLch) | Usage |
|-------|-------------|---------------|-------|
| `--bg-page` | `#F2F5F9` | `oklch(96% 0.01 225)` | Global page background |
| `--bg-surface` | `#FFFFFF` | `oklch(100% 0 0)` | Card/panel background, work area, modal windows, tables, form containers |
| `--bg-overlay` | `rgba(0, 0, 0, 0.5)` | — | Modal/drawer backdrop |
| `--bg-input` | `#FFFFFF` | `oklch(100% 0 0)` | Input field background |

### Text Colors

| Token | Value (Hex) | Value (OKLch) | Reference Size | Usage |
|-------|-------------|---------------|----------------|-------|
| `--text-heading` | `#000000` | `oklch(0% 0 0)` | 20px | Page titles, top-level nav, important data numbers |
| `--text-body` | `#4A4A4A` | `oklch(35% 0.01 250)` | 16px / 14px | Body text, main business text, card titles |
| `--text-secondary` | `#666666` | `oklch(48% 0.01 250)` | 13px | Secondary text, menu text, form labels |
| `--text-hint` | `#BDBDBD` | `oklch(78% 0.01 250)` | 16px | Input placeholder, hint text |
| `--text-label` | `#999999` | `oklch(64% 0.01 250)` | 12px | Annotations, read-only text, inactive tabs |
| `--text-danger` | `#FF5959` | `oklch(65% 0.22 30)` | 12px | Error messages, validation prompts |

### Borders

| Token | Value | Usage |
|-------|-------|-------|
| `--border-color` | `#E5E9F0` | `oklch(91% 0.005 240)` | Default borders, separators |
| `--border-color-hover` | `#2C7CF5` | Primary color | Focus/hover border for inputs, tables |
| `--border-width` | `1px` | Default border width |
| `--border-radius` | `12px` | Base control border radius |
| `--border-radius-lg` | `16px` | Modal, flyout panel radius |

---

## 3. Typography

### Font Stack

```css
--font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", Roboto, "Segoe UI", Arial, sans-serif;
--font-mono: "SF Mono", SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace;
```

### Type Scale

| Token | Size | Weight | Line Height | Color | Usage |
|-------|------|--------|-------------|-------|-------|
| `--text-xxl` | 20px | 600 (Medium) | 1.4 | `--text-heading` | Page main title, top-level navigation menu, important data numbers |
| `--text-xl` | 16px | 600 (Medium) | 1.4 | `--text-body` | Card titles, navigation tree panel titles, internal content headings |
| `--text-sm` | 14px | 400 (Regular) | 1.4 | `--text-body` | Form labels, navigation tree nodes, table headers, pagination controls |
| `--text-13` | 13px | 400 (Regular) | 1.4 | `--text-secondary` | Secondary table cells, status labels, metadata, auxiliary information |
| `--text-xs` | 12px | 400 (Regular) | 1.3 | `--text-label` | Tooltips, annotations, read-only text, inactive tabs |
| `--text-xs-danger` | 12px | 500 (Medium) | 1.3 | `--text-danger` | Form validation messages, error prompts |

### Type Rules
- All font sizes in `px` as baseline; prefer `rem` for responsive scaling
- Numeric data uses `font-variant-numeric: tabular-nums` for alignment
- Headings use Medium (600) weight for clear hierarchy
- Body text uses Regular (400) weight for readability at 14px
- **Type scale enforcement:** Generated prototypes must use this type scale (20px/16px/14px/13px/12px) with their assigned weights and color tokens. Do not substitute arbitrary sizes, weights, or text colors. This is a non-negotiable system constraint — except when the user explicitly requests different typography values.

---

## 4. Spacing

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | 2px | Very small gaps, between icon and text |
| `--space-4` | 4px | Text-icon spacing inside graphic buttons |
| `--space-8` | 8px | Compact inner padding, tight element spacing |
| `--space-10` | 10px | Minimum safety distance between controls, between form rows |
| `--space-12` | 12px | Inner padding of input fields, default module spacing |
| `--space-16` | 16px | Compact card padding |
| `--space-18` | 18px | Minimum horizontal padding for generic buttons |
| `--space-20` | 20px | Column gap, card gap, modal content padding, card padding, table cell margin |
| `--space-24` | 24px | Maximum module spacing, maximum inner padding of content areas (override when more separation is needed) |
| `--space-32` | 32px | Section spacing, panel margins |
| `--space-40` | 40px | Large section separation |
| `--space-224` | 224px | Default form control width at 1920px viewport |

### Layout Density Rules

- Form layout: label on top, control below — gap between label and control is 0, inner padding of control left/right is 12px
- Vertical gap between form rows: 10px
- Horizontal gap between columns: 20px
- Inner padding of modal content area: 20px
- Minimum gap between buttons: 10px
- Default gap between cards: 12px
- Default module spacing: 12px
- Table cell margin (th/td): 20px
- Card padding: 20px

**Card padding enforcement:** All card components (`.card`, `.card-secondary`, and any container using card-level visual treatment) MUST use 20px inner padding (`var(--space-20)`). This is a non-negotiable system constraint — do not substitute arbitrary padding values — except when the user explicitly requests different card padding.

**Module spacing enforcement:** The default spacing between modules, cards, and content sections MUST be 12px (`var(--space-12)`). This is a non-negotiable system constraint — do not substitute arbitrary spacing values — except when the user explicitly requests different module spacing. Use `--space-24` only as an override when more separation is explicitly needed.

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | Tag, badge, small indicator |
| `--radius-base` | 12px | Tree nodes |
| `--radius-lg` | 16px | Modal, flyout panel, drawer |
| `--radius-round` | 999px | Pills, status dots, circular avatars |

### Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.06)` | Card subtle elevation, row hover |
| `--shadow-base` | `0 2px 8px rgba(0,0,0,0.15)` | Modal, dropdown, flyout panel |
| `--shadow-lg` | `0 4px 16px rgba(0,0,0,0.18)` | Large modal, notification toast |

---

## 5. Layout & Composition

### Grid & Structure

**Base resolution:** 1920×1080, using percentage-based responsive width + mixed fixed/fluid columns.

**Layout patterns:**

1. **BorderLayout (North-East-South-West-Center)**
   - North/South regions span full width, no scrollbars
   - Center region holds main content with overflow scroll
   - Minimum safety distance between controls: 10px
   - Content inner padding: 20px
   - Alignment: all left-aligned / centered / right-aligned, consistent per region — never mixed

2. **Flow Layout**
   - Controls arranged left to right, wrap to next row when full
   - Used for card lists, thumbnails, dashboard modules
   - Limit vertical items to avoid excessive scrolling; provide pagination for overflow

### Information Density
- Data-intensive back-office interfaces — clear and orderly
- Table default row height: ~40px, sortable/filterable headers
- Card content shows at most three lines, truncate with ellipsis
- Status cells use colored dots or labels (success green, warning orange, error red)

### Responsive Behavior
- Use `clamp()` for min/max widths combined with container queries
- Left navigation tree collapses to icon + hover menu on narrow screens (< 1024px)
- Tables adapt width with horizontal scrollbar when needed (no layout break)
- Top navigation bar: left/right arrow scrolling on overflow

---

## 6. Components

All components must include: **Default, Hover, Focus, Active, Disabled** states.

### Brand Logo — Mandatory Asset

The Blue New design system ships **three logo variants** as standalone PNG files in the project root. All navigation chrome, app bars, branded headers, and shell surfaces **MUST** use the correct logo variant. Text replacements ("Blue New" as plain text in place of the logo image) are forbidden.

| File | Height | Background | Usage |
|------|--------|------------|-------|
| `logo-white.png` | 28px | Dark / gradient (#2C7CF5→#57AAFE) | Gradient top navigation bar (`.nav-topbar`), dark sidebars |
| `logo-default.png` | 28px | Light / white | Light navigation bar (`.nav-topbar-light`), sidebars, interior page headers, UI kit app shell |
| `logo-blue.png` | 28px | Any | Print, single-tone contexts, monochrome exports |

**CSS reference:** Use `.nav-brand-logo` class (height 28px, `width: auto`, `display: block`) for consistent sizing across all placements.

**Logo-to-nav-items gap:** 20px (matching `--space-20`).

**Brand asset enforcement:** Every navigation bar, sidebar, app shell, and branded surface MUST render the correct logo variant (`logo-white.png` on dark/gradient backgrounds, `logo-default.png` on light backgrounds, `logo-blue.png` for monochrome). Replacing the brand logo with plain text, inline SVG placeholders, or omitting it entirely is a non-negotiable system constraint — except when the user explicitly requests a different logo or no logo.

### 6.1 Navigation + Logo
- **Gradient navigation bar** (`.nav-topbar`): full-width gradient bar, height 50px
  - Background: `linear-gradient(90deg, #2C7CF5 -1%, #57AAFE 100%)`
  - Menu items: 16px Medium (600), line-height 16px, color `#FFFFFF`
  - Item height: 50px (fills entire bar for full-height active background)
  - Item padding: 0 20px (left/right only; top/bottom = 0 for full-height fill)
  - Icon-text gap inside item: 4px
  - Logo-to-nav-items gap: 20px
  - Active item background: `#2C7CF5` (solid, spans full 50px height)
  - Hover item background: `rgba(255, 255, 255, 0.10)`
  - Right-side action icons: 16px line-art white SVGs for notifications, settings, user
  - Action icon gap: 12px; last icon 20px from right edge
- **Light navigation bar** (`.nav-topbar-light`): full-width white bar, height 50px
  - Background: `var(--bg-surface)` (#FFFFFF), bottom border 1px solid `var(--border-color)`
  - Menu items: 16px Medium (600), line-height 16px, color `var(--text-heading)` (#000000), active color `#2C7CF5`
  - Item height: 50px (fills entire bar)
  - Item padding: 0 20px
  - Logo-to-nav-items gap: 20px
  - Active and hover item background: `#ECF7FF` (`var(--color-primary-bg)`), active text `#2C7CF5`
  - Right-side action icons: 16px line-art black SVGs for notifications, settings, user
  - Action icon gap: 12px; last icon 20px from right edge
- Brand logo is **mandatory** — every navigation bar, sidebar, and app shell MUST render the correct logo variant (`logo-white.png` on dark/gradient backgrounds, `logo-default.png` on light backgrounds). Text replacement of the logo is not permitted.
- Item transition: `--transition-base` (0.2s ease)
- Click on a nav item switches the active state — only one item is active at a time
- Level-1 menu selected: primary color background `#2C7CF5`, white text
- Level-3 navigation tree supports favorites and expand/collapse
- Left sidebar collapses to icons, expands on hover. Sidebar navigation items (`.nav-item`) use `8px` border-radius for both hover and selected states.
- **Sidebar — Blue Theme** (`.sidebar-blue` + `.sidebar-blue-item`): Full-width primary-color sidebar variant. Background: `var(--color-primary)` (#2C7CF5), text: #FFFFFF. Items use `padding: 10px 20px; margin: 2px 8px` with 8px border-radius — matching `.nav-item` spacing. Hover state transitions to `rgba(255,255,255,0.10)`. Active/selected items use `#0A64EA` background with no border. Section labels use `rgba(255,255,255,0.6)`. Ideal for branded settings panels, profile pages, and side menus requiring full-brand immersion.

### 6.2 Tree View
- Standard tree with expand/collapse toggles
- CSS class: `.tree-node` — flex row, 6px 12px padding, 12px radius
- Toggle class: `.tree-toggle` — 16×16px arrow, rotates 90° on `.expanded` via `var(--transition-tree)`
- Selected node: `var(--color-primary)` text/highlight via `.tree-node.selected`
- Hover state: `var(--color-primary-bg)` (#ECF7FF)
- Tree items at 14px / 400 Regular
- Supports checkbox tree and dropdown tree variants via class composition

### 6.3 Form Controls
- Input fields, dropdowns, date pickers, range pickers, numeric inputs
- CSS classes: `.form-control` (flex column), `.form-label`, `.form-input`
- Input: min-width 136px, default 224px, responsive range 136–224px, font-size 14px
- Border radius: `--radius-sm` (4px)
- Label-above, control-below structure, left-aligned
- Focus border: `var(--color-primary)`
- Error state: `.has-error` class on input, `.form-error` for error text
- Disabled state: reduced opacity with `cursor: not-allowed`

### 6.4 Tables
- CSS wrapper: `.table-wrap` — 0px radius (no rounding), overflow-x auto
- Table width 100%, `border-collapse: collapse`
- Headers: 14px / 500 Medium, `var(--text-body)`, padding 10px 20px, `var(--bg-page)` background
- Body cells: 14px / 400 Regular, `var(--text-body)`, padding 10px 20px
- Row hover: `var(--color-primary-bg)` (#ECF7FF) on `table tr:hover td`
- Sortable/filterable headers with click interaction
- Status cells use `.badge-*` with colored indicators
- Overflow: horizontal scrollbar when needed (no layout break)

### 6.5 Pagination
- CSS class: `.pagination` — flex row, right-aligned, 8px gap
- Page buttons: 32×32px, 14px / 400 Regular, 8px radius
- Active page: `var(--color-primary)` fill (#2C7CF5) + white text via `.pagination button.active`
- Hover: primary border + primary text color
- Disabled: reduced opacity
- Shows "Showing X rows / Total Y pages" text

### 6.6 Buttons
- **Default padding:** horizontal 18px, gap 10px, height 36px
- **Border radius:** 6px
- **Emphasis/Primary:** `--color-primary` background, white text, `--color-primary-hover` on hover
- **Secondary:** white fill, `--color-primary` stroke, `--text-heading` text, `--color-primary-light` hover fill
- **Danger:** `--color-danger` background, white text
- **Ghost:** transparent background, `--text-body` text, `--color-primary-bg` hover fill
- **Icon button:** text-icon gap 4px, icon-only buttons fixed size
- Toolbar with > 8 buttons collapses into "More" dropdown

### 6.7 Modal / Dialog
- CSS classes: `.modal-overlay` (backdrop), `.modal` (480px width), `.modal-header`, `.modal-title`, `.modal-body`, `.modal-footer`, `.modal-close`
- Overlay: `--bg-overlay` (rgba(0,0,0,0.5)), full-screen grid centered
- Border radius: `--radius-lg` (16px)
- Shadow: `--shadow-lg` (0 4px 16px rgba(0,0,0,0.18))
- Header: flex row, 12px 24px 12px padding, `border-bottom: 1px solid var(--border-color)` (full-width divider), title (16px/600) + close button (24×24px)
- Body: scrollable, 20px 24px padding
- Footer: right-aligned action buttons, border-top divider (`--border-color`), 20px 24px 20px padding, 10px gap
- Modal sizing: default 480px, max-width 90vw, max-height 80vh, aspect ratio 4:3 or 2:1
- Toast notifications auto-dismiss after 3s

### 6.8 Loading & Empty States
- CSS class: `.spinner` — 32px circle, border 3px, `border-top-color: var(--color-primary)`, 0.6s rotation
- Page loading: full-screen centered spinner, optional overlay
- Card/chart loading: inline 20px spinner with status text
- Load failure: retry button with action
- Empty state: centered placeholder with icon, message, action CTA

### 6.9 Badge & Tag
- CSS class: `.badge` — inline-flex, 12px / 500 Medium, pill shape (`--radius-round`)
- Status variants: `.badge-success` (green), `.badge-warning` (orange), `.badge-danger` (red)
- Each variant: 12% opacity tinted background + full-saturation text
- Numeric badges: red dot (8px pure circle), red dot + number, `NEW` label
- CSS class: `.tag` — 22px height, 12px/400, 4px radius, page bg + border
- Used on tabs, status columns in tables, metadata labels

### 6.10 Steps
- CSS classes: `.steps` (flex row), `.step` (flex column, centered), `.step-indicator` (32px circle), `.step-label`
- Indicator: 32px diameter, 14px / 500 Medium, centered
- Default indicator: `var(--border-color)` bg, `var(--text-label)` text
- Active indicator: `var(--color-primary)` fill (#2C7CF5) + white text via `.step.active .step-indicator`
- Completed indicator: `var(--color-success)` fill (#00D6A5) + white text + checkmark via `.step.completed .step-indicator`
- Label: 12px / 400 Regular, `var(--text-secondary)`, centered below indicator
- Connector line: 1px solid `var(--border-color)` between steps via `::after`
- Supports horizontal step wizard and vertical timeline/task flow

### 6.11 Card
- CSS classes: `.card` (一级, no border) · `.card-secondary` (二级, with border) · `.card-title` (heading)
- 一级卡片: `var(--bg-surface)` background, no border, 12px radius, 20px padding
- 二级卡片: `var(--bg-surface)` background, 1px `var(--border-color)` border, 12px radius, 20px padding
- Title: 16px / 600 Medium, `var(--text-body)`, 16px bottom margin
- Card content: max 3 lines, truncated with ellipsis
- Default card gap: 12px

### 6.12 Additional Components
- **Breadcrumb:** `.breadcrumb` — flex row, 13px/300, `var(--text-secondary)`, `"/"` separator, current item in `var(--text-heading)`/300, link hover `var(--color-primary)`
- **Search:** `.search-bar` — 36px height, flex row with icon + input, focus border `var(--color-primary)`, 12px radius
- **Action List:** `.action-list` — unstyled `<ul>`, items 14px 16px padding, 14px/400, 0px border-radius, hover `var(--color-primary-bg)`, active `var(--color-primary)` fill
- **Upload:** `.upload-zone` — dashed border (2px), 32px 24px padding, hover primary border + `var(--color-primary-bg)` bg
- **Carousel:** `.carousel` — 16:9 aspect ratio, 12px radius, dots overlaid on banner, 20px from bottom, 8px circles, `--text-heading` color (inactive 30% opacity, active full), left/right navigation arrows (`carousel-nav`): 24×24px circles with 50% black bg, 16px white arrow, vertically centered, 20px from edges, auto-play 5s
- **Slider/Progress:** `.progress-bar` (8px track) + `.progress-fill` (primary/success/warning variants); `.slider-track` (4px track) + `.slider-fill` + `.slider-thumb` (16px circle)
- **Calendar:** `.calendar-mini` — min-width 150px, 7-column grid, `.calendar-day.today` primary fill, `.calendar-day.other-month` muted
- **Login box:** centered card format, input fields with focus shadow, primary CTA button
- **Responsive behavior:** Left navigation tree collapses to icon + hover menu on narrow screens (< 1024px); tables scroll horizontally

---

## 7. Motion & Interaction

### Transition Speeds
| Token | Duration | Easing | Usage |
|-------|----------|--------|-------|
| `--transition-fast` | 0.15s | ease | Hover shadow/border reveal |
| `--transition-base` | 0.2s | ease | State changes (background, border, opacity) |
| `--transition-modal` | 0.25s | ease-out | Modal open/close (scale + fade) |
| `--transition-tree` | 0.2s | ease | Tree node expand/collapse arrow rotation |

### Interaction Feedback
- Button click: subtle scale or slight color darkening
- Loading: rotating icon (infinite loop)
- Form validation: inline hints, optional error shake
- Tree expand/collapse: arrow rotation 0.2s

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    transition-duration: 0s !important;
    animation-duration: 0s !important;
  }
}
```

---

## 8. Voice & Brand

### Copy Style
- Concise, direct, neutral — avoid colloquial language
- Action buttons: verb + noun ("Create station", "Export report")
- Confirm/cancel: standard "Confirm" / "Cancel"
- Error messages: specific and actionable ("Network connection failed, please retry")

### Terminology
- Consistent power/energy domain terms: "station", "device", "work order", "indicator"
- Time format: `YYYY-MM-DD HH:mm:ss`
- Numbers: thousand separators (e.g., 12,345)

### Brand Tone
- Internet-style but professional
- Emphasize technology-driven, reliable data, efficient and stable

---

## 9. Anti-patterns

### Visual Anti-patterns
- ❌ Warm colors (beige, cream, pink/orange) — the specification explicitly defines light grey-blue `#F2F5F9` as system background
- ❌ Changing the primary color ratio or arbitrarily adding new colors
- ❌ Excessive gradients where not appropriate
- ❌ Ignoring safety margins (less than 10px between controls, less than 20px in content areas)
- ❌ Replacing the brand logo with plain text, inline SVG placeholder, or generic icon in navigation bars, sidebars, or app shells — brand asset usage is a mandatory system rule on par with the type scale, card padding, and module spacing
- ❌ Generic AI-slop aesthetics (aggressive purple gradients, gratuitous emoji, rounded cards with left-border accent)

### Interaction Anti-patterns
- ❌ Missing semantic states (hover/focus/disabled) — all must be present
- ❌ Extremely disproportionate modal size (too wide or too narrow)
- ❌ Mixed alignment styles within one region — keep one alignment per region
- ❌ Navigation menus with too many levels not collapsed — use scroll arrows on overflow
- ❌ Tables extending indefinitely without scrollbars or breaking layout
- ❌ Using font sizes, weights, or text colors outside the defined type scale (20px/16px/14px/13px/12px with assigned weight and color tokens)
- ❌ Using card padding values other than 20px (`--space-20`) — this is a mandatory system rule on par with the type scale
- ❌ Using module spacing values other than 12px (`--space-12`) — this is a mandatory system rule on par with the type scale and card padding

### Code / Architecture Anti-patterns
- ❌ Merging multiple independent screens into a single HTML file — each screen is a separate route
- ❌ Ignoring the responsive contract — not testing on mobile viewports
- ❌ Replacing real data with placeholder charts and omitting loading/error states
- ❌ Overriding the system font stack with non-safe fonts
- ❌ Overriding the system type scale with arbitrary sizes or weights
- ❌ Removing or altering defined control behavior (tree favorites, step interactions)

> When in doubt, prioritize this design system document over invented patterns.

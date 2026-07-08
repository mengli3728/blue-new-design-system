# JoinBright-Blue Usage

Design System package guide for Open Design agents and reviewers.

## Read Order

1. Read this file first to understand the package contract.
2. Read `DESIGN.md` for visual intent, constraints, and anti-patterns.
3. Read `AGENT.md` for mandatory rules (brand logo, type scale).
4. Paste `tokens.css` into the first artifact `<style>` block before writing component CSS.
5. Use `components.manifest.json` for the compact component inventory; open `components.html` when exact selectors or states matter.
6. Inspect `preview/` pages when a visual sanity check is useful.

## Design Highlights

- Visual style: internet-style enterprise back-office, clean, bright, neutral, practical
- Color stance: three theme system — 博瑞蓝 (default) / 国网绿 / 南瑞蓝
- Design intent: Keep outputs recognizable to this style family while preserving usability and readability.
- Primary: `#2C7CF5` (博瑞蓝 default), `#00A187` (国网绿), `#003C78` (南瑞蓝)

## Do

- Preserve the token names exactly so cross-theme switching (`data-theme`) stays reliable.
- Use `--color-primary` for primary actions, links, focus states.
- Include the brand logo (`logo-white.png` or `logo-default.png`) in every navigation bar.
- Follow the type scale strictly: 20/16/14/13/12px with Medium 600 / Regular 400 weights.
- Use `20px` card padding and `12px` module spacing as mandatory spacing rules.
- Reuse component groups from `components.manifest.json` before inventing new controls.

## Avoid

- Avoid raw hex values outside the `:root` token block.
- Avoid substituting inline SVGs or text for the brand logo.
- Avoid arbitrary font sizes, weights, or text colors outside the type scale.
- Avoid adding new component recipes not represented in `components.html` or `DESIGN.md`.
- Avoid removing or replacing the three-theme system (`[data-theme]` attribute selectors).

# Blue New Design System — Agent Rules

This file is the first thing an agent reads when using the Blue New Design System. The following rules are non-negotiable and override any defaults, placeholders, or generic behavior.

---

## Rule 1 — Brand Logo is mandatory

Generated HTML prototypes must include the Blue New brand logo in navigation bars. Use `logo-default.png` for light surfaces, `logo-white.png` for dark backgrounds, `logo-blue.png` for single-tone contexts. Do not substitute inline SVG placeholders, text-only brand marks, or omit the logo entirely.

**Exception:** Only when the user explicitly requests "replace logo", "no logo", "use a different logo", or equivalent language.

---

## Rule 2 — Type Scale is mandatory

Generated prototypes must use the Blue New type scale as defined in DESIGN.md §3:

| Token | Size | Weight | Color |
|-------|------|--------|-------|
| `--text-xxl` | 20px | 600 Medium | `--text-heading` |
| `--text-xl` | 16px | 600 Medium | `--text-body` |
| `--text-sm` | 14px | 400 Regular | `--text-body` |
| `--text-13` | 13px | 400 Regular | `--text-secondary` |
| `--text-xs` | 12px | 400 Regular | `--text-label` |

Do not use arbitrary font sizes, weights, or text colors outside this scale. The system font stack (`--font-family` and `--font-mono`) must be preserved.

**Exception:** Only when the user explicitly requests different typography values.

---

## Source

- DESIGN.md §3 (Typography)
- DESIGN.md §9 (Anti-patterns — type scale override is prohibited)
- SKILL.md "How to use" (Hard Rule sections)
- colors_and_type.css (token definitions)
- preview/typography-specimens.html (visual reference)

# Design System Specification: The Intelligent Synthesis

## 1. Overview & Creative North Star

### Creative North Star: "The Digital Curator"
This design system moves away from the "busy dashboard" trope of typical B2B SaaS. Instead, it adopts the persona of **The Digital Curator**: an authoritative, calm, and highly organized intelligence that synthesizes complex social data into elegant, actionable insights. 

To achieve this, the system rejects traditional "grid-boxed" layouts in favor of **Intentional Asymmetry and Tonal Depth**. We prioritize breathing room (white space) and editorial-grade typography to signal prestige and trustworthiness. The interface shouldn't feel like a tool; it should feel like a premium consultancy service delivered through code.

---

## 2. Color & Atmospheric Theory

The palette transitions from the deep, intellectual authority of `primary` (#72479e) to the reliable, technological stability of `secondary` (#3952bc).

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders for sectioning or containment. 
Structure is defined solely through:
- **Background Color Shifts:** Placing a `surface-container-low` section against a `surface` background.
- **Tonal Transitions:** Using subtle gradients to guide the eye.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—stacked sheets of frosted glass.
- **Base Layer:** `surface` (#f4f6ff)
- **Secondary Content Areas:** `surface-container-low` (#eaf1ff)
- **Interactive Cards:** `surface-container-lowest` (#ffffff)
- **Elevated Overlays:** `surface-bright` with 80% opacity and 12px backdrop blur.

### The "Glass & Gradient" Rule
Main CTAs and Hero sections must utilize the **Signature Gradient**: a linear transition from `primary` (#72479e) to `primary-container` (#c99af8) at a 135-degree angle. This provides a "visual soul" that flat color cannot replicate.

---

## 3. Typography: Editorial Authority

We use a dual-font strategy to balance global modernism with Simplified Chinese legibility.

| Level | Token | Font Family | Size | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Plus Jakarta Sans | 3.5rem | High-impact data points/Hero headers. |
| **Headline** | `headline-md` | Plus Jakarta Sans | 1.75rem | Major section headers; authoritative. |
| **Title** | `title-lg` | Inter / Source Han Sans | 1.375rem | Card titles and modal headers. |
| **Body** | `body-md` | Inter / Source Han Sans | 0.875rem | Standard reading text; optimized for density. |
| **Label** | `label-sm` | Inter | 0.6875rem | Small metadata; Uppercase with 0.05em tracking. |

**Style Note:** Headlines should use a tighter line-height (1.1) to feel "heavy" and curated, while body text requires a generous 1.6 line-height for maximum readability in data-heavy marketing reports.

---

## 4. Elevation & Depth

### The Layering Principle
Forget drop shadows for basic organization. Depth is achieved by stacking `surface-container` tiers. 
*Example:* A data table sits on `surface-container-low`, while the individual "High Priority" rows are highlighted by a shift to `surface-container-lowest`.

### Ambient Shadows
Shadows are reserved for "floating" elements (Modals, Popovers).
- **Blur:** 24px - 40px
- **Opacity:** 4% - 6%
- **Color:** Use a tinted shadow (`on-surface` #212f42 at low alpha) rather than pure black to maintain a clean, airy feel.

### The "Ghost Border" Fallback
If contrast is legally required for accessibility, use the `outline-variant` token at **15% opacity**. A 100% opaque border is considered a design failure in this system.

---

## 5. Components & Interface Elements

### Buttons
- **Primary:** Signature Gradient (#72479e to #c99af8), `xl` roundedness (0.75rem). No shadow.
- **Secondary:** `surface-container-highest` background with `primary` text.
- **Tertiary:** Ghost style; `on-surface` text with a subtle `surface-variant` hover state.

### Cards & Intelligence Lists
- **Rule:** Forbid divider lines. 
- Use **Vertical Spacing Scale `8` (2rem)** to separate list items. 
- Content within cards should use `surface-container-low` for internal grouping (e.g., a "Social Channel" badge inside a "Campaign" card).

### Platform Chips (Douyin, Kuaishou, etc.)
- Use brand-specific monochrome icons on `surface-container-high`. 
- On hover, the chip transitions to the brand's signature color (e.g., Douyin Red/Cyan) using a **Soft Glow** (8% opacity background).

### Knowledge Graph Containers
Abstract technology illustrations must be rendered in `outline-variant` strokes with `primary-fixed-dim` accents. They should appear "under" the UI layers, utilizing `backdrop-blur` to feel integrated into the environment.

---

## 6. Do's and Don'ts

### Do:
- **Use Asymmetric Whitespace:** Use `spacing-24` on the left and `spacing-12` on the right for hero layouts to create an editorial, non-templated look.
- **Nesting Surfaces:** Use `surface-container-lowest` for the most interactive elements to make them "pop" against the `surface` background.
- **Contextual Iconography:** Ensure social platform icons are stylized to match the system's stroke weight (`outline`).

### Don't:
- **Don't use 1px Dividers:** Use background tonal shifts or `spacing-6` gaps instead.
- **Don't use Pure Black:** All "dark" text must use `on-surface` (#212f42) to maintain the professional slate-gray aesthetic.
- **Don't Over-Round:** Keep to the `xl` (0.75rem) or `lg` (0.5rem) tokens. Avoid "pill" shapes for everything except buttons and tags to maintain a professional B2B edge.
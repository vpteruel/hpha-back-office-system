# Design System Document: The Precision Editorial

## 1. Overview & Creative North Star
The "Precision Editorial" is our Creative North Star. This design system rejects the "spreadsheet-in-a-browser" aesthetic of typical back-office tools. Instead, it treats complex data management with the authority of a high-end financial journal.

We move beyond the "template" look by utilizing **intentional asymmetry** and **tonal depth**. Rather than using rigid lines to contain data, we use sophisticated layering and "breathing" white space. The goal is to make a data-dense environment feel calm, curated, and premium. We don't just display data; we give it an architectural home.

---

## 2. Colors & Surfaces
We utilize a sophisticated palette of trustworthy blues and neutral grays. However, the application of these colors is governed by strict structural rules to ensure a bespoke feel.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section off the UI. Containers must be defined solely through background color shifts.
- A section sitting on `surface` (#f8f9fa) should be defined by transitioning to `surface_container_low` (#f1f4f6).
- To create a "pop-out" effect, use `surface_container_lowest` (#ffffff) to create a natural, bright lift against a darker background.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Nesting should follow a logical progression of depth:
1. **The Base:** `background` (#f8f9fa) or `surface`.
2. **The Layout Block:** `surface_container` (#eaeff1).
3. **The Active Workspace:** `surface_container_high` (#e3e9ec).
4. **The Priority Card:** `surface_container_lowest` (#ffffff).

### Signature Textures & Glass
- **Glassmorphism:** For floating menus or sidebar overlays, use `surface_container_lowest` at 80% opacity with a `24px` backdrop-blur. This softens edges and makes the layout feel integrated.
- **The Signature Gradient:** For Primary CTAs, do not use a flat color. Use a subtle linear gradient from `primary` (#005db5) to `primary_dim` (#0052a0) at a 135-degree angle. This adds "soul" and a tactile, pressed-ink quality to the UI.

---

## 3. Typography
Our typography pairing balances the technical precision of **Inter** with the editorial character of **Manrope**.

- **Display & Headlines (Manrope):** Use `display-lg` through `headline-sm` for page titles and high-level data summaries. Manrope’s wider stance commands authority and breaks the "standard sans-serif" monotony.
- **The Working Horse (Inter):** Use `body-md` (#0.875rem) for all data tables and inputs. Inter's tall x-height ensures readability even at high densities.
- **Labels & Metadata:** Use `label-sm` (#0.6875rem) in `on_surface_variant` (#586064) for table headers. This creates a clear visual distinction between "the frame" and "the data."

---

## 4. Elevation & Depth
We convey hierarchy through **Tonal Layering** rather than traditional drop shadows.

- **The Layering Principle:** Depth is achieved by "stacking" surface tiers. To make a card feel "raised," place a `surface_container_lowest` card on top of a `surface_dim` section. The contrast in lightness provides the lift.
- **Ambient Shadows:** When a true float is required (e.g., a Modal), use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(12, 15, 16, 0.06)`. Note the use of `inverse_surface` (#0c0f10) as the shadow tint—never use pure black.
- **The "Ghost Border":** If a separator is required for accessibility, use `outline_variant` (#abb3b7) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Data Tables (The Core)
- **Rule:** Forbid the use of vertical or horizontal divider lines.
- **Execution:** Use `spacing.2` (0.4rem) of vertical padding. Use `surface_container_low` for the header row and a subtle `surface_bright` hover state on rows to guide the eye.
- **Typography:** Use `body-sm` for high-density tables to maximize information density without clutter.

### Sidebar Navigation
- **Structure:** Use `surface_container_highest` (#dbe4e7) for the sidebar background.
- **Active State:** Instead of a box around the active link, use a `2px` vertical pillar of `primary` on the far left and transition the link text to `on_primary_fixed_variant` (#005bb0).

### Buttons
- **Primary:** Gradient fill (`primary` to `primary_dim`), `rounded-md` (0.375rem).
- **Secondary:** Transparent background with a "Ghost Border" (15% opacity `outline`).
- **Tertiary:** Pure text using `primary` color, reserved for low-emphasis actions within data rows.

### Status Badges
- Do not use "traffic light" red/green/yellow unless it is a critical error.
- Use **Tonal Badges**: A background of `primary_container` with text in `on_primary_container` for "Active" or "Processing" states. This keeps the back-office looking professional and calm.

---

## 6. Do’s and Don’ts

### Do
- **Do** use `spacing.8` (1.75rem) between major content blocks to give the data room to breathe.
- **Do** use `surface_container_lowest` for the main data entry area to focus the user's eye.
- **Do** use `manrope` for large numerical callouts (e.g., Total Revenue) to give them an editorial, "dashboard" feel.

### Don’t
- **Don’t** use 100% black text. Always use `on_surface` (#2b3437) to maintain a premium, ink-on-paper look.
- **Don’t** use standard `0.25rem` rounding for everything. Use `rounded-xl` (0.75rem) for main containers and `rounded-sm` (0.125rem) for checkboxes to create a "nested" visual language.
- **Don’t** use shadows on every card. If a card is part of a grid, it should be flat, defined only by its color shift. Reserved shadows only for elements that truly "interrupt" the flow (Modals/Popovers).
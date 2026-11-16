# AAHAR design language

This is the implementation guide for adding pages and components to AAHAR. Use it
with the existing patterns in [`src/App.tsx`](./src/App.tsx) and
[`src/index.css`](./src/index.css). The goal is to make new work feel like the
same calm, trustworthy food brand rather than a collection of unrelated screens.

## Brand idea

AAHAR is healthy everyday food with real Hyderabad flavour. The interface should
feel:

- **Warm and grounded:** food photography, muted natural colours, and generous
  whitespace.
- **Clear and trustworthy:** direct copy, visible prices, measurable nutrition,
  and predictable interactions.
- **Modern but human:** rounded surfaces, soft depth, restrained motion, and
  occasional playful colour blocks.
- **Confident, not clinical:** avoid sterile dashboards, excessive borders,
  neon colours, gradients used as decoration, or dense information layouts.

## Source-of-truth tokens

Use the existing utility classes and component classes before introducing new
ones. When a new colour is genuinely needed, keep it within this palette.

| Role                     | Light                           | Dark / alternative                 |
| ------------------------ | ------------------------------- | ---------------------------------- |
| Page background          | `#dce7eb`                       | `#0d292c`                          |
| Primary dark surface     | `#163b3d`                       | `#153639` / `#17383b`              |
| Elevated surface         | `#ffffff` with 45–70% opacity   | `#123235` / `#1a3d40`              |
| Primary text             | `#101313`                       | `#eef7f4`                          |
| Muted text               | `#536267`, `#59676c`, `#66757a` | `#b2c9c5`, `#a8bfba`               |
| Brand action / accent    | `#688456`                       | `#a9c792`                          |
| Brand action hover       | `#587247`                       | `#1d4d50`                          |
| Nutrition highlight      | `#dfe9d4`                       | `#294b41`                          |
| Non-vegetarian indicator | `#a85f4f`                       | use sparingly                      |
| Editorial feature block  | `#a9bb9c`                       | use with dark text                 |
| Supporting yellow        | `#efcb73`                       | use only as a small ambient accent |

Use opacity for subtle borders and surfaces:

- Light borders: `border-black/5` or `rgb(16 19 19 / 8–10%)`.
- Dark borders: `border-white/10` or `border-[#9cc3bc]/15`.
- Frosted surfaces: white at roughly 45–70% opacity with `backdrop-blur`.
- Avoid introducing arbitrary saturated blues, reds, or purples.

## Typography

- The project uses **DM Sans** through `src/index.css`. Do not add a second
  display font for ordinary UI.
- Headings are semibold, compact, and slightly tracked in:
  `tracking-[-.03em]` to `tracking-[-.065em]`.
- Use `section-label` for small uppercase eyebrow labels:
  olive, `text-[0.72rem]`, bold, and wide letter spacing.
- Use `section-title` for major section headings. It is responsive, capped at
  700px, and uses a tight `1.02` line height.
- Body copy is readable rather than dense: generally `text-sm` or `text-base`,
  `leading-6`/`leading-7`, with a muted colour.
- Prices and key metrics may use larger semibold type, but do not make every
  label visually loud.
- Keep copy concise and specific. Prefer “Fresh daily” or “42g protein” over
  marketing paragraphs with no measurable value.

## Layout and spacing

- Wrap page content in `page-shell`: `width: min(100% - 2rem, 1280px)`.
- Use large vertical section rhythm: `py-20 sm:py-24` is the established
  default for page sections.
- Use responsive grids that collapse cleanly:
  `grid`, `gap-4`/`gap-6`, then `sm:`/`md:`/`lg:` columns.
- Keep the mobile gutter at roughly 1rem and avoid horizontal overflow except
  for deliberately scrollable category tabs.
- Prefer asymmetrical editorial layouts such as `.92fr 1.08fr` or
  `1.1fr .9fr` for hero and feature sections.
- Align section headings and supporting copy on the same baseline where possible.
- Use `min-h-` only when it protects composition; content must still be able to
  grow with localization and small screens.

## Shape, surfaces, and depth

AAHAR uses a rounded visual vocabulary:

- Page/feature panels: `rounded-[34px]`.
- Cards and large content groups: `rounded-[26px]` to `rounded-[30px]`.
- Media frames: `rounded-[24px]` to `rounded-[27px]`.
- Compact cards: `rounded-[18px]` to `rounded-[20px]`.
- Buttons, badges, tabs, and chips: `rounded-full`.
- Icon controls: use the existing `icon-button` class.

Prefer soft depth over heavy outlines:

- Use translucent fills, subtle borders, and occasional large soft shadows.
- Use `backdrop-blur` for content over imagery.
- Do not stack multiple strong shadows or use sharp rectangular panels unless
  the content specifically calls for it.

## Component patterns

### Navigation

- Keep the header sticky, approximately `h-[76px]`, translucent, and blurred.
- Use the `nav-link`, `primary-button`, and `icon-button` classes.
- Desktop navigation is hidden below `md`; mobile navigation is a rounded
  surface below the header.
- Every icon-only control needs an explicit `aria-label` and, when useful, a
  `title`.

### Buttons and actions

- Primary action: `primary-button`, olive fill, white text, arrow icon where a
  forward action is implied.
- Secondary action: `secondary-button`, translucent light surface, subtle
  border, no competing accent colour.
- Icon-only action: `icon-button`, circular 2.75rem target.
- Preserve the existing interaction language: 180ms transitions, a 1px lift on
  primary buttons, and a small arrow translation on hover.
- Buttons should state the outcome: “Choose plan”, “View meal plans”, or “Join
  early access”, not vague labels such as “Submit”.

### Cards and lists

- Cards should have one clear hierarchy: label/title, supporting copy or metric,
  then the action.
- Food cards should show the image, name, price, and nutrition metadata together.
- Use compact rounded chips for calories, protein, categories, or status.
- Use `motion-card` for cards that reveal on scroll and lift subtly on hover.
- Make the entire actionable card a button only when the whole card has one
  action; otherwise use a semantic article with a focused button/link inside.

### Imagery

- Use high-quality food or product photography with `object-cover`.
- Give every meaningful image useful alt text. Decorative overlays and ambient
  shapes do not need alt text.
- Use a dark bottom gradient when text sits over an image.
- Keep image treatment editorial and natural; avoid filters and excessive
  rounded clipping.
- Lazy-load below-the-fold images with `loading="lazy"`.

### Dialogs, toast, and transient UI

- Dialogs use a dark translucent backdrop, `backdrop-blur-sm`, a large rounded
  light/dark surface, and a two-column image/content layout on larger screens.
- Add `role="dialog"`, `aria-modal="true"`, and a labelled heading.
- Close dialogs on Escape and by clicking the backdrop. Restore body scrolling
  when the dialog unmounts.
- Toasts use a fixed, centered, pill-shaped deep teal surface with
  `role="status"`. Keep messages short and outcome-oriented.
- Do not silently swallow failed actions. If a new async action can fail, show
  an explicit error state using the existing visual language.

## Motion

Motion should communicate hierarchy, not decorate every element:

- Use the existing hero entrance animations and `[data-reveal]` /
  `.is-visible` pattern for section reveals.
- Keep transitions around 180ms for controls and 450–540ms for entrance
  animation.
- Use small movement: `translateY(1–2px)` or a very small image scale.
- Never make essential content depend on animation. Respect
  `prefers-reduced-motion` when adding new longer or repeating animations.
- Do not add automatic carousels or looping motion without a clear product need.

## Interaction and accessibility

- Use semantic headings in order: one page `h1`, then section `h2`, then card
  `h3`/`h4`.
- Use real `<button>` elements for state changes and real links for navigation.
- Add `aria-pressed` for toggles, `aria-selected`/`role="tab"` for tab controls,
  and `aria-live="polite"` for changing content.
- Preserve the global visible focus ring from `src/index.css`; never remove
  outlines to make a control look cleaner.
- Maintain at least a 2.75rem target for icon buttons and enough contrast for
  muted text in both themes.
- Test keyboard operation for menus, tabs, dialogs, and any newly interactive
  card.
- Keep dark mode complete: every new surface and text colour needs an intentional
  `.dark` treatment, not merely a default light colour.

## Responsive behavior

Design mobile-first, then enhance:

- At small widths, stack hero copy/actions and feature columns.
- Let action groups become `flex-col`, then return to `sm:flex-row`.
- Use horizontally scrollable pills for long category sets rather than wrapping
  into several cramped rows.
- Keep cards readable at one column before adding `sm:grid-cols-2` or
  `lg:grid-cols-*`.
- Check long dish names, larger text settings, and narrow viewport widths; do
  not rely on fixed heights for copy-heavy content.

## Implementation checklist

Before considering a new page or component complete:

1. Use `page-shell`, the established palette, DM Sans, and the rounded surface
   scale unless there is a documented reason not to.
2. Provide both light and dark states.
3. Use a semantic HTML structure and visible keyboard focus.
4. Give images, controls, tabs, dialogs, and changing status text the required
   accessible names/roles.
5. Match existing spacing, hover, reveal, and button behavior before adding new
   patterns.
6. Verify mobile layout and content growth, not just the desktop composition.
7. Run `npm run build` and `npm run format` (or the smallest relevant command)
   before handing off.

If a new pattern is needed repeatedly, add it to `src/index.css` as a small
named component utility rather than duplicating a long class string across
pages. Keep the visual system intentionally small.

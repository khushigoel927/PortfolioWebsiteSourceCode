## Changes

### 1. About page — add portrait photo
- Use the existing `khushi-2.jpg` (the black-and-white Nikon portrait, currently photo #2 in the gallery) as a portrait on the About page.
- Place it alongside the intro text — a tall portrait image to the right of the hero/bio on desktop, stacked above the bio on mobile.
- Remove that photo from the `photos` array in `photography.tsx` so it no longer appears in the gallery.

### 2. Photography page — add two new photos
- Copy the two newly uploaded images into `src/assets/`:
  - `DSC_0522.jpg` → `src/assets/khushi-11.jpg` (succulent/wire sculpture against sky)
  - `IMG_2398.jpg` → `src/assets/khushi-12.jpg` (husky portrait at the beach)
- Add both to the `photos` array in `photography.tsx` with descriptive alt text.
- Net result: gallery goes from 10 → 11 photos (removed portrait, added two).

### 3. Projects page — hover to reveal details
- Update `ProjectRow` in `src/routes/projects.tsx` so that by default only the project **title** (and number) is visible.
- On hover (and on keyboard focus, for accessibility), the blurb, detailed description, and stack tags smoothly fade/slide in.
- Implementation: keep all content in the DOM, control visibility with Tailwind's `group` + `group-hover:` / `group-focus-within:` utilities and `opacity` / `max-height` transitions. No JS state needed.
- On touch devices (no hover), tapping the row will also expand it via `:focus-within` so it remains usable on mobile.

No changes to projects content, fonts, colors, or layout structure beyond what's described above.
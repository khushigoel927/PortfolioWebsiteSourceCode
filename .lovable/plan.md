# Khushi Goel — Portfolio Website Plan

A polished, multi-page personal portfolio with editorial typography, a dark indigo aesthetic, and photography-forward layouts.

## Pages

### 1. Home / About (`/`)
- Large serif hero: "Khushi Goel" with a one-line tagline ("Electrical Engineering & CS @ UC Berkeley · building systems, taking photos").
- Long-form About section using the bio provided — split into thoughtful paragraphs: who I am, what I build, STEM accessibility work, and photography as a practice.
- Quick highlights strip: skills (Python, Java, C, SQL, RISC-V), education (UC Berkeley EECS, Junior), interests.
- Subtle navigation to Projects and Photography.
- Footer with email/LinkedIn/GitHub placeholders.

### 2. Projects (`/projects`)
Editorial list of all 5 engineering projects, each with title, role, short description, and tech tags:
- Kalshi Trading Bot — automated trading on live market data (Python, Kalshi API)
- SQL Engine in Java — CREATE/INSERT/SELECT/DELETE/JOIN from scratch (Java)
- 32-Register RISC-V CPU Emulator — pipelined datapath + control logic (RISC-V, systems)
- NGordNet — WordNet + Google NGram analysis & visualization (Java, data)
- Build Your Own World — tile-based game engine with save/load (Java)

Layout: numbered editorial entries (think magazine index), hover reveals more detail. No fake stats or "trusted by" filler.

### 3. Photography (`/photography`)
- Short intro paragraph framing it as a beginner's practice in attention.
- Masonry/grid gallery of placeholder photo cards (6–9 slots) ready to be swapped with real photos.
- Lightbox-style click-to-enlarge.

## Design System

- Palette (Midnight Indigo): bg `#0a0a1a`, surface `#141432`, deep accent `#1e1e5a`, primary accent `#4f46e5`, plus near-white text.
- Typography: **Instrument Serif** for display/headings (large, generous), **Work Sans** for body and UI.
- Generous whitespace, thin hairline dividers, restrained motion (subtle fade/slide on scroll only).
- Persistent minimal top nav: "Khushi Goel" wordmark left, links (About · Projects · Photography) right.

## Technical Notes

- React + Vite + Tailwind + shadcn (existing template).
- React Router with three routes; shared `<Layout>` for nav/footer.
- Design tokens in `index.css` (`:root` + Tailwind theme) — semantic HSL tokens for bg/surface/primary/muted/foreground.
- Google Fonts via `index.html` link tags.
- SEO: per-page `<title>` and meta description, single H1, semantic landmarks, alt text on images.
- Photo placeholders generated as 9 abstract/atmospheric images stored in `src/assets/` (easily replaceable later).

## Out of Scope (for now)
- No CMS / backend — content lives in code, easy to edit.
- No contact form (just mailto link); can add Lovable Cloud later if you want a real form.
- No blog.

# Changelog

Notable changes to the portfolio. Newest first.

## 2026-09-03 — A landing intro, and a header that flies into place

### Home intro

- The page now opens on a full-screen greeting: the handwritten wordmark centred
  in the viewport over *"I design digital products and / this is my portfolio."*
  The old `Hi!` block — heading, paragraph and "Let's work!" button — is gone.
- As you scroll, the wordmark rises and shrinks into the header. It is one
  element throughout: the header's own copy is an invisible placeholder while a
  fixed `.wordmark-fly` carries the visible name, so the landing is a swap
  between two things already in the same place, down to the sub-pixel.
- The flight is measured against the intro's own height, ending at the exact
  scroll position where the work grid slides under the header. There is no dead
  scrolling at either end.
- The tagline travels with it — same path, same rate of shrink, fading out early
  (`--hero-p`, `--hero-dy`, `--hero-tag-scale`). It tracks the wordmark's bottom
  edge rather than its top, because the wordmark scales down from its top and
  would otherwise pull away from the line beneath it.
- Once scrolled through, the intro is taken out of the document: scrolling back
  up returns you to the work, not the greeting. The removal waits for the scroll
  to settle — a gesture in flight aims at an absolute position, and a document
  that just lost a screen would land it at the bottom of the page — and the
  scroll offset is corrected by measuring the grid's shift, since browsers
  usually anchor it themselves.
- Leaving home records where you were, adjusted for the intro's removal, so
  returning from a project or About lands on the same cards with the header
  already in place. Scrolling half the intro counts as having seen it; leaving
  before that gets you the greeting again. A page reload always starts over.
- New `src/lib/intro.js`: a small store the header and the home page both
  subscribe to, so they agree at the instant the intro is dropped.

### Header

- Pinned only while the intro is playing, since that is the spot the wordmark is
  flying to. The pin is released the moment the wordmark lands — its sticky
  offset goes negative — so the header rides up and off with the page instead of
  dragging at the top of the screen. Everywhere else it scrolls away as before.
- Project pages keep the wordmark and the `about` link but lose the bar: the
  header is lifted out of the flow so the hero image runs to the top of the
  window behind it. This reverses the previous release's known side effect.
- `about` is white on every route, no longer grey until hovered or active.

### About page

- The lead drops the "background in Design and Multimedia Communications" clause:
  *"I'm João, a Product & Web Designer and I'm passionate about creating
  engaging, user-centered digital products that solve real problems."*

## 2026-09-03 — Header, cards, buttons and a rebuilt About page

### Header

- The header no longer sticks to the viewport. It is part of the document flow
  and scrolls away with the page (`fixed` → `relative`), so the scroll listener,
  the hairline-on-scroll state and the `h-20` spacer in `App.jsx` are all gone.
- Laid out as `grid-cols-[1fr_auto_1fr]`: the wordmark stays optically centred no
  matter how wide the `about` link grows, and `about` is pinned to the far right.
- Dropped `.shell` from the header in favour of full-width padding, so `about`
  sits against the viewport edge rather than the 1440px container edge.
- The wordmark is thinner: Caveat 700 → 400 (the 400 face was added to the Google
  Fonts request), 42px → 38px, with slightly looser tracking to suit the lighter
  strokes.

### Project cards

- Hover is one coordinated gesture at `--slow` (620ms) instead of a flat
  brightness drop: the image darkens to `brightness(0.62)`, the veil deepens, the
  caption rises 6px, an accent rule draws in from the left under the title, and
  the date warms to full white.
- Every hover state is mirrored on `:focus-visible`, so keyboard navigation gets
  the same treatment.
- No zoom or scale on the image — it stays put while the light changes.

### Buttons

- Restyled as outlined pills: transparent background, 1px border, uppercase 14px
  label at `0.14em` tracking. `.btn-accent` is a white hairline that inverts to
  black-on-white on hover; `.btn-ghost` is the same shape at 30% border opacity.
- The arrow no longer slides on hover. It is a static glyph; the button's own
  colour inversion carries the interaction.

### About page

- Rebuilt as a single centred column (`max-width: 68rem`) with padding stepping
  from 1.5rem to 6rem, replacing the old two-column grid with `t-h1` section
  headings.
- The page opens with a small grey uppercase `ABOUT ME` label over a centred lead
  statement in medium weight, with `Product & Web Designer` picked out in the
  accent colour.
- Sections are announced by a small uppercase label over a white hairline rule
  (`rgba(255, 255, 255, 0.9)`, up from `0.09`) rather than a display heading, so
  the prose is the largest thing on the page. The first section has no rule, and
  neither do the contact buttons.
- Two weights carry the hierarchy — medium (500) for headings, light (300) for
  prose: 40px lead, 34px entry titles, 22px body, 15/14px labels.
- Skills are label/value rows (`UX/UI Design · Interaction Design · …`) instead of
  green-bulleted lists.
- Rules span the full container; prose is capped at a 50rem measure so 22px text
  keeps a readable line length.
- The follow-up bio paragraph was removed; the lead now carries the introduction
  alone (`bioParagraphs` is gone from `src/data/about.js`).

### Removed

- **Footer.** Its LinkedIn link was still a `#` placeholder, and the `mailto:` it
  held is reachable from the buttons on Home and About.
- **The hand-drawn green doodles.** The `Underline` under "clarity" (Home) and
  under "Product & Web Designer" (About), plus the `Squiggle` above the About
  contact buttons. `Doodles.jsx` now exports only `ArrowUpRight`. The emphasised
  words are still emphasised, in white.

### Known side effect

- Project hero images used to run behind the transparent fixed header. With a
  static header they now start below it. *(Fixed in the entry above: project
  pages no longer render a bar.)*

# joaoilharco.github.io

Personal portfolio — React 19 + Vite + Tailwind CSS v4.

## Development

```bash
npm install
npm run dev      # local dev server with hot reload
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Structure

```
index.html            Vite entry point
src/
  main.jsx            Router setup
  App.jsx             Routes + scroll behaviour
  index.css           Design tokens, fluid type scale, .shell, hover/motion
  components/         Navbar, Home, About, Project
  components/Doodles  ArrowUpRight, the arrow used inside buttons
  data/projects.js    All project copy and media, keyed by URL slug
  data/about.js       Bio, experience, education, skills — mirrors assets/Resume.pdf
public/assets/        Images, video and Resume.pdf, copied verbatim to dist/assets
```

Editing content means editing `src/data/` — no component changes needed to add a
project, a job, or a skill. New projects also need their slug added to
`projectOrder` in `src/data/projects.js`.

## Design notes

Layout runs through `.shell` (centred, `max-width: 1440px`, fluid padding) — not
fixed side padding, which left huge dead margins at 1080p. Type uses a fluid
`clamp()` scale (`.t-display`, `.t-h1`, `.t-h2`, `.t-lead`, `.t-body`,
`.t-label`).

Line-length measures in `ch` must sit on the element that sets the font-size, not
on a wrapper — `ch` resolves against the element's own font, so a `max-w-[46ch]`
on a plain `div` is measured against the inherited 16px.

The accent is `#00E013`, used sparingly: the highlighted phrase in the About
lead, the rule that draws in under a project card title on hover, and the nav
link underline. Buttons are outlined pills, not filled. Motion is one easing
(`--ease`) on transform, opacity and filter, and `prefers-reduced-motion` turns
it all off.

The header is not fixed — it scrolls away with the page. The About page opts out
of `.shell` and uses its own `.about-page` container.

## Routes

| Route | Page |
| --- | --- |
| `#/` | Home |
| `#/about` | About |
| `#/work/:slug` | Project, e.g. `#/work/quinta-do-outeiro` |

Anything else redirects home. The project slug is the key in
`src/data/projects.js`, so renaming a key changes its public URL.

Routing is hash-based on purpose. GitHub Pages serves static files and cannot
rewrite unknown paths to `index.html`, so a clean URL like `/work/patudos` would
404 on refresh or when shared. Hash routes never reach the server.

Bundled JS/CSS is emitted to `dist/static/` so that `dist/assets/` stays reserved
for the portfolio media, keeping every `assets/...` URL (including the resume
link) stable.

## Deployment

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push
to `main`. This requires **Settings → Pages → Build and deployment → Source** to
be set to **GitHub Actions** (previously it served the repo root directly).

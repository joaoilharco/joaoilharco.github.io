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
  App.jsx             View switching (home / about / project)
  components/         Navbar, Footer, Home, About, Project
  data/projects.js    All project copy and media
  data/about.js       Bio, experience, education, skills — mirrors assets/Resume.pdf
public/assets/        Images, video and Resume.pdf, copied verbatim to dist/assets
```

Editing content means editing `src/data/` — no component changes needed to add a
project, a job, or a skill. New projects also need their id added to
`projectOrder` in `src/data/projects.js`.

Bundled JS/CSS is emitted to `dist/static/` so that `dist/assets/` stays reserved
for the portfolio media, keeping every `assets/...` URL (including the resume
link) stable.

## Deployment

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push
to `main`. This requires **Settings → Pages → Build and deployment → Source** to
be set to **GitHub Actions** (previously it served the repo root directly).

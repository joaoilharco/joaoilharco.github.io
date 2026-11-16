# João Ilharco · Portfolio

My personal portfolio as a Product & Web Designer. It shows my design projects, a short bio with my
experience and skills, and a way to contact me.

**Website:** https://joaoilharco.github.io/

## What it does

- **Work:** big project cards, generated from `projects.json`. The filter buttons (Web, Branding,
  Motion, Packaging) are created from the tags in that file and show only the matching projects.
- **Project details:** clicking a card opens a `<dialog>` with the brief and images of the project. It
  closes with the ✕ button, the Esc key or by clicking outside.
- **About:** bio, experience, education and skills.
- **Contact:** email link, a button that copies the email to the clipboard and my resume.

## How it meets the requirements

| Requirement | Where |
|---|---|
| Dynamic interaction | Project filters, project dialog, copy email button |
| CSS animation | `@keyframes rise` (hero, cards, dialog), `fade-in` (dialog background), scroll reveal with `animation-timeline: view()` |
| Content fetched from GitHub | `script.js` fetches `projects.json` (my own static content in this repository) and builds the cards |
| No third party libraries | Only HTML, CSS and plain JavaScript. The fonts come from Google Fonts |
| Responsive | Fluid sizes with `clamp()`, `auto-fill`/`auto-fit` grids and a media query for phones |

## Files

```
index.html      page structure
style.css       styles and animations
script.js       fetches the projects and handles the interaction
projects.json   project content
assets/         project images and resume
SEEME.mp4       demo video
```

## How to run locally

`fetch` does not work when `index.html` is opened directly from disk, so the folder needs to be
served by a static server. From inside this folder, run the `github-pages.js` example from class
(`5-browser/examples/github-pages.js`):

    node path/to/github-pages.js

and open http://localhost:3000.

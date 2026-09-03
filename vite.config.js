import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages has no server-side rewrites, so it answers an unknown path with
// 404.html. Shipping a copy of index.html under that name makes deep links and
// hard refreshes boot the SPA instead of showing the default 404 page.
function spaFallback() {
  return {
    name: 'spa-404-fallback',
    apply: 'build',
    closeBundle() {
      const outDir = resolve(import.meta.dirname, 'dist')
      copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'))
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), spaFallback()],
  build: {
    // Keep bundled output out of /assets, which is reserved for the portfolio
    // media copied verbatim from public/.
    assetsDir: 'static',
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Keep bundled output out of /assets, which is reserved for the portfolio
    // media copied verbatim from public/.
    assetsDir: 'static',
  },
})

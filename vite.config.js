// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: 'src/main.jsx',  // remove leading slash
    },
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: '',
    sourcemap: true,
  },
  plugins: [react()],
})

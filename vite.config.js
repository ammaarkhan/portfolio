// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/Personal-Website/' : './',
  build: {
    rollupOptions: {
      input: '/src/main.jsx',
    },
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: '',
    sourcemap: true,
    publicPath: process.env.NODE_ENV === 'production' ? '/Personal-Website/' : '/',
  },
  plugins: [react()],
})

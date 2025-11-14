/**
 * VITE CONFIGURATION (ALTERNATIVE)
 * 
 * Este arquivo é mantido para referência.
 * O projeto está usando Webpack como bundler principal.
 * 
 * Para usar Vite novamente, execute:
 * - yarn vite:dev
 * - yarn vite:build
 * - yarn vite:preview
 * 
 * Veja WEBPACK.md para documentação do Webpack
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true,
  },
})

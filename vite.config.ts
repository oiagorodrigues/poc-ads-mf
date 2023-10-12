import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import topLevelAwait from 'vite-plugin-top-level-await'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    topLevelAwait(),
    federation({
      name: 'ads_mfe',
      filename: 'remoteEntry.js',
      exposes: {
        './AdsContainer': './src/components/AdsContainer.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  preview: {
    port: 5001,
    strictPort: true,
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'safari >= 11'], // Safari ke liye force
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
  ],
});

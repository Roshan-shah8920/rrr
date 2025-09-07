import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext" // iPhone Safari ke liye zyada compatible
  },
  server: {
    host: true, // network par test karne ke liye (iPhone same WiFi me chalega)
    port: 3000
  }
})

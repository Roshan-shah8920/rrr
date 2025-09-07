import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext" // iPhone Safari compatible
  },
  server: {
    host: true, // iPhone same WiFi par access karne ke liye
    port: 3000
  }
})

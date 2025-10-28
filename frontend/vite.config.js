// frontend/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // ← これが超大事！
  base: '/lboss-app/',
  plugins: [react()],
})

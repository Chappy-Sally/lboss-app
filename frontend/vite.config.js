// frontend/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/lboss-app/', // ← ここが超重要（リポジトリ名）
  plugins: [react()],
})

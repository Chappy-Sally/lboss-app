import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ★ GitHub Pages の公開パス（リポジトリ名）
export default defineConfig({
  base: '/lboss-app/',
  plugins: [react()],
})

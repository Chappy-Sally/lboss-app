import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  base: '/lboss-app/', // ← リポジトリ名に合わせる
})

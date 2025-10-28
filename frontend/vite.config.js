import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/lboss-app/',   // ← リポジトリ名に合わせる
  plugins: [react()],
})

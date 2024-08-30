import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/insta-bubbles-spa/",
  plugins: [react()]
})

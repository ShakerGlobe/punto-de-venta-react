import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <--- Plugin de v4

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
})
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/aiohweb/', // 👈 Add this line
  plugins: [tailwindcss()],
})

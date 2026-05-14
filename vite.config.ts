import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base to your GitHub Pages repo path, e.g. '/xclusive-gift-web/'
// Change this to match your GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: '/XclusiveGiftWeb/',
})

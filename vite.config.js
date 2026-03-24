import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/ai-briefing-web/',
  plugins: [vue()],
  server: {
    host: '127.0.0.1',
    port: 4174
  },
  preview: {
    host: '127.0.0.1',
    port: 4174
  }
})

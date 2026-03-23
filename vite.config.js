import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/news/ai-briefing/',
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

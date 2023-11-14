import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  // 设置@指向src目录
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'scene': resolve(__dirname, 'src/assets/scenery'),
    }
  },
  publicPath: './',
})

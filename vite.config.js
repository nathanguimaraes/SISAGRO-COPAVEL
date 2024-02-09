import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: [
        'src/assets/equipe/01.png', 'src/assets/equipe/02.png', 'src/assets/equipe/03.png'
      ]
    }
  }
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from '@rollup/plugin-alias'
import { resolve } from 'path'

const projectRootDir = resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [
    vue(),
    alias({
      entries: [
        {
          find: '@',
          replacement: resolve(projectRootDir, 'src')
        }
      ]
    })
  ],
})

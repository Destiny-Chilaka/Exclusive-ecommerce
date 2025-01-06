import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import { defineConfig as defineUnoConfig } from 'unocss'
import presetIcons from '@unocss/preset-icons'
import UnoCSS from 'unocss/vite'
import presetUno from 'unocss/preset-uno'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Icons({
      autoInstall: true,
      compiler: 'vue3'
    }),
    UnoCSS({
      presets: [
        presetUno(),
        presetIcons({
          scale: 1.2,
          warn: true,
        }),
      ],
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  presets: [
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
})

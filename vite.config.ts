import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';
import vitePluginSvgr from 'vite-plugin-svgr';


export default defineConfig({
  plugins: [
    tailwindcss(),
    vitePluginSvgr()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
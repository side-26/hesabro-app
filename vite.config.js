import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require("path")
    // https://vitejs.dev/config/
    // export module.exports={}
export default defineConfig({
    plugins: [vue()],
    server:{
        proxy: {
          "/api": {
          target: 'https://asrd.mobittest.ir',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => {
            console.log("path is",path);
            return  path.replace(/^\/api/, '')
          }
          },
        }
      },
    alias: {
        "@": path.resolve(__dirname, './src')
    },
});

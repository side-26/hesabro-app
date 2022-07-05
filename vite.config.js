import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
// https://vitejs.dev/config/
// export module.exports={}
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': 'https://hesabro.com',
    },
  },
  // server:{
  //   proxy:"https://asrd.mobittest.ir"
  // },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
})

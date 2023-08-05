import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from "@vitejs/plugin-legacy"
import {join} from "node:path"
// https://vitejs.dev/config/
export default defineConfig(({command, mode})=>{
  return {
    envDir:"./env",
    build:{
      outDir:join(__dirname,`dist-env-${mode}`)
    },
    // 加载env文件的目录
    plugins: [react(),
      legacy({
        targets:['defaults','not IE 11']
      })],

    resolve:{
      alias:{
        "@src":join(__dirname,"src")
      }
    },
    define:{
      isDev: mode == "development" ? true : false
    },

  }
})

import { defineConfig } from 'vite'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'

export default defineConfig({
    plugins: [
        crx({ manifest }),
    ],
    // 强制让构建产物在根目录，方便调试
    build: {
        outDir: 'dist',
    },
    server: {
        port: 5173,
        strictPort: true,
        hmr: {
            port: 5173,
        },
        // 允许跨域请求
        cors: true
    },
})
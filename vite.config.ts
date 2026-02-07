import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  // Use './' to ensure paths are relative and work on any hosting setup
  base: './', 
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    // We remove the manual rollupOptions to let Vite handle 
    // the asset paths automatically and correctly.
    emptyOutDir: true,
  },
  server: {
    port: 8080,
  }
})

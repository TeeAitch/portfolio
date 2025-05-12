import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  base:'',
  plugins: [react()],
  resolve:{
    alias: {
      ...(process.platform === 'win32' ? {
        "@": path.join(__dirname, "/src"),
        "@pages": path.join(__dirname, "/src/pages"),
        "@components": path.join(__dirname, "/src/components"),
        "@styles": path.join(__dirname, "/src/styles"),
      } : {
        "@": path.resolve(__dirname, "/src"),
        "@pages": path.resolve(__dirname, "/src/pages"),
        "@components": path.resolve(__dirname, "/src/components"),
        "@styles": path.resolve(__dirname, "/src/styles"),
      })
    }
  }
});

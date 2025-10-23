import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@atoms': path.resolve(__dirname, './src/Atoms/'),
      '@molecules': path.resolve(__dirname, './src/Molecules/'),
      // '@organisms': path.resolve(__dirname, './src/Organisms/'),
      '@templates': path.resolve(__dirname, './src/Templates/'),
      '@pages': path.resolve(__dirname, './src/Pages/'),
      '@hooks': path.resolve(__dirname, './src/Hooks/'),
      '@interfaces': path.resolve(__dirname, './src/Interfaces/'),
      '@server': path.resolve(__dirname, './src/server/'),
    }
  },
})

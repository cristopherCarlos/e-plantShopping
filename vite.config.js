import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/e-plantShopping", // Reemplaza con el nombre exacto de tu repo
  plugins: [react()],
})
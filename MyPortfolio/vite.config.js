import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/aboutMe/MyPortfolio', // <- názov tvojho repo
  plugins: [react()],
})

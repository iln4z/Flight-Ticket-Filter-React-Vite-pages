import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://iln4z.github.io/Flight-Ticket-Filter-React-Vite-pages/',
})

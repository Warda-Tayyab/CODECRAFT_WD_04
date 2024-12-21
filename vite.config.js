import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
 // base: "/Aura-Avenue",
  
  plugins: [react()],
  optimizeDeps: {
    include: ['react', 'react-dom']  // Explicitly include dependencies if needed
  }
})

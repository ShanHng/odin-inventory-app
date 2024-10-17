import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Have to set this for HMR to work when using WSL2 with VSCode in Windows. Note: leads to high CPU utilization. https://vite.dev/config/server-options#server-watch
      usePolling: true
    }
  }
})

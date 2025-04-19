import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to root '/' since deploying to root of domain
  base: '/',
  server: {
    port: 5173,
  },
});
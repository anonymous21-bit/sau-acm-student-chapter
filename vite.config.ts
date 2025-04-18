import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NETLIFY === 'true' || process.env.DEPLOY_ENV === 'cpanel' 
    ? '/' 
    : '/sau-acm-student-chapter/',
  server: {
    port: 5173,
  },
});
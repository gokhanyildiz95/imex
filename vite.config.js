import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Hosting platforms such as Hostinger expect the output in `build`; server/index.js serves the same folder.
  build: { outDir: 'build' },
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
});

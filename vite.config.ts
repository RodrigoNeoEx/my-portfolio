import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: './',
  plugins: [react()],
  // assetsInclude: ["**/*.json"],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
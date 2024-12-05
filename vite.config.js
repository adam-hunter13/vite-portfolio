// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// Adding below to try and get routes working
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensures the output folder is 'dist', which is Netlify's default
    rollupOptions: {
      input: '/index.html', // Makes sure the main entry point is index.html
    },
  },
  server: {
    port: 3000, // Optional: Sets a custom development port
    open: true, // Automatically opens the browser when running `vite dev`
  },
  resolve: {
    alias: {
      '@': '/src', // Optional: Simplifies imports by allowing `@/` as an alias for `src/`
    },
  },
  base: './', // Ensures relative paths in the build (important for deployment on Netlify and others)
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['@mui/icons-material'],
  }, 
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
      "@component": "/src/component",
    },
  },
});

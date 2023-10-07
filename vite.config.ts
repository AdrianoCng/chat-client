import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@containers": path.resolve(__dirname, "./src/containers"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@configs": path.resolve(__dirname, "./src/configs"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
    },
  },
  server: {
    port: 5173,
  },
});

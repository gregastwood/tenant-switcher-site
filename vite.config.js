import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // local dev server port
  },
  build: {
    outDir: "dist", // where Vite puts the production build
  },
});

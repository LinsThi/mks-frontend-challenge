import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/shared/components"),
      "@src": resolve(__dirname, "src"),
      "@pages": resolve(__dirname, "src/pages"),
    },
  },
  plugins: [react()],
});

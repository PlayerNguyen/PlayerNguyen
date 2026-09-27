import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("node_modules/react-dom") || id.includes("node_modules/react/"))
            return "vendor-react";
          if (id.includes("node_modules/react-router-dom")) return "vendor-router";
          if (id.includes("node_modules/framer-motion")) return "vendor-framer";
          if (id.includes("node_modules/i18next")) return "vendor-i18n";
          if (id.includes("node_modules/react-icons")) return "vendor-icons";
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
});

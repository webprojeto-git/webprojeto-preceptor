import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Use root "/" so assets work on custom domain; 404.html handles GH Pages routing
  base: "/",
  server: {
    port: 8080,
  },
}));

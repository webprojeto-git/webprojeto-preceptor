export default defineConfig({
  base: "/webprojeto-preceptor/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

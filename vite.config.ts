import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Base URL para GitHub Pages con tu repositorio
  base: '/jolmandeveloper/',

  server: {
    host: "::",
    port: 8080,
  },

  // Configuración de build para producción
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: mode === 'development',
    minify: mode === 'production',
    emptyOutDir: true,
  },

  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Optimizaciones para producción
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },

  // Configuración específica para diferentes modos
  define: {
    __DEV__: mode === 'development',
  },
}));
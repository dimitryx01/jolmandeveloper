import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from 'fs';

export default defineConfig(({ mode }) => ({
  base: '/',

  server: {
    host: "::",
    port: 8080,
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: mode === 'development',
    minify: mode === 'production',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1500,
  },

  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    {
      name: 'generate-spa-fallback',
      closeBundle() {
        const distPath = path.resolve(__dirname, 'dist');
        const indexHtml = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');
        
        const routes = ['es', 'en'];
        
        routes.forEach(lang => {
          const langDir = path.join(distPath, lang);
          if (!fs.existsSync(langDir)) {
            fs.mkdirSync(langDir, { recursive: true });
          }
          fs.writeFileSync(path.join(langDir, 'index.html'), indexHtml);
        });
        
        console.log('✓ Generated SPA fallback files for /es and /en');
      }
    }
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
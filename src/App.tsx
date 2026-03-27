import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Thanks from "./pages/Thanks";
import PayuResponse from './pages/PayuResponse';
import AvisoLegal from './pages/AvisoLegal';
import PoliticasPrivacidad from './pages/PoliticasPrivacidad';

const queryClient = new QueryClient();

const RootRedirect = () => {
  const browserLang = navigator.language.split('-')[0];
  const defaultLang = ['es', 'en'].includes(browserLang) ? browserLang : 'es';
  return <Navigate to={`/${defaultLang}`} replace />;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" attribute="class">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename="/">
            <Routes>
              <Route path="/" element={<RootRedirect />} />
              <Route path="/:lang" element={<Index />} />
              <Route path="/:lang/thanks" element={<Thanks />} />
              <Route path="/:lang/response" element={<PayuResponse />} />
              <Route path="/:lang/aviso-legal" element={<AvisoLegal />} />
              <Route path="/:lang/politicas-privacidad" element={<PoliticasPrivacidad />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
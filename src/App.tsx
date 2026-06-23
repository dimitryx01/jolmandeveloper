import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";

const NotFound            = lazy(() => import('./pages/NotFound'));
const Thanks              = lazy(() => import('./pages/Thanks'));
const PayuResponse        = lazy(() => import('./pages/PayuResponse'));
const AvisoLegal          = lazy(() => import('./pages/AvisoLegal'));
const PoliticasPrivacidad = lazy(() => import('./pages/PoliticasPrivacidad'));

const RootRedirect = () => {
  const browserLang = navigator.language.split('-')[0];
  const defaultLang = ['es', 'en'].includes(browserLang) ? browserLang : 'es';
  return <Navigate to={`/${defaultLang}`} replace />;
};

const App = () => (
  <HelmetProvider>
    <ThemeProvider defaultTheme="system" attribute="class">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<RootRedirect />} />
            <Route path="/:lang" element={<Index />} />
            <Route path="*" element={
              <Suspense fallback={<div className="min-h-screen bg-background" />}>
                <Routes>
                  <Route path="/:lang/thanks"               element={<Thanks />} />
                  <Route path="/:lang/response"             element={<PayuResponse />} />
                  <Route path="/:lang/aviso-legal"          element={<AvisoLegal />} />
                  <Route path="/:lang/politicas-privacidad" element={<PoliticasPrivacidad />} />
                  <Route path="*"                           element={<NotFound />} />
                </Routes>
              </Suspense>
            } />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </HelmetProvider>
);

export default App;

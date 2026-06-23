import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import i18n from './i18n.ts'
import { I18nextProvider } from 'react-i18next'

createRoot(document.getElementById("root")!).render(
  <I18nextProvider i18n={i18n}>
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <App />
    </Suspense>
  </I18nextProvider>
);

// src/config/env.ts
// Centralized environment variables with validation
export const env = {
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  },
  recaptcha: {
    siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY || '',
  },
} as const;

// Validation function to ensure required env vars are present
export function validateEnv(): void {
  const required = [
    { key: 'VITE_EMAILJS_SERVICE_ID', value: env.emailjs.serviceId },
    { key: 'VITE_EMAILJS_TEMPLATE_ID', value: env.emailjs.templateId },
    { key: 'VITE_EMAILJS_PUBLIC_KEY', value: env.emailjs.publicKey },
    { key: 'VITE_RECAPTCHA_SITE_KEY', value: env.recaptcha.siteKey },
  ];

  const missing = required.filter(({ value }) => !value);

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.map(({ key }) => key).join(', ')}`
    );
  }
}
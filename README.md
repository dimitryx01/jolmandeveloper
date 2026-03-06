# Jolman Developer — Portfolio Website (Source / Development)

This repository contains the **development source code** for the personal portfolio and service platform of **Jolman Gordillo (Jolman Developer)**. It is a high-performance, bilingual (ES/EN) Single Page Application (SPA) designed to showcase freelance web development services, manage project portfolios, and handle online payments.

> 🚀 **Live Production Site:** [jolmandeveloper.com](https://jolmandeveloper.com)  
> 📦 **Production Build Repo:** [jolmandeveloperstatic](https://github.com/dimitryx01/jolmandeveloperstatic)

---

## ✨ Key Features

- **Bilingual Support (i18n):** Full internationalization in Spanish and English using `i18next`.
- **Dynamic Routing:** Language-based URL structures managed with `React Router`.
- **Service Monetization:** Integrated **PayU Latam** checkout for direct online service hiring.
- **Lead Generation:** Secure contact form powered by **EmailJS** with **reCAPTCHA** protection.
- **SEO Optimized:** Advanced metadata management (Open Graph, Twitter Cards) via `react-helmet-async`.
- **Modern UI/UX:**
  - Responsive design with **Tailwind CSS** and **shadcn/ui**.
  - Light/Dark mode support.
  - Smooth scroll-based animations.

## 🧱 Tech Stack

- **Core:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS + Lucide Icons
- **Components:** shadcn/ui (Radix UI primitives)
- **State & Data:** TanStack Query (React Query)
- **Internationalization:** i18next
- **Security:** Google reCAPTCHA v3
- **Integrations:** PayU SDK / Webhooks & EmailJS

## 🛠️ Development Approach & Tooling

This project follows a **modern "Vibe Coding" workflow**, utilizing **Lovable** (AI-assisted development) to accelerate UI scaffolding and rapid iteration.

As the lead developer, I maintain full ownership and control over:
- **Architecture:** Designing the routing logic, i18n providers, and global state.
- **Custom Integrations:** Implementing and securing third-party APIs (PayU, EmailJS).
- **Code Quality:** Manual refactoring, debugging, and ensuring strict TypeScript type safety.
- **DevOps:** Managing the build pipeline and deployment synchronization between source and production repositories.

## ⚙️ Getting Started (Local Development)

### Prerequisites
- Node.js (LTS)
- npm or Bun

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## 🔐 Environment Variables

The application requires several environment variables for third-party services. Create a `.env` file in the root directory (do **not** commit this file):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_RECAPTCHA_SITE_KEY=your_site_key
# PayU credentials are managed server-side via environment configuration
```

## 🗺️ Routes

| Route | Description |
|---|---|
| `/:lang` | Main landing page (`lang` = `en` or `es`) |
| `/:lang/thanks` | Thank-you page (post-contact / post-payment) |
| `/:lang/response` | PayU payment response handler |

## 🚀 Deployment Workflow

This repository serves as the **Source of Truth**. The deployment process follows these steps:

1. Development and testing in this repository.
2. Production build generation via `npm run build`.
3. Deployment of the minified output to the [Production Repository](https://github.com/dimitryx01/jolmandeveloperstatic) for hosting on **GitHub Pages**.

## 📄 License & Usage

**Copyright (c) 2024-2026 Jolman Gordillo. All Rights Reserved.**

This repository is public **exclusively for portfolio and technical code review purposes** (recruitment processes).

- **No permission** is granted to copy, modify, redistribute, or use this code for any commercial or personal projects.
- Unauthorized use of the source code, assets, or design is strictly prohibited.

---
**Maintained by Jolman Gordillo**  
*Freelance Web Developer*  
[LinkedIn](https://www.linkedin.com/in/jolmang/) | [Website](https://jolmandeveloper.com)
# Mark Portfolio

Professional full-stack developer portfolio for **Mark Benison R. Mendevil**, built with Next.js, TypeScript, Tailwind CSS, and modern interactive UI patterns.

[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=flat-square&logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=flat-square&logo=react&logoColor=111111)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Responsive](https://img.shields.io/badge/Responsive-Design-6d28d9?style=flat-square)](#features)

**Live Website:** [https://mark-portfolio-drab.vercel.app](https://mark-portfolio-drab.vercel.app)

## Professional Overview

Mark Portfolio is a responsive personal portfolio designed for recruiters, collaborators, and technical reviewers. It presents Mark Benison R. Mendevil's work across full-stack development, Android development, AI-assisted educational platforms, and adaptive learning research.

The application is structured as a polished single-page portfolio with dedicated sections for professional positioning, background, technical stack, project showcases, research interests, future product concepts, contact links, and a downloadable resume.

## Live Demo

Visit the live site:

[https://mark-portfolio-drab.vercel.app](https://mark-portfolio-drab.vercel.app)

## Features

- Responsive single-page portfolio built with the Next.js App Router.
- Dark and light theme support using `next-themes`.
- Fixed navigation with active section tracking.
- Mobile navigation overlay for smaller screens.
- Smooth scrolling powered by Lenis.
- Framer Motion animations for section entrances and interactive UI.
- Structured sections for Hero, About, Tech Stack, Projects, Research, Future Product Pipeline, Contact, and Footer.
- Project showcase backed by local TypeScript data files.
- Research and technology content managed through reusable data modules.
- Downloadable resume served from `public/resume.pdf`.
- Local visual assets for profile and project imagery.
- SEO metadata configured through the Next.js `metadata` API.
- Reusable UI and layout components for cards, headings, theme controls, animations, and section composition.

## Tech Stack

### Frontend

- Next.js `16.2.6`
- React `19.2.4`
- TypeScript

### Styling and UI

- Tailwind CSS v4
- shadcn configuration
- `class-variance-authority`
- `clsx`
- `tailwind-merge`
- `lucide-react`
- Radix Icons

### Animation and UX

- Framer Motion
- Lenis smooth scrolling
- `next-themes`
- `tw-animate-css`

### Tooling

- ESLint
- TypeScript
- npm

### Deployment

- Vercel

## Project Structure

```text
mark-portfolio/
|-- public/
|   |-- resume.pdf
|   |-- mark.png
|   `-- project and UI assets
|-- src/
|   |-- app/
|   |   |-- globals.css
|   |   |-- layout.tsx
|   |   `-- page.tsx
|   |-- components/
|   |   |-- sections/
|   |   |-- ui/
|   |   `-- shared portfolio components
|   |-- data/
|   |   |-- projects.ts
|   |   |-- research-topics.ts
|   |   `-- tech-stack.ts
|   `-- lib/
|       `-- utils.ts
|-- components.json
|-- eslint.config.mjs
|-- next.config.ts
|-- package.json
|-- postcss.config.mjs
|-- tsconfig.json
`-- README.md
```

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/mmbmendevil/mark-portfolio.git
cd mark-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Runs the production server after building.

```bash
npm run lint
```

Runs ESLint checks.

## Deployment

This project is suitable for deployment on Vercel as a Next.js application.

The current live deployment is available at:

[https://mark-portfolio-drab.vercel.app](https://mark-portfolio-drab.vercel.app)

## License

This project is licensed under the [MIT License](LICENSE).

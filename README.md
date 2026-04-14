# Atahar Imtiaz Portfolio Website

A modern, cyberpunk-themed portfolio built with React, Vite, Tailwind CSS, GSAP, and Three.js.

This site showcases projects, technical strengths, resume, and contact details with a responsive UI and a lightweight 3D hero experience.

## Live Demo

[https://atahar-imtiaz-portfolio.vercel.app/](https://atahar-imtiaz-portfolio.vercel.app/)

## Features

- Cyberpunk blue/purple visual theme with neon gradients and glow accents
- Responsive layout optimized for desktop, tablet, and mobile
- 3D hero section using React Three Fiber and Drei
- Animated project showcase with reserved slots for new repositories
- Skills marquee and feature cards with smooth motion
- Resume modal viewer and contact section
- Performance-focused optimizations for smoother rendering

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4
- GSAP
- Three.js / React Three Fiber / Drei
- EmailJS
- ESLint

## Project Structure

```text
src/
  components/       # reusable UI + 3D scene components
  sections/         # page sections (Hero, Work, Skills, Contact, Footer)
  constants/        # content data (projects, skills, nav links)
  index.css         # global styles and design system tokens
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Start development server

```bash
npm run dev
```

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

## Performance Notes

- Hero 3D scene is lazy-loaded to reduce initial bundle pressure.
- Hero canvas rendering is gated by viewport visibility to avoid off-screen GPU usage.
- Particle count is reduced for better runtime smoothness.
- Visual styling and interactions were tuned for responsiveness across screen sizes.

## Content Updates

Project cards are configured from:

- `src/constants/index.js` -> `projects`

To add or replace repositories, update objects in the `projects` array (id, link, image, alt text, title, stack).

## Author

Atahar Imtiaz

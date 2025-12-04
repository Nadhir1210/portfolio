# Nadhir Ben Halima - Portfolio Website

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-brightgreen)](https://nadhir-benhalima.netlify.app)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-purple)](https://vitejs.dev/)

A modern, fully-responsive portfolio website showcasing my work as a Software Engineer specializing in AI and Data Science. Built with React, TypeScript, and Vite.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Vite
- 📄 Embedded CV PDF viewer
- 🧩 Component-based architecture
- 💪 TypeScript for type safety

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Setup Instructions

### 1. Install Dependencies

```powershell
npm install
```

### 2. Add Your CV PDF

Copy your CV PDF file to the `public/assets/` folder:

```powershell
# Create the assets folder if it doesn't exist
New-Item -ItemType Directory -Force -Path "public\assets"

# Copy your CV PDF (adjust the source path as needed)
Copy-Item "C:\Users\B.H\Downloads\Nadhir-Benhalima.docx (2).pdf" -Destination "public\assets\Nadhir-Benhalima.pdf"
```

### 3. Customize Content

Edit the following files to personalize your portfolio:

- **About**: `src/components/About.tsx`
- **Experience**: `src/components/Experience.tsx`
- **Projects**: `src/components/Projects.tsx`
- **Education**: `src/components/Education.tsx`
- **Skills**: `src/components/Skills.tsx`
- **Contact**: `src/components/Contact.tsx`

### 4. Run Development Server

```powershell
npm run dev
```

The site will be available at `http://localhost:5173`

## Build for Production

```powershell
npm run build
```

The optimized production files will be in the `dist/` folder.

### Preview Production Build

```powershell
npm run preview
```

## Project Structure

```
nadhir benhalima/
├── public/
│   └── assets/
│       └── Nadhir-Benhalima.pdf  # Your CV PDF goes here
├── src/
│   ├── components/
│   │   ├── Header.tsx/css
│   │   ├── Hero.tsx/css
│   │   ├── About.tsx/css
│   │   ├── Experience.tsx/css
│   │   ├── Projects.tsx/css
│   │   ├── Education.tsx/css
│   │   ├── Skills.tsx/css
│   │   ├── Contact.tsx/css
│   │   └── Footer.tsx/css
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Customization Guide

### Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary: #2563eb;      /* Primary brand color */
  --primary-hover: #1d4ed8;
  --text: #1e293b;         /* Main text color */
  --text-light: #475569;   /* Secondary text */
  --bg: #ffffff;           /* Background */
  --bg-alt: #f8fafc;       /* Alternate background */
}
```

### Contact Information

Update email and social links in `src/components/Contact.tsx`

### Projects

Add/edit projects in the `projects` array in `src/components/Projects.tsx`

### Experience

Update work experience in `src/components/Experience.tsx`

## Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Deploy to Vercel

```powershell
npm install -g vercel
vercel
```

### Deploy to GitHub Pages

```powershell
npm install -D gh-pages
```

Add to `package.json`:

```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

## Technologies Used

- React 18
- TypeScript
- Vite
- CSS3 (Custom properties, Grid, Flexbox)

## License

MIT License - feel free to use this template for your own portfolio!

---

Built with ❤️ by Nadhir Benhalima

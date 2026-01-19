# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

# Amit Sharma – Personal Portfolio Website

A modern, fully responsive personal portfolio built using **React + Vite**, featuring sleek UI/UX, animations, sections for Skills, Projects, Education, and Contact, plus SEO-friendly structure.

This portfolio showcases my work in **Full-Stack Web Development**, **Frontend UI Engineering**, and **Backend Development**, and serves as an interactive CV for hiring managers and collaborations.

---

## 🚀 Tech Stack

**Frontend:**
- React.js (Vite)
- JavaScript (ES6+)
- Tailwind CSS (UI/UX)
- CSS3
- Framer Motion (Animations)
- Typewriter Effects
- Lucide Icons

**Build Tools:**
- Vite (Lightning fast dev & build)
- npm / Node.js

---

## 🎯 Key Features

- Fully Responsive (Mobile + Tablet + Desktop)
- Modern UI/UX with Smooth Animations
- Hero Section with Typewriter Effect
- Projects Showcase with Live Links
- Skills & Tech Stacks with Icons
- Education & Experience Timeline
- Contact Form + Social Links
- Importable Resume PDF
- Clean, Scalable Code Structure
- SEO Friendly Page Structure

---

## 📂 Project Structure

portfolio-react/
├─ public/ 
│ └─ Resume.pdf 
│
├─ src/ # Application source code
│ ├─ assets/ 
│ │ ├─ p1.jpg
│ │ ├─ p2.jpg
│ │ ├─ p3.jpeg
│ │ └─ project-logos.png
│ │
│ ├─ components/ 
│ │ ├─ Hero.jsx 
│ │ ├─ About.jsx 
│ │ ├─ Skills.jsx 
│ │ ├─ Projects.jsx 
│ │ ├─ Experience.jsx 
│ │ ├─ Education.jsx 
│ │ ├─ Contact.jsx 
│ │ ├─ Header.jsx 
│ │ ├─ Footer.jsx 
│ │ └─ SplashScreen.jsx 
│ │
│ ├─ App.jsx 
│ ├─ main.jsx 
│ ├─ index.css 
│
├─ package.json 
├─ vite.config.js 
└─ README.md 

---

### 📝 Explanation

| Folder / File        | Purpose |
|---------------------|---------|
| `public/`           | Stores public static assets served directly by Vite (e.g., Resume.pdf). |
| `src/`              | Main source code directory for the React application. |
| `src/assets/`       | Contains images, icons, and static files imported into components. |
| `src/components/`   | Reusable UI sections that form the portfolio content. |
| `App.jsx`           | Wraps all routes and global providers. |
| `main.jsx`          | React root entry point connecting to DOM. |
| `index.css`         | Global styles, Tailwind directives, and resets. |
| `package.json`      | Tracks dependencies, scripts, and project metadata. |
| `vite.config.js`    | Config for build tooling and optimizations. |
| `README.md`         | Documentation for developers, recruiters, and contributors. |

---

---

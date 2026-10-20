# THORBEROS — Studio Website

Official website for THORBEROS, a software and video game development studio. Built as a Single Page Application (SPA) showcasing projects in production, services offered, and contact information.

## 🚀 Features

- **Modern UI/UX:** Custom design with glassmorphism and brand-specific color palette (Red/Blue).
- **Routing:** Multi-page navigation without reloads using React Router.
- **Dynamic Data:** Project and service catalogs generated dynamically from data arrays.
- **Analytics:** Google Analytics 4 (GA4) integrated via `react-ga4` with SPA route tracking.
- **Responsive:** Fully adapted for mobile and desktop devices.

## 🛠 Tech Stack

- **React 18** (Vite)
- **React Router** (Navigation)
- **React GA4** (Analytics)
- **Custom CSS** (No external UI libraries)

## Project Structure
```
EB-EMPRESA/
└── frontend/
    ├── public/
    │   └── images/              # Static images (videos, screenshots)
    ├── src/
    │   ├── assets/              # Icons and local assets
    │   ├── data/                # Data files (projects.js, services.js)
    │   ├── featured/            # Reusable complex components
    │   │   ├── about-section/
    │   │   ├── contact-section/
    │   │   ├── fullscreen-projects/
    │   │   ├── grid-projects/
    │   │   └── services-grid/
    │   ├── hero/                # Landing page hero section
    │   ├── layout/              # Global layout (Header, Footer, Logo)
    │   ├── navigation/          # Navbar links
    │   ├── pages/               # Main route views (Home, Software, Games, etc.)
    │   ├── App.jsx              # Routing and layout wrapper
    │   ├── index.css            # Global styles and CSS variables
    │   └── main.jsx             # App entry point and GA initialization
    └── package.json

```
# AKJ Groups - Construction & Architecture Website

A modern, scalable React-based website for AKJ Groups construction company featuring premium design, smooth animations, and a royal partners showcase carousel.

## 🚀 Tech Stack

- **React 18** - Modern UI library
- **Vite** - Lightning-fast build tool
- **CSS3** - Custom styling with animations
- **Responsive Design** - Mobile-first approach

## 📦 Project Structure

```
akj-groups/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── Gallery.jsx
│   │   ├── Partners.jsx      # Royal animated carousel
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── vite.config.js
└── package.json
```

## 🛠️ Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🎨 Features

- **Royal Partners Carousel** - Animated infinite scroll with premium gold accents
- **Video Hero Section** - Full-width background video
- **Responsive Navigation** - Mobile-friendly hamburger menu
- **Service Cards** - Grid layout with hover effects
- **Contact Form** - React-controlled form inputs
- **Smooth Animations** - CSS animations and transitions throughout

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

The site is configured for Vercel deployment with proper SPA routing.

## 🔧 Scalability Features

- **Component-Based Architecture** - Modular, reusable components
- **Data-Driven Content** - Services and partners use array mapping
- **State Management** - React hooks for interactive features
- **Performance Optimized** - Vite for fast builds and HMR
- **Easy to Extend** - Add new sections by creating new components

## 📄 License

© 2026 AKJ Groups. All rights reserved.

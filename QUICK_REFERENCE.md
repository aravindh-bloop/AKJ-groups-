# AKJ Groups - Quick Reference

## 🎯 Common Tasks

### Start Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
vercel --prod
```

## 📝 Adding Content

### Add a New Service
**File**: `src/components/Services.jsx`
```javascript
const services = [
  // ... existing services
  {
    icon: <svg>...</svg>,
    title: 'Your Service',
    description: 'Description here'
  }
];
```

### Add a New Project
**File**: `src/components/Projects.jsx`
```javascript
const projects = [
  // ... existing projects
  {
    title: 'Project Name',
    category: 'Type • Location',
    description: 'Project description'
  }
];
```

### Add a New Partner Category
**File**: `src/components/Partners.jsx`
```javascript
const categories = [
  // ... existing categories
  {
    icon: '🔧',
    title: 'Category Name',
    partners: [
      { initials: 'AB', name: 'Company', desc: 'Description' },
      // ... 3 more partners
    ]
  }
];
```

### Add a New Testimonial
**File**: `src/components/Testimonials.jsx`
```javascript
const testimonials = [
  // ... existing testimonials
  {
    text: 'Testimonial text here',
    author: 'Client Name',
    position: 'Title, Company'
  }
];
```

## 🎨 Styling

### Change Colors
**File**: `src/index.css`
```css
:root {
  --dark-blue: #1A2B3C;
  --muted-teal: #92AA83;
  --ash-grey: #5A6C57;
  /* ... modify as needed */
}
```

### Modify Animations
**File**: `src/index.css`
```css
/* Find animation keyframes */
@keyframes slideCarousel {
  /* Modify animation */
}
```

## 🔧 Configuration

### Change Port
**File**: `vite.config.js`
```javascript
server: {
  port: 3000, // Change this
}
```

### Update Meta Tags
**File**: `index.html`
```html
<title>Your Title</title>
<meta name="description" content="Your description">
```

## 📱 Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 768px) { }

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) { }

/* Desktop */
@media (min-width: 1025px) { }
```

## 🐛 Debugging

### Check Console
```bash
# In browser: F12 → Console
```

### View Build Output
```bash
npm run build
# Check dist/ folder
```

### Clear Cache
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📦 File Structure

```
src/
├── components/       # All React components
├── App.jsx          # Main app
├── main.jsx         # Entry point
└── index.css        # All styles

public/
└── assets/          # Images, videos

Root files:
├── index.html       # HTML template
├── package.json     # Dependencies
├── vite.config.js   # Vite config
└── vercel.json      # Deployment config
```

## 🚀 Quick Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
vercel --prod

# Check for updates
npm outdated

# Update dependencies
npm update

# Audit security
npm audit
```

## 🔗 Important Links

- **Dev Server**: http://localhost:3000
- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev
- **Vercel Docs**: https://vercel.com/docs

## 💡 Tips

1. **Hot Reload**: Changes auto-refresh in dev mode
2. **Component Isolation**: Each section is independent
3. **Data-Driven**: Update arrays, not JSX
4. **CSS Variables**: Use existing colors for consistency
5. **Mobile First**: Test on mobile devices

## ⚠️ Common Issues

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
```

### Build Errors
```bash
# Clear and reinstall
rm -rf node_modules
npm install
```

### Styles Not Updating
```bash
# Hard refresh: Ctrl + Shift + R
# Or clear browser cache
```

## 📞 Need Help?

1. Check `README.md` for overview
2. Check `COMPONENTS.md` for component details
3. Check `DEPLOYMENT.md` for deployment help
4. Check Vite/React documentation
5. Search error messages online

## ✅ Before Committing

- [ ] Code runs without errors
- [ ] Build completes successfully
- [ ] Tested on mobile
- [ ] No console errors
- [ ] Styles look correct
- [ ] All links work

## 🎉 You're All Set!

Your React app is ready to go. Happy coding! 🚀

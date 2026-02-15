# AKJ Groups - Component Documentation

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          - Navigation with scroll detection & mobile menu
│   ├── Hero.jsx            - Video background hero with CTA buttons
│   ├── Services.jsx        - Service cards with SVG icons
│   ├── Projects.jsx        - Featured projects showcase
│   ├── Gallery.jsx         - Project gallery grid
│   ├── Partners.jsx        - Royal animated carousel
│   ├── Testimonials.jsx    - Dual-column scrolling testimonials
│   ├── About.jsx           - Company info & statistics
│   ├── Contact.jsx         - Contact form & information
│   └── Footer.jsx          - Footer with links & social media
├── App.jsx                 - Main app component
├── main.jsx                - React entry point
└── index.css               - Global styles
```

## 🎯 Component Details

### Navbar
- **Features**: Scroll detection, mobile hamburger menu, WhatsApp button
- **State**: `isScrolled`, `isMobileMenuOpen`
- **Hooks**: `useState`, `useEffect`

### Hero
- **Features**: Full-width video background, fade-in animations, scroll indicator
- **Elements**: Video container, overlay, title, subtitle, CTA buttons

### Services
- **Features**: 6 service cards with SVG icons
- **Data-Driven**: Services array with icon, title, description
- **Scalable**: Easy to add/remove services

### Projects
- **Features**: 3 featured projects with hover overlays
- **Data-Driven**: Projects array with title, category, description
- **Interactive**: View Details button on hover

### Gallery
- **Features**: 6 category placeholders with overlays
- **Categories**: Residential, Commercial, Architecture, Interior, Renovation, Landscape
- **Expandable**: Easy to add images

### Partners (Royal Carousel)
- **Features**: Infinite horizontal scroll, pause on hover
- **Structure**: 6 categories × 4 partners each
- **Animations**: Shimmer effects, rotating rings, glow effects
- **Duplicated**: First 2 categories duplicated for seamless loop

### Testimonials
- **Features**: Dual-column infinite scroll (up/down)
- **Structure**: 2 columns with 4 testimonials each
- **Duplicated**: Testimonials duplicated for seamless loop
- **Data**: Author name, position, testimonial text

### About
- **Features**: Company description + 4 statistics
- **Stats**: Projects, Team, Experience, Satisfaction
- **Content**: Comprehensive company information

### Contact
- **Features**: Form with validation, submission status
- **State**: Form data, form status
- **Info**: Address, phone, email, business hours
- **Validation**: Required fields marked with *

### Footer
- **Features**: 5 columns with links, social media, contact info
- **Sections**: About, Company, Services, Quick Links, Contact
- **Social**: Facebook, Twitter, LinkedIn, Instagram
- **Dynamic**: Current year auto-updated

## 🔄 Data Flow

All components are **data-driven** for easy scalability:

```javascript
// Example: Adding a new service
const services = [
  {
    icon: <svg>...</svg>,
    title: 'New Service',
    description: 'Service description'
  },
  // ... more services
];
```

## 🎨 Styling

All styles are in `src/index.css` (copied from original `styles.css`):
- CSS Custom Properties for colors
- Responsive breakpoints
- Animations and transitions
- Royal Partners section with gold accents
- Testimonials scroll animations

## 🚀 Adding New Features

### Add a New Section
1. Create `src/components/NewSection.jsx`
2. Import in `App.jsx`
3. Add to component tree
4. Style in `index.css`

### Add Data to Existing Section
1. Find component file
2. Locate data array
3. Add new object with required fields
4. Component will auto-render

### Modify Styles
1. Edit `src/index.css`
2. Changes hot-reload automatically
3. Use existing CSS variables for consistency

## 📱 Responsive Design

All components are mobile-responsive:
- Navbar: Hamburger menu on mobile
- Services: Grid adapts to screen size
- Projects: Stacks on mobile
- Gallery: Responsive grid
- Partners: Horizontal scroll on all devices
- Testimonials: Single column on mobile
- Footer: Stacks columns on mobile

## 🔧 State Management

Current state is component-level using `useState`:
- Navbar: Menu state, scroll state
- Contact: Form data, submission status

**Future Scaling**: Can add Context API or Redux for global state.

## 🎯 Performance

- **Vite**: Fast HMR and optimized builds
- **React 18**: Concurrent features
- **CSS**: No heavy frameworks
- **Images**: Placeholders ready for lazy loading
- **Videos**: Optimized background video

## 📝 Best Practices

1. **Component Isolation**: Each section is independent
2. **Data-Driven**: Easy to update content
3. **Reusable**: Components can be reused
4. **Accessible**: Semantic HTML, ARIA labels
5. **SEO-Ready**: Proper meta tags, semantic structure
6. **Maintainable**: Clear file structure, comments

## 🔮 Future Enhancements

- Add React Router for multi-page navigation
- Integrate CMS for dynamic content
- Add image optimization/lazy loading
- Implement form backend integration
- Add analytics tracking
- Add blog section
- Add project detail pages
- Add admin dashboard

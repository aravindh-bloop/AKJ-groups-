# About Page Documentation

## Overview
The About page has been successfully created for the AKJ Groups website with a comprehensive, multi-section layout that showcases the company's story, values, and team.

## Sections Included

### 1. **Landing Content (Hero Section)**
- Full-width hero image using `happy home.jpeg`
- Gradient overlay for better text readability
- Compelling headline: "Building Trust, Creating Homes"
- Engaging subtitle describing the company's mission
- Fade-in animations for dynamic entry

### 2. **Our Commitment**
- Two-column layout with image and content
- Features `home arch.jpeg` with hover effects
- Animated badge showing "15+ Years of Excellence"
- Detailed commitment text
- Statistics showcase:
  - 500+ Projects Completed
  - 98% Client Satisfaction
  - 50+ Expert Team Members

### 3. **Our Vision**
- Glassmorphic card design
- Eye icon with gradient background
- Vision statement: "Shaping Tomorrow's Skyline"
- Detailed description of future goals
- Hover animations with top border reveal

### 4. **Our Mission**
- Companion card to Vision section
- Checkmark icon with gradient background
- Mission statement: "Excellence in Every Detail"
- Comprehensive mission description
- Consistent hover effects

### 5. **Our Values**
- 6 value cards in a responsive grid:
  1. 🎯 Excellence
  2. 🤝 Integrity
  3. 💡 Innovation
  4. 🌱 Sustainability
  5. ⚡ Efficiency
  6. ❤️ Customer Focus
- Each card features:
  - Large emoji icon
  - Value title
  - Descriptive text
  - Hover animations with scale and rotation

### 6. **The Team**
- Dark gradient background with glassmorphic cards
- 4 team members featured:
  - Aravindh Kumar (Founder & CEO)
  - Jayanthi Devi (Chief Operations Officer)
  - Karthik Raj (Chief Architect)
  - Priya Sharma (Project Manager)
- Each card includes:
  - Circular avatar with initials
  - Animated ring on hover
  - Name, role, and description
  - Glassmorphic design with backdrop blur

### 7. **Call to Action (CTA)**
- Gradient background
- Centered content
- Two action buttons:
  - "Get Started" (links to contact)
  - "View Our Work" (links to projects)

## Design Features

### Visual Excellence
- **Color Palette**: Consistent with brand colors (mint cream, muted teal, ash grey)
- **Typography**: 
  - Display font (Playfair Display) for headings
  - Primary font (Inter) for body text
- **Animations**:
  - Smooth transitions (0.4s cubic-bezier)
  - Hover effects on all interactive elements
  - Fade-in animations on hero section
  - Pulse animation on team avatars
  - Scale and rotation effects on value cards

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px and 968px
- Grid layouts adapt to single column on mobile
- Optimized spacing and typography for all screen sizes

### Modern UI Patterns
- **Glassmorphism**: Used in team cards and commitment badge
- **Gradient Overlays**: Hero section and CTA
- **Card Hover Effects**: Transform, shadow, and border animations
- **Icon Integration**: SVG icons for vision/mission sections
- **Badge Design**: Floating badge on commitment image

## Routing Implementation

### React Router Setup
- Installed `react-router-dom`
- Created `HomePage` component containing all landing page sections
- Updated `App.jsx` with Router configuration
- Routes:
  - `/` - Home page
  - `/about` - About page

### Navigation Updates
- Added "About" link to navbar
- Updated navigation to use React Router `Link` components
- Maintained hash links for home page sections
- Mobile menu closes on navigation

## File Structure
```
src/
├── components/
│   ├── About.jsx          # About page component
│   ├── HomePage.jsx       # Home page component
│   ├── Navbar.jsx         # Updated with routing
│   └── ...
├── App.jsx                # Router configuration
└── index.css              # Includes all About page styles
```

## Assets Used
- `assets/happy home.jpeg` - Hero section background
- `assets/home arch.jpeg` - Commitment section image

## Accessibility Features
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- ARIA-friendly navigation

## Performance Optimizations
- CSS transitions use GPU-accelerated properties (transform, opacity)
- Images use object-fit for optimal display
- Smooth scroll behavior
- Efficient animations with will-change hints

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox for layouts
- Backdrop-filter with fallbacks
- Vendor prefixes where needed

## Next Steps (Optional Enhancements)
1. Add actual team member photos
2. Integrate real statistics from company data
3. Add animation on scroll (AOS library)
4. Include company timeline/milestones
5. Add client logos or certifications
6. Implement lazy loading for images
7. Add meta tags for SEO

## How to Access
- **Development**: Navigate to `http://localhost:3000/about`
- **From Navigation**: Click "About" in the navbar
- **Direct Link**: Use React Router `Link` component: `<Link to="/about">About</Link>`

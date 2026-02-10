# AKJ Groups - Professional Construction Company Website

## Overview
A premium, professional landing page for AKJ Groups construction company featuring a clean, modern, and corporate design with smooth animations and full responsiveness.

## Color Palette
- **#F1F7EE** - Mint Cream (Primary Background)
- **#B0BEA9** - Ash Grey (Secondary Elements)
- **#92AA83** - Muted Teal (Accent & CTAs)
- **#E0EDC5** - Frosted Mint (Sections)
- **#E7F59E** - Lime Cream (Highlights)

## Features
✅ Full-width hero section with background video
✅ Smooth scroll animations and transitions
✅ Fully responsive (Mobile, Tablet, iPad, Desktop)
✅ Professional typography (Inter + Playfair Display)
✅ Services showcase with hover effects
✅ Project portfolio section
✅ Client testimonials
✅ About section with animated statistics
✅ Contact form with validation
✅ Mobile-friendly navigation with hamburger menu
✅ Optimized performance with lazy loading
✅ Accessibility features

## File Structure
```
AKJ groups/
├── landingpage.html    # Main HTML file
├── styles.css          # Complete stylesheet
├── script.js           # JavaScript functionality
├── assets/             # Media assets folder
│   └── background-video.mp4  # (Add your video here)
└── README.md           # This file
```

## Setup Instructions

### 1. Add Background Video
Place your architectural background video in the `assets` folder with the name:
```
background-video.mp4
```

**Video Recommendations:**
- Format: MP4 (H.264 codec)
- Resolution: 1920x1080 (Full HD) or higher
- Duration: 10-30 seconds (looping)
- File size: Keep under 5MB for optimal loading
- Content: Architectural walkthrough, construction site, or building exterior

**Free Video Sources:**
- Pexels: https://www.pexels.com/search/videos/architecture/
- Pixabay: https://pixabay.com/videos/search/construction/
- Coverr: https://coverr.co/

### 2. Open the Website
Simply open `landingpage.html` in your web browser:
- Double-click the file, or
- Right-click → Open with → Your preferred browser

### 3. For Development Server (Optional)
If you want to run a local server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000/landingpage.html
```

**Using Node.js (with npx):**
```bash
npx serve

# Then open the URL shown in terminal
```

**Using VS Code:**
Install "Live Server" extension and right-click on `landingpage.html` → "Open with Live Server"

## Sections Overview

### 1. Hero Section
- Full-screen video background
- Company tagline and CTA buttons
- Smooth scroll indicator

### 2. Services
- 6 core service offerings
- Icon-based cards with hover effects
- Clear descriptions

### 3. Projects
- Featured project showcase
- Hover overlays with "View Details" buttons
- Project categories and descriptions

### 4. Testimonials
- Client feedback cards
- Professional presentation
- Author information

### 5. About
- Company history and values
- Animated statistics (500+ projects, 29 years, etc.)
- Trust-building content

### 6. Contact
- Professional contact form
- Contact information cards
- Location, phone, email details

## Customization Guide

### Update Company Information
Edit `landingpage.html` and find these sections:
- Company name: Search for "AKJ Groups"
- Contact details: Look for the `.contact-info` section
- Statistics: Update the `data-target` attributes in `.stat-number`

### Change Colors
Edit `styles.css` and modify the CSS variables in `:root`:
```css
:root {
    --mint-cream: #F1F7EE;
    --ash-grey: #B0BEA9;
    /* etc. */
}
```

### Add Real Project Images
Replace the `.project-placeholder` divs with actual images:
```html
<div class="project-image">
    <img src="assets/project1.jpg" alt="Project Name">
    <div class="project-overlay">
        <button class="view-project-btn">View Details</button>
    </div>
</div>
```

### Modify Form Submission
Edit `script.js` and find the `contactForm.addEventListener` section to integrate with your backend or email service.

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features
- Lazy loading for images
- Video optimization (pauses when not in viewport)
- Debounced scroll events
- Intersection Observer API for animations
- Optimized CSS transitions

## Responsive Breakpoints
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## Accessibility
- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Focus management for mobile menu
- Proper heading hierarchy

## Next Steps
1. ✅ Add your background video to the `assets` folder
2. Update company information (address, phone, email)
3. Add real project images
4. Customize testimonials with actual client feedback
5. Integrate form with backend/email service
6. Add Google Analytics (optional)
7. Set up hosting (Netlify, Vercel, or traditional hosting)

## Deployment Options

### Netlify (Recommended)
1. Create account at netlify.com
2. Drag and drop the entire folder
3. Your site is live!

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

### Traditional Hosting
Upload all files via FTP to your web hosting provider.

## Support
For any issues or customization requests, refer to the code comments in each file.

---

**Built with ❤️ for AKJ Groups**
*Building Dreams Into Reality Since 1995*

# Image Placeholder Notice

## Current Status
The About page is currently using placeholder images from the existing project images:

- **Hero Section**: Using `assets/project 1.jpeg` (placeholder for "happy home.jpeg")
- **Commitment Section**: Using `assets/project 3.jpeg` (placeholder for "home arch.jpeg")

## To Add Your Actual Images

1. **Add the images to the assets folder**:
   - Place `happy home.jpeg` in `public/assets/`
   - Place `home arch.jpeg` in `public/assets/`

2. **Update the About.jsx component**:
   
   **Line 118** - Change hero image:
   ```javascript
   src="assets/happy home.jpeg"
   ```
   
   **Line 143** - Change commitment image:
   ```javascript
   src="assets/home arch.jpeg"
   ```

3. The images will automatically load once they're in the correct location.

## Image Specifications

For best results, use images with these specifications:

### Hero Image (happy home.jpeg)
- **Recommended Size**: 1920x1080px or larger
- **Aspect Ratio**: 16:9 or wider
- **Format**: JPEG
- **Content**: Wide shot of a completed home/building project
- **Quality**: High resolution for full-width display

### Commitment Image (home arch.jpeg)
- **Recommended Size**: 800x600px or larger
- **Aspect Ratio**: 4:3 or similar
- **Format**: JPEG
- **Content**: Architectural detail or building facade
- **Quality**: High resolution with good detail

## Current Placeholder Images
- `project 1.jpeg` - Currently showing in hero section
- `project 3.jpeg` - Currently showing in commitment section

These will be automatically replaced when you add the actual images with the correct filenames.

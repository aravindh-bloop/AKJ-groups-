# AKJ Groups - Deployment Guide

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```
Visit: `http://localhost:3000`

### Production Build
```bash
npm run build
npm run preview
```

## 📦 Deployment Options

### 1. Vercel (Recommended)

#### First Time Setup
```bash
npm install -g vercel
vercel login
```

#### Deploy
```bash
npm run build
vercel --prod
```

**Configuration**: Already set in `vercel.json`
- Build command: `npm run build`
- Output directory: `dist`
- SPA routing configured

#### Custom Domain
1. Go to Vercel Dashboard
2. Select your project
3. Settings → Domains
4. Add your custom domain

### 2. Netlify

#### Via CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

#### Via Git
1. Push code to GitHub
2. Connect repository in Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

#### netlify.toml (Create this file)
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. GitHub Pages

#### Setup
1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/akj-groups",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/akj-groups/',
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

### 4. AWS S3 + CloudFront

#### Build
```bash
npm run build
```

#### Upload to S3
```bash
aws s3 sync dist/ s3://your-bucket-name --delete
```

#### CloudFront Setup
1. Create CloudFront distribution
2. Point to S3 bucket
3. Set error pages to redirect to index.html

### 5. Firebase Hosting

#### Setup
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
```

#### Configuration
- Public directory: `dist`
- Single-page app: Yes
- GitHub integration: Optional

#### Deploy
```bash
npm run build
firebase deploy
```

### 6. Docker

#### Dockerfile
```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### nginx.conf
```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

#### Build & Run
```bash
docker build -t akj-groups .
docker run -p 80:80 akj-groups
```

## 🔧 Environment Variables

### Create `.env` file
```env
VITE_API_URL=https://api.yoursite.com
VITE_CONTACT_EMAIL=info@akjgroups.com
VITE_WHATSAPP_NUMBER=919876543210
```

### Access in code
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

### Production
Set environment variables in your hosting platform:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Build & Deploy → Environment
- Others: Check platform documentation

## 📊 Performance Optimization

### Before Deployment

1. **Optimize Images**
```bash
# Install image optimization tools
npm install --save-dev vite-plugin-imagemin
```

2. **Enable Compression**
Already configured in Vite for production builds

3. **Analyze Bundle**
```bash
npm run build -- --mode analyze
```

### After Deployment

1. **Enable CDN**
- Use Vercel/Netlify CDN (automatic)
- Or configure CloudFlare

2. **Enable Caching**
- Set proper cache headers
- Use service workers (future enhancement)

3. **Monitor Performance**
- Google PageSpeed Insights
- Lighthouse
- Web Vitals

## 🔒 Security

### Before Deployment

1. **Update Dependencies**
```bash
npm audit
npm audit fix
```

2. **Environment Variables**
- Never commit `.env` files
- Use platform-specific env vars

3. **HTTPS**
- All platforms provide free SSL
- Enforce HTTPS redirects

### Security Headers

Add to `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

## 📈 Post-Deployment

### 1. SEO Setup
- Submit sitemap to Google Search Console
- Add Google Analytics
- Set up meta tags for social sharing

### 2. Monitoring
- Set up error tracking (Sentry)
- Monitor uptime (UptimeRobot)
- Track analytics

### 3. Maintenance
- Regular dependency updates
- Security patches
- Content updates

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 on Refresh
- Ensure SPA routing is configured
- Check `vercel.json` or platform config

### Styles Not Loading
- Check build output in `dist/`
- Verify CSS is imported in `main.jsx`

### Images Not Showing
- Move images to `public/` folder
- Use `/assets/image.jpg` (not `./assets`)

## 📞 Support

For deployment issues:
1. Check platform documentation
2. Review build logs
3. Test locally with `npm run preview`
4. Contact platform support

## ✅ Pre-Deployment Checklist

- [ ] All dependencies installed
- [ ] Build completes successfully
- [ ] Preview works locally
- [ ] Environment variables set
- [ ] Assets in public folder
- [ ] Meta tags configured
- [ ] Analytics added
- [ ] Error tracking set up
- [ ] Domain configured
- [ ] SSL enabled
- [ ] Performance tested
- [ ] Mobile responsive verified

## 🎯 Recommended: Vercel

**Why Vercel?**
- Zero configuration
- Automatic HTTPS
- Global CDN
- Instant rollbacks
- Preview deployments
- Analytics included
- Perfect for React/Vite

**Deploy Now:**
```bash
npm run build
vercel --prod
```

Done! Your site is live! 🎉

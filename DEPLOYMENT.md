# Vercel Deployment Guide

This guide will help you deploy the Exam Platform to Vercel at https://vercel.com/michaelmcd10gmailcoms-projects

## Prerequisites

- GitHub account connected to Vercel
- Repository: michaelmcd10/exams

## Deployment Steps

### Method 1: Import from GitHub (Recommended)

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/new
   - Or navigate to: https://vercel.com/michaelmcd10gmailcoms-projects

2. **Import Repository**
   - Click "Import Project" or "Add New..."
   - Select "Import Git Repository"
   - Choose "michaelmcd10/exams" from your GitHub repositories
   - If not visible, click "Adjust GitHub App Permissions" to grant access

3. **Configure Project**
   - **Project Name**: exam-platform (or your preferred name)
   - **Framework Preset**: Other (or leave as detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: Leave empty (static site, no build needed)
   - **Output Directory**: Leave empty (serves from root)
   - **Install Command**: Leave empty (no dependencies)

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete (~30 seconds)
   - Your site will be live at: `https://exam-platform-[hash].vercel.app`

5. **Optional: Custom Domain**
   - Go to Project Settings → Domains
   - Add your custom domain if you have one

### Method 2: Vercel CLI

```bash
# Install Vercel CLI (one-time)
npm install -g vercel

# Navigate to project
cd /path/to/exams

# Login to Vercel
vercel login

# Deploy
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: exam-platform
# - Directory: ./
# - Override settings? No

# For production deployment
vercel --prod
```

### Method 3: Continuous Deployment (Automatic)

1. **Connect GitHub Repository**
   - Go to https://vercel.com/michaelmcd10gmailcoms-projects
   - Click "Import Project"
   - Select the repository
   - Enable "Production Branch": main or master

2. **Automatic Deployments**
   - Every push to main/master branch triggers production deployment
   - Pull requests get preview deployments automatically
   - Commits show deployment status in GitHub

## Post-Deployment

### Verify Deployment

1. Visit your deployment URL
2. Test the exam platform:
   - Enter student information
   - Start the exam
   - Navigate between questions
   - Test answer saving
   - Submit the exam
   - View results

### Configure Settings

In Vercel Dashboard → Project Settings:

- **Environment Variables**: None needed for this static site
- **Domains**: Add custom domain if desired
- **Git**: Configure auto-deployment preferences
- **General**: Set project name and description

### Security Headers

The following security headers are automatically applied via `vercel.json`:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

### Performance

- Static assets are cached for optimal performance
- CDN distribution ensures fast global access
- Automatic HTTPS/SSL certificate

## Troubleshooting

### Issue: 404 Not Found

**Solution**: Ensure `index.html` is in the root directory

### Issue: JavaScript Not Loading

**Solution**: Check browser console for errors. Verify all file paths are relative.

### Issue: Fullscreen Not Working

**Solution**: This is expected on some browsers in preview mode. It will work in production.

### Issue: Custom Domain Not Working

**Solution**: 
1. Add domain in Vercel project settings
2. Configure DNS records as shown in Vercel
3. Wait for DNS propagation (up to 48 hours)

## Support

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Project Issues: https://github.com/michaelmcd10/exams/issues

## Project Structure

```
exams/
├── index.html          # Main entry point
├── styles.css          # Styling
├── script.js           # Application logic
├── exam-data.js        # Exam questions data
├── vercel.json         # Vercel configuration
├── package.json        # Project metadata
├── .vercelignore       # Files to exclude from deployment
├── .gitignore          # Git ignore rules
└── README.md           # Project documentation
```

## Next Steps

1. Deploy the project using one of the methods above
2. Share the deployment URL with users
3. Customize exam questions in `exam-data.js`
4. Add custom domain (optional)
5. Set up analytics (optional)

---

**Deployment URL**: After deployment, your site will be available at:
`https://exam-platform.vercel.app` (or similar)

**Dashboard**: https://vercel.com/michaelmcd10gmailcoms-projects

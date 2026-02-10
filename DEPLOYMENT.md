# Vercel Deployment Guide

This guide explains how to deploy the Exams Platform to Vercel.

## Prerequisites

- A GitHub account with this repository
- A Vercel account (sign up at https://vercel.com)

## Deployment Methods

### Method 1: Automatic Deployment via Vercel Dashboard (Recommended)

1. **Sign in to Vercel**
   - Go to https://vercel.com/michaelmcd10gmailcoms-projects/exams
   - Or visit https://vercel.com and log in with your account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose the `michaelmcd10/exams` repository

3. **Configure Project**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (leave as default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your application
   - You'll receive a production URL like `https://exams-xxx.vercel.app`

5. **Automatic Updates**
   - Every push to the main branch will trigger a new deployment
   - Pull requests will get preview deployments automatically

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd /path/to/exams
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Configuration

The project includes a `vercel.json` file with optimal settings:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

## Environment Variables

If you need to add environment variables:

1. Go to your project settings in Vercel
2. Navigate to "Settings" → "Environment Variables"
3. Add your variables for Production, Preview, and Development

## Custom Domain

To add a custom domain:

1. Go to your project in Vercel
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Build Settings

The project uses:
- **Node.js Version:** 18.x or higher (auto-detected)
- **Package Manager:** npm
- **Build Command:** `npm run build`
- **Output Directory:** `.next`

## Troubleshooting

### Build Fails

1. Check the build logs in Vercel dashboard
2. Ensure all dependencies are listed in `package.json`
3. Verify that `npm run build` works locally

### Deployment Not Triggering

1. Check GitHub integration in Vercel settings
2. Ensure the repository is connected
3. Verify webhook settings in GitHub

### Runtime Errors

1. Check function logs in Vercel dashboard
2. Ensure environment variables are set correctly
3. Review the error messages in the browser console

## Support

For more information:
- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- Project Issues: https://github.com/michaelmcd10/exams/issues

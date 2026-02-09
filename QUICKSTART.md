# Quick Deploy to Vercel

## 🚀 One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/michaelmcd10/exams)

## 📋 Manual Deploy Steps

### Option 1: Vercel Dashboard (Easiest)
1. Visit: https://vercel.com/new
2. Click "Import Git Repository"
3. Select: `michaelmcd10/exams`
4. Click "Deploy" 
5. Done! 🎉

### Option 2: Vercel CLI
```bash
npm install -g vercel
cd exams
vercel --prod
```

### Option 3: GitHub Auto-Deploy
1. Connect repo to Vercel
2. Push to main branch
3. Auto-deploys! 🚀

## ✅ What's Configured

- ✅ Security headers
- ✅ Performance optimization  
- ✅ Static site hosting
- ✅ HTTPS/SSL automatic
- ✅ CDN distribution
- ✅ Zero build configuration

## 🔗 Links

- **Dashboard**: https://vercel.com/michaelmcd10gmailcoms-projects
- **Import**: https://vercel.com/new
- **Docs**: [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Help**: https://vercel.com/docs

## 📁 Project Structure

```
exams/
├── index.html       ← Entry point
├── styles.css       ← Styling
├── script.js        ← Logic
├── exam-data.js     ← Questions
├── vercel.json      ← Config
└── package.json     ← Metadata
```

## 🎯 After Deploy

Your app will be live at:
```
https://exam-platform-[hash].vercel.app
```

### Test Checklist:
- [ ] Can access the site
- [ ] Can enter student info
- [ ] Can start exam
- [ ] Can answer questions
- [ ] Can navigate questions
- [ ] Can submit exam
- [ ] Can see results

## 💡 Tips

- Use custom domain in Vercel settings
- Monitor via Vercel dashboard
- Updates auto-deploy on git push
- Free SSL certificate included
- Global CDN for fast access

## 🆘 Issues?

See [DEPLOYMENT.md](./DEPLOYMENT.md) for troubleshooting.

---

**Ready?** → [Deploy Now](https://vercel.com/new/clone?repository-url=https://github.com/michaelmcd10/exams)

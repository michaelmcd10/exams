# Exams Platform

Make examination seamless

![Exams Platform](https://github.com/user-attachments/assets/da66681e-02f5-4bec-9fda-8a48da3d2b67)

## Features

- 📝 **Create Exams** - Design and create custom examinations with various question types
- ⏱️ **Timed Tests** - Set time limits and automatic submission for fair assessments
- 📊 **Instant Results** - Get immediate feedback and detailed performance analytics

## Tech Stack

- **Framework:** Next.js 16 (React 19)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Deployment:** Vercel

## Getting Started

### Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building

```bash
npm run build
```

### Production

```bash
npm start
```

## Deployment to Vercel

This project is configured for seamless deployment to Vercel:

1. Push your changes to GitHub
2. Connect your repository to Vercel at https://vercel.com
3. Vercel will automatically detect Next.js and deploy

The project includes a `vercel.json` configuration file for optimal deployment settings.

### Manual Deployment

You can also deploy using the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Project Structure

```
exams/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── public/             # Static assets
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── vercel.json         # Vercel deployment configuration
```

## License

ISC


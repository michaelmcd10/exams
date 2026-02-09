# Exam Platform 🎓

A secure, distraction-free online examination platform similar to exam.net.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/michaelmcd10/exams)

## 🚀 Quick Deploy

**Ready to deploy?** Click the button above or see [DEPLOY-NOW.md](./DEPLOY-NOW.md) for step-by-step instructions.

## Features

- **Clean Interface**: Distraction-free exam environment for focused test-taking
- **Timer**: Real-time countdown timer with visual warnings
- **Question Navigation**: Easy navigation between questions with status indicators
- **Multiple Question Types**: 
  - Multiple choice (single answer)
  - Multiple select (multiple answers)
  - Text/essay questions
- **Auto-save**: Answers are automatically saved as you progress
- **Fullscreen Mode**: Automatic fullscreen for immersive exam experience
- **Progress Tracking**: Visual indicators showing answered/unanswered questions
- **Submission Summary**: Detailed summary upon exam completion

## Getting Started

### Running Locally

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd exams
   ```

2. Open `index.html` in your web browser:
   - Double-click the file, or
   - Use a local server (recommended):
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     
     # Node.js (with http-server)
     npx http-server
     ```

3. Navigate to `http://localhost:8000` in your browser

### Deploying to Vercel

This project is optimized for deployment on Vercel. Follow these steps:

#### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy the project:
   ```bash
   cd exams
   vercel
   ```

3. Follow the prompts to link to your Vercel account and deploy

#### Option 2: Deploy via Vercel Dashboard

1. Visit [Vercel Dashboard](https://vercel.com/new)
2. Click "Import Project"
3. Select your GitHub repository
4. Configure:
   - **Framework Preset**: Other (or None)
   - **Root Directory**: ./
   - **Build Command**: (leave empty)
   - **Output Directory**: (leave empty)
5. Click "Deploy"

#### Option 3: Deploy via GitHub Integration

1. Connect your GitHub repository to Vercel
2. Push to the main branch
3. Vercel will automatically deploy your changes

The platform will be available at: `https://your-project-name.vercel.app`

### Usage

1. **Start Screen**: Enter your name and student ID
2. **Exam Screen**: 
   - Answer questions in any order
   - Use navigation sidebar to jump between questions
   - Monitor time with the countdown timer
   - Submit when ready
3. **Results Screen**: View your submission summary

## Customization

### Modifying Exam Content

Edit `exam-data.js` to customize:

```javascript
const examData = {
    title: "Your Exam Title",
    timeLimit: 30, // minutes
    questions: [
        {
            id: 1,
            type: "multiple-choice", // or "multiple-select" or "text"
            question: "Your question here?",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"]
        },
        // Add more questions...
    ]
};
```

### Styling

Modify `styles.css` to change colors, fonts, and layout.

## Question Types

- **multiple-choice**: Single answer selection
- **multiple-select**: Multiple answer selection
- **text**: Free-form text response

## Browser Support

Works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari

## Security Features

- Fullscreen mode enforcement
- Navigation confirmation dialog
- Auto-submission on timeout
- Progress tracking and validation

## License

MIT License - feel free to use and modify for your needs.

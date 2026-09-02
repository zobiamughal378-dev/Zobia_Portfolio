Zobia Razzaq — Portfolio (Full Stack)
Modern full-stack developer portfolio — React + TypeScript + Tailwind CSS on the frontend, Node.js + Express contact-form API on the backend.

Project Structure
text
zobia-portfolio/
├── frontend/     React + Vite + TypeScript + Tailwind CSS
└── backend/      Node.js + Express (contact form API)
Quick Start
1. Run Backend (first)
bash
cd backend
npm install
cp .env.example .env
npm run dev
Backend will run on http://localhost:4000.

SMTP Setup (optional): Leave SMTP details blank and messages will be saved to backend/data/messages.json. To receive emails:

Go to Google Account → Security → App Passwords (2-Step Verification must be ON)

Add SMTP_USER, SMTP_PASS, and CONTACT_TO to .env

Restart the server

2. Run Frontend (in a separate terminal)
bash
cd frontend
npm install
cp .env.example .env
npm run dev
Open http://localhost:5173 in your browser.

Features
Clean, modern UI — Responsive portfolio with smooth animations

Certificates section — Click any certificate to view it in a lightbox

Projects grid — Showcase your real projects with descriptions

Working contact form — Sends messages to backend API; emails you if SMTP is configured

Skills & Experience — Visual skill bars and timeline-based experience section

Scroll animations and smooth transitions

Editing Content
All content is centralized in these files:

File	Purpose
frontend/src/data/projects.ts	Projects list
frontend/src/data/certificates.ts	Certificates (add images to frontend/public/certificates/)
frontend/src/data/skills.ts	Skill bars
frontend/src/data/experience.ts	Experience timeline
Building for Production
bash
# Build frontend
cd frontend
npm run build     # Creates dist/ folder — deploy to Vercel/Netlify

# Start backend
cd ../backend
npm start          # Deploy to Render/Railway
Important: Set VITE_API_URL in frontend .env to your deployed backend URL.

Tech Stack
Layer	Technologies
Frontend	React 19, TypeScript, Vite, Tailwind CSS, Framer Motion
Backend	Node.js, Express, Nodemailer (optional)
Deployment Checklist
□ Push code to GitHub
□ Deploy backend to Render/Railway
□ Deploy frontend to Vercel/Netlify
□ Set VITE_API_URL on frontend host to backend URL
□ Set SMTP environment variables on backend host (if needed)
□ Test contact form
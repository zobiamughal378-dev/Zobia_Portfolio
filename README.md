# 💼 Zobia Razzaq — Portfolio

> Modern full-stack developer portfolio built with React, TypeScript, Tailwind CSS, and Node.js

---

## ✨ Features

- 🎨 **Clean & Modern UI** — Responsive design with smooth animations
- 📜 **Certificates Showcase** — Click to view certificates in a lightbox
- 🚀 **Projects Grid** — Display your projects with descriptions and links
- 📧 **Working Contact Form** — Messages sent via backend API with optional email notifications
- 📊 **Skills & Experience** — Visual skill bars and timeline-based experience section
- 🌊 **Smooth Scroll Animations** — Powered by Framer Motion

---

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-339933?style=for-the-badge&logo=nodemailer&logoColor=white)

---

## 📁 Project Structure
zobia-portfolio/
├── frontend/
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── data/ # All content (projects, skills, experience)
│ │ ├── pages/ # Page components
│ │ └── styles/ # Global styles
│ └── public/ # Static assets
│
└── backend/
├── src/
│ └── server.js # Express server with contact API
├── data/ # messages.json (saved form data)
└── .env # Environment variables

text

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/zobia-portfolio.git
cd zobia-portfolio
2. Setup Backend
bash
cd backend
npm install
cp .env.example .env
npm run dev
Server runs on http://localhost:4000

3. Setup Frontend
bash
cd frontend
npm install
cp .env.example .env
npm run dev
App runs on http://localhost:5173

📧 Email Configuration (Optional)
To receive contact form emails:

Enable 2-Step Verification in your Google Account

Generate an App Password (Google Account → Security → App Passwords)

Add to .env:

env
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-char-app-password
CONTACT_TO=your-email@gmail.com
Note: If left blank, messages are saved to backend/data/messages.json

📝 Editing Content
All content is centralized — no need to search through code:

File	Purpose
frontend/src/data/projects.ts	Projects list
frontend/src/data/certificates.ts	Certificates (add images to public/certificates/)
frontend/src/data/skills.ts	Skill bars
frontend/src/data/experience.ts	Experience timeline
🚢 Deployment
Frontend (Vercel/Netlify)
bash
cd frontend
npm run build
Deploy the dist/ folder to any static host.

Backend (Render/Railway)
Push to GitHub and connect your repository on Render/Railway. Set environment variables in the dashboard.

Important: Set VITE_API_URL in frontend .env to your deployed backend URL.

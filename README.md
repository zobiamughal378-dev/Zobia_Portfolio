# Zobia Razzaq — Portfolio (Full Stack)

Modern full-stack developer portfolio — React + TypeScript + Tailwind + Three.js
(interactive 3D draggable name) on the frontend, Node/Express contact-form API
on the backend.

## Project Structure

```
zobia-portfolio/
├── frontend/     React + Vite + TypeScript + Tailwind + react-three-fiber
└── backend/      Node.js + Express (contact form API)
```

## Quick Start

### 1. Backend chalayein (pehle)

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Backend `http://localhost:4000` par chalega. `.env` mein SMTP details khali
chhod dein to bhi chalega — messages `backend/data/messages.json` mein save
ho jayenge. Agar aap chahte hain ke contact form se aapke Gmail par email bhi
jaye, to:

1. Google Account → Security → **App Passwords** se ek app password banayein
   (2-Step Verification on honi chahiye)
2. `.env` mein `SMTP_USER` (your gmail) aur `SMTP_PASS` (app password) daal
   dein
3. Server restart karein

### 2. Frontend chalayein (doosri terminal mein)

```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

Browser mein `http://localhost:5173` khol lein.

## Features

- **Interactive 3D name** — hero section mein aapka naam real 3D text
  (Three.js) hai jise mouse se **drag karke ghuma** sakte hain; chhodne par
  khud-ba-khud slowly spin karta rehta hai
- **Certificates section** — sab aapke asal certificates (ICPC, Amnesty,
  Build with AI Hackathon, Vibe-a-thon, Tech Fusion 4.0 sessions) click karne
  par bade lightbox mein khulte hain
- **Projects grid** — aapke sab real projects (NimbusFM Cloud File Manager,
  ImagiCraft AI, Ledger invoice tracker, University Management System, etc.)
- **Working contact form** — backend API ko POST karta hai, aur agar SMTP
  configure ho to email bhi bhejta hai
- Scroll animations, skill bars, accordion-style experience timeline — sab
  original single-file version se carry kiya gaya hai, ab proper React
  components mein

## Editing Content

Sab text/data yahan milega, code dhoondne ki zaroorat nahi:

- `frontend/src/data/projects.ts` — projects list
- `frontend/src/data/certificates.ts` — certificates (naya certificate add
  karne ke liye image `frontend/public/certificates/` mein daalein aur yahan
  ek entry add kar dein)
- `frontend/src/data/skills.ts` — skill bars
- `frontend/src/data/experience.ts` — experience timeline

## Building for Production

```bash
cd frontend
npm run build     # dist/ folder banega — kisi bhi static host (Vercel/Netlify) par deploy karein

cd ../backend
npm start          # ya Render/Railway jaisi Node hosting par deploy karein
```

Deploy karte waqt frontend ke `.env` mein `VITE_API_URL` ko apne deployed
backend URL par set karna na bhoolein.

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS, Framer Motion,
  Three.js / @react-three/fiber / @react-three/drei
- **Backend:** Node.js, Express, Nodemailer (optional email relay)

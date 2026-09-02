export type ProjTag = "ai" | "web" | "sys" | "cpp" | "hw" | "db";

export interface Project {
  icon: string;
  tag: ProjTag;
  tagLabel: string;
  tagLabel2?: string;
  title: string;
  desc: string;
  featured?: boolean;
}

export const tagStyles: Record<
  ProjTag,
  { text: string; bg: string; iconBg: string; c1: string; c2: string }
> = {
  ai: { text: "#a78bfa", bg: "rgba(124,58,237,0.12)", iconBg: "rgba(124,58,237,0.15)", c1: "#7c3aed", c2: "#f72585" },
  web: { text: "#60a5fa", bg: "rgba(26,108,245,0.12)", iconBg: "rgba(26,108,245,0.15)", c1: "#1a6cf5", c2: "#00d4ff" },
  sys: { text: "#f472b6", bg: "rgba(247,37,133,0.1)", iconBg: "rgba(247,37,133,0.15)", c1: "#f72585", c2: "#fb923c" },
  cpp: { text: "#00d4ff", bg: "rgba(0,212,255,0.08)", iconBg: "rgba(0,212,255,0.1)", c1: "#00d4ff", c2: "#1a6cf5" },
  hw: { text: "#fb923c", bg: "rgba(255,140,0,0.1)", iconBg: "rgba(255,140,0,0.1)", c1: "#d97706", c2: "#fbbf24" },
  db: { text: "#4ade80", bg: "rgba(0,200,100,0.08)", iconBg: "rgba(0,200,100,0.1)", c1: "#059669", c2: "#34d399" },
};

export const projects: Project[] = [
  {
    icon: "⚙️",
    tag: "cpp",
    tagLabel: "C++",
    tagLabel2: "DS Lab",
    title: "University Management System",
    desc: "Fully custom console-based system — no STL. Built Hash Table (chaining), AVL Tree (room scheduling), weighted Graph (BFS, DFS, Dijkstra's), linked-list Queue (complaint ticketing), and Stack (messaging). Every module built from scratch using pure linked lists.",
    featured: true,
  },
  {
    icon: "☁️",
    tag: "sys",
    tagLabel: "React",
    tagLabel2: "Firebase",
    title: "NimbusFM — Cloud File Manager",
    desc: "Full-stack cloud file manager with role-based access (Admin/User/Guest), drag-and-drop upload, recycle bin with restore, sharing & permissions, activity logs, and an admin dashboard with storage analytics.",
    featured: true,
  },
  {
    icon: "🎨",
    tag: "ai",
    tagLabel: "React",
    tagLabel2: "Node + Python",
    title: "ImagiCraft AI",
    desc: "AI-powered photo editor with a chat interface — type a command and transform an image (cartoonize, remove background, style transfer, enhance). React frontend, Node.js + Python backend with Stable Diffusion and OpenCV.",
    featured: true,
  },
  {
    icon: "🧾",
    tag: "db",
    tagLabel: "Node/Express",
    tagLabel2: "Oracle 12g",
    title: "Ledger — Invoice Generator & Tracker",
    desc: "Automated invoice generator and tracking dashboard built for a company pitch, with Pakistan tax-compliance fields (CNIC, NTN, STRN) and a phased roadmap toward multi-currency and payment gateway support.",
  },
  {
    icon: "📊",
    tag: "ai",
    tagLabel: "Python",
    tagLabel2: "K-Means",
    title: "Automated Exam Management System",
    desc: "Tkinter-based exam scheduling system using K-Means clustering to group students, with a date-sheet generator, sortable columns, pagination, and search — built for a Machine Learning coursework module.",
  },
  {
    icon: "🧠",
    tag: "ai",
    tagLabel: "AI",
    tagLabel2: "HTML/JS",
    title: "Wumpus World Logic Agent",
    desc: "Browser-based knowledge-based agent navigating Wumpus World using propositional logic and resolution refutation for real-time safe-path inference.",
  },
  {
    icon: "🔢",
    tag: "ai",
    tagLabel: "AI",
    tagLabel2: "Python",
    title: "Sudoku CSP Solver",
    desc: "Constraint-satisfaction solver using Backtracking, Forward Checking & AC-3 arc consistency — solves easy to very-hard puzzles by pruning invalid states early.",
  },
  {
    icon: "🗺️",
    tag: "ai",
    tagLabel: "Python",
    tagLabel2: "Tkinter",
    title: "Dynamic Pathfinding Agent",
    desc: "Grid agent with A* & Greedy BFS. Supports dynamic obstacles, real-time re-planning, and animated visualisation with Manhattan & Euclidean heuristics.",
  },
  {
    icon: "🔐",
    tag: "sys",
    tagLabel: "OS Lab",
    tagLabel2: "C · Ubuntu",
    title: "Concurrent Banking System",
    desc: "Multi-threaded banking system on Ubuntu. POSIX threads, semaphores & shared memory prevent race conditions in concurrent account operations.",
  },
  {
    icon: "🚪",
    tag: "hw",
    tagLabel: "Hardware",
    tagLabel2: "Arduino",
    title: "Auto Door System",
    desc: "Smart door with ultrasonic proximity detection, obstacle safety logic, and Arduino-programmed trigger control — a real embedded hardware build.",
  },
  {
    icon: "🎬",
    tag: "sys",
    tagLabel: "ffmpeg",
    tagLabel2: "TTS",
    title: "Hadi Textiles Corporate Video",
    desc: "Multi-part corporate profile video pipeline with AI voiceovers (Piper TTS), Ken Burns-style motion clips from stills, watermark removal, and blur-fill backgrounds — built for a real client deliverable.",
  },
  {
    icon: "🌦️",
    tag: "web",
    tagLabel: "Vite",
    tagLabel2: "Express",
    title: "Weather App Clone",
    desc: "Monorepo weather app — glassmorphism UI showing live temperature, UV index, sunrise/sunset and visibility, deployed as separate frontend/backend services on Vercel.",
  },
  {
    icon: "🗄️",
    tag: "db",
    tagLabel: "SQL",
    tagLabel2: "psql",
    title: "Database Lab System",
    desc: "Relational database design with ER diagrams (MS Visio), psql queries, normalization, and database server management.",
  },
  {
    icon: "🎮",
    tag: "cpp",
    tagLabel: "C++",
    tagLabel2: "OOP",
    title: "C++ Games",
    desc: "Stronghold Strategy Game (inheritance, polymorphism) + Bomberman Clone (2D arrays, game loop) — console-based with modular architecture.",
  },
  {
    icon: "☕",
    tag: "db",
    tagLabel: "Java",
    tagLabel2: "Oracle 12c",
    title: "Internship Java Applications",
    desc: "Number Guessing System, Online Reservation System, and registration/landing pages built during the Hadi Textile Mills internship — Java + Oracle 12c PL/SQL, with REST APIs tested in Postman.",
  },
];

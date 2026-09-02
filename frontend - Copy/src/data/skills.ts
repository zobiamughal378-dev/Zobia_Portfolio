export interface Skill {
  name: string;
  pct: number;
  gradient: string;
}

export const skills: Skill[] = [
  { name: "Data Structures & Algorithms", pct: 88, gradient: "linear-gradient(90deg,#1a6cf5,#00d4ff)" },
  { name: "Competitive Programming", pct: 82, gradient: "linear-gradient(90deg,#7c3aed,#f72585)" },
  { name: "Web Dev (React / Node)", pct: 80, gradient: "linear-gradient(90deg,#1a6cf5,#7c3aed)" },
  { name: "AI & Search Algorithms", pct: 78, gradient: "linear-gradient(90deg,#7c3aed,#00d4ff)" },
  { name: "SQL / Oracle PL-SQL / DBMS", pct: 76, gradient: "linear-gradient(90deg,#059669,#34d399)" },
  { name: "OS / Concurrency (C, Bash)", pct: 72, gradient: "linear-gradient(90deg,#f72585,#fb923c)" },
];

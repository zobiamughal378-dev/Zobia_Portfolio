export interface SkillGroup {
  label: string;
  color: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    color: "#00d4ff",
    items: ["C++", "C", "Python", "JavaScript", "Java", "HTML5", "CSS3", "Bash", "Assembly"],
  },
  {
    label: "Web & Backend",
    color: "#60a5fa",
    items: ["Node.js", "Express", "React", "REST APIs", "Postman", "Responsive Design"],
  },
  {
    label: "Database & Systems",
    color: "#4ade80",
    items: ["Oracle 12c", "PL/SQL", "PostgreSQL", "MySQL", "SQL", "MS Visio (ER Diagrams)"],
  },
  {
    label: "AI & Algorithms",
    color: "#a78bfa",
    items: [
      "BFS / DFS",
      "A* Search",
      "Minimax",
      "Propositional Logic",
      "CSP · Backtracking",
      "Dijkstra's",
      "Utility Agents",
    ],
  },
  {
    label: "OS · Hardware · Tools",
    color: "#f472b6",
    items: [
      "Ubuntu · Linux",
      "POSIX Threads",
      "Semaphores",
      "Bash Scripting",
      "Arduino",
      "Ultrasonic Sensor",
      "Git · GitHub",
      "VS Code",
      "MATLAB",
    ],
  },
];

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { skills } from "../data/skills";

const languages = [
  { name: "C++", pct: 90, color: "#00d4ff" },
  { name: "Python", pct: 85, color: "#7c3aed" },
  { name: "Java", pct: 78, color: "#f97316" },
  { name: "JavaScript", pct: 75, color: "#facc15" },
];

const tools = [
  "React", "Node.js", "Firebase", "Oracle PL/SQL", "PostgreSQL",
  "Git & GitHub", "Postman", "Tkinter", "Arduino", "ffmpeg",
];

export default function About() {
  return (
    <section id="about" className="relative bg-bg px-[6%] py-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <div className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cyan">
            About Me
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mb-14 text-[clamp(2rem,4vw,3rem)] font-extrabold">
            Skills &amp; <span className="text-cyan">Expertise</span>
          </h2>
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal delay={0.1} y={16}>
            <div className="space-y-4 text-[0.95rem] leading-[1.9] text-muted">
              <div className="mb-1 inline-flex items-center gap-2 rounded-full border border-cyan/15 bg-cyan/[0.05] px-4 py-1.5 font-mono text-[0.72rem] text-cyan">
                🎓 FAST-NUCES Chiniot-Faisalabad · BS Computer Science · 2024–2028
              </div>
              <p>
                I'm <strong className="text-white">Zobia Razzaq</strong>, a{" "}
                <strong className="text-white">2nd-year Computer Science student</strong> at
                FAST-NUCES Chiniot-Faisalabad, currently four semesters into my BS — covering
                everything from Digital Logic Design and Computer Organization &amp; Assembly, to
                Data Structures, Theory of Automata, Database Systems, Operating Systems, and
                Artificial Intelligence. I've built a strong foundation across both the
                theoretical and applied sides of CS.
              </p>
              <p>
                I'm an <strong className="text-white">ICPC Regionalist</strong> — I competed in
                the 2025 ICPC Asia-Topi Online Preliminary Contest at GIK Institute with my team,{" "}
                <strong className="text-white">Fast Syntax Syndicate</strong> (representing
                NU-CFC), and I actively solve algorithmic problems on both{" "}
                <strong className="text-white">LeetCode</strong> and{" "}
                <strong className="text-white">Codeforces</strong> to sharpen my competitive
                programming skills.
              </p>
              <p>
                On the development side, I've shipped real full-stack projects end to end —{" "}
                <strong className="text-white">NimbusFM</strong>, a role-based cloud file manager
                built with React and Firebase;{" "}
                <strong className="text-white">ImagiCraft AI</strong>, a chat-driven AI photo
                editor powered by Stable Diffusion and OpenCV; and{" "}
                <strong className="text-white">Ledger</strong>, an invoice generator and tracking
                dashboard built for a company pitch with Pakistan tax-compliance fields. I also
                hand-built a console-based University Management System entirely from scratch in
                C++ — no STL, just custom hash tables, AVL trees, graphs, and linked lists.
              </p>
              <p>
                I recently completed a{" "}
                <strong className="text-white">Full Stack Developer internship</strong> at Hadi
                Textile Mills, where I worked as a <strong className="text-white">
                  Java Developer
                </strong>{" "}
                building Oracle 12c PL/SQL-backed applications and testing REST APIs in Postman —
                and I produced a full corporate video pipeline using ffmpeg and AI voiceovers. I
                also serve as <strong className="text-white">Graphic Head</strong> at Amnesty
                International FAST Chapter. I'm currently looking for internships and
                collaborations where I can keep growing as a full-stack and AI/ML developer.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-10">
            <div>
              <div className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-muted">
                Languages I Code In
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {languages.map((l, i) => (
                  <Reveal key={l.name} delay={0.05 * i} y={16}>
                    <div className="flex flex-col items-center gap-2 rounded-xl border border-white/[0.06] bg-card px-3 py-5">
                      <RingStat pct={l.pct} color={l.color} />
                      <span className="text-[0.72rem] font-semibold">{l.name}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-muted">
                Core Competencies
              </div>
              <div className="flex flex-col gap-4">
                {skills.map((s, i) => (
                  <Reveal key={s.name} delay={0.05 * i} y={14}>
                    <div>
                      <div className="mb-2 flex justify-between">
                        <span className="text-[0.8rem] font-semibold tracking-[0.03em]">
                          {s.name}
                        </span>
                        <span className="font-mono text-[0.72rem] text-cyan">{s.pct}%</span>
                      </div>
                      <div className="h-[3px] overflow-hidden rounded bg-white/[0.06]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.pct}%` }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                          className="h-full rounded"
                          style={{ background: s.gradient }}
                        />
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-muted">
                Tools &amp; Platforms
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((t, i) => (
                  <Reveal key={t} delay={0.03 * i} y={10}>
                    <span className="inline-block rounded-full border border-cyan/15 bg-cyan/[0.04] px-3.5 py-1.5 text-[0.72rem] font-medium text-cyan/90">
                      {t}
                    </span>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RingStat({ pct, color }: { pct: number; color: string }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" className="-rotate-90">
      <circle cx="32" cy="32" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="5" />
      <motion.circle
        cx="32"
        cy="32"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        whileInView={{ strokeDashoffset: c - (c * pct) / 100 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <text
        x="32"
        y="34"
        textAnchor="middle"
        transform="rotate(90 32 32)"
        fontSize="13"
        fontFamily="JetBrains Mono, monospace"
        fill="#fff"
        fontWeight="600"
      >
        {pct}
      </text>
    </svg>
  );
}

import Reveal from "./Reveal";
import { skillGroups } from "../data/skills";

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

        <Reveal delay={0.1} y={16}>
          <div className="mb-16 space-y-4 text-[0.95rem] leading-[1.9] text-muted lg:max-w-[820px]">
            <div className="mb-1 inline-flex items-center gap-2 rounded-full border border-cyan/15 bg-cyan/[0.05] px-4 py-1.5 font-mono text-[0.72rem] text-cyan">
              🎓 FAST-NUCES Chiniot-Faisalabad · BS Computer Science · 2024–2028
            </div>
            <p>
              I'm <strong className="text-white">Zobia Razzaq</strong>, a{" "}
              <strong className="text-white">3rd-year Computer Science student</strong> at
              FAST-NUCES Chiniot-Faisalabad, currently four semesters into my BS — covering
              everything from Digital Logic Design and Computer Organization &amp; Assembly, to
              Data Structures, Theory of Automata, Database Systems, Operating Systems, and
              Artificial Intelligence. I've built a strong foundation across both the theoretical
              and applied sides of CS.
            </p>
            <p>
              I'm an <strong className="text-white">ICPC Regionalist</strong> — I competed in the
              2025 ICPC Asia-Topi Online Preliminary Contest at GIK Institute with my team,{" "}
              <strong className="text-white">Fast Syntax Syndicate</strong> (representing
              NU-CFC), and I actively solve algorithmic problems on both{" "}
              <strong className="text-white">LeetCode</strong> and{" "}
              <strong className="text-white">Codeforces</strong> to sharpen my competitive
              programming skills.
            </p>
            <p>
              On the development side, I've shipped real full-stack projects end to end —{" "}
              <strong className="text-white">NimbusFM</strong>, a role-based cloud file manager
              built with React and Firebase; <strong className="text-white">ImagiCraft AI</strong>
              , a chat-driven AI photo editor powered by Stable Diffusion and OpenCV; and{" "}
              <strong className="text-white">Ledger</strong>, an invoice generator and tracking
              dashboard built for a company pitch with Pakistan tax-compliance fields. I also
              hand-built a console-based University Management System entirely from scratch in
              C++ — no STL, just custom hash tables, AVL trees, graphs, and linked lists.
            </p>
            <p>
              I recently completed a <strong className="text-white">
                Full Stack Developer internship
              </strong>{" "}
              at Hadi Textile Mills, where I worked as a{" "}
              <strong className="text-white">Java Developer</strong> building Oracle 12c
              PL/SQL-backed applications and testing REST APIs in Postman — and I produced a full
              corporate video pipeline using ffmpeg and AI voiceovers. I also serve as{" "}
              <strong className="text-white">Graphic Head</strong> at Amnesty International FAST
              Chapter. I'm currently looking for internships and collaborations where I can keep
              growing as a full-stack and AI/ML developer.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cyan">
            Technical Arsenal
          </div>
        </Reveal>

        <div className="flex flex-col gap-7">
          {skillGroups.map((g, gi) => (
            <Reveal key={g.label} delay={0.05 * gi} y={14}>
              <div>
                <div
                  className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.18em]"
                  style={{ color: g.color }}
                >
                  {g.label}
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border px-4 py-2 text-[0.8rem] font-semibold transition-all hover:-translate-y-0.5"
                      style={{
                        borderColor: `${g.color}33`,
                        background: `${g.color}14`,
                        color: g.color,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

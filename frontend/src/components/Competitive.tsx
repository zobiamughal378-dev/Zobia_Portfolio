import Reveal from "./Reveal";
import ProjectIllustration from "./ProjectIllustration";

export default function Competitive() {
  return (
    <section id="competitive" className="relative bg-bg px-[6%] py-24">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <div className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cyan">
            Problem Solving
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mb-14 text-[clamp(2rem,4vw,3rem)] font-extrabold">
            Competitive <span className="text-cyan">Programming</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          <Reveal delay={0.1} y={30}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-card p-7 transition-all hover:-translate-y-1 hover:border-cyan/25">
              <div className="mb-4">
                <ProjectIllustration icon="⚡" seed={0} color1="#f59e0b" color2="#f97316" />
              </div>
              <div className="mb-1 font-mono text-[0.68rem] uppercase tracking-[0.15em] text-cyan">
                LeetCode
              </div>
              <div className="mb-2 text-[1.1rem] font-extrabold">Active Problem Solver</div>
              <div className="mb-4 font-mono text-[0.75rem] text-muted">
                leetcode.com/u/Zobia459
              </div>
              <p className="mb-5 text-[0.82rem] leading-[1.75] text-muted">
                Solving problems in C++ across arrays, strings, logic &amp; core algorithms —
                steady, consistent practice.
              </p>
              <a
                href="https://leetcode.com/u/Zobia459/"
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-lg border border-cyan/15 px-4 py-2 text-[0.75rem] font-semibold text-cyan transition-all hover:border-cyan hover:bg-cyan/10"
              >
                View Profile →
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.16} y={30}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-card p-7 transition-all hover:-translate-y-1 hover:border-cyan/25">
              <div className="mb-4">
                <ProjectIllustration icon="🧩" seed={1} color1="#1a6cf5" color2="#00d4ff" />
              </div>
              <div className="mb-1 font-mono text-[0.68rem] uppercase tracking-[0.15em] text-cyan">
                Codeforces
              </div>
              <div className="mb-2 text-[1.1rem] font-extrabold">Active Member</div>
              <div className="mb-4 font-mono text-[0.75rem] text-muted">
                codeforces.com
              </div>
              <p className="text-[0.82rem] leading-[1.75] text-muted">
                Also solving problems on Codeforces — building up rating and contest experience
                alongside LeetCode practice.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.22} y={30}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-card p-7 transition-all hover:-translate-y-1 hover:border-cyan/25">
              <div className="mb-4">
                <ProjectIllustration icon="🏆" seed={2} color1="#7c3aed" color2="#f72585" />
              </div>
              <div className="mb-1 font-mono text-[0.68rem] uppercase tracking-[0.15em] text-cyan">
                ICPC
              </div>
              <div className="mb-2 text-[1.1rem] font-extrabold">Team: Fast Syntax Syndicate</div>
              <div className="mb-4 font-mono text-[0.72rem] text-muted">
                Representing NU-CFC · Asia-Topi Prelims, GIK Institute
              </div>
              <p className="text-[0.82rem] leading-[1.75] text-muted">
                Competed with teammates Muhammad Bilal and Faiez Tariq, coached by Usman Ghous —
                graph theory, DP, and data structures under contest pressure.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import Reveal from "./Reveal";
import { projects, tagStyles } from "../data/projects";
import ProjectIllustration from "./ProjectIllustration";

export default function Projects() {
  return (
    <section id="projects" className="relative bg-navy px-[6%] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(26,108,245,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-[1100px]">
        <Reveal>
          <div className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cyan">
            What I've Built
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mb-14 text-[clamp(2rem,4vw,3rem)] font-extrabold">
            Featured <span className="text-cyan">Projects</span>
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const style = tagStyles[p.tag];
            return (
              <Reveal key={p.title} delay={(i % 6) * 0.06} y={30} className="h-full">
                <div
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] transition-all duration-300 hover:-translate-y-2 hover:border-cyan/30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4),0_0_0_1px_rgba(0,212,255,0.1)] ${
                    p.featured
                      ? "bg-gradient-to-br from-blue/[0.08] to-cyan/[0.04]"
                      : "bg-card"
                  }`}
                >
                  <div className="p-3 pb-0">
                    <ProjectIllustration
                      icon={p.icon}
                      seed={i}
                      color1={style.c1}
                      color2={style.c2}
                    />
                  </div>
                  <div className="relative flex flex-1 flex-col p-7 pt-5">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative mb-3 flex items-start justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        <span
                          className="rounded px-[9px] py-[3px] font-mono text-[0.6rem] font-semibold uppercase tracking-[0.06em]"
                          style={{ color: style.text, background: style.bg }}
                        >
                          {p.tagLabel}
                        </span>
                        {p.tagLabel2 && (
                          <span
                            className="rounded px-[9px] py-[3px] font-mono text-[0.6rem] font-semibold uppercase tracking-[0.06em]"
                            style={{ color: style.text, background: style.bg }}
                          >
                            {p.tagLabel2}
                          </span>
                        )}
                      </div>
                      <div className="text-[1.1rem] text-muted transition-all duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-hover:text-cyan">
                        ↗
                      </div>
                    </div>
                    <div className="relative mb-2.5 text-[1rem] font-bold leading-tight">
                      {p.title}
                    </div>
                    <div className="relative text-[0.82rem] leading-[1.7] text-muted">
                      {p.desc}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

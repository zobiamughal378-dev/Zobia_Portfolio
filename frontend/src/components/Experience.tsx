import { useState } from "react";
import Reveal from "./Reveal";
import { experience } from "../data/experience";

export default function Experience() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="experience" className="relative bg-navy px-[6%] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_100%,rgba(124,58,237,0.07),transparent_60%)]" />
      <div className="relative mx-auto max-w-[1100px]">
        <Reveal>
          <div className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cyan">
            Journey
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mb-14 text-[clamp(2rem,4vw,3rem)] font-extrabold">
            Experience &amp; <span className="text-cyan">Achievements</span>
          </h2>
        </Reveal>

        <div className="relative flex flex-col gap-4 sm:pl-2">
          <div className="pointer-events-none absolute bottom-3 left-[27px] top-3 hidden w-px bg-gradient-to-b from-cyan/40 via-cyan/10 to-transparent sm:block" />
          {experience.map((e, i) => {
            const isOpen = openIdx === i;
            return (
              <Reveal key={e.role} delay={i * 0.07} y={20}>
                <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-card transition-colors hover:border-cyan/20 sm:ml-[10px]">
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-cyan/25 bg-cyan/[0.06] text-[1.2rem]">
                        {e.icon}
                      </div>
                      <div>
                        <div className="mb-0.5 font-mono text-[0.66rem] tracking-[0.08em] text-cyan/80">
                          {e.year}
                        </div>
                        <div className="text-[0.9rem] font-bold sm:text-[0.98rem]">{e.role}</div>
                        <div className="mt-0.5 text-[0.76rem] text-muted">{e.org}</div>
                      </div>
                    </div>
                    <div
                      className={`flex-shrink-0 text-[0.85rem] text-muted transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </div>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 pl-[86px] text-[0.85rem] leading-[1.8] text-muted">
                        {e.desc}
                      </p>
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

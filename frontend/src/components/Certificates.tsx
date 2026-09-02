import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { certificates, type Certificate } from "../data/certificates";

export default function Certificates() {
  const [active, setActive] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="relative bg-bg px-[6%] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(124,58,237,0.06),transparent_55%)]" />
      <div className="relative mx-auto max-w-[1100px]">
        <Reveal>
          <div className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cyan">
            Recognition
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mb-14 text-[clamp(2rem,4vw,3rem)] font-extrabold">
            Certificates &amp; <span className="text-cyan">Achievements</span>
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c, i) => (
            <Reveal key={c.title} delay={(i % 6) * 0.05} y={26}>
              <button
                onClick={() => setActive(c)}
                className="group block w-full overflow-hidden rounded-2xl border border-white/[0.06] bg-card text-left transition-all duration-300 hover:-translate-y-2 hover:border-cyan/30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="p-4 font-mono text-[0.7rem] tracking-[0.1em] text-cyan">
                      VIEW CERTIFICATE →
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="mb-1.5 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-cyan/80">
                    {c.date}
                  </div>
                  <div className="mb-1.5 text-[0.95rem] font-bold leading-snug">{c.title}</div>
                  <div className="text-[0.75rem] leading-snug text-muted">{c.issuer}</div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-bg/90 p-6 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[88vh] w-full max-w-2xl overflow-auto rounded-2xl border border-cyan/15 bg-card"
            >
              <img src={active.image} alt={active.title} className="w-full bg-white" />
              <div className="p-6">
                <div className="mb-1 font-mono text-[0.65rem] uppercase tracking-[0.08em] text-cyan/80">
                  {active.date}
                </div>
                <div className="mb-1 text-[1.05rem] font-bold">{active.title}</div>
                <div className="mb-3 text-[0.8rem] text-cyan">{active.issuer}</div>
                <p className="text-[0.85rem] leading-[1.7] text-muted">{active.desc}</p>
                <button
                  onClick={() => setActive(null)}
                  className="mt-5 rounded-lg border border-cyan/20 px-5 py-2 text-[0.8rem] font-semibold text-cyan hover:bg-cyan/10"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

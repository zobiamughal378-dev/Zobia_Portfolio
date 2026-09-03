import { motion } from "framer-motion";

const taglineParts = [
  "CS Student @ FAST-NUCES",
  "ICPC Regionalist",
  "Full-Stack Developer",
  "Java Developer",
  "Competitive Programmer",
  "AI/ML Enthusiast",
];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-[6%] pb-20 pt-32">
      <div className="pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] animate-orb-float rounded-full bg-blue/20 blur-[80px]" />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-[400px] w-[400px] animate-orb-float rounded-full bg-purple/15 blur-[80px]"
        style={{ animationDelay: "-3s" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[900px] text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-7 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-cyan sm:text-[0.78rem]"
        >
          {taglineParts.map((t, i) => (
            <span key={t} className="flex items-center gap-2.5">
              {t}
              {i < taglineParts.length - 1 && <span className="text-muted/40">|</span>}
            </span>
          ))}
        </motion.div>

        <h1 className="mb-7 font-display text-[clamp(2.6rem,8vw,5.2rem)] font-extrabold leading-[0.98]">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="block overflow-hidden"
          >
            <span className="block">Zobia Razzaq</span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="mx-auto mb-10 max-w-[560px] text-[1.05rem] leading-[1.8] text-muted"
        >
          Building <strong className="text-white">intelligent systems</strong>, full-stack web
          apps &amp; embedded solutions. From AI agents to data structures — I turn concepts into
          working code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-lg bg-gradient-to-br from-blue to-cyan px-8 py-[14px] text-[0.85rem] font-bold tracking-[0.06em] text-bg transition-transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,212,255,0.3)]"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-cyan/15 px-8 py-[14px] text-[0.85rem] font-semibold tracking-[0.06em] text-cyan transition-all hover:-translate-y-1 hover:border-cyan hover:bg-cyan/10"
          >
            Let's Talk →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

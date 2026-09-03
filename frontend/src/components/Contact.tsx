import Reveal from "./Reveal";

const links = [
  { href: "https://linkedin.com/in/zobia-razzaq-ab1107398", icon: "💼", label: "LinkedIn" },
  { href: "https://github.com/zobiamughal378-dev", icon: "🐙", label: "GitHub" },
  { href: "https://leetcode.com/u/Zobia459/", icon: "⚡", label: "LeetCode" },
  { href: "mailto:zobiamughal378@gmail.com", icon: "✉️", label: "Email" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative bg-bg px-[6%] py-24 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(0,212,255,0.05),transparent_60%)]" />
      <div className="relative mx-auto max-w-[600px]">
        <Reveal>
          <div className="mb-3 flex justify-center font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cyan">
            Let's Connect
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mb-5 text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.1]">
            Let's Build
            <br />
            <span className="text-cyan">Something Great</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mb-12 leading-[1.8] text-muted">
            Open to internships, collaborations &amp; exciting projects. I'd love to hear from
            you!
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mb-12 flex flex-wrap justify-center gap-3.5">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 rounded-[10px] border border-white/[0.08] bg-white/[0.04] px-5 py-3.5 text-[0.85rem] font-semibold tracking-[0.04em] transition-all hover:-translate-y-1 hover:border-cyan hover:bg-cyan/[0.08] hover:text-cyan hover:shadow-[0_12px_30px_rgba(0,212,255,0.1)]"
              >
                <span className="text-[1.1rem]">{l.icon}</span>
                {l.label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href="mailto:zobiamughal378@gmail.com"
            className="inline-block rounded-lg bg-gradient-to-br from-blue to-cyan px-10 py-4 text-[0.9rem] font-bold tracking-[0.06em] text-bg transition-transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,212,255,0.3)]"
          >
            Send Me an Email →
          </a>
        </Reveal>

        <Reveal delay={0.25}>
          <a
            href="mailto:zobiamughal378@gmail.com"
            className="mt-8 block font-mono text-[1rem] text-cyan opacity-70 transition-opacity hover:opacity-100"
          >
            zobiamughal378@gmail.com
          </a>
        </Reveal>
      </div>
    </section>
  );
}

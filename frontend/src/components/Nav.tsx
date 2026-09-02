import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#competitive", label: "CP" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const sections = links.map((l) => document.querySelector(l.href));
      let current = "";
      sections.forEach((s) => {
        if (s && window.scrollY >= (s as HTMLElement).offsetTop - 120) {
          current = "#" + s.id;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between border-b border-cyan/10 bg-bg/70 px-[6%] py-5 backdrop-blur-md">
      <a href="#top" className="font-mono text-[0.85rem] tracking-[0.1em] text-cyan">
        Zobia<span className="text-white">.dev</span>
      </a>
      <div className="hidden gap-8 md:flex">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={`relative text-[0.82rem] font-semibold tracking-[0.06em] transition-colors ${
              active === l.href ? "text-cyan" : "text-muted hover:text-white"
            }`}
          >
            {l.label}
          </a>
        ))}
      </div>
      <button
        aria-label="Toggle menu"
        onClick={() => setOpen((o) => !o)}
        className="flex flex-col gap-1.5 md:hidden"
      >
        <span className="h-[1.5px] w-6 bg-white" />
        <span className="h-[1.5px] w-6 bg-white" />
        <span className="h-[1.5px] w-4 bg-white" />
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-full flex flex-col gap-4 border-b border-cyan/10 bg-bg/95 px-[6%] py-6 backdrop-blur-md md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-semibold tracking-[0.06em] text-muted hover:text-cyan"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

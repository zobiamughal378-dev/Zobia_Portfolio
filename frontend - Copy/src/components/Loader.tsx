import { useEffect, useState } from "react";

const messages = ["LOADING PORTFOLIO...", "COMPILING PROJECTS...", "INITIALIZING UI...", "READY!"];

export default function Loader({ onDone }: { onDone: () => void }) {
  const [pct, setPct] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const iv = setInterval(() => {
      setPct((p) => {
        const next = Math.min(100, p + Math.random() * 8 + 4);
        if (next >= 100) {
          clearInterval(iv);
          setTimeout(() => setHide(true), 350);
          setTimeout(onDone, 900);
        }
        return next;
      });
    }, 60);
    return () => clearInterval(iv);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const msgIndex = Math.min(3, Math.floor(pct / 25));

  return (
    <div
      className={`fixed inset-0 z-[9000] flex flex-col items-center justify-center gap-5 bg-bg transition-opacity duration-500 ${
        hide ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="animate-blink font-mono text-[0.8rem] tracking-[0.2em] text-cyan">
        {messages[msgIndex]}
      </div>
      <div className="h-[2px] w-[200px] overflow-hidden rounded bg-cyan/15">
        <div
          className="h-full rounded bg-gradient-to-r from-blue to-cyan transition-[width] duration-75"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

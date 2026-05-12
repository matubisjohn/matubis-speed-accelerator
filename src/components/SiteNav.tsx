import { useEffect, useState } from "react";

const links = [
  { href: "#overview", label: "Overview" },
  { href: "#personas", label: "Personas" },
  { href: "#journey", label: "Journey" },
] as const;

export function SiteNav({ scheme = "auto" }: { scheme?: "dark" | "light" | "auto" }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dark = scheme === "dark" || (scheme === "auto" && !scrolled);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-[1400px] px-6 lg:px-10 flex items-center justify-between transition-colors duration-500 ${
          scrolled
            ? dark
              ? "glass rounded-full py-3 px-6"
              : "glass-light rounded-full py-3 px-6 shadow-soft"
            : ""
        }`}
        style={scrolled ? { maxWidth: 1100 } : undefined}
      >
        <a href="#overview" className="flex items-center gap-2 group">
          <div
            className={`h-8 w-8 rounded-md flex items-center justify-center font-display text-sm transition-colors ${
              dark ? "bg-paper text-ink" : "bg-ink text-paper"
            }`}
          >
            L
          </div>
          <div className="leading-tight">
            <div
              className={`font-display text-lg ${dark ? "text-paper" : "text-ink"}`}
            >
              LDV
            </div>
            <div
              className={`eyebrow text-[0.6rem] -mt-0.5 ${
                dark ? "text-paper/60" : "text-stone"
              }`}
            >
              Automotive
            </div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            return (
              <a
                key={l.href}
                href={l.href}
                className={`px-4 py-2 text-sm rounded-full transition-all ${
                  dark
                    ? "text-paper/70 hover:text-paper"
                    : "text-ink/60 hover:text-ink"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <a
          href="#journey"
          className={`hidden md:inline-flex items-center gap-2 text-sm rounded-full px-5 py-2.5 transition-all ${
            dark
              ? "bg-paper text-ink hover:bg-cream"
              : "bg-ink text-paper hover:bg-ink-soft"
          }`}
        >
          Begin the journey
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}

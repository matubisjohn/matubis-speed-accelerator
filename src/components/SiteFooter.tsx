import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="eyebrow text-paper/50 mb-4">LDV Automotive</div>
            <h3 className="font-display text-3xl md:text-4xl text-balance leading-[1.1]">
              Designed around the modern buyer, not the dealership floor.
            </h3>
          </div>
          <div className="md:col-span-3">
            <div className="eyebrow text-paper/40 mb-4">Explore</div>
            <ul className="space-y-2 text-paper/80">
              <li><Link to="/" className="hover:text-paper">Overview</Link></li>
              <li><Link to="/personas" className="hover:text-paper">Personas</Link></li>
              <li><Link to="/journey" className="hover:text-paper">Journey</Link></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="eyebrow text-paper/40 mb-4">A strategy showcase</div>
            <p className="text-paper/60 text-sm leading-relaxed">
              A presentation of audience psychology and emotional decision
              journeys for a new generation of automotive ownership.
            </p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-paper/10 flex flex-wrap justify-between gap-4 text-xs text-paper/40 font-mono">
          <span>© {new Date().getFullYear()} LDV Automotive — Fictional case study.</span>
          <span>Cinematic edition · v1</span>
        </div>
      </div>
    </footer>
  );
}

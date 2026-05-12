import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroTruck from "@/assets/hero-truck.jpg";
import { JourneySection } from "@/components/JourneySection";
import { PersonasSection } from "@/components/PersonasSection";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LDV Automotive — Understanding the Modern Buyer" },
      {
        name: "description",
        content:
          "A cinematic strategy showcase exploring the audiences, emotions and decisions behind a new generation of automotive ownership.",
      },
      { property: "og:title", content: "LDV Automotive — Understanding the Modern Buyer" },
      {
        property: "og:description",
        content:
          "Audience personas and the emotional customer journey, presented as a premium interactive experience.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteNav scheme="auto" />

      {/* HERO */}
      <section
        id="overview"
        ref={heroRef}
        className="relative h-[100svh] w-full overflow-hidden bg-ink text-paper grain"
      >
        <motion.div
          style={{ y, scale }}
          className="absolute inset-0"
        >
          <img
            src={heroTruck}
            alt="A premium pickup truck on a misty mountain road at dawn"
            className="w-full h-full object-cover"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-fade-dark" />
          <div className="absolute inset-0 bg-ink/30" />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 h-full flex flex-col justify-end pb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="eyebrow text-ember mb-8 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-ember" />
            A 2026 strategy showcase
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="font-display text-[clamp(2.75rem,8vw,8rem)] leading-[0.92] tracking-tight max-w-5xl text-balance"
          >
            Understanding<br />
            <span className="italic font-light text-paper/90">the modern</span> buyer.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 grid md:grid-cols-12 gap-8 items-end"
          >
            <p className="md:col-span-6 text-paper/70 text-lg md:text-xl leading-relaxed text-pretty">
              For LDV Automotive — an exploration of six audiences, five
              decisive moments, and the emotional architecture behind the
              vehicles people choose to live with.
            </p>
            <div className="md:col-span-6 md:justify-self-end flex flex-wrap gap-3">
              <a
                href="#personas"
                className="inline-flex items-center gap-3 rounded-full bg-paper text-ink px-7 py-4 text-sm font-medium hover:bg-cream transition-colors"
              >
                Meet the personas
                <span aria-hidden>→</span>
              </a>
              <a
                href="#journey"
                className="inline-flex items-center gap-3 rounded-full glass px-7 py-4 text-sm text-paper hover:bg-paper/10 transition-colors"
              >
                Trace the journey
              </a>
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 eyebrow text-paper/40 flex items-center gap-3">
          <span>Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
          >
            ↓
          </motion.span>
        </div>
      </section>

      {/* THESIS */}
      <section className="relative bg-paper py-32 md:py-44">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="eyebrow text-ember mb-6">The thesis</div>
            <p className="font-mono text-xs text-stone leading-relaxed">
              01 / Three sections.<br />
              02 / Six audiences.<br />
              03 / Five decisive moments.
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.02] text-balance">
              The vehicle is no longer the product.
              <span className="italic text-stone"> The life around it is.</span>
            </h2>
            <p className="mt-10 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl text-pretty">
              Today's buyers don't shop for trims and tow ratings. They shop for
              identity, freedom, and the version of themselves they're becoming.
              This study unpacks how that decision actually happens.
            </p>
          </div>
        </div>
      </section>

      {/* PERSONAS PREVIEW */}
      <section className="relative bg-cream py-28 md:py-36 overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <div className="eyebrow text-ember mb-4">Section 02 — Personas</div>
              <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] max-w-3xl text-balance">
                Six humans behind every wheel.
              </h2>
            </div>
            <Link
              to="/personas"
              className="inline-flex items-center gap-2 text-sm text-ink border-b border-ink pb-1 hover:gap-3 transition-all"
            >
              View all six <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {previewPersonas.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group"
              >
                <Link to="/personas" className="block">
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-ink/5 relative">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute top-3 left-3 eyebrow text-paper bg-ink/40 backdrop-blur px-2.5 py-1 rounded-full">
                      {p.id}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="font-display text-lg leading-tight">{p.name}</div>
                    <div className="text-xs text-stone mt-1">{p.tag}</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY TEASER */}
      <section className="relative bg-ink text-paper py-32 md:py-44 overflow-hidden grain">
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-ember)" }}
        />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <div className="eyebrow text-ember mb-6">Section 03 — Journey</div>
            <h2 className="font-display text-[clamp(2.25rem,5.5vw,5.5rem)] leading-[0.98] text-balance">
              Five moments<br />
              <span className="italic text-paper/70">that change everything.</span>
            </h2>
            <p className="mt-8 text-paper/70 text-lg max-w-xl leading-relaxed text-pretty">
              From the first quiet itch to road-testing a new life, follow the
              First-Home Renovator through the emotional terrain of a major
              automotive decision.
            </p>
            <Link
              to="/journey"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-paper text-ink px-7 py-4 text-sm font-medium hover:bg-cream transition-colors"
            >
              Enter the journey <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="md:col-span-5">
            <div className="space-y-3">
              {[
                { n: "01", t: "The Itch", d: "3–6 weeks" },
                { n: "02", t: "Window Shopping", d: "~6 weeks" },
                { n: "03", t: "Kicking Tyres", d: "~4 weeks" },
                { n: "04", t: "Signing On", d: "~2 weeks" },
                { n: "05", t: "Road Testing Life", d: "First 6 months" },
              ].map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="glass rounded-2xl p-5 flex items-center justify-between hover:bg-paper/[0.08] transition-colors"
                >
                  <div className="flex items-center gap-5">
                    <div className="font-mono text-xs text-ember">{s.n}</div>
                    <div className="font-display text-xl">{s.t}</div>
                  </div>
                  <div className="font-mono text-xs text-paper/50">{s.d}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

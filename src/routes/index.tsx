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
          className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 h-full flex flex-col justify-center"
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
            the <span className="italic font-light text-paper/90">modern buyer.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 grid md:grid-cols-12 gap-8 items-end"
          >
            <p className="md:col-span-6 text-paper/70 text-lg md:text-xl leading-relaxed text-pretty">
              Exploring the emotional journeys, lifestyle aspirations, and
              decision-making psychology of today's automotive consumers.
            </p>
            <div className="md:col-span-6 md:justify-self-end flex flex-wrap gap-3">
              <a
                href="#personas"
                className="inline-flex items-center gap-3 rounded-full bg-paper text-ink px-7 py-4 text-sm font-medium hover:bg-cream transition-colors"
              >
                Meet the personas
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
        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center flex flex-col items-center">
          <div className="eyebrow text-ember mb-6">The thesis</div>
          <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.02] text-balance">
            The vehicle is not just a machine –<br />
            <span className="italic text-stone">it's the infrastructure for modern life.</span>
          </h2>
          <p className="mt-10 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl text-pretty">
            Today's buyers don't shop for trims and tow ratings. They shop for
            identity, freedom, and the version of themselves they're becoming.
            This study unpacks how that decision actually happens.
          </p>
        </div>
      </section>

      <PersonasSection />
      <JourneySection />

      <SiteFooter />
    </div>
  );
}

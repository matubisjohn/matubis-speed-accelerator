import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import journeyItch from "@/assets/journey-itch.jpg";
import journeyWindow from "@/assets/journey-window.jpg";
import journeyTyres from "@/assets/journey-tyres.jpg";
import journeySigning from "@/assets/journey-signing.jpg";
import journeyRoad from "@/assets/journey-road.jpg";

type Stage = {
  n: string;
  title: string;
  duration: string;
  behavior: string;
  mindset: string;
  emotional: number;
  rational: number;
  barriers: string[];
  opportunities: string[];
  img: string;
  scheme: "dark" | "light";
};

const stages: Stage[] = [
  {
    n: "01",
    title: "The Itch",
    duration: "3–6 weeks",
    behavior:
      "Scrolling renovation content and noticing utes in the background. Starting to feel limited by current vehicle.",
    mindset: "Maybe we should look at something bigger next year?",
    emotional: 55,
    rational: 30,
    barriers: ["Low urgency", "Segment feels intimidating", "Partner not convinced"],
    opportunities: ["Lifestyle-first content", "First-time buyer guides"],
    img: journeyItch,
    scheme: "dark",
  },
  {
    n: "02",
    title: "Window Shopping",
    duration: "~6 weeks",
    behavior:
      "Saving photos, watching YouTube reviews, discussing vehicles with partner.",
    mindset: "This one looks cool.",
    emotional: 70,
    rational: 40,
    barriers: ["Too many options", "Aesthetic disagreements", "Trim confusion"],
    opportunities: ["Visual configurators", "Lifestyle imagery"],
    img: journeyWindow,
    scheme: "light",
  },
  {
    n: "03",
    title: "Kicking Tyres",
    duration: "~4 weeks",
    behavior:
      "Test drives, owner reviews, feature comparisons, insurance research.",
    mindset: "Which one actually suits our life?",
    emotional: 50,
    rational: 75,
    barriers: ["Hidden costs", "Sales pressure", "Overwhelming advice"],
    opportunities: ["Transparent pricing", "Low-pressure test drives", "Independent reviews"],
    img: journeyTyres,
    scheme: "dark",
  },
  {
    n: "04",
    title: "Signing On",
    duration: "~2 weeks",
    behavior: "Finance applications, negotiations, accessory decisions.",
    mindset: "Let's just get this done.",
    emotional: 85,
    rational: 90,
    barriers: ["Negotiation anxiety", "Rushed decisions", "Delivery wait-time concerns"],
    opportunities: ["Onboarding communication", "Named support contact"],
    img: journeySigning,
    scheme: "light",
  },
  {
    n: "05",
    title: "Road Testing Life",
    duration: "First 6 months",
    behavior:
      "Using the vehicle for projects, learning features, sharing ownership experiences socially.",
    mindset: "Was this the right call?",
    emotional: 75,
    rational: 60,
    barriers: ["Small issues feel major", "Servicing surprises", "Feature learning curve"],
    opportunities: ["Owner onboarding app", "Feature tutorials", "Community engagement"],
    img: journeyRoad,
    scheme: "dark",
  },
];

export function JourneySection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" className="min-h-screen scroll-mt-24 bg-paper text-ink">
      {/* Header — cinematic */}
      <div className="relative bg-ink text-paper pt-28 pb-32 md:pt-36 md:pb-44 overflow-hidden grain">
        <div
          className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl"
          style={{ background: "var(--gradient-ember)" }}
        />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <div className="eyebrow text-ember mb-6">Section 03 — Customer Journey</div>
            <h1 className="font-display text-[clamp(2.5rem,7.5vw,7.5rem)] leading-[0.92] text-balance">
              Five moments<br />
              <span className="italic text-paper/70">that change everything.</span>
            </h1>
          </div>
          <div className="md:col-span-4">
            <p className="text-paper/70 text-lg leading-relaxed text-pretty">
              The 12-month emotional arc of The First-Home Renovator —
              from the first quiet itch to road-testing a new way of living.
            </p>
          </div>
        </div>

        {/* Emotional graph preview */}
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 mt-20">
          <EmotionalGraph stages={stages} />
        </div>
      </div>

      {/* Sticky timeline */}
      <div ref={trackRef} className="relative">
        {/* Spine */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-ink/10 hidden md:block">
          <motion.div
            style={{ height: lineHeight }}
            className="w-px bg-gradient-to-b from-ember to-ink/40"
          />
        </div>

        {stages.map((s, i) => (
          <StageBlock key={s.n} stage={s} index={i} />
        ))}
      </div>

      {/* Touchpoint ecosystem */}
      <div className="bg-cream py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="eyebrow text-ember mb-6">Touchpoint ecosystem</div>
          <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1] max-w-3xl text-balance">
            Where the decision is actually made.
          </h2>
          <p className="mt-6 text-ink-soft text-lg max-w-2xl text-pretty">
            The journey doesn't happen in the showroom. It happens in living
            rooms, group chats, comment sections and quiet moments scrolling
            after midnight.
          </p>

          <div className="mt-14 grid md:grid-cols-3 gap-4">
            {[
              { t: "Inspiration", items: ["Instagram", "TikTok creators", "Pinterest", "Reddit threads"] },
              { t: "Validation", items: ["YouTube reviews", "Owner forums", "Friends & partners", "Renovation podcasts"] },
              { t: "Conversion", items: ["Test drives", "Independent reviews", "Finance calculators", "Configurators"] },
            ].map((g, i) => (
              <motion.div
                key={g.t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-paper p-7 border border-ink/5 shadow-soft"
              >
                <div className="eyebrow text-ember mb-4">0{i + 1}</div>
                <h3 className="font-display text-2xl mb-4">{g.t}</h3>
                <ul className="space-y-2">
                  {g.items.map((it) => (
                    <li key={it} className="text-ink-soft text-sm flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-ember" />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StageBlock({ stage, index }: { stage: Stage; index: number }) {
  const isDark = stage.scheme === "dark";
  const flip = index % 2 === 1;

  return (
    <article
      className={`relative py-28 md:py-40 overflow-hidden ${
        isDark ? "bg-ink text-paper grain" : "bg-paper text-ink"
      }`}
    >
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div
          className={`grid md:grid-cols-12 gap-10 md:gap-16 items-center ${
            flip ? "md:[&>*:first-child]:order-2" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: flip ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-elegant">
              <img
                src={stage.img}
                alt={stage.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-6"
          >
            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-display text-7xl md:text-8xl text-ember leading-none">
                {stage.n}
              </span>
              <span className={`eyebrow ${isDark ? "text-paper/50" : "text-stone"}`}>
                {stage.duration}
              </span>
            </div>

            <h2 className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1] text-balance">
              {stage.title}
            </h2>

            <p
              className={`mt-6 text-lg leading-relaxed text-pretty ${
                isDark ? "text-paper/75" : "text-ink-soft"
              }`}
            >
              {stage.behavior}
            </p>

            <blockquote
              className={`mt-8 pl-5 border-l-2 border-ember font-display italic text-xl md:text-2xl text-balance ${
                isDark ? "text-paper/90" : "text-ink"
              }`}
            >
              "{stage.mindset}"
            </blockquote>

            {/* Emotional/Rational bars */}
            <div className="mt-10 space-y-4 max-w-md">
              <ScoreBar
                label="Emotional"
                value={stage.emotional}
                isDark={isDark}
                color="var(--ember)"
              />
              <ScoreBar
                label="Rational"
                value={stage.rational}
                isDark={isDark}
                color={isDark ? "oklch(0.96 0.008 75)" : "oklch(0.18 0.012 50)"}
              />
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <SmallBlock title="Barriers" items={stage.barriers} isDark={isDark} />
              <SmallBlock title="Opportunities" items={stage.opportunities} isDark={isDark} />
            </div>
          </motion.div>
        </div>
      </div>
    </article>
  );
}

function ScoreBar({
  label,
  value,
  isDark,
  color,
}: {
  label: string;
  value: number;
  isDark: boolean;
  color: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className={`eyebrow ${isDark ? "text-paper/60" : "text-stone"}`}>{label}</span>
        <span className={`font-mono text-xs ${isDark ? "text-paper/70" : "text-ink-soft"}`}>
          {value}/100
        </span>
      </div>
      <div
        className={`relative h-1.5 rounded-full overflow-hidden ${
          isDark ? "bg-paper/10" : "bg-ink/10"
        }`}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ background: color }}
          className="absolute inset-y-0 left-0 rounded-full"
        />
      </div>
    </div>
  );
}

function SmallBlock({
  title,
  items,
  isDark,
}: {
  title: string;
  items: string[];
  isDark: boolean;
}) {
  return (
    <div>
      <div className={`eyebrow mb-3 ${isDark ? "text-paper/50" : "text-stone"}`}>{title}</div>
      <ul className="space-y-1.5">
        {items.map((it) => (
          <li
            key={it}
            className={`text-sm leading-snug flex gap-2 ${
              isDark ? "text-paper/75" : "text-ink-soft"
            }`}
          >
            <span className="text-ember mt-1.5 leading-none">·</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EmotionalGraph({ stages }: { stages: Stage[] }) {
  const w = 1000;
  const h = 240;
  const padX = 40;
  const padY = 30;
  const stepX = (w - padX * 2) / (stages.length - 1);

  const pointFor = (val: number, i: number) => ({
    x: padX + stepX * i,
    y: padY + (h - padY * 2) * (1 - val / 100),
  });

  const ePoints = stages.map((s, i) => pointFor(s.emotional, i));
  const rPoints = stages.map((s, i) => pointFor(s.rational, i));

  const toPath = (pts: { x: number; y: number }[]) =>
    pts
      .map((p, i) => {
        if (i === 0) return `M ${p.x},${p.y}`;
        const prev = pts[i - 1];
        const cx = (prev.x + p.x) / 2;
        return `C ${cx},${prev.y} ${cx},${p.y} ${p.x},${p.y}`;
      })
      .join(" ");

  return (
    <div className="rounded-3xl glass p-6 md:p-10">
      <div className="flex items-center justify-between mb-6">
        <div className="eyebrow text-paper/60">Emotional & rational arc</div>
        <div className="flex items-center gap-5 text-xs font-mono text-paper/70">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-ember" />
            Emotional
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-paper" />
            Rational
          </span>
        </div>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto">
        <defs>
          <linearGradient id="emberFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.62 0.14 45)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="oklch(0.62 0.14 45)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* grid */}
        {[0, 25, 50, 75, 100].map((g) => {
          const y = padY + (h - padY * 2) * (1 - g / 100);
          return (
            <line
              key={g}
              x1={padX}
              x2={w - padX}
              y1={y}
              y2={y}
              stroke="oklch(0.96 0.008 75 / 0.08)"
              strokeWidth={1}
            />
          );
        })}
        {/* emotional fill */}
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          d={`${toPath(ePoints)} L ${ePoints[ePoints.length - 1].x},${h - padY} L ${ePoints[0].x},${h - padY} Z`}
          fill="url(#emberFill)"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          d={toPath(ePoints)}
          stroke="oklch(0.62 0.14 45)"
          strokeWidth={2.5}
          fill="none"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.3, ease: "easeInOut" }}
          d={toPath(rPoints)}
          stroke="oklch(0.96 0.008 75)"
          strokeWidth={1.5}
          strokeDasharray="4 4"
          fill="none"
        />
        {/* points + labels */}
        {stages.map((s, i) => (
          <g key={s.n}>
            <circle cx={ePoints[i].x} cy={ePoints[i].y} r={5} fill="oklch(0.62 0.14 45)" />
            <circle cx={rPoints[i].x} cy={rPoints[i].y} r={3} fill="oklch(0.96 0.008 75)" />
            <text
              x={ePoints[i].x}
              y={h - 6}
              textAnchor="middle"
              className="font-mono"
              fontSize={10}
              fill="oklch(0.96 0.008 75 / 0.6)"
            >
              {s.n} · {s.title}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

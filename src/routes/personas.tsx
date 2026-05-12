import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import personaRenovator from "@/assets/persona-renovator.jpg";
import personaAdventurer from "@/assets/persona-adventurer.jpg";
import personaFarmer from "@/assets/persona-farmer.jpg";
import personaFamily from "@/assets/persona-family.jpg";
import personaRoadtrip from "@/assets/persona-roadtrip.jpg";
import personaTeen from "@/assets/persona-teen.jpg";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/personas")({
  head: () => ({
    meta: [
      { title: "Audience Personas — LDV Automotive" },
      {
        name: "description",
        content:
          "Six emotionally-real audiences shaping the next generation of automotive ownership. An interactive editorial study.",
      },
      { property: "og:title", content: "Audience Personas — LDV Automotive" },
      {
        property: "og:description",
        content:
          "Meet the First-Home Renovator, Weekend Adventurer, Hobby Farmer, Blended Household, Road Trip Romantic and Teen Driver's Parent.",
      },
    ],
  }),
  component: PersonasPage,
});

type Persona = {
  id: string;
  name: string;
  img: string;
  snapshot: string;
  quote: string;
  emotions: string[];
  barriers: string[];
  triggers: string[];
  motivations: string[];
  media: string[];
  usage: string[];
};

const personas: Persona[] = [
  {
    id: "01",
    name: "The First-Home Renovator",
    img: personaRenovator,
    snapshot:
      "A couple in their late 20s who recently bought their first home in a growth corridor suburb. Weekends are spent on tip runs, garden waste removal, and hauling renovation materials. Their hatchback is limiting their DIY ambitions.",
    quote:
      "We want something practical that actually fits the life we're building.",
    emotions: ["Aspiration", "Self-sufficiency", "Pride", "Anxiety"],
    barriers: [
      "Intimidated by traditional ute culture",
      "Unsure if a ute suits their long-term lifestyle",
      "Worried it may feel impractical for daily use",
    ],
    triggers: [
      "Spending too much on hire vehicles and removalists",
      "Seeing renovation creators using utes",
      "Larger projects requiring material hauling",
    ],
    motivations: [
      "Financial independence through DIY",
      "Homeowner identity and capability",
      "Avoiding repeated hire costs",
    ],
    media: [
      "Instagram renovation content",
      "Pinterest boards",
      "TikTok DIY creators",
      "Home loan podcasts",
      "Reddit r/AusFinance",
      "Real estate newsletters",
    ],
    usage: [
      "Hardware store trips",
      "Hauling timber and tools",
      "Weekend renovation projects",
      "Garden waste transport",
    ],
  },
  {
    id: "02",
    name: "The Weekend Adventurer",
    img: personaAdventurer,
    snapshot:
      "A mid-30s mountain biker, surfer, or camper living in inner-ring suburbs. Their gear keeps expanding and their SUV no longer supports spontaneous outdoor adventures.",
    quote: "I want a vehicle that lets us leave the city whenever we want.",
    emotions: ["Freedom", "Exploration", "Belonging", "Identity"],
    barriers: [
      "Partner concerns about fuel economy",
      "Insurance cost anxiety",
      "Fear of becoming a stereotypical 'ute bro'",
    ],
    triggers: [
      "New outdoor hobbies requiring more cargo",
      "Friends switching to utes",
      "Remote camping trips inaccessible by sedan",
    ],
    motivations: [
      "Freedom and spontaneity",
      "Adventure access",
      "Belonging to outdoor communities",
    ],
    media: [
      "Adventure YouTube channels",
      "Strava",
      "AllTrails",
      "Outdoor podcasts",
      "Meta ads from gear retailers",
    ],
    usage: [
      "Surf trips",
      "Mountain biking weekends",
      "Camping gear transport",
      "Outdoor road trips",
    ],
  },
  {
    id: "03",
    name: "The Hobby Farmer",
    img: personaFarmer,
    snapshot:
      "Professionals in their early 50s who recently purchased a small lifestyle property outside the city. They balance office jobs with weekend farming and rural projects.",
    quote:
      "We finally bought the property we dreamed about — now we need the right vehicle to support it.",
    emotions: ["Reinvention", "Pride", "Competence", "Legacy"],
    barriers: [
      "Overwhelmed by towing specs and technical details",
      "No prior experience with capable vehicles",
      "Concern about servicing logistics",
    ],
    triggers: [
      "Failed towing experiences",
      "Getting stuck on rural land",
      "Rural neighbour recommendations",
      "Expanding farming projects",
    ],
    motivations: [
      "Achieving a lifelong rural dream",
      "Credibility among experienced rural owners",
      "Making practical, smart decisions",
    ],
    media: [
      "Hobby farmer Facebook groups",
      "Rural lifestyle magazines",
      "Landcare podcasts",
      "Rural events and workshops",
      "LinkedIn ads",
    ],
    usage: [
      "Towing trailers",
      "Fencing projects",
      "Livestock support",
      "Transporting rural equipment",
    ],
  },
  {
    id: "04",
    name: "The Blended Household",
    img: personaFamily,
    snapshot:
      "Two working parents in their late 30s managing four children across a blended family structure. They require a true 7-seater with flexibility and comfort.",
    quote: "We need something that works for everyone without constant compromise.",
    emotions: ["Stability", "Togetherness", "Practicality", "Harmony"],
    barriers: [
      "Difficult seating configurations",
      "Balancing two drivers' preferences",
      "Sports gear storage needs",
    ],
    triggers: [
      "Cramped third-row seating",
      "Holiday packing limitations",
      "Co-parenting schedule changes",
    ],
    motivations: [
      "Reducing family transport stress",
      "Creating shared ownership",
      "Comfort and harmony",
    ],
    media: [
      "Parenting podcasts",
      "Family influencers",
      "Facebook parent groups",
      "Streaming TV",
      "Instagram Reels",
    ],
    usage: [
      "School runs",
      "Sports transport",
      "Family road trips",
      "Co-parenting logistics",
    ],
  },
  {
    id: "05",
    name: "The Road Trip Romantic",
    img: personaRoadtrip,
    snapshot:
      "A DINK couple in their 40s passionate about long-distance Australian road trips and spontaneous travel experiences.",
    quote:
      "We don't need a family SUV — we need a vehicle built for adventure together.",
    emotions: ["Nostalgia", "Intimacy", "Discovery", "Freedom"],
    barriers: [
      "Family-focused SUV marketing feels irrelevant",
      "Prioritising comfort over towing",
      "Overwhelmed by oversized family messaging",
    ],
    triggers: [
      "Bucket-list travel goals",
      "Inspiration from touring friends",
      "Feeling limited by current sedan",
    ],
    motivations: [
      "Collecting shared experiences",
      "Travel freedom",
      "Spontaneity and exploration",
    ],
    media: [
      "Travel blogs",
      "Tourism YouTube channels",
      "Audiobooks and podcasts",
      "Meta tourism ads",
      "In-flight magazines",
    ],
    usage: [
      "Interstate road trips",
      "Touring",
      "Camping",
      "Long-distance comfort driving",
    ],
  },
  {
    id: "06",
    name: "The Teen Driver's Parent",
    img: personaTeen,
    snapshot:
      "Parents in their late 40s preparing for their teenager's learner permit and future first vehicle.",
    quote:
      "We want something safe enough for our child but smart enough for the whole family.",
    emotions: ["Protection", "Responsibility", "Anxiety", "Preparation"],
    barriers: [
      "Balancing current family needs with future teen use",
      "Uncertainty around safety tech",
      "Avoiding buying twice",
    ],
    triggers: [
      "Learner permit milestone",
      "High insurance quotes",
      "Hearing about teen accidents",
    ],
    motivations: [
      "Safety",
      "Long-term investment",
      "Responsible parenting",
    ],
    media: [
      "Parenting Facebook groups",
      "Driver safety organisations",
      "Parenting podcasts",
      "Insurance comparison content",
    ],
    usage: [
      "Family driving",
      "Teen driving lessons",
      "Commuting",
      "Future resale planning",
    ],
  },
];

function PersonasPage() {
  const [active, setActive] = useState<Persona | null>(null);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <SiteNav scheme="light" />

      {/* Header */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <div className="eyebrow text-ember mb-6">Section 02 — Personas</div>
              <h1 className="font-display text-[clamp(2.5rem,7vw,7rem)] leading-[0.95] text-balance">
                Six humans.<br />
                <span className="italic text-stone">One question.</span>
              </h1>
            </div>
            <div className="md:col-span-5">
              <p className="text-lg text-ink-soft leading-relaxed text-pretty">
                Each persona is built from real behavioural patterns,
                emotional drivers, and digital habits. Open one to step
                inside the life that shapes the decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial grid */}
      <section className="pb-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {personas.map((p, i) => (
              <motion.button
                key={p.id}
                onClick={() => setActive(p)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
                className="group text-left"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink/5">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-90" />
                  <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
                    <span className="eyebrow text-paper bg-ink/30 backdrop-blur px-3 py-1.5 rounded-full">
                      Persona {p.id}
                    </span>
                    <span className="text-paper/80 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                      Open →
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 text-paper">
                    <h3 className="font-display text-2xl md:text-3xl leading-tight text-balance">
                      {p.name}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.emotions.slice(0, 3).map((e) => (
                        <span
                          key={e}
                          className="text-[0.65rem] uppercase tracking-wider font-mono px-2 py-1 rounded-full glass text-paper"
                        >
                          {e}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-5 text-ink-soft text-sm leading-relaxed line-clamp-3 text-pretty">
                  {p.snapshot}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {active && <PersonaPanel persona={active} onClose={() => setActive(null)} />}
      </AnimatePresence>

      <SiteFooter />
    </div>
  );
}

function PersonaPanel({ persona, onClose }: { persona: Persona; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-ink/70 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 60, opacity: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
        className="mx-auto my-8 max-w-6xl bg-paper rounded-3xl overflow-hidden shadow-elegant"
      >
        <div className="grid md:grid-cols-2">
          <div className="relative h-[40vh] md:h-auto md:min-h-[600px]">
            <img
              src={persona.img}
              alt={persona.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-paper">
              <div className="eyebrow text-ember mb-3">Persona {persona.id}</div>
              <h2 className="font-display text-4xl md:text-5xl leading-[0.95] text-balance">
                {persona.name}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="absolute top-5 right-5 h-10 w-10 rounded-full glass text-paper flex items-center justify-center hover:bg-paper/15"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div className="p-8 md:p-12 space-y-8 max-h-[80vh] overflow-y-auto">
            <div>
              <div className="eyebrow text-stone mb-3">Snapshot</div>
              <p className="text-ink-soft leading-relaxed text-pretty">{persona.snapshot}</p>
            </div>

            <blockquote className="border-l-2 border-ember pl-5">
              <p className="font-display text-xl md:text-2xl italic leading-snug text-balance">
                "{persona.quote}"
              </p>
            </blockquote>

            <div>
              <div className="eyebrow text-stone mb-3">Emotional drivers</div>
              <div className="flex flex-wrap gap-2">
                {persona.emotions.map((e) => (
                  <span
                    key={e}
                    className="px-3 py-1.5 rounded-full bg-cream text-ink text-sm border border-ink/10"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Block title="Barriers" items={persona.barriers} />
              <Block title="Triggers" items={persona.triggers} />
              <Block title="Motivations" items={persona.motivations} />
              <Block title="Vehicle usage" items={persona.usage} />
            </div>

            <div>
              <div className="eyebrow text-stone mb-3">Media consumption</div>
              <div className="flex flex-wrap gap-1.5">
                {persona.media.map((m) => (
                  <span
                    key={m}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-ink/5 text-ink-soft"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="eyebrow text-stone mb-3">{title}</div>
      <ul className="space-y-2">
        {items.map((it) => (
          <li key={it} className="flex gap-3 text-sm text-ink-soft leading-relaxed">
            <span className="text-ember mt-1.5">·</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

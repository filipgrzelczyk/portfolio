import { motion, useReducedMotion } from "motion/react"
import { Reveal } from "./primitives"

type Project = {
  no: string
  kind: string
  title: string
  sector: string
  desc: string
  result: string
  tech: string[]
  img: string
  span: "wide" | "tall"
}

const PROJECTS: Project[] = [
  {
    no: "01",
    kind: "Website",
    title: "Volt Interiors",
    sector: "Architektura wnętrz",
    desc: "Editorialowa strona portfolio studia projektowego z płynnymi przejściami między realizacjami.",
    result: "+180% zapytań ofertowych",
    tech: ["Next.js", "Motion", "Sanity"],
    img: "https://images.unsplash.com/photo-1678690832311-bb6e361989ca?w=1200&h=800&fit=crop&auto=format",
    span: "wide",
  },
  {
    no: "02",
    kind: "Landing Page",
    title: "Northbeam",
    sector: "Aplikacja B2B",
    desc: "Konwersyjny landing dla startupu z sekcją cenową i testami A/B na CTA.",
    result: "6.2% konwersji na trial",
    tech: ["React", "TypeScript", "Tailwind"],
    img: "https://images.unsplash.com/photo-1542837336-d14bdf342f9b?w=900&h=1100&fit=crop&auto=format",
    span: "tall",
  },
  {
    no: "03",
    kind: "E-commerce",
    title: "Atelier Nord",
    sector: "Moda premium",
    desc: "Sklep z autorskim koszykiem, płynnym checkoutem i mobilnym pierwszeństwem.",
    result: "1.8× wyższa wartość koszyka",
    tech: ["Next.js", "Shopify", "Stripe"],
    img: "https://images.unsplash.com/photo-1648803336451-d882ce46e68c?w=900&h=1100&fit=crop&auto=format",
    span: "tall",
  },
  {
    no: "04",
    kind: "Brand Website",
    title: "Lumen Studio",
    sector: "Studio kreatywne",
    desc: "Odważna strona marki z interaktywną typografią i sekcjami sterowanymi scrollem.",
    result: "Nagroda CSS Design Awards",
    tech: ["Next.js", "Motion", "WebGL"],
    img: "https://images.unsplash.com/photo-1787262737237-b627fde76a8e?w=1200&h=800&fit=crop&auto=format",
    span: "wide",
  },
]

function Card({ p }: { p: Project }) {
  const reduce = useReducedMotion()
  return (
    <Reveal
      className={
        p.span === "wide" ? "sm:col-span-2" : "sm:col-span-1"
      }
    >
      <a
        href="#kontakt"
        className="group block"
        aria-label={`Projekt: ${p.title}`}
      >
        <div className="relative overflow-hidden rounded-2xl border border-line bg-ink">
          <div
            className={`relative w-full overflow-hidden ${
              p.span === "wide" ? "aspect-[16/10]" : "aspect-[4/5]"
            }`}
          >
            <motion.img
              src={p.img}
              alt={`Realizacja ${p.title} — ${p.sector}`}
              loading="lazy"
              className="h-full w-full object-cover"
              initial={false}
              whileHover={reduce ? {} : { scale: 1.06 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            {/* index */}
            <span className="mono absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-xs font-bold">
              {p.no}
            </span>
            <span className="mono absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
              {p.kind}
            </span>
            {/* hover CTA */}
            <div className="pointer-events-none absolute inset-x-4 bottom-4 flex translate-y-3 items-end justify-between opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="max-w-[70%] text-sm leading-snug text-paper">
                {p.desc}
              </p>
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-paper text-ink">
                ↗
              </span>
            </div>
          </div>
        </div>

        {/* meta below */}
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="display text-2xl sm:text-3xl">{p.title}</h3>
            <p className="mono mt-1 text-xs uppercase tracking-widest text-ink-soft">
              {p.sector}
            </p>
          </div>
          <span className="mono whitespace-nowrap rounded-full border border-line px-3 py-1 text-[10px] uppercase tracking-widest text-accent">
            {p.result}
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="mono rounded-md bg-white/60 px-2 py-1 text-[10px] uppercase tracking-widest text-ink-soft"
            >
              {t}
            </span>
          ))}
        </div>
      </a>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section
      id="projekty"
      className="mx-auto max-w-[1600px] scroll-mt-20 px-5 py-20 sm:px-8 sm:py-32"
    >
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b border-line pb-4">
        <div className="flex items-baseline gap-4">
          <span className="mono text-xs uppercase tracking-widest text-accent">
            (02)
          </span>
          <span className="mono text-xs uppercase tracking-widest text-ink-soft">
            Wybrane realizacje
          </span>
        </div>
        <h2 className="display text-[clamp(2rem,7vw,5.5rem)] uppercase leading-none">
          Portfolio
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2">
        {PROJECTS.map((p) => (
          <Card key={p.no} p={p} />
        ))}
      </div>
    </section>
  )
}

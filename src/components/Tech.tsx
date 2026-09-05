const TECH = [
  "Angular",
  "Tailwind",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Figma",
]

export default function Tech() {
  const row = [...TECH, ...TECH]
  return (
    <section
      aria-label="Technologie i narzędzia"
      className="border-y border-line bg-ink py-6 text-paper"
    >
      <div className="mx-auto mb-4 flex max-w-[1600px] items-center justify-between px-5 sm:px-8">
        <span className="mono text-[10px] uppercase tracking-widest text-paper/50">
          Stack &amp; narzędzia
        </span>
        <span className="mono text-[10px] uppercase tracking-widest text-paper/50">
          Design → Kod → Wdrożenie
        </span>
      </div>
      <div className="no-scrollbar relative overflow-hidden">
        <div className="marquee flex w-max gap-10 whitespace-nowrap pr-10">
          {row.map((t, i) => (
            <span
              key={i}
              className="display flex items-center gap-10 text-3xl uppercase text-paper/85 sm:text-5xl"
            >
              {t}
              <span className="text-accent">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

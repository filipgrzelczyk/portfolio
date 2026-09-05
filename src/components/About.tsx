import { Reveal, MaskLines } from "./primitives"

export default function About() {
  return (
    <section
      id="o-mnie"
      className="mx-auto max-w-[1600px] scroll-mt-20 px-5 py-20 sm:px-8 sm:py-32"
    >
      <div className="mb-12 flex items-baseline gap-4 border-b border-line pb-4">
        <span className="mono text-xs uppercase tracking-widest text-accent">
          (01)
        </span>
        <span className="mono text-xs uppercase tracking-widest text-ink-soft">
          O mnie
        </span>
      </div>

      <div className="grid gap-14 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <h2 className="display text-[clamp(2rem,6vw,4.5rem)]">
            <MaskLines
              lines={[
                <>Nie robię ładnych</>,
                <>stron. Buduję</>,
                <>
                  <span className="text-accent">narzędzia biznesowe.</span>
                </>,
              ]}
            />
          </h2>

          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
              Nazywam się Filip Grzelczyk. Od dwóch lat łączę projektowanie
              i programowanie, żeby tworzyć strony, które realnie pracują na
              wynik firmy. Zaczynam od strategii i UX, a kończę na
              dopracowanym kodzie i szybkim wdrożeniu.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              Każdy projekt traktuję indywidualnie — bez gotowych szablonów,
              bez kompromisów przy detalach. Interesuje mnie moment, w którym
              design spotyka technologię i zaczyna zarabiać.
            </p>
          </Reveal>
        </div>

        {/* Approach card */}
        <div className="flex flex-col gap-4">
          {[
            {
              t: "Design",
              d: "Interfejsy projektowane pod konkretny cel biznesowy i realnego użytkownika.",
            },
            {
              t: "Development",
              d: "Czysty, wydajny kod — React, Next.js, TypeScript. Bez ciężkich page-builderów.",
            },
            {
              t: "Strategia",
              d: "Struktura treści i ścieżki konwersji zaplanowane przed pierwszym pikselem.",
            },
          ].map((item, i) => (
            <Reveal key={item.t} delay={i * 0.08}>
              <div className="group flex gap-5 rounded-2xl border border-line bg-white/40 p-6 transition-colors hover:border-ink">
                <span className="mono text-xs text-accent">0{i + 1}</span>
                <div>
                  <h3 className="display text-2xl">{item.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {item.d}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

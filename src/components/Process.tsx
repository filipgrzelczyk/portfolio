import { Reveal } from "./primitives"

const STEPS = [
  {
    no: "01",
    t: "Poznanie",
    d: "Rozmawiamy o Twoim biznesie oraz celach. Zbieram wymagania, analizuję i definiuję, jak strona ma realnie wyglądać.",
  },
  {
    no: "02",
    t: "Strategia",
    d: "Na podstawie rozmowy przygotowuję strukturę treści i mapę strony. Otrzymujesz widełki kosztowe oraz rekomendację od czego najlepiej zacząć.",
  },
  {
    no: "03",
    t: "Design",
    d: "Tworzę indywidualny system wizualny i makiety w Figmie — typografia, kolor, layout, mikrointerakcje.",
  },
  {
    no: "04",
    t: "Realizacja",
    d: "Koduję stronę w React / Next.js. Pracuję w etapach, na bieżąco pokazuję działającą wersję i zbieram Twój feedback. Responsywność, wydajność i dostępność są wpisane w każdy komponent.",
  },
  {
    no: "05",
    t: "Przekazanie",
    d: "Wdrażam, optymalizuję i przekazuję projekt gotowy do działania.",
  },
]

export default function Process() {
  return (
    <section
      id="proces"
      className="mx-auto max-w-[1600px] scroll-mt-20 px-5 py-20 sm:px-8 sm:py-32"
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr]">
        {/* Sticky title */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="mb-6 flex items-baseline gap-4 border-b border-line pb-4">
            <span className="mono text-xs uppercase tracking-widest text-accent">
              (03)
            </span>
            <span className="mono text-xs uppercase tracking-widest text-ink-soft">
              Jak powstaje strona
            </span>
          </div>
          <h2 className="display text-[clamp(2.2rem,6vw,5rem)]">
            Proces,
            <br />
            który daje
            <br />
            <span className="text-accent">pewność.</span>
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-ink-soft">
            Pięć etapów, jeden kierunek — strona, która działa na Twój wynik.
            Na każdym kroku wiesz, co się dzieje i dlaczego.
          </p>
        </div>

        {/* Steps */}
        <ol className="flex flex-col">
          {STEPS.map((s, i) => (
            <Reveal
              key={s.no}
              as="li"
              delay={i * 0.05}
              className="group grid grid-cols-[auto_1fr] gap-6 border-t border-line py-8 transition-colors last:border-b hover:bg-white/40 sm:gap-10 sm:py-10"
            >
              <span className="display text-4xl text-line transition-colors group-hover:text-accent sm:text-6xl">
                {s.no}
              </span>
              <div>
                <h3 className="display text-2xl sm:text-4xl">{s.t}</h3>
                <p className="mt-3 max-w-lg leading-relaxed text-ink-soft">
                  {s.d}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1600px] px-5 py-16 sm:px-8">
        <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-12 lg:flex-row">
          <div>
            <a
              href="#top"
              className="mono flex items-center gap-2 text-sm font-bold"
            >
              <span className="inline-block size-2.5 rounded-full bg-accent" />
              FILIP GRZELCZYK — studio
            </a>
            <p className="display mt-6 max-w-md text-3xl sm:text-4xl">
              Strony, które
              <br />
              pracują na wynik.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <span className="mono text-[10px] uppercase tracking-widest text-paper/40">
                Nawigacja
              </span>
              <ul className="mt-4 space-y-2">
                {[
                  ["Projekty", "#projekty"],
                  ["O mnie", "#o-mnie"],
                  ["Proces", "#proces"],
                  ["Kontakt", "#kontakt"],
                ].map(([l, h]) => (
                  <li key={h}>
                    <a
                      href={h}
                      className="text-paper/80 transition-colors hover:text-accent"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="mono text-[10px] uppercase tracking-widest text-paper/40">
                Social
              </span>
              <ul className="mt-4 space-y-2">
                {[
                  { label: "GitHub", href: "https://github.com/filipgrzelczyk" },
                  { label: "Instagram", href: "https://www.instagram.com/filip.grzel/" },
                ].map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-paper/80 transition-colors hover:text-accent"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="mono text-[10px] uppercase tracking-widest text-paper/40">
                Kontakt
              </span>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="mailto:filip.grzelczyk05@gmail.com"
                    className="text-paper/80 transition-colors hover:text-accent"
                  >
                    filip.grzelczyk05@gmail.com
                  </a>
                </li>
                <li className="text-paper/80">Szczecin, PL</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <span className="mono flex items-center gap-2 text-xs uppercase tracking-widest text-paper/60">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Available for select projects — {year}
          </span>
          <span className="mono text-xs text-paper/40">
            © {year} Filip Grzelczyk. Wszelkie prawa zastrzeżone.
          </span>
        </div>
      </div>
    </footer>
  )
}

import { useState } from "react"
import { MaskLines, Magnetic, Reveal } from "./primitives"

export default function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      {/* Big CTA */}
      <section className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-32">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 text-paper sm:px-14 sm:py-24">
          <div
            className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--accent)" }}
          />
          <span className="mono text-xs uppercase tracking-widest text-accent">
            (04) — Zaczynamy?
          </span>
          <h2 className="display mt-6 text-[clamp(2.6rem,10vw,9rem)] uppercase">
            <MaskLines
              lines={[
                <>Masz pomysł</>,
                <>
                  na stronę?{" "}
                  <span className="text-accent">Zbudujmy ją.</span>
                </>,
              ]}
            />
          </h2>
          <Reveal delay={0.2}>
            <div className="mt-10">
              <Magnetic>
                <a
                  href="#kontakt"
                  className="group inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-medium text-white transition-colors hover:bg-white hover:text-ink"
                >
                  Napisz do mnie
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact form */}
      <section
        id="kontakt"
        className="mx-auto max-w-[1600px] scroll-mt-20 px-5 pb-24 sm:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="mb-6 flex items-baseline gap-4 border-b border-line pb-4">
              <span className="mono text-xs uppercase tracking-widest text-accent">
                (05)
              </span>
              <span className="mono text-xs uppercase tracking-widest text-ink-soft">
                Kontakt
              </span>
            </div>
            <h3 className="display text-4xl sm:text-5xl">
              Porozmawiajmy
              <br />o Twoim projekcie.
            </h3>
            <p className="mt-6 max-w-sm leading-relaxed text-ink-soft">
              Odpisuję zwykle w ciągu 24 godzin. Bez zobowiązań — najpierw
              sprawdzamy, czy do siebie pasujemy.
            </p>

            <dl className="mt-10 space-y-5">
              <div>
                <dt className="mono text-[10px] uppercase tracking-widest text-ink-soft">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href="mailto:filip.grzelczyk05@gmail.com"
                    className="text-lg underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                  >
                    filip.grzelczyk05@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="mono text-[10px] uppercase tracking-widest text-ink-soft">
                  Telefon
                </dt>
                <dd className="mt-1 text-lg">+48 570 050 504</dd>
              </div>
              <div>
                <dt className="mono text-[10px] uppercase tracking-widest text-ink-soft">
                  Social
                </dt>
                <dd className="mt-2 flex gap-3">
                  {[
                    { label: "GitHub", href: "https://github.com/filipgrzelczyk" },
                    { label: "Instagram", href: "https://www.instagram.com/filip.grzel/" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mono rounded-full border border-line px-3 py-1 text-xs transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                    >
                      {s.label}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="rounded-3xl border border-line bg-white/50 p-6 sm:p-10"
          >
            {sent ? (
              <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
                <span className="mono mb-4 inline-flex size-14 items-center justify-center rounded-full bg-accent text-2xl text-white">
                  ✓
                </span>
                <h4 className="display text-3xl">Wiadomość wysłana</h4>
                <p className="mt-3 max-w-xs text-ink-soft">
                  Dzięki! Odezwę się do Ciebie najszybciej jak to możliwe.
                </p>
              </div>
            ) : (
              <div className="grid gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Imię" name="name" placeholder="Jan Kowalski" />
                  <Field
                    label="E-mail"
                    name="email"
                    type="email"
                    placeholder="jan@firma.pl"
                  />
                </div>
                <Field
                  label="Firma"
                  name="company"
                  placeholder="Nazwa firmy (opcjonalnie)"
                  required={false}
                />
                <div>
                  <label
                    htmlFor="msg"
                    className="mono mb-2 block text-[10px] uppercase tracking-widest text-ink-soft"
                  >
                    Opowiedz o projekcie
                  </label>
                  <textarea
                    id="msg"
                    name="message"
                    rows={4}
                    required
                    placeholder="Czego potrzebujesz i na kiedy?"
                    className="w-full resize-none rounded-xl border border-line bg-paper px-4 py-3 text-base outline-none transition-colors placeholder:text-ink-soft/60 focus:border-accent"
                  />
                </div>
                <Magnetic className="self-start">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 rounded-full bg-ink px-8 py-4 text-base font-medium text-paper transition-colors hover:bg-accent"
                  >
                    Wyślij wiadomość
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </Magnetic>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mono mb-2 block text-[10px] uppercase tracking-widest text-ink-soft"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-base outline-none transition-colors placeholder:text-ink-soft/60 focus:border-accent"
      />
    </div>
  )
}

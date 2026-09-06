import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { MaskLines, Magnetic } from "./primitives"

export default function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const yBrowser = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -80])

  return (
    <section
      id="top"
      ref={ref}
      className="relative mx-auto max-w-[1600px] px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-36"
    >
      {/* Top meta row */}
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
        <span className="mono flex items-center gap-2 text-xs uppercase tracking-widest text-ink-soft">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          Dostępny — Q4 2026
        </span>
        <span className="mono text-xs uppercase tracking-widest text-ink-soft">
          Szczecin, PL · Zdalnie
        </span>
        <span className="mono hidden text-xs uppercase tracking-widest text-ink-soft sm:block">
          Web Design × Development
        </span>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-end">
        {/* Headline */}
        <div>
          <h1 className="display text-[clamp(2.6rem,10vw,8.5rem)] uppercase">
            <MaskLines
              lines={[
                <>Tworzę</>,
                <>nowoczesne</>,
                <>strony</>,
                <span className="italic text-accent" style={{ fontWeight: 900 }}>
                  dla firm.
                </span>,
              ]}
            />
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft"
          >
            Projektuję i buduję nowoczesne strony internetowe dla firm, które
            chcą wyglądać profesjonalnie i zdobywać klientów. Design, kod
            i strategia w jednym miejscu.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Magnetic>
              <a
                href="#projekty"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 text-base font-medium text-paper transition-colors hover:bg-accent"
              >
                Zobacz projekty
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-ink px-7 py-4 text-base font-medium text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                Porozmawiajmy
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Browser window visual */}
        <motion.div style={{ y: yBrowser }} className="relative">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_40px_80px_-40px_rgba(0,0,0,0.35)]"
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-line bg-paper px-4 py-3">
              <span className="size-3 rounded-full bg-ink/15" />
              <span className="size-3 rounded-full bg-ink/15" />
              <span className="size-3 rounded-full bg-accent" />
              <div className="mono ml-3 flex-1 truncate rounded-md bg-white px-3 py-1 text-[11px] text-ink-soft">
                https://twoja-marka.pl
              </div>
            </div>
            {/* Fake UI content */}
            <div className="space-y-4 p-6">
              <div className="flex items-center justify-between">
                <div className="h-2.5 w-20 rounded-full bg-ink/80" />
                <div className="flex gap-2">
                  <div className="h-2 w-10 rounded-full bg-ink/15" />
                  <div className="h-2 w-10 rounded-full bg-ink/15" />
                  <div className="h-2 w-14 rounded-full bg-accent" />
                </div>
              </div>
              <div className="display text-3xl leading-[0.95]">
                Design,
                <br />
                który działa.
              </div>
              <div className="grid grid-cols-3 gap-3 pt-2">
                {["+180%", "0.4s", "98"].map((n, i) => (
                  <motion.div
                    key={n}
                    initial={reduce ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + i * 0.15 }}
                    className="rounded-lg border border-line p-3"
                  >
                    <div className="mono text-lg font-bold text-accent">{n}</div>
                    <div className="mono mt-1 text-[9px] uppercase tracking-widest text-ink-soft">
                      {["Konwersja", "Ładowanie", "Lighthouse"][i]}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Floating code chip */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mono absolute -bottom-5 -left-4 hidden rounded-xl border border-ink/10 bg-ink px-4 py-3 text-xs text-paper shadow-xl sm:block"
          >
            <span className="text-accent">const</span> impact ={" "}
            <span className="text-accent">true</span>;
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

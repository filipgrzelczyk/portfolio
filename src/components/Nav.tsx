import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Magnetic } from "./primitives"

const LINKS = [
  { label: "Projekty", href: "#projekty" },
  { label: "O mnie", href: "#o-mnie" },
  { label: "Proces", href: "#proces" },
  { label: "Kontakt", href: "#kontakt" },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-paper/80 backdrop-blur-md border-b border-line"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-[1600px] items-center justify-between px-5 sm:px-8 transition-all duration-500 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <a
            href="#top"
            className="mono text-sm font-bold tracking-tight flex items-center gap-2"
          >
            <span className="inline-block size-2.5 rounded-full bg-accent" />
            FILIP&nbsp;GRZELCZYK
            <span className="hidden text-ink-soft sm:inline">— studio</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="mono text-xs uppercase tracking-widest text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <Magnetic>
              <a
                href="#kontakt"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
              >
                Rozpocznij projekt
                <span className="transition-transform group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>
            </Magnetic>
          </div>

          <button
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-11 items-center justify-center md:hidden"
          >
            <div className="relative h-3 w-6">
              <span
                className={`absolute left-0 h-0.5 w-6 bg-ink transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-6 bg-ink transition-all duration-300 ${
                  open ? "-rotate-45 !top-1.5" : ""
                }`}
              />
            </div>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col bg-ink px-6 pb-10 pt-24 text-paper md:hidden"
          >
            <div className="flex flex-1 flex-col justify-center gap-2">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                  className="display border-b border-white/10 py-4 text-5xl"
                >
                  <span className="mono mr-3 align-super text-xs text-accent">
                    0{i + 1}
                  </span>
                  {l.label}
                </motion.a>
              ))}
            </div>
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-accent py-4 text-base font-medium text-white"
            >
              Rozpocznij projekt ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

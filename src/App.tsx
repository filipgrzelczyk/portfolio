import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Tech from "./components/Tech"
import Process from "./components/Process"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function FloatingCTA() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const nearBottom =
        window.innerHeight + y > document.body.scrollHeight - 900
      setShow(y > 700 && !nearBottom)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#kontakt"
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 26 }}
          className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-center gap-2 rounded-full bg-accent py-4 text-base font-medium text-white shadow-2xl md:hidden"
        >
          Rozpocznij projekt ↗
        </motion.a>
      )}
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <div className="min-h-full bg-paper text-ink">
      <Nav />
      <main>
        <Hero />
        <Tech />
        <About />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}

import { useRef, useState, type ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"

/* Fade + rise reveal on scroll into view */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: "div" | "span" | "li"
}) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  )
}

/* Line-by-line masked heading reveal */
export function MaskLines({
  lines,
  className,
}: {
  lines: ReactNode[]
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={reduce ? false : { y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{
              duration: 0.9,
              delay: 0.06 * i,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

/* Magnetic button — pulls toward cursor on desktop, disabled for reduced motion / touch */
export function Magnetic({
  children,
  className,
  strength = 0.35,
}: {
  children: ReactNode
  className?: string
  strength?: number
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return
    if (window.matchMedia("(pointer: coarse)").matches) return
    const r = ref.current.getBoundingClientRect()
    setPos({
      x: (e.clientX - (r.left + r.width / 2)) * strength,
      y: (e.clientY - (r.top + r.height / 2)) * strength,
    })
  }

  return (
    <motion.span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.5 }}
      className={className}
      style={{ display: "inline-flex" }}
    >
      {children}
    </motion.span>
  )
}

export function Counter({
  to,
  suffix = "",
  className,
}: {
  to: number
  suffix?: string
  className?: string
}) {
  const reduce = useReducedMotion()
  const [val, setVal] = useState(reduce ? to : 0)
  const started = useRef(false)

  return (
    <motion.span
      className={className}
      onViewportEnter={() => {
        if (started.current || reduce) return
        started.current = true
        const start = performance.now()
        const dur = 1400
        const tick = (now: number) => {
          const p = Math.min((now - start) / dur, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setVal(Math.round(eased * to))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }}
      viewport={{ once: true }}
    >
      {val}
      {suffix}
    </motion.span>
  )
}

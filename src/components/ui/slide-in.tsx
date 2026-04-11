import { useRef } from "react"
import { motion, useInView } from "motion/react"

interface SlideInProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  duration?: number
  delay?: number
  offset?: number
  inViewMargin?: string
}

export function SlideIn({
  children,
  className,
  direction = "up",
  duration = 0.5,
  delay = 0,
  offset = 30,
  inViewMargin = "-50px",
}: SlideInProps) {
  const ref = useRef(null)
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin })

  const getOffset = () => {
    switch (direction) {
      case "up": return -offset
      case "down": return offset
      case "left": return -offset
      case "right": return offset
      default: return -offset
    }
  }

  const axis = direction === "left" || direction === "right" ? "x" : "y"

  return (
    <motion.div
      ref={ref}
      initial={{ 
        [axis]: getOffset(), 
        opacity: 0 
      }}
      animate={inViewResult ? { 
        [axis]: 0, 
        opacity: 1 
      } : { 
        [axis]: getOffset(), 
        opacity: 0 
      }}
      style={{ visibility: inViewResult ? "visible" : "hidden" }}
      transition={{
        delay: delay,
        duration: duration,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
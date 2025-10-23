import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Petal {
  id: number
  x: number
  delay: number
  duration: number
  size: number
}

export default function RosePetals() {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    const createPetal = (id: number): Petal => ({
      id,
      x: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 6, // 4-10 seconds
      size: 0.5 + Math.random() * 0.5 // 0.5-1.0 size multiplier
    })

    // Create initial petals
    const initialPetals = Array.from({ length: 20 }, (_, i) => createPetal(i))
    setPetals(initialPetals)

    // Add new petals periodically
    const interval = setInterval(() => {
      setPetals(prev => [
        ...prev.slice(-15), // Keep only last 15 petals
        createPetal(Date.now())
      ])
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      <AnimatePresence>
        {petals.map((petal) => (
          <motion.div
            key={petal.id}
            initial={{ 
              y: -100, 
              x: `${petal.x}%`, 
              opacity: 0,
              rotate: 0,
              scale: petal.size
            }}
            animate={{ 
              y: window.innerHeight + 100, 
              opacity: [0, 1, 1, 0],
              rotate: 360,
              x: `${petal.x + (Math.random() - 0.5) * 20}%`
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: petal.duration,
              delay: petal.delay,
              ease: "linear"
            }}
            className="absolute text-2xl"
            style={{
              fontSize: `${20 * petal.size}px`,
              color: ['#ff69b4', '#ff1493', '#ffc0cb', '#ffb6c1'][Math.floor(Math.random() * 4)]
            }}
          >
            🌹
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

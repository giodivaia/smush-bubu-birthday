import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Set countdown to Smush Bubu's next birthday (October 23, 2025)
  const nextBirthday = new Date()
  nextBirthday.setFullYear(2025, 9, 23) // October 23, 2025 (month is 0-indexed, so 9 = October)
  
  // If her birthday has already passed this year, set it to next year
  if (nextBirthday.getTime() < new Date().getTime()) {
    nextBirthday.setFullYear(2026, 9, 23) // October 23, 2026
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = nextBirthday.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds }
  ]

  return (
    <section id="countdown" className="py-16 bg-white/5">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-8"
        >
          Countdown to Smush Bubu's Next Birthday 💕
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/10 rounded-2xl p-6 border border-white/20"
            >
              <div className="text-3xl sm:text-4xl font-bold text-gold">
                {unit.value.toString().padStart(2, '0')}
              </div>
              <div className="text-white/70 text-sm mt-2">
                {unit.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 text-white/80 text-lg"
        >
          Can't wait to celebrate your next birthday with you, Smush Bubu! 💛
        </motion.p>
      </div>
    </section>
  )
}

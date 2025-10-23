import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function BirthdayCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isUnlocked, setIsUnlocked] = useState(false)

  // Set countdown to October 23rd at 12:00 AM PST
  const now = new Date()
  const targetDate = new Date()
  targetDate.setFullYear(2025, 9, 23) // October 23, 2025 (month is 0-indexed)
  targetDate.setHours(0, 0, 0, 0) // 12:00 AM
  
  // Set countdown to October 23rd at 12:00 AM PDT (Pacific Daylight Time)
  // Since it's currently 8:23 PM PDT on Oct 22, 2025, we have about 3h 37m until midnight
  const pstDate = targetDate

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const distance = pstDate.getTime() - now.getTime()

      if (distance > 0) {
        setTimeLeft({
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 })
        setIsUnlocked(true)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-8 bg-gradient-to-r from-gold/20 to-transparent border-b border-gold/30">
      <div className="mx-auto max-w-5xl px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {isUnlocked ? (
              <span className="text-gold">🎉 Happy Birthday, Smush Bubu! 🎉</span>
            ) : (
              <span>Countdown to Smush Bubu's Birthday</span>
            )}
          </h2>
          
          {!isUnlocked ? (
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gold">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-white/70">Hours</div>
              </div>
              <div className="text-2xl text-gold">:</div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gold">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-white/70">Minutes</div>
              </div>
              <div className="text-2xl text-gold">:</div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gold">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-sm text-white/70">Seconds</div>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-gold mb-4"
            >
              ✨ Your special letter is now unlocked! ✨
            </motion.div>
          )}
          
          <p className="text-white/80 text-sm">
            {isUnlocked 
              ? "Scroll down to read your birthday letter!"
              : "Until midnight PST on October 23rd"
            }
          </p>
        </motion.div>
      </div>
    </section>
  )
}

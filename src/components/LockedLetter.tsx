import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function LockedLetter() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [showLetter, setShowLetter] = useState(false)

  // Set unlock time to October 23rd at 12:00 AM PST
  const targetDate = new Date()
  targetDate.setFullYear(2025, 9, 23) // October 23, 2025
  targetDate.setHours(0, 0, 0, 0) // 12:00 AM
  
  // Convert to PST (UTC-8)
  const pstOffset = -8 * 60
  const pstDate = new Date(targetDate.getTime() + (pstOffset * 60 * 1000))

  useEffect(() => {
    const checkTime = () => {
      const now = new Date()
      if (now.getTime() >= pstDate.getTime()) {
        setIsUnlocked(true)
      }
    }
    
    checkTime()
    const timer = setInterval(checkTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleOpenLetter = () => {
    if (isUnlocked) {
      setShowLetter(true)
    }
  }

  return (
    <section id="bday" className="py-24">
      <div className="mx-auto max-w-5xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          {isUnlocked ? "Your Birthday Letter 💕" : "A Special Letter for You 🔒"}
        </motion.h2>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {!showLetter ? (
              <div className="relative">
                {/* Letter Envelope */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleOpenLetter}
                  className={`cursor-pointer transition-all duration-300 ${
                    isUnlocked ? 'hover:shadow-2xl' : 'opacity-60'
                  }`}
                >
                  <div className="w-80 h-48 bg-gradient-to-br from-gold/90 to-gold border-4 border-gold/50 rounded-lg shadow-xl relative overflow-hidden">
                    {/* Envelope Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
                    
                    {/* Lock Icon */}
                    <div className="absolute top-4 right-4">
                      {isUnlocked ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                          className="text-2xl"
                        >
                          🔓
                        </motion.div>
                      ) : (
                        <div className="text-2xl">🔒</div>
                      )}
                    </div>

                    {/* Letter Content Preview */}
                    <div className="absolute inset-4 bg-white/95 rounded-lg p-6 shadow-inner">
                      <div className="text-center">
                        {isUnlocked ? (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                          >
                            <div className="text-4xl mb-4">💌</div>
                            <div className="text-ink font-semibold text-lg mb-2">
                              Click to Open Your Letter
                            </div>
                            <div className="text-ink/70 text-sm">
                              A special message for your birthday
                            </div>
                          </motion.div>
                        ) : (
                          <div>
                            <div className="text-4xl mb-4">🔒</div>
                            <div className="text-ink font-semibold text-lg mb-2">
                              Letter Locked
                            </div>
                            <div className="text-ink/70 text-sm">
                              Opens at midnight PST on your birthday
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Shine Effect */}
                    <motion.div
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    />
                  </div>
                </motion.div>

                {/* Status Text */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="mt-6 text-center"
                >
                  {isUnlocked ? (
                    <p className="text-gold font-semibold">
                      ✨ Your letter is ready! Click to open ✨
                    </p>
                  ) : (
                    <p className="text-white/70">
                      This letter will unlock at midnight PST on October 23rd
                    </p>
                  )}
                </motion.div>
              </div>
            ) : (
              /* Opened Letter */
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-2xl mx-auto"
              >
                <div className="bg-white/95 rounded-lg p-8 shadow-2xl border-4 border-gold/50">
                  <div className="text-ink">
                    <div className="text-center mb-6">
                      <div className="text-4xl mb-4">💌</div>
                      <h3 className="text-2xl font-bold text-gold mb-2">
                        A Letter to Smush Bubu on Her 23rd Birthday
                      </h3>
                      <div className="text-sm text-ink/60">
                        October 23rd, 2025
                      </div>
                    </div>
                    
                    <div className="space-y-4 text-ink/90 leading-relaxed">
                      <p>
                        Happy 23rd Birthday, my love. I wish I was in Seattle right now to hold your hand and take you out. You are kind, brilliant, and stronger than you know. I am proud of who you are and the life you are building. Thank you for choosing me.
                      </p>
                      
                      <p>
                        Every day with you feels like a gift. Your laugh, your smile, the way you care about everything you do - it all makes my world brighter. You make me want to be better, to dream bigger, to love deeper.
                      </p>
                      
                      <p>
                        As you turn 23, I want you to know that I believe in you completely. You are capable of amazing things, and I'm so excited to see what this year brings for you. Whatever challenges come your way, remember that you have someone who loves you unconditionally.
                      </p>
                      
                      <p>
                        Thank you for being my favorite person, my best friend, and my greatest love. Here's to another year of adventures, laughter, and growing together.
                      </p>
                      
                      <p className="text-right font-semibold text-gold mt-8">
                        With all my love,<br />
                        Forever yours 💕
                      </p>
                    </div>
                  </div>
                </div>
                
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  onClick={() => setShowLetter(false)}
                  className="mt-6 px-6 py-3 bg-gold text-ink rounded-lg hover:opacity-90 transition-opacity mx-auto block"
                >
                  Close Letter
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { motion } from "framer-motion"
import Confetti from "react-confetti"
import { useEffect, useState } from "react"

interface HeroProps {
  onUnlock: () => void
}

export default function Hero({ onUnlock }: HeroProps) {
  const [showConfetti, setShowConfetti] = useState(true)
  const [isLetterOpen, setIsLetterOpen] = useState(false)
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false)
  const [showLockedMessage, setShowLockedMessage] = useState(false)
  const [password, setPassword] = useState("")
  const [isUnlocked, setIsUnlocked] = useState(false)
  
  useEffect(() => {
    const t = setTimeout(() => setShowConfetti(false), 4000)
    return () => clearTimeout(t)
  }, [])

  const handleLetterClick = () => {
    if (isUnlocked) {
      setIsLetterOpen(true)
    } else {
      setShowLockedMessage(true)
    }
  }

  const handleMaintenanceClick = () => {
    setShowPasswordPrompt(true)
  }

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "gio") {
      setIsUnlocked(true)
      setShowPasswordPrompt(false)
      setPassword("")
      setIsLetterOpen(true)
      onUnlock() // Call the parent unlock function
    } else {
      alert("Incorrect password! Try again.")
      setPassword("")
    }
  }

  // Hero collage photos - all your beautiful photos of Smush Bubu
  const heroPhotos = [
    { src: "/photos/smush1.jpg", alt: "Beautiful Smush Bubu", delay: 0.1 },
    { src: "/photos/smush2.jpg", alt: "Sweet moments", delay: 0.2 },
    { src: "/photos/smush3.jpg", alt: "Adventures together", delay: 0.3 },
    { src: "/photos/smush4.jpg", alt: "Perfect memories", delay: 0.4 },
    { src: "/photos/smush5.jpg", alt: "More beautiful moments", delay: 0.5 },
    { src: "/photos/smush6.jpg", alt: "Love and laughter", delay: 0.6 },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {showConfetti && <Confetti />}
      
      {/* Background Photo Collage */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-3 gap-4 p-8 h-full">
          {heroPhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 + (index * 2) }}
              animate={{ opacity: 1, scale: 1, rotate: -5 + (index * 2) }}
              transition={{ delay: photo.delay, duration: 0.8 }}
              className={`relative overflow-hidden rounded-2xl ${
                index % 2 === 0 ? 'mt-8' : 'mb-8'
              }`}
              style={{
                backgroundImage: `url(${photo.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(1px) brightness(0.7)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-24">
        {/* Featured Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <div className="relative">
            <motion.img
              src="/photos/smush1.jpg"
              alt="Smush Bubu"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-gold shadow-2xl"
              whileHover={{ scale: 1.05 }}
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -top-2 -right-2 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-ink font-bold"
            >
              23
            </motion.div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl font-extrabold text-center mb-6"
        >
          Happy 23rd Birthday, Smush Bubu! 💛
        </motion.h1>
        
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mt-4 text-lg text-white/90 max-w-3xl mx-auto text-center"
            >
              I know you are in Seattle today for work. Since I cannot be there, I made you a small place on the internet that feels like us. I wrote you a special letter and since I can't give you one directly on your birthday and you've always done that with me, I got creative. This letter will unlock at midnight PST on your birthday. Thank you for being my favorite person.
            </motion.p>
            
            {!isUnlocked && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="mt-8 text-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLetterClick}
                  className="inline-block bg-gold text-ink font-semibold px-8 py-4 rounded-xl hover:opacity-90 text-lg shadow-lg"
                >
                  My Love to You 💌
                </motion.button>
              </motion.div>
            )}
        

        {/* Floating Hearts */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              animate={{ 
                opacity: [0, 1, 0], 
                y: -100,
                x: Math.sin(i) * 50
              }}
              transition={{
                delay: 2 + i * 0.5,
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2
              }}
              className="absolute text-gold text-2xl"
              style={{
                left: `${20 + i * 15}%`,
                bottom: '0%'
              }}
            >
              💕
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle Maintenance Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        whileHover={{ opacity: 1 }}
        onClick={handleMaintenanceClick}
        className="fixed bottom-4 right-4 text-white/30 hover:text-white/80 text-xs bg-black/20 hover:bg-black/40 px-3 py-2 rounded-lg transition-all duration-300"
      >
        🔧
      </motion.button>

      {/* Locked Message Modal */}
      {showLockedMessage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setShowLockedMessage(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-night border border-white/10 rounded-2xl p-8 max-w-md w-full text-center"
          >
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-2xl font-bold mb-4">Letter Locked</h3>
            <p className="text-white/80 mb-6">
              Your special letter will unlock at midnight PST on October 23rd. 
              <br /><br />
              I can't wait for you to read it! 💕
            </p>
            
            <div className="flex gap-3">
              <button
                onClick={() => setShowLockedMessage(false)}
                className="flex-1 px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowLockedMessage(false)
                  handleMaintenanceClick()
                }}
                className="flex-1 px-4 py-2 rounded-xl bg-gold/20 text-gold border border-gold/30 hover:bg-gold/30 transition-colors text-sm"
              >
                🔧 Maintenance
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Password Prompt Modal */}
      {showPasswordPrompt && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setShowPasswordPrompt(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-night border border-white/10 rounded-2xl p-8 max-w-md w-full text-center"
          >
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold mb-4">Enter Password</h3>
            <p className="text-white/80 mb-6">This letter is protected. Please enter the password to continue.</p>
            
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password..."
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-gold"
                autoFocus
              />
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowPasswordPrompt(false)}
                  className="flex-1 px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 rounded-xl bg-gold text-ink font-semibold hover:opacity-90 transition-opacity"
                >
                  Unlock
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}

      {/* Letter Modal */}
      {isLetterOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsLetterOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.8, rotateY: -15 }}
            animate={{ scale: 1, rotateY: 0 }}
            exit={{ scale: 0.8, rotateY: 15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Letter Paper */}
            <div className="relative bg-gradient-to-b from-amber-50 to-amber-100 p-8 md:p-12 rounded-2xl shadow-2xl border-2 border-amber-200">
              {/* Letter Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-center mb-8"
              >
                <div className="text-4xl mb-2">💌</div>
                <div className="text-2xl font-bold text-amber-800">A Letter from Your Squish</div>
                <div className="text-amber-600 mt-2">October 23rd, 2025</div>
              </motion.div>

              {/* Letter Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-amber-900 leading-relaxed space-y-4"
              >
                <p className="text-lg font-semibold">
                  To my bubu smush cake wuv bug, the best thing in the world,
                </p>
                
                <p className="text-xl font-bold text-amber-800">
                  Happy freaking birthday!! You're getting unc like me now, haha.
                </p>
                
                <p>
                  I just want to say that you are actually the best thing that has ever happened to me. I'm so grateful to have you in my life. Through all of our ups and downs, you've taught me so much. You've helped me believe in myself. You've always been the one I work hard for because I want to grow and be better — for you.
                </p>
                
                <p>
                  I've never had anyone motivate me the way you do. You are amazing, caring, and the most perfect, sexy girlfriend. You're gentle, kind, and just wow. I love you so much.
                </p>
                
                <p>
                  I know we've had our poopy times, but I really hope everything feels different now and better in your eyes. I wish I could be there with you today, but we're going to celebrate like crazy on Saturday.
                </p>
                
                <p>
                  I wuv you so much, my bubu. I can't wait to spend the rest of our lives together — to raise our little dugus and bugus. I can't wait to marry you.
                </p>
                
                <div className="text-right mt-8">
                  <p className="text-lg font-semibold">
                    Forever your squish,<br />
                    dugu,<br />
                    Dudu 💕
                  </p>
                </div>
              </motion.div>

              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                onClick={() => setIsLetterOpen(false)}
                className="absolute top-4 right-4 text-amber-600 hover:text-amber-800 text-2xl font-bold"
              >
                ×
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

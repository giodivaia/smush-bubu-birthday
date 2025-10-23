import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function OurSongs() {
  const [showPlaylist, setShowPlaylist] = useState(false)

  return (
    <section id="songs" className="py-24">
      <div className="mx-auto max-w-5xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-8"
        >
          Our Songs 🎵
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-white/90 mb-6">
            It's hard to choose one song that is our main song and I don't think any song owes it to us to be our main song since we had so many moments. So I decided to make a playlist that you can click into here and these are the songs that make me think of us.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowPlaylist(true)}
            className="inline-block bg-gold text-ink font-semibold px-8 py-4 rounded-xl hover:opacity-90 text-lg shadow-lg mb-8"
          >
            🎶 Open Our Playlist
          </motion.button>
        </motion.div>

        {/* Playlist Modal */}
        <AnimatePresence>
          {showPlaylist && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setShowPlaylist(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-night border border-white/10 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold flex items-center gap-2">
                    🎵 Our Playlist
                  </h3>
                  <button
                    onClick={() => setShowPlaylist(false)}
                    className="text-white/60 hover:text-white text-2xl font-bold"
                  >
                    ×
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="text-center text-white/80 py-8">
                    <div className="text-4xl mb-4">🎵</div>
                    <p className="text-lg">More songs coming soon...</p>
                    <p className="text-sm text-white/60 mt-2">
                      I'll be adding our favorite songs that remind me of us
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

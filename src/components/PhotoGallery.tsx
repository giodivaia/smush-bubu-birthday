import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Your beautiful photos of Smush Bubu (smush8-29)
const photos = Array.from({ length: 22 }, (_, i) => ({
  id: i + 1,
  src: `/photos/smush${i + 8}.jpg`,
  alt: `Beautiful Smush Bubu ${i + 8}`,
  caption: `Memory ${i + 8} 💕`
}))

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  return (
    <section id="gallery" className="py-24">
      <div className="mx-auto max-w-5xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
        >
          Our beautiful memories 💕
        </motion.h2>
        
        {/* Slideshow Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Photo Display */}
          <div className="relative overflow-hidden rounded-2xl bg-white/5 p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative flex justify-center"
              >
                <div className="relative max-w-2xl w-full">
                  <img
                    src={photos[currentIndex].src}
                    alt={photos[currentIndex].alt}
                    className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-2xl"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-black/70 rounded-lg p-3">
                    <p className="text-white text-lg font-semibold">{photos[currentIndex].caption}</p>
                    <p className="text-white/80 text-sm">
                      {currentIndex + 1} of {photos.length}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Photo Thumbnails */}
          <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
            {photos.map((photo, index) => (
              <motion.button
                key={photo.id}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all ${
                  index === currentIndex ? 'ring-2 ring-gold scale-110' : 'opacity-60 hover:opacity-80'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

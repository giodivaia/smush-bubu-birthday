import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function SurpriseModal() {
  const [open, setOpen] = useState(false)
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <button
          onClick={() => setOpen(true)}
          className="inline-block bg-gold text-ink font-semibold px-5 py-3 rounded-xl hover:opacity-90"
        >
          Press here, Smush Bubu
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
              onClick={() => setOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-night border border-white/10 rounded-2xl p-6 max-w-lg w-full text-left"
              >
                <h3 className="text-2xl font-bold">A little surprise</h3>
                <p className="mt-3 text-white/80">
                  Check your texts. I left you a message and a tiny plan for when you get back. You are my favorite thing.
                </p>
                <div className="mt-6 text-right">
                  <button
                    onClick={() => setOpen(false)}
                    className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

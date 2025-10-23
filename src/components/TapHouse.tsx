import { motion } from "framer-motion"
import { useState } from "react"

export default function TapHouse() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id="tap" className="py-24">
      <div className="mx-auto max-w-5xl px-4">
        {!isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="inline-block bg-gold text-ink font-semibold px-8 py-4 rounded-xl hover:opacity-90 text-lg shadow-lg"
            >
              My Love to You 💌
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
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
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-amber-600 hover:text-amber-800 text-2xl font-bold"
              >
                ×
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

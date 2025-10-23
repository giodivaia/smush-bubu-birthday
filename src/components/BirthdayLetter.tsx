import { motion } from "framer-motion"

export default function BirthdayLetter() {
  return (
    <section id="bday" className="py-24">
      <div className="mx-auto max-w-5xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          A letter to Smush Bubu on her 23rd Birthday
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-white/80 max-w-3xl"
        >
          Happy 23, my love. I wish I was in Seattle right now to hold your hand and take you out. You are kind, brilliant, and stronger than you know. I am proud of who you are and the life you are building. Thank you for choosing me.
        </motion.p>
      </div>
    </section>
  )
}

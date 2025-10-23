import { memories } from "../data/memories"
import { motion } from "framer-motion"

export default function Timeline() {
  return (
    <section id="story" className="py-24 bg-white/5">
      <div className="mx-auto max-w-5xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Every little moment since
        </motion.h2>
        <div className="mt-10 space-y-6">
          {memories.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-2xl border border-white/10 p-5"
            >
              <div className="text-xs uppercase tracking-wide text-white/60">{m.date}</div>
              <div className="text-xl font-semibold mt-1">{m.title}</div>
              <div className="text-white/80 mt-2">{m.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

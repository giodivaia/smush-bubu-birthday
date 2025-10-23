import { motion } from "framer-motion"

export default function Future() {
  return (
    <section id="future" className="py-24 bg-white/5">
      <div className="mx-auto max-w-5xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Next up for us
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-6 grid sm:grid-cols-2 gap-4 text-white/80"
        >
          <li className="rounded-2xl border border-white/10 p-4">A weekend with no alarms. Just you and me.</li>
          <li className="rounded-2xl border border-white/10 p-4">A trip we plan together. Photos that feel like movies.</li>
          <li className="rounded-2xl border border-white/10 p-4">More Tap House dates. More inside jokes.</li>
          <li className="rounded-2xl border border-white/10 p-4">A home that feels like ours, wherever we are.</li>
        </motion.ul>
      </div>
    </section>
  )
}

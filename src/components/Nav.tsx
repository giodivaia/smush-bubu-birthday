import { motion } from "framer-motion"

const items = [
  { id: "home", label: "Smush" },
  { id: "tap", label: "My Love to You" },
  { id: "gallery", label: "Photos" },
  { id: "story", label: "Our Story" },
  { id: "bday", label: "Her 23rd" },
  { id: "future", label: "Future" },
]

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-night/80 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold">Smush Bubu 💛</div>
          <div className="flex space-x-6">
            {items.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className="text-white/80 hover:text-gold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

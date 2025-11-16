import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -inset-[10%] bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.15),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(20,184,166,0.15),transparent_40%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900"
            >
              Crafting robust web experiences with clean code and modern stacks
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-lg text-gray-600"
            >
              I build full‑stack applications, interactive 3D & motion sites, and production‑ready systems.
            </motion.p>
            <div className="mt-8 flex gap-3">
              <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-gray-800">View Projects</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg border px-4 py-2 hover:bg-gray-50">Get in Touch</a>
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-500 to-pink-500 p-1 shadow-xl">
              <div className="h-full w-full rounded-2xl bg-white/90 backdrop-blur flex items-center justify-center">
                <div className="text-center px-6">
                  <p className="text-sm uppercase tracking-wider text-gray-500">Featured Stack</p>
                  <p className="mt-2 text-xl font-semibold">React • Node • FastAPI • MongoDB • Tailwind • Three/Framer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

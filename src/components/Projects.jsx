import { Store, Box, Rocket, Globe } from 'lucide-react'

const projects = [
  {
    title: 'E‑commerce Store',
    tag: 'Full Stack',
    description: 'A production‑ready online store with product browsing, cart, checkout, and admin dashboard.',
    tech: ['React', 'FastAPI', 'MongoDB', 'Stripe'],
  },
  {
    title: '3D & Motion Website',
    tag: 'Interactive',
    description: 'Immersive marketing site with 3D visuals and smooth motion using Framer and Spline/Three.',
    tech: ['Next.js', 'Three/Spline', 'Framer Motion'],
  },
  {
    title: 'Full‑Stack Web App',
    tag: 'Platform',
    description: 'End‑to‑end application with authentication, API integrations, and dashboards.',
    tech: ['React', 'Node/FastAPI', 'MongoDB'],
  },
  {
    title: 'Full‑Stack Mobile‑friendly App',
    tag: 'Application',
    description: 'Responsive application with offline‑friendly UX and robust backend services.',
    tech: ['React', 'PWA', 'FastAPI', 'MongoDB'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h3 className="text-3xl font-bold tracking-tight">Selected Projects</h3>
          <p className="mt-3 text-gray-600">A few examples that highlight capability across e‑commerce, 3D experiences, and full‑stack apps.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-black/5 overflow-hidden bg-white hover:shadow-xl transition-all">
              <div className="h-40 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-indigo-700 font-semibold">
                  <span className="px-2 py-0.5 rounded-full bg-indigo-100">{p.tag}</span>
                </div>
                <h4 className="mt-3 text-lg font-semibold group-hover:text-gray-900">{p.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

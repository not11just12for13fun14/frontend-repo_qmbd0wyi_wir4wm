import { Code2, Database, Globe, Cpu, Cloud, Shield, Layers, Box } from 'lucide-react'

const skills = [
  { icon: Code2, title: 'Frontend Engineering', items: ['React, Next.js, Vite', 'Tailwind, Radix, shadcn', 'Framer Motion, 3D Interactions'] },
  { icon: Database, title: 'Backend & APIs', items: ['Node, FastAPI, Express', 'REST, Webhooks, Auth', 'MongoDB, Prisma, ORMs'] },
  { icon: Globe, title: 'Full‑Stack Systems', items: ['Monorepos, CI/CD', 'Testing & Observability', 'Microservices, Queues'] },
  { icon: Cpu, title: 'Performance & DX', items: ['Code quality & patterns', 'Caching & optimization', 'Linters, formatters, tooling'] },
  { icon: Cloud, title: 'Cloud & DevOps', items: ['Docker & containers', 'Vercel, Netlify, Render', 'Cloudflare, AWS basics'] },
  { icon: Shield, title: 'Security', items: ['AuthN/Z, JWT', 'Best practices, OWASP', 'Input validation'] },
  { icon: Layers, title: 'Architecture', items: ['Component-driven UI', 'Clean APIs & services', 'Scalable data models'] },
  { icon: Box, title: '3D & Motion', items: ['Spline/Three.js basics', 'Framer Motion', 'Interactive storytelling'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h3 className="text-3xl font-bold tracking-tight">Advanced Skills</h3>
          <p className="mt-3 text-gray-600">A strong blend of frontend craft, backend engineering, and full‑stack product thinking.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map(({ icon: Icon, title, items }) => (
            <div key={title} className="rounded-xl border border-black/5 p-6 hover:shadow-md transition-shadow bg-white/60">
              <Icon className="h-6 w-6 text-indigo-600" />
              <h4 className="mt-4 font-semibold">{title}</h4>
              <ul className="mt-3 space-y-1 text-sm text-gray-600 list-disc list-inside">
                {items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

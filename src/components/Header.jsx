import { Menu, Phone, MapPin } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
          <div className="leading-tight">
            <p className="text-xs text-gray-500">Full Stack Developer</p>
            <h1 className="text-base font-semibold">Ahmad Raza Khan</h1>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#skills" className="hover:text-gray-900">Skills</a>
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
        <div className="hidden sm:flex items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-1 text-gray-600"><Phone className="h-4 w-4"/> 03164951498</span>
          <span className="inline-flex items-center gap-1 text-gray-600"><MapPin className="h-4 w-4"/> Taj Bagh</span>
        </div>
        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10"><Menu className="h-5 w-5"/></button>
      </div>
    </header>
  )
}

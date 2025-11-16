import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Ahmad Raza Khan • Full Stack Developer</p>
      </footer>
    </div>
  )
}

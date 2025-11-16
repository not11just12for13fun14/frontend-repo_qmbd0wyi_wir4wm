import { Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-black/5 bg-white/60 p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold tracking-tight">Let’s build something great</h3>
              <p className="mt-3 text-gray-600">Available for freelance and full‑time opportunities. Reach out and I’ll respond promptly.</p>
              <div className="mt-6 space-y-3 text-sm">
                <p className="inline-flex items-center gap-2"><Phone className="h-4 w-4"/> 03164951498</p>
                <p className="inline-flex items-center gap-2"><MapPin className="h-4 w-4"/> Taj Bagh</p>
                <p className="inline-flex items-center gap-2"><Mail className="h-4 w-4"/> example@email.com</p>
              </div>
            </div>
            <form className="bg-white rounded-xl border border-black/5 p-6 grid gap-4">
              <input className="h-10 rounded-lg border border-black/10 px-3" placeholder="Your name"/>
              <input className="h-10 rounded-lg border border-black/10 px-3" placeholder="Email"/>
              <textarea rows={4} className="rounded-lg border border-black/10 px-3 py-2" placeholder="Project details" />
              <button type="button" className="h-10 rounded-lg bg-gray-900 text-white hover:bg-gray-800">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

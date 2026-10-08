import { useEffect, useRef, useState } from 'react'
import { services } from '../data/site'
import { track } from '../lib/analytics'
const id = import.meta.env.VITE_FORMSPREE_ID || 'mvkpbgyz'
const f = 'mt-2 w-full rounded-md border border-line bg-ink px-4 py-3 text-white placeholder:text-zinc-500'
const Field = ({ label, children }) => <label className="block text-sm font-medium text-white">{label}{children}</label>
export default function ContactForm() {
  const [status, setStatus] = useState({ type: '', msg: '' }); const [busy, setBusy] = useState(false); const [service, setService] = useState(''); const started = useRef(false)
  useEffect(() => { const q = new URLSearchParams(window.location.search).get('service'); const m = services.find((s) => s.slug === q); if (m) setService(m.formOption) }, [])
  async function submit(e) {
    e.preventDefault(); const form = e.target; setBusy(true); setStatus({ type: 'info', msg: 'Sending…' })
    try {
      const r = await fetch(`https://formspree.io/f/${id}`, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
      if (r.ok) { track('form_submit_success', { service }); form.reset(); setService(''); setStatus({ type: 'ok', msg: 'Thanks, your enquiry is in. I will reply by email soon.' }) }
      else setStatus({ type: 'err', msg: 'Something went wrong. Check the fields and try again, or message me on Instagram.' })
    } catch { setStatus({ type: 'err', msg: 'Could not send. Check your connection and try again.' }) }
    setBusy(false)
  }
  return (
    <form onSubmit={submit} onFocus={() => { if (!started.current) { started.current = true; track('form_start') } }} className="space-y-5 rounded-xl border border-line bg-panel p-6 sm:p-8">
      <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" aria-hidden="true" className="absolute -left-[9999px]" />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name"><input name="name" required autoComplete="name" className={f} /></Field>
        <Field label="Email"><input type="email" name="email" required autoComplete="email" className={f} /></Field></div>
      <div className="grid gap-5 sm:grid-cols-2"><Field label="Business name"><input name="business" autoComplete="organization" className={f} /></Field>
        <Field label="WhatsApp / Phone (optional)"><input type="tel" name="phone" autoComplete="tel" className={f} /></Field></div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Website requirement"><select name="service" required value={service} onChange={(e) => setService(e.target.value)} className={f}><option value="" disabled>Select a service</option>
          {services.map((s) => <option key={s.slug}>{s.formOption}</option>)}<option>Other</option></select></Field>
        <Field label="Budget (optional)"><select name="budget" className={f}><option value="">Prefer not to say</option><option>Under ₹15,000</option><option>₹15,000 – ₹40,000</option><option>₹40,000 – ₹1,00,000</option><option>Above ₹1,00,000</option></select></Field></div>
      <Field label="What do you want your website to achieve?"><select name="goal" defaultValue="" className={f}><option value="">Select one (optional)</option><option>Get more enquiries</option><option>Sell products online</option><option>Build credibility</option><option>Get bookings</option><option>Improve my existing website</option><option>Launch a new business</option><option>Other</option></select></Field>
      <Field label="Message"><textarea name="message" rows="5" required className={f} /></Field>
      <button disabled={busy} className="rounded-md bg-gold px-6 py-3 text-sm font-semibold text-black hover:bg-[#d9b878] disabled:opacity-60">Send enquiry</button>
      <p role="status" aria-live="polite" className={`text-sm ${status.type === 'err' ? 'text-red-400' : 'text-mute'}`}>{status.msg}</p>
    </form>)
}

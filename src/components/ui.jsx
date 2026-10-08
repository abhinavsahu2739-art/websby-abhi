import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { EMAIL } from '../data/site'
import '../lib/analytics'
export function Button({ to, href, variant = 'primary', children, ...p }) {
  const c = 'inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors ' +
    (variant === 'primary' ? 'bg-gold text-black hover:bg-[#d9b878]' : 'border border-line text-white hover:border-gold hover:text-gold')
  const t = { 'data-event': 'cta_click', 'data-label': typeof children === 'string' ? children : undefined }
  return to ? <Link to={to} className={c} {...t} {...p}>{children}</Link> : <a href={href} className={c} {...t} {...p}>{children}</a>
}
export const Badge = ({ children }) => <span className="inline-block rounded-full border border-line px-3 py-1 text-xs text-mute">{children}</span>
export const SectionHeading = ({ title, intro, as: H = 'h2' }) => (
  <div className="mb-10 max-w-2xl"><H className="font-display text-3xl sm:text-4xl leading-tight text-white">{title}</H>{intro && <p className="mt-4 text-mute">{intro}</p>}</div>)
export const Section = ({ id, children, className = '' }) => <section id={id} className={`mx-auto max-w-6xl px-5 py-16 sm:py-24 ${className}`}>{children}</section>
export function Reveal({ children, className = '' }) {
  const ref = useRef(null); const [s, setS] = useState('')
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setS('rv'); const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setS('rv in'); io.disconnect() } }, { threshold: 0.12 })
    io.observe(ref.current); return () => io.disconnect()
  }, [])
  return <div ref={ref} className={`${className} ${s}`}>{children}</div>
}
export const CTASection = ({ title = 'Have a project in mind?', text = 'Tell me what you need and I will reply with clear next steps.', to = '/contact/', label = 'Start a Project', ...rest }) => (
  <Section><div className="rounded-xl border border-gold/30 bg-panel p-8 sm:p-14 text-center"><h2 className="font-display text-3xl sm:text-4xl text-white">{title}</h2>
    <p className="mx-auto mt-4 max-w-xl text-mute">{text}</p><div className="mt-8 flex flex-wrap items-center justify-center gap-4"><Button to={to} {...rest}>{label}</Button><Button href={`mailto:${EMAIL}`} variant="secondary">{EMAIL}</Button></div></div></Section>)

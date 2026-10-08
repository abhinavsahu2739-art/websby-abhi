import { Link } from 'react-router-dom'
import { Badge } from './ui'
export const ServiceCard = ({ s }) => (
  <article className="flex flex-col rounded-lg border border-line bg-panel p-7 transition duration-300 motion-safe:hover:-translate-y-1 hover:border-gold/60">
    <h3 className="font-display text-xl text-white">{s.name}</h3><p className="mt-3 text-mute">{s.what}</p>
    <p className="mt-5 text-sm text-white">Who it is for</p><p className="mt-1 text-sm text-mute">{s.who}</p>
    <p className="mt-5 text-sm text-white">Benefit</p><p className="mt-1 text-sm text-mute">{s.benefit}</p>
    <Link to={`/services/${s.slug}/`} className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-gold hover:underline">Explore {s.name.toLowerCase()} →</Link></article>)
export const ProjectCard = ({ p, featured, as: H = 'h3' }) => (
  <article className={`group overflow-hidden rounded-xl border border-line bg-panel ${featured ? 'md:grid md:grid-cols-5' : ''}`}>
    <div className={`overflow-hidden ${featured ? 'md:col-span-3' : ''}`}><img src={p.img} srcSet={p.srcSet} sizes="(min-width: 768px) 690px, calc(100vw - 40px)" alt={p.alt} width="1200" height="573" loading="lazy" className="w-full transition-transform duration-500 group-hover:scale-[1.03]" /></div>
    <div className={`flex flex-col justify-center gap-3 p-6 ${featured ? 'md:col-span-2' : ''}`}><div className="flex flex-wrap items-center gap-3"><Badge>{p.demo ? 'Demo Project' : p.type}</Badge>{p.category && <span className="text-xs text-mute">{p.category}</span>}</div>
      <H className="font-display text-2xl text-white">{p.name}</H><p className="text-sm text-mute">{p.summary}</p>
      {p.features && <ul className="space-y-1 text-sm text-mute">{p.features.map((f) => <li key={f} className="flex gap-2"><span aria-hidden="true" className="text-gold">•</span>{f}</li>)}</ul>}
      {p.demo && <p className="text-xs text-mute">Not a client project.</p>}
      <a data-event="portfolio_demo_click" data-label={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-sm font-semibold text-gold hover:underline">View demo<span className="sr-only"> for {p.name} (opens in new tab)</span> ↗</a></div></article>)

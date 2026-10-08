import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Button } from './ui'
import { services, INSTAGRAM } from '../data/site'
const links = [['Services', '/#services'], ['Work', '/portfolio/'], ['About', '/about/'], ['FAQ', '/#faq']]
function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/95">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex min-h-11 items-center gap-3 font-semibold text-white"><img src="/assets/logo-sm.webp" alt="" width="40" height="35" />WebsBy Abhi</Link>
        <nav aria-label="Main" className="hidden items-center gap-7 text-sm text-mute md:flex">
          {links.map(([n, h]) => <Link key={n} to={h} className="hover:text-white">{n}</Link>)}<Button to="/contact/">Start a Project</Button></nav>
        <button className="min-h-11 min-w-11 rounded-md border border-line px-4 text-sm md:hidden" aria-expanded={open} aria-controls="mnav" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
      </div>
      {open && <nav id="mnav" aria-label="Mobile" className="flex flex-col gap-4 border-t border-line px-5 py-5 md:hidden" onClick={() => setOpen(false)}>
        {links.map(([n, h]) => <Link key={n} to={h}>{n}</Link>)}<Button to="/contact/">Start a Project</Button></nav>}
    </header>)
}
function Footer() {
  return (
    <footer className="border-t border-line"><div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-3">
      <div><p className="font-semibold text-white">WebsBy Abhi</p><p className="mt-3 text-sm text-mute">Web design and development, Bareilly, Uttar Pradesh.</p></div>
      <div><p className="font-semibold text-white">Services</p><ul className="mt-2 text-sm text-mute">{services.map((s) => <li key={s.slug}><Link className="inline-block py-2 hover:text-gold" to={`/services/${s.slug}/`}>{s.name}</Link></li>)}</ul></div>
      <div><p className="font-semibold text-white">Contact</p><ul className="mt-2 text-sm text-mute"><li><Link className="inline-block py-2 hover:text-gold" to="/contact/">Start a project</Link></li>
        <li><a className="inline-block py-2 hover:text-gold" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">@websby.abhi on Instagram</a></li></ul></div></div>
      <p className="border-t border-line py-5 text-center text-xs text-mute">© 2026 WebsBy Abhi. All rights reserved.</p></footer>)
}
export default function Layout() {
  return <><a href="#main" className="skip">Skip to content</a><Navbar /><main id="main"><Outlet /></main><Footer /></>
}

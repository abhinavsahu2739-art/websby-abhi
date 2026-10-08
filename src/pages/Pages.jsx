import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import ContactForm from '../components/ContactForm'
import { ProjectCard } from '../components/Cards'
import { Button, Section, SectionHeading, CTASection } from '../components/ui'
import { projects, EMAIL, INSTAGRAM, SITE, org } from '../data/site'
const wp = (type, name) => ({ '@context': 'https://schema.org', '@graph': [org, { '@type': type, name, url: SITE }] })
export function Portfolio() {
  return (<><Seo path="/portfolio/" title="Website Design Work: Demo Project | WebsBy Abhi" description="A demo website designed and built by WebsBy Abhi to show its design and development approach." schema={wp('CollectionPage', 'Selected work')} />
    <Section><SectionHeading as="h1" title="Selected work & demo projects" intro="Explore examples of websites built to demonstrate different business and product experiences. Projects are labelled as demos unless they are client work." />
      <div>{projects.map((p) => <ProjectCard key={p.name} p={p} featured as="h2" />)}</div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">{[['About this demo', 'HetRicks is a demonstration website for a print-on-demand studio selling custom apparel and gifting products. It shows how I present a product-led business online. It is not a client project.'], ['What it demonstrates', 'How a product range can be organised into clear categories, how an ordering process can be explained step by step, and how visitors can request a custom order or reach out on WhatsApp.'], ['Design direction', 'A dark theme with bold condensed typography and a red accent, with clear calls to action in the header and hero.']].map(([t, d]) => <div key={t} className="border-t border-gold pt-4"><h2 className="font-semibold text-white">{t}</h2><p className="mt-2 text-sm text-mute">{d}</p></div>)}</div>
      <p className="mt-10 text-sm text-mute">More demo and client projects will be added here as they are completed.</p></Section><CTASection title="Have a project in mind?" text="Let's build your website." /></>)
}
export function About() {
  return (<><Seo path="/about/" title="About WebsBy Abhi | Web Designer in Bareilly, Uttar Pradesh" description="WebsBy Abhi is a web design and development brand helping businesses build a credible, fast online presence." schema={wp('AboutPage', 'About WebsBy Abhi')} />
    <Section className="grid items-center gap-12 md:grid-cols-2"><div><h1 className="font-display text-4xl text-white sm:text-5xl">A web brand focused on helping businesses get online properly.</h1>
      <p className="mt-6 text-mute">I'm Abhi, a web designer and developer based in Bareilly, Uttar Pradesh. I build clean, responsive and practical websites for businesses and brands.</p>
      <p className="mt-4 text-mute">My approach is simple: understand the goal, design with purpose, and build something that works. See what I build, from <Link className="text-gold underline hover:no-underline" to="/services/website-development/">business website development</Link> to <Link className="text-gold underline hover:no-underline" to="/services/landing-pages/">landing pages</Link>.</p><div className="mt-8"><Button to="/contact/">Start a Project</Button></div></div>
      <img src="/assets/abhi.webp" alt="Abhi, web designer and developer" width="900" height="900" loading="lazy" className="rounded-xl border border-line" /></Section></>)
}
export function Contact() {
  return (<><Seo path="/contact/" title="Contact WebsBy Abhi | Start Your Website Project" description="Tell WebsBy Abhi about your website project. Business websites, landing pages, e-commerce and redesigns from Bareilly, Uttar Pradesh." schema={wp('ContactPage', 'Contact WebsBy Abhi')} />
    <Section className="grid gap-12 lg:grid-cols-2"><div><h1 className="font-display text-4xl text-white sm:text-5xl">Start a Project</h1><p className="mt-5 text-mute">Tell me what you need and I will reply with clear next steps.</p>
      <p className="mt-8 text-sm text-mute">Email</p><a className="inline-block py-2 text-gold hover:underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>
      <p className="mt-5 text-sm text-mute">Instagram</p><a className="inline-block py-2 text-gold hover:underline" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">@websby.abhi</a>
      <p className="mt-8 text-sm text-mute">Found Webs-by-Abhi on Instagram? <a className="text-gold underline hover:no-underline" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">See more work on Instagram</a></p></div><ContactForm /></Section></>)
}
export function NotFound() {
  return (<><Seo path="/404/" title="Page not found | WebsBy Abhi" description="This page does not exist." noindex />
    <Section><h1 className="font-display text-4xl text-white">Page not found</h1><p className="mt-4 text-mute">That page does not exist.</p><div className="mt-8"><Button to="/">Back to home</Button></div></Section></>)
}

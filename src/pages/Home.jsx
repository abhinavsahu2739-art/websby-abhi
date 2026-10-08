import Seo from '../components/Seo'
import FAQ from '../components/FAQ'
import { Button, Section, SectionHeading, Reveal, CTASection } from '../components/ui'
import { ServiceCard, ProjectCard } from '../components/Cards'
import { SITE, org, services, projects, process, why, industries } from '../data/site'
const schema = { '@context': 'https://schema.org', '@graph': [org, { '@type': 'WebSite', '@id': SITE + '/#website', url: SITE, name: 'WebsBy Abhi', publisher: { '@id': SITE + '/#business' } }] }
export default function Home() {
  return (<>
    <Seo path="/" schema={schema} title="Website Developer for Small Businesses | WebsBy Abhi, Bareilly"
      description="Mobile-friendly websites for small businesses, startups and online stores: business sites, landing pages, e-commerce and redesigns. Based in Bareilly, UP." />
    <div className="glow"><Section className="grid items-center gap-12 lg:grid-cols-2">
      <div className="hero-in"><p className="text-sm tracking-wide text-gold">Web design and development in Bareilly, Uttar Pradesh</p>
        <h1 className="mt-5 font-display text-4xl leading-[1.1] text-white sm:text-6xl">Websites that make your business look credible and bring in enquiries.</h1>
        <p className="mt-6 max-w-xl text-lg text-mute">For small businesses, startups, online stores and personal brands that need a professional, fast, mobile-friendly website, so customers trust you before the first conversation.</p>
        <div className="mt-9 flex flex-wrap gap-3"><Button to="/contact/">Start a Project</Button><Button to="/portfolio/" variant="secondary">View My Work</Button></div>
        <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-mute"><li>Mobile-first</li><li>SEO-conscious</li><li>Direct communication</li></ul></div>
      <div className="hero-in overflow-hidden rounded-xl border border-line bg-panel p-2 shadow-[0_0_60px_-20px_rgba(201,164,92,0.25)]"><img src="/assets/hetricks.webp" srcSet={projects[0].srcSet} sizes="(min-width: 1024px) 560px, calc(100vw - 56px)" alt="HetRicks demo website designed and built by WebsBy Abhi" width="1200" height="573" fetchpriority="high" className="rounded-lg" /></div>
    </Section></div>
    <Section><Reveal><SectionHeading title="Your website is often the first impression" intro="It should look professional, explain clearly what you offer, and guide visitors to act." />
      <div className="grid gap-6 sm:grid-cols-3">{[['Build trust', 'Credibility before the first conversation.'], ['Explain clearly', 'A simple structure visitors understand quickly.'], ['Drive action', 'Clear calls to action turn attention into enquiries.']].map(([t, d]) =>
        <div key={t} className="border-t border-gold pt-4"><h3 className="font-semibold text-white">{t}</h3><p className="mt-2 text-mute">{d}</p></div>)}</div></Reveal></Section>
    <Section id="services"><Reveal><SectionHeading title="What I build" intro="Focused web solutions, without unnecessary complexity." />
      <div className="grid gap-6 md:grid-cols-2">{services.map((s) => <ServiceCard key={s.slug} s={s} />)}</div>
      <div className="mt-8 flex flex-wrap items-center gap-4"><p className="text-mute">Not sure which service fits? Tell me what you need and I will point you to the right one.</p><Button to="/contact/" variant="secondary">Discuss your project</Button></div></Reveal></Section>
    <Section><Reveal><SectionHeading title="Selected work" intro="A demo project that shows how I design and build a business website." />
      {projects.map((p) => <ProjectCard key={p.name} p={p} featured />)}
      <div className="mt-8 flex flex-wrap items-center gap-4"><p className="text-mute">Have a project in mind?</p><Button to="/contact/">Start your own project</Button></div></Reveal></Section>
    <Section><Reveal><SectionHeading title="Why Webs-by-Abhi" /><div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">{why.map(([t, d]) =>
      <div key={t} className="border-l border-gold/60 pl-5"><h3 className="font-semibold text-white">{t}</h3><p className="mt-2 text-sm text-mute">{d}</p></div>)}</div></Reveal></Section>
    <Section id="process"><Reveal><SectionHeading title="From idea to launch" /><ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">{process.map(([t, d], i) =>
      <li key={t} className="rounded-lg border border-line p-6"><span className="font-display text-3xl text-gold/70">{String(i + 1).padStart(2, '0')}</span><h3 className="mt-3 font-semibold text-white">{t}</h3><p className="mt-2 text-sm text-mute">{d}</p></li>)}</ol></Reveal></Section>
    <Section><Reveal><SectionHeading title="Who I help" intro="The kinds of businesses I build for. This is not a list of past clients." />
      <ul className="flex flex-wrap gap-3">{industries.map((i) => <li key={i} className="rounded-full border border-line px-5 py-2 text-sm text-mute transition-colors hover:border-gold hover:text-white">{i}</li>)}</ul></Reveal></Section>
    <Section id="faq"><Reveal><SectionHeading title="Common questions" /><FAQ /></Reveal></Section>
    <CTASection />
  </>)
}

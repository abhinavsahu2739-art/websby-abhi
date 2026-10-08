import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import FAQ from '../components/FAQ'
import { Button, Section, SectionHeading, CTASection } from '../components/ui'
import { SITE, org, services, nameOf, process } from '../data/site'
export default function Service() {
  const { slug } = useParams(); const s = services.find((x) => x.slug === slug); const path = `/services/${slug}/`
  const schema = { '@context': 'https://schema.org', '@graph': [org, { '@type': 'Service', name: s.name, serviceType: s.name, provider: { '@id': SITE + '/#business' }, url: SITE + path },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' }, { '@type': 'ListItem', position: 2, name: s.name, item: SITE + path }] }] }
  return (<>
    <Seo title={s.title} description={s.desc} path={path} schema={schema} />
    <Section className="!pb-8"><nav aria-label="Breadcrumb" className="mb-4 text-sm text-mute"><Link className="inline-block py-2 text-gold" to="/">Home</Link> / {s.name}</nav>
      <h1 className="max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl">{s.h1}</h1><p className="mt-6 max-w-2xl text-lg text-mute">{s.what}</p>
      <div className="mt-8 flex flex-wrap gap-3"><Button to={`/contact/?service=${slug}`} data-event="service_cta_click" data-service={slug}>{s.cta}</Button><Button to="/portfolio/" variant="secondary">View My Work</Button></div></Section>
    <Section className="grid gap-10 md:grid-cols-2"><div><h2 className="font-display text-2xl text-white">The problem</h2><p className="mt-3 text-mute">{s.problem}</p><h3 className="mt-8 font-semibold text-white">Who it is for</h3><p className="mt-2 text-mute">{s.who}</p></div>
      <div><h2 className="font-display text-2xl text-white">The solution</h2><p className="mt-3 text-mute">{s.benefit}</p></div></Section>
    <Section><SectionHeading title="What's included" /><ul className="grid gap-3 sm:grid-cols-2">{s.includes.map((i) => <li key={i} className="rounded-lg border border-line px-5 py-4 text-mute">{i}</li>)}</ul></Section>
    <Section><SectionHeading title="How it works" /><ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{process.map(([t, d], i) => <li key={t}><span className="text-sm text-gold">Step {i + 1}</span><h3 className="mt-2 font-semibold text-white">{t}</h3><p className="mt-2 text-sm text-mute">{d}</p></li>)}</ol></Section>
    <Section><SectionHeading title={`Questions about ${s.name.toLowerCase()}`} /><FAQ items={s.faqs} /></Section>
    <Section><SectionHeading title="Related services" /><div className="flex flex-wrap gap-3">{s.related.map((r) => <Button key={r} to={`/services/${r}/`} variant="secondary">{nameOf(r)}</Button>)}</div></Section>
    <CTASection title="Want something similar for your business?" to={`/contact/?service=${slug}`} label={s.cta} data-event="service_cta_click" data-service={slug} />
  </>)
}

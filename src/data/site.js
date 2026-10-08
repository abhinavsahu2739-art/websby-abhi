import services from './services.json'
export const SITE = 'https://websby-abhi.vercel.app'
export const EMAIL = 'websbyabhi@gmail.com'
export const INSTAGRAM = 'https://www.instagram.com/websby.abhi/'
export { services }
export const nameOf = (slug) => services.find((s) => s.slug === slug).name
export const org = { '@type':'ProfessionalService','@id':SITE+'/#business',name:'WebsBy Abhi',url:SITE,email:'websbyabhi@gmail.com',image:SITE+'/assets/logo.webp',
  description:'Web design and development for businesses and brands.',sameAs:[INSTAGRAM],
  address:{'@type':'PostalAddress',addressLocality:'Bareilly',addressRegion:'Uttar Pradesh',addressCountry:'IN'} }
export const projects = [
 { name:'HetRicks Demo', type:'Demo Project · Design and development', demo:true,
   // Add future projects here. `demo:false` marks real client work; `category` can be e.g. E-commerce, Restaurant / Cafe, Local business, Personal brand, Landing page.
   category:'Product catalogue and custom-order website',
   summary:'A demonstration website for a print-on-demand custom apparel and gifting studio, built to present products clearly and make a custom order easy to request.',
   features:['Product catalogue organised by category','Step-by-step "How it works" section','Custom order request form','Direct WhatsApp contact button'], url:'https://hetricks-demo.vercel.app/', img:'/assets/hetricks.webp', srcSet:'/assets/hetricks-600.webp 600w, /assets/hetricks.webp 1200w', alt:'HetRicks demo website homepage' },
]
export const process = [['Discovery','Understand your business, audience and goals.'],['Planning','Define pages, structure and content.'],['Design','Shape the visual direction and key screens.'],['Development','Build a fast, responsive, SEO-conscious site.'],['Testing','Check devices, forms, links and speed.'],['Launch','Go live and hand everything over.']]
export const why = [['Modern responsive websites','Layouts that work from small phones to large desktops.'],['Clean development','Readable, maintainable code with no unnecessary bloat.'],['Business-focused design','Every page is planned around what you want visitors to do.'],['Mobile-first experience','Designed for phones first, then scaled up.'],['SEO-conscious implementation','Proper structure, metadata and fast pages from the start.'],['Direct communication','You work with the person building your site.']]
export const industries = ['Small businesses','Startups','Restaurants & cafes','Fashion & clothing','Coaches & consultants','Personal brands','Local service businesses','Online stores']
export const faqs = [
 ['How does the process work?','Six steps: discovery, planning, design, development, testing and launch. You are kept in the loop at each stage.'],
 ['How long does a website take?','It depends on size and how quickly content is ready. You get a clear timeline before any work begins.'],
 ['Do you build responsive websites?','Yes. Every site is built mobile-first and checked across screen sizes.'],
 ['Can you redesign an existing website?','Yes. I keep what works and rebuild what does not.'],
 ['Do you build e-commerce websites?','Yes, for brands that want their own online storefront.'],
 ['How do I start a project?','Send the contact form or email '+EMAIL+' with a short description of your business and what you need.'] ]

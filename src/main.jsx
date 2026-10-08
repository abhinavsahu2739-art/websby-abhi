import './index.css'
import { ViteReactSSG } from 'vite-react-ssg'
import Layout from './components/Layout'
import Home from './pages/Home'
import Service from './pages/Service'
import { Portfolio, About, Contact, NotFound } from './pages/Pages'
import { services } from './data/site'
const routes = [{ path: '/', element: <Layout />, children: [
  { index: true, element: <Home /> },
  { path: 'services/:slug', element: <Service />, getStaticPaths: () => services.map((s) => `services/${s.slug}`) },
  { path: 'portfolio', element: <Portfolio /> }, { path: 'about', element: <About /> }, { path: 'contact', element: <Contact /> },
  { path: '404', element: <NotFound /> }, { path: '*', element: <NotFound /> } ] }]
export const createRoot = ViteReactSSG({ routes })

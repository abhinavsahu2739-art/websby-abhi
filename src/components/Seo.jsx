import { Head } from 'vite-react-ssg'
import { SITE } from '../data/site'
export default function Seo({ title, description, path, schema, noindex }) {
  const url = SITE + path
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex" />}
      <meta property="og:type" content="website" /><meta property="og:site_name" content="WebsBy Abhi" />
      <meta property="og:title" content={title} /><meta property="og:description" content={description} />
      <meta property="og:url" content={url} /><meta property="og:image" content={SITE + '/assets/hetricks.webp'} />
      <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content={title} /><meta name="twitter:description" content={description} />
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Head>
  )
}

import { faqs } from '../data/site'
export default function FAQ({ items = faqs }) {
  return <div className="max-w-3xl space-y-3">{items.map(([q, a]) => (
    <details key={q} className="group rounded-lg border border-line bg-panel px-5"><summary className="cursor-pointer py-4 font-semibold text-white">{q}</summary><p className="pb-4 text-mute">{a}</p></details>))}</div>
}

// Provider-agnostic event tracking. Sends ONLY whitelisted, non-personal fields.
// No analytics platform is configured yet: events go to window.gtag or window.plausible if one is later
// loaded, otherwise they are logged in dev only. Never pass names, emails, phones or message text.
const ALLOWED = ['label', 'service']
export function track(name, params = {}) {
  if (typeof window === 'undefined') return
  const clean = { page: window.location.pathname }
  for (const k of ALLOWED) if (typeof params[k] === 'string' && params[k]) clean[k] = params[k].slice(0, 80)
  try {
    if (window.gtag) window.gtag('event', name, clean)
    else if (window.plausible) window.plausible(name, { props: clean })
    else if (import.meta.env.DEV) console.debug('[track]', name, clean)
  } catch { /* tracking must never break the site */ }
}
// One delegated click listener covers email, Instagram and any element marked with data-event.
if (typeof window !== 'undefined' && !window.__wbaTracking) {
  window.__wbaTracking = true
  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a')
    if (!a) return
    const href = a.getAttribute('href') || ''
    if (href.startsWith('mailto:')) return track('email_click')
    if (href.includes('instagram.com')) return track('instagram_click', { label: 'instagram' })
    if (a.dataset.event) track(a.dataset.event, { label: a.dataset.label, service: a.dataset.service })
  })
}

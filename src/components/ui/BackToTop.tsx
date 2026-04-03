import { ChevronUp } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { useLocale } from '../../context/LocaleContext'

/** Distancia al final del documento por debajo de la cual se muestra el botón. */
const NEAR_BOTTOM_PX = 560
const MIN_SCROLL_FOR_SHORT_PAGES = 200
const MIN_SCROLL_RANGE = 200

function scrollToTop() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
}

export function BackToTop() {
  const { t } = useLocale()
  const [visible, setVisible] = useState(false)

  const update = useCallback(() => {
    const el = document.documentElement
    const maxScroll = el.scrollHeight - el.clientHeight
    if (maxScroll < MIN_SCROLL_RANGE) {
      setVisible(false)
      return
    }
    const y = window.scrollY
    const pxFromBottom = maxScroll - y
    setVisible(y > MIN_SCROLL_FOR_SHORT_PAGES && pxFromBottom < NEAR_BOTTOM_PX)
  }, [])

  useEffect(() => {
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [update])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={t.backToTop}
      className="fixed bottom-24 right-4 z-[59] inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-md transition hover:border-brand-500/30 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-brand-400/35 dark:hover:text-brand-300 sm:right-6"
    >
      <ChevronUp className="h-5 w-5" aria-hidden />
    </button>
  )
}

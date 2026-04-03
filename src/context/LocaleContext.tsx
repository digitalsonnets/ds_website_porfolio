import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { getDictionary, type Locale } from '../i18n'

const STORAGE_KEY = 'portfolio-locale'

const LocaleContext = createContext<{
  locale: Locale
  setLocale: (l: Locale) => void
  toggleLocale: () => void
  t: ReturnType<typeof getDictionary>
} | null>(null)

function readStoredLocale(): Locale | null {
  try {
    const s = localStorage.getItem(STORAGE_KEY)
    if (s === 'es' || s === 'en') return s
  } catch {
    /* ignore */
  }
  return null
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => readStoredLocale() ?? 'en')

  useEffect(() => {
    document.documentElement.lang = locale === 'es' ? 'es' : 'en'
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      /* ignore */
    }
  }, [locale])

  const setLocale = useCallback((l: Locale) => setLocaleState(l), [])
  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => (prev === 'es' ? 'en' : 'es'))
  }, [])

  const t = getDictionary(locale)

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggleLocale, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

/* Context hook co-located with provider; remount on file change is acceptable. */
// eslint-disable-next-line react-refresh/only-export-components
export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}

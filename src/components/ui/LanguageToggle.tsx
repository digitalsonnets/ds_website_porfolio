import { useLocale } from '../../context/LocaleContext'

type Props = {
  compact?: boolean
  className?: string
}

export function LanguageToggle({ compact, className = '' }: Props) {
  const { locale, setLocale, t } = useLocale()

  return (
    <div
      className={`inline-flex rounded-lg border border-slate-200 bg-white/90 p-0.5 dark:border-slate-700 dark:bg-slate-900/90 ${className}`}
      role="group"
      aria-label={t.hero.langLabel}
    >
      {(['es', 'en'] as const).map((code) => {
        const active = locale === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            className={`rounded-md px-2.5 py-1 text-sm font-medium transition-colors focus-visible:outline-none ${
              active
                ? 'bg-btn-gradient text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
            } ${compact ? 'min-w-[2.5rem]' : ''}`}
          >
            {code.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}

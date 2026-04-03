import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { useLocale } from '../../context/LocaleContext'

type Props = {
  className?: string
}

export function ThemeToggle({ className = '' }: Props) {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLocale()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? t.hero.themeDark : t.hero.themeLight}
      title={t.hero.themeLabel}
      onClick={toggleTheme}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white/90 text-slate-700 transition hover:border-brand-500/40 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-200 dark:hover:border-brand-400/40 dark:hover:text-brand-300 ${className}`}
    >
      {isDark ? <Sun className="h-5 w-5" aria-hidden /> : <Moon className="h-5 w-5" aria-hidden />}
    </button>
  )
}

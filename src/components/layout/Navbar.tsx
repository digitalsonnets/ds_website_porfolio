import { Menu, X } from 'lucide-react'
import { useEffect, useId, useState } from 'react'
import { SITE_SECTIONS } from '../../data/site'
import { useLocale } from '../../context/LocaleContext'
import { BrandLockup } from '../ui/BrandWordmark'
import { LanguageToggle } from '../ui/LanguageToggle'
import { ThemeToggle } from '../ui/ThemeToggle'
import {
  siteBrandLinkPadding,
  siteShellBg,
  siteShellBorderBottom,
  siteShellBorderTop,
  siteShellContainer,
  siteShellVerticalPadding,
} from './siteShell'

const allNavLinks = [
  { href: '#hero', key: 'home' as const },
  { href: '#about', key: 'about' as const },
  { href: '#projects', key: 'projects' as const },
  { href: '#services', key: 'services' as const },
  { href: '#blog', key: 'blog' as const },
  { href: '#contact', key: 'contact' as const },
] as const

const links = allNavLinks.filter((l) => {
  if (l.key === 'projects' && !SITE_SECTIONS.showProjects) return false
  if (l.key === 'blog' && !SITE_SECTIONS.showBlog) return false
  return true
})

export function Navbar() {
  const { t } = useLocale()
  const [open, setOpen] = useState(false)
  const panelId = useId()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 ${siteShellBorderBottom} ${siteShellBg}`}
    >
      <div
        className={`flex items-center justify-between gap-4 ${siteShellContainer} ${siteShellVerticalPadding}`}
      >
        <a
          href="#hero"
          className={`inline-flex shrink-0 items-center rounded-lg ${siteBrandLinkPadding} ${siteShellBg} transition hover:bg-slate-100/95 dark:hover:bg-slate-900/90`}
          aria-label={t.brand}
        >
          <BrandLockup size="nav" />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map(({ href, key }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-slate-600 transition hover:text-brand-700 dark:text-slate-300 dark:hover:text-brand-400"
            >
              {t.nav[key]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageToggle compact />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle compact />
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-800 dark:border-slate-700 dark:text-slate-100"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={panelId}
          className={`${siteShellBorderTop} bg-white dark:bg-slate-950 md:hidden`}
        >
          <div className={`${siteShellContainer} ${siteShellVerticalPadding}`}>
            <nav className="flex flex-col gap-3" aria-label="Primary mobile">
              {links.map(({ href, key }) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-lg px-2 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-900"
                  onClick={() => setOpen(false)}
                >
                  {t.nav[key]}
                </a>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  )
}

import { HERO_QUICK_NAV, SITE_SECTIONS } from '../../data/site'
import { useLocale } from '../../context/LocaleContext'

export function Hero() {
  const { t } = useLocale()
  const hasHeroQuickList =
    HERO_QUICK_NAV.about ||
    SITE_SECTIONS.showProjects ||
    HERO_QUICK_NAV.services ||
    SITE_SECTIONS.showBlog ||
    HERO_QUICK_NAV.contact

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-12">
        <p className="inline-flex w-fit rounded-full border border-brand-500/25 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-800 dark:text-brand-200">
          {t.hero.badge}
        </p>

        <h1
          id="hero-title"
          className="mt-6 max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:mt-8 md:text-5xl"
        >
          {t.hero.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 md:mt-6">
          {t.hero.subtitle}
        </p>

        {HERO_QUICK_NAV.primaryCta || HERO_QUICK_NAV.contact ? (
          <nav className="mt-8 flex flex-wrap gap-3 md:mt-10" aria-label={t.nav.home}>
            {HERO_QUICK_NAV.primaryCta ? (
              <a
                href={SITE_SECTIONS.showProjects ? '#projects' : '#services'}
                className="bg-btn-gradient inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition"
              >
                {t.hero.ctaPrimary}
              </a>
            ) : null}
            {HERO_QUICK_NAV.contact ? (
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-brand-500/40 hover:text-brand-800 dark:border-slate-600 dark:text-slate-100 dark:hover:border-brand-400/40"
              >
                {t.hero.ctaSecondary}
              </a>
            ) : null}
          </nav>
        ) : null}

        {hasHeroQuickList ? (
          <ul className="mt-12 hidden flex-wrap gap-6 text-sm font-medium text-slate-600 dark:text-slate-400 md:flex">
            {HERO_QUICK_NAV.about ? (
              <li>
                <a href="#about" className="transition hover:text-brand-700 dark:hover:text-brand-400">
                  {t.nav.about}
                </a>
              </li>
            ) : null}
            {SITE_SECTIONS.showProjects ? (
              <li>
                <a href="#projects" className="transition hover:text-brand-700 dark:hover:text-brand-400">
                  {t.nav.projects}
                </a>
              </li>
            ) : null}
            {HERO_QUICK_NAV.services ? (
              <li>
                <a href="#services" className="transition hover:text-brand-700 dark:hover:text-brand-400">
                  {t.nav.services}
                </a>
              </li>
            ) : null}
            {SITE_SECTIONS.showBlog ? (
              <li>
                <a href="#blog" className="transition hover:text-brand-700 dark:hover:text-brand-400">
                  {t.nav.blog}
                </a>
              </li>
            ) : null}
            {HERO_QUICK_NAV.contact ? (
              <li>
                <a href="#contact" className="transition hover:text-brand-700 dark:hover:text-brand-400">
                  {t.nav.contact}
                </a>
              </li>
            ) : null}
          </ul>
        ) : null}
      </div>
    </section>
  )
}

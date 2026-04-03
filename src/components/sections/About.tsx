import { useLocale } from '../../context/LocaleContext'
import { Section } from '../layout/Section'

export function About() {
  const { t } = useLocale()

  return (
    <Section id="about" title={t.about.title} titleId="about-heading" className="bg-white dark:bg-slate-950">
      <div className="max-w-3xl">
        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">{t.about.bio}</p>
        <h3 className="mt-10 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500">
          {t.about.skillsTitle}
        </h3>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {t.about.skills.map((skill) => (
            <li
              key={skill}
              className="flex items-center gap-2 text-sm text-slate-800 dark:text-slate-200"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600 dark:bg-brand-400" aria-hidden />
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

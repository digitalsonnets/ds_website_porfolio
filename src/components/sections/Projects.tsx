import { useLocale } from '../../context/LocaleContext'
import { Section } from '../layout/Section'
import { ProjectCard } from '../ui/ProjectCard'

export function Projects() {
  const { t } = useLocale()

  return (
    <Section
      id="projects"
      title={t.projects.title}
      titleId="projects-heading"
      subtitle={t.projects.subtitle}
      className="bg-slate-50 dark:bg-slate-900/40"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {t.projects.items.map((item) => (
          <ProjectCard
            key={item.title}
            title={item.title}
            description={item.description}
            tech={item.tech}
            demoLabel={t.projects.demo}
            moreLabel={t.projects.more}
          />
        ))}
      </div>
    </Section>
  )
}

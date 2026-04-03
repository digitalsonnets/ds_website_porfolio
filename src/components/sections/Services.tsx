import { Code2, Gauge, Plug, Workflow } from 'lucide-react'
import { useLocale } from '../../context/LocaleContext'
import { Section } from '../layout/Section'
import { ServiceCard } from '../ui/ServiceCard'

const icons = {
  frontend: Code2,
  automation: Workflow,
  api: Plug,
  perf: Gauge,
} as const

export function Services() {
  const { t } = useLocale()

  return (
    <Section
      id="services"
      title={t.services.title}
      titleId="services-heading"
      subtitle={t.services.subtitle}
      className="bg-white dark:bg-slate-950"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {t.services.items.map((item) => {
          const Icon = icons[item.id as keyof typeof icons]
          return (
            <ServiceCard
              key={item.id}
              icon={Icon}
              title={item.title}
              description={item.description}
            />
          )
        })}
      </div>
    </Section>
  )
}

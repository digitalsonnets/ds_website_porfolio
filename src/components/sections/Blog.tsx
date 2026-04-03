import { useLocale } from '../../context/LocaleContext'
import { Section } from '../layout/Section'
import { BlogCard } from '../ui/BlogCard'

export function Blog() {
  const { t } = useLocale()

  return (
    <Section
      id="blog"
      title={t.blog.title}
      titleId="blog-heading"
      subtitle={t.blog.subtitle}
      className="bg-slate-50 dark:bg-slate-900/40"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {t.blog.items.map((item) => (
          <BlogCard
            key={item.title}
            title={item.title}
            date={item.date}
            summary={item.summary}
            readMore={t.blog.readMore}
          />
        ))}
      </div>
    </Section>
  )
}

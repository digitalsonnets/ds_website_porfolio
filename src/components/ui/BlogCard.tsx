type Props = {
  title: string
  date: string
  summary: string
  readMore: string
}

export function BlogCard({ title, date, summary, readMore }: Props) {
  return (
    <article className="rounded-2xl border border-slate-200/80 bg-white p-6 transition duration-300 hover:border-brand-500/30 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-brand-400/30">
      <time
        dateTime={date}
        className="text-xs font-medium uppercase tracking-wide text-brand-700 dark:text-brand-400"
      >
        {date}
      </time>
      <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{summary}</p>
      <a
        href="#blog"
        className="mt-4 inline-flex text-sm font-medium text-brand-700 underline-offset-4 hover:underline dark:text-brand-400"
      >
        {readMore}
      </a>
    </article>
  )
}

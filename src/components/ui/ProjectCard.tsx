type Props = {
  title: string
  description: string
  tech: readonly string[]
  demoLabel: string
  moreLabel: string
}

export function ProjectCard({ title, description, tech, demoLabel, moreLabel }: Props) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-brand-500/35 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-brand-400/35">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
        {tech.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        <a
          href="#contact"
          className="bg-btn-gradient inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white transition focus-visible:outline-none"
        >
          {demoLabel}
        </a>
        <a
          href="#projects"
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-500/40 hover:text-brand-800 dark:border-slate-600 dark:text-slate-200 dark:hover:border-brand-400/40"
        >
          {moreLabel}
        </a>
      </div>
    </article>
  )
}

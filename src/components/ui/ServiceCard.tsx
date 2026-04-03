import type { LucideIcon } from 'lucide-react'

type Props = {
  icon: LucideIcon
  title: string
  description: string
}

export function ServiceCard({ icon: Icon, title, description }: Props) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-6 transition duration-300 hover:border-brand-500/30 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-brand-400/30">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600/10 text-brand-700 dark:bg-brand-400/15 dark:text-brand-300">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  )
}

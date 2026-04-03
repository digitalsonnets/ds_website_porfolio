import type { ReactNode } from 'react'
import { useReveal } from '../../hooks/useReveal'

type Props = {
  id: string
  title: string
  titleId: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export function Section({ id, title, titleId, subtitle, children, className = '' }: Props) {
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <section
      ref={ref}
      id={id}
      aria-labelledby={titleId}
      className={`py-8 md:py-12 ${className}`}
    >
      <div
        className={`mx-auto max-w-6xl px-4 transition duration-700 ease-out sm:px-6 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <h2
          id={titleId}
          className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-3xl"
        >
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-400">{subtitle}</p>
        ) : null}
        <div className="mt-6 md:mt-8">{children}</div>
      </div>
    </section>
  )
}

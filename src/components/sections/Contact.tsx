import { useState, type FormEvent } from 'react'
import { useLocale } from '../../context/LocaleContext'
import { CONTACT } from '../../data/contact'
import { Section } from '../layout/Section'

const FORMSUBMIT_AJAX = (email: string) =>
  `https://formsubmit.co/ajax/${encodeURIComponent(email)}`

export function Contact() {
  const { locale, t } = useLocale()
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.reportValidity()) return

    const fd = new FormData(form)
    const name = String(fd.get('name') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    const message = String(fd.get('message') ?? '').trim()
    const honey = String(fd.get('_honey') ?? '').trim()
    if (honey) return

    const payload = new FormData()
    payload.append('name', name)
    payload.append('email', email)
    payload.append('message', message)
    payload.append(
      '_subject',
      locale === 'es' ? 'Mensaje desde el portafolio (Digital Sonnets)' : 'Message from portfolio (Digital Sonnets)',
    )
    payload.append('_replyto', email)
    payload.append('_captcha', 'false')

    setStatus('sending')
    try {
      const res = await fetch(FORMSUBMIT_AJAX(CONTACT.contactFormEmail), {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: payload,
      })
      const data = (await res.json().catch(() => null)) as { success?: boolean } | null
      if (!res.ok || data?.success === false) {
        setStatus('error')
        return
      }
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section
      id="contact"
      title={t.contact.title}
      titleId="contact-heading"
      subtitle={t.contact.subtitle}
      className="bg-white dark:bg-slate-950"
    >
      <div
        className={
          CONTACT.showSocialLinks
            ? 'grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,280px)]'
            : 'grid gap-12'
        }
      >
        <form
          className="relative max-w-xl space-y-5"
          onSubmit={onSubmit}
          noValidate
          aria-describedby={
            status === 'success' || status === 'error' ? 'contact-status' : undefined
          }
        >
          <div>
            <label htmlFor="contact-name" className="text-sm font-medium text-slate-800 dark:text-slate-200">
              {t.contact.name}
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="text-sm font-medium text-slate-800 dark:text-slate-200">
              {t.contact.email}
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="text-sm font-medium text-slate-800 dark:text-slate-200">
              {t.contact.message}
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              className="mt-1.5 w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 shadow-sm transition placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
          </div>
          <div
            className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
            aria-hidden
          >
            <input name="_honey" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-btn-gradient inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === 'sending' ? t.contact.sending : t.contact.submit}
          </button>
          <div
            id="contact-status"
            role="status"
            className={
              status === 'error'
                ? 'text-sm text-red-700 dark:text-red-300'
                : 'text-sm text-brand-800 dark:text-brand-300'
            }
            aria-live="polite"
          >
            {status === 'success' ? t.contact.success : status === 'error' ? t.contact.errorSend : ''}
          </div>
        </form>

        {CONTACT.showSocialLinks ? (
          <div>
            <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{t.contact.socialHint}</p>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-brand-500/40 hover:text-brand-800 dark:border-slate-700 dark:text-slate-100 dark:hover:border-brand-400/40"
                >
                  {t.contact.socialWhatsApp}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-brand-500/40 hover:text-brand-800 dark:border-slate-700 dark:text-slate-100 dark:hover:border-brand-400/40"
                >
                  {t.contact.socialLinkedIn}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-brand-500/40 hover:text-brand-800 dark:border-slate-700 dark:text-slate-100 dark:hover:border-brand-400/40"
                >
                  {t.contact.socialInstagram}
                </a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </Section>
  )
}

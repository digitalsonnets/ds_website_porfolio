import { MessageCircle, Send, X } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import { usePortfolioChat } from '../../chat/usePortfolioChat'
import { useLocale } from '../../context/LocaleContext'
import { ChatMessageBubble } from './ChatMessage'

type ChatPanelProps = {
  panelId: string
  onClose: () => void
}

function ChatPanel({ panelId, onClose }: ChatPanelProps) {
  const { locale, t } = useLocale()
  const { messages, send } = usePortfolioChat(locale)
  const [input, setInput] = useState('')
  const listRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView({ behavior: 'smooth', block: 'end' })
    inputRef.current?.focus()
  }, [messages])

  function handleSend() {
    send(input)
    setInput('')
  }

  return (
    <div
      id={panelId}
      role="dialog"
      aria-modal="true"
      aria-label={t.chat.title}
      className="flex w-[min(100vw-2rem,22rem)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900"
    >
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-slate-700">
        <span className="text-sm font-semibold text-slate-900 dark:text-white">{t.chat.title}</span>
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg p-1 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          aria-label={t.chat.close}
        >
          <X className="h-5 w-5" aria-hidden />
        </button>
      </div>
      <div ref={listRef} className="max-h-72 space-y-3 overflow-y-auto px-3 py-3" aria-live="polite">
        {messages.map((m) => (
          <ChatMessageBubble key={m.id} role={m.role} text={m.text} />
        ))}
      </div>
      <form
        className="flex gap-2 border-t border-slate-200 p-3 dark:border-slate-700"
        onSubmit={(e) => {
          e.preventDefault()
          handleSend()
        }}
      >
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t.chat.placeholder}
          className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-100"
          aria-label={t.chat.placeholder}
        />
        <button
          type="submit"
          className="bg-btn-gradient inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white"
          aria-label={t.chat.send}
        >
          <Send className="h-4 w-4" aria-hidden />
        </button>
      </form>
    </div>
  )
}

export function FloatingChat() {
  const { locale, t } = useLocale()
  const [open, setOpen] = useState(false)
  const panelId = useId()

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <div className="fixed bottom-6 right-4 z-[60] flex flex-col items-end gap-3 sm:right-6">
      {open ? <ChatPanel key={locale} panelId={panelId} onClose={() => setOpen(false)} /> : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="bg-btn-gradient inline-flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition hover:scale-105 focus-visible:outline-none"
        aria-label={open ? t.chat.close : t.chat.open}
      >
        {open ? <X className="h-6 w-6" aria-hidden /> : <MessageCircle className="h-6 w-6" aria-hidden />}
      </button>
    </div>
  )
}

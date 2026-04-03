import { useCallback, useState } from 'react'
import type { Locale } from '../i18n'
import { getDictionary } from '../i18n'

export type ChatMessage = {
  id: string
  role: 'user' | 'assistant'
  text: string
}

function stripDiacritics(s: string) {
  return s.normalize('NFD').replace(/\p{M}/gu, '')
}

function pickResponse(input: string, locale: Locale): string {
  const d = getDictionary(locale).chat
  const lower = stripDiacritics(input.toLowerCase())

  if (/hola|hello|hi\b|hey|buenas|good\s*morning|good\s*afternoon/.test(lower)) {
    return d.responses.greeting
  }
  if (/proyect|project/.test(lower)) return d.responses.projects
  if (/servicio|service/.test(lower)) return d.responses.services
  if (/automat|workflow|flujo|pipeline/.test(lower)) return d.responses.automation
  if (/\bapi\b|integraci|integration|webhook/.test(lower)) return d.responses.api
  if (/contact|email|mensaje|escrib|whatsapp|reach/.test(lower)) return d.responses.contact
  if (/stack|tech|tecnolog|typescript|react|tailwind|vite/.test(lower)) return d.responses.stack
  if (/experiencia|experience|cv|curriculum|background/.test(lower)) return d.responses.experience
  if (/precio|price|presupuesto|rate|tarif|budget|cost/.test(lower)) return d.responses.price

  return Math.random() > 0.5 ? d.fallback1 : d.fallback2
}

export function usePortfolioChat(locale: Locale) {
  const welcome = getDictionary(locale).chat.welcome
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'welcome', role: 'assistant', text: welcome },
  ])

  const send = useCallback(
    (text: string) => {
      const trimmed = text.trim()
      if (!trimmed) return
      const userMsg: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'user',
        text: trimmed,
      }
      const assistantMsg: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        text: pickResponse(trimmed, locale),
      }
      setMessages((prev) => [...prev, userMsg, assistantMsg])
    },
    [locale],
  )

  return { messages, send }
}

'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { texts, LANGS } from '@/lib/i18n'

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState('de')

  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved && LANGS.some((l) => l.code === saved)) setLang(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  const t = (key) => texts[key]?.[lang] ?? texts[key]?.de ?? key
  const tr = (obj) => (obj && (obj[lang] ?? obj.de)) ?? ''

  return <LangContext.Provider value={{ lang, setLang, t, tr }}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang muss innerhalb von <LangProvider> stehen')
  return ctx
}

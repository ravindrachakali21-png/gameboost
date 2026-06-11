import { useState } from 'react'
import crate from '../assets/crate.png'
import smoke from '../assets/smoke.png'
import SectionHeading from './SectionHeading'
import { useReveal } from './useReveal'
import { Send, Chat, User, Mail, Globe } from './Icons'

const footerLinks = [
  ['Главная', '#home'],
  ['Тарифы', '#pricing'],
  ['Отзывы', '#reviews'],
  ['FAQ', '#faq'],
  ['Контакты', '#contact'],
  ['Функционал', '#features'],
]

export default function Contact() {
  const [ref, shown] = useReveal()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-mist pt-16 lg:pt-24">
      {/* blue panel pinned to the bottom, with a wavy mist top — content overlaps it */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[460px]"
        style={{ background: 'linear-gradient(180deg,#2a7de1 0%,#1f63c4 55%,#1a539f 100%)' }}
      >
        <div className="absolute inset-x-0 top-0 leading-[0]">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="h-[80px] w-full sm:h-[110px]">
            <path fill="#f4f8fc" d="M0,0 L1440,0 L1440,26 C1120,74 720,104 320,82 C190,75 80,94 0,104 Z" />
          </svg>
        </div>
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{ backgroundImage: 'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize: '26px 26px' }}
        />
      </div>

      <div ref={ref} className={`relative z-10 mx-auto max-w-7xl px-5 lg:px-8 reveal ${shown ? 'in' : ''}`}>
        <SectionHeading>Контакты</SectionHeading>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* box + smoke (smoke sits on top of the box) */}
          <div className="relative flex justify-center">
            <img src={crate} alt="Награда" className="animate-floaty relative w-72 max-w-full drop-shadow-2xl sm:w-80" />
            <img
              src={smoke}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 z-10 w-48 max-w-full -translate-x-1/2 -translate-y-1/2 opacity-95 sm:w-56"
            />
          </div>

          {/* form */}
          <div className="relative rounded-3xl bg-white p-7 shadow-[0_30px_70px_-18px_rgba(20,50,90,0.45)] sm:p-9">
            <a
              href="#"
              aria-label="Telegram"
              className="absolute -right-5 -top-7 grid h-16 w-16 rotate-45 place-items-center rounded-xl bg-cyan shadow-lg transition hover:brightness-110"
            >
              <Send className="h-6 w-6 -rotate-45 text-white" />
            </a>
            <a
              href="#"
              aria-label="Discord"
              className="absolute -bottom-7 -left-6 grid h-14 w-14 rotate-45 place-items-center rounded-xl bg-blue shadow-lg transition hover:brightness-110"
            >
              <Chat className="h-6 w-6 -rotate-45 text-white" />
            </a>

            <h3 className="mb-6 font-display text-xl font-extrabold text-ink">Обратная связь</h3>

            {sent ? (
              <div className="rounded-2xl bg-sky px-6 py-10 text-center">
                <p className="font-display text-lg font-bold text-blue">Сообщение отправлено</p>
                <p className="mt-2 text-sm text-ink-soft">
                  Спасибо, {form.name || 'друг'} — мы ответим на {form.email || 'вашу почту'} в ближайшее время.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field icon={<User className="h-4 w-4" />} placeholder="Ваше имя" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                  <Field icon={<Mail className="h-4 w-4" />} type="email" placeholder="E-mail" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-sky bg-mist px-4 py-3 focus-within:border-cyan">
                  <Chat className="mt-1 h-4 w-4 text-ink-soft" />
                  <textarea
                    rows={4}
                    placeholder="Комментарий"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none bg-transparent text-sm text-ink outline-none placeholder:text-ink-soft"
                  />
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="rounded-xl gradient-cta px-10 py-3.5 font-semibold text-white shadow-md transition hover:brightness-105">
                    Отправить
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* footer on the blue */}
        <div className="relative mt-24 flex flex-col items-center gap-5 lg:mt-28 lg:flex-row lg:justify-between">
          <a href="#home" className="font-display text-xl font-extrabold text-white">
            Game<span className="text-orange-bright">Boost</span>
          </a>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map(([label, href], i) => (
              <li key={href}>
                <a
                  href={href}
                  className={`text-xs font-bold uppercase tracking-wide text-white/85 transition hover:text-white ${
                    i === 0 ? 'border-b-2 border-orange pb-1 text-white' : ''
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-ink">
              <Globe className="h-4 w-4" /> RU ▾
            </button>
            <button className="grid h-10 w-10 place-items-center rounded-lg gradient-cta text-white">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
        <p className="relative py-6 text-center text-xs text-white/70">
          Защищено 2026 © — GameBoost. Утилита для оптимизации производительности.
        </p>
      </div>
    </section>
  )
}

function Field({ icon, type = 'text', placeholder, value, onChange }) {
  return (
    <label className="flex items-center gap-3 rounded-xl border border-sky bg-mist px-4 py-3 focus-within:border-cyan">
      <span className="text-ink-soft">{icon}</span>
      <input
        type={type}
        required
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-soft"
      />
    </label>
  )
}

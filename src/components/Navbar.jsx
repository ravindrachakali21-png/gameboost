import { useEffect, useState } from 'react'
import { Globe, User } from './Icons'

const links = [
  { label: 'Главная', href: '#home' },
  { label: 'Тарифы', href: '#pricing' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Контакты', href: '#contact' },
  { label: 'Функционал', href: '#features' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-blue/95 backdrop-blur shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="font-display text-xl font-extrabold tracking-tight text-white">
          Game<span className="text-orange-bright">Boost</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-[13px] font-bold uppercase tracking-wide text-white/85 transition hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button className="hidden items-center gap-2 rounded-lg bg-white/15 px-3 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/25 sm:flex">
            <Globe className="h-4 w-4" />
            RU
            <span className="text-[10px] opacity-70">▼</span>
          </button>
          <button className="grid h-10 w-10 place-items-center rounded-lg gradient-cta text-white shadow-md transition hover:brightness-105">
            <User className="h-5 w-5" />
          </button>
          <button
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg bg-white/15 text-white lg:hidden"
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
              <span className="block h-0.5 w-5 bg-white" />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-blue/95 px-5 pb-5 backdrop-blur lg:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-bold uppercase tracking-wide text-white/90 hover:bg-white/10"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

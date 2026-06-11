import { Globe, User } from './Icons'

const links = [
  ['Главная', '#home'],
  ['Тарифы', '#pricing'],
  ['Отзывы', '#reviews'],
  ['FAQ', '#faq'],
  ['Контакты', '#contact'],
  ['Функционал', '#features'],
]

export default function Footer() {
  return (
    <footer
      className="relative z-0 -mt-44 pt-52 lg:-mt-56 lg:pt-64"
      style={{ background: 'linear-gradient(180deg, #2a7de1 0%, #1f63c4 60%, #1a539f 100%)' }}
    >
      {/* diagonal wavy top: mist band so the blue footer rises behind the form/box */}
      <div className="pointer-events-none absolute inset-x-0 top-0 leading-[0]">
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none" className="h-[110px] w-full sm:h-[150px]">
          <path
            fill="#f4f8fc"
            d="M0,0 L1440,0 L1440,28 C1120,70 720,104 320,84 C190,77 80,96 0,108 Z"
          />
        </svg>
      </div>

      {/* faint dotted texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '26px 26px' }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 pb-8 lg:flex-row lg:justify-between lg:px-8">
        <a href="#home" className="font-display text-xl font-extrabold text-white">
          Game<span className="text-orange-bright">Boost</span>
        </a>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {links.map(([label, href], i) => (
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

      <div className="relative border-t border-white/10 py-4 text-center text-xs text-white/70">
        Защищено 2026 © — GameBoost. Утилита для оптимизации производительности.
      </div>
    </footer>
  )
}

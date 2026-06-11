import { useState, useRef } from 'react'
import PlatformTabs from './PlatformTabs'
import SectionHeading from './SectionHeading'
import { useReveal } from './useReveal'
import { Arrow, Check, Cross } from './Icons'

const plans = [
  {
    tier: 'ОБЫЧНАЯ',
    accent: 'tier-cyan',
    period: '1 месяц',
    price: '649',
    features: [
      ['Все функции', true],
      ['Обновления 1 раз в месяц', true],
      ['Техническая поддержка', true],
      ['Защита от вылетов', true],
      ['Улучшенная оптимизация', false],
      ['Запуск на других устройствах', false],
      ['Приоритетный маршрут', false],
    ],
  },
  {
    tier: 'СТАНДАРТНАЯ',
    accent: 'tier-violet',
    period: '3 месяца',
    price: '1 499',
    popular: true,
    features: [
      ['Все функции', true],
      ['Постоянные обновления', true],
      ['Поддержка 24/7', true],
      ['Улучшенная защита от вылетов', true],
      ['Улучшенная оптимизация', true],
      ['Запуск на других устройствах', true],
      ['Приоритетный маршрут', false],
    ],
  },
  {
    tier: 'PRO ВЕРСИЯ',
    accent: 'tier-red',
    period: 'Навсегда',
    price: '2 899',
    features: [
      ['Все функции + NEW', true],
      ['Все обновления + BETA тест', true],
      ['Поддержка 24/7', true],
      ['Максимальная защита от вылетов', true],
      ['Максимальная оптимизация', true],
      ['Запуск на других устройствах', true],
      ['Приоритетный маршрут', true],
    ],
  },
]

function PlanCard({ p }) {
  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-[var(--shadow-card)] transition hover:-translate-y-1.5 ${
        p.popular ? 'lg:scale-[1.04]' : ''
      }`}
    >
      <div className={`${p.accent} py-3 text-center`}>
        <span className="font-display text-sm font-extrabold uppercase tracking-widest text-white">
          {p.tier}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-7 py-7">
        <h3 className="text-center font-display text-2xl font-extrabold text-ink">{p.period}</h3>

        <ul className="mt-6 space-y-3.5">
          {p.features.map(([label, ok]) => (
            <li key={label} className="flex items-center gap-3 text-sm">
              <span
                className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                  ok ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-500'
                }`}
              >
                {ok ? <Check className="h-3 w-3" /> : <Cross className="h-3 w-3" />}
              </span>
              <span className={ok ? 'text-ink' : 'text-ink-soft line-through decoration-rose-300'}>
                {label}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-7 text-center">
          <span className="font-display text-4xl font-extrabold text-ink">{p.price}</span>
          <span className="ml-1 align-top text-lg font-bold text-ink-soft">₽</span>
        </div>

        <a
          href="#contact"
          className="group mt-6 inline-flex items-center justify-center gap-2 rounded-xl gradient-cta py-3.5 font-semibold text-white shadow-md transition hover:brightness-105"
        >
          Приобрести
          <Arrow className="h-5 w-5 transition group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  )
}

export default function Pricing() {
  const [platform, setPlatform] = useState('ios')
  const [idx, setIdx] = useState(0)
  const [ref, shown] = useReveal()
  const trackRef = useRef(null)

  const scrollTo = (i) => {
    const t = trackRef.current
    if (!t) return
    const card = t.children[i]
    if (card) t.scrollTo({ left: card.offsetLeft - t.offsetLeft, behavior: 'smooth' })
    setIdx(i)
  }

  const onScroll = () => {
    const t = trackRef.current
    if (!t) return
    let best = 0,
      bestD = Infinity
    Array.from(t.children).forEach((c, i) => {
      const d = Math.abs(c.offsetLeft - t.offsetLeft - t.scrollLeft)
      if (d < bestD) {
        bestD = d
        best = i
      }
    })
    setIdx(best)
  }

  return (
    <section id="pricing" className="bg-mist py-16 lg:py-24">
      <div ref={ref} className={`mx-auto max-w-7xl px-5 lg:px-8 reveal ${shown ? 'in' : ''}`}>
        <SectionHeading>Тарифы</SectionHeading>

        <div className="mb-12 flex justify-center">
          <PlatformTabs active={platform} onChange={setPlatform} />
        </div>

        {/* mobile: swipeable slider · desktop: 3-column grid */}
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-3 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-7 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {plans.map((p) => (
            <div key={p.tier} className="w-[84%] shrink-0 snap-center sm:w-[55%] md:w-[42%] lg:w-auto lg:shrink-0 lg:snap-none">
              <PlanCard p={p} />
            </div>
          ))}
        </div>

        {/* slider controls (mobile only) */}
        <div className="mt-7 flex items-center justify-center gap-5 lg:hidden">
          <button
            onClick={() => scrollTo(Math.max(0, idx - 1))}
            disabled={idx === 0}
            aria-label="Предыдущий тариф"
            className="grid h-10 w-10 place-items-center rounded-full bg-white text-blue shadow transition disabled:opacity-40"
          >
            <Arrow className="h-5 w-5 rotate-180" />
          </button>
          <div className="flex items-center gap-2">
            {plans.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Тариф ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === idx ? 'w-6 bg-blue' : 'w-2 bg-sky'}`}
              />
            ))}
          </div>
          <button
            onClick={() => scrollTo(Math.min(plans.length - 1, idx + 1))}
            disabled={idx === plans.length - 1}
            aria-label="Следующий тариф"
            className="grid h-10 w-10 place-items-center rounded-full bg-white text-blue shadow transition disabled:opacity-40"
          >
            <Arrow className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

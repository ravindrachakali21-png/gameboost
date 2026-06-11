import { useState } from 'react'
import PlatformTabs from './PlatformTabs'
import PhoneMock from './PhoneMock'
import SectionHeading from './SectionHeading'
import { useReveal } from './useReveal'
import { Arrow, Play } from './Icons'

const features = [
  { name: 'Boost Mode', desc: 'освобождает RAM и CPU для максимального FPS.' },
  { name: 'Latency Guard', desc: 'оптимизирует маршрут сети и снижает пинг.' },
  { name: 'Auto-Tune', desc: 'подбирает идеальные настройки графики под ваше железо.' },
  { name: 'Capture', desc: 'записывает лучшие моменты без потери кадров.' },
]

export default function Features() {
  const [platform, setPlatform] = useState('ios')
  const [ref, shown] = useReveal()

  return (
    <section id="features" className="bg-white py-14 lg:py-20">
      <div ref={ref} className={`mx-auto max-w-7xl px-5 lg:px-8 reveal ${shown ? 'in' : ''}`}>
        <div className="mb-10 flex justify-center">
          <PlatformTabs active={platform} onChange={setPlatform} />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <PhoneMock />
            <div className="mt-6 flex items-center justify-center gap-6 text-blue">
              <button aria-label="Назад" className="grid h-9 w-9 place-items-center rounded-full hover:bg-sky">
                <Arrow className="h-5 w-5 rotate-180" />
              </button>
              <span className="h-0.5 w-16 bg-cyan" />
              <button aria-label="Вперёд" className="grid h-9 w-9 place-items-center rounded-full hover:bg-sky">
                <Arrow className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading center={false}>Функционал</SectionHeading>
            <p className="-mt-4 mb-8 max-w-md text-ink-soft">
              Универсальное приложение для всех устройств начиная от iPhone 4S — настроил
              один раз и забыл.
            </p>

            <ul className="space-y-5">
              {features.map((f) => (
                <li key={f.name} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full gradient-cta" />
                  <p className="text-ink-soft">
                    <span className="font-display font-bold text-ink">{f.name}</span> — {f.desc}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-start gap-3 rounded-xl border border-sky bg-mist px-5 py-4 text-sm text-ink-soft">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-orange/15 text-orange">!</span>
              Рекомендуем оставить стандартные параметры для лучшего результата.
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="group inline-flex items-center gap-3 rounded-xl gradient-cta px-7 py-3.5 font-semibold text-white shadow-lg transition hover:brightness-105"
              >
                Купить
                <Arrow className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#home"
                className="group inline-flex items-center gap-3 rounded-xl gradient-cta-red px-7 py-3.5 font-semibold text-white shadow-lg transition hover:brightness-105"
              >
                Посмотреть видео
                <span className="grid h-6 w-6 place-items-center rounded-full bg-white/25">
                  <Play className="h-3 w-3" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

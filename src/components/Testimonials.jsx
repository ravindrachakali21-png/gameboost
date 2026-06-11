import { useState } from 'react'
import SectionHeading from './SectionHeading'
import { Arrow, Quote } from './Icons'

const reviews = [
  {
    name: 'Егор Черняев',
    flag: '🇷🇺',
    text: 'Рекомендую данный софт! Аналогов не нашёл нигде, я решил не заморачиваться и сразу приобрёл ПРО версию, теперь играю в своё удовольствие.',
  },
  {
    name: 'Marcus Reed',
    flag: '🇬🇧',
    text: 'Средний FPS заметно вырос на том же железе. Установка заняла пару минут, поддержка реально отвечает.',
  },
  {
    name: 'Lena Vogt',
    flag: '🇩🇪',
    text: 'Latency Guard убрал случайные скачки пинга по вечерам. Стоит того ради одного только рейтинга.',
  },
]

export default function Testimonials() {
  const [i, setI] = useState(0)
  const r = reviews[i]
  const go = (d) => setI((p) => (p + d + reviews.length) % reviews.length)

  return (
    <section id="reviews" className="relative gradient-hero py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '26px 26px' }}
      />
      <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeading light>Что говорят о нас</SectionHeading>

        <div className="relative flex items-center justify-center gap-3 sm:gap-6">
          <button
            onClick={() => go(-1)}
            aria-label="Предыдущий отзыв"
            className="grid h-12 w-12 shrink-0 rotate-45 place-items-center rounded-xl bg-cyan shadow-lg transition hover:brightness-110"
          >
            <Arrow className="h-5 w-5 -rotate-[225deg] text-white" />
          </button>

          <div className="relative w-full rounded-2xl bg-white px-6 py-10 text-center shadow-[var(--shadow-card)] sm:px-12">
            <Quote className="absolute left-6 top-6 h-9 w-9 text-cyan/30" />
            <img
              src={`https://i.pravatar.cc/120?img=${12 + i}`}
              alt={r.name}
              className="mx-auto h-16 w-16 rounded-full object-cover ring-4 ring-sky"
            />
            <div className="mt-3 flex items-center justify-center gap-2">
              <p className="font-display font-bold text-ink">{r.name}</p>
              <span>{r.flag}</span>
            </div>
            <p className="mx-auto mt-4 max-w-lg text-ink-soft">{r.text}</p>

            <div className="mt-6 flex justify-center gap-2">
              {reviews.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  aria-label={`Отзыв ${k + 1}`}
                  className={`h-2 rounded-full transition-all ${k === i ? 'w-6 bg-blue' : 'w-2 bg-sky'}`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Следующий отзыв"
            className="grid h-12 w-12 shrink-0 rotate-45 place-items-center rounded-xl bg-cyan shadow-lg transition hover:brightness-110"
          >
            <Arrow className="h-5 w-5 -rotate-45 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}

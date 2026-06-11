import { useState } from 'react'
import SectionHeading from './SectionHeading'
import { useReveal } from './useReveal'
import { Plus, Cross } from './Icons'

const faqs = [
  {
    q: 'Какие у нас есть гарантии?',
    a: 'Мы официальные дилеры данного софта. Нам доверяет огромное количество людей. Также вы можете посмотреть представленные скриншоты и проверенные отзывы выше.',
  },
  {
    q: 'Как устанавливается GameBoost?',
    a: 'Скачайте установщик для вашей платформы, запустите его и войдите в аккаунт. Весь процесс занимает около двух минут и не требует ручной настройки.',
  },
  {
    q: 'Что я получу после оплаты тарифа?',
    a: 'Мгновенный доступ к лицензионному ключу и ссылке на скачивание по e-mail, а также доступ к обновлениям на весь срок действия тарифа.',
  },
  {
    q: 'Что такое приоритетный маршрут и Auto-Tune?',
    a: 'Приоритетный маршрут выбирает сетевой путь с наименьшей задержкой до игрового сервера, а Auto-Tune применяет лучшие настройки графики под ваше железо.',
  },
  {
    q: 'Влияют ли настройки на FPS в игре?',
    a: 'Да — положительно. GameBoost освобождает ресурсы системы и применяет оптимальные параметры, что обычно повышает средний FPS на том же железе.',
  },
]

function Row({ item, open, onToggle }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition ${
        open ? 'border-cyan/40 bg-white shadow-[var(--shadow-soft)]' : 'border-sky bg-white'
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display font-bold text-ink">{item.q}</span>
        <span
          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition ${
            open ? 'gradient-hero text-white' : 'bg-sky text-blue'
          }`}
        >
          {open ? <Cross className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
        </span>
      </button>
      <div className="grid transition-all duration-300 ease-out" style={{ gridTemplateRows: open ? '1fr' : '0fr' }}>
        <div className="overflow-hidden">
          <p className="border-l-2 border-cyan px-6 pb-5 pl-5 text-sm leading-relaxed text-ink-soft">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)
  const [ref, shown] = useReveal()

  return (
    <section id="faq" className="bg-white py-16 lg:py-24">
      <div ref={ref} className={`mx-auto max-w-3xl px-5 lg:px-8 reveal ${shown ? 'in' : ''}`}>
        <SectionHeading>Частые вопросы</SectionHeading>
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <Row key={i} item={item} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm font-semibold text-blue">
          <a href="#contact" className="hover:underline">У меня есть вопрос →</a>
        </p>
      </div>
    </section>
  )
}

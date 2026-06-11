import buggy from '../assets/buggy.png'
import loot from '../assets/loot.png'
import { Arrow, Play } from './Icons'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden gradient-hero pt-28 pb-36 lg:pt-32 lg:pb-48">
      {/* dotted texture + watermarks + accents */}
      <div className="pointer-events-none absolute inset-0">
        <span className="watermark absolute left-4 top-28 text-5xl sm:text-7xl">MAX FPS</span>
        <span className="watermark absolute left-10 top-44 text-3xl sm:text-4xl">FPS BOOST</span>
        <span className="watermark absolute right-8 top-72 text-4xl sm:text-6xl">LOW PING</span>
        <span className="watermark absolute bottom-44 right-1/4 text-3xl sm:text-5xl">AUTO-TUNE</span>
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '26px 26px',
          }}
        />
        {/* orange squiggle accent */}
        <svg className="absolute left-[42%] top-24 hidden w-28 text-orange lg:block" viewBox="0 0 120 40" fill="none">
          <path d="M2 20c8-16 16 16 24 0s16 16 24 0 16 16 24 0 16 16 24 0" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:px-8">
        {/* copy */}
        <div className="relative max-w-xl">
          {/* confetti accent */}
          <div className="mb-4 flex items-center gap-1.5">
            <span className="h-6 w-1.5 rotate-[20deg] rounded bg-orange" />
            <span className="h-3 w-1.5 rotate-[20deg] rounded bg-orange/70" />
          </div>
          <h1 className="font-display text-4xl font-extrabold uppercase leading-[1.05] text-white sm:text-5xl lg:text-[3.3rem]">
            Лучший буст
            <br />
            игр на рынке
            <br />
            <span className="text-orange-bright">без лагов!</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/85">
            Лучшие сборки на рынке, проверенные опытом и временем, а также
            оптимальное соотношение цены, надёжности и производительности.
          </p>
          <p className="mt-3 text-sm font-semibold text-white/90">
            Самая низкая цена за максимальный FPS
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-3 rounded-xl gradient-cta px-8 py-3.5 font-semibold text-white shadow-lg transition hover:brightness-105"
            >
              Купить
              <Arrow className="h-5 w-5 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-3 rounded-xl border border-white/40 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <Play className="h-4 w-4" />
              Посмотреть видео
            </a>
          </div>
        </div>

        {/* buggy render */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-full bg-white/10 blur-3xl" />
          <img
            src={buggy}
            alt="Игровой транспорт"
            className="animate-floaty relative w-full max-w-2xl drop-shadow-2xl"
          />
        </div>
      </div>

      {/* loot on mobile */}
      <img
        src={loot}
        alt="Игровой инвентарь"
        className="relative z-10 mx-auto mt-8 block w-72 max-w-full drop-shadow-2xl lg:hidden"
      />

      {/* bottom wave */}
      <div className="absolute inset-x-0 bottom-0 leading-[0]">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="h-[70px] w-full sm:h-[110px]">
          <path
            fill="#ffffff"
            d="M0,64 C240,120 480,16 720,40 C960,64 1200,128 1440,72 L1440,120 L0,120 Z"
          />
        </svg>
      </div>

      {/* loot sitting low, overlapping the wave (desktop) */}
      <img
        src={loot}
        alt="Игровой инвентарь"
        className="animate-floaty pointer-events-none absolute -bottom-2 left-6 z-20 hidden w-[26rem] max-w-full drop-shadow-2xl lg:block xl:left-12"
      />
    </section>
  )
}

import { useState } from 'react'

const controls = [
  { key: 'boost', label: 'Boost Mode' },
  { key: 'latency', label: 'Latency Guard' },
  { key: 'autotune', label: 'Auto-Tune' },
  { key: 'capture', label: 'Capture' },
]

export default function PhoneMock() {
  const [on, setOn] = useState({ boost: false, latency: false, autotune: false, capture: false })

  return (
    <div className="relative mx-auto w-[270px]">
      <div className="relative rounded-[2.6rem] border-[10px] border-[#1c1c22] bg-[#1c1c22] shadow-[0_34px_80px_-22px_rgba(20,50,90,0.55)]">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#8fd4ff] to-[#cfecff]">
          <div className="flex items-center justify-between px-6 pt-3 text-[11px] font-semibold text-[#1c2b3a]">
            <span>10:47</span>
            <span className="flex items-center gap-1">••• LTE</span>
          </div>
          <div className="mx-auto mt-1 h-5 w-28 rounded-b-2xl bg-[#1c1c22]" />

          <div className="px-4 pb-6 pt-4">
            <div className="rounded-2xl bg-white p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl gradient-hero font-display text-lg font-extrabold text-white">
                  G
                </div>
                <div className="flex-1">
                  <p className="font-display text-base font-extrabold text-ink">GameBoost</p>
                  <p className="text-[11px] text-ink-soft">Запустите игру для активации</p>
                </div>
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
              </div>

              <div className="mt-4 space-y-2.5">
                {controls.map((c) => (
                  <div key={c.key} className="flex items-center justify-between rounded-xl bg-blue px-4 py-3">
                    <span className="text-sm font-semibold text-white">{c.label}</span>
                    <button
                      onClick={() => setOn((s) => ({ ...s, [c.key]: !s[c.key] }))}
                      className={`relative h-6 w-11 rounded-full transition ${on[c.key] ? 'bg-orange' : 'bg-white/40'}`}
                      aria-pressed={on[c.key]}
                      aria-label={c.label}
                    >
                      <span
                        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${on[c.key] ? 'left-[1.45rem]' : 'left-0.5'}`}
                      />
                    </button>
                  </div>
                ))}
              </div>

              <button className="mt-4 w-full text-center text-sm font-bold text-blue">Настройки</button>
            </div>

            <div className="mt-3 rounded-2xl bg-white py-3 text-center text-sm font-bold text-blue shadow">
              Отменить
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 px-4 pb-5">
            {['#34c759', '#0a84ff', '#8e8e93', '#ff9f0a'].map((c, i) => (
              <span key={i} className="h-9 w-9 rounded-xl" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

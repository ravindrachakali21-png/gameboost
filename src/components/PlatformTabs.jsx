const Win = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 5.5 10.5 4.5V11.2H3zM10.5 12.8V19.5L3 18.5V12.8zM12.2 4.2 21 3v8.2h-8.8zM21 12.8V21l-8.8-1.2v-7z" />
  </svg>
)
const Andr = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 9.5h12V17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zM4.4 9.6c.7 0 1.2.6 1.2 1.3v4.3a1.25 1.25 0 1 1-2.5 0v-4.3c0-.7.6-1.3 1.3-1.3zm15.2 0c.7 0 1.3.6 1.3 1.3v4.3a1.25 1.25 0 1 1-2.5 0v-4.3c0-.7.5-1.3 1.2-1.3zM8 18.4h2.2V21a1 1 0 1 1-2.2 0zm5.8 0H16V21a1.1 1.1 0 0 1-2.2 0zM7.7 8.3C8 6.3 9.8 4.8 12 4.8s4 1.5 4.3 3.5zM9.3 6.6a.55.55 0 1 0 0-1.1.55.55 0 0 0 0 1.1zm5.4 0a.55.55 0 1 0 0-1.1.55.55 0 0 0 0 1.1z" />
  </svg>
)
const Appl = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16.3 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.8-3.5.8s-1.8-.8-3-.8c-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-1.1 2.8-2.2c.9-1.3 1.2-2.5 1.3-2.6-.1 0-2.5-1-2.5-3.8zM14 5.6c.6-.8 1-1.9.9-3-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-.9 2.9 1 0 2.1-.5 2.7-1.3z" />
  </svg>
)

const tabs = [
  { id: 'windows', label: 'Windows', Icon: Win, color: 'text-[#0078d7]' },
  { id: 'android', label: 'Android', Icon: Andr, color: 'text-[#3ddb84]' },
  { id: 'ios', label: 'iOS', Icon: Appl, color: 'text-ink' },
]

export default function PlatformTabs({ active, onChange }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-2xl bg-white p-2 shadow-[var(--shadow-soft)]">
      {tabs.map(({ id, label, Icon, color }) => {
        const isActive = active === id
        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
              isActive ? 'gradient-hero text-white shadow-md' : 'text-ink-soft hover:bg-sky'
            }`}
          >
            <Icon className={`h-4 w-4 ${isActive ? 'text-white' : color}`} />
            {label}
          </button>
        )
      })}
    </div>
  )
}

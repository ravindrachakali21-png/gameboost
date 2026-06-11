export default function SectionHeading({ children, light = false, center = true }) {
  return (
    <div className={`${center ? 'text-center' : ''} mb-10`}>
      <div className={`mb-3 flex items-center gap-1.5 ${center ? 'justify-center' : ''}`}>
        <span className="h-1.5 w-6 rounded-full bg-orange" />
        <span className="h-1.5 w-3 rounded-full bg-orange/50" />
      </div>
      <h2
        className={`font-display text-3xl font-extrabold uppercase tracking-tight sm:text-4xl ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {children}
      </h2>
    </div>
  )
}

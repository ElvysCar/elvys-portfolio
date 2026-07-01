type SectionTitleProps = {
  label: string
  title: string
  description?: string
}

function SectionTitle({ label, title, description }: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        {label}
      </p>

      <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-slate-300">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionTitle
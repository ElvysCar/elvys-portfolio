import type { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: "primary" | "secondary"
  external?: boolean
}

function Button({
  children,
  href = "#",
  variant = "primary",
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition"

  const variants = {
    primary: "bg-cyan-400 text-slate-950 hover:bg-cyan-300",
    secondary:
      "border border-slate-700 text-slate-200 hover:border-cyan-400 hover:text-cyan-400",
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </a>
  )
}

export default Button
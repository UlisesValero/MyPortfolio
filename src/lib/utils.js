import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'


export const scroll = (target) => {
  const el = document.getElementById(target)
  if (el) {
    el.scrollIntoView({ behavior: "smooth" })
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

export const cn = (...inputs) => {
  return twMerge(clsx(inputs))
}

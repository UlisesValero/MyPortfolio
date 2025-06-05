import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'


export const scroll = (target) => {
  document.getElementById(`${target}`).scrollIntoView({
    behavior: "smooth"
  })
}

export const cn = (...inputs) => {
  return twMerge(clsx(inputs))
}

import { Pathnames } from 'next-intl/navigation'

export const locales = ['ru', 'en', 'lv'] as const

export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/pathnames': {
    en: '/pathnames',
    lv: '/pathnames',
    ru: '/pathnames',
  },
} satisfies Pathnames<typeof locales>

export const localePrefix = undefined

export type AppPathnames = keyof typeof pathnames

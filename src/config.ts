import { Pathnames } from 'next-intl/navigation'

export const locales = ['en', 'lv', 'ru'] as const

export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
}

export const localePrefix = undefined

export type AppPathnames = keyof typeof pathnames

import createMiddleware from 'next-intl/middleware'
import { pathnames, locales, localePrefix } from './config'

export default createMiddleware({
  defaultLocale: 'lv',
  locales,
  pathnames,
  localePrefix,
})

export const config = {
  matcher: ['/', '/(ru|en|lv)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
}

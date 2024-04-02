import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

import { Toaster } from 'react-hot-toast'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Test',
  description: 'Created by Arnolds',
}

const locales = ['en', 'lv', 'ru']

interface RootLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  if (!locales.includes(locale)) {
    notFound()
    return null
  }

  unstable_setRequestLocale(locale)

  const messages = await import(`../../../messages/${locale}.json`).then(
    (mod) => mod.default
  )

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale}>
        <body className={manrope.className}>
          <Toaster position="bottom-center" />
          {children}
        </body>
      </html>
    </NextIntlClientProvider>
  )
}

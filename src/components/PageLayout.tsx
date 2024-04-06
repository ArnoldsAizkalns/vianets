import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'
import Navigation from './Navigation/Navigation'
import Footer from './Footer'

type Props = {
  children?: ReactNode
}

export default function PageLayout({ children }: Props) {
  const t = useTranslations('')

  return (
    <div>
      <header>
        <a href="/">
          <h1 className="lg:hidden flex font-medium text-2xl pt-5 leading-6 text-black justify-center">
            Lovely Eco House
          </h1>
        </a>
        <Navigation />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

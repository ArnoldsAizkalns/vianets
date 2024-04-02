import Navigation from '@/components/Navigation/Navigation'
import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'
import Footer from '../../../components/Footer'

type Props = {
  children?: ReactNode
}

export default function PageLayout({ children }: Props) {
  const t = useTranslations('')

  return (
    <div>
      <header>
        <h1 className="md:hidden flex font-medium text-2xl pt-3 leading-5 text-black justify-center">
          Lovely Eco House
        </h1>
        <Navigation />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

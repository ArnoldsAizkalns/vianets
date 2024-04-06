'use client'
import Link from 'next/link'
import Mobile from './Mobile'
import LocaleSwitcher from '../LocaleSwitcher'
import { useTranslations } from 'next-intl'
import { Roboto_Condensed } from 'next/font/google'
import { AiFillPhone } from 'react-icons/ai'

const rob = Roboto_Condensed({
  weight: '800',
  subsets: ['latin'],
})
export default function Navigation() {
  const t = useTranslations('Navigation')

  const menu = [
    { title: t('about'), path: '/' },
    { title: t('sip panels'), path: '/sippanels' },
    { title: t('Mobile House'), path: '/mobhome' },
    { title: t('projects'), path: '/projects' },
    { title: t('forClients'), path: '/offer' },
    { title: t('contact'), path: '/contact' },
  ]

  return (
    <nav className="sticky w-full bg-white py-5 ">
      <div className="max-w-screen-2xl px-4 md:px-6 mx-auto flex items-center justify-between">
        <div className="block flex-none lg:hidden">
          <Mobile />
        </div>
        <Link href="/" className="hidden lg:block">
          <h1 className={`${rob.className} text-2xl font-bold tracking-wider`}>
            Lovely Eco House
          </h1>
        </Link>
        <div className="flex items-center">
          <div className="flex justify-center gap-4 w-full ">
            {menu.length ? (
              <ul className="hidden gap-3 xl:gap-6 lg:flex md:items-center">
                {menu.map(({ title, path }) => (
                  <li key={title}>
                    <Link
                      href={path}
                      className="uppercase hover:text-[#211c1d] text-neutral-500 font-semibold text-[12px] xl:text-xs"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
        <div className="block lg:hidden">
          <h1 className="text-3xl pr-6">
            <a
              className="flex justify-center items-center gap-2"
              href="tel:+37129716973"
            >
              <AiFillPhone className="text-lg" />
              <p> +371 29716973</p>
            </a>
          </h1>
        </div>
        <LocaleSwitcher />
      </div>
    </nav>
  )
}

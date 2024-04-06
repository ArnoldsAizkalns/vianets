'use client'
import Link from 'next/link'
import { BsFacebook } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import { AiFillInstagram, AiFillPhone } from 'react-icons/ai'
import { useTranslations } from 'next-intl'
import { Roboto_Condensed } from 'next/font/google'
import LocaleSwitcher from './LocaleSwitcher'

const rob = Roboto_Condensed({
  weight: '800',
  subsets: ['latin'],
})
export default function Footer() {
  const t = useTranslations('Navigation')

  const menu = [
    { title: t('about'), path: '/' },
    { title: t('sip panels'), path: '/sippanels' },
    { title: t('Mobile House'), path: '/mobhome' },
    { title: t('projects'), path: '/projects' },
    { title: t('forClients'), path: '/forClients' },
    { title: t('contact'), path: '/contact' },
  ]
  const docs = [
    { title: t('rights'), path: '/' },
    { title: t('privacy'), path: '/privacy' },
  ]

  return (
    <nav className="sticky w-full pt-10 bg-white pb-5 md:py-6 ">
      <div className="max-w-screen-2xl px-4 md:px-6 mx-auto flex items-center justify-between">
        <Link href="/" className="hidden lg:block services-container-1">
          <h1 className={`${rob.className} text-2xl font-bold tracking-wider`}>
            Lovely Eco House
          </h1>
        </Link>
        <div className="flex items-center">
          <div className="flex justify-center gap-4 w-full ">
            {menu.length ? (
              <ul className="hidden gap-3 xl:gap-6 lg:flex lg:justify-center md:items-center">
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
        <div className="block w-full lg:hidden">
          <h1 className="text-3xl leading-3 max-w-[180px] pr-6">
            <a
              className="flex justify-between items-center "
              href="tel:+37129716973"
            >
              <AiFillPhone className="text-lg" />
              <p> +371 29716973</p>
            </a>
          </h1>
        </div>
        <div className="services-container-1">
          <div className="flex gap-3 justify-end">
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
              >
                <AiFillInstagram size={20} />
              </a>
            </span>
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={process.env.NEXT_PUBLIC_FACEBOOK_URL}
              >
                <BsFacebook size={18} />
              </a>
            </span>
            <span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={process.env.NEXT_PUBLIC_TIKTOK_URL}
              >
                <FaTiktok size={16} />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="border-t mx-auto border-neutral-400 w-full border-dashed my-5"></div>
      <div className="pb-5">
        <div className="flex justify-center gap-5 w-full ">
          {docs.length ? (
            <ul className="gap-6 md:flex text-center md:items-center">
              {docs.map(({ title, path }) => (
                <li key={title}>
                  <Link
                    href={path}
                    className="uppercase hover:text-[#211c1d] text-neutral-500 font-semibold text-xs"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </nav>
  )
}

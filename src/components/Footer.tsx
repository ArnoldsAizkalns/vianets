'use client'
import Link from 'next/link'
import { BsFacebook } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { useTranslations } from 'next-intl'
import { Roboto_Condensed } from 'next/font/google'

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
    { title: t('contact'), path: '/contact' },
  ]
  const docs = [
    { title: t('rights'), path: '/' },
    { title: t('privacy'), path: '/privacy' },
  ]

  return (
    <div className="pt-12 ">
      <div className="max-w-screen-2xl px-4 md:px-6 mx-auto flex items-center justify-between">
        <Link href="/" className="block  services-container-1">
          <h1
            className={`${rob.className} text-2xl min-w-[300px] font-bold tracking-wider`}
          >
            Lovely Eco House
          </h1>
        </Link>
        <div className="flex items-center">
          <div className="flex justify-center gap-2 lg:gap-4 w-full ">
            {menu.length ? (
              <ul className="hidden gap-2 lg:gap-6 lg:flex md:items-center">
                {menu.map(({ title, path }) => (
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
        <div className="services-container-1">
          <div className="flex gap-3 justify-end">
            <span>
              <a href="/">
                <AiFillInstagram size={20} />
              </a>
            </span>
            <span>
              <a href="/">
                <BsFacebook size={18} />
              </a>
            </span>
            <span>
              <a href="/">
                <FaTiktok size={16} />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="border-t mx-auto border-neutral-400 w-full border-dashed my-6"></div>
      <div className="pb-6">
        <div className="flex justify-center gap-4 w-full ">
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
    </div>
  )
}

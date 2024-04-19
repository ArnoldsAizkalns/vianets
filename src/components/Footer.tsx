'use client'
import Link from 'next/link'
import { BsFacebook } from 'react-icons/bs'
import { FaTelegram, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { AiFillInstagram, AiFillPhone } from 'react-icons/ai' // Импорт всех иконок из одного файла (предполагается, что вы объедините их)
import { useTranslations } from 'next-intl'
import LocaleSwitcher from './LocaleSwitcher'

export default function Footer() {
  const t = useTranslations('Navigation')

  const docs = [{ title: t('privacy'), path: '/privacy' }]

  return (
    <nav className="sticky w-full pt-10 bg-white pb-5">
      <div className="max-w-screen-2xl px-4 md:px-6 mx-auto flex items-center justify-between">
        <div className="flex min-w-[200px] gap-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
          >
            <AiFillInstagram size={24} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={process.env.NEXT_PUBLIC_FACEBOOK_URL}
          >
            <BsFacebook size={22} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={process.env.NEXT_PUBLIC_TIKTOK_URL}
          >
            <FaTiktok size={20} />
          </a>
        </div>

        <div className="hidden lg:flex justify-center items-center">
          <h1 className="text-2xl font-bold tracking-wider">
            Lovely Eco House
          </h1>
        </div>

        <div className="flex items-center min-w-[200px] gap-3">
          <a href="https://wa.me/+37129716973">
            <FaWhatsapp className="text-xl duration-100 hover:scale-125" />
          </a>
          <a href="https://web.telegram.org/k/#@tinyhouseeu">
            <FaTelegram className="text-xl duration-100 hover:scale-125" />
          </a>
          <a href="tel:+37129716973">
            <p className="duration-100 hover:scale-110">+371 29716973</p>
          </a>
        </div>
      </div>
      <div className="border-t mx-auto border-neutral-400 w-full border-dashed my-5"></div>
      <div className="pb-5 flex items-center justify-center">
        <div className="text-neutral-500 font-semibold text-sm">
          {t('rights')}
        </div>
        {docs.length && (
          <ul className="ml-6 flex text-neutral-500 font-semibold text-xs">
            {docs.map(({ title, path }) => (
              <li key={title}>
                <Link href={path} className="uppercase hover:text-[#211c1d]">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}

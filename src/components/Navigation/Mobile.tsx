// Исправленный файл MobileMenu.tsx

import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation' // Исправлен импорт
import { Fragment, useEffect, useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTranslations } from 'next-intl'
import { FaTiktok } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'

interface Menu {
  title: string
  path: string
}

export default function MobileMenu() {
  const t = useTranslations('Navigation')
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const openMobileMenu = () => setIsOpen(true)
  const closeMobileMenu = () => setIsOpen(false)

  const menu: Menu[] = [
    { title: t('about'), path: '/' },
    { title: t('sip panels'), path: '/sippanels' },
    { title: t('Mobile House'), path: '/mobhome' },
    { title: t('projects'), path: '/projects' },
    { title: t('forClients'), path: '/offer' },
    { title: t('contact'), path: '/contact' },
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <button
        onClick={openMobileMenu}
        aria-label="Open mobile menu"
        className="flex h-11 w-11 items-center justify-center rounded-md  text-xl lg:hidden"
      >
        <Bars3Icon className="h-7 " />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeMobileMenu} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-700"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-700"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-[#45464c]" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-700"
            enterFrom="translate-x-[-100%]"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-700"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-[-100%]"
          >
            <Dialog.Panel className="fixed bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-gradient-to-b from-[#45464c] to-[#45464c]">
              <div className="p-4 pt-12">
                <div className="flex justify-between items-center">
                  <button
                    className="mb-4 flex h-11 w-11 items-center justify-center border-neutral-200 text-[#45464c] transition-colors dark:border-neutral-700 dark:text-white"
                    onClick={closeMobileMenu}
                    aria-label="Close mobile menu"
                  >
                    <XMarkIcon color="white" className="h-7 text-white" />
                  </button>
                  <a href="/">
                    <h1 className="text-white text-2xl mb-4">
                      Lovely Eco House
                    </h1>
                  </a>
                </div>
                <div className="mb-4 w-full border-t"></div>
                {menu.length ? (
                  <ul className="flex gap-2 w-full flex-col">
                    {menu.map((item: Menu) => (
                      <li
                        className={`py-2 text-xl ${
                          pathname === item.path
                            ? 'text-neutral-600'
                            : 'text-white'
                        } transition-colors hover:text-neutral-600`}
                        key={item.title}
                      >
                        <Link href={item.path} onClick={closeMobileMenu}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <div className="mt-4 mb-4 w-full border-t"></div>
                <div>
                  <div className="flex gap-5 justify-end items-center  text-white">
                    <span>
                      <a
                        href={process.env.NEXT_PUBLIC_INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AiFillInstagram size={30} />
                      </a>
                    </span>
                    <span>
                      <a
                        href={process.env.NEXT_PUBLIC_FACEBOOK_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsFacebook size={24} />
                      </a>
                    </span>
                    <span>
                      <a
                        href={process.env.NEXT_PUBLIC_TIKTOK_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTiktok size={24} />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}

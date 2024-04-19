'use client'
import { useTranslations } from 'next-intl'
import React from 'react'
import Image from 'next/image'

export default function MainTitleSection() {
  const t = useTranslations('MainTitleSection')

  return (
    <div className="max-w-screen-2xl h-auto mx-auto md:pb-12 pt-5 md:pt-20 lg:pt-32">
      <div className="px-4 md:px-6 pb-10 md:pb-[65px]">
        <div className="lg:text-6xl tracking-[-0.05em] md:tracking-[-0.05em] font-medium md:text-5xl text-4xl">
          Производство и
        </div>
        <div className="">
          <div className="lg:text-6xl tracking-[-0.05em] md:tracking-[-0.05em] font-medium md:text-5xl text-4xl ">
            строительство из SIP панелей
          </div>
        </div>
      </div>
      <div className="px-4 md:px-6">
        <Image alt="" src="/sip-house.1.jpg" width={1536} height={0}></Image>
      </div>
    </div>
  )
}

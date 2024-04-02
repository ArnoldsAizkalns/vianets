'use client'
import { useTranslations } from 'next-intl'
import React from 'react'
import Image from 'next/image'

export default function MainTitleSection() {
  const t = useTranslations('MainTitleSection')

  return (
    <div className="max-w-screen-2xl h-auto mx-auto space-y-12 py-10 md:pt-20">
      <div className="px-4 md:px-6">
        <div className="lg:text-[112px] tracking-[-0.05em] md:tracking-[-0.05em] font-medium md:text-5xl text-4xl">
          Производство и
        </div>
        <div className="">
          <div className="lg:text-[112px] tracking-[-0.05em] md:tracking-[-0.05em] font-medium md:text-5xl text-4xl ">
            строительство из
          </div>
          <div className="lg:text-[112px] tracking-[-0.05em] md:tracking-[-0.05em] font-medium md:text-5xl text-4xl ">
            SIP панелей
          </div>
        </div>
      </div>
      <div className="px-4 md:px-6">
        <Image alt="" src="/sip-house.jpg" width={1536} height={0}></Image>
      </div>
    </div>
  )
}

'use client'
import React, { useEffect, useState } from 'react'
import ContactForm from '../../../components/ContactForm'
import { useTranslations } from 'next-intl'
import Credentials from '@/components/Credentials'
import { useSearchParams } from 'next/navigation'

export default function ContactPage() {
  const [specialOffer, setSpecialOffer] = useState(false)
  const t = useTranslations('Footer')
  const [searchParams] = useSearchParams()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search)
      const offer = searchParams.get('specialOffer') === 'true'
      console.log('Special offer from URL set to:', offer)
      setSpecialOffer(offer)
    }
  }, [])

  return (
    <div className="pt-5 md:pt-20 lg:pt-40 max-w-screen-2xl mx-auto px-4 md:px-6">
      <div className="md:pb-20">
        <div className="pb-5">
          <h1 className="lg:text-6xl tracking-[-0.05em] md:tracking-[-0.05em] font-medium md:text-5xl text-4xl">
            Контакты
          </h1>
        </div>

        <div className="border-t mx-auto border-[#45464c] w-full border-dashed md:mt-5 pb-5 md:pb-10"></div>

        <div className="flex md:flex-row flex-col">
          <div className="pb-5 md:pb-0 services-container-1">
            <h3>Подскажем</h3>
          </div>
          <div className="flex-auto services-container-2">
            <p className=" font-semibold text-[22px] md:w-4/5">
              Расскажите нам о своей задаче и мы с удовольствием возьмёмся за ее
              решение. Заполните контактную форму и с Вами в ближайшее время
              свяжется наш менеджер.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="services-container-1 hidden lg:flex "></div>
        <div className="services-container-2 items-center lg:items-start gap-10 lg:flex-row flex flex-col ">
          <div className="max-w-[480px] py-10 md:py-0 w-full">
            <ContactForm specialOffer={specialOffer} />
          </div>
          <div className="max-w-[480px] w-full">
            <Credentials />
          </div>
        </div>
      </div>

      <div className="flex pb-10 justify-center lg:justify-start">
        <div className="services-container-1 hidden lg:flex"></div>
        <div className="pt-20 services-container-2 max-w-[480px] font-semibold">
          <div className="flex justify-between">
            <h3 className="">Название</h3>
            <h3 className="font-normal">SIA &ldquo;Vianets&ldquo;</h3>
          </div>
          <div className="border-t mx-auto border-neutral-200"></div>
          <div className="mx-auto flex justify-between gap-2 mt-3">
            <h3>Рег. номер:</h3>
            <h3 className="font-normal">40003545789</h3>
          </div>
          <div className="border-t mx-auto border-neutral-200"></div>
          <div className="mx-auto flex justify-between items-end gap-2 mt-3">
            <h3>Номер налогоплельщика:</h3>
            <h3 className="font-normal">LV40003545789</h3>
          </div>

          <div className="border-t mx-auto border-neutral-200"></div>
          <div className="mx-auto flex  justify-between gap-2 mt-3">
            <h3>Адресс:</h3>
            <h3 className=" font-normal">Slokas 201-14, Riga</h3>
          </div>
          <div className="border-t mx-auto border-neutral-200"></div>
        </div>
      </div>
    </div>
  )
}

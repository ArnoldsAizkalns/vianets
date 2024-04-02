'use client'
import React from 'react'
import ContactForm from '../../../components/ContactForm'
import { useTranslations } from 'next-intl'
import Credentials from '@/components/Credentials'

export default function ContactPage() {
  const t = useTranslations('Footer')

  return (
    <div className="pt-12 md:pt-24 pb-12 max-w-screen-2xl mx-auto px-4 md:px-6">
      <div className="md:pb-24 pb-12">
        <div className="pb-6">
          <h1 className="text-4xl md:text-[96px]">Contacts</h1>
        </div>

        <div className="border-t mx-auto border-[#45464c] w-full border-dashed mt-4 mb-8"></div>

        <div className="flex md:flex-row flex-col">
          <div className="pb-6 md:pb-0 services-container-1">
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
        <div className="services-container-2 items-center lg:items-start gap-12 lg:flex-row flex flex-col ">
          <div className="max-w-[480px] w-full">
            <ContactForm />
          </div>
          <div className="max-w-[480px] w-full">
            <Credentials />
          </div>
        </div>
      </div>

      <div className="flex justify-center lg:justify-start">
        <div className="services-container-1 hidden lg:flex"></div>
        <div className="pt-12 services-container-2 max-w-[480px] font-semibold">
          <h3 className="mx-auto">SIA &ldquo;Vianets&ldquo;</h3>
          <div className="border-t mx-auto border-[#45464c]"></div>
          <div className="mx-auto flex justify-between gap-2 mt-3">
            <h3>Рег. номер:</h3>
            <h3 className=" font-normal">40003545789</h3>
          </div>
          <div className="border-t mx-auto border-[#45464c]"></div>
          <div className="mx-auto flex  justify-between items-end gap-2 mt-3">
            <h3>Номер налогоплельщика:</h3>
            <h3 className="font-normal">LV40003545789</h3>
          </div>

          <div className="border-t mx-auto border-[#45464c]"></div>
          <div className="mx-auto flex  justify-between gap-2 mt-3">
            <h3>Адресс:</h3>
            <h3 className=" font-normal">Slokas 201-14, Riga</h3>
          </div>
          <div className="border-t mx-auto border-[#45464c]"></div>
        </div>
      </div>
    </div>
  )
}

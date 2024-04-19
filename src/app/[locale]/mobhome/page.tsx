import Slider from '@/components/Slider'
import Image from 'next/image'
import React from 'react'

export default function MobileHousePage() {
  return (
    <div className="pt-5 md:pt-20 lg:pt-40 max-w-screen-2xl mx-auto px-4 md:px-6">
      <div className="pb-5">
        <div className="md:pb-5">
          <h1 className="lg:text-6xl tracking-[-0.05em] md:tracking-[-0.05em] font-medium md:text-5xl text-4xl">
            Мобильные дома
          </h1>
        </div>
      </div>

      <div className="border-t mx-auto border-neutral-400 w-full border-dashed pt-4 md:pt-8"></div>

      <div className="md:pb-5 pt-5">
        <div className="flex flex-col md:flex-row pb-5">
          <p className="services-container-1"></p>
          <div className="services-container-2 font-semibold ">
            <div className="flex items-center">
              <h2 className="text-[32px] md:text-[44px]">5</h2>
              <h3 className="pl-1 text-[25px] md:text-[40px]">
                - Причин выбрать
              </h3>
            </div>
            <div className="text-[25px] md:text-[40px]">мобильный дом</div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row ">
          <div className="services-container-1 pb-5 md:pb-0">
            <h3>Комфорт</h3>
          </div>
          <div className="services-container-2 md:pb-0">
            <p className="pb-[0.625rem]">
              1. Не требуется разрешение на строительство. Можно ставить везде,
              даже, где нельзя строить.
            </p>
            <p className="pb-[0.625rem]">
              2. Универсальность использования. Можно жить в одном месте или
              путешествовать. Получена сертификация на ЕС в дирекции
              безопасности дорожного движения как жилое транспортное средство.
            </p>
            <p className="pb-[0.625rem]">
              3. Отсутствие коммунальных платежей.
            </p>
            <p className="pb-[0.625rem]">
              4. Стоимость. Мобильные дома - дешевле обычных домов.
            </p>
            <p className="pb-[0.625rem]">
              5. Оптимален для организации кемпингов, глэмпингов или отелей
              модульного типа.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row pt-10 pb-5">
          <p className="services-container-1"></p>
          <div className="services-container-2 font-semibold ">
            <div className="flex items-center">
              <h3 className="pl-1 text-[25px] md:text-[40px]">
                В сравнении с кемперами наши мобильные домики
              </h3>
            </div>
            <div className="text-[25px] md:text-[40px]">
              имеют следующие преимущества:
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row ">
          <div className="services-container-1 pb-5 md:pb-0">
            <h3>Универсальность</h3>
          </div>
          <div className="services-container-2 md:pb-0">
            <p className="pb-[0.625rem]">
              1. Можно жить зимой при температуре до -30 градусов.
            </p>
            <p className="pb-[0.625rem]">
              2. Унивесальность подключений (канализация, вода и электричество).
              Можно использовать постоянные коммуникации или быть полностью
              автономным.
            </p>
            <p className="pb-[0.625rem]">
              3. Высота потолка как в квартире. Оптимально для людей с высоким
              ростом или болеющих клаустрофобией.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="hidden md:block services-container-1"></div>
          <div className="pt-5 services-container-2 flex">
            <div></div>
            <Image
              className="border "
              src="/plan.jpg"
              width={1200}
              height={0}
              alt={''}
            />
          </div>
        </div>
      </div>
      <Slider isMobile={false} isTablet={false} isDesktop={false} />
    </div>
  )
}

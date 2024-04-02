import Slider from '@/components/Slider'
import Image from 'next/image'
import React from 'react'

export default function MobileHousePage() {
  return (
    <div className="pt-12 md:pt-24 max-w-screen-2xl mx-auto px-4 md:px-6">
      <div className=" pb-12">
        <div className="pb-2 md:pb-6">
          <h1 className="text-4xl md:text-[96px]">Мобильные дома</h1>
        </div>
        <div className="border-t mx-auto border-neutral-400 w-full border-dashed mt-4 mb-4 md:mb-8"></div>
      </div>

      <div className="">
        <div className="flex flex-col md:flex-row pb-6">
          <p className="services-container-1"></p>
          <div className="services-container-2 font-semibold ">
            <div className="flex items-center">
              <h2 className="text-[36px] md:text-[44px]">5</h2>
              <h3 className="pl-1 text-[30px] md:text-[40px]">
                - Причин выбрать
              </h3>
            </div>
            <div className="text-[30px] md:text-[40px]">мобильный дом</div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row pb-6">
          <div className="services-container-1 pb-6 md:pb-0">
            <h3>Надёжность</h3>
          </div>
          <div className="services-container-2 pb-6 md:pb-0">
            <p className="pb-2">
              1. Не требуется разрешение на строительство. Можно ставить везде,
              даже, где нельзя строить.
            </p>
            <p className="pb-2">
              2. Универсальность использования. Можно жить в одном месте или
              путешествовать. Получена сертификация на ЕС в дирекции
              безопасности дорожного движения как жилое транспортное средство.
            </p>
            <p className="pb-2">3. Отсутствие коммунальных платежей.</p>
            <p className="pb-2">
              4. Стоимость. Мобильные дома - дешевле обычных домов.
            </p>
            <p className="pb-2">
              5. Оптимален для организации кемпингов, глэмпингов или отелей
              модульного типа.
            </p>
            <h3 className="font-semibold text-[22px] pt-2 pb-2">
              В сравнении с кемперами наши мобильные домики имеют следующие
              преимущества:
            </h3>
            <p className="pb-2">
              1. Можно жить зимой при температуре до -30 градусов.
            </p>
            <p className="pb-2">
              2. Унивесальность подключений (канализация, вода и электричество).
              Можно использовать постоянные коммуникации или быть полностью
              автономным.
            </p>
            <p className="pb-2">
              3. Высота потолка как в квартире. Оптимально для людей с высоким
              ростом или болеющих клаустрофобией.
            </p>
            <div className="pt-4">
              <Image
                className="border"
                src="/plan.jpg"
                width={1200}
                height={0}
                alt={''}
              />
              <p>Планировка</p>
            </div>
          </div>
        </div>
      </div>
      <Slider isMobile={false} isTablet={false} isDesktop={false} />

      <div className="pt-12  pb-12">
        <div className="flex pb-6">
          <div className="services-container-1 hidden md:flex"></div>
          <h2 className="services-container-2 text-[36px] md:text-[48px] leading-tight font-semibold">
            Строительство мобильных домов
          </h2>
        </div>
        <div className="flex flex-col md:flex-row pb-6 md:pb-0">
          <div className="flex-1 pb-6">
            <h3>Создание</h3>
          </div>
          <div className="flex-auto md:w-[24.5%]">
            <p className="text-[22px] font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              aliquid molestiae libero ea ut nam eum quam cum labore. Optio eos
              rem deserunt quia
            </p>
          </div>
          <div className="flex-1"></div>
        </div>
        <div className="flex md:pt-[47px]">
          <div className="flex-1"></div>
          <p className="flex-auto md:w-[24.5%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nam,
            delectus autem deserunt illo, hic earum consectetur perferendis nemo
            facere impedit. Officiis aliquid excepturi vel dignissimos quod
            libero in! Quia.
          </p>
          <div className="flex-1"></div>
        </div>
        <div className="flex gap-4 pt-[47px]">
          <div className="flex-1 hidden md:flex"></div>
          <div className="flex flex-col gap-1 flex-auto w-[51%]">
            <Image src="/manuf-sip.jpg" width={1200} height={0} alt={''} />
            <p>Создание</p>
          </div>
        </div>
      </div>
    </div>
  )
}

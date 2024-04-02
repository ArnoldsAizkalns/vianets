import Image from 'next/image'
import React from 'react'

export default function AboutPage() {
  return (
    <div className="pt-12 md:pt-24 max-w-screen-2xl mx-auto px-4 md:px-6">
      <div className="pb-32">
        <div className="pb-6">
          <h1 className="text-4xl md:text-[96px]">О нас</h1>
        </div>
        <div className="border-t mx-auto border-neutral-400 w-full border-dashed mt-4 mb-8"></div>
        <div className="flex md:flex-row flex-col">
          <div className="services-container-1 pb-6 md:pb-0 ">
            <h3>Предприятие</h3>
          </div>
          <div className="services-container-2">
            <p className="w-4/5">
              Наша компания предлагает производство высококачественных SIP
              панелей и строительство уютного жилья, включая мобильные и
              стационарные дома. Мы ценим инновации, экологичность и
              энергоэффективность, обеспечивая индивидуальный подход к каждому
              проекту. Наша команда профессионалов гарантирует высокое качество
              и долговечность, стремясь предложить идеальные решения для вашего
              дома.
            </p>
          </div>
        </div>
        <div className="pt-12">
          <Image
            src="/about/about-main.jpg"
            alt={'about'}
            width={1536}
            height={0}
          />
        </div>
      </div>

      <div className="flex pb-11">
        <h1 className="md:w-1/4"></h1>
        <h1 className=" flex-1">Наша команда</h1>
        <h1 className="md:flex-1"></h1>
        <h1 className="md:flex-1"></h1>
      </div>

      <div className="flex md:flex-row flex-col">
        <div className="flex-1 pb-6 md:pb-0">
          <h3>Коллектив</h3>
        </div>
        <div className="flex-auto md:w-[24.5%]">
          <p>
            В сердце нашего успеха лежат талантливые профессионалы, объединенные
            общей целью — создавать качественное и комфортное жилье. Наша
            команда состоит из опытных инженеров, архитекторов, дизайнеров и
            строителей, каждый из которых вносит неповторимый вклад в реализацию
            ваших мечтаний о доме.
          </p>
        </div>
        <div className="flex-1"></div>
      </div>

      <div className="flex gap-4 pt-[47px]">
        <div className="flex-1 hidden md:flex"></div>
        <div className="flex flex-col gap-1 flex-1">
          <Image src="/about/man1.jpg" width={500} height={0} alt={''} />
          <p>Имя, Фамилия</p>
          <p>Должность</p>
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <Image src="/about/man2.jpg" width={500} height={0} alt={''} />
          <p>Имя, Фамилия</p>
          <p>Должность</p>
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <Image src="/about/man3.jpg" width={500} height={0} alt={''} />
          <p>Имя, Фамилия</p>
          <p>Должность</p>
        </div>
      </div>

      <div className="py-24">
        <div className="flex pb-11">
          <div className="services-container-1 hidden md:flex"></div>
          <h3 className="text-[36px] md:text-[48px] font-semibold services-container-2">
            Наши ценности
          </h3>
        </div>
        <div className="flex flex-col md:flex-row pb-6 md:pb-0">
          <div className="flex-1 pb-6 md:pb-0">
            <h3>Для нас важно</h3>
          </div>
          <div className="flex-auto md:w-[24.5%]">
            <p className="text-[20px] font-semibold">
              В основе нашей работы — прозрачность, инновации, и устойчивое
              развитие. Ценим каждого клиента и мечту о доме.
            </p>
          </div>
          <div className="flex-1"></div>
        </div>
        <div className="flex pt-[47px]">
          <div className="flex-1"></div>
          <p className="flex-auto md:w-[24.5%]">
            Нам важно строить не только здания, но и отношения на основе доверия
            и уважения. Мы верим в инновации, экологичность и ответственность
            перед обществом и окружающей средой. Наши проекты отражают
            стремление к совершенству, уделяя внимание деталям и индивидуальным
            потребностям каждого клиента.
          </p>
          <div className="flex-1"></div>
        </div>
      </div>
    </div>
  )
}

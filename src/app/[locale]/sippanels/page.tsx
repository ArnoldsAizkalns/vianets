import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SipPanelPage() {
  return (
    <div className="pt-5 md:pt-20 lg:pt-40 max-w-screen-2xl mx-auto px-4 md:px-6">
      <div className="pb-5">
        <div className="md:pb-5">
          <h1 className="lg:text-6xl tracking-[-0.05em] md:tracking-[-0.05em] font-medium md:text-5xl text-4xl">
            СИП панели
          </h1>
        </div>
      </div>

      <div className="border-t mx-auto border-neutral-400 w-full border-dashed pt-5 md:mb-8"></div>

      <div className="flex">
        <div className="services-container-1 hidden md:flex"></div>
        <div className="services-container-2 flex gap-3">
          <div className="flex flex-col gap-1 services-container-3 ">
            <Image src="/sip.jpg" width={1000} height={0} alt={''} />
            <p>Качество</p>
          </div>
          <div className="flex flex-col gap-1  services-container-3">
            <Image src="/sip-factur.jpg" width={500} height={0} alt={''} />
            <p>Технология</p>
          </div>
        </div>
      </div>

      <div className="pt-20">
        <div className="flex flex-col md:flex-row pb-5">
          <p className="services-container-1"></p>
          <h2 className="services-container-2 text-[25px] md:text-[40px] leading-tight font-semibold">
            Основные технические параметры SIP панелей:
          </h2>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="services-container-1 pb-5 md:pb-0">
            <h3>Надёжность</h3>
          </div>
          <div className="services-container-2 md:pb-0">
            <p className="pb-5">
              Высота 2500 мм, Ширина 1250 мм, Площадь 3,125 м2
            </p>
            <p>
              Утеплитель - пенополистирол EPS 80, склеенный сертифицированным
              клеем производства Германии, с двумя листами OSB 3 по 12 мм.
            </p>
            <div className="mx-auto pt-5">
              <table>
                <thead>
                  <tr>
                    <th className="md:min-w-[200px] border border-black p-1">
                      Толщина мм
                    </th>
                    <th className="md:min-w-[200px] border border-black p-1">
                      Цена за 1 м2 EUR*
                    </th>
                    <th className="md:min-w-[200px] border border-black p-1">
                      Цена за панель EUR*
                    </th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td className="border border-black p-1">74</td>
                    <td className="border border-black p-1">24,32</td>
                    <td className="border border-black p-1">76</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-1">124</td>
                    <td className="border border-black p-1">30,08</td>
                    <td className="border border-black p-1">94</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-1">174</td>
                    <td className="border border-black p-1">35,52</td>
                    <td className="border border-black p-1">111</td>
                  </tr>
                  <tr>
                    <td className="border border-black p-1">224</td>
                    <td className="border border-black p-1">41,28</td>
                    <td className="border border-black p-1">129</td>
                  </tr>
                </tbody>
              </table>
              <p className="pt-5">*Все цены указаны с НДС</p>
              <p className="pt-5">
                Есть возможность заказать на нашем производстве SIP панели по
                Вашей спецификации, размерам или из Ваших материалов.
              </p>
              <div className="flex gap-3 pt-5 items-center">
                <p className="">Телефон для консультаций </p>
                <Link href="tel:+37129716973">+371 29716973.</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20 pb-10">
        <div className="flex flex-col md:flex-row pb-5">
          <h2 className="services-container-1"></h2>
          <h2 className="services-container-2 font-semibold text-[25px] md:text-[40px]">
            Тест на прочность наших SIP панелей.
          </h2>
        </div>
        <div className="flex flex-col  md:flex-row">
          <div className="services-container-1 pb-5 md:pb-0">
            <h3>Инновации</h3>
          </div>
          <div className="md:pb-0">
            <p className="pb-5 ">Оцените качество материала и безопасность</p>
          </div>
        </div>
        <div className="flex">
          <div className="services-container-1 hidden md:flex"></div>
          <video
            className="pt-5 services-container-2 mx-auto w-full"
            src="/"
            controls
          />
        </div>
      </div>
    </div>
  )
}

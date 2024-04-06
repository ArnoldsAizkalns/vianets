import Image from 'next/image'
import React from 'react'

export default function SipPanelPage() {
  return (
    <div className="pt-5 md:pt-20 max-w-screen-2xl mx-auto px-4 md:px-6">
      <div className="pb-4">
        <div className="md:pb-5">
          <h1 className="text-4xl md:text-[96px]">СИП панели</h1>
        </div>
      </div>

      <div className="border-t mx-auto border-neutral-400 w-full border-dashed pt-5  md:mb-8"></div>

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

      <div className="pt-10">
        <div className="flex flex-col md:flex-row pb-5">
          <p className="services-container-1"></p>
          <h2 className="services-container-2 text-[30px] md:text-[40px] leading-tight font-semibold">
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
              <p className="pt-5">Телефон для консультаций +371 29716973.</p>
            </div>
            <div className="pt-10 mx-auto md:w-1/2 text-center">
              <p>Это тест на прочность наших SIP панелей.</p>
              <div className="">
                <video className="pt-5 mx-auto w-full" src="/" controls />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 md:pt-20 pb-10">
        <div className="flex pb-5">
          <div className="services-container-1 hidden md:flex"></div>
          <h2 className="services-container-2 text-[30px] md:text-[40px] leading-tight font-semibold">
            Строительство домов из SIP панелей
          </h2>
        </div>
        <div className="flex flex-col md:flex-row pb-5 md:pb-0">
          <div className="flex-1 pb-5">
            <h3>Инновации</h3>
          </div>
          <div className="flex-auto md:w-[24.5%]">
            <p className="text-[20px] font-semibold">
              Строительство из SIP панелей предлагает ряд преимуществ, включая
              низкие затраты и высокую скорость возведения.
            </p>
          </div>
          <div className="flex-1"></div>
        </div>
        <div className="flex md:pt-5">
          <div className="flex-1"></div>
          <p className="flex-auto md:w-[24.5%]">
            Наши дома отличаются высокой энергоэффективностью благодаря
            энергосберегающим функциям панелей, которые удерживают тепло лучше,
            чем скандинавские каркасные дома, и предотвращают оседание изоляции.
            Возможность строительства в любое время года и долговечность
            конструкций делают наши дома оптимальным выбором для комфортного
            жилья.
          </p>
          <div className="flex-1"></div>
        </div>
        <div className="flex gap-4 pt-5">
          <div className="flex-1 hidden md:flex"></div>
          <div className="flex flex-col gap-1 flex-auto w-[51%]">
            <Image src="/sip-house.jpg" width={1200} height={0} alt={''} />
            <p>Строительство</p>
          </div>
        </div>
      </div>
    </div>
  )
}

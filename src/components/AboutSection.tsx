import Image from 'next/image'
import React from 'react'
import { useTranslations } from 'next-intl'

export default function AboutSection() {
  const t = useTranslations('AboutSection')

  return (
    <div id="about" className=" pb-10">
      <div className="bg-[#45464c] flex mt-10 w-full h-[200px] md:h-[180px]">
        <div className="text-white flex w-full justify-between">
          <div className="md:flex-row flex flex-col justify-between w-full items-center text-center">
            <div className="flex-1 flex-col flex items-center">
              <h2 className="font-thin text-[40px] sm:text-[48px]">10</h2>
              <p className="font-thin text-lg font-white ">Лет опыт работы</p>
            </div>
            <div className="flex-1 flex-col flex items-center">
              <h2 className="font-thin text-[40px] sm:text-[48px]">2000</h2>
              <p className="font-thin text-lg font-white">
                Выполненных проектов
              </p>
            </div>
          </div>
          <div className="md:flex-row flex flex-col justify-between w-full items-center text-center">
            <div className="flex-1 flex-col flex items-center">
              <h2 className="font-thin text-[40px] sm:text-[48px]">500</h2>
              <p className="font-thin text-lg font-white">
                Счастливых клиентов
              </p>
            </div>
            <div className="flex-1 flex-col flex items-center">
              <h2 className="font-thin text-[40px] sm:text-[48px]">50</h2>
              <p className="font-thin text-lg font-white">Членов команды</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10 max-w-screen-2xl mx-auto px-4 md:px-6">
        <div className="text-[25px] md:text-[40px] text-center">
          <h3 className="font-semibold ">
            Наша компания производит SIP панели, а также обеспечивает
            строительство из них любых утеплённых конструкций.
          </h3>
          <h3 className="font-semibold">
            В том числе мобильных (на колёсной платформе) и стационарных домов.
          </h3>
        </div>
        <div className="flex pt-8">
          <div className="font-medium flex flex-col gap-5">
            <div className="transition-colors duration-500 hover-box p-4">
              <h3 className="font-semibold text-lg pb-5">
                Преимущества технологии SIP панелей:
              </h3>
              <p>
                2. Эффективность и практичность:
                <br /> - есть много энергосберегающих функций (тепло зимой и
                прохладно летом);
                <br />
                - можно строить в любое время года;
                <br /> - в сравнении с технологией скандинавских каркасных
                домов, SIP панели гораздо эффективней удерживают тепло
                изначально, а также пенополистирол не оседает как минеральная
                вата. Это значительно снижает расходы на отопление.
              </p>
            </div>
            <div className="flex ">
              <div className="hidden md:block services-container-1"></div>
              <div className="transition-colors services-container-2 duration-500 rounded-md hover-box p-4">
                <p>
                  1. Небольшие затраты и рациональность, которые обусловлены:
                  <br /> - простотой и скоростью строительства (до 3-ёх недель);
                  <br /> - не требуется дополнительной теплоизоляции;
                  <br /> - возможностью использования самого экономичного
                  свайного фундамента;
                  <br /> - стоимостью SIP панелей, которые до 25% дешевле, чем
                  другие строительные материалы;
                </p>
              </div>
            </div>
            <div className="flex ">
              <div className="hidden md:block services-container-3"></div>
              <div className="transition-colors services-container-2 duration-500 rounded-md hover-box p-4">
                <p>
                  3. Прочность и безопасность:
                  <br />- срок службы не менее 50 лет;
                  <br />- не растрескиваются и не меняют форму;
                  <br />- неблагоприятны для плесени, насекомых и грызунов;
                  <br />- очень надёжная и пожаробезопаснaя структурa.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <Image
            src="/about/about-img.jpg"
            width={1536}
            height={0}
            alt={'about'}
          ></Image>
        </div>
      </div>
    </div>
  )
}

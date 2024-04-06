import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function SipPanelPage() {
  return (
    <div className="pt-5 md:pt-20 lg:pt-40 max-w-screen-2xl mx-auto px-4 md:px-6">
      <div className="pb-5">
        <div className="md:pb-5">
          <h1 className="text-4xl md:text-[96px]">Спецпредложения</h1>
        </div>
      </div>

      <div className="border-t mx-auto border-neutral-400 w-full pt-5 md:mb-8 border-dashed"></div>

      <div className="">
        <div className="flex flex-col md:flex-row pb-5">
          <p className="services-container-1"></p>
          <h2 className="services-container-2 text-[30px] md:text-[40px] leading-tight font-semibold">
            Для архитекторов, конструкторов и проектировщиков
          </h2>
        </div>
        <div className="flex flex-col md:flex-row pb-5">
          <div className="services-container-1 pb-5 md:pb-0">
            <h3>Гибкость</h3>
          </div>
          <div className="services-container-2 pb-5 md:pb-0">
            <p className="">
              SIP панели будут оптимальны для проектирования пола (в сочетании
              со свайным фундаментом), стен (внешних и внутренних), межэтажных
              или кровельных перекрытий, так как нет ограничений в выборе
              наружней и внутренней отделки, а также нет необходимости создавать
              детальный проект узлов и конструкций.
            </p>
            <p className="py-3 text-[20px] font-semibold">
              Наша компания гарантирует:
            </p>
            <p className="leading-6">
              1. Консультации на всех этапах проектирования. <br />
              2. Разработку проектов детализации конструкции. <br />
              3. Подготовку всей необходимой документации для проектирования.
              <br />
              4. Персональное вознаграждение.
            </p>
            <div className="flex gap-2 justify-end pt-5 items-center">
              <AiOutlineArrowRight className="text-blue-600" />
              <a
                className="text-sm font-bold text-blue-600"
                href="/contact?specialOffer=true"
              >
                Получить индивидуальное предложение
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="md:pb-5">
        <div className="flex flex-col md:flex-row pb-5">
          <p className="services-container-1"></p>
          <h2 className="services-container-2 text-[30px] md:text-[40px] leading-tight font-semibold">
            Для девелоперов и застройщиков
          </h2>
        </div>
        <div className="flex flex-col md:flex-row pb-5">
          <div className="services-container-1 pb-5 md:pb-0">
            <h3>Прибыль</h3>
          </div>
          <div className="services-container-2 pb-5 md:pb-0">
            <p className="text-[20px] font-semibold">
              Вы будете довольны результатом, так как:
            </p>
            <p className="pt-5 leading-6">
              1. SIP панели это строительный материал с высокой маржинальностью.
              <br />
              2. Технология строительства минимизирует «человеческий фактор».
              <br />
              3. Технология имеет самую высокую скорость постройки.
              <br />
              4. Возможно использование фундамента любого типа.
              <br />
              5. Нет ограничений применения наружней и внутренней отделки любого
              вида.
            </p>
            <p className="text-[20px] pt-5 font-semibold">
              Наша компания гарантирует:
            </p>
            <p className="pt-5 leading-6">
              - Доставку домокомплектов на объект.
              <br />
              - Подготовку инструкции или сборку готового к монтажу
              домокомплекта. фактор».
              <br />
              - Шефмонтаж или технадзор на стройплощадке.
              <br />
              - Специальные скидки.
              <br />- Нет ограничений применения наружней и внутренней отделки
              любого вида.
            </p>
            <div className="flex gap-2 justify-end pt-5 items-center">
              <AiOutlineArrowRight className="text-blue-600" />
              <a
                className="text-sm font-bold text-blue-600"
                href="/contact?specialOffer=true"
              >
                Получить индивидуальное предложение
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

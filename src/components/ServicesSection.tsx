// 'use client'
// import React, { useState, useCallback, useEffect } from 'react'
// import Image from 'next/image'
// import { useTranslations } from 'next-intl'

// type ServiceInfo = {
//   title: string
//   description: string
// }

// type Service = {
//   name: string
//   info: ServiceInfo[]
//   imageSrc: string
//   imageSrc2: string
// }

// export default function ServicesSection() {
//   const t = useTranslations('ServicesSection')

//   const services: Service[] = [
//     {
//       name: 'Производство SIP панелей',
//       info: [
//         {
//           title: 'Инновационное Производство SIP Панелей',
//           description:
//             'Наша компания специализируется на производстве высококачественных SIP панелей, которые обеспечивают отличную теплоизоляцию и долговечность вашего будущего дома. Используя современные технологии и стремясь к экологичности, мы создаем материалы, гарантирующие комфорт и безопасность.',
//         },
//       ],
//       imageSrc: '/sip.jpg',
//       imageSrc2: '/manuf-sip.jpg',
//     },
//     {
//       name: 'Строительство домов из SIP панелей',
//       info: [
//         {
//           title: 'Строительство Энергоэффективных Домов',
//           description:
//             'Предлагаем полный спектр услуг по строительству домов из SIP панелей, начиная от проекта до ключа. Наши дома характеризуются высокой энергоэффективностью, устойчивостью к внешним воздействиям и быстротой возведения.',
//         },
//       ],
//       imageSrc: '/sip-house.jpg',
//       imageSrc2: '/projects/siphouse5.jpg',
//     },
//     {
//       name: 'Мобильные дома',
//       info: [
//         {
//           title: 'Современные Мобильные Дома на Ваш Выбор',
//           description:
//             'Мобильные дома от нашей компании - это сочетание комфорта и мобильности. Идеальное решение для тех, кто ценит свободу перемещения без ущерба для уюта и удобства проживания.',
//         },
//       ],
//       imageSrc: '/carousel/2.jpg',
//       imageSrc2: '/carousel/22.jpg',
//     },
//     {
//       name: 'Интерьерный дизайн',
//       info: [
//         {
//           title: 'Творческий Интерьерный Дизайн',
//           description:
//             'Наша команда профессиональных дизайнеров предлагает уникальные решения для интерьера вашего дома. Мы работаем, чтобы создать индивидуальный и гармоничный стиль, отражающий вашу личность и предпочтения.',
//         },
//       ],
//       imageSrc: '/carousel/5.jpg',
//       imageSrc2: '/carousel/13.jpg',
//     },
//     {
//       name: 'Екстерьерный дизайн',
//       info: [
//         {
//           title: 'Эксклюзивный Екстерьерный Дизайн',
//           description:
//             'Создайте неповторимый облик вашего дома с нашими екстерьерными дизайнерскими решениями. От ландшафтного дизайна до фасадов, мы предлагаем комплексные услуги для воплощения ваших самых смелых идей.',
//         },
//       ],
//       imageSrc: '/carousel/22.jpg',
//       imageSrc2: '/carousel/2.jpg',
//     },
//   ]

//   const [visibleIndex, setVisibleIndex] = useState<number>(-1)

//   const toggleServiceInfo = useCallback((index: number) => {
//     setVisibleIndex((prevIndex) => (prevIndex === index ? -1 : index))
//   }, [])

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (!entry.isIntersecting) {
//             setVisibleIndex(-1)
//           }
//         })
//       },
//       { threshold: 0.1 }
//     )

//     const section = document.getElementById('services')
//     if (section) {
//       observer.observe(section)
//     }

//     return () => {
//       if (section) {
//         observer.unobserve(section)
//       }
//     }
//   }, [])

//   return (
//     <div id="services" className="py-10 md:py-20 max-w-screen-2xl mx-auto">
//       <div className="flex-col flex md:flex-row pb-24 px-4 md:px-6">
//         <div className="md:flex-1">
//           <h2 className="md:text-[64px] pb-6 md:pb-0 text-[48px] leading-10 font-semibold">
//             Сервисы
//           </h2>
//         </div>
//         <div className="md:flex-1">
//           <div className="flex flex-col gap-3">
//             <p>
//               Каждый наш сервис нацелен на удовлетворение ваших уникальных
//               потребностей и желаний. Мы верим, что внимание к деталям и
//               персонализированный подход являются ключом к созданию
//               действительно комфортного и уютного дома.
//             </p>
//             <p>
//               Наши профессионалы работают рука об руку с каждым клиентом, чтобы
//               обеспечить лучшее качество и функциональность на всех этапах
//               проекта — от первоначального планирования до окончательной
//               реализации.
//             </p>
//           </div>
//         </div>
//       </div>
//       {services.map((service, index) => (
//         <div
//           key={index}
//           className={`border-t max-w-screen-2xl px-4 md:px-6 mx-auto border-neutral-400 border-dashed w-full ${
//             visibleIndex !== index ? 'hover:bg-[#45464c] hover:text-white' : ''
//           }`}
//           onClick={() => toggleServiceInfo(index)}
//         >
//           <div className="flex mx-auto justify-between items-center py-4">
//             <div className="text-[24px]">{service.name}</div>
//             <div className="text-4xl font-light text-[#45464c] hover:text-neutral-100 cursor-pointer">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 className="w-6 h-6 transition-transform transform"
//                 style={{
//                   transform:
//                     visibleIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
//                 }}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="m19.5 8.25-7.5 7.5-7.5-7.5"
//                 />
//               </svg>
//             </div>
//           </div>
//           {visibleIndex === index && (
//             <div className="py-4 gap-3 mx-auto flex-col flex md:flex-row ">
//               <div className="services-container-1 hidden md:flex items-center justify-end">
//                 <Image
//                   alt={service.name}
//                   src={service.imageSrc}
//                   width={400}
//                   height={400}
//                   objectFit="cover"
//                 />
//               </div>
//               <div className="services-container-1  items-center justify-end">
//                 <Image
//                   alt={service.name}
//                   src={service.imageSrc2}
//                   width={450}
//                   height={450}
//                   objectFit="cover"
//                 />
//               </div>
//               <div className="flex flex-col services-container-2 justify-center">
//                 {service.info.map((item, idx) => (
//                   <div
//                     key={idx}
//                     className="mb-4 gap-3 flex flex-col justify-between"
//                   >
//                     <p className="font-semibold ">{item.title}</p>
//                     <p className="">{item.description}</p>
//                   </div>
//                 ))}
//               </div>
//               <div className="services-container-1 lg:flex hidden"></div>
//             </div>
//           )}
//         </div>
//       ))}
//       <div className="border-t max-w-screen-2xl mx-auto border-neutral-400 w-full border-dashed"></div>
//     </div>
//   )
// }

import Image from 'next/image'
import React from 'react'

export default function AboutPage() {
  return (
    <div className="pt-5 md:pt-20 lg:pt-40 max-w-screen-2xl mx-auto px-4 md:px-6">
      <div className="pb-5 ">
        <div className="md:pb-5">
          <h1 className="lg:text-6xl tracking-[-0.05em] md:tracking-[-0.05em] font-medium md:text-5xl text-4xl">
            Проекты
          </h1>
        </div>
      </div>

      <div className="border-t mx-auto border-neutral-400 w-full pt-5 md:pt-10 border-dashed"></div>

      <div className="pb-10">
        <div className="flex flex-col gap-1 flex-auto ">
          <Image
            src="/projects/siphouse1.jpeg"
            width={1536}
            height={0}
            alt={''}
          />
          <p>Описание услуг</p>
          <p>Описание</p>
        </div>
      </div>

      <div className="pb-10 flex gap-3">
        <div className="flex flex-col gap-1 flex-auto w-1/2">
          <Image
            className="full-width-height-image"
            src="/carousel/2.jpg"
            width={1536}
            height={0}
            alt={''}
          />
          <p>Описание услуг</p>
          <p>Описание</p>
        </div>

        <div className="w-1/2 gap-3 flex">
          <div className="flex flex-col gap-1 flex-auto ">
            <Image
              className="semi-width-height-image"
              src="/carousel/8.jpg"
              width={1536}
              height={0}
              alt={''}
            />
            <p>Описание услуг</p>
            <p>Описание</p>
          </div>
          <div className="flex flex-col gap-1 flex-auto ">
            <Image
              className="semi-width-height-image"
              src="/carousel/7.jpg"
              width={1536}
              height={0}
              alt={''}
            />
            <p>Описание услуг</p>
            <p>Описание</p>
          </div>
        </div>
      </div>

      <div className="pb-10 flex gap-3">
        <div className="flex flex-col gap-1 flex-auto">
          <Image
            className="full-width-height-image"
            src="/projects/siphouse4.jpg"
            width={1536}
            height={0}
            alt={''}
          />
          <p>Описание услуг</p>
          <p>Описание</p>
        </div>

        <div className="gap-3 flex">
          <div className="flex flex-col gap-1 flex-auto ">
            <Image
              className="full-width-height-image"
              src="/projects/siphouse6.jpg"
              width={1536}
              height={0}
              alt={''}
            />
            <p>Описание услуг</p>
            <p>Описание</p>
          </div>
          <div className="flex flex-col gap-1 flex-auto ">
            <Image
              className="full-width-height-image"
              src="/projects/siphouse6.jpg"
              width={1536}
              height={0}
              alt={''}
            />
            <p>Описание услуг</p>
            <p>Описание</p>
          </div>
        </div>
      </div>

      <div className="pb-10 flex gap-3">
        <div className="flex w-1/2 gap-3">
          <div className="flex flex-col gap-1 flex-auto ">
            <Image
              src="/projects/siphouse7.jpg"
              width={1536}
              height={0}
              alt={''}
            />
            <p>Описание услуг</p>
            <p>Описание</p>
          </div>
          <div className="flex flex-col gap-1 flex-auto ">
            <Image
              src="/projects/siphouse7.jpg"
              width={1536}
              height={0}
              alt={''}
            />
            <p>Описание услуг</p>
            <p>Описание</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 flex-auto w-1/2">
          <Image
            className="full-width-height-image"
            src="/projects/siphouse2.jpg"
            width={1536}
            height={0}
            alt={''}
          />
          <p>Описание услуг</p>
          <p>Описание</p>
        </div>
      </div>
    </div>
  )
}

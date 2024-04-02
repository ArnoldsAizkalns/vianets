'use client'
import Image from 'next/image'
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import React from 'react'
import first from '../../public/carousel/1.jpg'
import second from '../../public/carousel/13.jpg'
import third from '../../public/carousel/7.jpg'
import a4th from '../../public/carousel/8.jpg'
import a5th from '../../public/carousel/12.jpg'
import a6th from '../../public/carousel/6.jpg'
import a7th from '../../public/carousel/7.jpg'
import a8th from '../../public/carousel/8.jpg'
import a9th from '../../public/carousel/9.jpg'
import a10th from '../../public/carousel/10.jpg'

interface CarouselProps {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

interface CarouselState {
  visibleSlides: number
}

export default class CarouselComponent extends React.Component<
  CarouselProps,
  CarouselState
> {
  constructor(props: CarouselProps) {
    super(props)
    this.state = {
      visibleSlides: 3.5,
    }
  }

  componentDidMount() {
    this.updateVisibleSlides()
    window.addEventListener('resize', this.updateVisibleSlides)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateVisibleSlides)
  }

  updateVisibleSlides = () => {
    const width = window.innerWidth
    let visibleSlides = 3.5

    if (width < 768) {
      visibleSlides = 2
    } else if (width < 1024) {
      visibleSlides = 3
    } else if (width < 1280) {
      visibleSlides = 3
    } else if (width < 1530) {
      visibleSlides = 3.5
    }

    this.setState({ visibleSlides })
  }

  render() {
    const { visibleSlides } = this.state

    return (
      <div className="">
        <div className="">
          <CarouselProvider
            naturalSlideWidth={10.7}
            naturalSlideHeight={10}
            totalSlides={10}
            infinite
            visibleSlides={visibleSlides}
            currentSlide={1.5}
            className="pb-10 pt-10"
          >
            <Slider>
              <Slide className="" index={0}>
                <div className="">
                  <Image className="p-2" src={first} alt=""></Image>
                </div>
              </Slide>
              <Slide className="" index={1}>
                <div className="">
                  <Image className="p-2" src={second} alt=""></Image>
                </div>
              </Slide>
              <Slide index={2}>
                <div className="">
                  <Image className="p-2" alt="" src={third}></Image>
                </div>
              </Slide>
              <Slide index={3}>
                <div className="">
                  <Image className="p-2" alt="" src={a4th}></Image>
                </div>
              </Slide>
              <Slide index={4}>
                <div className="">
                  <Image className="p-2" alt="" src={a5th}></Image>
                </div>
              </Slide>
              <Slide index={5}>
                <div className="">
                  <Image className="p-2" alt="" src={a6th}></Image>
                </div>
              </Slide>
              <Slide index={6}>
                <div className="">
                  <Image className="p-2" alt="" src={a7th}></Image>
                </div>
              </Slide>
              <Slide index={7}>
                <div className="">
                  <Image className="p-2" alt="" src={a8th}></Image>
                </div>
              </Slide>
              <Slide index={8}>
                <div className="">
                  <Image className="p-2" alt="" src={a9th}></Image>
                </div>
              </Slide>
              <Slide index={9}>
                <div className="">
                  <Image className="p-2 " alt="" src={a10th}></Image>
                </div>
              </Slide>
            </Slider>
            <div
              style={{
                marginTop: '10px',
                display: 'flex',
                justifyContent: 'right',
                gap: '20px',
              }}
            >
              <ButtonBack>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                  />
                </svg>
              </ButtonBack>
              <ButtonNext>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>
    )
  }
}

import React from 'react'
import styles from '@/styles/main-page/index.module.scss'
import Image from 'next/image'
import SwiperCore from 'swiper/core'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination])

const HeroSwiper = () => {
  return (
    <Swiper
      className={styles.hero__slider}
      initialSlide={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      width={1162}
      height={437}
      loop
      centeredSlides
      spaceBetween={10}
    >
      <SwiperSlide>
        <Image src='/img/yellow.jpg' alt='yellow' width={1162} height={437} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/img/red.jpg' alt='asd' width={1162} height={437} />
      </SwiperSlide>
    </Swiper>
  )
}

export default HeroSwiper

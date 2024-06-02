import styles from '@/styles/main-page/index.module.scss'
import Image from 'next/image'
import SwiperCore from 'swiper/core'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
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
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      centeredSlides
      spaceBetween={10}
      modules={[Autoplay, Navigation, Pagination]}
    >
      <SwiperSlide>
        <Image src='/img/discount/sale-10.jpg' alt='skidka' width={1162} height={437} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/img/discount/skidka-otzyv.png' alt='otzyv' width={1162} height={437} />
      </SwiperSlide>
    </Swiper>
  )
}

export default HeroSwiper

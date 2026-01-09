import Image from 'next/image'
import SwiperCore from 'swiper/core'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination])

const HeroSwiper = () => {
  return (
    <section className="hero__section">
      <div className="hero__slider">
        <Swiper
          className="hero__slider__swiper"
          initialSlide={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          centeredSlides
          spaceBetween={10}
          modules={[Autoplay, Navigation, Pagination]}
        >
          {/* <SwiperSlide>
            <Image src='/img/discount/new_year_banner.jpg' alt='new_year_banner' width={1162} height={437} className="img-skidka"/>
          </SwiperSlide> */}
          <SwiperSlide>
            <Image src='/img/discount/skidka-otzyv.png' alt='otzyv' width={1162} height={437} className="img-skidka"/>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default HeroSwiper

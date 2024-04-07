'use client'
import styles from '@/styles/main-page/index.module.scss'
import HeroSwiper from './HeroSwiper'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container__section}>
        <div className={styles.swipe}>
          <HeroSwiper />
        </div>
      </div>
    </section>
  )
}

export default Hero

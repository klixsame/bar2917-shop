import { StaticImageData } from 'next/image'

export interface IHeroSlide {
  id?: number
  image: StaticImageData
}

export type IHeroSlideTooltip = IHeroSlide

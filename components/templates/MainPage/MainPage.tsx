'use client'

import { TypeProducts } from '@/app/types/product.interface'
import Hero from '@/components/modules/MainPage/Hero/Hero'
import Catalog from '@/components/ui/catalog/Catalog'



const MainPage = ({ products, length }: TypeProducts) => {
  return (
    <main>
      <Hero />
      <Catalog title="Популярное" products={products || []}/>
    </main>
  )
}

export default MainPage

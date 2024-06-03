'use client'

import { TypeProducts } from '@/app/types/product.interface'
import MainLayout from '@/components/layouts/MainLayout'
import Hero from '@/components/modules/MainPage/Hero/Hero'
import Catalog from '@/components/ui/catalog/Catalog'



const MainPage = ({ products, length }: TypeProducts) => {
  return (
    <main>
      <MainLayout>
      <Hero />
      <Catalog products={products}/>
      </MainLayout>
    </main>
  )
}

export default MainPage

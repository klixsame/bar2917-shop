'use client'

import { TypeProducts } from '@/app/types/product.interface'
import MainLayout from '@/components/layouts/MainLayout'
import Hero from '@/components/modules/MainPage/Hero/Hero'
import CatalogMain from '@/components/ui/catalog/CatalogMain'



const MainPage = ({ products, length }: TypeProducts) => {
  return (
      <MainLayout>
      <Hero />
      <CatalogMain title="Популярное" products={products || []}/>
      </MainLayout>
  )
}

export default MainPage

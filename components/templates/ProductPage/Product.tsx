'use client'
import { useQuery } from '@tanstack/react-query'
import { notFound } from 'next/navigation'
import { FC } from 'react'

import { ProductService } from '@/app/services/product/product.service'
import { IProduct } from '@/app/types/product.interface'

import AddToCartInline from '@/components/templates/ProductPage/product-information/AddToCartInline'
import SimilarProducts from '@/components/templates/ProductPage/SimilarProducts'
import Loader from '@/components/ui/Loader'
import Image from 'next/image'

interface IProductPage {
  initialProduct?: IProduct
  similarProducts?: IProduct[]
  slug: string
}

const Product: FC<IProductPage> = ({ initialProduct, similarProducts, slug }) => {
  const { data: response, isLoading } = useQuery({
    queryKey: ['get product', slug],
    queryFn: () => ProductService.getBySlug(slug),
    initialData: initialProduct ? { data: initialProduct } : undefined,
    enabled: !!slug
  })

  if (isLoading) return <Loader />

  if (!response?.data) {
    console.error('Product not found:', slug)
    return notFound()
  }

  const product = response.data

  if (!product.isAvailable) {
    return (
      <div className='text-white text-xl text-center mt-10'>
        К сожалению, этот товар временно недоступен в выбранном ресторане
      </div>
    )
  }

  return (
    <div>
      <div className='grid grid-cols-2 gap-12'>
        <Image
          src={product.image}
          width={500}
          height={500}
          alt={product.name}
          className='rounded-lg animation'
        />
        <div className='text-white'>
          <h1 className='text-3xl font-semibold'>{product.name}</h1>
          <div className='mt-4'>
            <p className='mb-6'>{product.description}</p>
            <p className='text-sm mb-1'>Вес: {product.weight} г</p>
            <div className='text-3xl font-semibold'>{product.price} ₽</div>
          </div>
          <AddToCartInline product={product} />
        </div>
      </div>
      {similarProducts && similarProducts.length > 0 && (
        <SimilarProducts similarProducts={similarProducts} />
      )}
    </div>
  )
}

export default Product

export const PRODUCTS = 'products'

export type TypeProductData = {
  name: string
  price: number
  description?: string
  image: string
  categoryId: number
  weight: number
}

export type TypeProductDataFilters = {
    sort?: EnumProductSort
    searchTerm?: string
}

export enum EnumProductSort {
    HIGH_PRICE = 'high-price',
    LOW_PRICE = 'low-price',
    NEWEST = 'newest',
    OLDEST = 'oldest',
}
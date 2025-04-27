import { ICategory } from "./category.interface"


export interface IProduct {
    id: number 
    name: string
    slug: string
    description: string
    price: number
    weight: number
    image: string
    isAvailable: boolean
    category: ICategory
    createdAt: string
}

export interface IProductDetails {
    product: IProduct
}

export type TypeProducts = {
    length: number
    products: IProduct[]
}
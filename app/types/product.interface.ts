import { ICategory } from "./category.interface"

export interface IProduct {
    id: number
    name: string
    slug: string
    description: string
    price: number
    weight: number
    image: string
    category: ICategory
    createdAt: string
}

export interface IProductDetails {
    product: IProduct
}
import { instance } from "@/app/api/api.interceptor"
import { IProduct, TypeProducts } from "@/app/types/product.interface"
import { PRODUCTS, TypeProductData, TypeProductDataFilters } from "./product.types"
import axios from "axios"


export const ProductService = {
  async getAll(queryData = {} as TypeProductDataFilters) {
    const { data } = await instance<TypeProducts>({
      url: PRODUCTS,
      method: 'GET',
      params: queryData
    })

    return data
  },

  async getSimilar(id: number,) {
    return axios.get(`${PRODUCTS}/similar/${id}`)
  },
  
  async getBySlug(slug: string,) {
    return instance<IProduct>({
      url: `${PRODUCTS}/by-slug/${slug}`,
      method: 'GET'
    })
  },

  async getByCategory(categorySlug: string,) {
    return instance<IProduct[]>({
      url: `${PRODUCTS}/by-category/${categorySlug}`,
      method: 'GET'
    })
  },

  async getById(id: string | number) {
    return instance<IProduct>({
      url: `${PRODUCTS}/${id}`,
      method: 'GET'
    })
  },

  async create() {
    return instance<IProduct>({
      url: PRODUCTS,
      method: 'POST'
    })
  },

  async update(id: string | number, data: TypeProductData) {
    return instance<IProduct>({
      url: `${PRODUCTS}/${id}`,
      method: 'PUT',
      data
    })
  },

  async delete(id: string | number) {
    return instance<IProduct>({
      url: `${PRODUCTS}/${id}`,
      method: 'DELETE'
    })
  }
}


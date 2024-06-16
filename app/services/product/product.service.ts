import { instance } from "@/app/api/api.interceptor"
import { IProduct, TypeProducts } from "@/app/types/product.interface"
import { PRODUCTS, TypeProductData, TypeProductDataFilters } from "./product.types"


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
    const { data } = await instance<IProduct[]>({
      url: `${PRODUCTS}/similar/${id}`,
      method: 'GET'
  });
  return data;
  },
  
  async getBySlug(slug: string,) {
    const { data } = await instance<IProduct>({
      url: `${PRODUCTS}/by-slug/${slug}`,
      method: 'GET'
  });
  return data;
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


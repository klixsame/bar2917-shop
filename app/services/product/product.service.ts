import { instance } from "@/app/api/api.interceptor";
import { handleRequest } from "../../helpers/requestHandler";
import { IProduct } from "../../types/product.interface";
import { PRODUCTS, TypeProductData, TypeProductDataFilters } from "./product.types";




export const ProductService = {
  async getAll(queryData = {} as TypeProductDataFilters) {
    return handleRequest<IProduct[]>(instance({
      url: PRODUCTS,
      method: 'GET',
      params: queryData
    }));
  },

  async getSimilar(id: string | number,) {
    return handleRequest<IProduct[]>(instance({
      url: `${PRODUCTS}/similar/${id}`,
      method: 'GET'
    }));
  },
  
  async getBySlug(slug: string,) {
    return handleRequest<IProduct>(instance({
      url: `${PRODUCTS}/by-slug/${slug}`,
      method: 'GET'
    }));
  },

  async getByCategory(categorySlug: string,) {
    return handleRequest<IProduct[]>(instance({
      url: `${PRODUCTS}/by-category/${categorySlug}`,
      method: 'GET'
    }));
  },

  async getById(id: string | number) {
    return handleRequest<IProduct>(instance({
      url: `${PRODUCTS}/${id}`,
      method: 'GET'
    }));
  },

  async create() {
    return handleRequest<IProduct>(instance({
      url: PRODUCTS,
      method: 'POST'
    }));
  },

  async update(id: string | number, data: TypeProductData) {
    return handleRequest<IProduct>(instance({
      url: `${PRODUCTS}/${id}`,
      method: 'PUT',
      data
    }));
  },

  async delete(id: string | number) {
    return handleRequest<IProduct>(instance({
      url: `${PRODUCTS}/${id}`,
      method: 'DELETE'
    }));
  }
}


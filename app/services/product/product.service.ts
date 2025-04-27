import { instance } from "@/app/api/api.interceptor"
import { IProduct, TypeProducts } from "@/app/types/product.interface"
import { AxiosError } from "axios"
import { LocationService } from "../location.service"
import { PRODUCTS, TypeProductData, TypeProductDataFilters } from "./product.types"

export const ProductService = {
  async getAll(queryData = {} as TypeProductDataFilters) {
    const locationId = await LocationService.getLocationId();
    console.log('Request params:', { ...queryData, locationId });
    return instance<TypeProducts>({
      url: PRODUCTS,
      method: 'GET',
      params: { locationId }
    })
  },

  async getSimilar(id: number) {
    const locationId = await LocationService.getLocationId();
    return instance<IProduct[]>({
      url: `${PRODUCTS}/similar/${id}`,
      method: 'GET',
      params: { locationId }
    });
  },
  
  async getBySlug(slug: string) {
    try {
      const locationId = await LocationService.getLocationId();
      console.log('Getting product for slug:', slug, 'locationId:', locationId);
      
      // Получаем базовую информацию о продукте по slug
      const productResponse = await instance<{ data: IProduct }>({
        url: `/${PRODUCTS}/by-slug/${slug}`,
        method: 'GET'
      });

      console.log('Product response:', productResponse);

      if (!productResponse?.data) {
        console.error('No data in product response');
        throw new Error('Product not found');
      }

      // В ответе может быть просто data без вложенного data
      const productData = productResponse.data.data || productResponse.data;

      if (!productData) {
        console.error('No product data in response');
        throw new Error('Product not found');
      }

      console.log('Product data:', productData);

      // Получаем информацию о цене для конкретной локации
      const locationProductResponse = await instance<{ data: { price: number, isAvailable: boolean } }>({
        url: `/${PRODUCTS}/price/${productData.id}/${locationId}`,
        method: 'GET'
      });

      console.log('Location product response:', locationProductResponse);

      // В ответе может быть просто data без вложенного data
      const priceData = locationProductResponse.data.data || locationProductResponse.data;

      // Комбинируем данные
      return {
        data: {
          data: {
            ...productData,
            price: priceData.price,
            isAvailable: priceData.isAvailable
          }
        }
      };
    } catch (error: unknown) {
      console.error('Error fetching product:', error);
      if (error instanceof AxiosError && error.response) {
        console.error('Error response:', error.response.data);
        console.error('Error status:', error.response.status);
      }
      throw error;
    }
  },

  async getByCategory(categorySlug: string) {
    const locationId = await LocationService.getLocationId();
    return instance<IProduct[]>({
      url: `${PRODUCTS}/by-category/${categorySlug}`,
      method: 'GET',
      params: { locationId }
    })
  },

  async getById(id: string | number) {
    try {
      const locationId = await LocationService.getLocationId();
      
      // Получаем базовую информацию о продукте
      const productResponse = await instance<{ data: IProduct }>({
        url: `${PRODUCTS}/${id}`,
        method: 'GET'
      });

      if (!productResponse.data) {
        throw new Error('Product not found');
      }

      // Получаем информацию о цене для конкретной локации
      const locationProductResponse = await instance<{ price: number, isAvailable: boolean }>({
        url: `${PRODUCTS}/${id}/location/${locationId}`,
        method: 'GET'
      });

      // Комбинируем данные
      return {
        data: {
          ...productResponse.data.data,
          price: locationProductResponse.data.price,
          isAvailable: locationProductResponse.data.isAvailable
        }
      };
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
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


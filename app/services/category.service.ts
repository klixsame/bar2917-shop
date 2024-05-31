import { instance } from "@/app/api/api.interceptor";
import { handleRequest } from "../helpers/requestHandler";
import { ICategory } from "../types/category.interface";


const CATEGORIES = 'categories'

export const CategoryService = {
  async getAllCategories() {
    return handleRequest<ICategory[]>(instance({
      url: CATEGORIES,
      method: 'GET'
    }));
  },

  async getById(id: string | number) {
    return handleRequest<ICategory>(instance({
      url: `${CATEGORIES}/${id}`,
      method: 'GET'
    }));
  },

  async getBySlug(slug: string) {
    return handleRequest<ICategory>(instance({
      url: `${CATEGORIES}/by-slug/${slug}`,
      method: 'GET'
    }));
  },

  async createCategory() {
    return handleRequest<ICategory>(instance({
      url: CATEGORIES,
      method: 'POST'
    }));
  },

  async updateCategory(id: string | number, name: string) {
    return handleRequest<ICategory>(instance({
      url: `${CATEGORIES}/${id}`,
      method: 'PUT',
      data: { name }
    }));
  },

  async deleteCategory(id: string | number) {
    return handleRequest<ICategory>(instance({
      url: `${CATEGORIES}/${id}`,
      method: 'DELETE'
    }));
  }
};


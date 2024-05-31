import { instance } from "@/app/api/api.interceptor";
import { handleRequest } from "../helpers/requestHandler";
import { IUser } from "../types/user.interface";



const USERS = 'users'

type TypeData = {
    email: string
    name: string
    password?: string
    phone?: string
    birthdate?: string
}

export const UserService = {
  async getProfile() {
    return handleRequest<IUser[]>(instance({
      url: `${USERS}/profile`,
      method: 'GET'
    }));
  },

  async updateProfile(data: TypeData) {
    return handleRequest<IUser>(instance({
      url: `${USERS}/profile`,
      method: 'PUT',
      data
    }));
  },

  async delete(id: string | number) {
    return handleRequest<IUser>(instance({
      url: `${USERS}/${id}`,
      method: 'DELETE'
    }));
  }
};


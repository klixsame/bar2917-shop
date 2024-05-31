import { instance } from "@/app/api/api.interceptor";
import { handleRequest } from "../helpers/requestHandler";
import { IOrder } from "../types/order.interface";


const ORDERS = 'orders'

export const OrderService = {
  async getAllOrders() {
    return handleRequest<IOrder[]>(instance({
      url: ORDERS,
      method: 'GET'
    }));
  },

};


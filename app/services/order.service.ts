import { instance } from "@/app/api/api.interceptor";
import { IOrder } from "../types/order.interface";


const ORDERS = 'orders'

export const OrderService = {
  async getAllOrders() {
    return instance<IOrder[]>({
      url: ORDERS,
      method: 'GET'
    })
  },

};


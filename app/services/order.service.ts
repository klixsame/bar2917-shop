import { instance } from "@/app/api/api.interceptor";
import { IOrder } from "../types/order.interface";


const ORDERS = 'orders'

enum EnumOrderStatus {
  PENDING = 'PENDING',
  PAYED = 'PAYED',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
}

type TypeData = {
  status?: EnumOrderStatus,
  items: {
    quantity:  number,
    productId:  number,
    price:  number
  }[]
}

export const OrderService = {
  async getAllOrders() {
    return instance<IOrder[]>({
      url: ORDERS,
      method: 'GET'
    })
  },

  async place(data: TypeData){
    return instance<{confirmation: {confirmation_url: string}}>({
      url: ORDERS,
      method:  'POST',
      data
    })
  }
}

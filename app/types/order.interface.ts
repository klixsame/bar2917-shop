import { ICartItem } from "./cart.interface"
import { IUser } from "./user.interface"

export enum EnumOrderStatus {
    PENDING = 'PENDING',
    PAYED = 'PAYED',
    SHIPPED = 'SHIPPED',
    DELIVERED = 'DELIVERED',
    CANCELED = 'CANCELED'
}

export interface IOrder {
    id: number
    createdAt: string
    items: ICartItem[]
    status: EnumOrderStatus
    address: string
    deliveryDate: string
    deliveryTime: string
    user: IUser
    commentary?: string
    total: number
}
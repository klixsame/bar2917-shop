import { IOrder } from "./order.interface"

export interface IUser {
    id: number
    email: string
    name: string
    phone: string
    birthdate: string
    isAdmin: boolean
}

export interface IFullUser extends IUser {
    orders: IOrder[]
}
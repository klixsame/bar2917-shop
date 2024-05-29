import { IUser } from "./user.interface"

export interface IFeedback {
    id: number
    user: IUser
    createdAt: string
    text: string
}
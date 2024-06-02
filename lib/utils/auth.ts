import { setIsAuth } from "@/context/auth"
import toast from 'react-hot-toast'
import { handleCloseAuthPopup } from "./common"

export const onAuthSuccess = <T>(message: string, data: T) => {
    localStorage.setItem('auth', JSON.stringify(data))
    toast.success(message)
    handleCloseAuthPopup()
    setIsAuth(true)
  }
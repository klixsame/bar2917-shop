import { closeAuthPopup } from "@/context/auth"

export const removeOverflowHiddenFromBody = () => {
    const body = document.querySelector('body') as HTMLBodyElement
    body.classList.remove('overflow-hidden')
  }
  
  export const addOverflowHiddenToBody = (paddingRight = '') => {
    const body = document.querySelector('body') as HTMLBodyElement
    body.classList.add('overflow-hidden')
    paddingRight && (body.style.paddingRight = paddingRight)
  }



export const handleCloseAuthPopup = () => {
    removeOverflowHiddenFromBody()
    closeAuthPopup()
}

export const closeAuthPopupWhenSomeModalOpened = (
    // showQuickViewModal: boolean,
    // showSizeTable: boolean
  ) => {
    // if (showQuickViewModal || showSizeTable) {
    //   closeAuthPopup()
    //   return
    // }
  
    handleCloseAuthPopup()
  }
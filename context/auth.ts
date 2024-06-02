import { createDomain } from 'effector'

const auth = createDomain()

export const openAuthPopup = auth.createEvent()
export const closeAuthPopup = auth.createEvent()
export const setIsAuth = auth.createEvent<boolean>()

export const $openAuthPopup = auth
    .createStore<boolean>(false)
    .on(openAuthPopup, () => true)
    .on(closeAuthPopup, () => false)

export const $isAuth = auth
    .createStore(false)
    .on(setIsAuth, (_, isAuth) => isAuth)
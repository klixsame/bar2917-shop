'use client'
import { useAuth } from '@/components/hocs/useAuth'
import { useCart } from '@/components/hocs/useCart'
import { withClickOutside } from '@/components/hocs/withClickOutside'
import { IWrappedComponentProps } from '@/types/hocs'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { forwardRef } from 'react'
import CartItem from '../CartItem/CartItem'

const CartPopup = forwardRef<HTMLDivElement, IWrappedComponentProps>(
  ({ open, setOpen }, ref) => {

    const { items, total} = useCart()
    
    const { user } = useAuth();

    const handleShowPopup = () => setOpen(true)

    const handleHidePopup = () => setOpen(false)

    return (
      <div className='cart-popup' ref={ref}>
                  {user ? (
              <Link
              className='header__icon__links__item item__busket'
              href='/order'
              onMouseEnter={handleShowPopup}
            ><div className='header__icon__links__card__item--busket' /></Link>
            ) : (
              <Link
          className='header__icon__links__item item__busket'
          href='/auth'
          onMouseEnter={handleShowPopup}
        ><div className='header__icon__links__card__item--busket' /></Link>
            )}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className='cart-popup__wrapper'
              onMouseLeave={handleHidePopup}
            >
              <div className='cart-popup__up'>
                <span className='cart-popup__title'>Корзина</span>
                <button
                  className='btn-reset cart-popup__close'
                  onClick={handleHidePopup}
                />
              </div>
              <div className='list-reset cart-popup__cart-list'>
                {items.length ? (
                  items.map(item => <CartItem item={item} key={item.id} />)
                ) : (
                  <div className='cart-popup__cart-list__empty-cart' />
                )}  
              </div>
              <div className='cart-popup__footer'>
                <div className='cart-popup__footer__inner'>
                  <span>Сумма заказа:</span>
                  <span>{total} ₽</span>
                </div>

                {user ? (
              <Link href='/order' className='cart-popup__footer__link'>
              Перейти к оформлению
            </Link>
            ) : (
              <Link href='/auth' className='cart-popup__footer__link'>
                  Перейти к оформлению
                </Link>
            )}                
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }
)

CartPopup.displayName = 'CartPopup'

export default withClickOutside(CartPopup)

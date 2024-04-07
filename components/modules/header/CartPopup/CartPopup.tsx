'use client'
import { withClickOutside } from '@/components/hocs/withClickOutside'
import { IWrappedComponentProps } from '@/types/hocs'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { forwardRef } from 'react'


const CartPopup = forwardRef<HTMLDivElement, IWrappedComponentProps>(
  ({ open, setOpen }, ref) => { 
    const handleShowPopup = () => setOpen(true)

    const handleHidePopup = () => setOpen(false)

    return (
      <div className='cart-popup' ref={ref}>
        <Link
          className='header__icon__links__item item__busket'
          href='/busket'
          onMouseEnter={handleShowPopup}
        >
          <div className='header__icon__links__card__item--busket' />
        </Link>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className='cart-popup__wrapper'
              onMouseLeave={handleHidePopup}
            >
              <button className='btn-reset cart-popup__close' onClick={handleHidePopup} />
                <span className='cart-popup__title'>
                  Корзина
                </span>
              <ul className='list-reset cart-popup__cart-list'>
                <li className='cart-popup__cart-list__empty-cart' />
              </ul>
              <div className='cart-popup__footer'>
                <div className='cart-popup__footer__inner'>
                  <span>
                    Сумма заказа:
                  </span>
                  <span>0 ₽</span>
                  
                </div>
                <Link href='/order' className='cart-popup__footer__link'>
                    Перейти к оформлению
                  </Link>
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

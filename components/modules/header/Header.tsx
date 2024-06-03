import Link from 'next/link'
import CartPopup from './CartPopup/CartPopup'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__content'>
          <div className='header__content__info'>
            <div className='header__content__info__time'>
              <div className='header__content__info__time__carbon'></div>
              <div className='header__content__info__time__work'>
                <span className='header__span__up'>режим работы</span>
                <span className='header__span__down'>11:00-23:00</span>
              </div>
              <div className='header__content__info__time__slash'></div>
              <div className='header__content__info__time__delivery'>
                <span className='header__span__up'>доставка от</span>
                <span className='header__span__down'>60 мин.</span>
              </div>
            </div>
            <div className='header__content__info__geo'>
              <p className='header__p__up'>
                Доставка в <span>гп. Новоселье</span>
              </p>
              <a href='tel:+79811565667' className='header__a__down'>
                +7 (981) 156-56-67
              </a>
            </div>
          </div>
          <ul className='header__links list-reset'>
            <li className='header__links__item'>
              <a href='/contacts' className='header__links__item__a'>
                Контакты
              </a>
            </li>
            <li className='header__links__item'>
              <a href='/delivery-info' className='header__links__item__a'>
                Доставка и оплата
              </a>
            </li>
          </ul>
          <div className='header__icon__links'>
            <Link className='header__icon__links__item' href='/profile'>
              <div className='header__icon__links__card__item--profile' />
            </Link>
            <CartPopup />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

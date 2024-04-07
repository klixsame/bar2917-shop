import Logo from '@/components/elements/Logo/Logo'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container footer__container'>
        <ul className='footer__links list-reset'>
          <li className='footer__links__item'>
            <a href='/contacts' className='footer__links__item__a'>
              Контакты
            </a>
          </li>
          <li className='footer__links__item'>
            <a href='/delivery' className='footer__links__item__a'>
              Доставка и оплата
            </a>
          </li>
        </ul>
        <div className='footer__logo'>
          <Logo />
        </div>
        <div className='footer__telephone__link'>
          <span className='footer__telephone__link__span'>
            Заказ по телефону:
          </span>
          <a href='tel:+79811565667' className='footer__a__phone'>
            +7 (981) 156-56-67
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { RootState } from '@/app/store/store';
import { useAuth } from '@/components/hocs/useAuth';
import { useProfile } from '@/components/hocs/useProfile';
import LocationSelector from '@/components/ui/location/LocationSelector';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import CartPopup from './CartPopup/CartPopup';

const Header = () => {
  const { user } = useAuth();
  const { profile } = useProfile();
  const { selectedLocationId, locations } = useSelector((state: RootState) => state.location);
  
  const selectedLocation = locations.find(loc => loc.id === selectedLocationId);
  const phoneNumber = selectedLocation?.phone || '+7 (981) 156-56-67';

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
              {/* <p className='header__p__up'>
                Доставка <span>гп. Новоселье</span>
              </p> */}
              <div className='flex flex-row items-end gap-1'>
                <p className='header__p__up'>Доставка</p>
                <LocationSelector />
              </div>
              <a href={`tel:${phoneNumber.replace(/[^\d+]/g, '')}`} className='header__a__down'>
                {phoneNumber}
              </a>
            </div>
          </div>
          <ul className='header__links'>
          {user?.isAdmin ? (
            <li className='header__links__item pl-5'>
              <a href='/admin' className='header__links__item__a'>
                Панель администратора
              </a>
            </li>
          ) : (
            <>
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
            </>
          )}
          </ul>
          <div className='header__icon__links'>
            {user ? (
              <Link className='header__icon__links__item' href='/users/profile'>
                <div className='header__icon__links__card__item--profile' />
              </Link>
            ) : (
              <Link className='header__icon__links__item' href='/auth'>
                <div className='header__icon__links__card__item--profile' />
              </Link>
            )}
            <CartPopup />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

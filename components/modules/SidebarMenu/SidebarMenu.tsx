
import LogoSidebar from '@/components/elements/LogoSidebar/LogoSidebar';
import Link from 'next/link';

const SidebarMenu = () => {

  return (
    <div className='sidebar__container'>
      <div className='sidebar__logo'>
        <LogoSidebar />
      </div>
      <div className='sidebar__menu'>
        <Link className='sidebar__menu__item' href='/category/rolls'>
          <div className='sidebar__menu__item__div item--rolls' />
          <span className='sidebar__menu__item__span'>Роллы</span>
        </Link>
        <Link className='sidebar__menu__item' href='/category/sushi'>
          <div className='sidebar__menu__item__div item--sushi' />
          <span className='sidebar__menu__item__span'>Суши</span>
        </Link>
        <Link className='sidebar__menu__item' href='/category/sets'>
          <div className='sidebar__menu__item__div item--sets' />
          <span className='sidebar__menu__item__span'>Сеты</span>
        </Link>
        <Link className='sidebar__menu__item' href='/category/pizza'>
          <div className='sidebar__menu__item__div item--pizza' />
          <span className='sidebar__menu__item__span'>Пицца</span>
        </Link>
        <Link className='sidebar__menu__item' href='/category/snacks'>
          <div className='sidebar__menu__item__div item--snacks' />
          <span className='sidebar__menu__item__span'>Закуски</span>
        </Link>
        <Link className='sidebar__menu__item' href='/category/gedza'>
          <div className='sidebar__menu__item__div item--gedza' />
          <span className='sidebar__menu__item__span'>Гёдза</span>
        </Link>
        <Link className='sidebar__menu__item' href='/category/salads'>
          <div className='sidebar__menu__item__div item--salads' />
          <span className='sidebar__menu__item__span'>Салаты</span>
        </Link>
        <Link className='sidebar__menu__item' href='/category/poke'>
          <div className='sidebar__menu__item__div item--poke' />
          <span className='sidebar__menu__item__span'>Поке</span>
        </Link>
        <Link className='sidebar__menu__item' href='/category/soups'>
          <div className='sidebar__menu__item__div item--soups' />
          <span className='sidebar__menu__item__span'>Супы</span>
        </Link>
        <Link className='sidebar__menu__item' href='/category/wok'>
          <div className='sidebar__menu__item__div item--wok' />
          <span className='sidebar__menu__item__span'>Вок</span>
        </Link>
        <Link className='sidebar__menu__item' href='/category/additionally'>
          <div className='sidebar__menu__item__div item--additionally' />
          <span className='sidebar__menu__item__span'>Дополнительно</span>
        </Link>
      </div>
    </div>
  )
}

export default SidebarMenu

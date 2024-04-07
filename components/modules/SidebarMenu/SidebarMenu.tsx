import LogoSidebar from '@/components/elements/LogoSidebar/LogoSidebar'
import Link from 'next/link'

const SidebarMenu = () => {
  return (
    <div className='sidebar__container'>
      <div className='sidebar__logo'>
        <LogoSidebar />
      </div>
      <div className='sidebar__menu'>
        <Link className='sidebar__menu__item' href='/rolls'>
          <div className='sidebar__menu__item--rolls' />
          <span className='sidebar__menu__item__span'>Роллы</span>
        </Link>
        <Link className='sidebar__menu__item' href='/sushi'>
          <div className='sidebar__menu__item--sushi' />
          <span className='sidebar__menu__item__span'>Суши</span>
        </Link>
        <Link className='sidebar__menu__item' href='/sets'>
          <div className='sidebar__menu__item--sets' />
          <span className='sidebar__menu__item__span'>Сеты</span>
        </Link>
        <Link className='sidebar__menu__item' href='/pizza'>
          <div className='sidebar__menu__item--pizza' />
          <span className='sidebar__menu__item__span'>Пицца</span>
        </Link>
        <Link className='sidebar__menu__item' href='/snacks'>
          <div className='sidebar__menu__item--snacks' />
          <span className='sidebar__menu__item__span'>Закуски</span>
        </Link>
        <Link className='sidebar__menu__item' href='/gedza'>
          <div className='sidebar__menu__item--gedza' />
          <span className='sidebar__menu__item__span'>Гёдза</span>
        </Link>
        <Link className='sidebar__menu__item' href='/salads'>
          <div className='sidebar__menu__item--salads' />
          <span className='sidebar__menu__item__span'>Салаты</span>
        </Link>
        <Link className='sidebar__menu__item' href='/poke'>
          <div className='sidebar__menu__item--poke' />
          <span className='sidebar__menu__item__span'>Поке</span>
        </Link>
        <Link className='sidebar__menu__item' href='/soups'>
          <div className='sidebar__menu__item--soups' />
          <span className='sidebar__menu__item__span'>Супы</span>
        </Link>
        <Link className='sidebar__menu__item' href='/wok'>
          <div className='sidebar__menu__item--wok' />
          <span className='sidebar__menu__item__span'>Вок</span>
        </Link>
        <Link className='sidebar__menu__item' href='/additionally'>
          <div className='sidebar__menu__item--additionally' />
          <span className='sidebar__menu__item__span'>Дополнительно</span>
        </Link>
      </div>
    </div>
  )
}

export default SidebarMenu

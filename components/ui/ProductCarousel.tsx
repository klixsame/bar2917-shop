'use client';

import { IProduct } from '@/app/types/product.interface';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useRef, useState } from 'react';

interface ProductCarouselProps {
  title: string;
  products: IProduct[];
  renderItem: (product: IProduct) => React.ReactNode;
}

export default function ProductCarousel({ title, products, renderItem }: ProductCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Функция для проверки ширины экрана
    const checkScreenWidth = () => {
      setIsMobileView(window.innerWidth <= 770);
    };

    // Вызываем функцию при монтировании компонента
    checkScreenWidth();

    // Добавляем слушатель события изменения размера окна
    window.addEventListener('resize', checkScreenWidth);

    // Удаляем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;

    const scrollAmount = 300; // Можно настроить под свои нужды
    const container = containerRef.current;
    const scrollLeft = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;
    
    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    // Показываем левую кнопку если прокрутили вправо
    setShowLeftButton(container.scrollLeft > 0);
    
    // Показываем правую кнопку если не дошли до конца
    const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;
    setShowRightButton(!isAtEnd);
  };

  if (!products.length) {
    return null;
  }

  return (
    <div className="mt-8 relative">
      <h2 className="text-2xl text-white mb-4">{title}</h2>

      <div className="relative">
        {/* Кнопка прокрутки влево - показывать только на мобильных устройствах */}
        {isMobileView && showLeftButton && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background-card bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full text-white border border-card-border transition-all duration-300"
            aria-label="Прокрутить влево"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
        )}

        {/* Контейнер с прокруткой */}
        <div
          ref={containerRef}
          className="flex flex-row overflow-x-auto scrollbar-hide scroll-smooth gap-5"
          onScroll={handleScroll}
          style={{ display: 'flex', flexDirection: 'row' }}
        >
          {products.map((product) => (
            <div key={product.id}>
              {renderItem(product)}
            </div>
          ))}
        </div>

        {/* Кнопка прокрутки вправо - показывать только на мобильных устройствах */}
        {isMobileView && showRightButton && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background-card bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full text-white border border-card-border transition-all duration-300"
            aria-label="Прокрутить вправо"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
}
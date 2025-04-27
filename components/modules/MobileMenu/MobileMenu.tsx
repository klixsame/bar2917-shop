'use client';

import { Button, Modal, ModalBody, ModalContent } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="mobile-menu-container">
      <Button 
        isIconOnly
        size="sm"
        variant="light" 
        aria-label="Menu" 
        className="mobile-menu-button"
        onClick={handleOpen}
      >
        <RxHamburgerMenu size={24} className="text-white" />
      </Button>

      <Modal 
        isOpen={isOpen} 
        onClose={handleClose}
        placement="center"
        classNames={{
          base: "bg-[#1A1A1A]",
          wrapper: "z-[2000]"
        }}
        isDismissable={true}
        className="mobile-menu-modal"
        size="full"
        hideCloseButton={true}
      >
        <ModalContent className="h-screen w-[280px] absolute right-0 top-0 m-0 rounded-none">
          {(onClose) => (
            <ModalBody className="p-6 overflow-y-auto">
              <Button 
                isIconOnly 
                variant="light" 
                className="absolute top-3 right-3 z-[2001]"
                onClick={onClose}
              >
                <IoClose size={24} className="text-white" />
              </Button>

              <div className="mobile-menu__logo">
                <Image
                  src="/img/logo.svg"
                  alt="Bar2917 Logo"
                  width={120}
                  height={75}
                />
              </div>

              <div className="mobile-menu__items">
                <Link 
                  href="/category/rolls" 
                  className="mobile-menu__item" 
                  onClick={onClose}
                >
                  <div className="mobile-menu__icon item--rolls"></div>
                  <span className="mobile-menu__text">Роллы</span>
                </Link>
                
                <Link 
                  href="/category/sushi" 
                  className="mobile-menu__item" 
                  onClick={onClose}
                >
                  <div className="mobile-menu__icon item--sushi"></div>
                  <span className="mobile-menu__text">Суши</span>
                </Link>
                
                <Link 
                  href="/category/sets" 
                  className="mobile-menu__item" 
                  onClick={onClose}
                >
                  <div className="mobile-menu__icon item--sets"></div>
                  <span className="mobile-menu__text">Сеты</span>
                </Link>
                
                <Link 
                  href="/category/pizza" 
                  className="mobile-menu__item" 
                  onClick={onClose}
                >
                  <div className="mobile-menu__icon item--pizza"></div>
                  <span className="mobile-menu__text">Пицца</span>
                </Link>
                
                <Link 
                  href="/category/snacks" 
                  className="mobile-menu__item" 
                  onClick={onClose}
                >
                  <div className="mobile-menu__icon item--snacks"></div>
                  <span className="mobile-menu__text">Закуски</span>
                </Link>
                
                <Link 
                  href="/category/gedza" 
                  className="mobile-menu__item" 
                  onClick={onClose}
                >
                  <div className="mobile-menu__icon item--gedza"></div>
                  <span className="mobile-menu__text">Гёдза</span>
                </Link>
                
                <Link 
                  href="/category/salads" 
                  className="mobile-menu__item" 
                  onClick={onClose}
                >
                  <div className="mobile-menu__icon item--salads"></div>
                  <span className="mobile-menu__text">Салаты</span>
                </Link>
                
                <Link 
                  href="/category/soups" 
                  className="mobile-menu__item" 
                  onClick={onClose}
                >
                  <div className="mobile-menu__icon item--soups"></div>
                  <span className="mobile-menu__text">Супы</span>
                </Link>
                
                <Link 
                  href="/category/wok" 
                  className="mobile-menu__item" 
                  onClick={onClose}
                >
                  <div className="mobile-menu__icon item--wok"></div>
                  <span className="mobile-menu__text">Вок</span>
                </Link>
                
                <Link 
                  href="/category/additionally" 
                  className="mobile-menu__item" 
                  onClick={onClose}
                >
                  <div className="mobile-menu__icon item--additionally"></div>
                  <span className="mobile-menu__text">Дополнительно</span>
                </Link>
              </div>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default MobileMenu; 
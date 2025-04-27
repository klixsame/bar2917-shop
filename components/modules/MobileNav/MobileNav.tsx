'use client';

import { useAuth } from '@/components/hocs/useAuth';
import { Button, Modal, ModalBody, ModalContent } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiMoreHorizontal, FiShoppingCart, FiUser } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';

const MobileNav = () => {
  const { user } = useAuth();
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);

  const handleOpenMore = () => {
    setMoreOpen(true);
  };

  const handleCloseMore = () => {
    setMoreOpen(false);
  };

  return (
    <>
      <div className="mobile-bottom-nav">
        {/* Профиль */}
        <Link href={user ? '/users/profile' : '/auth'} className="mobile-nav-item">
          <FiUser className="mobile-nav-icon" />
          <span className="mobile-nav-text">Профиль</span>
        </Link>

        {/* Корзина - поменяли местами с "Еще" */}
        <Link href={user ? '/order' : '/auth'} className="mobile-nav-item">
          <FiShoppingCart className="mobile-nav-icon" />
          <span className="mobile-nav-text">Корзина</span>
        </Link>

        {/* Еще - поменяли местами с "Корзина" */}
        <button onClick={handleOpenMore} className="mobile-nav-item">
          <FiMoreHorizontal className="mobile-nav-icon" />
          <span className="mobile-nav-text">Еще</span>
        </button>
      </div>

      {/* Модальное окно "Еще" */}
      <Modal 
        isOpen={moreOpen} 
        onClose={handleCloseMore}
        placement="center"
        classNames={{
          base: "bg-[#1A1A1A]",
          wrapper: "z-[2000]"
        }}
        isDismissable={true}
        size="sm"
        hideCloseButton={true}
      >
        <ModalContent className="bg-[#1A1A1A]">
          {(onClose) => (
            <ModalBody className="p-6">
              <Button 
                isIconOnly 
                variant="light" 
                className="absolute top-3 right-3"
                onClick={onClose}
              >
                <IoClose size={24} className="text-white" />
              </Button>

              <div className="flex flex-col gap-4 mt-4">
                <Link 
                  href="/contacts" 
                  className="text-white text-md" 
                  onClick={onClose}
                >
                  Контакты
                </Link>
                <Link 
                  href="/delivery-info" 
                  className="text-white text-md" 
                  onClick={onClose}
                >
                  Доставка и оплата
                </Link>
                <Link 
                  href="/legal" 
                  className="text-white text-md" 
                  onClick={onClose}
                >
                  Правовая информация
                </Link>
              </div>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default MobileNav; 
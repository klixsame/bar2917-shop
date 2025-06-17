import { getCookie, setCookie } from 'cookies-next';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const COOKIE_NAME = 'cookies-accepted';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Проверяем наличие куки через cookies-next
    try {
      const hasAcceptedCookies = getCookie(COOKIE_NAME);
      
      // Показываем баннер только если куки нет
      if (!hasAcceptedCookies) {
        // Небольшая задержка для предотвращения мерцания при загрузке страницы
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 300);
        
        return () => clearTimeout(timer);
      }
    } catch (error) {
      // При ошибке всё равно показываем баннер
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    try {
      // Устанавливаем куку на 365 дней
      setCookie(COOKIE_NAME, 'true', { 
        maxAge: 60 * 60 * 24 * 365,
        path: '/'
      });
      
      // Скрываем баннер
      setIsVisible(false);
    } catch (error) {
      console.error('Error setting cookie:', error);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center items-center z-[9999] px-4 animate-fade-in-up">
      <div className="w-full max-w-4xl bg-[#121212] rounded-lg shadow-xl mx-auto">
        <div className="px-5 py-3.5 flex flex-row items-center justify-between">
          <p className="text-xs text-gray-300 pr-4 flex-grow">
            Мы используем cookies для быстрой и удобной работы сайта. Продолжая пользоваться сайтом, вы принимаете условия обработки персональных данных и соглашаетесь с{' '}
            <Link href="/legal/cookies" className="text-amber-500 font-medium">
              политикой использования файлов cookies
            </Link>
          </p>
          <button
            onClick={acceptCookies}
            className="flex-shrink-0 ml-2 text-gray-400 hover:text-white transition-colors focus:outline-none"
            aria-label="Закрыть"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// Добавляем стили для анимации
const styles = `
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.3s ease-out forwards;
}

.shadow-xl {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
}
`;

// Добавляем стили в head при монтировании компонента
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

export default CookieBanner; 
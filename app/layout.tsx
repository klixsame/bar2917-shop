'use client'
import { NextUIProvider } from "@nextui-org/react";
import dynamic from 'next/dynamic';
import { Next13ProgressBar } from 'next13-progressbar';
import { PropsWithChildren, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import './globalStyles/adaptation.css';
import './globalStyles/auth.css';
import './globalStyles/cart-popup.css';
import './globalStyles/contacts.css';
import './globalStyles/delivery-info.css';
import './globalStyles/footer.css';
import './globalStyles/globals.css';
import './globalStyles/header.css';
import './globalStyles/mobile-menu.css';
import './globalStyles/normalize.css';
import './globalStyles/sidebar.css';
import Providers from "./providers/Providers";

// Импортируем CookieBanner динамически для избежания проблем с SSR
const CookieBanner = dynamic(() => import('@/components/ui/CookieBanner'), { 
  ssr: false 
});

export default function RootLayout({
  children
}: PropsWithChildren<unknown>) {
  // Состояние для отслеживания монтирования компонента на клиенте
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./faviconn.ico" />
        <title>Bar2917</title>
        <meta name="description" content="Лучший суши-бар - Bar2917. Свежие и вкусные роллы, суши, сеты. Быстрая доставка." />
        <meta name="author" content="kleyfiex" />
        <meta name="keywords" content="суши, роллы, доставка суши, пицца, японская кухня, бар2917, bar2917, сеты роллов" />
        <meta name="robots" content="index, follow" />
      </head>
      <body>
        <Providers>
          <Toaster containerStyle={{
            left: "40%",
          }} />
          <Next13ProgressBar height='3px' color='#FF8A00' showOnShallow/>
          <NextUIProvider>
            {children}
          </NextUIProvider>
          {/* Показываем CookieBanner только после монтирования на клиенте */}
          {isMounted && <CookieBanner />}
        </Providers>
        <div id="modal"></div>
      </body>
    </html>
  )
}
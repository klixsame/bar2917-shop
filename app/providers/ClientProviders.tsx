'use client'

import { NextUIProvider } from "@nextui-org/react";
import dynamic from 'next/dynamic';
import { Next13ProgressBar } from 'next13-progressbar';
import { PropsWithChildren, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Providers from "./Providers";

// Используем dynamic import для компонента CookieBanner, чтобы избежать ошибок SSR с localStorage
const CookieBanner = dynamic(() => import('@/components/ui/CookieBanner'), { 
  ssr: false,
  loading: () => null 
});

export default function ClientProviders({
  children
}: PropsWithChildren<unknown>) {
  const [mounted, setMounted] = useState(false);
  
  // Убедимся, что компонент монтируется только на клиенте
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Providers>
      <Toaster containerStyle={{
        left: "40%",
      }} />
      <Next13ProgressBar height='3px' color='#FF8A00' showOnShallow/>
      <NextUIProvider>
        {children}
      </NextUIProvider>
      {mounted && <CookieBanner />}
    </Providers>
  )
} 
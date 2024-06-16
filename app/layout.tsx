'use client'
import { NextUIProvider } from "@nextui-org/react";
import { Next13ProgressBar } from 'next13-progressbar';
import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";
import './globalStyles/auth.css';
import './globalStyles/cart-popup.css';
import './globalStyles/footer.css';
import './globalStyles/globals.css';
import './globalStyles/header.css';
import './globalStyles/normalize.css';
import './globalStyles/sidebar.css';
import Providers from "./providers/Providers";


export default function RootLayout({
  children
}: PropsWithChildren<unknown>) {
  return (
            <html lang="en">
                    <head>
                      <meta charSet="utf-8" />
                      <meta name="viewport" content="width=device-width, initial-scale=1" />
                      <link rel="icon" href="/favicon.ico" />
                      <title>Bar2917</title>
                      <meta name="description" content="Суши-бар Bar2917" />
                      <meta name="author" content="kleyfiex" />
                      <meta name="keywords" content="Your,Keywords" />
                      <meta name="robots" content="index, follow" />
                    </head>
              <body>
                  <Providers>
                    <Toaster   containerStyle={{
                        left: "40%",
                      }}/>
                    <Next13ProgressBar height='3px' color='#FF8A00' showOnShallow/>
                    <NextUIProvider>
                        {children}
                    </NextUIProvider>
                  </Providers>
                <div id="modal"></div>
              </body>
            </html>
  )
}
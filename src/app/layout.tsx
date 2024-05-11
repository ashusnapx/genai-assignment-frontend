import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GenAI',
  description: 'Made by ashutosh kumar(AKA @ashusnapx) for an assignment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang='en' suppressHydrationWarning className='bg-hi'>
        <head />
        <body>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            {/* <Image
              src='/image.png'
              width={9000}
              height={9000}
              alt=''
              className='z-99 top-0'
            /> */}

            {/* <Navbar /> */}
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}

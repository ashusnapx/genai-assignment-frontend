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
        <body className='bg-hi overflow-x-hidden'>{children}</body>
      </html>
    </>
  );
}

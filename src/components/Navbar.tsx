'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop mode */}
      <div className='hidden md:flex items-center justify-between px-9 py-3 bg-hi bg-my-image text-white'>
        <div className='flex items-center'>
          <Image src='/logo.svg' width={20} height={20} alt='logo' />
          <h1 className='text-xl tracking-tighter font-semibold ml-2'>GenAI</h1>
        </div>
        <div className='space-x-9 font-medium'>
          <Link href='/' className='hover:text-hello'>
            Products
          </Link>
          <Link href='/' className='hover:text-hello'>
            About us
          </Link>
          <Link href='/' className='hover:text-hello'>
            Pricing
          </Link>
          <Link href='/' className='hover:text-hello'>
            FAQ
          </Link>
        </div>
        <div>
          <Button className='border rounded-3xl bg-hello hover:bg-hello/50'>
            Get started &rarr;
          </Button>
        </div>
      </div>

      {/* Mobile mode */}
      <div className='md:hidden flex items-center justify-between bg-hi p-4'>
        <div className='bg-hi text-white flex items-center p-4'>
          <Image src='/logo.svg' width={20} height={20} alt='logo' />
          <h1 className='text-xl tracking-tighter font-semibold ml-2'>GenAI</h1>
        </div>
        {/* Show menu icon or close icon based on mobile menu state */}
        {isMobileMenuOpen ? (
          <XIcon className='text-white' onClick={toggleMobileMenu} />
        ) : (
          <MenuIcon className='text-white' onClick={toggleMobileMenu} />
        )}
      </div>
      {/* Render mobile menu if isMobileMenuOpen is true */}
      {isMobileMenuOpen && (
        <div className='fixed z-10 md:hidden bg-hi text-white w-full'>
          <div className='flex flex-col items-start ml-9 text-lg space-y-4'>
            <Link href='/' className='hover:text-hello'>
              Products
            </Link>
            <Link href='/' className='hover:text-hello'>
              About us
            </Link>
            <Link href='/' className='hover:text-hello'>
              Pricing
            </Link>
            <Link href='/' className='hover:text-hello'>
              FAQ
            </Link>
            <p className='border  w-[85%]' />
            <Button className='border rounded-3xl bg-hello hover:bg-hello/50'>
              Get started &rarr;
            </Button>
            <p className='mb-3' />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

import Image from 'next/image';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <div className=' text-white overflow-hidden'>
      <div className='flex flex-col md:flex-row items-center justify-between space-y-6'>
        <div className='flex flex-col items-start p-16 space-y-6'>
          <p className='border rounded-2xl px-2 py-1 bg-hi text-white'>
            AI generation &rarr;
          </p>
          <h1 className='text-7xl tracking-tight font-bold'>
            Generate apps with ease
          </h1>
          <p>Lorem ipsum dolor sit amet</p>
          <Button className='border rounded-3xl bg-hello text-white'>
            Start your free trial &rarr;
          </Button>
        </div>
        <div>
          <Image
            src='/hero.png'
            width={900}
            height={500}
            alt='hero'
            className='hidden md:block md:object-fill'
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

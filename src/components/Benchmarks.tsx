import Image from 'next/image';
import React from 'react';

const Benchmarks = () => {
  return (
    <div className='bg-hi text-white flex flex-col items-center justify-center space-y-6 p-4 md:p-8 lg:p-16'>
      <div className='text-4xl md:text-7xl font-medium mt-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500'>
        Unleash the power
        <br /> of AI
      </div>
      <div className='text-lg md:text-2xl text-center'>
        Automatically generate high-quality sequences uniquely crafted
        <br /> for your value proposition and your target prospects.
      </div>

      <Image
        src='/benchmark.png'
        width={700}
        height={700}
        alt='benchmark'
        className='w-full h-full'
      />
    </div>
  );
};

export default Benchmarks;

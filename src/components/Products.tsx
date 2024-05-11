import Image from 'next/image';

const Products = () => {
  return (
    <div className='bg-hi text-white'>
      <div className='flex flex-col items-center justify-center space-y-6 px-4 md:px-9'>
        <h1 className='text-4xl md:text-7xl mt-9 font-medium text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500'>
          Revolutionize your <br />
          workflow
        </h1>
        <p className='text-center text-lg md:text-2xl font-extralight'>
          Generate highly personalized icebreakers and complete
          <br /> sequences based on your prospect&apos;s information.
        </p>
        <div className='flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6'>
          <Image
            src='/hero.png'
            width={300}
            height={300} 
            alt='hero'
            className='object-cover mb-6 md:mb-0 w-full md:w-auto'
          />
          <Image
            src='/hero.png'
            width={300}
            height={300} 
            alt='hero'
            className='object-cover mb-6 md:mb-0 w-full md:w-auto'
          />
        </div>
      </div>
    </div>
  );
};

export default Products;

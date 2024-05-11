import Image from 'next/image'
import React from 'react'

const Brands = () => {
  return (
    <div className='bg-hi'>
      <div className='flex justify-center p-4 md:p-0'>
        <Image src='/brands.svg' height={900} width={900} alt='brands-logo' className='md:mt-16 mb-5 md:mb-16'/>
      </div>
    </div>
  )
}

export default Brands
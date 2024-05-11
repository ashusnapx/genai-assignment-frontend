import React from 'react';
import { Button } from './ui/button';
import { InstagramIcon, LinkedinIcon, Twitch, Twitter } from 'lucide-react';
import { Instagram, Linkedin } from 'lucide';

const Part = () => {
  return (
    <div className='bg-hi text-white flex flex-col items-center space-y-16 px-4 md:px-8 lg:px-16'>
      <h1 className='text-4xl md:text-6xl lg:text-7xl font-medium text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-100 mt-24'>
        Be part of the future of <br />{' '}
        <span className='bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_6px] bg-no-repeat bg-bottom'>
          AI tools
        </span>
      </h1>
      <p className='text-center'>
        Unleash the power of AI within Brainwave. Upgrade your productivity{' '}
        <br /> with Brainwave, the open AI chat app.
      </p>
      <Button className='bg-hello border rounded-3xl'>
        Start your free trial &rarr;
      </Button>

      <div className='flex items-center space-x-6'>
        <Twitter className='border rounded-full h-12 w-12 p-3 cursor-pointer bg-blue-950' />
        <LinkedinIcon className='border rounded-full h-12 w-12 p-3 cursor-pointer bg-blue-950' />
        <InstagramIcon className='border rounded-full h-12 w-12 p-3 cursor-pointer bg-blue-950' />
        <Twitch className='border rounded-full h-12 w-12 p-3 cursor-pointer bg-blue-950' />
      </div>
      <div className='border border-gray-500 w-full lg:w-[85%] my-8'></div>
    </div>
  );
};

export default Part;

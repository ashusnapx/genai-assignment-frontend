import React from 'react';
import { Button } from './ui/button';
import { InstagramIcon, LinkedinIcon, Twitch, Twitter } from 'lucide-react';

const iconClassName =
  'border rounded-full h-12 w-12 p-3 cursor-pointer bg-hi bg-opacity-10 shadow-sm hover:shadow-white';

const icons = [
  { icon: <Twitter />, className: iconClassName },
  { icon: <LinkedinIcon />, className: iconClassName },
  { icon: <InstagramIcon />, className: iconClassName },
  { icon: <Twitch />, className: iconClassName },
];

const Part = () => {
  return (
    <div className='bg-hi text-white flex flex-col items-center space-y-10 px-9 md:px-8 lg:px-16'>
      <h1 className='text-4xl md:text-6xl lg:text-7xl font-medium text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-100 mt-24'>
        Be part of the future of <br />{' '}
        <span className='bg-gradient-to-r from-blue-700  to-fuchsia-500 bg-[length:100%_6px] bg-no-repeat bg-bottom'>
          AI tools
        </span>
      </h1>
      <p className='text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-100'>
        Unleash the power of AI within Brainwave. Upgrade your productivity with
        Brainwave, the open AI chat app.
      </p>
      <Button className='bg-hello border rounded-3xl'>
        Start your free trial &rarr;
      </Button>

      <div className='flex items-center space-x-6'>
        {icons.map((icon, index) => (
          <div key={index} className={icon.className}>
            {icon.icon}
          </div>
        ))}
      </div>
      <div className='border border-gray-500 w-full lg:w-[85%] my-8'></div>
    </div>
  );
};

export default Part;

const Footer = () => {
  const links = [
    'Home',
    'About',
    'Contact',
    'Privacy',
  ];

  return (
    <div className='bg-hi bg-my-image text-gray-400 flex flex-col items-center space-y-6 py-8 px-4 md:px-8'>
      <div className='flex flex-row items-center space-x-6 mx-3'>
        {/* Map over the links array to render the links */}
        {links.map((link, index) => (
          <p key={index} className='hover:text-white'>
            {link}
          </p>
        ))}
      </div>
      <p className='text-xs text-center'>
        ©2020 - 2024 Ashutosh Kumar. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

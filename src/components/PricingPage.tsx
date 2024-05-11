import { Button } from './ui/button';

const PricingPage = () => {
  return (
    <div className='bg-hi text-white flex flex-col items-center justify-center p-5 md:p-0'>
      <h1 className='text-3xl bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500 mb-12'>
        Get everything to build your app
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='col-span-1 border border-slate-700 px-16 py-9 space-y-5 rounded-2xl flex flex-col md:mb-16 h-fit mt-9'>
          <div className='text-xl font-medium'>Basic</div>
          <div>
            AI chatbot, personalized <br /> recommendations
          </div>
          <div className='text-2xl font-bold'>$0</div>
          <Button>Get Started</Button>
          <div className='flex flex-col space-y-3'>
            <div className='border-b border-slate-700 w-full p-3'>
              Type of threat
            </div>
            <div className='border-b border-slate-700 w-full p-3'>
              Online presence
            </div>
            <div className='border-b border-slate-700 w-full p-3'>
              Access to all modules
            </div>
            <div className='w-full p-3'>Notability</div>
          </div>
        </div>
        <div className='col-span-1 border border-slate-700 px-16 py-9 space-y-5 rounded-2xl flex flex-col justify-center md:mb-16 h-[600px]'>
          <div className='text-xl font-medium'>Basic</div>
          <div>
            AI chatbot, personalized <br /> recommendations
          </div>
          <div className='text-2xl font-bold'>$0</div>
          <Button className='bg-hello'>Get Started</Button>
          <div className='flex flex-col space-y-3'>
            <div className='border-b border-slate-700 w-full p-3'>
              Type of threat
            </div>
            <div className='border-b border-slate-700 w-full p-3'>
              Online presence
            </div>
            <div className='border-b border-slate-700 w-full p-3'>
              Access to all modules
            </div>
            <div className='w-full p-3'>Notability</div>
          </div>
        </div>
        <div className='col-span-1 border border-slate-700 px-16 py-9 space-y-5 rounded-2xl flex flex-col md:mb-16 h-fit mt-9'>
          <div className='text-xl font-medium'>Basic</div>
          <div>
            AI chatbot, personalized <br /> recommendations
          </div>
          <div className='text-2xl font-bold'>$0</div>
          <Button>Get Started</Button>
          <div className='flex flex-col space-y-3'>
            <div className='border-b border-slate-700 w-full p-3'>
              Type of threat
            </div>
            <div className='border-b border-slate-700 w-full p-3'>
              Online presence
            </div>
            <div className='border-b border-slate-700 w-full p-3'>
              Access to all modules
            </div>
            <div className='w-full p-3'>Notability</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;

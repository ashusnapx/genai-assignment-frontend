import { CheckIcon } from 'lucide-react';
import { Button } from './ui/button';
import { plans } from '@/constants/constants';

const PricingPage = () => {
  return (
    <div className='bg-hi text-white flex flex-col items-center justify-center p-5 md:p-0 mb-24'>
      <h1 className='text-4xl md:text-7xl font-medium mt-5 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500 mb-12'>
        Get everything to build your app
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`col-span-1 border border-slate-800 px-16 py-9 space-y-5 rounded-2xl flex flex-col ${
              index === 1
                ? 'justify-center md:h-[600px]'
                : 'md:mb-16 h-fit md:mt-9'
            }`}
          >
            <div className='text-xl font-medium'>{plan.name}</div>
            <div>
              {plan.description.map((item, i) => (
                <div key={i}>{item}</div>
              ))}
            </div>
            <div className='text-2xl font-bold'>{plan.price}</div>
            <Button className={index === 1 ? 'bg-hello' : ''}>
              Get Started
            </Button>
            <div>
              {plan.features.map((feature, i) => (
                <div
                  key={i}
                  className={`flex space-x-1 w-full p-3 ${
                    i !== plan.features.length - 1
                      ? 'border-b border-slate-700'
                      : ''
                  }`}
                >
                  <CheckIcon className='border border-slate-400 rounded-full bg-hello/60 text-slate-300' />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;

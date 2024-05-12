import { AccordionDemo } from './Accord';

const Faq = () => {
  const accordionItems = [
    {
      value: 'item-1',
      triggerContent: 'Is it accessible?',
      content: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
      value: 'item-2',
      triggerContent: 'Is it styled?',
      content:
        'Yes. It comes with default styles that matches the other components aesthetic.',
    },
    {
      value: 'item-3',
      triggerContent: 'Is it animated?',
      content:
        "Yes. It's animated by default, but you can disable it if you prefer.",
    },
    {
      value: 'item-4',
      triggerContent: 'Is it accessible?',
      content: 'Yes. It adheres to the WAI-ARIA design pattern.',
    },
    {
      value: 'item-5',
      triggerContent: 'Is it styled?',
      content:
        'Yes. It comes with default styles that matches the other components aesthetic.',
    },
    {
      value: 'item-6',
      triggerContent: 'Is it animated?',
      content:
        "Yes. It's animated by default, but you can disable it if you prefer.",
    },
  ];

  return (
    <div className='bg-hi grid grid-cols-1 md:grid-cols-2 text-center'>
      <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500 text-4xl md:text-7xl md:text-left md:px-24 md:mt-12 capitalize font-bold text-center'>
        Frequently asked questions
      </h1>
      <div className='text-white px-16 py-5 md:p-9'>
        <AccordionDemo items={accordionItems} />
      </div>
    </div>
  );
};

export default Faq;

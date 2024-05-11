import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface AccordionDemoProps {
  items: {
    value: string;
    triggerContent: string;
    content: string;
  }[];
}

export function AccordionDemo({ items }: AccordionDemoProps) {
  return (
    <Accordion type='single' collapsible className='w-full'>
      {items.map((item, index) => (
        <AccordionItem key={index} value={item.value}>
          <AccordionTrigger className='border border-gray-700 px-4 rounded-xl mb-2'>
            {item.triggerContent}
          </AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

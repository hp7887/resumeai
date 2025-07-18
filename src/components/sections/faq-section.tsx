'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card } from '@/components/ui/card'

export default function FaqSection() {
  const faqData = [
    {
      question: 'What is a resume checker?',
      answer: '...',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h4 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Frequently asked questions
        </h4>
        <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4">
          {faqData.map((faq, index) => (
            <Card key={index} className="bg-white shadow-sm rounded-lg overflow-hidden">
              <AccordionItem value={`item-${index}`} className="border-b-0 p-2 sm:p-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pt-2">
                  <div className="text-gray-600 whitespace-pre-line text-left">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            </Card>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

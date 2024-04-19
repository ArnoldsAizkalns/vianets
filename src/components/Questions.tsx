'use client'
import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  faqs: FAQItem[]
}

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="max-w-screen-2xl mx-auto py-10">
      <div className="pb-10 md:pb-10 px-4 md:px-6">
        <h2 className="text-[25px] md:text-[40px] font-semibold ">
          Часто задаваемые вопросы
        </h2>
      </div>
      {faqs.map((faq, index) => (
        <div key={index} className="">
          <button
            className="flex justify-between items-center w-full text-lg py-5 px-4 md:px-6 text-left border-neutral-400 border-dashed border-t"
            onClick={() => toggleFAQ(index)}
          >
            <span className="font-medium">{faq.question}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 min-w-4 transition-transform transform rotate-0"
              style={{
                transform:
                  activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>

          {activeIndex === index && (
            <p className="mt-2 px-6 py-2 ">{faq.answer}</p>
          )}
        </div>
      ))}
      <div className="border-t mx-auto border-neutral-400 w-full border-dashed"></div>
    </div>
  )
}

export default FAQ

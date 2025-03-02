"use client";

import React, { useState } from 'react';

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-[#0C0F12] pb-40 flex flex-col items-center justify-center">
            <h2 className='text-3xl font-bold mb-12'>FAQs</h2>

            <div className='max-w-240 mx-12 w-full'>
                {faqData.map((faq, index) => (
                    <div key={index} className=''>
                        <button onClick={() => toggleQuestion(index)} className='py-6 flex w-full justify-between'>
                            <p className='text-xl font-medium'>{faq.question}</p>
                            <img
                                src="/arrow_up.webp"
                                alt="Expand"
                                className='h-5 mt-[0.5px] duration-350'
                                style={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                            />
                        </button>
                        <div className='bg-[#1D242D] rounded-lg h-[3px]'></div>
                        <div className={`bg-[#1D242D] transition-all duration-350 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className={`transition-opacity duration-350 ${activeIndex === index ? 'max-h-96 opacity-100' : 'opacity-0'}`}>
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const faqData = [
    {
        question: 'How is my data stored?',
        answer: `camelAI's infrastructure is hosted on AWS. Data from applications is pulled only when necessary and limited to what you request in your prompt. It is stored in an EC2 cache for 5 minutes and then deleted. For more information, please see our <a href="/security">Security Policy</a> and our <a href="https://camelai.com/blog/FAQ-security/">security blog post</a>.`,
    },
    {
        question: 'Do you train on my data?',
        answer: `No, we do not train on your data. CamelAI is powered by OpenAI's API. We have opted out of data sharing for training. You can read more about OpenAI's API policies <a href="https://openai.com/enterprise-privacy/">here</a>.`,
    },
    {
        question: 'Are my app connections secure?',
        answer: `Yes, your app connections are secure. We use OAuth 2.0 when available or secure key authentication to authenticate and authorize access to your applications. Your data is encrypted in transit and at rest. If you revoke access to an app, the connection is immediately destroyed and we will no longer have access to that application.`,
    },
    {
        question: 'How do you pull my data?',
        answer: `camelAI only communicates with your connected apps when you request data in the chat. We do not train on your data, nor do we access or store any data without your request and supervision.`,
    },
];

export default FAQ;
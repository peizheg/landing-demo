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
                <button onClick={() => toggleQuestion(0)} className='py-6 flex w-full justify-between'>
                    <p className='text-xl font-medium'>How is my data stored?</p>
                    <img
                        src="/arrow_up.webp"
                        alt="Expand"
                        className='h-5 mt-[0.5px] duration-350'
                        style={{ transform: activeIndex === 0 ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    />
                </button>
                <div className='bg-[#1D242D] rounded-lg h-[3px]'></div>
                <div className={`bg-[#1D242D] transition-all duration-500 ease-in-out overflow-hidden rounded-b-xl ${activeIndex === 0 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className={`transition-all duration-500 p-4 font-mono ${activeIndex === 0 ? 'max-h-96 opacity-100' : 'scale-y-80 origin-top opacity-0'}`}>
                        camelAI's infrastructure is hosted on AWS. Data from applications is pulled only when necessary and limited to what you request in your prompt. It is stored in an EC2 cache for 5 minutes and then deleted. For more information, please see our <a className='text-[#58a0ff] underline'>Security Policy</a> and our <a className='text-[#58a0ff] underline'>security blog post</a>.
                    </p>
                </div>


                <button onClick={() => toggleQuestion(1)} className='py-6 flex w-full justify-between'>
                    <p className='text-xl font-medium'>Do you train on my data?</p>
                    <img
                        src="/arrow_up.webp"
                        alt="Expand"
                        className='h-5 mt-[0.5px] duration-350'
                        style={{ transform: activeIndex === 1 ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    />
                </button>
                <div className='bg-[#1D242D] rounded-lg h-[3px]'></div>
                <div className={`bg-[#1D242D] transition-all duration-500 ease-in-out overflow-hidden rounded-b-xl ${activeIndex === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className={`transition-all duration-500 p-4 font-mono ${activeIndex === 1 ? 'max-h-96 opacity-100' : 'scale-y-80 origin-top opacity-0'}`}>
                    No, we do not train on your data. CamelAI is powered by OpenAI's API. We have opted out of data sharing for training. You can read more about OpenAI's API policies <a className='text-[#58a0ff] underline'>here</a>.
                    </p>
                </div>


                <button onClick={() => toggleQuestion(2)} className='py-6 flex w-full justify-between'>
                    <p className='text-xl font-medium'>Are my app connections secure?</p>
                    <img
                        src="/arrow_up.webp"
                        alt="Expand"
                        className='h-5 mt-[0.5px] duration-350'
                        style={{ transform: activeIndex === 2 ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    />
                </button>
                <div className='bg-[#1D242D] rounded-lg h-[3px]'></div>
                <div className={`bg-[#1D242D] transition-all duration-500 ease-in-out overflow-hidden rounded-b-xl ${activeIndex === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className={`transition-all duration-500 p-4 font-mono ${activeIndex === 2 ? 'max-h-96 opacity-100' : 'scale-y-80 origin-top opacity-0'}`}>
                    Yes, your app connections are secure. We use OAuth 2.0 when available or secure key authentication to authenticate and authorize access to your applications. Your data is encrypted in transit and at rest. If you revoke access to an app, the connection is immediately destroyed and we will no longer have access to that application.
                    </p>
                </div>


                <button onClick={() => toggleQuestion(3)} className='py-6 flex w-full justify-between'>
                    <p className='text-xl font-medium'>How do you pull my data?</p>
                    <img
                        src="/arrow_up.webp"
                        alt="Expand"
                        className='h-5 mt-[0.5px] duration-350'
                        style={{ transform: activeIndex === 3 ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    />
                </button>
                <div className='bg-[#1D242D] rounded-lg h-[3px]'></div>
                <div className={`bg-[#1D242D] transition-all duration-500 ease-in-out overflow-hidden rounded-b-xl ${activeIndex === 3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className={`transition-all duration-500 p-4 font-mono ${activeIndex === 3 ? 'max-h-96 opacity-100' : 'scale-y-80 origin-top opacity-0'}`}>
                        camelAI only communicates with your connected apps when you request data in the chat. We do not train on your data, nor do we access or store any data without your request and supervision.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
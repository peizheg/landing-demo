import { FaLock, FaShieldAlt } from 'react-icons/fa';
import { SiYcombinator } from 'react-icons/si';

export default function Hero() {
  return (
    <>
        {/* The blur background */}
        <div 
            className="absolute top-0 w-full h-13/10 -z-1"
            style={{ background: 'linear-gradient(to top right, #58F1FF, #5F83F0, #E54BDA, #FF8D29, #F83A31, #35012F)' }}>
        </div>
        <div className="absolute top-0 w-full h-13/10 bg-[#0000008e] backdrop-blur-[150px] -z-1"></div>


        {/* The hero content */}
        <div>
            <div className="text-center mt-10 mb-14">
                <h1 className="text-white text-6xl font-bold mb-10">The AI Data Analyst</h1>
                <p className="text-white text-[25px] max-w-3xl mx-auto">
                    Ask questions, get instant charts and insights from your data.
                </p>
            </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a className="bg-white text-gray-800 text-lg font-semibold px-6 py-3 w-44 h-11 rounded-[20px] flex items-center justify-between font-medium hover:-translate-y-0.5 hover:duration-500 hover:ease-[cubic-bezier(0.4, 0, 0.2, 1)] hover:bg-gradient-to-r from-[#58f1ff63] via-[#5f83f04f] to-[#e54bdb49]">
            Try free
            <img className="h-3.5" src='/arrow_right.webp' alt="arrow right" />
          </a>
          <a 
            href="/book-demo" 
            className="bg-transparent text-lg font-semibold border-2 border-[#ffffff68] text-white px-5 py-3 w-44 h-11 rounded-[20px] flex items-center justify-between font-medium hover:bg-white/10 transition duration-300"
          >
            Book demo
            <img className="fill-white h-3.5" src='/arrow_right.webp' alt="arrow right" />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-24">
          <div className="bg-white/10 text-white px-2.5 py-2 rounded-xl flex items-center backdrop-blur-sm">
            <SiYcombinator className="text-orange-500 mr-2" />
            <p className='font-light'>Y Combinator backed</p>
          </div>
          <div className="bg-white/10 text-white px-2.5 py-2 rounded-xl flex items-center backdrop-blur-sm">
            <FaLock className="mr-2" />
            <p className='font-light'>Enterprise Security</p>
          </div>
          <div className="bg-white/10 text-white px-2.5 py-2 rounded-xl flex items-center backdrop-blur-sm">
            <FaShieldAlt className="mr-2" />
            <p className='font-light'>100% Data Privacy</p>
          </div>
        </div>

    </div>

    <div className='w-auto h-100 mb-20 bg-white mx-80'>

    </div>
    </>

  );
}
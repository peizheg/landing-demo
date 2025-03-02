import { FaLock, FaShieldAlt } from 'react-icons/fa';
import { SiYcombinator } from 'react-icons/si';

export default function Hero() {
  return (
    <div className='w-full h-full'>
        {/* The blur background */}
        <div 
            className="absolute top-0 w-full h-1/4 -z-1"
            style={{ background: 'linear-gradient(to top right, #58F1FF, #5F83F0, #E54BDA, #FF8D29, #F83A31, #35012F)' }}>
        </div>
        <div className="absolute 0 w-full h-1/4 bg-[#0000008e] backdrop-blur-[150px] -z-1"></div>

        {/* The hero content */}
        <div className='pt-24 lg:px-8'>
            <div className="text-center mb-14">
                <h1 className="text-wrap text-white text-3xl lg:text-6xl font-bold mb-10">The AI Data Analyst</h1>
                <p className="text-wrap text-white text-lg lg:text-[25px] max-w-3xl mx-auto">
                    Ask questions, get instant charts and insights from your data.
                </p>
            </div>

        <div className="flex flex-wrap justify-center gap-4 w-[70vw] lg: w-full mb-16">
          <button className="bg-white text-black text-md lg:text-lg font-bold px-6 py-3 w-36 lg:w-44 h-11 rounded-[20px] flex items-center justify-between hover:-translate-y-0.5 hover:duration-500 hover:ease-[cubic-bezier(0.4, 0, 0.2, 1)] hover:bg-gradient-to-r from-[#58f1ff63] via-[#5f83f04f] to-[#e54bdb49]">
            Try free
            <img className="h-3.5" src='/arrow_right.webp' alt="arrow right" />
          </button>
          <button 
            className="bg-transparent lg:text-lg font-bold border-2 border-[#ffffff68] text-white px-5 py-3 w-36 lg:w-44 h-11 rounded-[20px] flex items-center justify-between hover:bg-white/10 transition duration-300"
          >
            Book demo
            <img className="fill-white h-3.5" src='/arrow_white.png' alt="arrow right" />
          </button>
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

    <div className="flex justify-center items-center">
            <div className="relative max-h-[120vh] overflow-hidden my-4 lg:my-16 mx-4 lg:mx-16 max-w-full lg:max-w-[980px]">
                {/* Anchor wrapping the entire video container with group class */}
                <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative w-full h-full group"
                >
                    {/* Background Video with rounded corners */}
                    <video
                        autoPlay
                        loop
                        muted
                        className="w-7/8 mx-auto lg:w-full lg:h-full object-cover z-0 rounded-[15px]"
                    >
                        <source src="/camelai-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center z-10 ">
                        <div className="relative inline-flex items-center justify-center rounded-full text-white transition-all duration-500 group-hover:scale-120">
                            {/* First ring */}
                            <span className="absolute inset-0 bg-white rounded-full opacity-85 group-hover:animate-ping transform scale-78"></span>
                            {/* Second ring */}
                            <span className="absolute inset-0 bg-white rounded-full opacity-85 group-hover:animate-ping transform scale-71"></span>
                            {/* Colored ring */}
                            <span className="absolute inset-0 transform scale-115 rounded-[50%] opacity-0 bg-linear-[45deg,#58F1FF,#5F83F0,#E54BDA,#FF8D29] transition-opacity group-hover:opacity-100 group-hover:animate-wiggle"></span>
                            {/* Play icon image */}
                            <img
                                src="/play-icon.png"
                                alt="Play"
                                className="h-[60px] w-[60px] lg:h-[100px] lg:w-[100px] relative z-2 group-hover:brightness-200 rounded-[50%] group-hover:shadow-[0px_0px_25px_4px_#FFFFFFA0]"
                            />
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>

  );
}

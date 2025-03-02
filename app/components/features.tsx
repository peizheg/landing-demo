const Features = () => {
    return (
        <div className="bg-[#0d1014] pb-40 flex flex-col items-center justify-center">

            {/* First demo */}

            <h2 className="rounded-md p-4 py-5 text-3xl font-mono flex items-center justify-center long-dashes mb-4">
                <img src='/code.webp' className="h-7 -mt-1 pr-3" />
                Ask any question
            </h2>

            <h3 className="font-medium text-lg text-white/80">Camel uses your live data.</h3>
            <h3 className="font-medium text-lg text-white/80 -mt-1.5">Get tables and charts instantly.</h3>


            {/* Second demo */}

            <div>
                <img src='/chat-demo.webp' className="w-3/4 mx-auto mt-4 mb-30" />
            </div>

            <h2 className="rounded-md p-4 py-5 text-3xl font-mono flex items-center justify-center long-dashes mb-4">
                <img src='/light-bulb.webp' className="h-8 -mt-2 pr-3" />
                Powerful dashboards
            </h2>

            <h3 className="font-medium text-lg text-white/80">Save any graph to a live dashboard.</h3>
            <h3 className="font-medium text-lg text-white/80 -mt-1.5">Start a chat to answer ad hoc questions.</h3>

            <div>
                <img src='/dashboard-demo.webp' className="w-3/4 mx-auto mt-4" />
            </div>


            {/* API waitlist */}

            <div className="flex mt-30 justify-between max-w-290 w-full p-4">
                <div className="w-1/2">

                    <h2 className="text-3xl font-mono mb-8">Want to build with camelAI?</h2>
                    <h2 className="text-2xl text-white/80 mb-8">Embed AI-powered analytics directly in your application with our API</h2>
                    <button className="bg-white text-black text-lg px-4 py-3 w-48 h-11 rounded-[20px] flex items-center justify-between font-bold hover:-translate-y-0.5 hover:duration-500 hover:ease-[cubic-bezier(0.4, 0, 0.2, 1)] hover:bg-gradient-to-r from-[#58f1ff63] via-[#5f83f04f] to-[#e54bdb49]">
                        Join API Waitlist
                        <img className="h-3.5" src='/arrow_right.webp' alt="arrow right" />
                    </button>
                </div>
                <div className="w-1/2">
                    <div className="w-13/20 ml-auto mb-8">
                        <h3 className="text-[25px]">Natural Language → SQL</h3>
                        <p className="font-medium text-white/70 mt-1.5">Same powerful query engine that powers camelAI</p>
                    </div>
                        <div className="w-13/20 ml-auto mb-8">
                        <h3 className="text-[25px]">Secure Integration</h3>
                        <p className="font-medium text-white/70 mt-1.5">Enterprise-grade security and permissions</p>
                    </div>
                    <div className="w-13/20 ml-auto">
                        <h3 className="text-[25px]">Flexible Integration</h3>
                        <p className="font-medium text-white/70 mt-1.5">Full control over the user experience</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Features;
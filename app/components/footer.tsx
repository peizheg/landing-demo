const Footer = () => {
    return (
        <footer className="bg-black text-white pt-8 pb-5 mx-auto px-4 sm:px-8">
            <div className="max-w-300 mx-auto">
                {/* Contacts */}
                <div className="pb-30 pt-8 mx-4 flex flex-col md:flex-row justify-between items-center md:items-start">
                    <p className="text-3xl font-bold text-center md:text-left">Get started for <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6e7f42] via-[#c37842] to-[#f04e42]">free.</span></p>
                    <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
                        <button className="bg-white text-black md:text-lg font-bold px-6 py-3 w-full md:w-44 h-11 rounded-[20px] flex items-center justify-between hover:-translate-y-0.5 hover:duration-500 hover:ease-[cubic-bezier(0.4, 0, 0.2, 1)] hover:bg-gradient-to-r from-[#58f1ff63] via-[#5f83f04f] to-[#e54bdb49]">
                            Try Free
                            <img className="h-3.5" src='/arrow_right.webp' alt="arrow right" />
                        </button>
                        <button
                            className="bg-transparent md:text-lg font-bold border-2 border-[#ffffff68] text-white px-5 py-3 w-44 h-11 rounded-[20px] flex items-center justify-between hover:bg-white/10 transition duration-300"
                        >
                            Contact Us
                            <img className="fill-white h-3.5" src='/arrow_white.png' alt="arrow right" />
                        </button>
                    </div>
                </div>

                {/* Logo and newsletter */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <div className="space-y-4 max-w-md">
                        {/* Logo */}
                        <div className="flex items-center justify-center md:justify-start">
                            <img
                                src="/main-camelai.webp"
                                alt="CamelAI Logo"
                                className="mr-2 w-75"
                            />
                        </div>

                        {/* Newsletter */}
                        <div className="space-y-3 text-center md:text-left">
                            <p>Subscribe to our newsletter for product updates</p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="email"
                                    className="transition-[scale] duration-500 px-3 rounded-3xl bg-transparent h-11 border border-white text-white w-full sm:w-56 border focus:scale-[1.02] focus:outline-none focus:border-2"
                                />
                                <button className="bg-white text-black text-lg font-bold px-5 py-3 w-full sm:w-44 h-11 rounded-[20px] flex items-center justify-between hover:-translate-y-0.5 hover:duration-500 hover:ease-[cubic-bezier(0.4, 0, 0.2, 1)] hover:bg-gradient-to-r from-[#58f1ff63] via-[#5f83f04f] to-[#e54bdb49]">
                                    Subscribe
                                    <img className="h-3.5" src='/arrow_right.webp' alt="arrow right" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Navigation columns */}
                    <div className="grid grid-cols-3 gap-x-5 lg:gap-x-10 text-[13px] font-medium max-w-100">
                        {/* Company column */}
                        <div className="space-y-7">
                            <h3 className="text-[#6a7e97]">Company</h3>
                            <ul className="space-y-6">
                                <li><a className="text-white">About Us</a></li>
                                <li><a className="text-white">Schedule a call</a></li>
                                <li><a className="text-white">Email Us</a></li>
                            </ul>
                        </div>

                        {/* Links column */}
                        <div className="space-y-7">
                            <h3 className="text-[#6a7e97]">Links</h3>
                            <ul className="space-y-6">
                                <li><a className="text-white">Data Sources</a></li>
                                <li><a className="text-white">Demo Videos</a></li>
                                <li><a className="text-white">Blog</a></li>
                                <li><a className="text-white">Product Hunt</a></li>
                            </ul>
                        </div>

                        {/* Legal column */}
                        <div className="space-y-7">
                            <h3 className="text-[#6a7e97]">Legal</h3>
                            <ul className="space-y-6">
                                <li><a className="text-white">Terms</a></li>
                                <li><a className="text-white">Privacy Policy</a></li>
                                <li><a className="text-white">Security</a></li>
                                <li><a className="text-white">Acceptable Use</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Social media icons */}
                <div className="flex justify-center md:justify-start gap-5 mb-8">
                    <a aria-label="Twitter" className="w-9 h-9">
                        <img src="/x.png" alt="Twitter" width={40} height={40} />
                    </a>
                    <a aria-label="Discord" className="w-9 h-9">
                        <img src="/discord.png" alt="Discord" width={40} height={40} />
                    </a>
                    <a aria-label="LinkedIn" className="w-9 h-9">
                        <img src="/linkedin.png" alt="LinkedIn" width={40} height={40} />
                    </a>
                    <a aria-label="YouTube" className="w-9 h-9">
                        <img src="/youtube.png" alt="YouTube" width={40} height={40} />
                    </a>
                    <a aria-label="GitHub" className="w-9 h-9">
                        <img src="/github.png" alt="GitHub" width={40} height={40} />
                    </a>
                </div>

                {/* Copyright */}
                <hr className='mb-2 border-[#1D242D] border-1'/>
                <p className="text-[#6A7E97] text-[10px] font-medium text-center sm:text-left">© 2024 camelQA (DBA camelAI) | All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;

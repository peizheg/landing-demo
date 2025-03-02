"use client";
import { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="m-3 mx-3 py-2.5 w-[calc(100vw-24px)] bg-black/10 rounded-lg fixed backdrop-blur-[6px] z-5">
            <nav className="flex justify-between max-w-[90rem] mx-auto px-12">
                <div>
                    <a>
                        <img className="h-6.5" src="/main-camelai.webp" alt="camelAI logo"/>
                    </a>
                </div>
                <div className="hidden md:flex">
                    <ul className="flex">
                        <li className="px-4 font-semibold">
                            <a className="relative group text-white no-underline">
                                <p className="group-hover:-translate-y-0.25">Blog</p>
                            <span className="absolute left-0 -bottom-0.25 w-0 h-0.5 bg-gradient-to-r from-emerald-100 to-purple-900 transition-all duration-400 group-hover:w-full"></span>
                            </a>
                        </li>
                        <li className="px-4 font-semibold">
                            <a className="relative group text-white no-underline">
                                <p className="group-hover:-translate-y-0.25">Pricing</p>
                            <span className="absolute left-0 -bottom-0.25 w-0 h-0.5 bg-gradient-to-r from-emerald-100 to-purple-900 transition-all duration-400 group-hover:w-full"></span>
                            </a>
                        </li>
                        <li className="px-4 font-semibold">
                            <a className="relative group text-white no-underline">
                                <p className="group-hover:-translate-y-0.25">Log in</p>
                            <span className="absolute left-0 -bottom-0.25 w-0 h-0.5 bg-gradient-to-r from-emerald-100 to-purple-900 transition-all duration-400 group-hover:w-full"></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="md:hidden flex items-center">
                    <button className="text-white focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                {menuOpen && (
                    <div className="md:hidden absolute top-16 right-0 w-1/3 bg-black/90 backdrop-blur-[6px] rounded-lg">
                        <ul className="flex flex-col items-center">
                            <li className="py-2 font-semibold">
                                <a className="relative group text-white no-underline">
                                    <p className="group-hover:-translate-y-0.25">Blog</p>
                                <span className="absolute left-0 -bottom-0.25 w-0 h-0.5 bg-gradient-to-r from-emerald-100 to-purple-900 transition-all duration-400 group-hover:w-full"></span>
                                </a>
                            </li>
                            <li className="py-2 font-semibold">
                                <a className="relative group text-white no-underline">
                                    <p className="group-hover:-translate-y-0.25">Pricing</p>
                                <span className="absolute left-0 -bottom-0.25 w-0 h-0.5 bg-gradient-to-r from-emerald-100 to-purple-900 transition-all duration-400 group-hover:w-full"></span>
                                </a>
                            </li>
                            <li className="py-2 font-semibold">
                                <a className="relative group text-white no-underline">
                                    <p className="group-hover:-translate-y-0.25">Log in</p>
                                <span className="absolute left-0 -bottom-0.25 w-0 h-0.5 bg-gradient-to-r from-emerald-100 to-purple-900 transition-all duration-400 group-hover:w-full"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header
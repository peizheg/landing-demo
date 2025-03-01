const Header = () => {

    return (
        <header className="m-3 py-2.5 w-full bg-black/10 rounded-lg fixed backdrop-blur-[6px] z-5">
            <nav className="flex justify-between max-w-[90rem] mx-auto px-12">
                <div>
                    <a href="/">
                        <img  className="h-6.5" src="/main-camelai.webp" alt="camelAI logo"/>
                    </a>
                </div>
                <div>
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
            </nav>
        </header>
    )
}

export default Header
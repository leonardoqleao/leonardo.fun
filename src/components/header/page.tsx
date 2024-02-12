export default function Header(): JSX.Element {
    return (
        <header className="h-20 w-screen navbar_root">
            <nav className="text-violet-200 h-full mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 " aria-label="Global">
                <div className="text-3xl font-rajdhani">
                    <a className="hover:font-extrabold transition-all" href="/">Leonardo Q.</a>
                </div>
                <div className="text-2xl text-slate-800 uppercase tracking-widest flex w-2/4 justify-evenly font-rajdhani">
                    <div className="px-4 cursor-pointer hover:font-extrabold hover:scale-105 transition-all hover:text-white">
                        <span className="text-3xl mr-2 italic font-semibold font-dancing">/&nbsp;</span><span className="text-white">Me</span>
                    </div>
                    <div className="px-4 cursor-pointer hover:font-extrabold hover:scale-105 transition-all hover:text-white">
                       <span className="text-3xl mr-2 italic font-semibold font-dancing">/&nbsp;</span><span className="text-white">Experiência</span>
                    </div>
                    <div className="px-4 cursor-pointer hover:font-extrabold hover:scale-105 transition-all hover:text-white">
                       <span className="text-3xl mr-2 italic font-semibold font-dancing">/&nbsp;</span><span className="text-white">Contatos</span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

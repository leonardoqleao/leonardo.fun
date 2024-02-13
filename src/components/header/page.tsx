"use client"
import MenuItem from "./fragments/menu_item"
import MobileMenu from "./page.mobile"

export default function Header(): JSX.Element {
    return (
        <header className="h-16 navbar_root">
            <nav className="flex lg:gap-x-12 h-full mx-auto max-w-7xl items-center justify-between px-6 lg:px-8 " aria-label="Global">
                <div className="text-3xl font-rajdhani  hover:scale-105 transition-all">
                    <a href="/">Leonardo Q.</a>
                </div>
                <MobileMenu itens={itens} />
                <div className="hidden lg:flex">
                    <div className="text-2xl text-slate-800 uppercase tracking-widest flex w-2/4 justify-evenly font-rajdhani">
                        {itens.map((item: MenuItemType): JSX.Element => <MenuItem item={item} />)}
                    </div>
                </div>
            </nav>
        </header>
    )
}
const itens: MenuItemType[] = [
    { href: '/', label: 'HOME' },
    { href: '/me', label: 'ME' },
    { href: '/experience', label: 'EXPERIENCE' },
    { href: '/contact', label: 'CONTACTS' }
]
"use client"
import MenuItem from "./fragments/menu_item"
import MobileMenu from "./page.mobile"
import { usePathname } from 'next/navigation';
import './style/animation.scss'
export default function Header(): JSX.Element {
    const path = usePathname()
    const isHome = path === '/';
    return (
        <header className="z-40 fixed top-0 h-16 navbar_root w-screen">
            <nav className="flex lg:gap-x-12 h-full mx-auto max-w-screen-2xl items-center justify-between px-6 lg:px-8 " aria-label="Global">
                <div className=" text-xl font-rajdhani  hover:scale-105 transition-all">
                    <a href="/">Leo.</a>
                </div>
                <MobileMenu itens={itens} />
                <div className="hidden lg:flex">
                    <div className="text-xl text-slate-800 uppercase tracking-widest flex w-2/4 justify-evenly font-rajdhani">
                        {itens.map((item: MenuItemType): JSX.Element => <MenuItem key={item.label} item={item} />)}
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
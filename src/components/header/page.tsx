"use client"
import MenuItem from "./fragments/menu_item"

export default function Header(): JSX.Element {
    return (
        <header className="h-16 navbar_root">
            <nav className=" h-full mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 " aria-label="Global">
                <div className="text-3xl font-rajdhani  hover:scale-105 transition-all">
                    <a href="/">Leonardo Q.</a>
                </div>
                <div className="text-2xl text-slate-800 uppercase tracking-widest flex w-2/4 justify-evenly font-rajdhani">
                    {itens.map((item: MenuItemType): JSX.Element => <MenuItem item={item} />)}
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
"use client"

import { usePathname } from 'next/navigation';

export default function MenuItem({ item }: { item: MenuItemType }): JSX.Element {
    const path = usePathname()
    console.log(path)
    var hover: string = path == item.href ?"" : "hover:"
    return (
        <a href={item.href} className={`px-4 cursor-pointer ${hover}font-extrabold ${hover}scale-105 transition-all ${hover}text-white`}>
            <span className="text-3xl mr-2 italic font-semibold font-dancing">/&nbsp;</span><span className="text-violet-200">{item.label}</span>
        </a>
    )
}
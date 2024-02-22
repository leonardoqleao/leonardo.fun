import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./layout.scss";
import "../components/scss/index.scss"
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Leonardo Q.",
    description: "This is my Web Page!",
    icons: {
        icon: "/images/letter-l.png",
    }
};

export type rootInterface = { children: React.ReactNode };

export default function RootLayout({ children }: rootInterface) {
    return (
        <html className="scroll-smooth">
            <body className={inter.className + " bg-slate-800"} >
                <Header />
                <main className='scroll-smooth bg-gray-100'>
                    {children}
                </main>
                <Footer/>
            </body>
        </html>
    );
}

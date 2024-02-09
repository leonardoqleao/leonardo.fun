import Image from "next/image";
import '@/app/layout.scss'
import Header from "@/components/header/page"

export default function Home() {
    return (
        <html className="scroll-smooth w-auto">
            <body className="body max-w-screen-2xl bg-gray-700">
                {/* <Header /> */}
                <main className="main">
                    <section className="h-screen overflow-hidden bg-gray-100  lg:overflow-hidden">
                        <div className="h-screen mx-auto max-w-screen-2xl lg:px-8">
                            <h1 className="text-black">Teeste</h1>
                        </div>
                    </section>
                </main>
            </body>
        </html>
    );
}

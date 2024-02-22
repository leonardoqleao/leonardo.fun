import '@/app/layout.scss';
import LayoutPage from '@/components/layout/layout.page';

export default function Home(): JSX.Element {
    return (
        <LayoutPage>
            <Presentation />
        </LayoutPage>
    )
}

function Presentation(): JSX.Element {
    return (
        <div>
            <section className="absolute z-20 font-share-tech m-auto max-w-3xl w-full overflow-hidden lg:overflow-visible">
                <h1 className='text-white  m-auto pt-20 pb-10 text-6xl'>
                    <b className='text-7xl h-animate-0'>Hello,</b><br /> <span className='h-animate-1'> I am Leonardo.</span>
                </h1>
                <p className='text-2xl' >
                    <span className="h-animate-2">
                        Full Stack developer passionate about crafting innovative solutions.
                    </span>
                    <br />
                    <span className="h-animate-3">
                        With years of experience across diverse markets, I've had the opportunity to contribute to a variety of interesting and challenging projects.
                    </span>
                </p>
                <br />
                <p className='text-2xl'  >
                    <span className="h-animate-4">
                        On this site, you'll find more information about my professional journey, recent projects, and areas of expertise.
                    </span>
                    <br />
                    <span className="h-animate-5">
                        Feel free to explore and get in touch if you'd like to learn more about my work or discuss potential collaboration opportunities.
                    </span>
                </p>
            </section>
        </div>
    )
}
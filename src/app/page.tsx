import '@/app/layout.scss';
import LayoutPage from '@/components/layout/layout.page';

export default function Home() {
    return (
        <LayoutPage>
            <section className="h-full overflow-hidden lg:overflow-hidden">
                <div className="mx-auto max-w-screen-2xl lg:px-8">
                    <p className="">This is the Home page</p>
                </div>
            </section>
        </LayoutPage>
    )
}

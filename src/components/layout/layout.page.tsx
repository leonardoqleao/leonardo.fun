import { rootInterface } from "@/app/layout";

export default function LayoutPage({ children }: rootInterface): JSX.Element {
    return (
        <div className=" bg-slate-800 ">
            <div className="max-w-7xl min-h-screen mx-auto my-auto text-violet-100">
                {children}
            </div>
        </div>
    )
}
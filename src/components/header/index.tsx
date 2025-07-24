import { Mouse } from "lucide-react";
import type { ReactNode } from "react";

interface IHeader {
    leftContent: ReactNode;
}
export default function Header ({leftContent = "Back to home"}: IHeader) {
    return <header className="sticky top-0 left-0 right-0 bg-white px-12 py-4">
        <section className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
                <Mouse className="rotate-90" width={32} height={32}/>
                <p className="font-medium text-black">foo-run</p>
            </div>
            <div>
                <p className="font-medium text-black">{leftContent}</p>
            </div>
        </section>
    </header>
}

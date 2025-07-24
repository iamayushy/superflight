import type { PropsWithChildren, ReactNode } from "react";

interface ICardProps extends PropsWithChildren {
    footerAction? : ReactNode;
    className?: string;
}
function Card ({children, footerAction, className}: ICardProps) {
    return <section className={`bg-neutral-10 p-[0.6875rem] rounded-[1.875rem] ${className}`}>
        <div className="bg-neutral-0 rounded-[1.3125rem] shadow-card">
            {children}
        </div>
       {footerAction && <div className="pt-3 pb-1">
        {footerAction}
        </div>}
    </section>
}
export default Card;

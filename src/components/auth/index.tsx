import Card from "@/components/ui/card";
import type { PropsWithChildren, ReactNode } from "react";

interface IAuthBaseProps extends PropsWithChildren {
  header: {
    title: string;
    subtitle: string;
    icon: ReactNode;
  };
  footer: ReactNode;
}
function AuthBase({ header, footer,children }: IAuthBaseProps) {
  const {title, subtitle, icon} = header;
  return (
    <Card className="w-[31.25rem]"
    footerAction={
       <div className="flex justify-center">
        {footer}
       </div>
    }
    >
      <div className="p-4 flex flex-col gap-16">
        <div className="flex flex-col justify-center items-center gap-2 pt-8">
          <div className="bg-neutral-20 p-2 flex justify-center items-center rounded-full">{icon}</div>
          <p className="font-bold text-xl">{title}</p>
          <p className="text-sm text-neutral-30">{subtitle}</p>
        </div>
        <div className="">{children}</div>
      </div>
    </Card>
  );
}

export default AuthBase;

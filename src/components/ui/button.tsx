import type { ReactNode, ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

function Button({ children, className, ...props }: IButtonProps) {
  return (
    <button
      className={`bg-primary cursor-pointer rounded-[0.6875rem] py-3.5 text-neutral-0 transition-transform duration-100 active:scale-95 hover:scale-[1.02] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

interface IIconButtonProps extends IButtonProps {}

function IconButton({ children, className, ...props }: IIconButtonProps) {
  return (
    <button
      className={`transition-transform cursor-pointer duration-100 active:scale-95 hover:scale-105 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

Button.Icon = IconButton;

export default Button;

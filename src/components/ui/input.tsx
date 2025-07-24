import type React from "react";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

function Input({ label, ...otherProps }: IInputProps) {
    return (
        <div className="flex flex-col gap-1.5">
            <p className="text-sm font-semibold">{label}</p>
            <input
            className="bg-neutral-40 py-3 px-3.5 rounded-[0.6875rem] w-full outline-0"
            {...otherProps} />
        </div>
    );
}

export default Input;

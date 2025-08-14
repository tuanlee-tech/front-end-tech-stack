import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }
export function Input({ className = '', ...props }: InputProps) {
    return (<input className={`p-2 border rounded w-full ${className}`} {...props} />);
}
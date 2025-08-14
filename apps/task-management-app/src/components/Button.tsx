import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'danger' | 'default';
}
export function Button({ children, variant = 'default', ...props }: ButtonProps) {
    const variantStyles =
        variant === 'default'
            ? 'bg-gray-200 text-black hover:bg-gray-300'
            : variant === 'danger'
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-blue-500 text-white hover:bg-blue-600';
    return (
        <button className={`px-4 py-2 rounded font-semibold ${variantStyles}`} {...props}>
            {children}
        </button>
    )
}
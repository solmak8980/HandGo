import { useState } from "react";

interface InputProps {
    label: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    id: string;
}

export default function Input({
    label,
    type = "text",
    value,
    onChange,
    id,
}: InputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const isFloating = isFocused || value !== "";

    return (
        <div className="relative w-full">
            <input
                type={type}
                id={id}
                value={value}
                placeholder=" "
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="peer w-full px-4 pt-4 pb-2 rounded-lg bg-white text-gray-900 placeholder-transparent shadow-sm ring-1 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                required
            />
            <label
                htmlFor={id}
                className={`absolute left-4  text-gray-600 font-medium  backdrop-blur-sm transition-all duration-200 ease-in-out
          ${isFloating ? "top-1 text-xs" : "top-3 text-sm"}
        `}
            >
                {label}
            </label>
        </div>
    );
}

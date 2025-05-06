interface ButtonProps {
    type?: "submit" | "button";
    children: React.ReactNode;
}

export default function Button({ type = "submit", children }: ButtonProps) {
    return (
        <button
            type={type}
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
        >
            {children}
        </button>
    );
}

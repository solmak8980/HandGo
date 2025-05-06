import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHome, FaInfoCircle } from "react-icons/fa";

const links = [
    { to: "/", label: "Trang chủ", icon: <FaHome /> },
    { to: "/about", label: "Giới thiệu", icon: <FaInfoCircle /> },
    { to: "/", label: "Trang chủ", icon: <FaHome /> },
    { to: "/about", label: "Giới thiệu", icon: <FaInfoCircle /> },
    { to: "/", label: "Trang chủ", icon: <FaHome /> },
    { to: "/about", label: "Giới thiệu", icon: <FaInfoCircle /> },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden bg-gray-800 text-white px-4 py-3 relative">
            <div className="flex items-center justify-between">
                <h1 className="text-lg font-bold">My WebApp</h1>
                <button onClick={() => setOpen(!open)}>
                    <FaBars size={20} />
                </button>
            </div>

            {open && (
                <nav className="absolute top-full left-0 w-full bg-gray-500 text-white z-10 shadow-md">
                    {links.map(({ to, label, icon }) => (
                        <Link
                            key={to}
                            to={to}
                            className="flex items-center gap-2 px-4 py-3 hover:bg-blue-600"
                            onClick={() => setOpen(false)}
                        >
                            {icon} {label}
                        </Link>
                    ))}
                </nav>
            )}
        </div>
    );
}

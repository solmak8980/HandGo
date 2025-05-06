import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaInfoCircle, FaChevronDown, FaChevronRight } from "react-icons/fa";

const links = [
    { to: "/", label: "Trang chủ", icon: <FaHome /> },
    { to: "/df", label: "Trang chủ", icon: <FaHome /> },
    { to: "/d", label: "Trang chủ", icon: <FaHome /> },
    {
        label: "Giới thiệu",
        icon: <FaInfoCircle />,
        children: [
            { to: "/about/company", label: "Công ty" },
            { to: "/about/team", label: "Đội ngũ" },
        ],
    },
    { to: "/about", label: "Trang chủ", icon: <FaHome /> },
    { to: "/a", label: "Trang chủ", icon: <FaHome /> },
];

export default function Sidebar() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (label: string) => {
        setOpenDropdown(openDropdown === label ? null : label);
    };

    return (
        <aside className="w-full text-white hidden md:block h-full">
            <nav className="">
                {links.map((item) => (
                    <div key={item.label}>
                        {item.children ? (
                            <>
                                <button
                                    onClick={() => toggleDropdown(item.label)}
                                    className="flex w-full items-center justify-between px-4 py-3 text-gray-300 hover:bg-blue-600  transition"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-lg">{item.icon}</span>
                                        <span>{item.label}</span>
                                    </div>
                                    {openDropdown === item.label ? (
                                        <FaChevronDown className="text-sm" />
                                    ) : (
                                        <FaChevronRight className="text-sm" />
                                    )}
                                </button>
                                {openDropdown === item.label && (
                                    <div className="ml-10 mt-1 space-y-1">
                                        {item.children.map((child) => (
                                            <NavLink
                                                key={child.to}
                                                to={child.to}
                                                className={({ isActive }) =>
                                                    `block text-sm px-2 py-2  transition ${isActive
                                                        ? "bg-blue-500 text-white"
                                                        : "text-gray-100 hover:text-white hover:bg-blue-600"
                                                    }`
                                                }
                                            >
                                                {child.label}
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </>
                        ) : (
                            <NavLink
                                to={item.to}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-3  transition ${isActive
                                        ? "bg-blue-600 text-white font-semibold"
                                        : "text-gray-100 hover:bg-blue-500 hover:text-white"
                                    }`
                                }
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span>{item.label}</span>
                            </NavLink>
                        )}
                    </div>
                ))}
            </nav>
        </aside>
    );
}

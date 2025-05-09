import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    FaBoxOpen, FaShoppingCart,
    FaChartLine, FaChevronRight, FaChevronDown,
    FaChartPie,
    FaLayerGroup
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";


const links = [
    {
        section: "Overview",
        items: [
            { to: "/", label: "Dashboard", icon: <FaChartPie /> },
            { to: "/dashboard", label: "Ecommerce Dashboard", icon: <FaChartLine /> },
        ],
    },
    {
        section: "Tasks",
        items: [
            {
                to: "/seller/products", label: "Products", icon: <FaBoxOpen />, children: [
                    { to: "/profile", label: "My Product" },
                    { to: "/settings", label: "Edit history" },
                ],
            },
            { to: "/seller/add", label: "Post products ", icon: <FaLayerGroup /> },
            { to: "/seller/orders", label: "Order sold", icon: <FaShoppingCart /> },
            { to: "/seller/orders", label: "Message", icon: <FaMessage /> },
        ],
    },
];

export default function Sidebar() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (label: string) => {
        setOpenDropdown(openDropdown === label ? null : label);
    };

    return (
        <aside className="w-full h-full bg-white/80 text-black hidden md:block overflow-y-auto" >
            <nav className="space-y-4 px-3 sm:px-4 py-5 h-full overflow-y-auto">
                {links.map((group) => (
                    <div key={group.section}>
                        <h2 className="text-sm font-bold text-gray-400 mb-2 uppercase">{group.section}</h2>
                        <div className="space-y-1">
                            {group.items.map((item) => (
                                <div key={item.label}>
                                    {item.children ? (
                                        <>
                                            <button
                                                onClick={() => toggleDropdown(item.label)}
                                                className="flex w-full items-center justify-between px-2  sm:px-3.5 py-2 text-gray-800 hover:bg-gray-200 transition duration-200"
                                            >
                                                <div className="flex items-center gap-2 sm:gap-3">
                                                    <span className="text-base sm:text-base md:text-sm">{item.icon}</span>
                                                    <span className="text-sm 2xl:text-sm md:text-sm font-bold">{item.label}</span>
                                                </div>
                                                {openDropdown === item.label ? (
                                                    <FaChevronDown className="text-xs sm:text-sm" />
                                                ) : (
                                                    <FaChevronRight className="text-xs sm:text-sm" />
                                                )}
                                            </button>
                                            {openDropdown === item.label && (
                                                <div className="ml-6 sm:ml-10 mt-1 space-y-1">
                                                    {item.children.map((child) => (
                                                        <NavLink
                                                            key={child.to}
                                                            to={child.to}
                                                            className={({ isActive }) =>
                                                                `block  py-1.5 rounded-lg transition duration-200 text-xs sm:text-sm md:text-sm font-bold ${isActive
                                                                    ? "bg-blue-400 text-white"
                                                                    : "text-gray-800 hover:bg-gray-200 hover:text-black"
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
                                                `flex items-center gap-3  px-3 sm:px-3.5 py-2 rounded-lg transition duration-200 text-xs sm:text-sm md:text-sm font-bold ${isActive
                                                    ? "bg-blue-500 text-white"
                                                    : "text-gray-800 hover:bg-gray-200 hover:text-black"
                                                }`
                                            }
                                        >
                                            <span className="text-sm sm:text-base md:text-sm">{item.icon}</span>
                                            <span>{item.label}</span>
                                        </NavLink>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </nav>
        </aside >
    );
}

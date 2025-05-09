import { useState } from "react";
import { Link } from "react-router-dom";
import {
    FaBars,
    FaChartLine,
    FaBoxOpen,
    FaShoppingCart,

    FaChevronDown,
    FaChevronRight,
    FaLayerGroup,
    FaChartPie,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const navSections = [
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

export default function NavbarMobile() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const toggleDropdown = (label: string) => {
        setOpenDropdown(openDropdown === label ? null : label);
    };

    return (
        <div className="md:hidden bg-white text-black px-4 py-3 relative shadow">
            <div className="flex items-center justify-between">
                <Link to="/" className="text-lg font-bold">HandGo</Link>
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    <FaBars size={20} />
                </button>
            </div>

            {menuOpen && (
                <div className="absolute left-0 top-full w-full bg-black/80 text-white z-50 py-3 shadow-lg">
                    {navSections.map((section) => (
                        <div key={section.section} className="mb-3">
                            <h3 className="text-sm font-semibold text-gray-300 px-4 uppercase">{section.section}</h3>
                            <div className="mt-1 px-4">
                                {section.items.map((item) => (
                                    <div key={item.label}>
                                        {item.children ? (
                                            <>
                                                <button
                                                    onClick={() => toggleDropdown(item.label)}
                                                    className="w-full text-left flex items-center justify-between px-4 py-2 hover:bg-gray-200"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <span>{item.icon}</span>
                                                        <span>{item.label}</span>
                                                    </div>
                                                    {openDropdown === item.label ? (
                                                        <FaChevronDown size={12} />
                                                    ) : (
                                                        <FaChevronRight size={12} />
                                                    )}
                                                </button>
                                                {openDropdown === item.label && (
                                                    <div className="pl-10 py-1 space-y-1">
                                                        {item.children.map((child) => (
                                                            <Link
                                                                key={child.to}
                                                                to={child.to}
                                                                className="block py-1 text-sm hover:text-blue-600"
                                                                onClick={() => setMenuOpen(false)}
                                                            >
                                                                {child.label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            <Link
                                                to={item.to}
                                                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-200"
                                                onClick={() => setMenuOpen(false)}
                                            >
                                                <span>{item.icon}</span>
                                                <span>{item.label}</span>
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

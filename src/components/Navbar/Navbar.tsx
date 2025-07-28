import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Images } from "../../constants/image";
import type { AppRoute } from "../../types/route";
import { FaBars, FaChevronDown, FaChevronRight, FaTimes } from "react-icons/fa";
import { appRoutes } from "../../routes";
import { NavLink } from "react-router-dom";

const generateLinksFromRoutes = (routes: AppRoute[]) => {
    const linksMap: { [section: string]: any[] } = {};

    routes.forEach((route) => {
        if (route.layout === "main") {
            route.children?.forEach((child) => {
                if (!child.title || !child.section) return;

                const section = child.section;

                const item = {
                    to: child.path,
                    label: child.title,
                    icon: child.icon,
                    children: child.children,
                };

                linksMap[section] = linksMap[section] || [];
                linksMap[section].push(item);
            });
        }
    });

    return Object.entries(linksMap).map(([section, items]) => ({
        section,
        items,
    }));
};

export default function NavbarMobile() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [generatedLinks, setGeneratedLinks] = useState<any[]>([]);

    const toggleDropdown = (label: string) => {
        setOpenDropdown(openDropdown === label ? null : label);
    };

    useEffect(() => {
        const generatedLinks = generateLinksFromRoutes(appRoutes);
        setGeneratedLinks(generatedLinks);
        // console.log(generatedLinks);
    }, []);

    return (
        <div className="md:hidden bg-white text-black px-3 py-2 relative shadow">
            <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center">
                    <img
                        src={Images.Logo}
                        alt="Logo"
                        className="w-28 md:w-36 h-auto object-contain"
                    />
                </Link>
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={`p-2 rounded transition ${menuOpen ? "bg-gray-50 text-red-600 rounded-2xl" : "hover:bg-gray-100"
                        }`}
                >
                    {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>

            </div>

            {menuOpen && (
                <div className="absolute left-0 top-full w-full bg-black/70 text-white z-50 py-3 shadow">
                    {generatedLinks.map((section) => (
                        <div key={section.section} className="mb-3">
                            <h3 className="text-xs font-bold text-gray-300 px-4 uppercase">{section.section}</h3>
                            <div className="mt-1 px-4">
                                {section.items.map((item: any) => (
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
                                                        {item.children.map((child: any) => (
                                                            <NavLink
                                                                to={child.path || "/"}
                                                                className={({ isActive }) =>
                                                                    `flex items-center gap-3 px-3 sm:px-3.5 py-2 rounded-lg transition duration-200 text-xs sm:text-sm md:text-sm font-bold ${isActive
                                                                        ? "bg-blue-500 text-white"
                                                                        : "text-gray-800 hover:bg-gray-200 hover:text-black"
                                                                    }`
                                                                }
                                                            >
                                                                <span className="text-sm sm:text-base md:text-sm">{child.icon}</span>
                                                                <span>{child.title}</span>
                                                            </NavLink>
                                                        ))}
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            <NavLink
                                                to={item.to || "/"}
                                                className={({ isActive }) =>
                                                    `flex items-center gap-3 px-3 sm:px-3.5 py-2 rounded-lg transition duration-200 text-xs sm:text-sm md:text-sm font-bold ${isActive
                                                        ? "bg-blue-500 text-white"
                                                        : "text-white hover:bg-gray-200 hover:text-black"
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
                </div>
            )}
        </div>
    );
}

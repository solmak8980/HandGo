import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import type { AppRoute } from "../../types/route";
import { appRoutes } from "../../routes";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const getFullPath = (parentPath: string, route: AppRoute): string => {
    return `${parentPath}/${route.path}`.replace(/\/+/g, "/");
};

const generateLinksFromRoutes = (routes: AppRoute[], parentPath: string = "") => {
    const linksMap: { [section: string]: AppRoute[] } = {};

    routes.forEach((route) => {
        const fullParentPath = getFullPath(parentPath, route);

        if (route.children) {
            route.children.forEach((child) => {
                const childFullPath = getFullPath(fullParentPath, child);

                if (child.title && child.section) {
                    const item: AppRoute = {
                        ...child,
                        path: childFullPath,
                    };

                    linksMap[child.section] = linksMap[child.section] || [];
                    linksMap[child.section].push(item);
                }
            });
        }

        if (route.title && route.section) {
            const item: AppRoute = {
                ...route,
                path: fullParentPath, // Gán path cha đầy đủ
            };

            linksMap[route.section] = linksMap[route.section] || [];
            linksMap[route.section].push(item);
        }
    });

    return Object.entries(linksMap).map(([section, items]) => ({
        section,
        items,
    }));
};


export default function Sidebar() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [generatedLinks, setGeneratedLinks] = useState<
        { section: string; items: AppRoute[] }[]
    >([]);

    const toggleDropdown = (label: string) => {
        setOpenDropdown(openDropdown === label ? null : label);
    };

    useEffect(() => {
        const generated = generateLinksFromRoutes(appRoutes);
        setGeneratedLinks(generated);
        console.log(generated);

    }, []);

    return (
        <aside className="w-full h-full bg-white/80 text-black hidden md:block overflow-y-auto">
            <nav className="space-y-6 px-4 sm:px-4 py-6 h-full overflow-y-auto">
                {generatedLinks.map((group) => (
                    <div key={group.section}>
                        <h2 className="text-sm font-bold text-gray-400 mb-2 uppercase">{group.section}</h2>
                        <div className="space-y-1">
                            {group.items.map((item) => (
                                <div key={item.title}>
                                    {item.children ? (
                                        <>
                                            <button
                                                onClick={() => toggleDropdown(item.title!)}
                                                className="flex w-full items-center justify-between px-2 sm:px-3.5 py-2 text-gray-800 hover:bg-gray-200 transition duration-200"
                                            >
                                                <div className="flex items-center gap-2 sm:gap-3">
                                                    <span className="text-base sm:text-base md:text-sm">{item.icon}</span>
                                                    <span className="text-sm 2xl:text-sm md:text-sm font-bold">
                                                        {item.title}
                                                    </span>
                                                </div>
                                                {openDropdown === item.title ? (
                                                    <FaChevronDown className="text-xs sm:text-sm" />
                                                ) : (
                                                    <FaChevronRight className="text-xs sm:text-sm" />
                                                )}
                                            </button>
                                            {openDropdown === item.title && (
                                                <div className="ml-6 sm:ml-10 mt-1 space-y-1">
                                                    {item.children?.map((child) => (
                                                        <NavLink
                                                            key={child.title}
                                                            to={child.path || "/"}
                                                            className={({ isActive }) =>
                                                                `block py-1.5 px-2 rounded-lg transition duration-200 text-xs sm:text-sm md:text-sm font-bold ${isActive
                                                                    ? "bg-blue-400 text-white"
                                                                    : "text-gray-800 hover:bg-gray-200 hover:text-black"
                                                                }`
                                                            }
                                                        >
                                                            {child.title}
                                                        </NavLink>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <NavLink
                                            to={item.path || "/"}
                                            className={({ isActive }) =>
                                                `flex items-center gap-3 px-3 sm:px-3.5 py-2 rounded-lg transition duration-200 text-xs sm:text-sm md:text-sm font-bold ${isActive
                                                    ? "bg-blue-500 text-white"
                                                    : "text-gray-800 hover:bg-gray-200 hover:text-black"
                                                }`
                                            }
                                        >
                                            <span className="text-sm sm:text-base md:text-sm">{item.icon}</span>
                                            <span>{item.title}</span>
                                        </NavLink>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </nav>
        </aside>
    );
}

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import type { AppRoute } from "../../types/route";
import { appRoutes } from "../../routes";

const getFullPath = (parentPath: string, childPath?: string): string => {
  return `${parentPath}/${childPath || ""}`.replace(/\/+/g, "/");
};

const generateLinksFromRoutes = (
  routes: AppRoute[],
  role: string = "admin"
) => {
  const linksMap: { [section: string]: AppRoute[] } = {};

  routes.forEach((route) => {
    const parentPath = route.path || "";

    // Route con (nằm trong children)
    if (route.children) {
      route.children.forEach((child) => {
        const fullPath = getFullPath(parentPath, child.path);

        if (child.title && child.section && child.role === role) {
          const item: AppRoute = {
            ...child,
            path: fullPath,
          };

          linksMap[child.section] = linksMap[child.section] || [];
          linksMap[child.section].push(item);
        }
      });
    }

    // Route cha nếu không có children
    if (route.title && route.section && route.role === role) {
      const fullPath = getFullPath("", route.path);

      const item: AppRoute = {
        ...route,
        path: fullPath,
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

export default function SideBarRoot() {
  const [generatedLinks, setGeneratedLinks] = useState<
    { section: string; items: AppRoute[] }[]
  >([]);

  useEffect(() => {
    const generated = generateLinksFromRoutes(appRoutes, "admin");
    setGeneratedLinks(generated);
  }, []);

  return (
    <aside className="w-full h-full bg-white/80 text-black hidden md:block overflow-y-auto">
      <nav className="space-y-6 px-4 sm:px-4 py-6 h-full overflow-y-auto">
        {generatedLinks.map((group) => (
          <div key={group.section}>
            <h2 className="text-sm font-bold text-gray-400 mb-2 uppercase">
              {group.section}
            </h2>
            <div className="space-y-1">
              {group.items.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.path || "/"}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 sm:px-3.5 py-2 rounded-lg transition duration-200 text-xs sm:text-sm md:text-sm font-bold ${
                      isActive
                        ? "bg-blue-500 text-white"
                        : "text-gray-800 hover:bg-gray-200 hover:text-black"
                    }`
                  }
                >
                  <span className="text-sm sm:text-base md:text-sm">
                    {item.icon}
                  </span>
                  <span>{item.title}</span>
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}

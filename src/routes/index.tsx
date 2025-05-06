import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import type { AppRoute } from "../types/route";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/auth/LoginPage";
import DashBoardPage from "../pages/admin/DashboardPages";
import AuthLayout from "../layouts/AuthLayout";
import AdminLayout from "../layouts/AdminLayout";
import RegisterPage from "../pages/auth/RegisterPage";


const getLayoutComponent = (layout?: string | null) => {
    switch (layout) {
        case "main":
            return MainLayout;
        case "auth":
            return AuthLayout;
        case "admin":
            return AdminLayout;
        default:
            return undefined;
    }
};

const generateRoutes = (routes: AppRoute[]) => {
    return routes.map((route) => {
        const Layout = getLayoutComponent(route.layout);
        if (route.children && Layout) {
            return {
                path: route.path,
                element: <Layout />,
                children: route.children.map((child) => ({
                    index: child.index,
                    path: child.path,
                    element: child.element,
                })),
            };
        }

        return {
            path: route.path,
            element: route.element,
        };
    });
};

export const appRoutes: AppRoute[] = [
    {
        path: "/",
        layout: "main",
        children: [
            { path: "/", element: <HomePage />, title: "Trang chủ" },
            { path: "/about", element: <AboutPage />, title: "Giới thiệu" },
        ],
    },
    {
        path: "/auth",
        layout: "auth",
        children: [
            {
                index: true,
                element: <Navigate to="/auth/login" replace />,
            },
            {
                path: "/auth/login",
                element: <LoginPage />,
                title: "Login",
            },
            {
                path: "/auth/register",
                element: <RegisterPage />,
                title: "Login",
            },
        ],
    },
    {
        path: "/admin",
        layout: "admin",
        children: [
            {
                index: true,
                element: <Navigate to="/admin/dashboard" replace />,
            },
            {
                path: "/admin/dashboard",
                element: <DashBoardPage />,
                title: "Dashboard",
            },
        ],
    }


];

export const router = createBrowserRouter([
    ...generateRoutes(appRoutes),
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);

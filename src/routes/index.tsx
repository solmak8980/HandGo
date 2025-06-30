import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import AdminLayout from "../layouts/AdminLayout";

import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import NotFoundPage from "../pages/NotFoundPage";

import DashBoardPage from "../pages/admin/DashboardPages";
import EDashboardPage from "../pages/seller/EDashboardPage";
import AboutPage from "../pages/AboutPage";

import {
  FaChartPie,
  FaChartLine,
  FaBoxOpen,
  FaLayerGroup,
  FaShoppingCart,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

import type { AppRoute } from "../types/route";
import ProductPage from "../pages/seller/ProductPage";
import { ClockCircleFilled } from "@ant-design/icons";

//Hàm hỗ trợ lấy component layout
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

// Hàm build route cho react-router
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

//Khai báo các route chính
export const appRoutes: AppRoute[] = [
  {
    path: "/",
    layout: "main",
    children: [
      {
        path: "",
        element: <DashBoardPage />,
        title: "Dashboard",
        icon: <FaChartPie />,
        section: "Overview",
        role: "seller",
      },
      {
        path: "ecommerce",
        element: <EDashboardPage />,
        title: "Ecommerce Dashboard",
        icon: <FaChartLine />,
        section: "Overview",
        role: "seller",
      },
      {
        path: "seller/products",
        element: <ProductPage />,
        title: "Products",
        icon: <FaBoxOpen />,
        section: "Tasks",
        role: "seller",
      },
            {
        path: "seller/history",
        element: <AboutPage />,
        title: "History",
        icon: <ClockCircleFilled />,
        section: "Tasks",
        role: "seller",
      },
      {
        path: "seller/add",
        element: <AboutPage />,
        title: "Post Products",
        icon: <FaLayerGroup />,
        section: "Tasks",
        role: "seller",
      },
      {
        path: "seller/orders",
        element: <AboutPage />,
        title: "Order Sold",
        icon: <FaShoppingCart />,
        section: "Tasks",
        role: "seller",
      },
      {
        path: "seller/messages",
        element: <AboutPage />,
        title: "Message",
        icon: <FaMessage />,
        section: "Tasks",
        role: "seller",
      },
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
        path: "login",
        element: <LoginPage />,
        title: "Login",
      },
      {
        path: "register",
        element: <RegisterPage />,
        title: "Register",
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
        path: "dashboard",
        element: <DashBoardPage />,
        title: "Dashboard",
        role: "admin",
        section: "Admin",
        icon: <FaChartPie />,
      },
    ],
  },
];

//Router dùng trong ứng dụng
export const router = createBrowserRouter([
  ...generateRoutes(appRoutes),
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

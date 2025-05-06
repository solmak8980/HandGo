import { Outlet, NavLink } from "react-router-dom";
import { Images } from "../constants/image";

export default function AuthLayout() {
    return (
        <div
            className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4"
            style={{ backgroundImage: `url(${Images.BgAuth})` }}
        >
            <div className="w-full max-w-md">
                <div className="flex bg-black/40 rounded-t-xl border-b-0 shadow-md backdrop-blur-md overflow-hidden">
                    <NavLink
                        to="/auth/login"
                        className={({ isActive }) =>
                            `w-1/2 text-center text-sm px-4 py-2 transition font-medium ${isActive
                                ? "bg-white text-black shadow"
                                : "text-white hover:bg-white/20"
                            }`
                        }
                    >
                        Đăng nhập
                    </NavLink>
                    <NavLink
                        to="/auth/register"
                        className={({ isActive }) =>
                            `w-1/2 text-center text-sm px-4 py-2 transition font-medium ${isActive
                                ? "bg-white text-black shadow"
                                : "text-white hover:bg-white/20"
                            }`
                        }
                    >
                        Đăng ký
                    </NavLink>
                </div>
                <div className="w-full rounded-b-xl border-t-0  overflow-hidden shadow-2xl backdrop-blur-md bg-black/40 p-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

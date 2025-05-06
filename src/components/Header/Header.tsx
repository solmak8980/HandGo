import { FaUserCircle, FaSignOutAlt, FaCog, FaIdBadge } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gray-800 text-white px-6 py-4 shadow-md flex items-center justify-between relative">
            <div className="text-2xl font-bold">
                HandGo
            </div>

            <div className="w-1/3 max-w-md">
                <input
                    type="text"
                    placeholder="Tìm kiếm..."
                    className="w-full px-4  py-1 rounded-xl bg-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
            </div>

            {/* Profile */}
            <div className="relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 focus:outline-none hover:text-gray-200 transition"
                >
                    <FaUserCircle size={26} />
                    <span className="hidden md:inline">Tài khoản</span>
                </button>

                {isOpen && (
                    <div
                        className="absolute right-0 mt-2 w-48 bg-white text-gray-700 rounded-md shadow-lg ring-1 ring-black/10 animate-fade-in z-50"
                    >
                        <a
                            href="/profile"
                            className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 hover:rounded-t-lg transition"
                        >
                            <FaIdBadge className="text-blue-500" /> Thông tin
                        </a>
                        <a
                            href="/settings"
                            className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition"
                        >
                            <FaCog className="text-gray-500" /> Cài đặt
                        </a>
                        <a
                            href="/logout"
                            className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 hover:rounded-b-lg transition"
                        >
                            <FaSignOutAlt className="text-red-600" /> Đăng xuất
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
}

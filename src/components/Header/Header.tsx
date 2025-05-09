import {
    FaUserCircle,
    FaSignOutAlt,
    FaCog,
    FaIdBadge,
    FaChevronDown,
    FaChevronLeft,
} from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Images } from "../../constants/image";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white px-4 py-2 text-black shadow flex items-center justify-between z-50">

            <div className="w-1/4 items-center justify-center">
                <Link to="/" className="flex items-center">
                    <img
                        src={Images.Logo}
                        alt="Logo"
                        className="w-28 md:w-36 h-auto object-contain"
                    />
                </Link>
            </div>

            <div className="w-2/4 flex justify-center">
            </div>

            <div className="w-1/4 flex justify-end">
                <div className="relative">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-2 focus:outline-none hover:text-gray-600 transition"
                    >
                        <FaUserCircle size={26} />
                        <span className="hidden md:inline">Tài khoản</span>
                        {isOpen ? (
                            <FaChevronLeft className="text-sm" />
                        ) : (
                            <FaChevronDown className="text-sm" />
                        )}
                    </button>

                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white text-gray-700 rounded-md shadow-lg ring-1 ring-black/10 animate-fade-in z-50">
                            <Link
                                to="/profile"
                                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 hover:rounded-t-lg transition"
                            >
                                <FaIdBadge className="text-blue-500" /> Thông tin
                            </Link>
                            <Link
                                to="/settings"
                                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 transition"
                            >
                                <FaCog className="text-gray-500" /> Cài đặt
                            </Link>
                            <Link
                                to="/logout"
                                className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 hover:rounded-b-lg transition"
                            >
                                <FaSignOutAlt className="text-red-600" /> Đăng xuất
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

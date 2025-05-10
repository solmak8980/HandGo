import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import { useMediaQuery } from "react-responsive";

export default function MainLayout() {
    const isMobile = useMediaQuery({ maxWidth: 760 });

    return (
        <div className="min-h-screen flex flex-col">
            <div className="fixed top-0 left-0 right-0 z-50">
                {!isMobile ? <Header /> : <Navbar />}
            </div>

            <div className="flex flex-1 pt-16">
                {!isMobile && (
                    <aside className="w-64 fixed top-16 bottom-0 left-0 z-40 bg-white shadow">
                        <Sidebar />
                    </aside>
                )}

                <main
                    className={`flex-1 overflow-auto p-6 transition-all duration-300 ${!isMobile ? 'ml-64' : ''
                        } bg-gray-200 min-h-[calc(100vh-4rem)]`}
                >
                    <Outlet />
                </main>
            </div>
        </div>
    );
}


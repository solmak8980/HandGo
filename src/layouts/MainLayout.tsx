import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import { useMediaQuery } from "react-responsive";

export default function MainLayout() {
    const isMobile = useMediaQuery({ maxWidth: 760 });

    return (
        <div className="min-h-screen flex flex-col overflow-y-auto">
            {!isMobile && <Header />}
            {isMobile && <Navbar />}

            <div className="flex flex-1 w-full ">
                {!isMobile && (
                    <aside className="max-w-1/5 bg-white/80 text-black ">
                        <Sidebar />
                    </aside>
                )}

                <main className="flex-1 w-full p-6 bg-gray-200 bg-opacity-60 dark:bg-navy-900 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

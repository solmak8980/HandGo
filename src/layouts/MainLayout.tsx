import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

export default function MainLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="hidden md:block">
                <Header />
            </div>
            <div className="md:hidden">
                <Navbar />
            </div>

            <div className="flex flex-1 w-full">
                <aside className="hidden md:block w-1/5 bg-gray-500 ">
                    <Sidebar/>
                </aside>

                <main className="flex-1 w-full p-6 bg-white">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

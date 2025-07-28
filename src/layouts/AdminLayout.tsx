import { Outlet } from "react-router-dom";
import SideBarRoot from "../components/Sidebar/SidebarRoot";

const AdminLayout = () => {
    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <aside className="w-64  text-white space-y-4">
                 <SideBarRoot />
            </aside>
            
            <main className="flex-1 bg-gray-100 p-6">
                {/* <Outlet /> */}
            </main>
        </div>
    );
};

export default AdminLayout;

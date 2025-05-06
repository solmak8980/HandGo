import { Outlet, Link } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div className="min-h-screen flex">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 text-white p-4 space-y-4">
                <h2 className="text-xl font-bold">Quản trị</h2>
                <nav className="space-y-2">
                    <Link to="/admin/dashboard" className="block hover:text-yellow-300">Dashboard</Link>
                    <Link to="/admin/users" className="block hover:text-yellow-300">Người dùng</Link>
                </nav>
            </aside>

            {/* Content */}
            <main className="flex-1 bg-gray-100 p-6">
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;

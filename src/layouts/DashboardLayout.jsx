import { Outlet } from "react-router";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="dashboard-content">
                <Navbar />
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
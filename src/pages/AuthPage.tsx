import { Outlet } from "react-router-dom";

export default function AuthPage() {
    return (
        <div className="flex content-center h-screen">
            <Outlet />
        </div>
    )
} 
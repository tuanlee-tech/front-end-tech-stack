import { Link, Outlet } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Button } from "../components/Button";
import { useAuth } from "../contexts/AuthContext";
import LoginForm from "../features/auth/components/LoginForm";

interface MainLayoutProps {
    children?: ReactNode;
}
export default function MainLayout({ children }: MainLayoutProps) {
    const { user, logout } = useAuth();
    if (!user) return <LoginForm />
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <nav className="bg-white dark:bg-gray-800 p-4 shadow">
                <div className="container mx-auto flex justify-between">
                    <div className="space-x-4">
                        <Link to="/">Trang chủ</Link>
                        <Link to="/tasks">Tasks</Link>
                    </div>
                    <Button onClick={logout}>Đăng xuất</Button>
                </div>
            </nav>
            <main className="container mx-auto p-4">
                {children || <Outlet />}
            </main>
        </div>
    );
}
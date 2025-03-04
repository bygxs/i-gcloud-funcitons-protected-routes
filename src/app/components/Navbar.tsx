// components/Navbar.tsx
"use client";

import { useAuth } from "../lib/AuthContext";
import { logout } from "../lib/auth";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold">
          My App
        </a>
        <div>
          {loading ? null : user ? (
            <>
              <span className="mr-4">Welcome, {user.email}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Sign Out
              </button>
            </>
          ) : (
            <a href="/login" className="mr-4">
              Login
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}

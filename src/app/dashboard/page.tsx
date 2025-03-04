// app/dashboard/page.tsx
'use client';

import { useAuth } from '../lib/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { logout } from '../lib/auth'; // Import the logout function

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null; // Or a loading spinner, as the redirect will happen
  }

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/login'); // Redirect to login after logout
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p>Welcome, {user.email}!</p>
        <p>This is the protected dashboard page.</p>
        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">
          Sign Out
        </button>
      </main>
    </div>
  );
}
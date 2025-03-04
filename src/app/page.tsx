import Image from "next/image";

// app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <nav className="bg-white dark:bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-xl font-bold">
            My App
          </a>
          <div>
            <a href="/login" className="mr-4">
              Login
            </a>
            <a href="/dashboard">Dashboard</a>
          </div>
        </div>
      </nav>
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to My App</h1>
        <p>This is a simple app with protected routes.</p>
        <div className="mt-8">
          <a
            href="/login"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Login
          </a>
          <a
            href="/dashboard"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Dashboard
          </a>
        </div>
      </main>
    </div>
  );
}
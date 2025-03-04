// app/dashboard/page.tsx
export default function DashboardPage() {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <main className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <p>This is the protected dashboard page.</p>
        </main>
      </div>
    );
  }
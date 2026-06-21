export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold">Student Dashboard</h1>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow text-center"><p className="text-2xl font-bold text-blue-600">3</p><p>Active Orders</p></div>
          <div className="bg-white p-6 rounded-lg shadow text-center"><p className="text-2xl font-bold text-green-600">12</p><p>Completed</p></div>
          <div className="bg-white p-6 rounded-lg shadow text-center"><p className="text-2xl font-bold text-purple-600">₹4,997</p><p>Total Spent</p></div>
          <div className="bg-white p-6 rounded-lg shadow text-center"><p className="text-2xl font-bold text-yellow-600">4.8⭐</p><p>Rating</p></div>
        </div>
      </div>
    </div>
  )
}

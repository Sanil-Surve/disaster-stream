// src/App.js
import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <h1 className="text-2xl font-bold text-blue-600">
                Disaster Stream
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="/" className="text-gray-600 hover:text-blue-600">
                Dashboard
              </a>
              <a href="/" className="text-gray-600 hover:text-blue-600">
                Map
              </a>
              <a href="/" className="text-gray-600 hover:text-blue-600">
                Alerts
              </a>
              <a href="/" className="text-gray-600 hover:text-blue-600">
                Reports
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row mt-16">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 bg-white p-4 shadow-md">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Filters</h2>
          <div className="space-y-4">
            <div>
              <label className="text-gray-600 font-medium">Disaster Type</label>
              <select className="w-full p-2 border rounded-md text-gray-600">
                <option>All</option>
                <option>Earthquake</option>
                <option>Flood</option>
                <option>Wildfire</option>
                <option>Hurricane</option>
              </select>
            </div>
            <div>
              <label className="text-gray-600 font-medium">Date Range</label>
              <input
                type="date"
                className="w-full p-2 border rounded-md text-gray-600"
              />
            </div>
          </div>
        </aside>

        {/* Dashboard */}
        <main className="flex-1 bg-gray-50 p-4">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="text-gray-700 text-xl font-semibold">
                Active Disasters
              </h3>
              <p className="mt-2 text-gray-600">Total: 25</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="text-gray-700 text-xl font-semibold">
                New Reports
              </h3>
              <p className="mt-2 text-gray-600">In the last hour: 42</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="text-gray-700 text-xl font-semibold">
                Response Teams
              </h3>
              <p className="mt-2 text-gray-600">Deployed: 15</p>
            </div>
          </section>

          {/* Map Section */}
          <section className="bg-white p-4 shadow-md rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-gray-700">
              Disaster Map
            </h3>
            <div className="w-full h-64 bg-gray-200 rounded-md">
              {/* Placeholder for a map component */}
              <p className="text-gray-600 text-center pt-28">
                Map View Coming Soon
              </p>
            </div>
          </section>

          {/* Real-Time Data Feed */}
          <section className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-gray-700">
              Real-Time Data Feed
            </h3>
            <div className="mt-4 space-y-2">
              <div className="border-b pb-2">
                <p className="text-gray-600">
                  Earthquake in Delhi - Magnitude 5.3
                </p>
                <span className="text-gray-400 text-sm">5 minutes ago</span>
              </div>
              <div className="border-b pb-2">
                <p className="text-gray-600">Flood warning issued in Kerala</p>
                <span className="text-gray-400 text-sm">30 minutes ago</span>
              </div>
              <div className="border-b pb-2">
                <p className="text-gray-600">Wildfire spreading in Madhya Pradesh</p>
                <span className="text-gray-400 text-sm">1 hour ago</span>
              </div>
              <div className="border-b pb-2">
                <p className="text-gray-600">Tornado sighting in Tamil Nadu</p>
                <span className="text-gray-400 text-sm">2 hours ago</span>
              </div>
              <div className="border-b pb-2">
                <p className="text-gray-600">
                  Hurricane moving towards Odisha coast
                </p>
                <span className="text-gray-400 text-sm">3 hours ago</span>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white shadow-md p-4 text-center mt-8">
        <p className="text-gray-600 text-sm">
          © 2024 Disaster Stream. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;

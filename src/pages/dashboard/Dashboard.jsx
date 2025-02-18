import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      
      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <span className="text-2xl font-semibold text-blue-900">No. of Users</span>
          <p className="text-3xl font-bold text-gray-700 mt-2">Na</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <span className="text-2xl font-semibold text-blue-900">No. of Teachers</span>
          <p className="text-3xl font-bold text-gray-700 mt-2">Na</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
          <span className="text-2xl font-semibold text-blue-900">No. of Test Papers</span>
          <p className="text-3xl font-bold text-gray-700 mt-2">Na</p>
        </div>
      </div>

      {/* Test Publish Requests */}
      <div className="mt-10 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold text-blue-900 mb-4">Test Publish Requests</h2>
        <div className="bg-gray-200 rounded-lg p-4 h-40 flex items-center justify-center text-gray-600">
          No requests available
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

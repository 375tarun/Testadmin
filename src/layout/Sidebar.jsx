import React from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-blue-500 text-white flex flex-col items-center p-6 shadow-lg">
    {/* Profile Component */}
    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-blue-500 font-bold text-2xl shadow-md mt-4">
      P
    </div>
    {/* Navigation Links */}
    <nav className="flex flex-col gap-6 w-full mt-10">
      <Link to="/" className="text-center py-3 text-lg font-semibold rounded-lg hover:bg-blue-600 transition">
        Dashboard
      </Link>
      <Link to="/tests" className="text-center py-3 text-lg font-semibold rounded-lg hover:bg-blue-600 transition">
        Test Papers
      </Link>
    </nav>
  </div>
  )
}

export default Sidebar
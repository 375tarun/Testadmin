import React from "react";
import { FaHome, FaFileAlt, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen p-4 bg-blue-900 text-white flex flex-col justify-between">
      {/* Logo */}
      <div className="text-3xl font-bold mb-12">Dashboard</div>

      {/* Sidebar Menu */}
      <ul className="w-full flex-grow space-y-4">
        <li className="p-3 rounded-lg hover:bg-blue-800 transition-all duration-300 ease-in-out flex items-center gap-3 cursor-pointer text-lg">
          <FaHome />
          <Link to="/" className="font-semibold">Dashboard</Link>
        </li>
        <li className="p-3 rounded-lg hover:bg-blue-800 transition-all duration-300 ease-in-out flex items-center gap-3 cursor-pointer text-lg">
          <FaFileAlt />
          <Link to="/tests" className="font-semibold">Test Papers</Link>
        </li>
      </ul>

      {/* Logout Button */}
      <div className="mt-auto w-full">
        <button className="w-full p-3 rounded-lg bg-red-700 text-white hover:bg-red-600 transition-all duration-300 ease-in-out flex items-center justify-center gap-3">
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

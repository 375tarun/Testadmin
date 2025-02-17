import React, { useState } from "react";
import { FaUser, FaFileAlt, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div
      className={`${
        sidebarOpen ? "w-64" : "w-16"
      } bg-blue-900 text-white h-screen transition-all duration-300 flex flex-col items-center pt-5`}
    >
      <div
        className="cursor-pointer text-2xl mb-5"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FaBars />
      </div>
      <div className="bg-white text-blue-900 text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-5">
        {/* Add user avatar or icon here */}
      </div>
      <ul className="w-full overflow-hidden"> {/* Remove overflow behavior to prevent scrolling */}
        <li
          className="p-4 hover:bg-blue-800 transition-all duration-300 flex items-center gap-3 cursor-pointer"
          onClick={() => setActivePage("profile")}
        >
          <FaUser /> {sidebarOpen && <Link
          to="/"
          className="text-center py-3 text-lg font-semibold rounded-lg "
        >
          Dashboard
        </Link>}
        </li>
        <li
          className="p-4 hover:bg-blue-800 transition-all duration-300 flex items-center gap-3 cursor-pointer"
          onClick={() => setActivePage("dashboard")}
        >
          <FaFileAlt /> {sidebarOpen && <Link
          to="/tests"
          className="text-center py-3 text-lg font-semibold rounded-lg"
        >
          Test Papers
        </Link>}
        </li>
      </ul>
      <div className="w-full mt-auto">
        {/* You can add footer links or any additional content here */}
      </div>
    </div>
  );
};

export default Sidebar;

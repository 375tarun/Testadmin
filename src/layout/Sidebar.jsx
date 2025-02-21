import React, { useState } from "react";
import { FaHome, FaFileAlt, FaBars, FaTimes, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "Admin",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Sidebar */}
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

        {/* Profile Icon (Click to Edit) */}
        <div
          className="bg-white text-blue-900 text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-5 cursor-pointer"
          onClick={() => setProfileOpen(true)}
        >
          <FaUser />
        </div>

        {/* Sidebar Menu */}
        <ul className="w-full flex-grow">
          <li className="p-4 hover:bg-blue-800 transition-all duration-300 flex items-center gap-3 cursor-pointer">
            <FaHome /> {sidebarOpen && <Link to="/" className="text-lg font-semibold">Dashboard</Link>}
          </li>
          <li className="p-4 hover:bg-blue-800 transition-all duration-300 flex items-center gap-3 cursor-pointer">
            <FaFileAlt /> {sidebarOpen && <Link to="/tests" className="text-lg font-semibold">Test Papers</Link>}
          </li>
        </ul>

        {/* Logout Button */}
        <div className="w-full p-4 bg-red-700 transition-all duration-300 flex items-center gap-3 cursor-pointer mb-5">
          <FaSignOutAlt /> {sidebarOpen && <span className="text-lg font-semibold">Logout</span>}
        </div>
      </div>

      {/* Profile Edit Modal */}
      {profileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-blue-900">Edit Profile</h2>
              <button onClick={() => setProfileOpen(false)}>
                <FaTimes className="text-gray-600 text-lg" />
              </button>
            </div>

            {/* Profile Edit Form */}
            <div className="space-y-3">
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                placeholder="Name"
              />
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                placeholder="Email"
              />
              <input
                type="password"
                name="password"
                value={profile.password}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                placeholder="New Password"
              />
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
                placeholder="Phone No."
              />
              <select
                name="role"
                value={profile.role}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg"
              >
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
            </div>

            {/* Save Button */}
            <button
              className="mt-4 w-full bg-blue-900 text-white p-2 rounded-lg hover:bg-blue-800"
              onClick={() => setProfileOpen(false)}
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;

import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

const Dashboard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });
  const [editedUser, setEditedUser] = useState(user);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setUser(editedUser);
    setIsEditing(false);
  };

  return (
    <div className="h-screen w-full bg-[#EAEAEA] flex">
      <div className="h-full w-full bg-white flex">
        {/* Profile Section */}
        <div className="w-1/3 h-full p-6 bg-[#F7F7F7] flex flex-col items-center">
          <div className="w-28 h-28 flex items-center justify-center bg-blue-900 text-white text-3xl font-bold rounded-full">
            <FaUser />
          </div>
          <h2 className="text-2xl font-bold text-blue-900 mt-4">Profile</h2>
          <div className="mt-4 space-y-4 w-full">
            <input
              type="text"
              value={editedUser.name}
              disabled={!isEditing}
              onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
              className="w-full p-2 focus:outline-none bg-transparent"
              placeholder="Name"
            />
            <input
              type="email"
              value={editedUser.email}
              disabled={!isEditing}
              onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
              className="w-full p-2 focus:outline-none bg-transparent"
              placeholder="Email"
            />
            <input
              type="text"
              value={editedUser.phone}
              disabled={!isEditing}
              onChange={(e) => setEditedUser({ ...editedUser, phone: e.target.value })}
              className="w-full p-2 focus:outline-none bg-transparent"
              placeholder="Phone"
            />
            {isEditing && (
              <input
                type="password"
                value={editedUser.password}
                onChange={(e) => setEditedUser({ ...editedUser, password: e.target.value })}
                className="w-full p-2 focus:outline-none bg-transparent"
                placeholder="New Password"
              />
            )}
          </div>
          <p className="mt-4 text-lg font-semibold text-gray-700">Role: Admin</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-900 text-white rounded"
            onClick={isEditing ? handleSaveClick : handleEditClick}
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>

        {/* Dashboard Section */}
        <div className="w-2/3 h-full p-6 flex flex-col items-center justify-center">
          <div className="flex flex-col w-full space-y-6">
            <div className="bg-[#F7F7F7] shadow-md rounded-lg p-6 flex flex-col items-center">
              <span className="text-2xl font-semibold text-blue-900">No. of Users</span>
              <p className="text-3xl font-bold text-gray-700 mt-2">Na</p>
            </div>
            <div className="bg-[#F7F7F7] shadow-md rounded-lg p-6 flex flex-col items-center">
              <span className="text-2xl font-semibold text-blue-900">No. of Teachers</span>
              <p className="text-3xl font-bold text-gray-700 mt-2">Na</p>
            </div>
            <div className="bg-[#F7F7F7] shadow-md rounded-lg p-6 flex flex-col items-center">
              <span className="text-2xl font-semibold text-blue-900">No. of Test Papers</span>
              <p className="text-3xl font-bold text-gray-700 mt-2">Na</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

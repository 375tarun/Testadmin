import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const LayoutContainer = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <main className="flex-grow p-4 bg-[#EAEAEA]">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutContainer;

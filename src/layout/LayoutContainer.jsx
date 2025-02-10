import React from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from './Sidebar'

const LayoutContainer = () => {
  return (
    <div className="flex">
    <Sidebar />
    <main className="flex-grow p-4">
      <Outlet />
    </main>
  </div>
);
  
}

export default LayoutContainer
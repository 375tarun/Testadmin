import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import TestPapers from "./pages/testPapers/TestPapers";
import LayoutContainer from "./layout/LayoutContainer";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Auth Route */}
        <Route path="/login" element={<Login />} />

        {/* Admin Dashboard */}
        <Route path="/" element={<LayoutContainer />}>
          <Route index element={<Dashboard />} />
          <Route path="/tests" element={<TestPapers />} />
        </Route>

        {/* Fallback Route */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;

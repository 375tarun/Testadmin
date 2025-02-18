// components/Login.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";  // Importing useNavigate

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();  // Using useNavigate for navigation
  const { loading, error, user } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  // Redirect to the dashboard if user is logged in
  useEffect(() => {
    if (user) {
      navigate("/");  // Redirect to the dashboard ("/") if user is logged in
    }
  }, [user, navigate]);

  return (
    <div className="flex justify-center items-center bg-blue-500 min-h-screen">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96 text-center">
        <h2 className="text-2xl text-gray-800 mb-4">Welcome Back</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            className="p-3 mb-2 border rounded-md text-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 mb-2 border rounded-md text-gray-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p className="text-blue-700 text-sm text-right cursor-pointer mb-4">Forgot Password?</p>
          <button
            type="submit"
            className="py-3 bg-blue-700 text-white rounded-md text-xl w-1/2 mx-auto hover:bg-blue-800"
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
        </form>
        <p className="mt-4 text-sm">
          Don't have an account?{" "}
          <button
            className="text-blue-600 hover:text-blue-800"
            onClick={() => navigate("/signup")}  // Navigate to Signup page
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;

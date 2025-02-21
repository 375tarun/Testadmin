// components/Signup.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";  // Importing useNavigate

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();  // Using useNavigate for navigation
  const { loading, error, user } = useSelector((state) => state.auth);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
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
        <h2 className="text-2xl text-gray-800 mb-4">Create Account</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="p-3 mb-2 border rounded-md text-gray-700"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="p-3 mb-2 border rounded-md text-gray-700"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-3 mb-2 border rounded-md text-gray-700"
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="p-3 mb-2 border rounded-md text-gray-700"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-3 mb-2 border rounded-md text-gray-700"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="p-3 mb-2 border rounded-md text-gray-700"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="py-3 bg-blue-700 text-white rounded-md text-xl w-1/2 mx-auto hover:bg-blue-800"
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
        </form>
        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <button
            className="text-blue-600 hover:text-blue-800"
            onClick={() => navigate("/login")}  // Navigate to Login page
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;

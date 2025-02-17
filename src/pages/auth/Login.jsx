import React, { useState } from 'react';


const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex justify-center items-center bg-blue-500 min-h-screen">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96 text-center">
        <div className="flex justify-between mb-4">
          <button
            className={`flex-1 py-2 text-lg border-b-2 transition-all duration-300 ${!isSignUp ? "font-bold text-blue-700 border-blue-700" : "text-gray-600"}`}
            onClick={() => setIsSignUp(false)}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 text-lg border-b-2 transition-all duration-300 ${isSignUp ? "font-bold text-blue-700 border-blue-700" : "text-gray-600"}`}
            onClick={() => setIsSignUp(true)}
          >
            Sign Up
          </button>
        </div>
        <h2 className="text-2xl text-gray-800 mb-4">{isSignUp ? "Create Account" : "Welcome Back"}</h2>
        <form className="flex flex-col">
          {isSignUp && (
            <>
              <input type="text" placeholder="Full Name" className="p-3 mb-2 border rounded-md text-gray-700" />
              <input type="text" placeholder="Username" className="p-3 mb-2 border rounded-md text-gray-700" />
              <input type="email" placeholder="Email" className="p-3 mb-2 border rounded-md text-gray-700" />
              <input type="tel" placeholder="Phone Number" className="p-3 mb-2 border rounded-md text-gray-700" />
              <input type="password" placeholder="Password" className="p-3 mb-2 border rounded-md text-gray-700" />
              <input type="password" placeholder="Confirm Password" className="p-3 mb-2 border rounded-md text-gray-700" />
            </>
          )}
          {!isSignUp && <input type="email" placeholder="Email" className="p-3 mb-2 border rounded-md text-gray-700" />}
          {!isSignUp && <input type="password" placeholder="Password" className="p-3 mb-2 border rounded-md text-gray-700" />}
          {!isSignUp && <p className="text-blue-700 text-sm text-right cursor-pointer mb-4">Forgot Password?</p>}
          <button className="py-3 bg-blue-700 text-white rounded-md text-xl w-1/2 mx-auto hover:bg-blue-800">{isSignUp ? "Sign Up" : "Sign In"}</button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          {isSignUp ? "Already have an account? " : "Don't have an account? "}
          <span onClick={() => setIsSignUp(!isSignUp)} className="text-blue-700 cursor-pointer font-semibold hover:underline">
            {isSignUp ? "Sign in" : "Sign up"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;

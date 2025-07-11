import React from 'react';
import { FaGoogle, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#090d13] px-4">
      <div className="max-w-md w-full bg-white dark:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black p-8 rounded-2xl shadow-lg my-4">
        <div className="flex flex-col items-center">
          <div className="bg-green-100  p-3 rounded-full mb-4">
            <svg
              className="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 1.104.896 2 2 2s2-.896 2-2M12 17h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">Sign In to CyGen</h2>
          <p className="text-sm text-gray-500 text-center">Access your expert consultations and resources</p>
        </div>

        <form className="mt-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-slate-900"
            />
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <a href="#" className="text-sm text-green-500 hover:underline">Forgot password?</a>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-slate-900"
            />
          </div>

          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-sm text-gray-700">Remember me</label>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-3xl hover:bg-green-700 transition-colors font-medium"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center my-6">
          {/* <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-gray-400 text-sm">Or continue with</span>
          <hr className="flex-grow border-gray-300" /> */}
        </div>

        {/* <div className="flex justify-between space-x-3">
          <button className="flex-1 border border-gray-300 rounded-md p-2 flex items-center justify-center hover:bg-gray-100">
            <FaGoogle className="text-red-500 text-xl" />
          </button>
          <button className="flex-1 border border-gray-300 rounded-md p-2 flex items-center justify-center hover:bg-gray-100">
            <FaGithub className="text-gray-700 text-xl" />
          </button>
          <button className="flex-1 border border-gray-300 rounded-md p-2 flex items-center justify-center hover:bg-gray-100">
            <FaLinkedinIn className="text-green-600 text-xl" />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Login;

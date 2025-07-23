import React from 'react';
import {
  FaUserTie
} from 'react-icons/fa';
const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#090d13] px-4">
      <div className="max-w-md w-full bg-white dark:bg-[#0b1225] p-8 rounded-2xl shadow-lg my-4">
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-r from-secondary to-primary   p-3 rounded-full mb-4">
            <FaUserTie className="text-white text-3xl" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-600 dark:text-white mb-1">Sign In to CyGen</h2>
          <p className="text-sm text-gray-500 text-center">Access your expert consultations and resources</p>
        </div>

        <form className="mt-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-500 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-slate-900"
            />
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium text-gray-500">Password</label>
              <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-slate-900"
            />
          </div>

          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-sm text-gray-500">Remember me</label>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-3xl hover:bg-primary transition-colors font-medium"
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
            <FaGithub className="text-gray-500 text-xl" />
          </button>
          <button className="flex-1 border border-gray-300 rounded-md p-2 flex items-center justify-center hover:bg-gray-100">
            <FaLinkedinIn className="text-priamry text-xl" />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
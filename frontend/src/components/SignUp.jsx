import React from 'react';
import { FaGoogle, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#090d13] px-4">
      <div className="max-w-md w-full bg-white dark:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black p-8 rounded-2xl shadow-lg relative my-4">
        
        {/* Avatar with close icon */}
        <div className=' flex justify-center item-center  '>
        <div className='  w-[100px] h-[100px] bg-green-500 rounded-full '>
        </div>
        </div>

        <div className="text-center mt-4 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Create Your Account</h2>
          <p className="text-sm text-gray-500 mt-1">Join CyGen to connect with technical experts</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-slate-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-slate-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-slate-900"
            />
            <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters with a number and symbol</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-slate-900"
            />
          </div>

          <div className="flex items-start space-x-2">
            <input type="checkbox" className="mt-1" />
            <p className="text-sm text-gray-600">
              I agree to the{' '}
              <a href="#" className="text-green-600 hover:underline">Terms of Service</a> and{' '}
              <a href="#" className="text-green-600 hover:underline">Privacy Policy</a>
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" />
            <label className="text-sm text-gray-600">Subscribe to our newsletter</label>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-3xl hover:bg-green-700 transition-colors font-medium"
          >
            Create Account
          </button>
        </form>

        <div className="flex items-center my-6">
          {/* <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-gray-400 text-sm">Or continue with</span>
          <hr className="flex-grow border-gray-300" /> */}
        </div>

        {/* <div className="flex justify-between space-x-3">
          <button className="flex-1 rounded-3xl p-2 flex items-center justify-center hover:bg-gray-100">
            <FaGoogle className="text-red-500 text-xl" />
          </button>
          <button className="flex-1 rounded-3xl p-2 flex items-center justify-center hover:bg-gray-100">
            <FaGithub className="text-gray-700 text-xl" />
          </button>
          <button className="flex-1 rounded-3xl p-2 flex items-center justify-center hover:bg-gray-100">
            <FaLinkedinIn className="text-green-600 text-xl" />
          </button>
        </div> */}
      </div>
    </div>
  );
};
export default SignUp;

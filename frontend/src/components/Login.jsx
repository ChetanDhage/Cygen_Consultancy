import React, { useState } from 'react';
import { FaUserTie } from 'react-icons/fa';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BACKEND_URL;
console.log(BASE_URL)

const Login = () => {
  const [email, setEmail] = useState('user@gmail.com');
  const [pwd, setPwd] = useState('user12345');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const Submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(
         `${BASE_URL}/api/auth/login`,
        { email, password: pwd },
        {
          headers: { 'Content-Type': 'application/json' }, // ✅ Correct header
        }
      );
      console.log(response.data);
      // You can redirect or save token here
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message || 'Login failed. Try again.');
      } else {
        setError('Server error. Please try later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="max-w-md w-full bg-white dark:bg-[#0b1225] p-8 rounded-3xl shadow-2xl my-4">
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-r from-primarylight to-primary p-3 rounded-full mb-4">
            <FaUserTie className="dark:text-white text-gray-600 text-3xl" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-600 dark:text-white mb-1">Sign In to Worklify</h2>
          <p className="text-sm text-gray-500 text-center">
            Access your expert consultations and resources
          </p>
        </div>

        {/* ✅ Error Message */}
        {error && (
          <div className="mt-4 bg-red-100 text-red-700 text-sm p-3 rounded">
            {error}
          </div>
        )}

        <form className="mt-6" onSubmit={Submit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 border text-gray-500 border-gray-400 focus:ring-primary dark:text-white dark:bg-slate-500"
            />
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm font-medium text-gray-500">
                Password
              </label>
              <a href="#" className="text-sm text-primary hover:underline">
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full rounded-3xl dark:text-white border border-gray-400 px-4 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-slate-500"
            />
          </div>

          <div className="flex items-center mb-4">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-sm text-gray-500">
              Remember me
            </label>
          </div>

          {/* ✅ Loading State */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-3xl font-medium transition-colors ${loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-primary text-white hover:bg-primary'
              }`}
          >
            {loading ? (
              <span className="flex justify-center items-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                Signing In...
              </span>
            ) : (
              'Sign In'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { FaUserTie } from "react-icons/fa";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { login, setError } from "../redux/authSlice";
// import { selectAuthError } from "../redux/authSlice";

// import {toast } from "sonner"; 
// import Navbar from "./Navbar";

// const BASE_URL = import.meta.env.VITE_BACKEND_URL;

// const Login = () => {
//   const [email, setEmail] = useState("consultant11@gmail.com");
//   const [pwd, setPwd] = useState("consultant");
//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch();

//   const navigate = useNavigate();

// console.log(' user@gmail.com user123456 /n admin@cygen.com NewAdmin@123 /n subadmin@cygen.com SubAdmin@123 ');

//   // ✅ Get error directly from Redux
//   const error = useSelector(selectAuthError);

//   const Submit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     dispatch(setError("")); // clear any previous error in Redux

//     try {
//       const response = await axios.post(
//         `${BASE_URL}/api/auth/login`,
//         { email, password: pwd },
//         { headers: { "Content-Type": "application/json" } }
//       );

//       console.log(response.data);
//       dispatch(login(response.data));

//       const userRole = response.data.role;
//       toast.success("Login successful! Welcome to job portal");

//       if (userRole === "consultant") {
//         navigate("/consultant-dashboard");
//       }
//       if (userRole === "user") {
//         navigate("/user-dashboard");
//       }
//       if (userRole === "admin") {
//         navigate("/admin-dashboard");
//       }
//       if (userRole === "sub-admin") {
//         navigate("/sub-admin-dashboard");
//       }

//     } catch (err) {
//       const errMsg =
//         err.response?.data?.message || "Server error. Please try later.";
//       dispatch(setError(errMsg));
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
    
//     <>
//     <Navbar/>
//     <div className="min-h-screen  flex items-center justify-center sm:px-4">
//       <div className="sm:max-w-md  w-full h-screen sm:h-fit bg-white dark:bg-[#0b1225] p-8 rounded-3xl shadow-2xl sm:my-4">
//         <div className="flex flex-col items-center">

//           <div className="border p-4 rounded-xl mb-2">
//             <FaUserTie className="text-primary text-3xl" />
//           </div>
//           <h2 className="text-2xl font-semibold text-gray-600 dark:text-white mb-1">
//             Log In to Worklify
//           </h2>
//           <p className="text-sm text-gray-500 text-center">
//             Access your expert consultations and resources
//           </p>
//         </div>

//         {/* ✅ Error Message from Redux */}
//         {error && (
//           <div className="mt-4 bg-red-100 text-red-700 text-sm p-3 rounded">
//             {error}
//           </div>
//         )}

//         <form className="mt-6" onSubmit={Submit}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-500 mb-1">
//               Email Address
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="you@example.com"
//               required
//               className="w-full rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 border text-gray-500 border-gray-400 focus:ring-primary dark:text-white dark:bg-slate-500"
//             />
//           </div>

//           <div className="mb-4">
//             <div className="flex justify-between items-center mb-1">
//               <label className="text-sm font-medium text-gray-500">
//                 Password
//               </label>
//               <a href="#" className="text-sm text-primary hover:underline">
//                 Forgot password?
//               </a>
//             </div>
//             <input
//               type="password"
//               value={pwd}
//               onChange={(e) => setPwd(e.target.value)}
//               placeholder="••••••••"
//               required
//               className="w-full rounded-3xl dark:text-white border border-gray-400 px-4 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-slate-500"
//             />
//           </div>

//           <div className="flex items-center mb-4">
//             <input type="checkbox" id="remember" className="mr-2" />
//             <label htmlFor="remember" className="text-sm text-gray-500">
//               Remember me
//             </label>
//           </div>

//           {/* ✅ Loading State */}
//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full py-2 rounded-3xl font-medium transition-colors ${
//               loading
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-primary text-white hover:bg-primary"
//             }`}
//           >
//             {loading ? "Signing In..." : "Sign In"}
//           </button>
//         </form>

//         <p className="text-sm my-2 text-gray-500">
//           You don't have an account?{" "}
//           <Link
//             to={"/signup"}
//             className="text-blue-500 underline hover:text-blue-600 cursor-pointer"
//           >
//             SignUp 
//           </Link>
//         </p>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { FaUserTie, FaEye, FaEyeSlash, FaLock, FaEnvelope } from "react-icons/fa";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, setError } from "../redux/authSlice";
import { selectAuthError } from "../redux/authSlice";
import { toast } from "sonner"; 
import Navbar from "./Navbar";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const Login = () => {
  const [email, setEmail] = useState("consultant11@gmail.com");
  const [pwd, setPwd] = useState("consultant");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const error = useSelector(selectAuthError);

  const Submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(setError(""));

    try {
      const response = await axios.post(
        `${BASE_URL}/api/auth/login`,
        { email, password: pwd },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log(response.data);
      dispatch(login(response.data));

      const userRole = response.data.role;
      toast.success("Login successful! Welcome to Worklify");

      if (userRole === "consultant") {
        navigate("/consultant-dashboard");
      }
      if (userRole === "user") {
        navigate("/user-dashboard");
      }
      if (userRole === "admin") {
        navigate("/admin-dashboard");
      }
      if (userRole === "sub-admin") {
        navigate("/sub-admin-dashboard");
      }

    } catch (err) {
      const errMsg =
        err.response?.data?.message || "Server error. Please try later.";
      dispatch(setError(errMsg));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar/>
      <div className="min-h-screen flex items-center justify-center sm:px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-[#0a0f1d] dark:via-[#0b1225] dark:to-[#0c1429] py-8">
        <div className="relative max-w-md w-full bg-white dark:bg-[#0b1225] p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800">
          {/* Decorative elements */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-24 bg-gradient-to-r from-primary to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
              <FaUserTie className="text-white text-3xl" />
            </div>
          </div>
          
          <div className="pt-12 text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Sign in to access your expert consultations
            </p>
          </div>

          {/* Demo credentials hint */}
          <div className="mb-6 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800/30">
            <p className="text-xs text-blue-700 dark:text-blue-300 text-center">
              Try: consultant11@gmail.com / consultant
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 text-sm rounded-lg border border-red-200 dark:border-red-800/30 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={Submit}>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-all duration-200"
                />
              </div>
            </div>

            <div className="relative">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <Link 
                  to="#" 
                  className="text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-12 py-3 rounded-xl border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-all duration-200"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-400 hover:text-gray-600" />
                  ) : (
                    <FaEye className="text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="remember" 
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" 
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3.5 rounded-xl font-medium transition-all duration-300 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-primary to-cyan-500 text-white hover:from-primary/90 hover:to-cyan-600 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing In...
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?{" "}
              <Link
                to={"/signup"}
                className="font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Create account
              </Link>
            </p>
          </div>

          <div className="mt-6">
            <div className="relative">
              
              
            </div>

          
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
// import { useState } from "react";
// import { FaUser, FaUserTie, FaArrowRight } from "react-icons/fa";
// import Navbar from "./Navbar";
// import { useNavigate } from "react-router-dom";

// const roles = [
//   { 
//     id: "user",
//     label: "I am client, hiring for project work", 
//     icon: <FaUser className="text-xl" />, 
//     // description: "I am client, hiring for project work",
//     gradient: "from-blue-500 to-indigo-600",
//     color: "rgba(99, 102, 241, 0.15)"
//   },
//   { 
//     id: "consultant",
//     label: "I am freelancer looking for work", 
//     icon: <FaUserTie className="text-xl" />, 
//     // description: "I am freelancer looking for work",
//     gradient: "from-emerald-500 to-teal-600",
//     color: "rgba(16, 185, 129, 0.15)"
//   }
// ];

// const SignupRoleSelection = ({ onSelect }) => {
//   const [selectedRole, setSelectedRole] = useState(null);
//   const [hoveredRole, setHoveredRole] = useState(null);
//   const navigate = useNavigate();
  
//   const handleSubmit = () => {
//     if (selectedRole) {
//       navigate(`/${selectedRole}`);
//     }
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
//       <Navbar />
      
//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
//         <div className="absolute top-1/2 -right-20 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30 animate-pulse-slow animation-delay-2000"></div>
//         <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-200 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-30 animate-pulse-slow animation-delay-4000"></div>
//       </div>

//       <section className="relative flex items-center justify-center px-4 py-12 sm:py-16">
//         <div className="w-full max-w-md">
//           {/* Glassmorphism Card Container */}
//           <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 dark:border-gray-700/30 overflow-hidden">
//             <div className="p-8 text-center">
//               {/* Header with decorative elements */}
//               <div className="mb-8">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-purple-500 rounded-full mb-4 shadow-lg">
//                   <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
//                   </svg>
//                 </div>
//                 <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 dark:from-white dark:to-gray-200 bg-clip-text text-transparent mb-2">
//                   Join Worklify
//                 </h2>
//                 <p className="text-gray-600 dark:text-gray-300">
//                   Select your role to begin your journey
//                 </p>
//               </div>

//               {/* Role selection cards */}
//               <div className="space-y-5 mb-8">
//                 {roles.map((role) => (
//                   <div
//                     key={role.id}
//                     className={`relative cursor-pointer transform transition-all duration-300 
//                       ${selectedRole === role.id 
//                         ? 'scale-[1.02] shadow-lg' 
//                         : 'hover:scale-[1.02] hover:shadow-md'
//                       }`}
//                     onClick={() => {
//                       setSelectedRole(role.id);
//                       if (onSelect) onSelect(role.id);
//                     }}
//                     onMouseEnter={() => setHoveredRole(role.id)}
//                     onMouseLeave={() => setHoveredRole(null)}
//                   >
//                     <input
//                       type="radio"
//                       name="role"
//                       value={role.id}
//                       checked={selectedRole === role.id}
//                       onChange={() => {}}
//                       className="hidden"
//                     />
                    
//                     {/* Card with gradient border effect */}
//                     <div className={`absolute inset-0 bg-gradient-to-r ${role.gradient} rounded-xl opacity-0 transition-opacity duration-300 ${
//                       selectedRole === role.id ? 'opacity-100' : 'group-hover:opacity-50'
//                     }`}></div>
                    
//                     <div className={`relative bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm p-5 rounded-xl border transition-all duration-300 ${
//                       selectedRole === role.id 
//                         ? `border-transparent shadow-inner`
//                         : 'border-gray-200/70 dark:border-gray-600/70 hover:border-primary/30 dark:hover:border-emerald-400/30'
//                     }`}>
//                       <div className="flex items-center">
//                         {/* Icon container */}
//                         <div className={`flex items-center justify-center w-14 h-14 rounded-xl mr-4 transition-all duration-300 ${
//                           selectedRole === role.id 
//                             ? `bg-gradient-to-r ${role.gradient} text-white shadow-md`
//                             : 'bg-white dark:bg-gray-600 text-gray-600 dark:text-gray-200 shadow-sm'
//                         }`}>
//                           {role.icon}
//                         </div>
                        
//                         {/* Text content */}
//                         <div className="text-left flex-1">
//                           <h3 className={`font-semibold text-lg transition-colors duration-300 ${
//                             selectedRole === role.id 
//                               ? `bg-gradient-to-r ${role.gradient} bg-clip-text text-transparent`
//                               : 'text-gray-800 dark:text-white'
//                           }`}>
//                             {role.label}
//                           </h3>
//                           <p className={`text-sm transition-colors duration-300 ${
//                             selectedRole === role.id 
//                               ? 'text-gray-600 dark:text-gray-300'
//                               : 'text-gray-500 dark:text-gray-400'
//                           }`}>
//                             {role.description}
//                           </p>
//                         </div>
                        
//                         {/* Selection indicator */}
//                         <div className={`ml-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
//                           selectedRole === role.id 
//                             ? `border-transparent bg-gradient-to-r ${role.gradient}`
//                             : 'border-gray-300 dark:border-gray-500'
//                         }`}>
//                           {selectedRole === role.id && (
//                             <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
//                             </svg>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Continue button */}
//               <button
//                 disabled={!selectedRole}
//                 onClick={handleSubmit}
//                 className={`group w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center ${
//                   selectedRole
//                     ? "bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg hover:shadow-xl hover:from-primary/90 hover:to-purple-600/90 transform hover:-translate-y-0.5"
//                     : "bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
//                 }`}
//               >
//                 {selectedRole ? (
//                   <>
//                     <span>Continue</span>
//                     <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
//                   </>
//                 ) : (
//                   "Select your role"
//                 )}
//               </button>

              
//             </div>
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         @keyframes pulse-slow {
//           0%, 100% { opacity: 0.3; }
//           50% { opacity: 0.5; }
//         }
//         .animate-pulse-slow {
//           animation: pulse-slow 6s ease-in-out infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </main>
//   );
// };

// export default SignupRoleSelection;

import { useState, useEffect } from "react";
import { FaUser, FaUserTie, FaArrowRight, FaCheck } from "react-icons/fa";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const roles = [
  { 
    id: "user",
    label: "I'm a client, hiring for a project", 
    description: "Find expert consultants for your projects",
    icon: <FaUser className="text-xl" />,
    gradient: "from-blue-500 to-indigo-600",
    color: "rgba(59, 130, 246, 0.1)"
  },
  { 
    id: "consultant",
    label: "I'm a consultant, looking for work", 
    description: "Offer your expertise and grow your business",
    icon: <FaUserTie className="text-xl" />,
    gradient: "from-emerald-500 to-teal-600",
    color: "rgba(16, 185, 129, 0.1)"
  }
];

const SignupRoleSelection = ({ onSelect }) => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [hoveredRole, setHoveredRole] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();
  
  // Check system preference for dark mode
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);
    
    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  const handleSubmit = () => {
    if (selectedRole) {
      navigate(`/${selectedRole}`);
    }
  };

  return (
    <main className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-300 ${
      isDarkMode 
        ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white" 
        : "bg-gradient-to-br from-gray-50 to-white text-gray-800"
    }`}>
      <Navbar isDarkMode={isDarkMode} onThemeChange={setIsDarkMode} />

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-20 -left-20 w-72 h-72 rounded-full blur-3xl opacity-30 transition-all duration-700 ${
          isDarkMode ? "bg-blue-900" : "bg-blue-200"
        }`}></div>
        <div className={`absolute top-1/2 -right-20 w-96 h-96 rounded-full blur-3xl opacity-30 transition-all duration-700 ${
          isDarkMode ? "bg-emerald-900" : "bg-emerald-200"
        }`}></div>
        <div className={`absolute bottom-0 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-30 transition-all duration-700 ${
          isDarkMode ? "bg-indigo-900" : "bg-indigo-200"
        }`}></div>
      </div>

      <section className="relative w-full max-w-2xl px-4 py-8 text-center z-10">
        {/* Header section */}
        <div className="mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-primary-600 rounded-full mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent mb-3">
            Join Worklify
          </h1>
          <p className={`text-lg transition-colors duration-300 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          } max-w-md mx-auto`}>
            Choose how you'd like to use our platform to connect with experts
          </p>
        </div>

        {/* Role selection cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {roles.map((role) => (
            <div
              key={role.id}
              className={`relative cursor-pointer rounded-xl p-6 text-left transition-all duration-300 transform
                ${selectedRole === role.id 
                  ? `ring-2 ring-primary shadow-xl scale-[1.02] ${
                    isDarkMode ? "bg-opacity-20" : ""
                  }` 
                  : `border shadow-md hover:shadow-lg ${
                    isDarkMode ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white"
                  }`
                }
                ${hoveredRole === role.id && selectedRole !== role.id ? 'scale-[1.01]' : ''}
              `}
              onClick={() => {
                setSelectedRole(role.id);
                if (onSelect) onSelect(role.id);
              }}
              onMouseEnter={() => setHoveredRole(role.id)}
              onMouseLeave={() => setHoveredRole(null)}
              style={{
                backgroundColor: selectedRole === role.id ? role.color : 'transparent'
              }}
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${role.gradient} rounded-xl opacity-0 transition-opacity duration-300 ${
                selectedRole === role.id ? 'opacity-10' : 'group-hover:opacity-5'
              }`}></div>
              
              <div className="relative">
                {/* Icon */}
                <div className={`flex items-center justify-center w-12 h-12 rounded-lg mb-4 transition-colors duration-300 ${
                  selectedRole === role.id 
                    ? `bg-gradient-to-r ${role.gradient} text-white shadow-md`
                    : `${
                        isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-600"
                      }`
                }`}>
                  {role.icon}
                </div>
                
                {/* Content */}
                <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                  selectedRole === role.id 
                    ? `bg-gradient-to-r ${role.gradient} bg-clip-text text-transparent`
                    : isDarkMode ? "text-white" : "text-gray-800"
                }`}>
                  {role.label}
                </h3>
                <p className={`transition-colors duration-300 text-sm mb-4 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                  {role.description}
                </p>
                
                {/* Selection indicator */}
                <div className="flex justify-between items-center">
                  <span className={`text-sm font-medium transition-colors duration-300 ${
                    selectedRole === role.id 
                      ? `text-primary` 
                      : isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}>
                    {selectedRole === role.id ? 'Selected' : 'Select'}
                  </span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                    selectedRole === role.id 
                      ? `bg-gradient-to-r ${role.gradient} shadow-inner`
                      : `border-2 ${isDarkMode ? "border-gray-600" : "border-gray-300"}`
                  }`}>
                    {selectedRole === role.id && (
                      <FaCheck className="w-3 h-3 text-white" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continue button */}
        <button
          disabled={!selectedRole}
          onClick={handleSubmit}
          className={`group w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center ${
            selectedRole
              ? "bg-gradient-to-r from-primary to-primary-600 text-white shadow-lg hover:shadow-xl hover:from-primary/90 hover:to-primary-600/90 transform hover:-translate-y-0.5"
              : `${
                  isDarkMode 
                    ? "bg-gray-700 text-gray-400 cursor-not-allowed" 
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`
          }`}
        >
          {selectedRole ? (
            <>
              <span>Continue to {selectedRole === 'user' ? 'Client' : 'Consultant'} Registration</span>
              <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </>
          ) : (
            "Select your role to continue"
          )}
        </button>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className={`w-full border-t transition-colors duration-300 ${
              isDarkMode ? "border-gray-700" : "border-gray-200"
            }`}></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className={`px-2 transition-colors duration-300 ${
              isDarkMode ? "bg-gray-900 text-gray-400" : "bg-white text-gray-500"
            }`}>
              Already have an account?
            </span>
          </div>
        </div>

        {/* Login link */}
        <div className="text-center">
          <a 
            href="/login" 
            className={`inline-flex items-center font-medium transition-colors duration-300 ${
              isDarkMode 
                ? "text-blue-400 hover:text-blue-300" 
                : "text-primary hover:text-primary-700"
            }`}
          >
            Sign in to your account
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
};

export default SignupRoleSelection; 
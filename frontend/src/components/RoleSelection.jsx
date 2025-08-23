// import { useState } from "react";
// import { FaUser, FaUserShield, FaUserTie, FaUsers } from "react-icons/fa";
// import Navbar from "./Navbar";
// import { useNavigate } from "react-router-dom";

// const roles = [
//   { label: "Client", icon: <FaUser />, description: "Access services, hire experts" },
//   { label: "Consultant", icon: <FaUserTie />, description: "Provide consultancy services" },
//   { label: "Admin", icon: <FaUserShield />, description: "Manage platform and users" },
//   { label: "SubAdmin", icon: <FaUsers />, description: "Assist admin in platform management" },
// ];

// const SignupRoleSelection = ({ onSelect }) => {
//   const [selectedRole, setSelectedRole] = useState(null);
//   const navigate = useNavigate();
  
//   const submit = ({ selectedRole }) => {
//     const roleMap = {
//       Admin: "admin",
//       SubAdmin: "sub-admin",
//       Consultant: "consultant",
//       User: "user",
//     };
//     const role = roleMap[selectedRole];
//     if (role) {
//       navigate(`/${role}`);
//     } else {
//       toast.success("Invalid role selected");
//     }
//   };

//   return (
//     <main>
//       <Navbar />
//       <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-4 transition-colors duration-500">
//         <div className="max-w-4xl w-full rounded-2xl p-8">
//           <h2 className="text-3xl font-bold text-center mb-6">Join Our Platform</h2>
//           <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
//             Choose your role to get started
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {roles.map((role, index) => (
//               <div
//                 key={index}
//                 className={`cursor-pointer p-6 border rounded-xl flex flex-col items-center justify-center transition-all ${
//                   selectedRole === role.label
//                     ? "border-primary bg-blue-50 dark:bg-blue-900/30"
//                     : "border-gray-300 dark:border-gray-700"
//                 }`}
//                 onClick={() => {
//                   setSelectedRole(role.label);
//                   if (onSelect) onSelect(role.label);
//                 }}
//               >
//                 <div className="text-primary text-3xl mb-4">{role.icon}</div>
//                 <h3 className="text-xl font-semibold">{role.label}</h3>
//                 <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
//                   {role.description}
//                 </p>
//               </div>
//             ))}
//           </div>

//           {/* Continue Button */}
//           <div className="text-center mt-10">
//             <button
//               disabled={!selectedRole}
//               className={`px-6 py-3 rounded-lg font-semibold text-white shadow-md transition-all ${
//                 selectedRole
//                   ? "bg-gradient-to-r from-primary to-primary hover:from-primary hover:to-primary/50"
//                   : "bg-gray-400 cursor-not-allowed"
//               }`}
//               onClick={() => submit({ selectedRole })}
//             >
//               Continue
//             </button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default SignupRoleSelection;

import { useState } from "react";
import { FaUser, FaUserTie, FaArrowRight } from "react-icons/fa";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const roles = [
  { 
    id: "user",
    label: "Client", 
    icon: <FaUser className="text-xl" />, 
    description: "Access services & hire experts",
    gradient: "from-blue-500 to-indigo-600",
    color: "rgba(99, 102, 241, 0.15)"
  },
  { 
    id: "consultant",
    label: "Consultant", 
    icon: <FaUserTie className="text-xl" />, 
    description: "Provide professional services",
    gradient: "from-emerald-500 to-teal-600",
    color: "rgba(16, 185, 129, 0.15)"
  }
];

const SignupRoleSelection = ({ onSelect }) => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [hoveredRole, setHoveredRole] = useState(null);
  const navigate = useNavigate();
  
  const handleSubmit = () => {
    if (selectedRole) {
      navigate(`/${selectedRole}`);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-200 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-30 animate-pulse-slow animation-delay-4000"></div>
      </div>

      <section className="relative flex items-center justify-center px-4 py-12 sm:py-16">
        <div className="w-full max-w-md">
          {/* Glassmorphism Card Container */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 dark:border-gray-700/30 overflow-hidden">
            <div className="p-8 text-center">
              {/* Header with decorative elements */}
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-purple-500 rounded-full mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 dark:from-white dark:to-gray-200 bg-clip-text text-transparent mb-2">
                  Join Worklify
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Select your role to begin your journey
                </p>
              </div>

              {/* Role selection cards */}
              <div className="space-y-5 mb-8">
                {roles.map((role) => (
                  <div
                    key={role.id}
                    className={`relative cursor-pointer transform transition-all duration-300 
                      ${selectedRole === role.id 
                        ? 'scale-[1.02] shadow-lg' 
                        : 'hover:scale-[1.02] hover:shadow-md'
                      }`}
                    onClick={() => {
                      setSelectedRole(role.id);
                      if (onSelect) onSelect(role.id);
                    }}
                    onMouseEnter={() => setHoveredRole(role.id)}
                    onMouseLeave={() => setHoveredRole(null)}
                  >
                    <input
                      type="radio"
                      name="role"
                      value={role.id}
                      checked={selectedRole === role.id}
                      onChange={() => {}}
                      className="hidden"
                    />
                    
                    {/* Card with gradient border effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${role.gradient} rounded-xl opacity-0 transition-opacity duration-300 ${
                      selectedRole === role.id ? 'opacity-100' : 'group-hover:opacity-50'
                    }`}></div>
                    
                    <div className={`relative bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm p-5 rounded-xl border transition-all duration-300 ${
                      selectedRole === role.id 
                        ? `border-transparent shadow-inner`
                        : 'border-gray-200/70 dark:border-gray-600/70 hover:border-primary/30 dark:hover:border-emerald-400/30'
                    }`}>
                      <div className="flex items-center">
                        {/* Icon container */}
                        <div className={`flex items-center justify-center w-14 h-14 rounded-xl mr-4 transition-all duration-300 ${
                          selectedRole === role.id 
                            ? `bg-gradient-to-r ${role.gradient} text-white shadow-md`
                            : 'bg-white dark:bg-gray-600 text-gray-600 dark:text-gray-200 shadow-sm'
                        }`}>
                          {role.icon}
                        </div>
                        
                        {/* Text content */}
                        <div className="text-left flex-1">
                          <h3 className={`font-semibold text-lg transition-colors duration-300 ${
                            selectedRole === role.id 
                              ? `bg-gradient-to-r ${role.gradient} bg-clip-text text-transparent`
                              : 'text-gray-800 dark:text-white'
                          }`}>
                            {role.label}
                          </h3>
                          <p className={`text-sm transition-colors duration-300 ${
                            selectedRole === role.id 
                              ? 'text-gray-600 dark:text-gray-300'
                              : 'text-gray-500 dark:text-gray-400'
                          }`}>
                            {role.description}
                          </p>
                        </div>
                        
                        {/* Selection indicator */}
                        <div className={`ml-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                          selectedRole === role.id 
                            ? `border-transparent bg-gradient-to-r ${role.gradient}`
                            : 'border-gray-300 dark:border-gray-500'
                        }`}>
                          {selectedRole === role.id && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
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
                    ? "bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg hover:shadow-xl hover:from-primary/90 hover:to-purple-600/90 transform hover:-translate-y-0.5"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                }`}
              >
                {selectedRole ? (
                  <>
                    <span>Continue</span>
                    <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                ) : (
                  "Select your role"
                )}
              </button>

              
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </main>
  );
};

export default SignupRoleSelection;

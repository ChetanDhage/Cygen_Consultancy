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
import { FaUser, FaUserTie } from "react-icons/fa";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const roles = [
  { 
    id: "user",
    label: "Client", 
    icon: <FaUser className="text-xl" />, 
    description: "Access services & hire experts",
    color: "rgba(99, 102, 241, 0.2)" // indigo with opacity
  },
  { 
    id: "consultant",
    label: "Consultant", 
    icon: <FaUserTie className="text-xl" />, 
    description: "Provide professional services",
    color: "rgba(16, 185, 129, 0.2)" // emerald with opacity
  }
];

const SignupRoleSelection = ({ onSelect }) => {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();
  
  const handleSubmit = () => {
    if (selectedRole) {
      navigate(`/${selectedRole}`);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      <section className="flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Glassmorphism Card Container */}
          <div className="backdrop-blur-lg bg-white dark:bg-gray-800/50 rounded-2xl shadow-xl overflow-hidden border border-white/20 dark:border-gray-700/50">
            <div className="p-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                Join as...
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Select your role to begin your journey
              </p>

              <div className="space-y-4">
                {roles.map((role) => (
                  <label
                    key={role.id}
                    className="block cursor-pointer transform transition-transform hover:scale-[1.02] active:scale-95"
                  >
                    <input
                      type="radio"
                      name="role"
                      value={role.id}
                      checked={selectedRole === role.id}
                      onChange={() => {
                        setSelectedRole(role.id);
                        if (onSelect) onSelect(role.id);
                      }}
                      className="hidden"
                    />
                    {/* Glassmorphism Card */}
                    <div
                      className={`backdrop-blur-sm p-5 rounded-xl border border-white/30 dark:border-gray-700/50 transition-all ${
                        selectedRole === role.id 
                          ? "bg-gradient-to-r from-indigo-100/50 to-purple-100/50 dark:from-indigo-900/30 dark:to-purple-900/30 shadow-inner"
                          : "bg-white/20 dark:bg-gray-700/20 hover:bg-white/30 dark:hover:bg-gray-700/30"
                      }`}
                      style={{
                        backgroundColor: selectedRole === role.id ? role.color : ''
                      }}
                    >
                      <div className="flex items-center">
                        <div
                          className={`flex items-center justify-center w-12 h-12 rounded-full mr-4 ${
                            selectedRole === role.id 
                              ? "bg-white text-indigo-600 dark:text-emerald-400"
                              : "bg-white/90 text-gray-700 dark:bg-gray-600/90 dark:text-white"
                          }`}
                        >
                          {role.icon}
                        </div>
                        <div className="text-left flex-1">
                          <h3
                            className={`font-semibold ${
                              selectedRole === role.id 
                                ? "text-indigo-700 dark:text-emerald-400"
                                : "text-gray-700 dark:text-white"
                            }`}
                          >
                            {role.label}
                          </h3>
                          <p
                            className={`text-sm ${
                              selectedRole === role.id 
                                ? "text-indigo-600/90 dark:text-emerald-300/90"
                                : "text-gray-600 dark:text-gray-300"
                            }`}
                          >
                            {role.description}
                          </p>
                        </div>
                        <div
                          className={`ml-4 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            selectedRole === role.id 
                              ? "border-indigo-600 dark:border-emerald-400"
                              : "border-gray-300 dark:border-gray-500"
                          }`}
                        >
                          {selectedRole === role.id && (
                            <div className="w-3 h-3 rounded-full bg-indigo-600 dark:bg-emerald-400" />
                          )}
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>

              <button
                disabled={!selectedRole}
                onClick={handleSubmit}
                className={`w-full mt-8 py-3 rounded-lg font-semibold text-lg transition-all transform ${
                  selectedRole
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95"
                    : "bg-gray-200/50 dark:bg-gray-700/50 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                }`}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignupRoleSelection;

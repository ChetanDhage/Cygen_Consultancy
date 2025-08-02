import { useState } from "react";
import { FaUser, FaUserShield, FaUserTie, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const roles = [
  { label: "User", icon: <FaUser />, description: "Access services, hire experts" },
  { label: "Consultant", icon: <FaUserTie />, description: "Provide consultancy services" },
  { label: "Admin", icon: <FaUserShield />, description: "Manage platform and users" },
  { label: "SubAdmin", icon: <FaUsers />, description: "Assist admin in platform management" },
];

const SignupRoleSelection = ({ onSelect }) => {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();
  
const submit = (Role) => {

  console.log("selected role:",)
  const roles = {
    Admin: "admin",
    SubAdmin: "sub-admin",
    Consultant: "consultant",
    User: "user",
  };
  const role = roles[Role.selectedRole];
  console.log(role);
  if (role) {
    navigate(`/${role}`); // ✅ Correct route format
  } else {
    alert("Invalid role selected");
  }
};


  return (
   <main>
    <Navbar/>
     <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-4 transition-colors duration-500">
      <div className="max-w-4xl w-full  rounded-2xl  p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Join Our Platform</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
          Choose your role to get started
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`cursor-pointer p-6 border rounded-xl flex flex-col items-center justify-center transition-all ${
                selectedRole === role.label
                  ? "border-primary bg-blue-50 dark:bg-blue-900/30"
                  : "border-gray-300 dark:border-gray-700"
              }`}
              onClick={() => {
                setSelectedRole(role.label);
                if (onSelect) onSelect(role.label);
              }}
            >
              <div className="text-primary text-3xl mb-4">{role.icon}</div>
              <h3 className="text-xl font-semibold">{role.label}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
                {role.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Continue Button */}
        <div className="text-center mt-10">
          <button
            disabled={!selectedRole}
            className={`px-6 py-3 rounded-lg font-semibold text-white shadow-md transition-all ${
              selectedRole
                ? "bg-gradient-to-r from-primary to-primary hover:from-primary hover:to-primary/50"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            onClick={() => submit({selectedRole})}
          >
            Continue
          </button>
        </div>
      </div>
    </section>
   </main>
  );
};

export default SignupRoleSelection;

import React from 'react';
import {
  BsServer, BsShieldLock, BsCpu, BsWifi, BsCodeSlash, BsDatabase,
  BsCloud, BsDiagram3, BsRobot, BsShieldShaded
} from 'react-icons/bs';

const categories = [
  {
    title: "IT Infrastructure",
    desc: "Network, servers, cloud setup and management",
    tags: ["IaC", "CI/CD", "Monitoring"],
    icon: <BsServer size={24} className="text-blue-600" />,
    tagColor: "bg-blue-100 text-blue-600"
  },
  {
    title: "Security",
    desc: "Protect your systems and data",
    tags: ["IAM", "Blockchain", "Cryptography"],
    icon: <BsShieldLock size={24} className="text-blue-600" />,
    tagColor: "bg-blue-100 text-blue-600"
  },
  {
    title: "AI & Data",
    desc: "Machine learning, analytics and BI",
    tags: ["Deep Learning", "Predictive Analytics", "Chatbots"],
    icon: <BsCpu size={24} className="text-blue-600" />,
    tagColor: "bg-blue-100 text-blue-600"
  },
  {
    title: "IoT",
    desc: "Connected devices and industrial systems",
    tags: ["IIoT", "Security", "Automation"],
    icon: <BsWifi size={24} className="text-orange-500" />,
    tagColor: "bg-orange-100 text-orange-500"
  },
  {
    title: "Development",
    desc: "Web, mobile, gaming and more",
    tags: ["Web", "Mobile", "AR/VR"],
    icon: <BsCodeSlash size={24} className="text-rose-500" />,
    tagColor: "bg-rose-100 text-rose-500"
  },
  {
    title: "Data Engineering",
    desc: "Data pipelines, warehousing, and processing",
    tags: ["ETL", "Data Lakes", "Big Data"],
    icon: <BsDatabase size={24} className="text-primary" />,
    tagColor: "bg-primaryLight text-primary"
  },
  {
    title: "Cloud Security",
    desc: "Secure cloud infrastructure and services",
    tags: ["AWS", "Azure", "GCP"],
    icon: <BsCloud size={24} className="text-cyan-500" />,
    tagColor: "bg-cyan-100 text-cyan-500"
  },
  {
    title: "Quantum Tech",
    desc: "Quantum computing and cryptography",
    tags: ["QML", "Algorithms", "Cryptography"],
    icon: <BsDiagram3 size={24} className="text-violet-500" />,
    tagColor: "bg-violet-100 text-violet-500"
  },
  {
    title: "RPA & Automation",
    desc: "Process automation and robotics",
    tags: ["RPA", "Drones", "Autonomous"],
    icon: <BsRobot size={24} className="text-pink-500" />,
    tagColor: "bg-pink-100 text-pink-500"
  },
  {
    title: "Data Governance",
    desc: "Compliance, policies and management",
    tags: ["Compliance", "GDPR", "HIPAA"],
    icon: <BsShieldShaded size={24} className="text-yellow-500" />,
    tagColor: "bg-yellow-100 text-yellow-500"
  },
];

const CategorySection = () => {
  return (
    <section id='categories' className=" bg-primaryLight dark:bg-[#090d13] py-12 px-4 md:px-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-600">Explore by Category</h2>
        <p className="text-gray-600 mt-2">Find experts across various technical domains and industries</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative group p-6 rounded-3xl shadow-md bg-white/90 dark:bg-white/10 backdrop-blur-lg  border-gray-200 dark:border-gray-700 hover:border-primary border-r border-b transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl"></div>

            {/* Icon */}
            <div className="flex items-center justify-center w-14 h-14 rounded-full mb-5 shadow border border-gray-200 dark:border-gray-700">
              {cat.icon}
            </div>

            {/* Title */}
            <h3 className="font-bold text-xl text-gray-800 dark:text-white mb-2">
              {cat.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              {cat.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {cat.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className={`text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 ${cat.tagColor}`}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>


      <div className="text-center mt-10">
        <a href="#" className="text-primary font-medium hover:underline">
          View all categories →
        </a>
      </div>
    </section>
  );
};
export default CategorySection;
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
    icon: <BsDatabase size={24} className="text-indigo-500" />,
    tagColor: "bg-indigo-100 text-indigo-500"
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
    <section id='categories' className="bg-[#f5f8fc] dark:bg-[#090d13] py-12 px-4 md:px-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-800">Explore by Category</h2>
        <p className="text-gray-600 mt-2">Find experts across various technical domains and industries</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div key={index} className=" dark:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black bg-white p-6 rounded-3xl shadow hover:shadow-md transition duration-200  hover:scale-105">
            <div className="flex items-center justify-center w-12 h-12 rounded-md mb-4 bg-gray-100">
              {cat.icon}
            </div>
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white ">{cat.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{cat.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {cat.tags.map((tag, idx) => (
                <span key={idx} className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${cat.tagColor}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a href="#" className="text-blue-600 font-medium hover:underline">
          View all categories →
        </a>
      </div>
    </section>
  );
};
export default CategorySection;
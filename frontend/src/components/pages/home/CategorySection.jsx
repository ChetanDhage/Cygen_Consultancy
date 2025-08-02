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
    <section id='categories' className=" relative  dark:bg-[#090d13] py-12 px-4 md:px-16">
       {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[15%] w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      <div className="text-center mb-10">

        <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-full mb-2 border border-primary/30">
          <span className="text-sm font-medium bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Our Features
          </span>
        </div>
        <hr className=' my-4  border-1 border-primary animate-pulse' />
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-800">Explore by Category</h2>
        <hr className=' my-4  border-1 border-primary animate-pulse' />
        <p className="text-gray-600 mt-2 text-sm">Find experts across various technical domains and industries</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative group p-6 lg:rounded-3xl shadow-md bg-white dark:bg-gray-900  backdrop-blur-lg  border-gray-200 dark:border-gray-900 hover:border-primary border-r border-b transition-all duration-300  overflow-hidden"
          >
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/10 opacity-0 group-hover:opacity-100 transition duration-300   lg:rounded-2xl"></div>

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
            <div className=" hidden lg:flex flex-wrap gap-2 ">
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
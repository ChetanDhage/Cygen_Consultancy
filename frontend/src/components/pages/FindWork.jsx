import React from "react";
import { motion } from "framer-motion";
import { 
  FaSearch, 
  FaBriefcase, 
  FaUsers, 
  FaChartLine, 
  FaRocket, 
  FaShieldAlt,
  FaClock,
  FaDollarSign,
  FaGlobe,
  FaStar,
  FaCheckCircle
} from "react-icons/fa";
import { BsArrowRight, BsLightningFill } from "react-icons/bs";
import Navbar from "../Navbar";
import Footer from "./home/Footer";

const FindWork = () => {
  const features = [
    {
      icon: <FaSearch className="text-2xl" />,
      title: "Smart Job Matching",
      description: "Our AI-powered system matches you with opportunities that align with your skills and preferences.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <FaBriefcase className="text-2xl" />,
      title: "Diverse Opportunities",
      description: "Access freelance projects, part-time gigs, full-time positions, and consulting opportunities.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Global Network",
      description: "Connect with clients and companies from around the world, expanding your professional reach.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Growth Tracking",
      description: "Monitor your progress, earnings, and skill development with detailed analytics and insights.",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const workTypes = [
    {
      title: "Freelance Projects",
      description: "Short-term projects that fit your schedule",
      icon: <FaRocket className="text-xl" />,
      features: ["Flexible hours", "Remote work", "Various industries"]
    },
    {
      title: "Consulting",
      description: "Expert advice and strategic guidance",
      icon: <FaShieldAlt className="text-xl" />,
      features: ["High-value projects", "Expert recognition", "Long-term relationships"]
    },
    {
      title: "Part-time Positions",
      description: "Regular work with flexible arrangements",
      icon: <FaClock className="text-xl" />,
      features: ["Stable income", "Work-life balance", "Skill development"]
    },
    {
      title: "Full-time Roles",
      description: "Complete career opportunities",
      icon: <FaBriefcase className="text-xl" />,
      features: ["Benefits included", "Career growth", "Team collaboration"]
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Jobs" },
    { number: "50K+", label: "Freelancers" },
    { number: "95%", label: "Success Rate" },
    { number: "$2M+", label: "Earned by Users" }
  ];

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-white">
        
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Find Your Next
              <span className="block text-yellow-300">Opportunity</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Discover amazing work opportunities that match your skills and career goals. 
              From freelance gigs to full-time positions, we've got you covered.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2">
                <FaSearch className="text-lg" />
                Start Searching
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center gap-2">
                <FaUsers className="text-lg" />
                Join as Freelancer
              </button>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose Our Platform
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We provide everything you need to find and secure your next great opportunity
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Types Section */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Types of Work Available
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Explore different types of opportunities that match your lifestyle and career goals
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workTypes.map((workType, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-shadow"
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-4">
                    {workType.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {workType.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {workType.description}
                  </p>
                  <ul className="space-y-2">
                    {workType.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <FaCheckCircle className="text-green-500 text-xs" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Get started in just a few simple steps
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Create Your Profile
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Set up your professional profile with your skills, experience, and portfolio
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Browse Opportunities
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Search and filter through thousands of job opportunities that match your criteria
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Apply & Get Hired
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Submit your proposals and start working on exciting projects
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Ready to Find Your Next Opportunity?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who have found their dream jobs through our platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2">
                  <BsLightningFill className="text-lg" />
                  Get Started Now
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center gap-2">
                  <FaGlobe className="text-lg" />
                  Browse Jobs
                </button>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default FindWork;

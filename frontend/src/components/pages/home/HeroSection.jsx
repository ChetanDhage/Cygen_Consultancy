import { useState } from 'react';
import { BsSearch, BsLightningCharge, BsArrowRight, BsCheck2Circle } from 'react-icons/bs';
import { FaShieldAlt } from 'react-icons/fa';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    { value: "24h", label: "Avg. Response Time" },
    { value: "98%", label: "Success Rate" },
    { value: "500+", label: "Active Experts" },
    { value: "10+", label: "Years Avg. Experience" }
  ];

  const industries = [
    "Healthcare AI",
    "Financial Modeling",
    "Computer Vision",
    "LLM Development",
    "Predictive Analytics",
    "AI Security"
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-white py-20 px-4 md:px-8 overflow-hidden transition-colors duration-500">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-20 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-full mb-2 border border-primary/30">
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                CONSULTING PLATFORM
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary">
                Empowering Real-Time{" "}
              </span>
              Collaboration to Drive Excellence
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              Solve complex technical challenges instantly through our curated networks of vetted specialists across 50+ domains.
            </p>

            {/* Search and CTA */}
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="relative group max-w-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative flex rounded-lg overflow-hidden bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Describe your technical challenge..."
                    className="w-full px-5 py-4 pl-12 text-gray-800 dark:text-gray-200 bg-transparent focus:outline-none placeholder-gray-400"
                  />
                  <GiArtificialIntelligence className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary" />
                  <button className="bg-gradient-to-r from-primary to-primary text-white px-6 py-4 font-medium hover:from-primary hover:to-primary/90 transition-all flex items-center gap-2">
                    <span className=' text-nowrap'>Find Expert</span>
                    <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Industries */}
              <div className="flex flex-wrap gap-4">
                {industries.map((industry, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ y: -2 }}
                    className="text-sm px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700 rounded-full transition-colors"
                  >
                    {industry}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Stats and Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.01 }}
                  className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700  lg:rounded-xl backdrop-blur-sm"
                >
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Value Proposition Cards */}
            <div className="lg:space-y-4">
              {/* Immediate Access */}
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-gray-50 dark:bg-gray-800 border border-primary/20 lg:rounded-xl flex items-start gap-4"
              >
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg text-primary">
                  <BsLightningCharge className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Immediate Access</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 lg:line-clamp-2 line-clamp-1">
                    Connect with experts in minutes, not weeks. Our matching algorithm finds the perfect specialist for your specific need.
                  </p>
                </div>
              </motion.div>

              {/* Security */}
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-gray-50 dark:bg-gray-800 border border-purple-500/20 lg:rounded-xl flex items-start gap-4"
              >
                <div className="flex-shrink-0 p-3 bg-purple-500/10 rounded-lg text-purple-500">
                  <FaShieldAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Enterprise-Grade Security</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 lg:line-clamp-2 line-clamp-1">
                    All engagements include NDAs, secure communication channels, and compliance with your security protocols.
                  </p>
                </div>
              </motion.div>

              {/* Vetted Expertise */}
              <motion.div
                whileHover={{ y: -5 }}
                className="p-6 bg-gray-50 dark:bg-gray-800 border border-primary/20 lg:rounded-xl flex items-start gap-4"
              >
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg text-primary">
                  <BsCheck2Circle className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Vetted Expertise</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 lg:line-clamp-2 line-clamp-1">
                    Every specialist undergoes rigorous technical evaluation and industry experience verification.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

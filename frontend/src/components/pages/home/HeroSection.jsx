import { use, useState } from 'react';
import { BsLightningCharge, BsArrowRight, BsCheck2Circle } from 'react-icons/bs';
import { FaShieldAlt, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// ================= Hero Section =================
const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
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

  const submit = () => {
    if (searchQuery.trim() !== '') {
      setShowResults(true);
    }
  };

  return (
    <>
      {!showResults ? (
        <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-white py-20 px-4 md:px-8 overflow-hidden transition-colors duration-500">
          {/* Grid background */}
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
                      <button
                        onClick={submit}
                        className="bg-gradient-to-r from-primary to-primary text-white px-6 py-4 font-medium hover:from-primary hover:to-primary/90 transition-all flex items-center gap-2"
                      >
                        <span className=" text-nowrap">Find Expert</span>
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
                        onClick={() => {
                          setSearchQuery(industry);
                          setShowResults(true);
                        }}
                        className="text-sm px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700 rounded-full transition-colors"
                      >
                        {industry}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Content - Stats */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-2 lg:gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.01 }}
                      className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 lg:rounded-xl backdrop-blur-sm"
                    >
                      <div className="text-3xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ) : (
        <FrontendPros searchQuery={searchQuery} setShowResults={setShowResults} />
      )}
    </>
  );
};

// ================= Developer Section =================
const developers = [
  {
    name: "Yaroslav D.",
    image: "https://static.vecteezy.com/system/resources/previews/028/063/763/non_2x/handsome-businessman-isolated-png.png",
    status: "online",
    badge: "pink",
  },
  {
    name: "Ms S.",
    image: "https://static.vecteezy.com/system/resources/previews/028/063/763/non_2x/handsome-businessman-isolated-png.png",
    status: "offline",
    badge: "pink",
  },
  {
    name: "Myroslav K.",
    image: "https://static.vecteezy.com/system/resources/previews/028/063/763/non_2x/handsome-businessman-isolated-png.png",
    status: "offline",
    badge: "blue",
  },
  {
    name: "Volodymyr P.",
    image: "https://static.vecteezy.com/system/resources/previews/028/063/763/non_2x/handsome-businessman-isolated-png.png",
    status: "online",
    badge: "pink",
  },
];

const DeveloperCard = ({ name, image, status, badge }) => (
  <div className="flex flex-col justify-center items-center bg-white shadow-md rounded-full p-4 border hover:shadow-lg transition">
    <div className="relative flex items-center justify-center">
      {/* Status dot */}
      <span
        className={`absolute -top-1 -left-1 w-3 h-3 rounded-full border-2 border-white ${
          status === "online" ? "bg-primary" : "bg-gray-400"
        }`}
      ></span>

      {/* Profile image */}
      <img src={image} alt={name} className="w-20 h-20 rounded-full object-cover" />

      {/* Badge */}
      <span
        className={`absolute bottom-0 right-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs ${
          badge === "pink" ? "bg-pink-500" : "bg-blue-500"
        }`}
      >
        ★
      </span>
    </div>
    <p className="mt-3 font-medium">{name}</p>
  </div>
);


const FrontendPros = ({ searchQuery, setShowResults }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-screen flex justify-center items-center bg-gray-100/80 backdrop-blur-sm p-4 md:p-6 overflow-y-auto">
      <div className="bg-white shadow-2xl rounded-2xl p-6 md:p-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {/* Left Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Find top-rated{" "}
            <span className="text-primary">{searchQuery}</span> experts
          </h1>

          {/* Rating */}
          <div className="flex items-center mt-6">
            <div className="flex text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <span className="ml-3 text-gray-800 font-medium text-sm md:text-base">
              4.7/5 average rating
            </span>
          </div>
          <p className="text-gray-500 text-xs md:text-sm mt-1">
            Trusted by 28k+ happy clients worldwide
          </p>

          {/* CTA Button */}
          <button
            onClick={() => navigate("/login")}
            className="mt-6 bg-primary text-white px-6 py-3 md:px-8 md:py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 font-medium text-sm md:text-base"
          >
            Get Started →
          </button>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mt-5 text-primary text-xs md:text-sm font-medium underline cursor-pointer">
            <span className="hover:text-primary">How hiring works</span>
            <span className="hover:text-primary">Platform pricing</span>
          </div>

          {/* AI Note */}
          <p className="text-xs text-gray-400 mt-5">
            ⚡ Powered by AI to match you with the right experts
          </p>

          {/* Back */}
          <button
            onClick={() => setShowResults(false)}
            className="mt-6 text-xs md:text-sm text-gray-500 hover:text-gray-700 underline"
          >
            ← Back to search
          </button>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {developers.map((dev, i) => (
            <DeveloperCard key={i} {...dev} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
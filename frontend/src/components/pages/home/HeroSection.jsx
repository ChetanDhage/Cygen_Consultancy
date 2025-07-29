// import React, { useState, useEffect } from 'react';
// import { BsSearch, BsLightningCharge, BsArrowRight, BsCheck2Circle, BsRobot } from 'react-icons/bs';
// import { FaUserTie, FaChartLine, FaShieldAlt, FaRegStar, FaStar } from 'react-icons/fa';
// import { GiArtificialIntelligence } from 'react-icons/gi';
// import { motion, AnimatePresence } from 'framer-motion';

// const HeroSection = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   const tabs = [
//     { id: 0, label: "AI Experts", icon: <GiArtificialIntelligence className="text-purple-400" /> },
//     { id: 1, label: "ML Engineers", icon: <BsRobot className="text-cyan-400" /> },
//     { id: 2, label: "Data Scientists", icon: <FaChartLine className="text-blue-400" /> } // fixed color
//   ];

//   const aiExperts = [
//     {
//       name: "Dr. Elena Rodriguez",
//       title: "AI Research Director",
//       company: "ex-Google DeepMind",
//       rating: 4.9,
//       tags: ["LLMs", "Computer Vision", "Generative AI"],
//       rate: "$450/hr",
//       availability: "Available now",
//       projects: 42
//     },
//     {
//       name: "Michael Chen",
//       title: "Machine Learning Architect",
//       company: "ex-OpenAI",
//       rating: 4.8,
//       tags: ["Neural Networks", "NLP", "TensorFlow"],
//       rate: "$380/hr",
//       availability: "Available in 2h",
//       projects: 36
//     },
//     {
//       name: "Sarah Johnson",
//       title: "AI Solutions Lead",
//       company: "ex-Microsoft Research",
//       rating: 4.7,
//       tags: ["PyTorch", "Reinforcement Learning", "AI Ethics"],
//       rate: "$420/hr",
//       availability: "Available tomorrow",
//       projects: 28
//     }
//   ];

//   return (
//     <section className="relative w-full min-h-screen bg-gradient-to-br from-[#0a0f1d] to-[#0c1429] text-white py-12 px-4 md:px-8">
//       {/* Background effects */}
//       <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
//         <div className="absolute top-20 left-[10%] w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-[15%] w-80 h-80 bg-cyan-500 rounded-full blur-3xl"></div>
//         <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
//           <defs>
//             <pattern id="network" width="40" height="40" patternUnits="userSpaceOnUse">
//               <circle cx="20" cy="20" r="1" fill="rgba(124, 58, 237, 0.1)" />
//               <path d="M0,20 Q20,0 40,20 T80,20" stroke="rgba(16, 185, 129, 0.05)" fill="none" />
//               <path d="M20,0 Q40,20 20,40 T20,80" stroke="rgba(16, 185, 129, 0.05)" fill="none" />
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#network)" />
//         </svg>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//         {/* Left Side */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="space-y-8"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-cyan-500/30">
//             <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
//             <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
//               CONSULTING PLATFORM
//             </span>
//           </div>

//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//             <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Empowering Real-Time</span> Collaboration to Drive Excellence
//           </h1>

//           <p className="text-xl text-gray-400 max-w-xl">
//             Solve complex technical challenges instantly through our curated network of vetted specialists across 50+ domains.
//           </p>

//           {/* Features */}
//           <div className="grid grid-cols-2 gap-4 mt-6">
//             {[
//               { icon: <BsRobot className="text-purple-400" />, text: "Generative AI" },
//               { icon: <GiArtificialIntelligence className="text-cyan-400" />, text: "LLM Development" },
//               { icon: <FaChartLine className="text-blue-400" />, text: "Predictive Models" },
//               { icon: <FaShieldAlt className="text-amber-400" />, text: "AI Security" }
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ y: -5 }}
//                 className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg border border-gray-800"
//               >
//                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
//                   {item.icon}
//                 </div>
//                 <span>{item.text}</span>
//               </motion.div>
//             ))}
//           </div>

//           {/* Search bar */}
//           <motion.div whileHover={{ scale: 1.01 }} className="relative mt-8 group">
//             <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-40 transition-opacity"></div>
//             <div className="relative flex rounded-xl overflow-hidden bg-gray-900 border border-gray-800">
//               <div className="relative flex-1">
//                 <input
//                   type="text"
//                   placeholder="Describe your challenge..."
//                   className="w-full px-5 py-4 pl-12 text-gray-300 bg-transparent focus:outline-none placeholder-gray-500"
//                 />
//                 <GiArtificialIntelligence className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400" />
//               </div>
//               <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 font-medium hover:from-purple-400 hover:to-cyan-400 transition-all flex items-center gap-2">
//                 <span>Match with Expert</span>
//                 <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>
//           </motion.div>

//           {/* Trust badges */}
//           <div className="grid grid-cols-2 gap-4 mt-6">
//             {[
//               { icon: <BsCheck2Circle className="text-green-400" />, text: "Verified Experts Only" },
//               { icon: <FaUserTie className="text-cyan-400" />, text: "10+ Years Avg. Experience" },
//               { icon: <FaShieldAlt className="text-amber-400" />, text: "NDA Protection" },
//               { icon: <BsLightningCharge className="text-purple-400" />, text: "Instant Connection" }
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ y: -3 }}
//                 className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg border border-gray-800"
//               >
//                 <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
//                   {item.icon}
//                 </div>
//                 <span className="text-sm">{item.text}</span>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Right Side - AI Expert Showcase */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10"
//         >
//           {/* Tab Switch */}
//           <div className="bg-gray-800/60 p-6 rounded-2xl border border-gray-700 shadow-xl">
//             <div className="flex border-b border-gray-700 mb-6">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`px-4 py-2 text-sm font-medium flex items-center gap-2 relative ${activeTab === tab.id ? "text-purple-400" : "text-gray-400 hover:text-white"}`}
//                 >
//                   {tab.icon}
//                   {tab.label}
//                   {activeTab === tab.id && (
//                     <motion.div
//                       layoutId="activeTabIndicator"
//                       className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500"
//                       transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
//                     />
//                   )}
//                 </button>
//               ))}
//             </div>

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeTab}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.3 }}
//                 className="space-y-6"
//               >
//                 {aiExperts.filter((_, i) => i === activeTab).map((expert, index) => (
//                   <div key={index} className="bg-gray-800/40 p-5 rounded-xl border border-gray-700">
//                     <div className="flex items-start gap-4">
//                       <div className="flex-shrink-0 relative">
//                         <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white text-xl font-bold">
//                           {expert.name.charAt(0)}
//                         </div>
//                         <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-400 border-2 border-gray-900"></div>
//                       </div>
//                       <div className="flex-grow">
//                         <div className="flex justify-between">
//                           <div>
//                             <h4 className="font-bold text-white">{expert.name}</h4>
//                             <p className="text-sm text-gray-400">{expert.title}</p>
//                           </div>
//                           <div className="text-purple-400 font-bold">{expert.rate}</div>
//                         </div>
//                         <div className="text-xs text-gray-500 mt-1">{expert.company}</div>

//                         <div className="flex items-center justify-between mt-3">
//                           <div className="flex items-center">
//                             <div className="flex mr-2">
//                               {[...Array(5)].map((_, i) =>
//                                 i < Math.floor(expert.rating) ? (
//                                   <FaStar key={i} className="w-4 h-4 text-amber-400" />
//                                 ) : (
//                                   <FaRegStar key={i} className="w-4 h-4 text-amber-400" />
//                                 )
//                               )}
//                             </div>
//                             <span className="text-sm text-gray-400">{expert.rating}</span>
//                           </div>
//                           <span className="text-xs bg-green-900/30 text-green-400 px-2 py-1 rounded">
//                             {expert.availability}
//                           </span>
//                         </div>

//                         <div className="mt-4 flex flex-wrap gap-2">
//                           {expert.tags.map((tag, i) => (
//                             <span key={i} className="text-xs bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full">
//                               {tag}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>

//                     <div className="mt-6 grid grid-cols-3 gap-4 text-center">
//                       <div>
//                         <div className="text-sm text-gray-400">Projects</div>
//                         <div className="text-lg font-bold text-white">{expert.projects}+</div>
//                       </div>
//                       <div>
//                         <div className="text-sm text-gray-400">Response Time</div>
//                         <div className="text-lg font-bold text-white">Under 2h</div>
//                       </div>
//                       <div>
//                         <div className="text-sm text-gray-400">Success Rate</div>
//                         <div className="text-lg font-bold text-white">98%</div>
//                       </div>
//                     </div>

//                     <div className="mt-6 grid grid-cols-2 gap-3">
//                       <button className="text-sm bg-gray-700 hover:bg-gray-600 transition-colors py-3 rounded-lg">
//                         View Full Profile
//                       </button>
//                       <button className="text-sm bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-400 hover:to-cyan-400 transition-all py-3 rounded-lg text-white font-semibold flex items-center justify-center gap-2">
//                         <BsLightningCharge /> Instant Connect
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import React, { useState } from 'react';
import { BsSearch, BsLightningCharge, BsArrowRight, BsCheck2Circle } from 'react-icons/bs';
import { FaUserTie, FaChartLine, FaShieldAlt, FaRegStar, FaStar } from 'react-icons/fa';
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
    <section className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white py-20 px-4 md:px-8 overflow-hidden">
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
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-blue-500/10 blur-3xl"></div>
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
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-400">
                CONSULTING PLATFORM
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Empowering Real-Time </span>Collaboration to Drive Execellence
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl">
              Solve complex technical challenges instantly through our  curated networks of vetted specialists across 50+ domains.
            </p>

            {/* Search and CTA */}
            <div className="space-y-6">
              <div className="relative group max-w-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative flex rounded-lg overflow-hidden bg-gray-800 border border-gray-700">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Describe your technical challenge..."
                    className="w-full px-5 py-4 pl-12 text-gray-200 bg-transparent focus:outline-none placeholder-gray-500"
                  />
                  <GiArtificialIntelligence className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400" />
                  <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-4 font-medium hover:from-blue-400 hover:to-cyan-400 transition-all flex items-center gap-2">
                    <span>Find Expert</span>
                    <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {industries.map((industry, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ y: -2 }}
                    className="text-sm px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 rounded-full transition-colors"
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
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="p-6 bg-gray-800/30 border border-gray-700/50 rounded-xl backdrop-blur-sm"
                >
                  <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Value Proposition Cards */}
            <div className="space-y-4">
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-6 bg-gray-800/40 border border-blue-500/20 rounded-xl flex items-start gap-4"
              >
                <div className="flex-shrink-0 p-3 bg-blue-500/10 rounded-lg text-blue-400">
                  <BsLightningCharge className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Immediate Access</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Connect with experts in minutes, not weeks. Our matching algorithm finds the perfect specialist for your specific need.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="p-6 bg-gray-800/40 border border-purple-500/20 rounded-xl flex items-start gap-4"
              >
                <div className="flex-shrink-0 p-3 bg-purple-500/10 rounded-lg text-purple-400">
                  <FaShieldAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Enterprise-Grade Security</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    All engagements include NDAs, secure communication channels, and compliance with your security protocols.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="p-6 bg-gray-800/40 border border-cyan-500/20 rounded-xl flex items-start gap-4"
              >
                <div className="flex-shrink-0 p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                  <BsCheck2Circle className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Vetted Expertise</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Every specialist undergoes rigorous technical evaluation and industry experience verification.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Trust Badges */}
           
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
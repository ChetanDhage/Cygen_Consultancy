import React, { useState, useEffect } from 'react';
import { BsSearch, BsLightningCharge, BsArrowRight, BsCheck2Circle } from 'react-icons/bs';
import { FaUserTie, FaChartLine, FaShieldAlt, FaRegStar, FaStar } from 'react-icons/fa';
import { GiArtificialIntelligence } from 'react-icons/gi';

const HeroSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto rotate categories
    const interval = setInterval(() => {
      setActiveCategory(prev => (prev + 1) % 3);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id='home' 
      className="relative w-full min-h-screen overflow-hidden dark:bg-gradient-to-br dark:from-[#0a0f1d] dark:to-[#0c1429] dark:text-white py-12 px-4 md:px-8 lg:flex lg:justify-between items-center"
    >
      {/* Abstract geometric background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[15%] w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-[15%] left-[5%] w-16 h-16 border-4 border-cyan-500/30 rounded-full"></div>
        <div className="absolute top-[25%] right-[20%] w-10 h-10 rotate-45 border-2 border-purple-500/30"></div>
        <div className="absolute bottom-[30%] left-[15%] w-24 h-24 border-4 border-primary/30 rotate-12"></div>
        
        {/* Floating lines */}
        <div className="absolute top-1/4 left-1/3 w-40 h-1 bg-primary/20 transform rotate-45"></div>
        <div className="absolute bottom-1/3 right-1/4 w-60 h-0.5 bg-purple-500/20 transform -rotate-12"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-full mb-6 border border-primary/30">
              <div className="w-2 h-2 rounded-full bg-cyan-800 animate-pulse"></div>
              <span className="text-sm font-medium bg-gradient-to-r from-cyan-800 to-primary bg-clip-text text-transparent">
                PREMIUM CONSULTING PLATFORM
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Access <span className="bg-gradient-to-r from-primary to-cyan-800 bg-clip-text text-transparent">Top 1%</span> Technical Experts in Real-Time
            </h1>
            
            <p className="text-xl text-gray-500 mb-8 max-w-xl">
              Solve complex technical challenges instantly through our curated network of vetted specialists across 50+ domains.
            </p>

            {/* Category selector */}
            <div className="flex gap-3 mb-6">
              {[
                { id: 0, label: "AI & ML", icon: <GiArtificialIntelligence className="text-purple-400" /> },
                { id: 1, label: "Cybersecurity", icon: <FaShieldAlt className="text-amber-400" /> },
                { id: 2, label: "Cloud Infrastructure", icon: <FaChartLine className="text-primary" /> }
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r from-primary/30 to-cyan-600/30 border border-cyan-500/50"
                      : ""
                  }`}
                >
                  {category.icon}
                  <span>{category.label}</span>
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative mb-10 group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative flex rounded-xl overflow-hidden dark:shadow-lg dark:bg-gray-900 border dark:border-gray-800 border-primary">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder={`Find ${activeCategory === 0 ? "AI/ML" : activeCategory === 1 ? "Cybersecurity" : "Cloud"} experts...`}
                    className="w-full px-5 py-4 pl-12 text-gray-300 bg-transparent focus:outline-none placeholder-gray-500"
                  />
                  <BsSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
                <button className="bg-gradient-to-r from-primary to-cyan-600 text-white px-8 py-4 font-medium hover:from-primary hover:to-cyan-500 transition-all flex items-center gap-2 group-hover:gap-3">
                  <span>Connect Now</span>
                  <BsLightningCharge className="animate-pulse" />
                </button>
              </div>
            </div>

            {/* Value Propositions */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <BsCheck2Circle className="text-green-400" />, text: "Verified Experts Only" },
                { icon: <FaUserTie className="text-cyan-800" />, text: "10+ Years Avg. Experience" },
                { icon: <FaShieldAlt className="text-amber-400" />, text: "NDA Protection" },
                { icon: <BsLightningCharge className="text-purple-400" />, text: "Instant Connection" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-500">
                  <div className="w-8 h-8 rounded-full dark:bg-gray-800 flex items-center justify-center border border-primaryLight shadow-sm">
                    {item.icon}
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Interactive Showcase */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Main showcase card */}
              <div className="dark:bg-gradient-to-br from-gray-900 to-[#0a1125] rounded-2xl p-6 border dark:border-gray-800 shadow-[0_25px_50px_-15px_rgba(0,220,255,0.15)]">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-bold">Featured Experts</h3>
                  <div className="flex">
                    {[...Array(3)].map((_, i) => (
                      <div 
                        key={i}
                        onClick={() => setActiveCategory(i)}
                        className={`w-3 h-3 rounded-full mx-1 cursor-pointer transition-all ${
                          activeCategory === i ? "bg-cyan-800 scale-125" : "bg-gray-700"
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
                
                {/* Expert showcase */}
                <div className="space-y-6">
                  {[
                    { 
                      name: "Dr. Elena Rodriguez", 
                      title: "AI Research Director", 
                      company: "ex-Google DeepMind",
                      rating: 4.9,
                      tags: ["Machine Learning", "LLMs", "Computer Vision"],
                      rate: "$450/hr"
                    },
                    { 
                      name: "Michael Chen", 
                      title: "Cybersecurity Architect", 
                      company: "ex-CrowdStrike",
                      rating: 4.8,
                      tags: ["Cloud Security", "Zero Trust", "Threat Intel"],
                      rate: "$380/hr"
                    },
                    { 
                      name: "Sarah Johnson", 
                      title: "Cloud Infrastructure Lead", 
                      company: "ex-AWS",
                      rating: 4.7,
                      tags: ["Kubernetes", "Terraform", "Multi-Cloud"],
                      rate: "$420/hr"
                    }
                  ].filter((_, i) => i === activeCategory).map((expert, index) => (
                    <div key={index} className="dark:bg-gray-800/50 rounded-xl p-5 border dark:border-gray-700">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-cyan-500 flex items-center justify-center text-white text-lg font-bold">
                            {expert.name.charAt(0)}
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between">
                            <div>
                              <h4 className="font-bold dark:text-white">{expert.name}</h4>
                              <p className="text-sm text-gray-400">{expert.title}</p>
                            </div>
                            <div className="text-amber-400 font-bold">{expert.rate}</div>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">{expert.company}</div>
                          
                          <div className="flex items-center mt-3">
                            <div className="flex mr-2">
                              {[...Array(5)].map((_, i) => (
                                i < Math.floor(expert.rating) ? 
                                <FaStar key={i} className="w-4 h-4 text-amber-400" /> : 
                                <FaRegStar key={i} className="w-4 h-4 text-amber-400" />
                              ))}
                            </div>
                            <span className="text-sm text-gray-400">{expert.rating}</span>
                          </div>
                          
                          <div className="mt-4 flex flex-wrap gap-2">
                            {expert.tags.map((tag, i) => (
                              <span 
                                key={i} 
                                className="text-xs bg-primary/40  dark:text-white px-3 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-5 grid grid-cols-2 gap-3">
                        <button className="text-sm dark:bg-gray-700  transition-colors py-2 rounded-lg shadow-sm border">
                          View Profile
                        </button>
                        <button className="text-sm bg-gradient-to-r from-primary to-cyan-600 hover:from-primary hover:to-cyan-500 transition-all py-2 rounded-lg text-white font-semibold">
                          Instant Connect
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Stats bar */}
                <div className="mt-8 pt-6 border-t dark:border-gray-800 grid grid-cols-3 gap-4">
                  {[
                    { value: "15K+", label: "Experts" },
                    { value: "98%", label: "Success" },
                    { value: "24/7", label: "Support" }
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xl font-bold bg-gradient-to-r from-cyan-800 to-primary bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating testimonials */}
              <div className="absolute -bottom-8 -left-8  bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-[#0a1125] shadow-xl rounded-xl p-5 border-dashed dark:border-gray-800 w-64 transform rotate-3">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm italic text-gray-300">
                  "Solved our cloud migration issues in 2 hours that stalled our team for weeks"
                </p>
                <div className="mt-3 text-xs text-gray-500">
                  - CTO, FinTech Startup
                </div>
              </div>
              
              <div className="absolute -top-8 -right-8  bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-[#0a1125] shadow-xl rounded-xl p-5 border dark:border-gray-800 w-64 transform -rotate-3">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm italic text-gray-300">
                  "Their AI expert helped us optimize our model, reducing costs by 40%"
                </p>
                <div className="mt-3 text-xs text-gray-500">
                  - Lead Data Scientist, HealthTech
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trusted by section */}
        <div className="mt-20 pt-10 border-t border-gray-800 max-w-5xl mx-auto">
          <div className="text-center text-gray-400 mb-6">Trusted by technical leaders at</div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
            {[
              { name: "TechNova", color: "text-primary" },
              { name: "QuantumLeap", color: "text-purple-400" },
              { name: "CloudForge", color: "text-cyan-800" },
              { name: "SecureAxis", color: "text-amber-400" },
              { name: "DataMind", color: "text-green-400" }
            ].map((company, i) => (
              <div key={i} className={`text-xl font-bold ${company.color} opacity-80 hover:opacity-100 transition-opacity`}>
                {company.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
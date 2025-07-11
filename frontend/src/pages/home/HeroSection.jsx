import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('find');

  return (
    <div
      id="home"
      className="relative dark:bg-[#090d13] bg-white w-full overflow-hidden flex items-center justify-center text-white sm:px-4"
    >
      <div
        className="relative w-full lg:w-10/12 lg:h-[600px] h-[400px] flex justify-center items-center mt-10 md:rounded-3xl overflow-hidden hero-section-img"
      >
        <div className="absolute inset-0 bg-black bg-opacity-40" />

        <div className="relative z-10 lg:w-2/3 w-full">
          <div className="px-4 max-w-3xl mx-auto md:ml-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Connecting clients in <br /> need to freelancers <br /> who deliver
            </h1>

            <div className="md:max-w-xl w-full bg-gradient-to-r from-green-500 to-cyan-500 md:rounded-3xl shadow-2xl p-4">
              {/* Tabs */}
              <div className="flex mb-4 gap-4 justify-center">
                <button
                  aria-pressed={activeTab === 'find'}
                  className={`px-4 py-2 rounded-full font-semibold transition duration-300 ease-in-out ${
                    activeTab === 'find'
                      ? 'bg-white text-black'
                      : 'bg-gray-700 text-white'
                  }`}
                  onClick={() => setActiveTab('find')}
                >
                  Find talent
                </button>
                <button
                  aria-pressed={activeTab === 'browse'}
                  className={`px-4 py-2 rounded-full font-semibold transition duration-300 ease-in-out ${
                    activeTab === 'browse'
                      ? 'bg-white text-black'
                      : 'bg-gray-700 text-white'
                  }`}
                  onClick={() => setActiveTab('browse')}
                >
                  Browse jobs
                </button>
              </div>

              {/* Search Bar */}
              <div className="flex items-center rounded-full bg-white overflow-hidden p-1">
                <input
                  type="text"
                  placeholder="Search by role, skills, or keywords"
                  className="flex-grow px-4 py-2 text-black outline-none"
                />
                <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
                  <FaSearch className="text-lime-400" />
                  Search
                </button>
              </div>

              {/* Client Logos */}
              <div className="flex justify-center items-center gap-8 mt-6 text-sm text-gray-100">
                {['Microsoft', 'airbnb', 'Bissell', 'Glassdoor'].map((brand) => (
                  <a
                    key={brand}
                    href="#"
                    className="opacity-60 hover:opacity-100 transition"
                  >
                    {brand}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Optional empty space on right for layout symmetry */}
        <div className="lg:block hidden w-1/3"></div>
      </div>
    </div>
  );
};

export default HeroSection;

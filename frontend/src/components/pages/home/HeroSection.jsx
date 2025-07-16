import React from 'react';
import { BsFillChatDotsFill, BsFillPersonCheckFill } from 'react-icons/bs';

const HeroSection = () => {
  return (
    <section id='home' className="bg-gradient-to-r w-full lg:h-[90vh] h-full dark:bg-[#090d13] text-black dark:text-white py-12 px-6 md:px-16 lg:flex lg:justify-between items-center">
      {/* Left Side */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-4xl font-bold text-black dark:text-white leading-tight">
          Connect with <span className="text-primary">Experts</span> in Real-Time
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Get instant access to verified consultants across various domains. Solve your technical challenges through chat, audio, or video sessions.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="bg-primary text-white font-semibold  px-4 py-2 rounded-md shadow hover:bg-blue-700 transition duration-300">
            Find an Expert
          </button>
          <button className="border border-primary text-primary font-semibold px-4 py-2 rounded-md hover:bg-blue-50 transition duration-300">
            Become a Consultant
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-8 mt-5 flex-wrap">
          <div className=' p-4 shadow-primary shadow-sm rounded-2xl '>
            <p className="text-2xl font-bold text-black dark:text-white">15K+</p>
            <p className="text-gray-500 text-sm">Experts</p>
          </div>
          <div className=' p-4 shadow-primary shadow-sm rounded-2xl '>
            <p className="text-2xl font-bold text-black dark:text-white">50+</p>
            <p className="text-gray-500 text-sm">Domains</p>
          </div>
          <div className=' p-4 shadow-primary shadow-sm rounded-2xl '>
            <p className="text-2xl font-bold text-black dark:text-white">98%</p>
            <p className="text-gray-500 text-sm">Satisfaction</p>
          </div>
          <div className=' p-4 shadow-primary shadow-sm rounded-2xl '>
            <p className="text-2xl font-bold text-black dark:text-white">24/7</p>
            <p className="text-gray-500 text-sm">Support</p>
          </div>
        </div>
      </div>

      {/* Right Side (Chat UI) */}
      <div className="relative mt-12 lg:mt-0 w-full max-w-md text-black ">
        <div className="bg-white dark:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-800 to-black shadow-xl rounded-xl p-6 space-y-4  ">
          <div className="text-gray-500 text-sm font-semibold text-right">Chat Support</div>

          <div className="flex gap-2 items-start">
            <BsFillChatDotsFill className="text-primary mt-1" />
            <div className="bg-gray-100 p-3 w-full text-sm rounded-b-2xl rounded-tr-2xl">
              Hi there! I'm CyGen Bot. What domain are you looking for help with today?
            </div>
          </div>

          <div className="flex gap-2 items-end justify-end">
            <div className="bg-blue-100 p-3 w-fit text-right text-sm rounded-b-2xl rounded-tl-2xl">
              I need help with Network Security configuration.
            </div>
          </div>

          <div className="flex gap-2 items-start">
            <BsFillChatDotsFill className="text-primary mt-1" />
            <div className="bg-gray-100 p-3  w-full text-sm rounded-b-2xl rounded-tr-2xl">
              Great! I found 12 available Network Security experts. Would you like to connect now?
            </div>
          </div>

          <button className="bg-primary text-left text-white text-sm  px-6 py-2 rounded-3xl w-full hover:bg-blue-700 transition">
            Connect Now
          </button>
        </div>

        {/* Expert Card */}
        <div className="absolute -bottom-6 right-0 bg-white shadow-lg rounded-xl p-4 flex items-center gap-4 w-full max-w-xs">
          <div className="bg-green-100 w-3 h-3 rounded-full"></div>
          <div>
            <p className="font-semibold text-black ">Alex Morgan</p>
            <p className="text-sm text-gray-500">Network Security · 8 yrs exp</p>
          </div>
          <BsFillPersonCheckFill className="text-green-500 ml-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

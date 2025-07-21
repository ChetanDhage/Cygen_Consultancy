// import React from 'react';
// import { BsLightningCharge, BsShieldCheck, BsChatDots, BsArrowRight } from 'react-icons/bs';

// const features = [
//   {
//     title: 'Instant Connections',
//     desc: 'Get matched with available experts in seconds, not days. Solve urgent problems immediately.',
//     icon: <BsLightningCharge size={24} className="text-primary" />,
//     bgColor: 'bg-primary text-primary',
//     linkColor: 'text-primary'
//   },
//   {
//     title: 'Verified Experts',
//     desc: 'All consultants undergo rigorous vetting to ensure top-quality expertise in their domains.',
//     icon: <BsShieldCheck size={24} className="text-primary" />,
//     bgColor: 'bg-primary text-primary',
//     linkColor: 'text-primary'
//   },
//   {
//     title: 'Multiple Channels',
//     desc: 'Connect via chat, audio, or video – whatever works best for your consultation needs.',
//     icon: <BsChatDots size={24} className="text-primary" />,
//     bgColor: 'bg-primary text-primary',
//     linkColor: 'text-primary'
//   }
// ];

// const WhyChoose = () => {
//   return (
//     <section id='about' className="bg-[#f1f6ff] dark:bg-[#090d13] py-16 px-4 md:px-20">
//       <div className="text-center mb-10">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">Why Choose CyGen?</h2>
//         <p className="text-gray-600  mt-2">
//           Powerful features designed to connect you with the right expertise
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {features.map((item, index) => (
//           <div key={index} className="bg-white dark:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black rounded-xl p-6 shadow-sm hover:shadow-md transition">
//             <div className="w-12 h-12 flex items-center justify-center rounded-full mb-4" style={{ backgroundColor: item.bgColor }}>
//               {item.icon}
//             </div>
//             <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
//             <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
//             <a href="#" className={`mt-4 inline-flex items-center text-sm font-medium ${item.linkColor}`}>
//               Learn more <BsArrowRight className="ml-1" />
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyChoose;
import React, { useState, useEffect } from 'react';
import { BsLightningCharge, BsShieldCheck, BsChatDots, BsArrowRight } from 'react-icons/bs';

const features = [
  {
    title: 'Instant Connections',
    desc: 'Get matched with available experts in seconds, not days. Solve urgent problems immediately.',
    icon: <BsLightningCharge className="text-white" />,
    bgColor: 'bg-gradient-to-br from-yellow-500 to-amber-500',
    linkColor: 'text-amber-500'
  },
  {
    title: 'Verified Experts',
    desc: 'All consultants undergo rigorous vetting to ensure top-quality expertise in their domains.',
    icon: <BsShieldCheck className="text-white" />,
    bgColor: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    linkColor: 'text-blue-500'
  },
  {
    title: 'Multiple Channels',
    desc: 'Connect via chat, audio, or video – whatever works best for your consultation needs.',
    icon: <BsChatDots className="text-white" />,
    bgColor: 'bg-gradient-to-br from-purple-500 to-pink-500',
    linkColor: 'text-purple-500'
  }
];

const WhyChoose = () => {
  const [visibleFeatures, setVisibleFeatures] = useState([]);
  
  useEffect(() => {
    // Simulate staggered animation for features
    const timer1 = setTimeout(() => setVisibleFeatures([0]), 100);
    const timer2 = setTimeout(() => setVisibleFeatures([0,1]), 300);
    const timer3 = setTimeout(() => setVisibleFeatures([0,1,2]), 500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section id='about' className="relative py-20 px-4 md:px-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[15%] w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full mb-6 border border-blue-500/30">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              POWERFUL FEATURES
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
            Why Choose <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">CyGen</span>?
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Advanced features designed to connect you with the perfect expertise instantly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div 
              key={index}
              className={`
                relative rounded-2xl overflow-hidden
                transition-all duration-700 ease-out
                ${visibleFeatures.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-[2px]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
              </div>
              
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl h-full p-7 flex flex-col group">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 flex items-center justify-center rounded-2xl mb-6 ${item.bgColor} transition-transform group-hover:-translate-y-1`}>
                  {React.cloneElement(item.icon, { size: 28 })}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 transition-all">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                  {item.desc}
                </p>
                
                <a 
                  href="#" 
                  className={`inline-flex items-center font-medium ${item.linkColor} group-hover:${item.linkColor}/80 transition-colors`}
                >
                  <span className="mr-2">Learn more</span>
                  <BsArrowRight className="transition-transform group-hover:translate-x-1" />
                </a>
                
                {/* Hover effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { value: '24/7', label: 'Expert Availability' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '5 min', label: 'Avg. Response Time' },
            { value: '10K+', label: 'Active Consultants' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm text-center"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
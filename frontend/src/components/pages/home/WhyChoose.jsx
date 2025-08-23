// import React, { useState, useEffect } from 'react';
// import { BsLightningCharge, BsShieldCheck, BsChatDots, BsArrowRight } from 'react-icons/bs';

// const features = [
//   {
//     title: 'Instant Connections',
//     desc: 'Get matched with available experts in seconds, not days. Solve urgent problems immediately.',
//     icon: <BsLightningCharge className="text-white" />,
//     bgColor: 'bg-gradient-to-br from-yellow-500 to-amber-500',
//     linkColor: 'text-amber-500'
//   },
//   {
//     title: 'Verified Experts',
//     desc: 'All consultants undergo rigorous vetting to ensure top-quality expertise in their domains.',
//     icon: <BsShieldCheck className="text-white" />,
//     bgColor: 'bg-gradient-to-br from-primary to-cyan-500',
//     linkColor: 'text-primary'
//   },
//   {
//     title: 'Multiple Channels',
//     desc: 'Connect via chat, audio, or video – whatever works best for your consultation needs.',
//     icon: <BsChatDots className="text-white" />,
//     bgColor: 'bg-gradient-to-br from-purple-500 to-pink-500',
//     linkColor: 'text-purple-500'
//   }
// ];

// const WhyChoose = () => {
//   const [visibleFeatures, setVisibleFeatures] = useState([]);
  
//   useEffect(() => {
//     // Simulate staggered animation for features
//     const timer1 = setTimeout(() => setVisibleFeatures([0]), 100);
//     const timer2 = setTimeout(() => setVisibleFeatures([0,1]), 300);
//     const timer3 = setTimeout(() => setVisibleFeatures([0,1,2]), 500);
    
//     return () => {
//       clearTimeout(timer1);
//       clearTimeout(timer2);
//       clearTimeout(timer3);
//     };
//   }, []);

//   return (
//     <section id='about' className="relative py-20 px-4 md:px-8 overflow-hidden bg-white/80 dark:bg-gradient-to-br dark:from-[#0a0f1d] dark:to-[#0c1429] dark:text-white">
//       {/* Background elements */}
//       <div className="absolute inset-0 z-0 opacity-10">
//         <div className="absolute top-20 left-[10%] w-64 h-64 bg-primary rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-[15%] w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
//       </div>
      
//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-full mb-6 border border-primary/30">
//             <span className="text-sm font-medium bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
//               POWERFUL FEATURES
//             </span>
//           </div>
//            <hr className=' my-4  border-1 border-primary animate-pulse' />
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
//             Why Choose <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">Worklify</span>?
//           </h2>
//            <hr className=' my-4  border-1 border-primary animate-pulse' />
//           <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Advanced features designed to connect you with the perfect expertise instantly
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {features.map((item, index) => (
//             <div 
//               key={index}
//               className={`
//                 relative rounded-2xl overflow-hidden
//                 transition-all duration-700 ease-out
//                 ${visibleFeatures.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
//               `}
//             >
//               {/* Gradient border effect */}
//               <div className="absolute inset-0 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl p-[2px]">
//                 <div className="absolute inset-0 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
//               </div>
              
//               <div className="relative bg-white dark:bg-gray-900 rounded-2xl h-full p-7 flex flex-col group">
//                 {/* Icon with gradient background */}
//                 <div className={`w-16 h-16 flex items-center justify-center rounded-2xl mb-6 ${item.bgColor} transition-transform group-hover:-translate-y-1`}>
//                   {React.cloneElement(item.icon, { size: 28 })}
//                 </div>
                
//                 <h3 className="text-xl font-bold text-gray-600 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-cyan-500 transition-all">
//                   {item.title}
//                 </h3>
                
//                 <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
//                   {item.desc}
//                 </p>
                
//                 <a 
//                   href="#" 
//                   className={`inline-flex items-center font-medium ${item.linkColor} group-hover:${item.linkColor}/80 transition-colors`}
//                 >
//                   <span className="mr-2">Learn more</span>
//                   <BsArrowRight className="transition-transform group-hover:translate-x-1" />
//                 </a>
                
//                 {/* Hover effect */}
//                 <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* Stats section */}
//         <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
//           {[
//             { value: '24/7', label: 'Expert Availability' },
//             { value: '98%', label: 'Satisfaction Rate' },
//             { value: '5 min', label: 'Avg. Response Time' },
//             { value: '10K+', label: 'Active Consultants' }
//           ].map((stat, index) => (
//             <div 
//               key={index}
//               className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm text-center"
//             >
//               <div className="text-3xl font-bold bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent mb-2">
//                 {stat.value}
//               </div>
//               <div className="text-gray-600 dark:text-gray-400 text-sm">
//                 {stat.label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChoose;

import React, { useState, useEffect } from 'react';
import { BsLightningCharge, BsShieldCheck, BsChatDots } from 'react-icons/bs';

const features = [
  {
    title: 'Instant Connections',
    desc: 'Get matched with available experts in seconds, not days. Solve urgent problems immediately with our intelligent matching system.',
    icon: <BsLightningCharge className="text-white" />,
    bgColor: 'bg-gradient-to-br from-yellow-500 to-amber-600',
    borderColor: 'border-amber-500/20'
  },
  {
    title: 'Verified Experts',
    desc: 'All consultants undergo rigorous vetting to ensure top-quality expertise in their domains with verified credentials.',
    icon: <BsShieldCheck className="text-white" />,
    bgColor: 'bg-gradient-to-br from-primary to-cyan-600',
    borderColor: 'border-primary/20'
  },
  {
    title: 'Multiple Channels',
    desc: 'Connect via chat, audio, or video – whatever works best for your consultation needs with seamless integration.',
    icon: <BsChatDots className="text-white" />,
    bgColor: 'bg-gradient-to-br from-purple-600 to-pink-600',
    borderColor: 'border-purple-500/20'
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
    <section id='about' className="relative py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:bg-gradient-to-br dark:from-[#0a0f1d] dark:to-[#0c1429] dark:text-white">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[15%] w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-full mb-6 border border-primary/30">
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              POWERFUL FEATURES
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
            Why Choose <span className="bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">Worklify</span>?
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
                relative group transition-all duration-500 ease-out
                ${visibleFeatures.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              <div className="h-full bg-white dark:bg-gray-900 rounded-2xl p-7 flex flex-col border ${item.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 flex items-center justify-center rounded-xl mb-6 ${item.bgColor} transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  {React.cloneElement(item.icon, { size: 28 })}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed">
                  {item.desc}
                </p>
                
                {/* Decorative element */}
                <div className={`h-1 w-12 ${item.bgColor} rounded-full mb-4 opacity-80 group-hover:w-16 transition-all duration-300`}></div>
              </div>
              
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-2xl ${item.bgColor} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-300 -z-10`}></div>
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
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
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
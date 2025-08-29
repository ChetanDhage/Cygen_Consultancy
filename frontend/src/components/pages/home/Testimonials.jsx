// import React from 'react';
// import { BsStarFill, BsStarHalf } from 'react-icons/bs';

// const testimonials = [
//   {
//     name: 'Rajesh Kumar',
//     title: 'CTO at TechNova',
//     text: 'Worklify helped us resolve a critical network security issue in under 2 hours. The expert we connected with was incredibly knowledgeable.',
//     rating: 5
//   },
//   {
//     name: 'Priya Desai',
//     title: 'Startup Founder',
//     text: "As a consultant on Worklify, I've been able to share my expertise with clients worldwide while maintaining a flexible schedule.",
//     rating: 4.5
//   },
//   {
//     name: 'Michael Johnson',
//     title: 'IT Manager',
//     text: "The platform's ability to match us with specialists in niche domains like quantum cryptography has been invaluable for our R&D team.",
//     rating: 5
//   }
// ];

// const renderStars = (rating) => {
//   const fullStars = Math.floor(rating);
//   const hasHalfStar = rating - fullStars >= 0.5;
//   return (
//     <>
//       {Array(fullStars)
//         .fill()
//         .map((_, i) => (
//           <BsStarFill key={i} className="text-yellow-400" />
//         ))}
//       {hasHalfStar && <BsStarHalf className="text-yellow-400" />}
//     </>
//   );
// };

// const Testimonials = () => {
//   return (
//     <section className=" relative bg-[#f4f8fd] dark:bg-[#090d13] py-16 px-4 md:px-20">
//        {/* Background elements */}
//       <div className="absolute inset-0 z-0 opacity-10">
//         <div className="absolute top-20 left-[10%] w-64 h-64 bg-primary rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-[15%] w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
//       </div>
//       <div className="text-center mb-10">
//         <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-full mb-2 border border-primary/30">
//           <span className="text-sm font-medium uppercase bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
//             Testimonial Section
//           </span>
//         </div>
//         <hr className=' my-4  border-1 border-primary animate-pulse' />
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">What Our Users Say</h2>
//         <hr className=' my-4  border-1 border-primary animate-pulse' />
//         <p className="text-gray-600 mt-2 text-sm">Success stories from customers and consultants</p>
//       </div>

//       <div className="overflow-hidden whitespace-nowrap w-full  py-4">
//         <div className="flex gap-4 animate-marquee">
//           {testimonials.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white dark:bg-[#0b1225] rounded-xl p-6 shadow-sm hover:shadow-md transition-all text-wrap w-[400px]"
//             >
//               <div className="flex items-center gap-4 mb-3">
//                 <div className="w-10 h-10 bg-gray-200 rounded-full" />
//                 <div>
//                   <h4 className="font-semibold text-gray-800 dark:text-white">{item.name}</h4>
//                   <p className="text-sm text-gray-500">{item.title}</p>
//                 </div>
//               </div>
//               <p className="text-gray-500 text-sm mb-4">{item.text}</p>
//               <div className="flex">{renderStars(item.rating)}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//     </section>
//   );
// };

// export default Testimonials;

import React, { useState, useEffect } from 'react';
import { BsStarFill, BsStarHalf, BsQuote, BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    title: 'CTO at TechNova',
    text: 'Worklify helped us resolve a critical network security issue in under 2 hours. The expert we connected with was incredibly knowledgeable and provided actionable solutions immediately.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
  },
  {
    id: 2,
    name: 'Priya Desai',
    title: 'Startup Founder',
    text: "As a consultant on Worklify, I've been able to share my expertise with clients worldwide while maintaining a flexible schedule. The platform is intuitive and the support team is always responsive.",
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80'
  },
  {
    id: 3,
    name: 'Michael Johnson',
    title: 'IT Manager',
    text: "The platform's ability to match us with specialists in niche domains like quantum cryptography has been invaluable for our R&D team. We've cut problem resolution time by 70%.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1890&q=80'
  },
  {
    id: 4,
    name: 'Sarah Chen',
    title: 'Software Engineering Lead',
    text: "I've used Worklify both as a client and consultant. The seamless payment system and clear communication tools make it my go-to platform for expert consultations.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80'
  },
  {
    id: 5,
    name: 'David Wilson',
    title: 'Cybersecurity Director',
    text: "The quality of experts on Worklify is exceptional. We've solved complex infrastructure challenges that had stumped our internal team for weeks.",
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
  },
  {
    id: 6,
    name: 'Aisha Patel',
    title: 'Product Manager',
    text: "Worklify's matching algorithm is spot-on. I always get connected with consultants who have exactly the right expertise for my specific challenges.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80'
  }
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  
  return (
    <div className="flex gap-1">
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <BsStarFill key={i} className="text-yellow-400 text-lg" />
        ))}
      {hasHalfStar && <BsStarHalf className="text-yellow-400 text-lg" />}
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white dark:bg-gradient-to-br dark:from-[#090d13] dark:to-[#0c1429] py-20 px-4 md:px-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[15%] w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-full mb-6 border border-primary/30">
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
              CLIENT TESTIMONIALS
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-white dark:to-gray-200 bg-clip-text text-transparent">
            Trusted by Professionals
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover why thousands of experts and clients choose Worklify
          </p>
        </div>

        {/* Main testimonial card */}
        <div 
          className="bg-white dark:bg-[#0b1225] rounded-2xl p-8 md:p-12 shadow-xl mb-12 relative overflow-hidden border border-gray-100 dark:border-gray-800"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Quote icon */}
          <div className="absolute top-6 right-6 text-primary/10">
            <BsQuote className="text-6xl" />
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-48 h-48 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-full shadow-md">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <div className="text-primary mb-2">
                {renderStars(testimonials[currentIndex].rating)}
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-light text-gray-800 dark:text-white mb-6 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-500 dark:text-gray-400">
                  {testimonials[currentIndex].title}
                </p>
              </div>
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transition-all text-gray-700 dark:text-gray-300 hover:text-primary"
          >
            <BsArrowLeft className="text-xl" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transition-all text-gray-700 dark:text-gray-300 hover:text-primary"
          >
            <BsArrowRight className="text-xl" />
          </button>
        </div>

        {/* Testimonial indicators */}
        <div className="flex justify-center gap-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-primary w-8' 
                  : 'bg-gray-300 dark:bg-gray-700 hover:bg-primary/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Additional testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.filter((_, index) => index !== currentIndex).slice(0, 3).map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white dark:bg-[#0b1225] rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100 dark:border-gray-800 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
                </div>
              </div>
              
              <div className="mb-3">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                "{testimonial.text.slice(0, 100)}..."
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
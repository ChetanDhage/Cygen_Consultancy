import React from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    title: 'CTO at TechNova',
    text: 'CyGen helped us resolve a critical network security issue in under 2 hours. The expert we connected with was incredibly knowledgeable.',
    rating: 5
  },
  {
    name: 'Priya Desai',
    title: 'Startup Founder',
    text: "As a consultant on CyGen, I've been able to share my expertise with clients worldwide while maintaining a flexible schedule.",
    rating: 4.5
  },
  {
    name: 'Michael Johnson',
    title: 'IT Manager',
    text: "The platform's ability to match us with specialists in niche domains like quantum cryptography has been invaluable for our R&D team.",
    rating: 5
  }
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  return (
    <>
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <BsStarFill key={i} className="text-yellow-400" />
        ))}
      {hasHalfStar && <BsStarHalf className="text-yellow-400" />}
    </>
  );
};

const Testimonials = () => {
  return (
    <section className=" relative bg-[#f4f8fd] dark:bg-[#090d13] py-16 px-4 md:px-20">
       {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[15%] w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      <div className="text-center mb-10">
        <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-full mb-2 border border-primary/30">
          <span className="text-sm font-medium uppercase bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Testimonial Section
          </span>
        </div>
        <hr className=' my-4  border-1 border-primary animate-pulse' />
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">What Our Users Say</h2>
        <hr className=' my-4  border-1 border-primary animate-pulse' />
        <p className="text-gray-600 mt-2 text-sm">Success stories from customers and consultants</p>
      </div>

      <div className="overflow-hidden whitespace-nowrap w-full  py-4">
        <div className="flex gap-4 animate-marquee">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#0b1225] rounded-xl p-6 shadow-sm hover:shadow-md transition-all text-wrap w-[400px]"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.title}</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm mb-4">{item.text}</p>
              <div className="flex">{renderStars(item.rating)}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Testimonials;

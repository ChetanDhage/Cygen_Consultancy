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
    <section className="bg-[#f4f8fd] dark:bg-[#090d13] py-16 px-4 md:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-600 dark:text-white">What Our Users Say</h2>
        <p className="text-gray-600 mt-2">Success stories from customers and consultants</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#0b1225] rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full" />
              <div>
                <h4 className="font-semibold text-gray-600 dark:text-white">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.title}</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm mb-4">{item.text}</p>
            <div className="flex">{renderStars(item.rating)}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

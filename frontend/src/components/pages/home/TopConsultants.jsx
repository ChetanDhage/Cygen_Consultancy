import React from 'react';
import { BsStarFill, BsStarHalf, BsBookmark, BsBookmarkFill } from 'react-icons/bs';

const consultants = [
  {
    name: 'Dr. Sarah Johnson',
    rating: 4.8,
    reviews: 142,
    skills: ['Network Security', 'Cloud Security'],
    experience: '12 years',
    fee: '₹850/hr',
    sessions: '420+',
    color: 'bg-primary text-white'
  },
  {
    name: 'Michael Chen',
    rating: 5.0,
    reviews: 98,
    skills: ['AI/ML', 'Data Science'],
    experience: '8 years',
    fee: '₹1200/hr',
    sessions: '320+',
    color: 'bg-primary text-white'
  },
  {
    name: 'Priya Sharma',
    rating: 4.3,
    reviews: 87,
    skills: ['Web Dev', 'Mobile Apps'],
    experience: '6 years',
    fee: '₹700/hr',
    sessions: '210+',
    color: 'bg-rose-100 text-rose-500'
  },
  {
    name: 'David Wilson',
    rating: 4.7,
    reviews: 156,
    skills: ['Cybersecurity', 'Blockchain'],
    experience: '10 years',
    fee: '₹950/hr',
    sessions: '380+',
    color: 'bg-primary text-white'
  }
];

// Utility to generate star icons
const renderStars = (rating) => {
  const stars = [];
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;

  for (let i = 0; i < full; i++) stars.push(<BsStarFill key={`full-${i}`} className="text-yellow-400" />);
  if (half) stars.push(<BsStarHalf key="half" className="text-yellow-400" />);
  return stars;
};

const TopConsultants = () => {
  return (
    <section id='consultants' className=" relative py-12 px-4 md:px-16 dark:bg-[#090d13] bg-white/80">
       {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-[10%] w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-[15%] w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      <div className="mb-10 text-center">
        <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-full mb-2 border border-primary/30">
          <span className="text-sm font-medium bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
            Helpfull Consultant
          </span>
        </div>
        <hr className=' my-4  border-1 border-primary animate-pulse' />
        <h2 className="text-3xl md:text-3xl font-bold text-gray-800 dark:text-white">Top Rated Consultants</h2>
        <hr className=' my-4  border-1 border-primary animate-pulse' />
        <p className="text-gray-600 mt-2">Experts available for immediate consultation</p>
      </div>
      <div className="flex gap-6 overflow-x-auto lg:grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 px-4 py-4 scrollbar-hide">
        {consultants.map((consultant, index) => (
          <div
            key={index}
            className="min-w-[280px] sm:min-w-[300px] lg:min-w-0 relative group rounded-3xl bg-white dark:bg-gray-900/80  border border-b-primary border-t-primary/90 border-l-0 border-r-0 shadow-md hover:shadow-2xl transition duration-300 hover:scale-105 py-6 "
          >

            {/* Avatar */}
            <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 mx-auto" />
            <h3 className="font-semibold text-lg text-center text-gray-800 dark:text-white">
              {consultant.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center justify-center gap-1 text-sm mt-1">
              {renderStars(consultant.rating)}
              <span className="text-gray-500 dark:text-gray-300 ml-1">{consultant.rating}</span>
              <span className="text-gray-400 dark:text-gray-400">({consultant.reviews})</span>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {consultant.skills.map((skill, i) => (
                <span
                  key={i}
                  className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${consultant.color}`}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Info */}
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-300 space-y-1 text-center">
              <p><strong>Experience:</strong> {consultant.experience}</p>
              <p><strong>Fee:</strong> {consultant.fee}</p>
              <p><strong>Sessions:</strong> {consultant.sessions}</p>
            </div>

            {/* Action */}
            <div className="mt-4 flex items-center justify-center">
              <button className="bg-primary text-white w-1/2 py-2 rounded-full text-sm font-semibold hover:bg-primary-dark transition">
                Connect Now
              </button>
              <BsBookmark className="ml-3 text-gray-500 cursor-pointer hover:text-primary" />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default TopConsultants;

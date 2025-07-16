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
    color: 'bg-blue-100 text-blue-600'
  },
  {
    name: 'Michael Chen',
    rating: 5.0,
    reviews: 98,
    skills: ['AI/ML', 'Data Science'],
    experience: '8 years',
    fee: '₹1200/hr',
    sessions: '320+',
    color: 'bg-blue-100 text-blue-600'
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
    color: 'bg-blue-100 text-blue-600'
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
    <section id='consultants' className=" py-12 px-4 md:px-16 dark:bg-[#090d13] ">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-3xl font-bold text-gray-800 dark:text-white">Top Rated Consultants</h2>
        <p className="text-gray-600 mt-2">Experts available for immediate consultation</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {consultants.map((consultant, index) => (
          <div key={index} className="bg-white dark:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black p-6 rounded-3xl shadow hover:shadow-md transition relative">
            {/* Avatar Placeholder */}
            <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 mx-auto" />
            <h3 className="font-semibold text-lg text-center text-gray-800 dark:text-white">{consultant.name}</h3>

            {/* Rating */}
            <div className="flex items-center justify-center gap-1 text-sm mt-1">
              {renderStars(consultant.rating)}
              <span className="text-gray-700 dark:text-white ml-1">{consultant.rating}</span>
              <span className="text-gray-400 dark:text-white ">({consultant.reviews})</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {consultant.skills.map((skill, i) => (
                <span
                  key={i}
                  className={`text-xs  font-medium px-2.5 py-0.5  rounded-full ${consultant.color}`}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Info */}
            <div className="mt-4 text-sm text-gray-700 dark:text-white space-y-1 text-center">
              <p><strong>Experience:</strong> {consultant.experience}</p>
              <p><strong>Fee:</strong> {consultant.fee}</p>
              <p><strong>Sessions:</strong> {consultant.sessions}</p>
            </div>

            {/* Connect Button & Bookmark */}
            <div className="mt-4 flex items-center justify-between">
              <button className="bg-blue-600 text-white w-full py-2 rounded-full text-sm font-semibold hover:bg-blue-700">
                Connect Now
              </button>
              <BsBookmark className="ml-2 text-gray-500 cursor-pointer hover:text-blue-600" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopConsultants;

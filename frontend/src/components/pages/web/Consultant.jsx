import React from 'react';
import Footer from '../home/Footer';

const consultants = [
  {
    name: 'Dr. Sarah Johnson',
    title: 'Senior Security Architect',
    rating: 4.8,
    reviews: 142,
    expertise: ['Network Security', 'Cloud Security', 'Compliance'],
    experience: '12 yrs',
    rate: '₹850/hr',
    sessions: '420+',
    color: 'blue'
  },
  {
    name: 'Michael Chen',
    title: 'AI Solutions Architect',
    rating: 5.0,
    reviews: 89,
    expertise: ['Machine Learning', 'Deep Learning', 'NLP'],
    experience: '8 yrs',
    rate: '₹950/hr',
    sessions: '210+',
    color: 'purple'
  },
  {
    name: 'Priya Sharma',
    title: 'Cloud Solutions Engineer',
    rating: 4.9,
    reviews: 110,
    expertise: ['AWS', 'DevOps', 'Kubernetes'],
    experience: '10 yrs',
    rate: '₹900/hr',
    sessions: '310+',
    color: 'green'
  }
];

const Consultant = () => {
  return (
    <>

      {/* Section Top */}

      <div className='bg-white dark:bg-[#090d13] w-full h-full'>
        <div className=" w-10/12 m-auto flex flex-col lg:flex-row items-center justify-between gap-10 py-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4  text-black  dark:text-white">Find the <span className="text-blue-600">Right Expert</span> for Your Needs </h2>
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
              Find specialized consultants across technical domains. Connect with professionals who understand your challenges.
            </p>
            <div className="flex gap-4">
              <button className="border bg-primary border-blue-600  text-white
             font-semibold px-6 py-2 rounded hover:bg-blue-100 dark:hover:bg-blue-950">
                Browse Consultant
              </button>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Categories" className="rounded-xl shadow-md w-full lg:w-1/2" />
        </div>
      </div>


      <div className="dark:bg-[#090d13]  p-6 min-h-screen">
        <h1 className="text-3xl font-bold dark:text-white text-black mb-6 ">Available Consultants</h1>
        <p className="dark:text-white text-black mb-4">128 experts found</p>

        <div className="flex flex-wrap  justify-center gap-4 my-6">
          {['Expertise', 'Experience', 'Availability', 'Min. Rating'].map((label) => (
            <div key={label}>
              <label className="block  mb-1 px-4 py-2 rounded-full  bg-primary text-white font-semibold">{label}</label>
              <select className=" border dark:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black dark:text-white text-black px-3 py-2  rounded-full">
                <option className=' '>All {label}</option>
              </select>
            </div>
          ))}
          <div className="flex items-end gap-3">
            <button className=" border dark:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black dark:text-white text-black px-4 py-2 rounded-full">
              Reset Filters
            </button>
            <button className=" border dark:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black dark:text-white text-black px-4 py-2 rounded-full">
              Apply Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {consultants.map((consultant, index) => (
            <div
              key={index}
              className=" border dark:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black rounded-xl p-5 shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gray-300 dark:bg-gray-600 rounded-full flex-shrink-0" />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold dark:text-white text-black">{consultant.name}</h2>
                  <p className="text-sm dark:text-white text-black">{consultant.title}</p>
                  <div className="flex items-center text-sm dark:text-white text-black mt-1">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1">{consultant.rating} ({consultant.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {consultant.expertise.map((tag, i) => (
                  <span
                    key={i}
                    className={`bg-${consultant.color}-500 text-white  text-xs px-2 py-1 rounded`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="dark:text-white text-black text-sm space-y-1 mb-4">
                <p>Experience: {consultant.experience}</p>
                <p>Rate: {consultant.rate}</p>
                <p>Sessions: {consultant.sessions}</p>
              </div>

              <button className="bg-primary  text-white  text-sm px-4 py-2  rounded-full w-full">
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Consultant;
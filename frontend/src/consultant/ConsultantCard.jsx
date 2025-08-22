import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ConsultantCard = ({  consultant}) => {
  
  // console.log(consultant);
  // console.log("data: ",consultant);
  return (
    <div key={consultant._id || index } className=" relative border rounded-lg p-4 shadow hover:shadow-lg transition duration-300">
      <img
        src={consultant?.user?.profilePhoto?.url || 'https://via.placeholder.com/150'}
        alt="Consultant"
        className=" relative z-20 sm:h-40 sm:w-40 w-20 h-20 rounded-full m-auto object-cover shadow-md shadow-white"
      />
      <div className=' absolute z-0 top-0  bg-primaryLight w-full h-[100px] sm:h-1/2 left-0'>
        <div className="absolute z-10 inset-0 opacity-1 text-primary  pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
      <div className="mt-4 sm:text-base text-sm">
        <div className="flex justify-between items-center">
          <h3 className="md:text-lg font-semibold text-xs">{consultant?.name}</h3>
          <span className="text-primary font-bold text-xs">{consultant?.expectedFee}₹/hr</span>
        </div>
        <p className="sm:text-sm text-gray-600 mb-1 text-xs">{consultant?.designation}</p>
        <span className="text-green-600 text-xs font-medium">● Available Now</span>
        <p className="lg:text-base text-xs text-gray-500 mt-2 sm:line-clamp-2 line-clamp-1">
          {consultant?.yearsOfExperience}+ years experience helping businesses scale with data-driven strategies.
        </p>

        <div className="mt-3 flex justify-between">
          <Link to={`/user-dashboard/profile/${consultant?.id}`}>
            <button className="text-primary border px-3 py-1 rounded hover:bg-blue-50 lg:text-base text-xs text-nowrap">
              Profile
            </button>
          </Link>
          <Link to={`/user-dashboard/query/${consultant?.id}`}>
            <button className="bg-primary text-white px-3 py-1 rounded hover:bg-primary/90 lg:text-base text-xs text-nowrap">
              Send Query
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ConsultantCard

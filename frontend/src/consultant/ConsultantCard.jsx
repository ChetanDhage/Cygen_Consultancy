import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ConsultantCard = ({ key, consultantdata, ActiveQueryButton }) => {
  const consultant_id = key;
  // console.log(consultantdata);
  return (
    <div id={consultant_id} className=" relative border rounded-lg p-4 shadow hover:shadow-lg transition duration-300">
      <img
        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        alt="Consultant"
        className=" relative z-20 h-40 w-40 rounded-full m-auto object-cover shadow-md shadow-white"
      />
      <div className=' absolute z-0 top-0  bg-primaryLight w-full h-1/2 left-0'>
        <div className="absolute z-10 inset-0 opacity-1 text-blue-500  pointer-events-none">
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
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{consultantdata.name}</h3>
          <span className="text-primary font-bold">{consultantdata.expectedFee}₹/hr</span>
        </div>
        <p className="text-sm text-gray-600 mb-1">{consultantdata.designation}</p>
        <span className="text-green-600 text-xs font-medium">● Available Now</span>
        <p className="text-sm text-gray-500 mt-2">
          {consultantdata.yearsOfExperience}+ years experience helping businesses scale with data-driven strategies.
        </p>

        <div className="mt-3 flex justify-between">
          <Link to={`/user-dashboard/profile/${consultantdata.
            _id}`}>
            <button className="text-primary border px-3 py-1 rounded hover:bg-blue-50">
              View Profile
            </button>
          </Link>
          <Link to={`/user-dashboard/query/${consultantdata.
            _id}`}>
            <button className="bg-primary text-white px-3 py-1 rounded hover:bg-blue-700">
              Book Session
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ConsultantCard

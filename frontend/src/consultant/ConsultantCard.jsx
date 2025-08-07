import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ConsultantCard = ({ key, consultantdata, ActiveQueryButton }) => {
  const consultant_id = key;
  console.log(consultantdata);
  return (
    <div id={consultant_id} className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300">
      <img
        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        alt="Consultant"
        className="h-40 w-full object-cover rounded"
      />
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

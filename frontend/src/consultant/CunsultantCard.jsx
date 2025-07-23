import React from 'react'
import { FaStar } from 'react-icons/fa'

const ConsultantCard = () => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300">
      <img
        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
        alt="Consultant"
        className="h-40 w-full object-cover rounded"
      />
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Sarah Johnson</h3>
          <span className="text-primary font-bold">$150/hr</span>
        </div>
        <p className="text-sm text-gray-600 mb-1">Business Strategy Consultant</p>
        <span className="text-green-600 text-xs font-medium">● Available Now</span>
        <p className="text-sm text-gray-500 mt-2">
          10+ years experience helping businesses scale with data-driven strategies.
        </p>

        <div className="mt-3 flex justify-between">
          <button className="text-primary border px-3 py-1 rounded hover:bg-blue-50">
            View Profile
          </button>
          <button className="bg-primary text-white px-3 py-1 rounded hover:bg-blue-700">
            Book Session
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConsultantCard

import React from 'react'
import ConsultantCard from '../consultant/CunsultantCard'

const Home = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-2">Hello, Alex Morgan!</h1>
      <p className="text-gray-600 mb-4">Find the perfect consultant for your needs</p>

      <input
        type="text"
        placeholder="Search consultants or domains..."
        className="w-full p-2 border rounded mb-4"
      />

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 mb-6">
        {/* Filters */}
        <select className="border p-2 rounded">
            <option value="all-domain">All Domain</option>
            <option value="Marketing">Marketing</option>
            <option value="bussiness-stratergy">Bussiness Stratergy</option>
            <option value="financial-planing">Financial Planing</option>
            <option value="it-technology">IT Technology</option>
            <option value="humman-resources">Humman Resources</option>
            
        </select>
        <select className="border p-2 rounded">
            <option value="experience">Experience</option>
            <option value="1-3">1-3 Years</option>
            <option value="3-5">3-5 Years</option>
            <option value="5-10">5-10 Years</option>
            <option value="10+">10+ Years</option>
        </select>
        <select className="border p-2 rounded">
            <option value="fee">Any Fee</option>
            <option value="50-100">$50-100</option>
            <option value="100-200">$100-200</option>
            <option value="200-300">$200-300</option>
            <option value="500+">$500+</option>
        </select>
        <select className="border p-2 rounded">
            <option value="rating">Rating</option>
            <option value="3.5">3.5 Star</option>
            <option value="4.5">4.5 Star</option>
            <option value="5">5 Star</option>
        </select>
      </div>

      <h2 className="text-xl font-semibold mb-2">Featured Consultants</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {/* Map mock consultant data */}
        <ConsultantCard />
        <ConsultantCard />
        <ConsultantCard />
      </div>
    </div>
  )
}

export default Home

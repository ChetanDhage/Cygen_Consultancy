import React from 'react'
import { Link } from 'react-router-dom'; 
import {
  FaBell,
  FaUser,
} from 'react-icons/fa';

const inboxQueryPath = '/consultant-dashboard/query-inbox';

const ConsultantHome = () => {
  return (
   <main className=" w-full flex-1 ">
            <header className=" bg-white p-6 w-full flex justify-between items-center ">
                <div>
                    <h2 className="text-xl font-bold">Consultant Dashboard</h2>
                    <p className="text-sm text-gray-600 ">Welcome back, John</p>
                </div>
            
            </header>

            <div className=' p-6'>
                {/* Welcome Banner */}
                <section className=" w-full  bg-primary-light text-primary p-6 rounded-xl shadow mb-6">
                    <h3 className="text-lg font-semibold text-black">Welcome back, John!</h3>
                    <p className="text-sm">You have 3 new queries and 2 scheduled sessions today</p>
                    <Link to={inboxQueryPath}>
                    <button className="mt-4 bg-white  text-black font-semibold px-4 py-2 rounded shadow text-sm">
                        View Incoming Queries
                    </button>
                    </Link>
                </section>

                {/* Stats */}
                <section className=" w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h4 className="font-semibold mb-2">Current Availability</h4>
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-600">Set your availability status</p>
                            <label className="inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500"></div>
                            </label>
                        </div>
                        <p className="mt-2 text-green-600 text-sm font-medium">● Currently Online</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow">
                        <h4 className="font-semibold mb-2">Earnings Summary</h4>
                        <p className="text-2xl font-bold text-primary">$2,850</p>
                        <div className="flex justify-between text-sm text-gray-500 mt-2">
                            <span>Pending</span>
                            <span>$350</span>
                        </div>
                        <div className="flex justify-between text-sm text-green-500">
                            <span>Available</span>
                            <span>$2,500</span>
                        </div>
                        <button className="mt-3 w-full bg-gray-100 text-gray-600 text-sm py-2 rounded">Download Report</button>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow">
                        <h4 className="font-semibold mb-2">Scheduled Sessions</h4>
                        <div className="mb-2">
                            <p className="font-medium text-sm">Sarah Johnson</p>
                            <p className="text-xs text-gray-500">Business Strategy Consultation</p>
                            <p className="text-xs text-green-600 mt-1">✔ Confirmed</p>
                            <p className="text-xs text-gray-600">10:30 AM - 11:30 AM</p>
                        </div>
                        <div>
                            <p className="font-medium text-sm">Michael Chen</p>
                            <p className="text-xs text-gray-500">Marketing Plan Review</p>
                            <p className="text-xs text-yellow-600 mt-1">● Payment Pending</p>
                            <p className="text-xs text-gray-600">2:00 PM - 3:00 PM</p>
                        </div>
                        <button className="mt-3 w-full border border-primary text-primary text-sm py-2 rounded">
                            + Add New Session
                        </button>
                    </div>
                </section>

                {/* Recent Queries */}
                <section className="bg-white p-4 rounded-lg shadow">
                    <div className="flex justify-between mb-4">
                        <h4 className="font-semibold">Recent Queries</h4>
                        <a href="#" className="text-primary text-sm">View All Queries</a>
                    </div>
                    <div className="divide-y">
                        <div className="flex justify-between items-center py-3">
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-100 p-2 rounded-full">
                                    <FaUser className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Alex Reynolds</p>
                                    <p className="text-xs text-gray-500">Financial planning for startup</p>
                                </div>
                            </div>
                            <p className="text-xs text-gray-400">2 hours ago</p>
                            <span className="bg-blue-100 text-primary text-xs px-2 py-1 rounded-full">New</span>
                            <div className="flex gap-2">
                                <button className="bg-primary text-white px-3 py-1 text-sm rounded">Pick Query</button>
                                <button className="text-red-600 text-sm">Reject</button>
                            </div>
                        </div>

                        <div className="flex justify-between items-center py-3">
                            <div className="flex items-center gap-3">
                                <div className="bg-green-100 p-2 rounded-full">
                                    <FaUser className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Priya Sharma</p>
                                    <p className="text-xs text-gray-500">HR policy consultation</p>
                                </div>
                            </div>
                            <p className="text-xs text-gray-400">5 hours ago</p>
                            <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">Accepted</span>
                            <div className="flex gap-2">
                                <button className="text-primary text-sm">View Details</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
  )
}

export default ConsultantHome

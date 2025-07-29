import React from 'react';
import { FaUsers, FaStar, FaCheckCircle, FaComments } from 'react-icons/fa';
import { MdOutlineBarChart } from 'react-icons/md';

const SubAdminAnalytics = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Domain Analytics</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Sessions */}
        <div className="bg-white shadow rounded-lg p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Total Sessions</p>
            <h2 className="text-2xl font-bold text-gray-800">142</h2>
          </div>
          <FaComments className="text-3xl text-blue-500" />
        </div>

        {/* Avg Rating */}
        <div className="bg-white shadow rounded-lg p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Avg. Rating</p>
            <h2 className="text-2xl font-bold text-gray-800">4.7</h2>
          </div>
          <FaStar className="text-3xl text-yellow-400" />
        </div>

        {/* Active Consultants */}
        <div className="bg-white shadow rounded-lg p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Active Consultants</p>
            <h2 className="text-2xl font-bold text-gray-800">28</h2>
          </div>
          <FaUsers className="text-3xl text-green-500" />
        </div>

        {/* Resolution Rate */}
        <div className="bg-white shadow rounded-lg p-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 mb-1">Resolution Rate</p>
            <h2 className="text-2xl font-bold text-gray-800">92%</h2>
          </div>
          <FaCheckCircle className="text-3xl text-emerald-500" />
        </div>
      </div>

      {/* Chart Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Sessions by Domain */}
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Sessions by Domain</h3>
          <div className="text-gray-400">
            <MdOutlineBarChart className="text-5xl mx-auto mb-2" />
            <p>Sessions by Domain Chart</p>
          </div>
        </div>

        {/* Consultant Performance */}
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Consultant Performance</h3>
          <div className="text-gray-400">
            <MdOutlineBarChart className="text-5xl mx-auto mb-2" />
            <p>Performance Trends Chart</p>
          </div>
        </div>
      </div>

      {/* Recent Feedback */}
      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Customer Feedback</h3>
        <div className="border-l-4 border-green-500 pl-4 text-gray-700">
          <p className="flex items-center gap-1 text-yellow-500 mb-1">
            {'★'.repeat(5)}
          </p>
          <p className="text-sm">
            "David Kim helped us resolve a critical firewall issue within 30 minutes. Expert knowledge!"
          </p>
          <p className="text-right text-xs text-gray-400 mt-2">2 hours ago</p>
        </div>
      </div>
    </div>
  );
};

export default SubAdminAnalytics;

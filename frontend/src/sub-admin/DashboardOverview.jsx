import React from 'react';

const DashboardOverview = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-sm text-gray-500">Pending Verifications</h3>
          <p className="text-2xl font-bold">12</p>
          <a href="#" className="text-sm text-blue-600 mt-1 inline-block">View all pending →</a>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-sm text-gray-500">Active Sessions</h3>
          <p className="text-2xl font-bold">24</p>
          <a href="#" className="text-sm text-green-600 mt-1 inline-block">Monitor sessions →</a>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h3 className="text-sm text-gray-500">Flagged Content</h3>
          <p className="text-2xl font-bold">5</p>
          <a href="#" className="text-sm text-red-600 mt-1 inline-block">Review content →</a>
        </div>
      </div>

      {/* Pending Consultant Verifications */}
      <div className="bg-white shadow rounded p-4 mb-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold">Pending Consultant Verifications</h3>
          <a href="#" className="text-sm text-blue-600">View all</a>
        </div>
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="text-gray-500">
              <th>Consultant</th>
              <th>Specialization</th>
              <th>Experience</th>
              <th>Submitted</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td>Michael Chen</td>
              <td>AWS, Azure, GCP</td>
              <td>8 years</td>
              <td>2 days ago</td>
              <td><span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs">Pending Review</span></td>
              <td><button className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm">Review</button></td>
            </tr>
            <tr className="border-t">
              <td>Sarah Johnson</td>
              <td>CISCO, Firewalls</td>
              <td>5 years</td>
              <td>1 day ago</td>
              <td><span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs">Pending Review</span></td>
              <td><button className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm">Review</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Active Sessions in Your Domains */}
      <div className="bg-white shadow rounded p-4 mb-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold">Active Sessions in Your Domains</h3>
          <a href="#" className="text-sm text-blue-600">View all</a>
        </div>
        <ul className="space-y-3 text-sm text-gray-700">
          <li className="flex items-center justify-between border-b pb-2">
            <span>Cloud Security - 8 active users</span>
            <button className="text-blue-600 hover:underline text-xs">View</button>
          </li>
          <li className="flex items-center justify-between border-b pb-2">
            <span>Network Security - 6 active users</span>
            <button className="text-blue-600 hover:underline text-xs">View</button>
          </li>
          <li className="flex items-center justify-between">
            <span>AI Threat Analysis - 10 active users</span>
            <button className="text-blue-600 hover:underline text-xs">View</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardOverview;

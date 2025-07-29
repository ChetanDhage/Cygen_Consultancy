import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { FaUserTie, FaFlag, FaChartBar, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { BsShieldLockFill } from 'react-icons/bs';

import SubAdminProfile from './SubAdminProfile';
import SubAdminVerification from './SubAdminVerification';
import SubAdminModeration from './SubAdminModeration';
import SubAdminAnalytics from './SubAdminAnalytics';
import DashboardOverview from './DashboardOverview';

const SubAdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col justify-between">
        <div>
          {/* Logo & Title */}
          <div className="flex items-center px-6 py-4 border-b">
            <BsShieldLockFill className="text-blue-600 text-2xl mr-2" />
            <div>
              <h1 className="text-xl font-bold">CyGen</h1>
              <p className="text-sm text-gray-500">Sub-admin Portal</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col mt-4 px-4 space-y-2 text-gray-700">
            <NavLink to="/" end className="flex items-center gap-3 p-2 rounded hover:bg-gray-200">
              <FaUserCircle /> Dashboard
            </NavLink>

            <NavLink to="verification" className="flex items-center justify-between p-2 rounded hover:bg-gray-200">
              <div className="flex items-center gap-3"><FaUserTie /> Consultant Verifications</div>
              <span className="text-xs bg-yellow-500 text-white px-2 py-0.5 rounded-full">12</span>
            </NavLink>

            <NavLink to="moderation" className="flex items-center justify-between p-2 rounded hover:bg-gray-200">
              <div className="flex items-center gap-3"><FaFlag /> Content Moderation</div>
              <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">5</span>
            </NavLink>

            <NavLink to="analytics" className="flex items-center gap-3 p-2 rounded hover:bg-gray-200">
              <FaChartBar /> Domain Analytics
            </NavLink>
          </nav>
        </div>

        {/* Profile & Logout */}
        <div className="px-4 py-4 border-t">
          <NavLink to="profile" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded text-gray-700">
            <FaUserCircle /> Profile
          </NavLink>
          <NavLink to="/" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded text-red-600">
            <FaSignOutAlt /> Logout
          </NavLink>
        </div>

        <p className="text-center text-xs text-gray-400 py-2">CyGen Security Portal v2.2</p>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        <Routes>
          <Route path="/" element={<DashboardOverview />} />
          <Route path="profile" element={<SubAdminProfile />} />
          <Route path="verification" element={<SubAdminVerification />} />
          <Route path="moderation" element={<SubAdminModeration />} />
          <Route path="analytics" element={<SubAdminAnalytics />} />
        </Routes>
      </main>
    </div>
  );
};

export default SubAdminDashboard;

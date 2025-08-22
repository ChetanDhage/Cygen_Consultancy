import React, { useEffect, useState } from 'react';
import { Route, Routes, Link, useParams, useNavigate } from 'react-router-dom';
import { FaBell, FaUser, FaCalendarAlt, FaDollarSign, FaCheckCircle, FaUserFriends } from 'react-icons/fa';

import NotificationPage from '../components/common/NotificationPage';
import AdminHome from './AdminHome';
import AdminConsultant from './AdminConsultant';
import AdminCustomer from './AdminCustomer';
import AdminTransaction from './AdminTransaction';
import AdminVerification from './AdminVerification';
import AdminAnalysis from './AdminAnalysis';
import MenuItem from '../components/common/MenuItem';
import ProtectedRoute from '../api/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectCurrentUserRole } from '../redux/authSlice';
import Profile from './Profile';
import { toast } from 'sonner';

const ProfilePath = '/admin-dashboard/profile';
const NotificationPath = '/admin-dashboard/notification';

const AdminDashboard = () => {
  const [params, setParams] = useState();
  const para = useParams();
  useEffect(() => {
    setParams(para['*']);
  }, [para]);

  const menuItems = [
    { icon: <FaCalendarAlt />, label: 'Dashboard', path: "/admin-dashboard/", active: params === "" },
    { icon: <FaUserFriends />, label: 'Consultant', path: "/admin-dashboard/consultant", active: params === "consultant" },
    { icon: <FaUser />, label: 'Customer', path: "/admin-dashboard/customer", active: params === "customer" },
    { icon: <FaCheckCircle />, label: 'Verification', path: "/admin-dashboard/verification", active: params === "verification" },
    { icon: <FaDollarSign />, label: 'Manage Sub Admin', path: "/admin-dashboard/manage-sub-admin", active: params === "manage-sub-admin" },
    { icon: <FaUserFriends />, label: 'Analysis', path: "/admin-dashboard/analysis", active: params === "analysis" },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const checkUserRole = useSelector(selectCurrentUserRole);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Show ONLY for large screens */}
      <div className="hidden lg:flex overscroll-auto">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-6 flex-col justify-between min-h-screen hidden lg:flex">
          <div>
            <Link to={'/'}><h1 className="text-2xl font-bold text-primary mb-8">Worklify</h1></Link>
            <nav className="space-y-2">
              <div className='w-[200px] overflow-hidden'>
                {menuItems.map((item, idx) => (
                  <MenuItem
                    key={idx}
                    icon={item.icon}
                    label={item.label}
                    badge={item.badge}
                    path={item.path}
                    active={item.active}
                  />
                ))}
              </div>
            </nav>
          </div>
          <div className="flex flex-col">
            {checkUserRole === "admin" && (
              <button
                onClick={handleLogout}
                className="px-4 py-2 mb-4 rounded-md text-sm font-medium text-white bg-red-500 hover:bg-red-600 transition-colors shadow-md hover:shadow-lg"
              >
                Logout
              </button>
            )}
            <div className='flex gap-4'>
              <Link to={ProfilePath}><FaUser className="w-6 h-6 text-primary" title='Profile' /></Link>
              <Link to={NotificationPath}><FaBell className="w-6 h-6 text-gray-600" title='Notification' /></Link>
            </div>
            <div className="mt-5 p-3 bg-primaryLight text-center rounded-lg">
              <p className="text-sm">Need help?</p>
              <Link to={'/contact'}>
                <button className="text-primary text-sm font-semibold mt-2 border border-primary rounded px-2 py-1">
                  Contact Support
                </button>
              </Link>
            </div>
          </div>
        </aside>
        {/* Main Content */}
        <main className='w-full lg:h-screen lg:overflow-y-scroll'>
          <Routes>
            <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
              <Route path='/' element={<AdminHome />} />
              <Route path='/consultant' element={<AdminConsultant />} />
              <Route path='/customer' element={<AdminCustomer />} />
              <Route path='/verification' element={<AdminVerification />} />
              <Route path='/manage-sub-admin' element={<AdminTransaction />} />
              <Route path='/analysis' element={<AdminAnalysis />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/notification' element={<NotificationPage />} />
            </Route>
          </Routes>
        </main>
      </div>
      {/* Mobile View: Message only */}
      <div className="flex lg:hidden items-center justify-center h-screen bg-gray-100 text-center px-4">
        <p className="text-lg font-semibold text-gray-700 bg-primaryLight border border-primary p-6 animate-pulse">
          ⚠️ The admin dashboard is only available on desktop devices.  
          Please switch to a larger screen to continue.
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
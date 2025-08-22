import React, { useEffect, useState } from 'react';
import { Route, Routes, Link, useParams, useNavigate } from 'react-router-dom';
import { FaUser, FaCalendarAlt, FaTasks, FaUserFriends, FaBell, FaBars, FaTimes } from 'react-icons/fa';

import NotificationPage from '../components/common/NotificationPage';
import MenuItem from '../components/common/MenuItem';
import UserHome from './UserHome';
import SubmitQueryForm from './SubmitQueryForm';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectCurrentUserRole } from '../redux/authSlice';
import UserProfile from './UserProfile';
import ConsultantProfile from './ConsultantProfile';
import { toast } from 'sonner';
import ChatPage from './ChatPage';
import { BsList, BsX } from 'react-icons/bs';

const ProfilePath = '/user-dashboard/profile';
const NotificationPath = '/user-dashboard/notification';

const UserDashboard = () => {
  const [params, setParams] = useState();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const para = useParams();
  useEffect(() => {
    setParams(para['*']);
  }, [para]);

  const menuItems = [
    { icon: <FaCalendarAlt />, label: 'Dashboard', path: "/user-dashboard/", active: params === "" },
    { icon: <FaTasks />, label: 'My Sessions', badge: 3, path: "/user-dashboard/session", active: params === "session" },
    { icon: <FaTasks />, label: 'Messages', badge: 3, path: "/user-dashboard/chat", active: params === "chat" },
    { icon: <FaUserFriends />, label: 'Profile', path: "/user-dashboard/profile", active: params === "profile" },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const checkCurrentUserRole = useSelector(selectCurrentUserRole);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex relative">
      {/* Sidebar for Desktop */}
      <aside className="lg:flex hidden w-64 bg-white shadow-md p-6 flex-col justify-between min-h-screen">
        <div>
          <Link to={'/'}><h1 className="text-2xl font-bold text-primary mb-8 cursor-pointer">Worklify</h1></Link>
          <nav className="space-y-2">
            <div className="w-[200px] overflow-hidden">
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
          {checkCurrentUserRole === "user" && (
            <button
              onClick={handleLogout}
              className="px-4 py-2 mb-4 rounded-md text-sm font-medium text-white bg-red-500 hover:bg-red-600 transition-colors shadow-md hover:shadow-lg"
            >
              Logout
            </button>
          )}
          <div className="flex gap-4">
            <Link to={ProfilePath}>
              <FaUser className="w-6 h-6 text-primary" title="Profile" />
            </Link>
            <Link to={NotificationPath}>
              <FaBell className="w-6 h-6 text-gray-600" title="Notification" />
            </Link>
          </div>
          <div className="mt-5 p-3 bg-primaryLight text-center rounded-lg">
            <p className="text-sm">Need help?</p>
            <Link to={"/contact"}>
              <button className="text-primary text-sm font-semibold mt-2 border border-primary rounded px-2 py-1">
                Contact Support
              </button>
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar (Drawer) */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white shadow-md p-6 flex-col justify-between transform transition-transform duration-300 z-50 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex`}
      >
        <div className="flex justify-between items-center mb-4 ">
          <Link to={'/'}><h1 className="text-2xl font-bold text-primary  cursor-pointer">Worklify</h1></Link>
          <button onClick={() => setIsMobileMenuOpen(false)}>
            <BsX className="text-3xl text-gray-500 " />
          </button>
        </div>
        <nav className="space-y-2 flex-1">
          {menuItems.map((item, idx) => (
            <MenuItem
              key={idx}
              icon={item.icon}
              label={item.label}
              badge={item.badge}
              path={item.path}
              active={item.active}
              isMobileMenuOpen={isMobileMenuOpen}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
          ))}
        </nav>
        <div className="flex flex-col">
          {checkCurrentUserRole === "user" && (
            <button
              onClick={handleLogout}
              className="px-4 py-2 mb-4 rounded-md text-sm font-medium text-white bg-red-500 hover:bg-red-600 transition-colors shadow-md hover:shadow-lg"
            >
              Logout
            </button>
          )}
          <div className="flex gap-4">
            <Link to={ProfilePath} onClick={() => setIsMobileMenuOpen(false)}>
              <FaUser className="w-6 h-6 text-primary" title="Profile" />
            </Link>
            <Link to={NotificationPath} onClick={() => setIsMobileMenuOpen(false)}>
              <FaBell className="w-6 h-6 text-gray-600" title="Notification" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <header className="lg:hidden flex items-center justify-between p-4 bg-white shadow-md w-full fixed top-0 left-0 z-40">
        <button className=' flex gap-2'>
          <BsList className="w-6 h-6 text-gray-700 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(true)}
          />
          <Link to={'/'}><h1 className="text-xl font-bold text-primary cursor-pointer">Worklify</h1></Link>
        </button>

        <Link to={NotificationPath}>
          <FaBell className="w-6 h-6 text-gray-600" />
        </Link>
      </header>

      {/* Main Content */}
      <main className="w-full lg:h-screen lg:overflow-y-scroll pt-16 lg:pt-0 scrollbar-hide">
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/session" element={<UserHome />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/query/:consultant_id" element={<SubmitQueryForm />} />
          <Route path="/profile/:consultant_id" element={<ConsultantProfile />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </main>
    </div>
  );
};

export default UserDashboard;

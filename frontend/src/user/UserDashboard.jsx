import React, { useEffect, useState } from 'react';
import { Route, Routes, Link, useParams, useNavigate } from 'react-router-dom';
import {
  FaUser,
  FaCalendarAlt,
  FaTasks,
  FaUserFriends,
  FaBell
} from 'react-icons/fa';

import NotificationPage from '../components/common/NotificationPage';
import MenuItem from '../components/common/MenuItem';
import UserHome from './UserHome';
import SubmitQueryForm from './SubmitQueryForm';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectCurrentUserRole } from '../redux/authSlice';
import UserProfile from './UserProfile';
import ConsultantProfile from './ConsultantProfile';
import { toast } from 'sonner';


const ProfilePath = '/user-dashboard/profile';
const NotificationPath = '/user-dashboard/notification';

const userDashboard = () => {

  const [params, setParams] = useState();
  const para = useParams();
  useEffect(() => {
    setParams(para['*']);
    // console.log(params);
  }, [para]);

  const menuItems = [
    { icon: <FaCalendarAlt />, label: 'Dashboard', path: "/user-dashboard/", active: params === "" ? true : false },
    { icon: <FaTasks />, label: 'My Sessions', badge: 3, path: "/user-dashboard/session", active: params === "session" ? true : false },
    { icon: <FaUserFriends />, label: 'profile', path: "/user-dashboard/profile", active: params === "profile" ? true : false },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const checkCurrentUserRole = useSelector(selectCurrentUserRole);


  const handleLogout = () => {
    dispatch(logout());
     toast.success("Logout Successfully")
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex overscroll-auto">
      {/* Sidebar */}
      <aside className="lg:flex hidden w-64 bg-white shadow-md p-6 flex-col justify-between min-h-screen">
        <div>
          <h1 className="text-2xl font-bold text-primary mb-8">Worklify</h1>
          <nav className="space-y-2">
            {/* <button className="flex items-center gap-3 text-primary font-semibold mb-4">
              <span className=" bg-primaryLight p-2 rounded-md">
                <FaUser className="w-5 h-5" />
              </span>
              Dashboard
            </button> */}

            <div className=' w-[200px] overflow-hidden '>
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
        <div className="flex flex-col ">
          {
            checkCurrentUserRole==="user" &&
            <button
              onClick={handleLogout}
              className="px-4 py-2 mb-4 rounded-md text-sm font-medium text-white bg-red-500 hover:bg-red-600 transition-colors shadow-md hover:shadow-lg"
            >
              Logout
            </button>
          }
          <div className=' flex gap-4'>
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
      <main className='w-full lg:h-screen lg:overflow-y-scroll lg:p-8'>
        <Routes>
          <Route path='/' element={<UserHome />} />
          <Route path='/session' element={<UserHome />} />
          <Route path='/query/:consultant_id' element={<SubmitQueryForm />} />
          <Route path='/profile/:consultant_id' element={<ConsultantProfile />} />
          <Route path='/profile' element={<UserProfile/>} />
        </Routes>

      </main>
    </div>
  );
};

export default userDashboard;

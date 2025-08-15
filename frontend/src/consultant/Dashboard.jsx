import React, { useEffect, useState } from 'react';
import { Route, Routes, Link, useParams, useNavigate } from 'react-router-dom';
import {
  FaBell,
  FaUser,
  FaCalendarAlt,
  FaDollarSign,
  FaCommentDots,
  FaCheckCircle,
  FaTasks,
  FaUserFriends
} from 'react-icons/fa';
import ConsultantHome from './ConsultantHome';
import QueryInbox from './QueryInbox';
import SessionDetails from './SessionDetails';
import EarningsTransactions from './EarningsTransactions';
import ConsultantRegistration from './ConsultantRegistration';
import NotificationPage from '../components/common/NotificationPage';
import MenuItem from '../components/common/MenuItem';
import ProtectedRoute from '../api/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectCurrentUser, selectCurrentUserRole } from '../redux/authSlice';
import Profile from './Profile';


const ProfilePath = '/consultant-dashboard/profile';
const NotificationPath = '/consultant-dashboard/notification';

const ConsultantDashboard = () => {

  const [params, setParams] = useState();
  const para = useParams();
  useEffect(() => {
    setParams(para['*']);
    // console.log(params);
  }, [para]);

  const menuItems = [
    { icon: <FaCalendarAlt />, label: 'Scheduled Sessions', path: "/consultant-dashboard/", active: params === "" ? true : false },
    { icon: <FaTasks />, label: 'Query Inbox',  path: "/consultant-dashboard/query-inbox", active: params === "query-inbox" ? true : false },
    { icon: <FaUserFriends />, label: 'Session Data', path: "/consultant-dashboard/session-data", active: params === "session-data" ? true : false },
    { icon: <FaDollarSign />, label: 'Earnings', path: "/consultant-dashboard/earning", active: params === "earning" ? true : false },
    { icon: <FaCheckCircle />, label: 'Verification', path: "/consultant-dashboard/verification", active: params === "verification" ? true : false },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const checkCurrentUserRole = useSelector(selectCurrentUserRole);
  // console.log(checkCurrentUserRole);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const userName = useSelector(selectCurrentUser);
  const userGreeting = userName ? userName.name : 'Guest';

  return (
    <div className="min-h-screen bg-gray-100 flex overscroll-auto">
      {/* Sidebar */}
      <aside className="lg:flex hidden w-64 bg-white shadow-md p-6 flex-col justify-between min-h-screen">
        <div>
          <Link to={'/'}><h1 className="text-2xl font-bold text-primary mb-8">Worklify</h1></Link>
          <nav className="space-y-2">
            {/* <button className="flex items-center gap-3 text-primary bg-primaryLight w-full font-semibold mb-4">
              <span className="  p-2 rounded-md">
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
            checkCurrentUserRole === 'consultant' &&
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
            <button className="text-primary text-sm font-semibold mt-2 border border-primary rounded px-2 py-1">
              Contact Support
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className='w-full lg:h-screen lg:overflow-y-scroll'>
        <header className=" bg-white px-6 pt-6 pb-1 w-full flex justify-between items-center ">
           <p className="text-sm text-gray-600">Welcome back, {userGreeting}</p>
        </header>
        <Routes>
          <Route element={<ProtectedRoute allowedRoles={["consultant"]} />}>
            <Route path='/' element={<ConsultantHome />} />
            <Route path='/query-inbox' element={<QueryInbox />} />
            <Route path='/session-data' element={<SessionDetails />} />
            <Route path='/earning' element={<EarningsTransactions />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/verification' element={<ConsultantRegistration />} />
            <Route path='/notification' element={<NotificationPage />} />
          </Route>
        </Routes>

      </main>
    </div>
  );
};

export default ConsultantDashboard;

import { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { FaUserTie, FaFlag, FaChartBar, FaCalendarAlt, FaCheckCircle, FaUser, FaBell } from 'react-icons/fa';

import SubAdminProfile from './SubAdminProfile';
import SubAdminVerification from './SubAdminVerification';
import SubAdminModeration from './SubAdminModeration';
import SubAdminAnalytics from './SubAdminAnalytics';
import DashboardOverview from './DashboardOverview';
import MenuItem from '../components/common/MenuItem';
import NotificationPage from '../components/common/NotificationPage';
import ProtectedRoute from '../api/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import {  logout, selectCurrentUserRole } from '../redux/authSlice';
import { toast } from 'sonner';

const ProfilePath = '/sub-admin-dashboard/profile';
const NotificationPath = '/sub-admin-dashboard/notification';

const SubAdminDashboard = () => {
  const [params, setParams] = useState();
  const para = useParams();
  useEffect(() => {
    setParams(para['*']);
    console.log(params);
  }, [para]);

  const menuItems = [
    {
      icon: <FaCalendarAlt />,
      label: 'Dashboard',
      path: "/sub-admin-dashboard/",
      active: params === "" ? true : false
    },
    {
      icon: <FaUserTie />,
      label: 'Consultant Verifications',
      // badge: 3,
      path: "/sub-admin-dashboard/verification",
      active: params === "verification" ? true : false
    },
    {
      icon: <FaFlag />,
      label: ' Content Moderation',
      path: "/sub-admin-dashboard/moderation",
      active: params === "moderation" ? true : false
    },
    {
      icon: <FaChartBar />,
      label: 'Domain Analytics',
      path: "/sub-admin-dashboard/analytics",
      active: params === "analytics" ? true : false
    },
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

            <div className=' w-[210px] overflow-hidden '>
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
            checkCurrentUserRole==='sub-admin' &&
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
      <main className='w-full lg:h-screen lg:overflow-y-scroll p-8'>
        <Routes>
          <Route element={<ProtectedRoute allowedRoles={["sub-admin"]} />}>
          
          <Route path="/" element={<DashboardOverview />} />
          <Route path="/profile" element={<SubAdminProfile />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/verification" element={<SubAdminVerification />} />
          <Route path="/moderation" element={<SubAdminModeration />} />
          <Route path="/analytics" element={<SubAdminAnalytics />} />
        </Route>
        </Routes>

      </main>
    </div>
  );
};
export default SubAdminDashboard;

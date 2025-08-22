import React, { useEffect, useState } from "react";
import { Route, Routes, Link, useParams, useNavigate } from "react-router-dom";
import {
  FaBell,
  FaUser,
  FaCalendarAlt,
  FaDollarSign,
  FaTasks,
  FaUserFriends,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import ConsultantHome from "./ConsultantHome";
import QueryInbox from "./QueryInbox";
import SessionDetails from "./SessionDetails";
import EarningsTransactions from "./ChatPage";
import NotificationPage from "../components/common/NotificationPage";
import MenuItem from "../components/common/MenuItem";
import ProtectedRoute from "../api/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectCurrentUser, selectCurrentUserRole } from "../redux/authSlice";
import Profile from "./Profile";
import { toast } from "sonner";
import { BsList, BsX } from "react-icons/bs";

const ProfilePath = "/consultant-dashboard/profile";
const NotificationPath = "/consultant-dashboard/notification";

const ConsultantDashboard = () => {
  const [params, setParams] = useState();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const para = useParams();
  useEffect(() => {
    setParams(para["*"]);
  }, [para]);

  const menuItems = [
    { icon: <FaCalendarAlt />, label: "Overview", path: "/consultant-dashboard/", active: params === "" },
    { icon: <FaTasks />, label: "Query Inbox", path: "/consultant-dashboard/query-inbox", active: params === "query-inbox" },
    { icon: <FaUserFriends />, label: "Session Data", path: "/consultant-dashboard/session-data", active: params === "session-data" },
    { icon: <FaDollarSign />, label: "Chat", path: "/consultant-dashboard/chat", active: params === "chat" },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const checkCurrentUserRole = useSelector(selectCurrentUserRole);

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
    navigate("/login");
  };

  const userName = useSelector(selectCurrentUser);
  const userGreeting = userName ? userName.name : "Guest";

  return (
    <div className="min-h-screen bg-gray-100 flex relative">
      {/* -------- Sidebar (Desktop) -------- */}
      <aside className="hidden lg:flex w-64 bg-white shadow-md p-6 flex-col justify-between min-h-screen">
        <div>
          <Link to={"/"}>
            <h1 className="text-2xl font-bold text-primary mb-8">Worklify</h1>
          </Link>
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
          {checkCurrentUserRole === "consultant" && (
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

      {/* -------- Mobile Sidebar -------- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black opacity-40"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Sidebar Drawer */}
          <aside className="absolute left-0 top-0 w-1/2 bg-white shadow-md p-6 flex flex-col justify-between min-h-screen z-50">
            <div>
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-primary">Worklify</h1>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <BsX className="text-gray-600 w-6 h-6 text-2xl" />
                </button>
              </div>
              <nav className="space-y-2">
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
            </div>

            <div className="flex flex-col">
              {checkCurrentUserRole === "consultant" && (
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
          </aside>
        </div>
      )}

      {/* -------- Main Content -------- */}
      <main className="w-full lg:h-screen lg:overflow-y-scroll">
        <header className="bg-white px-6 pt-6 pb-1 w-full flex justify-between items-center">
          <p className="text-sm text-gray-600">Welcome back, {userGreeting}</p>
          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-600"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <BsList className="w-6 h-6 text-2xl hover:text-primary" />
          </button>
        </header>

        <Routes>
          <Route element={<ProtectedRoute allowedRoles={["consultant"]} />}>
            <Route path="/" element={<ConsultantHome />} />
            <Route path="/query-inbox" element={<QueryInbox />} />
            <Route path="/session-data" element={<SessionDetails />} />
            <Route path="/chat" element={<EarningsTransactions />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/notification" element={<NotificationPage />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
};

export default ConsultantDashboard;

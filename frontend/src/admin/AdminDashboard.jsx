import React, { useEffect, useState } from 'react';
import { Route, Routes, Link, useParams } from 'react-router-dom';
import {FaBell,FaUser,FaCalendarAlt,FaDollarSign,FaCheckCircle,FaUserFriends} from 'react-icons/fa';

import NotificationPage from '../components/common/NotificationPage';
import AdminHome from './AdminHome';
import AdminConsultant from './AdminConsultant';
import AdminCustomer from './AdminCustomer';
import AdminTransaction from './AdminTransaction';
import AdminVerification from './AdminVerification';
import AdminAnalysis from './AdminAnalysis';
import Profile from '../components/common/Profile';
import MenuItem from '../components/common/MenuItem';

const ProfilePath = '/admin-dashboard/profile';
const NotificationPath = '/admin-dashboard/notification';

const AdminDashboard = () => {

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
            path: "/admin-dashboard/", 
            active: params === "" ? true : false 
        },
        { 
            icon: <FaUserFriends />, 
            label: 'Consultant', 
            badge: 3, path: "/admin-dashboard/consultant", 
            active: params === "consultant" ? true : false 
        },
        { 
            icon: <FaUser/>, 
            label: 'Customer', 
            badge: 3, path: "/admin-dashboard/customer", 
            active: params === "customer" ? true : false 
        },
        { 
            icon: <FaCheckCircle />, 
            label: 'Verification', 
            path: "/admin-dashboard/verification", 
            active: params === "verification" ? true : false 
        },
        { 
            icon: <FaDollarSign />, 
            label: 'Trasaction', 
            path: "/admin-dashboard/trasaction", 
            active: params === "trasaction" ? true : false 
        },
        { 
            icon: <FaUserFriends />, 
            label: 'Analysis', 
            path: "/admin-dashboard/analysis", 
            active: params === "analysis" ? true : false 
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex overscroll-auto">
            {/* Sidebar */}
            <aside className="lg:flex hidden w-64 bg-white shadow-md p-6 flex-col justify-between min-h-screen">
                <div>
                    <h1 className="text-2xl font-bold text-primary mb-8">Cygen</h1>
                    <nav className="space-y-2">
                        <button className="flex items-center gap-3 text-primary font-semibold mb-4">
                            <span className=" bg-primaryLight p-2 rounded-md">
                                <FaUser className="w-5 h-5" />
                            </span>
                            Dashboard
                        </button>

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
                <Routes>
                    <Route path='/' element={<AdminHome />} />
                    <Route path='/consultant' element={<AdminConsultant/>} />
                    <Route path='/customer' element={<AdminCustomer />} />
                    <Route path='/verification' element={<AdminVerification />} />
                    <Route path='/trasaction' element={<AdminTransaction/>} />
                    <Route path='/analysis' element={<AdminAnalysis />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/notification' element={<NotificationPage />} /> 
                </Routes>

            </main>
        </div>
    );
};
export default AdminDashboard;

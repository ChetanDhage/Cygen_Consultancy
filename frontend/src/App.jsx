import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/pages/web/About';
import Category from './components/pages/web/Category';
import Consultant from './components/pages/web/Consultant';
import HowItWorks from './components/pages/web/HowWork';
import Contact from './components/pages/web/Contact';
import ConsultantDashboard from './consultant/Dashboard';
import AdminDashboard from './admin/AdminDashboard';
import SubAdminDashboard from './sub-admin/SubAdminDashboard';
import RoleSelection from './components/RoleSelection';
import SignUpConsultant from './components/SignUpConsultant';
import UserDashboard from './user/UserDashboard';
import SignUpUser from './components/SignUpUser';
import ProtectedRoute from './api/ProtectedRoute';
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />

        <Route path='/signup' element={<RoleSelection />} />
        <Route path='/consultant' element={<SignUpConsultant />} />
        <Route path='/user' element={<SignUpUser />} />

        <Route path='/about' element={<About />} />
        <Route path='/category' element={<Category />} />
        <Route path='/consultants' element={<Consultant />} />
        <Route path='/how-it-works' element={<HowItWorks />} />
        <Route path='/contact' element={<Contact />} />

        {/* <Route element={<ProtectedRoute allowedRoles={["admin"]} />}> */}
          <Route path='/admin-dashboard/*' element={<AdminDashboard />} />
        {/* </Route> */}
        
        <Route element={<ProtectedRoute allowedRoles={["subadmin"]} />}>
          <Route path='/subadmin-dashboard/*' element={<SubAdminDashboard />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["user"]} />}>
          <Route path='/user-dashboard/*' element={<UserDashboard />} />
        </Route>
        
        <Route element={<ProtectedRoute allowedRoles={["consultant"]} />}>
          <Route path='/consultant-dashboard/*' element={<ConsultantDashboard />} />
        </Route>
        
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
};

export default App;

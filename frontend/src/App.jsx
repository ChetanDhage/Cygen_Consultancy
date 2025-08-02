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
import UserDashboard from './user/Dashboard';
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        
        <Route path='/signup' element={<RoleSelection />} />
        <Route path='/consultant' element={<SignUpConsultant />} />

        <Route path='/about' element={<About />} />
        <Route path='/category' element={<Category />} />
        <Route path='/consultants' element={<Consultant />} />
        <Route path='/how-it-works' element={<HowItWorks />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/user' element={<UserDashboard/>} />
        <Route path='/admin-dashboard/*' element={<AdminDashboard />} />
        <Route path='/consultant-dashboard/*' element={<ConsultantDashboard />} />
        <Route path='/subadmin-dashboard/*' element={<SubAdminDashboard />} />
      </Routes>
    </>
  );
};

export default App;

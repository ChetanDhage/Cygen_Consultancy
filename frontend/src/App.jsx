import Login from './components/Login'
import SignUp from './components/SignUp'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/pages/web/About'
import Category from './components/pages/web/Category'
import Consultant from './components/pages/web/Consultant'
import HowItWorks from './components/pages/web/HowWork'
import Contact from './components/pages/web/Contact'

import ConsultantDashboard from './consultant/Dashboard'
import AdminDashboard from './admin/AdminDashboard'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />

        <Route path='/about' element={<About />} />
        <Route path='/category' element={<Category />} />
        <Route path='/consultants' element={<Consultant />} />
        <Route path='/how-it-works' element={<HowItWorks />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/admin-dashboard/*' element={<AdminDashboard/>} />
        <Route path='/consultant-dashboard/*' element={<ConsultantDashboard/>} />
        

      </Routes>
    </>
  )
}

export default App

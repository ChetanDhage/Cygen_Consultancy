// import React, { useState, useEffect } from 'react';
// import { BsMoonFill, BsSunFill } from 'react-icons/bs';
// import { HiX } from 'react-icons/hi';
// import { FiMenu } from 'react-icons/fi';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import Logo from '../assets/logo.png';
// import { logout, selectCurrentUserRole } from '../redux/authSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'sonner';

// const navLinks = [
//   { path: '/', label: 'Find Talent' },
//   { path: '/about', label: 'About Us' },
//   { path: '/category', label: 'Categories'   },
//   { path: '/how-it-works', label: 'How It Works' },
//   { path: '/contact', label: 'Contact Us' },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // ✅ Get initial theme from localStorage
//   const [theme, setTheme] = useState(() => {
//     return localStorage.getItem('theme') === 'dark';
//   });

//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   // ✅ Apply theme on page load and whenever theme changes
//   useEffect(() => {
//     if (theme) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [theme]);

//   const toggleTheme = () => {
//     const newTheme = !theme;
//     setTheme(newTheme);
//     localStorage.setItem('theme', newTheme ? 'dark' : 'light');
//   };

//   return (
//     <nav
//       className={`w-full dark:bg-[#090d13] bg-white sticky top-0 z-50 ${scrolled ? 'shadow-lg dark:shadow-gray-900/50' : ''
//         } transition-all duration-300`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center gap-2 cursor-pointer">
//               <img
//                 src={Logo}
//                 alt="logo"
//                 className="w-12 h-12 object-contain transition-transform duration-300 hover:rotate-12"
//               />
//               <span className="hidden md:block text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
//                 Worklify
//               </span>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <ul className="hidden lg:flex space-x-4">
//             {navLinks.map((link) => (
//               <li key={link.label}>
//                 <Link
//                   to={link.path}
//                   className={`relative px-3 py-2 text-sm font-medium ${location.pathname === link.path
//                     ? 'text-primary dark:text-primary'
//                     : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
//                     } transition-colors duration-300`}
//                 >
//                   {link.label}
//                   {location.pathname === link.path && (
//                     <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary" />
//                   )}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Desktop Actions */}
//           <div className="hidden lg:flex items-center gap-4">
//             {/* Theme Toggle Button */}
//             <button
//               onClick={toggleTheme}
//               className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
//               aria-label="Toggle theme"
//             >
//               {theme ? <BsSunFill /> : <BsMoonFill />}
//             </button>

//             <CheckUserExists />
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="lg:hidden flex items-center gap-4">
//             {/* Theme Toggle Button */}
//             <button
//               onClick={toggleTheme}
//               className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
//               aria-label="Toggle theme"
//             >
//               {theme ? <BsSunFill /> : <BsMoonFill />}
//             </button>

//             <button
//               onClick={() => setIsOpen(true)}
//               className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary focus:outline-none"
//               aria-label="Open menu"
//             >
//               <FiMenu className="h-6 w-6" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <>
//           <div
//             onClick={() => setIsOpen(false)}
//             className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
//           />
//           <div className="fixed top-0 right-0 w-80 h-full dark:bg-[#090d13] bg-white shadow-xl z-50 overflow-y-auto">
//             <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
//               <div className="flex items-center gap-2">
//                 <img src={Logo} alt="logo" className="w-10 h-10 object-contain" />
//                 <span className="text-xl font-bold text-primary">Worklify</span>
//               </div>
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-primary focus:outline-none"
//               >
//                 <HiX className="h-6 w-6" />
//               </button>
//             </div>

//             <div className="p-4">
//               <ul className="space-y-4">
//                 {navLinks.map((link) => (
//                   <li key={link.label} onClick={() => setIsOpen(false)}>
//                     <Link
//                       to={link.path}
//                       className={`block px-4 py-3 rounded-lg text-sm font-medium ${location.pathname === link.path
//                         ? 'bg-primary/10 text-primary'
//                         : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
//                         } transition-colors`}
//                     >
//                       {link.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>

//               <div className="mt-8 space-y-4">
//                 {/* Theme Toggle Button in Mobile Menu */}
//                 <button
//                   onClick={toggleTheme}
//                   className="w-full flex items-center justify-center p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
//                   aria-label="Toggle theme"
//                 >
//                   {theme ? (
//                     <>
//                       <BsSunFill className="mr-2" /> Switch to Light Mode
//                     </>
//                   ) : (
//                     <>
//                       <BsMoonFill className="mr-2" /> Switch to Dark Mode
//                     </>
//                   )}
//                 </button>

//                 <CheckUserExists />
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// const CheckUserExists = () => {
//   const userRole = useSelector(selectCurrentUserRole);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     // console.log(`Current user role: ${userRole}`);
//   }, [userRole]);

//   const handleLogout = () => {
//     dispatch(logout()); // clear user in Redux
//     toast.success("Logout Successfully");
//     navigate("/login"); // redirect to login
//   };

//   if (!userRole) {
//     return (
//       <>
//         <Link
//           to="/login"
//           className="px-4 py-2 rounded-md text-sm font-medium text-primary border border-primary hover:bg-primary hover:text-white transition-colors"
//         >
//           Login
//         </Link>

//         <Link
//           to="/signup"
//           className="px-4 py-2 rounded-md ml-2 sm:ml-0 text-sm font-medium text-white bg-primary hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
//         >
//           Sign Up
//         </Link>
//       </>
//     );
//   }

//   return (
//     <>
//       <Link
//         to={`/${userRole}-dashboard`}
//         className="px-4 py-2 rounded-md text-sm font-medium text-white bg-primary hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
//       >
//         Dashboard
//       </Link>

//       <button
//         onClick={handleLogout}
//         className="px-4 py-2 rounded-md text-sm font-medium text-white bg-red-500 hover:bg-red-600 transition-colors shadow-md hover:shadow-lg ml-4 md:ml-1"
//       >
//         Logout
//       </button>
//     </>
//   );
// };


import React, { useState, useEffect } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { HiX } from 'react-icons/hi';
import { FiMenu } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { logout, selectCurrentUserRole } from '../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';

// Subcategories for Categories dropdown
const categoryLinks = [
  { path: '/category/technology', label: 'Technology' }, 
  { path: '/category/medical', label: 'Medical & Healthcare' },
  { path: '/category/education', label: 'Education & E-Learning' },
  { path: '/category/finance', label: 'Finance & Banking' },
  { path: '/category/retail', label: 'Retail & E-commerce' },
  { path: '/category/entertainment', label: 'Entertainment & Media' },
  { path: '/category/legal', label: 'Legal & Consulting Services' },
  { path: '/category/real-estate', label: 'Real Estate' },
  { path: '/category/travel', label: 'Travel & Hospitality' },
  { path: '/category/hr', label: 'Human Resources & Freelancing' },
];

// Main navigation links
const navLinks = [
  { path: '/', label: 'Find Talent' },
  { path: '/about', label: 'About Us' },
  { path: '/category', label: 'Categories', dropdown: categoryLinks },
  { path: '/how-it-works', label: 'How It Works' },
  { path: '/contact', label: 'Contact Us' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') === 'dark');
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Apply theme on page load and theme change
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`w-full dark:bg-gray-900 bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md dark:shadow-gray-800/30 py-0' : 'py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3 cursor-pointer group">
              <img src={Logo} alt="logo" className="w-10 h-10 object-contain transition-all duration-300 group-hover:scale-110" />
              <span className="hidden md:block text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Worklify
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-1 relative">
            {navLinks.map((link) => (
              <li 
                key={link.label} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {!link.dropdown ? (
                  <Link
                    to={link.path}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${location.pathname === link.path
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                  >
                    {link.label}
                    {location.pathname === link.path && (
                      <span className="absolute left-4 right-4 bottom-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                    )}
                  </Link>
                ) : (
                  <>
                    <button 
                      className={`px-4 py-2 text-sm font-medium rounded-lg flex items-center gap-1 transition-all duration-200 ${activeDropdown === link.label
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      {link.label} 
                      <svg className="w-3 h-3 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Dropdown */}
                    <div 
                      className={`absolute left-0 top-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl py-2 transition-all duration-300 z-50 min-w-[240px] ${activeDropdown === link.label ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          to={item.path}
                          className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme ? <BsSunFill className="w-4 h-4" /> : <BsMoonFill className="w-4 h-4" />}
            </button>

            <CheckUserExists />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Toggle theme"
            >
              {theme ? <BsSunFill className="w-4 h-4" /> : <BsMoonFill className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsOpen(true)}
              className="p-2.5 rounded-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition-colors"
              aria-label="Open menu"
            >
              <FiMenu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          <div 
            onClick={() => setIsOpen(false)} 
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300" 
          />
          <div className="fixed top-0 right-0 w-80 h-full dark:bg-gray-900 bg-white shadow-2xl z-50 overflow-y-auto transform transition-transform duration-300">
            <div className="flex items-center justify-between p-5 border-b dark:border-gray-800">
              <div className="flex items-center gap-3">
                <img src={Logo} alt="logo" className="w-9 h-9 object-contain" />
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">Worklify</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <HiX className="h-5 w-5" />
              </button>
            </div>

            <div className="p-5">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${location.pathname === link.path
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      onClick={() => !link.dropdown && setIsOpen(false)}
                    >
                      {link.label}
                    </Link>

                    {/* Mobile nested dropdown */}
                    {link.dropdown && (
                      <ul className="pl-6 mt-1 space-y-1 border-l dark:border-gray-700 ml-3">
                        {link.dropdown.map((item) => (
                          <li key={item.label}>
                            <Link
                              to={item.path}
                              className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-5 border-t dark:border-gray-800 space-y-3">
                <CheckUserExists mobile={true} />
                
                {/* Theme Toggle Button in Mobile Menu */}
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-center gap-2 p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme ? (
                    <>
                      <BsSunFill className="w-4 h-4" /> Switch to Light Mode
                    </>
                  ) : (
                    <>
                      <BsMoonFill className="w-4 h-4" /> Switch to Dark Mode
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;

const CheckUserExists = ({ mobile = false }) => {
  const userRole = useSelector(selectCurrentUserRole);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged out successfully");
    navigate("/login");
  };

  if (!userRole) {
    return mobile ? (
      <div className="flex flex-col gap-3">
        <Link
          to="/login"
          className="px-4 py-3 rounded-lg text-sm font-medium text-center text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
          onClick={() => window.innerWidth < 1024}
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="px-4 py-3 rounded-lg text-sm font-medium text-center text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          onClick={() => window.innerWidth < 1024}
        >
          Sign Up
        </Link>
      </div>
    ) : (
      <>
        <Link
          to="/login"
          className="px-4 py-2 rounded-lg text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
        >
          Sign Up
        </Link>
      </>
    );
  }

  return mobile ? (
    <div className="flex flex-col gap-3">
      <Link
        to={`/${userRole}-dashboard`}
        className="px-4 py-3 rounded-lg text-sm font-medium text-center text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        onClick={() => window.innerWidth < 1024}
      >
        Dashboard
      </Link>

      <button
        onClick={handleLogout}
        className="px-4 py-3 rounded-lg text-sm font-medium text-center text-white bg-red-500 hover:bg-red-600 transition-colors"
      >
        Logout
      </button>
    </div>
  ) : (
    <>
      <Link
        to={`/${userRole}-dashboard`}
        className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
      >
        Dashboard
      </Link>

      <button
        onClick={handleLogout}
        className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-red-500 hover:bg-red-600 transition-colors shadow-md hover:shadow-lg"
      >
        Logout
      </button>
    </>
  );
};
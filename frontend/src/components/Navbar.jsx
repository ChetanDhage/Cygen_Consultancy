// import React, { useState } from 'react';
// import { BsChatDotsFill, BsList, BsMoonFill, BsSunFill } from 'react-icons/bs';
// import { HiMenuAlt3, HiX } from 'react-icons/hi';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import Logo from '../assets/logo.png';

// const navLinks = [
//   { path: '/', label: 'Home' },
//   { path: '/about', label: 'About Us' },
//   { path: '/category', label: 'Categories' },
//   { path: '/consultants', label: 'Consultants' },
//   { path: '/how-it-works', label: 'How It Works' },
//   { path: '/contact', label: 'Contact Us' },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [theme, setTheme] = useState(false);

//   const toggleTheme = () => {
//     setTheme(!theme);
//     document.documentElement.classList.toggle("dark");
//   };


//   return (
//     <nav className=" w-full dark:bg-[#090d13] bg-white sticky top-0 z-50 ">
//       <div className=" w-full px-4 py-3 flex justify-between items-center">
//         <div className=' flex gap-8 items-center'>
//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-2 cursor-pointer ml-4" >
//            <img src={Logo} alt="logo" className=' w-[50px] h-[40px] object-fill ' />
//           </Link>

//           {/* Desktop Nav */}
//           <ul className="hidden lg:flex gap-4 items-center text-gray-900 dark:text-white text-sm font-medium">
//             {navLinks.map((link) => (
//               <li key={link.label}>
//                 <Link to={link.path}><p className=' hover:text-primary'>{link.label}</p></Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Action Buttons (Desktop) */}
//         <div className="hidden lg:flex gap-2">
//           <Link to="/login" className="bg-primary text-white px-4 py-2 rounded-md text-xs font-medium hover:bg-primary transition">Sign In</Link>
//           <Link to="/signup" className="bg-primary text-white px-4 py-2 rounded-md text-xs font-medium hover:bg-primary transition">Sign Up</Link>
//           <button
//             className='rounded-full text-xs  flex items-center justify-center border border-primary'
//             onClick={toggleTheme}
//           >
//             {theme ? <span className={` px-[10px]  text-primary rounded-l-full transition-all duration-200`} title='Switch to Sun Mode'><BsSunFill /></span>
//               :
//               <span className={` px-[10px] text-primary  rounded-r-full transition-all duration-200`} title='Switch to Night Mode'><BsMoonFill /></span>
//             }
//           </button>
//         </div>

//         {/* Mobile Toggle */}
//         <div className="lg:hidden">
//           <button onClick={() => setIsOpen(true)}>
//             <BsList className="text-2xl text-primary" />
//           </button>
//         </div>
//       </div>

//       {/* Sidebar (Mobile) */}
//       {isOpen && (
//         <motion.div
//           initial={{ x: '100%' }}
//           animate={{ x: 0 }}
//           exit={{ x: '100%' }}
//           transition={{ type: 'tween', duration: 0.3 }}
//           className="fixed top-0 right-0 w-64 h-full dark:bg-[#090d13] bg-white shadow-lg z-50 p-6"
//         >
//           <div className="flex justify-between items-center mb-6">
//             <div className="flex items-center gap-2">
//               <BsChatDotsFill className="text-primary text-2xl" />
//               <span className="text-xl font-bold text-primary">CyGen</span>
//             </div>
//             <button onClick={() => setIsOpen(false)}>
//               <HiX className="text-2xl text-gray-600" />
//             </button>
//           </div>

//           <ul className="space-y-5 dark:text-white text-gray-600 font-semibold text-sm">
//             {navLinks.map((link) => (
//               <li key={link.label}>
//                 <Link to={link.path} onClick={() => setIsOpen(false)}>
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           <div className="mt-8 flex flex-col gap-3 text-sm font-semibold">
//             <Link
//               to="/login"
//               onClick={() => setIsOpen(false)}
//               className="block bg-primary text-white text-center px-4 py-2 rounded-md"
//             >
//               Sign In
//             </Link>
//             <Link
//               to="/signup"
//               onClick={() => setIsOpen(false)}
//               className="block bg-primary text-white text-center px-4 py-2 rounded-md"
//             >
//               Sign Up
//             </Link>
            
//              <button
//                 className='rounded-full w-fit text-xs  flex items-center justify-center border border-primary'
//                 onClick={toggleTheme}
//               >
//                 {theme ? <span className={` p-2  text-primary  rounded-l-full transition-all duration-200`} title='Switch to Sun Mode'><BsSunFill /></span>
//                   :
//                   <span className={` p-2 text-primary  rounded-r-full transition-all duration-200`} title='Switch to Night Mode'><BsMoonFill /></span>
//                 }
//               </button>
            
//           </div>
//         </motion.div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { BsChatDotsFill, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { HiX } from 'react-icons/hi';
import { FiMenu } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/logo.png';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/category', label: 'Categories' },
  { path: '/consultants', label: 'Consultants' },
  { path: '/how-it-works', label: 'How It Works' },
  { path: '/contact', label: 'Contact Us' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(!theme);
    document.documentElement.classList.toggle("dark");
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  const mobileNavVariants = {
    hidden: { x: '100%' },
    visible: { 
      x: 0,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    },
    exit: { 
      x: '100%',
      transition: { ease: 'easeInOut', duration: 0.3 }
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full dark:bg-[#090d13] bg-white sticky top-0 z-50 ${
        scrolled ? 'shadow-lg dark:shadow-gray-900/50' : ''
      } transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center gap-2 cursor-pointer">
              <img 
                src={Logo} 
                alt="logo" 
                className='w-12 h-12 object-contain transition-transform duration-300 hover:rotate-12' 
              />
              <span className="hidden md:block text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                CyGen
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.ul 
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex space-x-8"
          >
            {navLinks.map((link) => (
              <motion.li 
                key={link.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to={link.path} 
                  className={`relative px-3 py-2 text-sm font-medium ${
                    location.pathname === link.path 
                      ? 'text-primary dark:text-primary' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                  } transition-colors duration-300`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.span 
                      layoutId="nav-underline"
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-primary"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="Toggle theme"
            >
              {theme ? <BsSunFill /> : <BsMoonFill />}
            </motion.button>
            
            <motion.div whileHover={{ scale: 1.03 }}>
              <Link 
                to="/login" 
                className="px-4 py-2 rounded-md text-sm font-medium text-primary border border-primary hover:bg-primary hover:text-white transition-colors"
              >
                Sign In
              </Link>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link 
                to="/signup" 
                className="px-4 py-2 rounded-md text-sm font-medium text-white bg-primary hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
              >
                Sign Up
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              {theme ? <BsSunFill /> : <BsMoonFill />}
            </button>
            
            <button 
              onClick={() => setIsOpen(true)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-primary focus:outline-none"
              aria-label="Open menu"
            >
              <FiMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            />
            
            <motion.div
              variants={mobileNavVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 w-80 h-full dark:bg-[#090d13] bg-white shadow-xl z-50 overflow-y-auto"
            >
              <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <img src={Logo} alt="logo" className='w-10 h-10 object-contain' />
                  <span className="text-xl font-bold text-primary">CyGen</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-primary focus:outline-none"
                >
                  <HiX className="h-6 w-6" />
                </button>
              </div>

              <div className="p-4">
                <motion.ul 
                  variants={navVariants}
                  className="space-y-4"
                >
                  {navLinks.map((link) => (
                    <motion.li 
                      key={link.label}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      onClick={() => setIsOpen(false)}
                    >
                      <Link 
                        to={link.path} 
                        className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                          location.pathname === link.path 
                            ? 'bg-primary/10 text-primary' 
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        } transition-colors`}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>

                <div className="mt-8 space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="block w-full px-4 py-3 text-center rounded-md text-sm font-medium text-primary border border-primary hover:bg-primary hover:text-white transition-colors"
                    >
                      Sign In
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/signup"
                      onClick={() => setIsOpen(false)}
                      className="block w-full px-4 py-3 text-center rounded-md text-sm font-medium text-white bg-primary hover:bg-primary/90 transition-colors shadow-md"
                    >
                      Sign Up
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
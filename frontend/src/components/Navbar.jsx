import React, { useState } from 'react';
import { BsChatDotsFill, BsList, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const navLinks = [
  { path: '#home', label: 'Home' },
  { path: '#about', label: 'About Us' },
  { path: '#categories', label: 'Categories' },
  { path: '#consultants', label: 'Consultants' },
  { path: '#how-it-works', label: 'How It Works' },
  { path: '#contact', label: 'Contact Us' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
    document.documentElement.classList.toggle("dark");
  };


  return (
    <nav className=" w-full dark:bg-[#090d13] bg-white sticky top-0 z-50 ">
      <div className=" w-full px-4 py-3 flex justify-between items-center">
        <div className=' flex gap-8 items-center'>
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 cursor-pointer" >
            <BsChatDotsFill className="text-primary text-2xl" />
            <span className="text-xl font-bold text-primary">CyGen</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex gap-4 items-center text-gray-900 dark:text-white text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.path}><p className=' hover:text-primary'>{link.label}</p></a>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons (Desktop) */}
        <div className="hidden lg:flex gap-2">
          <Link to="/login" className="bg-primary text-white px-4 py-2 rounded-md text-xs font-medium hover:bg-primary transition">Sign In</Link>
          <Link to="/signup" className="bg-primary text-white px-4 py-2 rounded-md text-xs font-medium hover:bg-primary transition">Sign Up</Link>
          <button
            className='rounded-full text-xs  flex items-center justify-center border border-primary'
            onClick={toggleTheme}
          >
            {theme ? <span className={` px-[10px]  text-white  rounded-l-full transition-all duration-200`} title='Switch to Sun Mode'><BsSunFill /></span>
              :
              <span className={` px-[10px] text-primary  rounded-r-full transition-all duration-200`} title='Switch to Night Mode'><BsMoonFill /></span>
            }
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(true)}>
            <BsList className="text-2xl text-primary" />
          </button>
        </div>
      </div>

      {/* Sidebar (Mobile) */}
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="fixed top-0 right-0 w-64 h-full dark:bg-[#090d13] bg-white shadow-lg z-50 p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <BsChatDotsFill className="text-primary text-2xl" />
              <span className="text-xl font-bold text-primary">CyGen</span>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <HiX className="text-2xl text-gray-600" />
            </button>
          </div>

          <ul className="space-y-5 dark:text-white text-gray-600 font-semibold text-sm">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.path} onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 text-sm font-semibold">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block bg-primary text-white text-center px-4 py-2 rounded-md"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="block bg-primary text-white text-center px-4 py-2 rounded-md"
            >
              Sign Up
            </Link>
            
             <button
                className='rounded-full w-fit text-xs  flex items-center justify-center border border-primary'
                onClick={toggleTheme}
              >
                {theme ? <span className={` p-2  text-primary  rounded-l-full transition-all duration-200`} title='Switch to Sun Mode'><BsSunFill /></span>
                  :
                  <span className={` p-2 text-primary  rounded-r-full transition-all duration-200`} title='Switch to Night Mode'><BsMoonFill /></span>
                }
              </button>
            
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

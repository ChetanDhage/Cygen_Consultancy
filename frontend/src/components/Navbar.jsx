import React, { useState, useEffect } from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { HiX } from 'react-icons/hi';
import { FiMenu } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
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

  // ✅ Get initial theme from localStorage
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // ✅ Apply theme on page load and whenever theme changes
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // ✅ Detect scroll for shadow effect
  // useEffect(() => {
  //   const handleScroll = () => setScrolled(window.scrollY > 10);
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // ✅ Toggle theme and save to localStorage
  const toggleTheme = () => {
    const newTheme = !theme;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <nav
      className={`w-full dark:bg-[#090d13] bg-white sticky top-0 z-50 ${
        scrolled ? 'shadow-lg dark:shadow-gray-900/50' : ''
      } transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 cursor-pointer">
              <img
                src={Logo}
                alt="logo"
                className="w-12 h-12 object-contain transition-transform duration-300 hover:rotate-12"
              />
              <span className="hidden md:block text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                CyGen
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-4">
            {navLinks.map((link) => (
              <li key={link.label}>
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
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="Toggle theme"
            >
              {theme ? <BsSunFill /> : <BsMoonFill />}
            </button>

            <Link
              to="/login"
              className="px-4 py-2 rounded-md text-sm font-medium text-primary border border-primary hover:bg-primary hover:text-white transition-colors"
            >
              Sign In
            </Link>

            <Link
              to="/signup"
              className="px-4 py-2 rounded-md text-sm font-medium text-white bg-primary hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
            >
              Sign Up
            </Link>
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
      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          />
          <div className="fixed top-0 right-0 w-80 h-full dark:bg-[#090d13] bg-white shadow-xl z-50 overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
              <div className="flex items-center gap-2">
                <img src={Logo} alt="logo" className="w-10 h-10 object-contain" />
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
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.label} onClick={() => setIsOpen(false)}>
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
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-4">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-4 py-3 text-center rounded-md text-sm font-medium text-primary border border-primary hover:bg-primary hover:text-white transition-colors"
                >
                  Sign In
                </Link>

                <Link
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-4 py-3 text-center rounded-md text-sm font-medium text-white bg-primary hover:bg-primary/90 transition-colors shadow-md"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
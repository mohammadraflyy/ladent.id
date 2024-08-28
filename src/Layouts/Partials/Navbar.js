import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon, ChevronUpIcon, Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Navbar = ({ title }) => {
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileHomeMenuOpen, setIsMobileHomeMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleServiceMenu = () => {
    setIsServiceMenuOpen(!isServiceMenuOpen);
  };

  const toggleHomeMenu = () => {
    setIsHomeMenuOpen(!isHomeMenuOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const toggleMobileHomeMenu = () => {
    setIsMobileHomeMenuOpen(!isMobileHomeMenuOpen);
  };

  const isActive = (paths) => {
    const isPathActive = paths.some(path => location.pathname.startsWith(path));
    return isPathActive
      ? 'text-purple-500 bg-purple-500 bg-opacity-30 px-3 py-1'
      : '';
  };

  return (
    <nav className={`py-2 sticky top-0 shadow-lg z-20 transition-colors duration-500 ${isDarkMode ? 'dark:bg-gray-800 bg-gray-900' : 'bg-white'}`}>
      <div className="px-5 py-3 flex justify-between items-center">
        <Link to="/home" className="flex items-center text-gray-800 dark:text-gray-100 text-lg lg:text-xl font-bold">
          <img src="/logo.webp" alt="Logo" className="w-10 h-10 mr-2" />
          {title}
        </Link>
        <div className="hidden md:flex items-center space-x-5 relative text-md font-base">
          <div className="relative">
              <button
                  onClick={toggleHomeMenu}
                  aria-label="Toggle Home Menu"
                  className={`flex items-center ${isActive(['/home'])} dark:text-white hover:text-gray-300 text-gray-900 rounded-xl hover:bg-gray-700 px-3 py-1 transition-colors duration-300`}
              >
                  Home
                  {isHomeMenuOpen ? (
                      <ChevronUpIcon className="w-5 h-5 ml-2 font-bold transition-transform duration-300 ease-in-out" />
                  ) : (
                      <ChevronDownIcon className="w-5 h-5 ml-2 font-bold transition-transform duration-300 ease-in-out" />
                  )}
              </button>
              <div className={`absolute dark:bg-gray-700 bg-gray-200 dark:text-gray-300 text-black mt-2 rounded py-2 w-64 transition-all duration-300 ease-in-out ${isHomeMenuOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                  {isActive([
                    '/home',
                    '/home#profile',
                    '/home#executive-summary',
                    '/home#milestones',
                    '/home#clients',
                    '/home#article'
                  ]) ? (
                    <>
<a
                        href="#profile"
                        className="hover:text-gray-300 block px-4 py-2 dark:text-white text-gray-900 hover:bg-gray-600 transition-colors duration-300"
                        onClick={() => setIsHomeMenuOpen(false)}
                      >
                        Profile
                      </a>
                      <a
                        href="#executive-summary"
                        className="hover:text-gray-300 block px-4 py-2 dark:text-white text-gray-900 hover:bg-gray-600 transition-colors duration-300"
                        onClick={() => setIsHomeMenuOpen(false)}
                      >
                        Executive Summary
                      </a>
                      <a
                        href="#milestones"
                        className="hover:text-gray-300 block px-4 py-2 dark:text-white text-gray-900 hover:bg-gray-600 transition-colors duration-300"
                        onClick={() => setIsHomeMenuOpen(false)}
                      >
                        Milestones
                      </a>
                      <a
                        href="#clients"
                        className="hover:text-gray-300 block px-4 py-2 dark:text-white text-gray-900 hover:bg-gray-600 transition-colors duration-300"
                        onClick={() => setIsHomeMenuOpen(false)}
                      >
                        Clients
                      </a>
                      <a
                        href="#article"
                        className="hover:text-gray-300 block px-4 py-2 dark:text-white text-gray-900 hover:bg-gray-600 transition-colors duration-300"
                        onClick={() => setIsHomeMenuOpen(false)}
                      >
                        Article
                      </a>
                    </>
                  ) : (
                    <>
                      <Link
                          to="/home#profile"
                          className="hover:text-gray-300 block px-4 py-2 dark:text-white text-gray-900 hover:bg-gray-600 transition-colors duration-300"
                          onClick={() => setIsHomeMenuOpen(false)}
                      >
                          Profile
                      </Link>
                      <Link
                          to="/home#executive-summary"
                          className="hover:text-gray-300 block px-4 py-2 dark:text-white text-gray-900 hover:bg-gray-600 transition-colors duration-300"
                          onClick={() => setIsHomeMenuOpen(false)}
                      >
                          Executive Summary
                      </Link>
                      <Link
                          to="/home#milestones"
                          className="hover:text-gray-300 block px-4 py-2 dark:text-white text-gray-900 hover:bg-gray-600 transition-colors duration-300"
                          onClick={() => setIsHomeMenuOpen(false)}
                      >
                          Milestones
                      </Link>
                      <Link
                          to="/home#clients"
                          className="hover:text-gray-300 block px-4 py-2 dark:text-white text-gray-900 hover:bg-gray-600 transition-colors duration-300"
                          onClick={() => setIsHomeMenuOpen(false)}
                      >
                          Clients
                      </Link>
                      <Link
                          to="/home#article"
                          className="hover:text-gray-300 block px-4 py-2 dark:text-white text-gray-900 hover:bg-gray-600 transition-colors duration-300"
                          onClick={() => setIsHomeMenuOpen(false)}
                      >
                          Article
                      </Link>
                    </>
                  )}
              </div>
          </div>
          <div className="relative">
            <button
              onClick={toggleServiceMenu}
              aria-label="Toggle Service Menu"
              className={`flex items-center ${isActive([
                '/service',
                '/service/event-service',
                '/service/brand-activation',
                '/service/media-planner',
                '/service/production'
              ])} dark:text-white hover:text-gray-300 text-gray-900 rounded-xl hover:bg-gray-700 px-3 py-1 transition-colors duration-300`}
            >
              Service
              {isServiceMenuOpen ? (
                <ChevronUpIcon className="w-5 h-5 ml-2 font-bold transition-transform duration-300 ease-in-out" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 ml-2 font-bold transition-transform duration-300 ease-in-out" />
              )}
            </button>
            <div className={`absolute dark:bg-gray-700 bg-gray-200 dark:text-gray-300 text-black mt-2 rounded py-2 w-64 transition-all duration-300 ease-in-out ${isServiceMenuOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
              <Link
                to="/service/event-service"
                className={`${isActive(['/service/event-service'])} hover:text-gray-300 block px-4 py-2 dark:text-white text-gray-900 hover:bg-gray-600 transition-colors duration-300`}
                onClick={() => setIsServiceMenuOpen(false)}
              >
                Event Service
              </Link>
              <Link
                to="/service/brand-activation"
                className={`${isActive(['/service/brand-activation'])} hover:text-gray-300 block px-4 py-2 dark:text-white text-gray-900 hover:bg-gray-600 transition-colors duration-300`}
                onClick={() => setIsServiceMenuOpen(false)}
              >
                Brand Activation
              </Link>
              <Link
                to="/service/media-planner"
                className={`${isActive(['/service/media-planner'])} hover:text-gray-300 block px-4 py-2 dark:text-white text-gray-900 hover:bg-gray-600 transition-colors duration-300`}
                onClick={() => setIsServiceMenuOpen(false)}
              >
                Media Planner
              </Link>
              {/*
              <Link
                to="/service/production"
                className={`${isActive(['/service/production'])} hover:text-gray-300 block px-4 py-2 dark:text-white text-gray-900 hover:bg-gray-600 transition-colors duration-300`}
                onClick={() => setIsServiceMenuOpen(false)}
              >
                Production
              </Link>
              */}
              <Link
                to="/service/artist-management"
                className={`${isActive(['/service/artist-management'])} hover:text-gray-300 block px-4 py-2 dark:text-white text-gray-900 hover:bg-gray-600 transition-colors duration-300`}
                onClick={() => setIsServiceMenuOpen(false)}
              >
                Artist Management
              </Link>
            </div>
          </div>

          <Link
            to="/artist"
            className={`${isActive(['/artist'])} hover:text-gray-300 dark:text-white text-gray-900 rounded-xl hover:bg-gray-700 px-3 py-1 transition-colors duration-300`}
          >
            Artist
          </Link>

          <Link
            to="/contact"
            className={`${isActive(['/contact'])} hover:text-gray-300 dark:text-white text-gray-900 rounded-xl hover:bg-gray-700 px-3 py-1 transition-colors duration-300`}
          >
            Contact
          </Link>

          <button
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className={`hover:bg-gray-100 p-2 rounded-full transition-colors duration-300 ease-in-out
              ${isDarkMode ? 'dark:text-white dark:hover:text-gray-800 text-gray-800' : 'text-gray-800 dark:hover:text-gray-800'}`}
          >
            {isDarkMode ? (
              <SunIcon className="w-6 h-6 transition-transform duration-300 ease-in-out transform rotate-180" />
            ) : (
              <MoonIcon className="w-6 h-6 transition-transform duration-300 ease-in-out transform rotate-0" />
            )}
          </button>
        </div>
        <div className="md:hidden flex gap-2">
          <button
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className={`hover:bg-gray-100 p-2 rounded-full transition-colors duration-300 ease-in-out
              ${isDarkMode ? 'dark:text-white dark:hover:text-gray-800 text-gray-800' : 'text-gray-800 dark:hover:text-gray-800'}`}
          >
            {isDarkMode ? (
              <SunIcon className="w-6 h-6 transition-transform duration-300 ease-in-out transform rotate-180" />
            ) : (
              <MoonIcon className="w-6 h-6 transition-transform duration-300 ease-in-out transform rotate-0" />
            )}
          </button>
          <button
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="md:hidden dark:text-white text-black focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6 transition-transform duration-300 ease-in-out" />
            ) : (
              <Bars3Icon className="w-6 h-6 transition-transform duration-300 ease-in-out" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} dark:bg-gray-800 bg-white dark:text-gray-300 text-gray-800 rounded px-2 md:px-20`}
      >
          <button
            onClick={toggleMobileHomeMenu}
            className={`${isActive(['/home'])} block px-4 py-2 my-2 w-full text-left hover:bg-gray-200 hover:text-black rounded-lg`}
          >
            Home
            {isMobileHomeMenuOpen ? (
              <ChevronUpIcon className="w-5 h-5 ml-2 font-bold transition-transform duration-300 ease-in-out inline" />
            ) : (
              <ChevronDownIcon className="w-5 h-5 ml-2 font-bold transition-transform duration-300 ease-in-out inline" />
            )}
          </button>
          {isMobileHomeMenuOpen && (
            <div className="pl-6">
              {isActive([
                '/home',
                '/home#profile',
                '/home#executive-summary',
                '/home#milestones',
                '/home#clients',
                '/home#article'
              ]) === false ? (
                <>
<a
                        href="#profile"
                        className="hover:text-gray-300 block px-4 py-2 dark:text-white text-gray-900 hover:bg-gray-600 transition-colors duration-300"
                        onClick={() => setIsHomeMenuOpen(false)}
                      >
                        Profile
                      </a>
                      <a
                        href="#executive-summary"
                        className="hover:text-gray-300 block px-4 py-2 dark:text-white text-gray-900 hover:bg-gray-600 transition-colors duration-300"
                        onClick={() => setIsHomeMenuOpen(false)}
                      >
                        Executive Summary
                      </a>
                      <a
                        href="#milestones"
                        className="hover:text-gray-300 block px-4 py-2 dark:text-white text-gray-900 hover:bg-gray-600 transition-colors duration-300"
                        onClick={() => setIsHomeMenuOpen(false)}
                      >
                        Milestones
                      </a>
                      <a
                        href="#clients"
                        className="hover:text-gray-300 block px-4 py-2 dark:text-white text-gray-900 hover:bg-gray-600 transition-colors duration-300"
                        onClick={() => setIsHomeMenuOpen(false)}
                      >
                        Clients
                      </a>
                      {/*
                      <a
                        href="#article"
                        className="hover:text-gray-300 block px-4 py-2 dark:text-white text-gray-900 hover:bg-gray-600 transition-colors duration-300"
                        onClick={() => setIsHomeMenuOpen(false)}
                      >
                        Article
                      </a>
                      */}
                </>
              ) : (
                <>
                      <Link
                          to="/home#profile"
                          className="hover:text-gray-300 block px-4 py-2 dark:text-white text-gray-900 hover:bg-gray-600 transition-colors duration-300"
                          onClick={() => setIsHomeMenuOpen(false)}
                      >
                          Profile
                      </Link>
                      <Link
                          to="/home#executive-summary"
                          className="hover:text-gray-300 block px-4 py-2 dark:text-white text-gray-900 hover:bg-gray-600 transition-colors duration-300"
                          onClick={() => setIsHomeMenuOpen(false)}
                      >
                          Executive Summary
                      </Link>
                      <Link
                          to="/home#milestones"
                          className="hover:text-gray-300 block px-4 py-2 dark:text-white text-gray-900 hover:bg-gray-600 transition-colors duration-300"
                          onClick={() => setIsHomeMenuOpen(false)}
                      >
                          Milestones
                      </Link>
                      <Link
                          to="/home#clients"
                          className="hover:text-gray-300 block px-4 py-2 dark:text-white text-gray-900 hover:bg-gray-600 transition-colors duration-300"
                          onClick={() => setIsHomeMenuOpen(false)}
                      >
                          Clients
                      </Link>
                      {/*
                      <Link
                          to="/home#article"
                          className="hover:text-gray-300 block px-4 py-2 dark:text-white text-gray-900 hover:bg-gray-600 transition-colors duration-300"
                          onClick={() => setIsHomeMenuOpen(false)}
                      >
                          Article
                      </Link>
                      */}
                </>
              )}

            </div>
          )}
        <div className="relative">
          <button
            onClick={toggleServiceMenu}
            aria-label="Toggle Service Menu"
            className={`flex items-center ${isActive([
              '/service',
              '/service/event-service',
              '/service/brand-activation',
              '/service/media-planner',
              '/service/production'
            ])} block px-4 py-2 my-2 w-full text-left hover:bg-gray-200 hover:text-black rounded-lg`}
          >
            Service
            {isServiceMenuOpen ? (
              <ChevronUpIcon className="w-5 h-5 ml-1 transition-transform duration-300 ease-in-out" />
            ) : (
              <ChevronDownIcon className="w-5 h-5 ml-1 transition-transform duration-300 ease-in-out" />
            )}
          </button>
          <div className={`dark:bg-gray-700 bg-gray-300 mt-2 rounded-lg transition-all duration-300 ease-in-out ${isServiceMenuOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
            <Link
              to="/service/event-service"
              className={`${isActive(['/service/event-service'])} block px-4 py-2 hover:bg-gray-200 hover:text-black rounded-lg`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Event Service
            </Link>
            <Link
              to="/service/brand-activation"
              className={`${isActive(['/service/brand-activation'])} block px-4 py-2 hover:bg-gray-200 hover:text-black rounded-lg`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Brand Activation
            </Link>
            <Link
              to="/service/media-planner"
              className={`${isActive(['/service/media-planner'])} block px-4 py-2 hover:bg-gray-200 hover:text-black rounded-lg`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Media Planner
            </Link>
            {/*}
            <Link
              to="/service/production"
              className={`${isActive(['/service/production'])} block px-4 py-2 hover:bg-gray-200 hover:text-black rounded-lg`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Production
            </Link>
            */}
            <Link
              to="/service/artist-management"
              className={`${isActive(['/service/artist-management'])} block px-4 py-2 hover:bg-gray-200 hover:text-black rounded-lg`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Artist Management
            </Link>
          </div>
        </div>
        <Link
          to="/artist"
          className={`${isActive(['/artist'])} block px-4 py-2 my-2 hover:bg-gray-200 hover:text-black rounded-lg`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Artist
        </Link>
        <Link
          to="/contact"
          className={`${isActive(['/contact'])} block px-4 py-2 my-2 hover:bg-gray-200 hover:text-black rounded-lg`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

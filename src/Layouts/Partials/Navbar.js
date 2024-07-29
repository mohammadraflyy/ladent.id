import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon, ChevronUpIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = ({ title }) => {
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleServiceMenu = () => {
    setIsServiceMenuOpen(!isServiceMenuOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (paths) => {
    return paths.includes(location.pathname) ? 'text-white rounded-xl bg-gray-700 px-3 py-1' : 'text-gray-300';
  };

  return (
    <nav className="bg-gray-800 py-4 sticky top-0">
      <div className="px-5 flex justify-between items-center">
        <Link to="/home" className="flex items-center text-gray-100 text-lg lg:text-2xl font-bold">
          <img src="/logo.png" alt="Logo" className="w-8 h-8 mr-2" />
          {title}
        </Link>
        <div className="hidden md:flex items-center space-x-5 relative text-lg font-bold">
          <Link to="/home" className={`${isActive(['/home'])} hover:text-white hover:rounded-xl hover:bg-gray-700 px-3 py-1`}>
            Home
          </Link>
          <div className="relative">
            <button
              onClick={toggleServiceMenu}
              className={`flex items-center ${isActive([
                '/service',
                '/service/event-management',
                '/service/brand-activation',
                '/service/media-planner',
                '/service/production'
              ])} hover:text-white hover:rounded-xl hover:bg-gray-700 px-3 py-1`}
            >
              Service
              {isServiceMenuOpen ? (
                <ChevronUpIcon className="w-5 h-5 ml-2 font-bold" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 ml-2 font-bold" />
              )}
            </button>
            {isServiceMenuOpen && (
              <div className="absolute bg-gray-700 text-white mt-2 rounded py-2 w-64">
                <Link
                  to="/service/event-management"
                  className={`${isActive(['/service/event-management'])} block px-4 py-2 hover:bg-gray-600`}
                  onClick={() => setIsServiceMenuOpen(false)}
                >
                  Event Management
                </Link>
                <Link
                  to="/service/brand-activation"
                  className={`${isActive(['/service/brand-activation'])} block px-4 py-2 hover:bg-gray-600`}
                  onClick={() => setIsServiceMenuOpen(false)}
                >
                  Brand Activation
                </Link>
                <Link
                  to="/service/media-planner"
                  className={`${isActive(['/service/media-planner'])} block px-4 py-2 hover:bg-gray-600`}
                  onClick={() => setIsServiceMenuOpen(false)}
                >
                  Media Planner
                </Link>
                <Link
                  to="/service/production"
                  className={`${isActive(['/service/production'])} block px-4 py-2 hover:bg-gray-600`}
                  onClick={() => setIsServiceMenuOpen(false)}
                >
                  Production
                </Link>
              </div>
            )}
          </div>
          <Link to="/artist" className={`${isActive(['/artist'])} hover:text-white hover:rounded-xl hover:bg-gray-700 px-3 py-1`}>
            Artist
          </Link>
          <Link to="/contact" className={`${isActive(['/contact'])} hover:text-white hover:rounded-xl hover:bg-gray-700 px-3 py-1`}>
            Contact
          </Link>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>
      <div
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-gray-800 text-white mt-2 rounded py-2 px-2 md:px-20`}
      >
        <Link
          to="/home"
          className={`${isActive(['/home'])} block px-4 py-2 hover:bg-gray-600`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Home
        </Link>
        <div className="relative">
          <button
            onClick={toggleServiceMenu}
            className={`flex items-center ${isActive([
              '/service',
              '/service/event-management',
              '/service/brand-activation',
              '/service/media-planner',
              '/service/production'
            ])} block px-4 py-2 w-full text-left hover:bg-gray-600`}
          >
            Service
            {isServiceMenuOpen ? (
              <ChevronUpIcon className="w-5 h-5 ml-1" />
            ) : (
              <ChevronDownIcon className="w-5 h-5 ml-1" />
            )}
          </button>
          {isServiceMenuOpen && (
            <div className="bg-gray-700 text-white mt-2 rounded">
              <Link
                to="/service/event-management"
                className={`${isActive(['/service/event-management'])} block px-4 py-2 hover:bg-gray-600`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Event Management
              </Link>
              <Link
                to="/service/brand-activation"
                className={`${isActive(['/service/brand-activation'])} block px-4 py-2 hover:bg-gray-600`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Brand Activation
              </Link>
              <Link
                to="/service/media-planner"
                className={`${isActive(['/service/media-planner'])} block px-4 py-2 hover:bg-gray-600`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Media Planner
              </Link>
              <Link
                to="/service/production"
                className={`${isActive(['/service/production'])} block px-4 py-2 hover:bg-gray-600`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Production
              </Link>
            </div>
          )}
        </div>
        <Link
          to="/artist"
          className={`${isActive(['/artist'])} block px-4 py-2 hover:bg-gray-600`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Artist
        </Link>
        <Link
          to="/contact"
          className={`${isActive(['/contact'])} block px-4 py-2 hover:bg-gray-600`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

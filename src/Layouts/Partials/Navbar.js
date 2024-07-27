import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ title }) => {
  const [isServiceMenuOpen, setIsServiceMenuOpen] = useState(false);

  const toggleServiceMenu = () => {
    setIsServiceMenuOpen(!isServiceMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-5">
      <div className="px-20 flex justify-between items-center">
        <Link to="/home" className="text-white text-xl font-bold">{title}</Link>
        <div className="flex items-center space-x-4 relative">
          <Link to="/home" className="text-gray-300 hover:text-white">Home</Link>
          <div className="relative">
            <button
              onClick={toggleServiceMenu}
              className="text-gray-300 hover:text-white"
            >
              Service
            </button>
            {isServiceMenuOpen && (
              <div className="absolute bg-gray-700 text-white mt-2 rounded shadow-lg py-2 w-48">
                <Link
                  to="/service/event-management"
                  className="block px-4 py-2 hover:bg-gray-600"
                  onClick={() => setIsServiceMenuOpen(false)}
                >
                  Event Management
                </Link>
                <Link
                  to="/service/brand-activation"
                  className="block px-4 py-2 hover:bg-gray-600"
                  onClick={() => setIsServiceMenuOpen(false)}
                >
                  Brand Activation
                </Link>
                <Link
                  to="/service/media-planner"
                  className="block px-4 py-2 hover:bg-gray-600"
                  onClick={() => setIsServiceMenuOpen(false)}
                >
                  Media Planner
                </Link>
                <Link
                  to="/service/production"
                  className="block px-4 py-2 hover:bg-gray-600"
                  onClick={() => setIsServiceMenuOpen(false)}
                >
                  Production
                </Link>
              </div>
            )}
          </div>
          <Link to="/artist" className="text-gray-300 hover:text-white">Artist</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

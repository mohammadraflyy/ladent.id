import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const Sidebar = ({ postCountByYear, posts }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (query) => {
    const searchUrl = `/search?query=${encodeURIComponent(query)}`;
    navigate(searchUrl);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(searchQuery);
    }
  };

  const years = Object.keys(postCountByYear).sort(); 

  return (
    <div className="w-full md:w-96 bg-gray-800 text-white flex-shrink-0 p-4 my-10 sm:my-0 rounded-lg">
      <div className="mb-4 flex items-center bg-gray-700 rounded-xl">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 ml-3" />
        <input
          type="text"
          placeholder="Cari Artikel..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full px-3 py-2 bg-gray-700 text-white placeholder-gray-400 rounded-xl focus:outline-none pl-2"
        />
      </div>
      <ul className="space-y-2">
        {years.map(year => (
          <li key={year}>
            <Link to={`/archive/${year}`} className="flex justify-between items-center text-gray-100 font-semibold py-2 px-4 rounded-xl hover:bg-gray-700">
              <span>Archive {year} ({postCountByYear[year] || 0})</span>
              <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const Sidebar = ({ postCountByYear, posts }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (query) => {
    const searchUrl = `/posts/search?query=${encodeURIComponent(query)}`;
    navigate(searchUrl);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(searchQuery);
    }
  };

  const years = Object.keys(postCountByYear).sort(); 

  return (
    <div className="w-full xl:w-96 dark:bg-gray-800 bg-white dark:text-white text-gray-700 flex-shrink-0 p-4 my-10 sm:my-0 rounded-lg shadow-md">
      <div className="mb-4 flex items-center dark:bg-gray-700 bg-gray-200 rounded-xl">
        <MagnifyingGlassIcon className="h-5 w-5 dark:text-gray-400 text-gray-700 ml-3" />
        <input
          type="text"
          placeholder="Cari Artikel"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full px-3 py-2 dark:bg-gray-700 dark:text-white bg-gray-200 text-gray-700 placeholder-gray-400 font-semibold rounded-xl focus:outline-none pl-2"
        />
      </div>
      <ul className="space-y-2">
        {years.map(year => (
          <li key={year}>
            <Link to={`/posts/archive/${year}`} className="flex justify-between items-center dark:text-gray-100 text-gray-700 font-semibold py-2 px-4 rounded-xl dark:hover:bg-gray-700 hover:bg-gray-200">
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

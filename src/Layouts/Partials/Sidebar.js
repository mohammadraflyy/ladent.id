import React from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Sidebar = ({ postCountByYear }) => {
  const years = Object.keys(postCountByYear);

  return (
    <div className="w-full md:w-96 bg-gray-800 text-white flex-shrink-0 p-4">
      <div className="mb-4 flex items-center bg-gray-700 rounded">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 ml-3" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-2 bg-gray-700 text-white placeholder-gray-400 rounded focus:outline-none pl-2"
        />
      </div>
      <ul className="space-y-2">
        {years.map(year => (
          <li key={year}>
            <Link to={`/archive/${year}`} className="block py-2 px-4 rounded hover:bg-gray-700">
              Archive {year} ({postCountByYear[year]})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

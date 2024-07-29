import React from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../Utils/postService';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const Post = ({ title, content, created_at, image, slug }) => {
  const formattedDate = new Date(created_at).toLocaleDateString();

  return (
    <Link to={`/posts/${slug}`} className="flex flex-col sm:flex-row bg-gray-800 hover:bg-gray-700 transition duration-300 rounded-lg overflow-hidden">
      {image && (
        <img
          src={`${API_BASE_URL}/storage/posts/${image}`}
          alt={title}
          className="w-full sm:w-48 h-48 object-cover"
        />
      )}
      <div className="flex flex-col p-4 flex-1">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
        <p className="text-gray-500 dark:text-gray-600">{formattedDate}</p>
        <p className="text-gray-400 mt-2 flex-grow">{content.length > 50 ? `${content.slice(0, 50)}...` : content}</p>
        <div className="mt-2 flex items-center justify-between text-gray-100 hover:underline border border-gray-600 rounded-2xl px-4 py-1 font-bold">
          <span>Baca Selengkapnya</span>
          <ChevronRightIcon className="w-4 h-4"/>
        </div>
      </div>
    </Link>
  );
};

export default Post;

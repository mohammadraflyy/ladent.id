import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../Utils/postService';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

const Post = ({ title, content, created_at, image, slug }) => {
  const formattedDate = new Date(created_at).toLocaleDateString();
  const imageUrl = image ? `${API_BASE_URL}/storage/posts/${image}` : '';

  useEffect(() => {
    if (imageUrl) {
      const img = new Image();
      img.src = imageUrl;
    }
  }, [imageUrl]);

  return (
    <Link to={`/posts/${slug}`} className="flex flex-col sm:flex-row dark:bg-gray-800 bg-white dark:hover:bg-gray-700 hover:bg-gray-200 transition duration-300 rounded-lg overflow-hidden shadow-md">
      {image && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full sm:w-48 h-48 object-cover"
          loading="eager"
        />
      )}
      <div className="flex flex-col p-4 flex-1">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
        <p className="dark:text-gray-400 text-gray-600">{formattedDate}</p>
        <p className="dark:text-gray-400 text-gray-600 mt-2 flex-grow">{content.length > 50 ? `${content.slice(0, 50)}...` : content}</p>
        <div className="mt-2 flex items-center justify-between dark:text-gray-100 text-gray-700 hover:underline border dark:border-gray-600 border-gray-300 rounded-2xl px-4 py-1 font-bold">
          <span>Baca Selengkapnya</span>
          <ChevronRightIcon className="w-4 h-4"/>
        </div>
      </div>
    </Link>
  );
};

export default Post;

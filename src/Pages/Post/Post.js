import React from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../Utils/postService';

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
      <div className="flex-1 p-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
        <p className="text-gray-500 dark:text-gray-600">{formattedDate}</p>
        <p className="text-gray-400 mt-2">{content.length > 100 ? `${content.slice(0, 100)}...` : content}</p>
        <span className="block mt-2 text-sky-500">
          Baca Selengkapnya
        </span>
      </div>
    </Link>
  );
};

export default Post;

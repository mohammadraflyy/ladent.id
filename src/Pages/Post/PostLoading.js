import React from 'react';

const PlaceholderPost = () => (
    <div className="animate-pulse dark:bg-gray-800 bg-white flex flex-col sm:flex-row transition duration-300 rounded-lg overflow-hidden shadow-lg">
      <div className="md:rounded-l-lg w-full sm:w-48 h-48 object-cover mr-4 p-2 dark:bg-gray-600 bg-gray-300"></div>
      <div className="flex-1 p-4">
        <div className="h-6 dark:bg-gray-600 bg-gray-300 py-2 my-2 rounded"></div>
        <div className="h-4 w-1/4 dark:bg-gray-600 bg-gray-300 py-2 my-2 rounded"></div>
        <div className="h-10 dark:bg-gray-600 bg-gray-300 py-2 my-2 rounded"></div>
        <div className="h-6 dark:bg-gray-600 bg-gray-300 py-2 my-2 rounded"></div>
      </div>
    </div>
);

const PostLoading = () => {
  const placeholderCount = 6;

  return (
    <div className="grid grid-cols-1 gap-4 mb-10">
      {Array.from({ length: placeholderCount }).map((_, index) => (
        <div className="w-full" key={index}>
          <PlaceholderPost />
        </div>
      ))}
    </div>
  );
};

export default PostLoading;

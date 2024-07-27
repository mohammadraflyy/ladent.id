import React from 'react';

const PlaceholderPost = () => (
    <div className="animate-pulse bg-gray-800 flex items-start transition duration-300">
      <div className="w-32 h-32 object-cover mr-4 p-2 bg-gray-600"></div>
      <div className="flex-1 p-4">
        <div className="h-4 bg-gray-600 py-2 my-2 rounded"></div>
        <div className="h-4 bg-gray-600 py-2 my-2 rounded"></div>
        <div className="h-4 bg-gray-600 py-2 my-2 rounded"></div>
      </div>
    </div>
);

const PostLoading = () => {
  const placeholderCount = 8;

  return (
    <div className="grid xl:grid-cols-12 gap-4">
      {Array.from({ length: placeholderCount }).map((_, index) => (
        <div className="xl:col-span-6" key={index}>
          <PlaceholderPost />
        </div>
      ))}
    </div>
  );
};

export default PostLoading;

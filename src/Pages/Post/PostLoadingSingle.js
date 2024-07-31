import React from 'react';

const PlaceholderPost = () => {
  const placeholders = Array.from({ length: 3 });

  return (
    <div className="animate-pulse">
      <article className="mx-auto container py-10">
        <div className="w-full dark:bg-gray-600 bg-gray-200 xl:h-[500px] h-32 object-cover mb-6 rounded-lg my-2"></div>
        <div className="h-4 w-64 mb-2 dark:bg-gray-500 bg-gray-800 my-2 rounded-lg"></div>
        <div className="h-4 w-24 mb-4 dark:bg-gray-500 bg-gray-300 my-2 rounded-lg"></div>
        <div className="h-96 md:h-32 prose prose-lg max-w-none dark:bg-gray-600 bg-gray-200 my-2 rounded-lg"></div>
      </article>
      <div className="mx-auto container">
        <div className="text-gray-100 font-bold text-2xl">Rekomendasi</div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-5">
          {placeholders.map((_, index) => (
            <div key={index} className="w-full dark:bg-gray-800 bg-white hover:bg-gray-700 transition duration-300 rounded-lg overflow-hidden">
              <div className="flex flex-col">
                <div className="w-full h-48 dark:bg-gray-600 bg-gray-200"></div>
                <div className="flex flex-col p-4">
                  <div className="h-4 w-20 dark:bg-gray-500 bg-gray-200 rounded-lg mb-2"></div>
                  <div className="h-4 w-10 dark:bg-gray-500 bg-gray-200 rounded-lg"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PostLoadingSingle = () => {
  return (
    <PlaceholderPost />
  );
};

export default PostLoadingSingle;

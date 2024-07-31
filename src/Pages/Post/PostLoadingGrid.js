import React from 'react';

const PostLoadingGrid = () => {
    return (
      <div className="animate-pulse grid grid-cols-1 gap-4 mb-10">
        <div className="dark:bg-gray-800 relative h-[250px] md:h-[500px] flex justify-center items-center rounded-lg overflow-hidden shadow-lg">
          <div className="absolute inset-0 flex items-end justify-center p-4">
            <div className="text-white text-lg m-5 h-8 w-full rounded-lg px-2 dark:bg-gray-600 bg-gray-300"></div>
          </div>
        </div>
      </div>
    );
};

export default PostLoadingGrid;

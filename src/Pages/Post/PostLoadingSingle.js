import React from 'react';

const PlaceholderPost = () => (
    <article className="animate-pulse mx-auto container py-10">
        <div className="w-full bg-gray-600 xl:h-[500px] h-32 object-cover mb-6 rounded-lg my-2"></div>
        <div className="h-4 w-20 mb-2 bg-gray-500 my-2 rounded-lg"></div>
        <div className="h-4 w-10 mb-4 bg-gray-500 my-2 rounded-lg"></div>
        <div className="h-96 md:h-32 prose prose-lg max-w-none bg-gray-600 my-2 rounded-lg"></div>
    </article>
);

const PostLoadingSingle = () => {
  return (
    <PlaceholderPost />
  );
};

export default PostLoadingSingle;

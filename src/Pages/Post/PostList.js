import React, { useState } from 'react';
import Post from './Post';

const PostList = ({ posts }) => {
  const [visiblePosts, setVisiblePosts] = useState(5);

  const loadMore = () => {
    setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 5);
  };

  const currentPosts = posts.data.slice(0, visiblePosts);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-4 mb-10">
        {currentPosts.map((post, index) => (
          <div key={index} className="w-full">
            <Post
              title={post.title}
              content={post.content}
              created_at={post.created_at}
              image={post.image}
              slug={post.slug}
            />
          </div>
        ))}
      </div>
      {visiblePosts < posts.data.length && (
        <div className="flex justify-center mb-10">
          <button
            onClick={loadMore}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-xl"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default PostList;

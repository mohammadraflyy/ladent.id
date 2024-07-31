import React from 'react';
import Post from './Post';

const PostList = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 gap-4 mb-10">
      {posts.data.slice(3).map((post, index) => (
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
  );
};

export default PostList;

import React from 'react';
import Post from './Post';

const PostList = ({ posts }) => {
  return (
    <div class="grid xl:grid-cols-12 gap-4">
        {posts.data.map((post, index) => (
          <div className="xl:col-span-6">
            <Post
              key={index}
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
import React from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../Utils/postService';

const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const PostRecommended = ({ posts }) => {
  if (!Array.isArray(posts) || posts.length === 0) {
    return (
      <div className="mx-auto container bg-gray-900 text-white rounded-lg py-10">
        <p className="text-center text-white">No recommended posts available.</p>
      </div>
    );
  }

  const limitedPosts = shuffleArray(posts).slice(0, 3);

  limitedPosts.forEach(post => {
    if (post.image) {
      const img = new Image();
      img.src = `${API_BASE_URL}/storage/posts/${post.image}`;
    }
  });

  return (
    <div className="mx-auto container">
      <div className="dark:text-gray-100 text-gray-800 font-bold text-2xl">Rekomendasi</div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-5">
        {limitedPosts.map((post) => {
          const formattedDate = new Date(post.created_at).toLocaleDateString();
          return (
            <div key={post.id} className="w-full dark:bg-gray-800 bg-white shadow-lg dark:hover:bg-gray-700 hover:bg-gray-200 transition duration-300 rounded-lg overflow-hidden">
              <Link to={`/posts/${post.slug}`} className="flex flex-col">
                {post.image && (
                  <img
                    src={`${API_BASE_URL}/storage/posts/${post.image}`}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    loading="eager"
                  />
                )}
                <div className="flex flex-col p-4">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">{post.title}</h2>
                  <p className="text-gray-500 dark:text-gray-600">{formattedDate}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostRecommended;

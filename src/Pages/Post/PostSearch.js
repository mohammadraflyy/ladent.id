import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchSearchPost } from '../../Utils/postService'; 
import AppLayouts from '../../Layouts/AppLayouts';
import Post from './Post';
import PostLoading from './PostLoading';

const PostSearch = () => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [queries, setQueries] = useState();
  const location = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const queryParams = new URLSearchParams(location.search);
      const query = queryParams.get('query') || '';
      setQueries(query)

      setLoading(true);
      setError(null);

      try {
        const posts = await fetchSearchPost(query);
        setFilteredPosts(posts);
      } catch (error) {
        setError(error.message);
        setFilteredPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [location.search]);

  return (
    <AppLayouts title={null}>
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4 text-white">Search Results: <span className="text-gray-400">{queries}</span></h1>
            {loading && <PostLoading /> }
            {error && <p className="text-red-500">Error: {error}</p>}
            {filteredPosts.length === 0 && !loading && !error && (
                <p className="text-gray-400">No results found for your query.</p>
            )}
            {filteredPosts.length > 0 && (
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                {filteredPosts.map((post, index) => (
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
            )}
        </div>
    </AppLayouts>
  );
};

export default PostSearch;

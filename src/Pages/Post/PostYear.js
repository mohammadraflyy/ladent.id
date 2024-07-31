import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPostByYear } from '../../Utils/postService'; 
import AppLayouts from '../../Layouts/AppLayouts';
import Post from './Post';
import PostLoading from './PostLoading';

const PostYear = () => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { year } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const posts = await fetchPostByYear(year);
        setFilteredPosts(posts);
      } catch (error) {
        setFilteredPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [year]);

  return (
    <AppLayouts title={null}>
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4 dark:text-white text-gray-700">Results from year: <span className="text-gray-400">{year}</span></h1>
            {loading && <PostLoading /> }
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
        </div>
    </AppLayouts>
  );
};

export default PostYear;

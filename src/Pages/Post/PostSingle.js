import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_BASE_URL, fetchAllPosts, fetchPostBySlug } from '../../Utils/postService';
import AppLayouts from '../../Layouts/AppLayouts';
import PostLoadingSingle from './PostLoadingSingle';
import PostRecommended from './PostRecommended';

const PostSingle = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [postRecommended, setPostRecommended] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) {
      setError("Slug parameter is missing");
      setLoading(false);
      return;
    }

    const fetchPost = async () => {
      try {
        const response = await fetchPostBySlug(slug);
        if (response.data) {
          setPost(response.data);
        } else {
          setError("Post not found");
        }
      } catch (err) {
        setError(err.message || "An unexpected error occurred");
      }
    };

    const fetchRecommended = async () => {
      try {
        const response = await fetchAllPosts();
        setPostRecommended(response.data || []);
      } catch (err) {
        console.error(err.message || "An error occurred while fetching recommended posts.");
      }
    };

    fetchPost();
    fetchRecommended();
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <AppLayouts title={null}>
        <PostLoadingSingle />
      </AppLayouts>
    );
  }

  if (error) {
    return (
      <AppLayouts title={null}>
        <div className="mx-auto container bg-gray-900 text-white rounded-lg py-10">
          <p className="text-center text-red-500">Error: {error}</p>
        </div>
      </AppLayouts>
    );
  }

  if (!post) {
    return (
      <AppLayouts title={null}>
        <PostLoadingSingle />
      </AppLayouts>
    );
  }

  const { title, content, created_at, image, author } = post;
  const formattedDate = new Date(created_at).toLocaleDateString();

  return (
    <AppLayouts title={null}>
      <article className="mx-auto container bg-gray-900 text-white rounded-lg py-10">
        {image && (
          <img
            src={`${API_BASE_URL}/storage/posts/${image}`}
            alt={title}
            className="w-full xl:h-[500px] h-96 object-cover mb-6 rounded-lg"
          />
        )}
        <header className="mb-6">
          <h1 className="text-4xl font-extrabold mb-2">{title}</h1>
          <p className="text-gray-400 text-sm mb-4">
            {formattedDate} {author && `• By ${author}`}
          </p>
        </header>
        <div className="prose prose-lg max-w-none">
          <p>{content}</p>
        </div>
      </article>
      <PostRecommended posts={postRecommended}/>
    </AppLayouts>
  );
};

export default PostSingle;

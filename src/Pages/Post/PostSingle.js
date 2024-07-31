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
    const fetchData = async () => {
      if (!slug) {
        setError("Slug parameter is missing");
        setLoading(false);
        return;
      }

      try {
        const postResponse = await fetchPostBySlug(slug);
        if (postResponse.data) {
          setPost(postResponse.data);

          if (postResponse.data.image) {
            const img = new Image();
            img.src = `${API_BASE_URL}/storage/posts/${postResponse.data.image}`;
          }
        } else {
          setError("Post not found");
        }

        const recommendedResponse = await fetchAllPosts();
        setPostRecommended(recommendedResponse.data || []);
      } catch (err) {
        setError(err.message || "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
        <div className="mx-auto container dark:bg-gray-900 bg-gray-100 text-white rounded-lg py-10">
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
  const imageUrl = image ? `${API_BASE_URL}/storage/posts/${image}` : '';

  return (
    <AppLayouts title={null}>
      <article className="mx-auto container dark:bg-gray-900 bg-gray-100 dark:text-white text-gray-800 rounded-lg py-10">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="w-full xl:h-[500px] h-96 object-cover mb-6 rounded-lg"
            loading="eager"
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
      <PostRecommended posts={postRecommended} />
    </AppLayouts>
  );
};

export default PostSingle;

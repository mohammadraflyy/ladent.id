import React, { useState, useEffect } from 'react';
import '../App.css';
import AppLayouts from '../Layouts/AppLayouts';
import PostList from './Post/PostList';
import { fetchAllPosts } from '../Utils/postService';
import PostLoading from './Post/PostLoading';

function Home() {
    const [posts, setPosts] = useState([]);
    const [postCountByYear, setPostCountByYear] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const fetchedPosts = await fetchAllPosts();
                setPosts(fetchedPosts);

                const countByYear = fetchedPosts.data.reduce((acc, post) => {
                    const year = new Date(post.created_at).getFullYear();
                    acc[year] = (acc[year] || 0) + 1;
                    return acc;
                }, {});

                setPostCountByYear(countByYear);
            } catch (error) {
                setError("Failed to fetch posts.");
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <AppLayouts title="Home" postCountByYear={postCountByYear}>
            {loading ? (
                <PostLoading />
            ) : error ? (
                <p>{error}</p>
            ) : (
                <PostList posts={posts} />
            )}
        </AppLayouts>
    );
}

export default Home;

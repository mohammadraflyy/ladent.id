import React, { useState, useEffect } from 'react';
import '../App.css';
import AppLayouts from '../Layouts/AppLayouts';
import PostList from './Post/PostList';
import { fetchAllPosts } from '../Utils/postService';
import PostLoading from './Post/PostLoading';
import SEO from '../Components/SEO';
import PostGrid from './Post/PostGrid';
import PostLoadingGrid from './Post/PostLoadingGrid';

function Home() {
    const [posts, setPosts] = useState([]);
    const [postCountByYear, setPostCountByYear] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const title = 'Home';

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
        <AppLayouts title={title} postCountByYear={postCountByYear}>
            <SEO title={title} description='Home page for ladent.id' />
            {loading ? (
                <>
                    <PostLoadingGrid />
                    <PostLoading />
                </>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <>
                    <PostGrid posts={posts} />
                    <PostList posts={posts} />
                </>
            )}
        </AppLayouts>
    );
}

export default Home;

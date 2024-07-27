import React, { useState, useEffect } from 'react';
import '../App.css';
import Navbar from './Partials/Navbar';
import Footer from './Partials/Footer';
import Sidebar from './Partials/Sidebar';
import { fetchAllPosts } from '../Utils/postService';

function AppLayouts({ title, children, postCountByYear }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        document.title = `LADENT ENTERTAINMENT | ${title}`;
        const fetchPosts = async () => {
            try {
                const fetchedPosts = await fetchAllPosts();
                setPosts(fetchedPosts);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPosts();
    }, [title]);

    return (
        <main className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
            <Navbar title="LADENT ENTERTAINMENT" />
            {title != null && (
                <div className="px-10 py-2 md:px-20 md:py-5">
                    <div className="md:px-5 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        {title}
                    </div>
                </div>
            )}
            <div className="flex-grow flex flex-col md:flex-row md:px-20 px-10">
                <div className="flex-grow md:px-5">
                    {children}
                </div>
                {title === "Home" && (
                    <div className="md:px-5 md:mt-0">
                        <Sidebar postCountByYear={postCountByYear} posts={posts} />
                    </div>
                )}
            </div>
            <Footer title="LADENT ENTERTAINMENT" />
        </main>
    );
}

export default AppLayouts;

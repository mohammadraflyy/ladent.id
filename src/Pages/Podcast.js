import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import AppLayouts from '../Layouts/AppLayouts';

const YOUTUBE_API_KEY = 'AIzaSyAqd_I8T49tFT13I7WXh6cinFhMMpimZWc';
const CHANNEL_ID = 'UCR5KBvywfC1NKfIPPN3pGsw';
const MAX_RESULTS = 50; 

function Podcast() {
    const [filteredVideos, setFilteredVideos] = useState([]);
    const [category, setCategory] = useState('All');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isCategoryLoading, setIsCategoryLoading] = useState(false);

    const fetchYouTubeVideos = useCallback(async (selectedCategory) => {
        setLoading(true);
        let allVideos = [];
        let nextPageToken = '';
        try {
            do {
                const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
                    params: {
                        part: 'snippet',
                        channelId: CHANNEL_ID,
                        maxResults: MAX_RESULTS,
                        order: 'date',
                        type: 'video',
                        key: YOUTUBE_API_KEY,
                        pageToken: nextPageToken,
                        q: selectedCategory === 'All' ? '' : selectedCategory,
                    },
                }, []);

                const fetchedVideos = response.data.items.filter(video => !video.snippet.title.includes('#short'));
                allVideos = [...allVideos, ...fetchedVideos];
                nextPageToken = response.data.nextPageToken || '';
            } while (nextPageToken);

            setFilteredVideos(filterVideosByCategory(allVideos, selectedCategory));
        } catch (err) {
            if (err.response?.status === 403) {
                setError('Kuota harian terlampaui. Silakan coba lagi besok.');
            } else {
                setError('Gagal mengambil video. Silakan coba lagi nanti.');
            }
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchYouTubeVideos(category);
    }, [category, fetchYouTubeVideos]);

    const filterVideosByCategory = (videos, selectedCategory) => {
        if (selectedCategory === 'All') return videos.filter(video => !video.snippet.title.includes('Ladon Entertainment'));
        if (selectedCategory === 'PoTW') return videos.filter(video => video.snippet.title.includes('PoTW'));
        if (selectedCategory === 'Sam Hendy') return videos.filter(video => video.snippet.title.includes('Sam Hendy'));
        return videos;
    };

    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);
        setIsCategoryLoading(true);
        setTimeout(() => {
            fetchYouTubeVideos(selectedCategory);
            setIsCategoryLoading(false);
        }, 500);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }).format(date);
    };

    if (loading) {
        return (
            <AppLayouts title="Podcast">
                <motion.div className="text-center py-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    Loading podcasts...
                </motion.div>
            </AppLayouts>
        );
    }

    if (error) {
        return (
            <AppLayouts title="Podcast">
                <div className="text-center py-10 text-red-500">Error: {error}</div>
            </AppLayouts>
        );
    }

    return (
        <AppLayouts title="Podcast">
            <div className="max-w-4xl mx-auto md:p-10 dark:bg-gray-900 bg-gray-100 my-5 md:dark:bg-gray-800 md:bg-white mb-10 rounded-xl">
                <div className="p-5">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                        Podcast
                    </h2>

                    {/* Category Selector */}
                    <div className="flex justify-center mb-6">
                        {['All', 'PoTW', 'Sam Hendy'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleCategoryChange(cat)}
                                className={`px-4 py-2 ${
                                    category === cat ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100'
                                } ${cat === 'All' ? 'rounded-l-md' : cat === 'Sam Hendy' ? 'rounded-r-md' : ''}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Videos Count */}
                    <div className="text-center mb-4">
                        <p className="text-lg text-gray-800 dark:text-gray-100">
                            Showing {filteredVideos.length} videos
                        </p>
                    </div>

                    {/* Videos Grid */}
                    {isCategoryLoading ? (
                        <motion.div className="text-center py-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            Switching category...
                        </motion.div>
                    ) : (
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            {filteredVideos.map((video) => (
                                <motion.div
                                    key={video.id.videoId}
                                    className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
                                    initial={{ scale: 0.95 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="aspect-w-16 aspect-h-9">
                                        <iframe
                                            className="w-full h-full"
                                            src={`https://www.youtube.com/embed/${video.id.videoId}`}
                                            title={video.snippet.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                            {video.snippet.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                            {video.snippet.description}
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                            Published on: {formatDate(video.snippet.publishedAt)}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </div>
        </AppLayouts>
    );
}

export default Podcast;
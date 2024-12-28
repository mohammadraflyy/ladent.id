import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import AppLayouts from '../Layouts/AppLayouts';

const YOUTUBE_API_KEY = 'AIzaSyAqd_I8T49tFT13I7WXh6cinFhMMpimZWc';
const CHANNEL_ID = 'UCR5KBvywfC1NKfIPPN3pGsw';
const MAX_RESULTS = 5;

function Podcast() {
    const [videos, setVideos] = useState([]);
    const [filteredVideos, setFilteredVideos] = useState([]);
    const [category, setCategory] = useState('All');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isCategoryLoading, setIsCategoryLoading] = useState(false);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [prevPageToken, setPrevPageToken] = useState(null);

    const fetchYouTubeVideos = async (pageToken = '') => {
        setLoading(true);
        try {
            const response = await axios.get(
                `https://www.googleapis.com/youtube/v3/search`,
                {
                    params: {
                        part: 'snippet',
                        channelId: CHANNEL_ID,
                        maxResults: MAX_RESULTS,
                        order: 'date',
                        type: 'video',
                        key: YOUTUBE_API_KEY,
                        pageToken: pageToken,
                    },
                }
            );
            console.log(response);
            const fetchedVideos = response.data.items.filter(video => !video.snippet.title.includes('#short'));
            setVideos(fetchedVideos);
            console.log(fetchedVideos);
            setFilteredVideos(fetchedVideos);
            setNextPageToken(response.data.nextPageToken || null);
            setPrevPageToken(response.data.prevPageToken || null);
        } catch (err) {
            if (err.response.status === 403) {
                setError('Kuota harian terlampaui. Silakan coba lagi besok.');
            } else {
                setError('Gagal mengambil video. Silakan coba lagi nanti.');
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchYouTubeVideos();
    }, []);

    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);
        setIsCategoryLoading(true);
        setTimeout(() => {
            if (selectedCategory === 'All') {
                setFilteredVideos(videos);
            } else if (selectedCategory === 'PoTW') {
                setFilteredVideos(videos.filter((video) =>
                    video.snippet.title.includes('PoTW')
                ));
            } else if (selectedCategory === 'Sam Hendy') {
                setFilteredVideos(videos.filter((video) =>
                    video.snippet.title.includes('Sam Hendy')
                ));
            }
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
                <motion.div
                    className="text-center py-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    Loading podcasts...
                </motion.div>
            </AppLayouts>
        );
    }

    if (error) {
        return (
            <AppLayouts title="">
                <div className="text-center py-10 text-red-500">Error: {error}</div>
            </AppLayouts>
        );
    }

    return (
        <AppLayouts title="">
            <div className="max-w-4xl mx-auto md:p-10 dark:bg-gray-900 bg-gray-100 my-5 md:dark:bg-gray-800 md:bg-white mb-10 rounded-xl">
                <div className="p-5">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                        Podcast
                    </h2>

                    {/* Category Selector */}
                    <div className="flex justify-center mb-6">
                        <button
                            onClick={() => handleCategoryChange('All')}
                            className={`px-4 py-2 rounded-l-md ${category === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100'}`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => handleCategoryChange('PoTW')}
                            className={`px-4 py-2 ${category === 'PoTW' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100'}`}
                        >
                            PoTW
                        </button>
                        <button
                            onClick={() => handleCategoryChange('Sam Hendy')}
                            className={`px-4 py-2 rounded-r-md ${category === 'Sam Hendy' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100'}`}
                        >
                            Sam Hendy
                        </button>
                    </div>

                    {/* Videos Count */}
                    <div className="text-center mb-4">
                        <p className="text-lg text-gray-800 dark:text-gray-100">
                            Showing {filteredVideos.length} videos
                        </p>
                    </div>

                    {/* Videos Grid */}
                    {isCategoryLoading ? (
                        <motion.div
                            className="text-center py-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
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

                    {/* Pagination Controls */}
                    <div className="flex justify-between mt-6">
                        {prevPageToken && (
                            <button
                                onClick={() => fetchYouTubeVideos(prevPageToken)}
                                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-md"
                            >
                                Previous
                            </button>
                        )}
                        {nextPageToken && (
                            <button
                                onClick={() => fetchYouTubeVideos(nextPageToken)}
                                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-md"
                            >
                                Next
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </AppLayouts>
    );
}

export default Podcast;
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AppLayouts from '../Layouts/AppLayouts';
import { fetchAllPodcasts } from '../Utils/podcastService';

function Podcast() {
    const [podcasts, setPodcasts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        const loadPodcasts = async () => {
            try {
                const data = await fetchAllPodcasts();
                setPodcasts(data.data || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadPodcasts();
    }, []);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = podcasts.slice(startIndex, startIndex + itemsPerPage);

    const totalPages = Math.ceil(podcasts.length / itemsPerPage);

    const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    if (loading) {
        return (
            <AppLayouts title="Podcast">
                <div className="flex justify-center items-center h-screen">
                    <motion.div
                        className="w-16 h-16 border-4 border-t-transparent border-gray-800 dark:border-gray-100 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    />
                </div>
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
                    {currentItems.length === 0 ? (
                        <p className="text-center text-gray-600 dark:text-gray-400">
                            No podcasts available at the moment.
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            {currentItems.map((podcast) => (
                                <div
                                    key={podcast.id}
                                    className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
                                >
                                    <div className="aspect-w-16 aspect-h-9">
                                        <iframe
                                            className="w-full h-full"
                                            src={podcast.link}
                                            title={podcast.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                            {podcast.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                            {podcast.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                {totalPages > 1 && (
                    <div className="flex justify-between items-center mt-6">
                        <button
                            className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
                            disabled={currentPage === 1}
                            onClick={handlePrevious}
                        >
                            Previous
                        </button>
                        <span className="text-gray-600 dark:text-gray-400">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
                            disabled={currentPage === totalPages}
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </AppLayouts>
    );
}

export default Podcast;

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function UnderConstruction() {
    useEffect(() => {
        document.title = 'Under Construction';
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-2xl w-full text-center">
                <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                    Site Under Construction
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                    We are working hard to bring you a new experience. Stay tuned!
                </p>
                <div className="flex items-center justify-center mb-8">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-8 h-8 mx-auto text-gray-700 dark:text-gray-300 animate-pulse"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                            />
                        </svg>
                    </div>
                </div>
                <Link to="/home" className="inline-block px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 transition">
                    Back to Home
                </Link>
            </div>
        </main>
    );
}

export default UnderConstruction;

import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../App.css';

function NoMatch() {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(Boolean);

    useEffect(() => {
        document.title = '404 Not Found';
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-2xl w-full text-center">
                <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                    Whoopsie! Page not found.
                </h1>
                <p className="text-lg text-gray-400 mb-8">
                    Are you sure you're trying to find the page for: 
                    <strong> {pathSegments.join(' / ')}</strong>?
                </p>
                <div className="flex items-center justify-center mb-8">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 mx-auto text-gray-700 dark:text-gray-300 animate-pulse">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
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

export default NoMatch;

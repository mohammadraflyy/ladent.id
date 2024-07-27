import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { initializeStars, drawStars } from '../Utils/starsUtils';
import '../App.css';

function LandingPage() {
    const canvasRef = useRef(null);

    useEffect(() => {
        document.title = 'LADENT ENTERTAINMENT';
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const stars = initializeStars(canvas);

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        drawStars(ctx, stars, canvas);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100 dark:bg-gray-900">
            <canvas ref={canvasRef} className="absolute top-0 left-0 z-0" />
            <div className="relative max-w-2xl w-full text-center">
                <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                    LADENT ENTERTAINMENT
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                    EVENT MANAGEMENT | MEDIA PLANNER | BRAND ACTIVATION | PRODUCTION
                </p>
                <div className="flex items-center justify-center">
                    <Link
                        to="home"
                        className="animate-pulse px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                        Enter
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default LandingPage;
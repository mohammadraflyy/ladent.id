import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { initializeStars, drawStars } from '../Utils/starsUtils';
import '../App.css';
import SEO from '../Components/SEO';

function LandingPage() {
    const canvasRef = useRef(null);
    const title = 'Landing Page';

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
        <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-4 sm:p-6 md:p-8 lg:p-24 bg-gray-100 dark:bg-gray-900">
            <SEO title={title} description='Landing page for ladent.id' />
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
            <div className="relative w-full text-center z-10">
                <img
                    src="/logo.webp"
                    alt="LADENT ENTERTAINMENT Logo"
                    className="mb-4 mx-auto py-6 sm:py-8 lg:py-10"
                    width={200}
                    height={200}
                    style={{ objectFit: 'contain' }}
                />
                <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">
                    <span className="w-full sm:w-auto">EVENT MANAGEMENT</span>
                    <span className="hidden md:block border-l border-gray-300 mx-2 h-6 md:h-auto" />
                    <span className="w-full sm:w-auto">MEDIA PLANNER</span>
                    <span className="hidden md:block border-l border-gray-300 mx-2 h-6 md:h-auto" />
                    <span className="w-full sm:w-auto">BRAND ACTIVATION</span>
                    <span className="hidden md:block border-l border-gray-300 mx-2 h-6 md:h-auto" />
                    <span className="w-full sm:w-auto">PRODUCTION</span>
                </div>
                <div className="flex items-center justify-center">
                    <Link
                        to="home"
                        className="animate-pulse px-4 py-2 font-bold text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                        ENTER
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default LandingPage;

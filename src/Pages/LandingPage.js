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

        const updateCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const stars = initializeStars(canvas);
            drawStars(ctx, stars, canvas);
        };

        updateCanvasSize();

        window.addEventListener('resize', updateCanvasSize);

        return () => {
            window.removeEventListener('resize', updateCanvasSize);
        };
    }, []);

    return (
        <div className="relative flex flex-col min-h-screen bg-space-gradient animate-space-animation">
            <SEO title={title} description='Landing page for ladent.id' />
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
            <main className="flex-grow flex flex-col items-center justify-center relative z-10 p-4 sm:p-6 md:p-8 lg:p-24">
                <div className="w-full text-center">
                    <img
                        src="/logo.webp"
                        alt="LADENT ENTERTAINMENT Logo"
                        className="mb-4 mx-auto py-6 sm:py-8 lg:py-10"
                        width={250}
                        height={250}
                        style={{ objectFit: 'contain' }}
                    />
                    <div className="flex items-center justify-center mb-8">
                        <Link
                            to="home"
                            className="animate-pulse px-4 py-2 font-bold text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        >
                            ENTER
                        </Link>
                    </div>
                </div>
            </main>
            <footer className="relative w-full text-center z-10 p-4 bg-transparent mb-20">
                <div className="flex flex-wrap font-semibold justify-center gap-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-400">
                    <span className="w-full sm:w-auto">EVENT MANAGEMENT</span>
                    <span className="hidden md:block border-l border-gray-300 mx-2 h-6 md:h-auto" />
                    <span className="w-full sm:w-auto">MEDIA PLANNER</span>
                    <span className="hidden md:block border-l border-gray-300 mx-2 h-6 md:h-auto" />
                    <span className="w-full sm:w-auto">BRAND ACTIVATION</span>
                    <span className="hidden md:block border-l border-gray-300 mx-2 h-6 md:h-auto" />
                    <span className="w-full sm:w-auto">PRODUCTION</span>
                </div>
                <div className="mt-5 font-light text-gray-400">
                    Ladon Entertainment © 2024 All Right Reserved
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;

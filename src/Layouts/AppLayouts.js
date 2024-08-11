import React, { useEffect } from 'react';
import Navbar from './Partials/Navbar';
import Footer from './Partials/Footer';
import '../App.css';

function AppLayouts({ title, children }) {

    useEffect(() => {
        if (title) {
            document.title = `LADON ENTERTAINMENT | ${title}`;
        } else {
            document.title = 'LADON ENTERTAINMENT';
        }
    }, [title]);

    return (
        <main className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
            <Navbar title="LADON ENTERTAINMENT" />
            {title && title !== 'Home' && (
                <div className={`px-10 md:px-20 md:py-5`}>
                    <div className="md:px-5 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        {title}
                    </div>
                </div>
            )}
            <div className={`flex-grow flex flex-col xl:flex-row ${title !== 'Home' ? 'px-5 md:px-20' : 'md:px-0'}`}>
                <div className="flex-grow">
                    {children}
                </div>
            </div>
            <Footer title="LADON ENTERTAINMENT" />
        </main>
    );
}

export default AppLayouts;

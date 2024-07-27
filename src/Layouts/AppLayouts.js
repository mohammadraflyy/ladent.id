import React, { useEffect } from 'react';
import '../App.css';
import Navbar from './Partials/Navbar';

function AppLayouts({title, children}) {
    useEffect(() => {
        document.title = `LADENT ENTERTAINMENT | ${title}`;
    }, [title]);

    return (
        <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Navbar title="LADENT"/>
            <div className="flex-col items-center justify-center p-5">
                <div className="px-20">
                    {children}
                </div>
            </div>
        </main>
    );
}

export default AppLayouts;
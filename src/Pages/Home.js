import React from 'react';
import '../App.css';
import AppLayouts from '../Layouts/AppLayouts';

function Home() {
    return (
        <AppLayouts title="Home">
            <div className="text-3xl font-bold text-gray-900 dark:text-white">Home</div>
        </AppLayouts>
    );
}

export default Home;

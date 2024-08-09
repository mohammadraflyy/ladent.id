import React from 'react';
import '../../App.css';
import AppLayouts from '../../Layouts/AppLayouts';

function Production() {
    return (
        <AppLayouts title={null}>
            <div className="py-8">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-down">
                    Production Services
                </h1>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 animate-fade-in-left">
                        Overview
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 animate-fade-in-up">
                        Our production services encompass a wide range of offerings designed to bring your vision to life. From concept development to final execution, we handle all aspects of production to ensure a seamless and high-quality result.
                    </p>
                </section>
            </div>
        </AppLayouts>
    );
}

export default Production;

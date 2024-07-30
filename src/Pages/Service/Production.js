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
                    <img 
                        src="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=800&q=80" 
                        alt="Production Overview"
                        className="w-full h-auto mt-6 rounded-lg shadow-md animate-fade-in"
                    />
                </section>
                
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 animate-fade-in-left">
                        Types of Production Services Offered
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 animate-fade-in-up">
                        We specialize in various types of production, including:
                    </p>
                    <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 mt-4 animate-fade-in">
                        <li>Film and Video Production</li>
                        <li>Commercials and Advertisements</li>
                        <li>Music Videos</li>
                        <li>Corporate Videos</li>
                        <li>Documentaries</li>
                    </ul>
                </section>
                
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 animate-fade-in-left">
                        Our Production Process
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 animate-fade-in-up">
                        We follow a comprehensive production process to ensure that every project meets our high standards of quality:
                    </p>
                    <ol className="list-decimal list-inside text-lg text-gray-700 dark:text-gray-300 mt-4 animate-fade-in">
                        <li>Initial Consultation and Concept Development</li>
                        <li>Pre-Production Planning and Scheduling</li>
                        <li>On-Site Production and Filming</li>
                        <li>Post-Production Editing and Review</li>
                        <li>Final Delivery and Distribution</li>
                    </ol>
                </section>
                
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 animate-fade-in-left">
                        Past Projects
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 animate-fade-in-up">
                        Our portfolio showcases a diverse range of projects across various industries. From small-scale productions to large commercial projects, we have the expertise and resources to deliver exceptional results. Check out our past projects to see examples of our work and how we can help bring your ideas to life.
                    </p>
                    <img 
                        src="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=800&q=80" 
                        alt="Past Projects"
                        className="w-full h-auto mt-6 rounded-lg shadow-md animate-fade-in"
                    />
                </section>
                
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 animate-fade-in-left">
                        Call to Action
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 animate-fade-in-up">
                        Ready to start your next production project? Contact us today to discuss your ideas and how we can assist in making them a reality. Our team is here to help you every step of the way.
                    </p>
                    <div className="mt-6 animate-bounce">
                        <a href="/contact" className="inline-block bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
                            Get in Touch
                        </a>
                    </div>
                </section>
            </div>
        </AppLayouts>
    );
}

export default Production;

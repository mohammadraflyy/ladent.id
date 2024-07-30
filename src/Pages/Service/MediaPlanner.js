import React from 'react';
import '../../App.css';
import AppLayouts from '../../Layouts/AppLayouts';

function MediaPlanner() {
    return (
        <AppLayouts title={null}>
            <div className="py-8">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Media Planner</h1>
                
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Overview</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                        Our Media Planner service helps businesses and organizations effectively reach their target audience through strategic media placement and advertising. We analyze market trends, audience demographics, and media performance to craft optimized media plans.
                    </p>
                </section>
                
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Services Offered</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                        Our comprehensive media planning services include:
                    </p>
                    <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 mt-4">
                        <li>Market Research and Analysis</li>
                        <li>Target Audience Identification</li>
                        <li>Media Strategy Development</li>
                        <li>Media Buying and Negotiation</li>
                        <li>Campaign Tracking and Optimization</li>
                    </ul>
                </section>
                
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Why Choose Us?</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                        Our team of experienced media planners is dedicated to ensuring that your message reaches the right people at the right time. We leverage advanced analytics tools and industry insights to maximize your advertising budget and achieve the best possible outcomes.
                    </p>
                </section>
                
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Case Studies / Success Stories</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                        We’ve successfully helped numerous clients across various industries increase their brand visibility and achieve their marketing objectives. Check out our case studies to learn more about our proven track record and how we can help your business grow.
                    </p>
                </section>
                
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Call to Action</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                        Ready to elevate your media strategy? Contact us today to discuss how our Media Planner service can help you reach your goals and make a lasting impact in the market.
                    </p>
                    <div className="mt-6">
                        <a href="/contact" className="inline-block bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
                            Get in Touch
                        </a>
                    </div>
                </section>
            </div>
        </AppLayouts>
    );
}

export default MediaPlanner;

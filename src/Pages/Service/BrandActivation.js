import React from 'react';
import '../../App.css';
import AppLayouts from '../../Layouts/AppLayouts';

function BrandActivation() {
    return (
        <AppLayouts title={null}>
            <div className="py-8">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Brand Activation</h1>
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Introduction</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                        Brand activation is the process of making your brand known to people, increasing awareness and engagement through some kind of brand experience. This process involves creating a specific plan and executing it in a way that directly engages your target audience.
                    </p>
                </section>
                
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Objectives</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                        The primary objectives of brand activation are to create a lasting connection with consumers, increase brand awareness, and ultimately drive sales. This can be achieved through various means, such as experiential marketing, events, product sampling, or digital campaigns.
                    </p>
                </section>
                
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Examples of Brand Activation</h2>
                    <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 mt-4">
                        <li>Hosting interactive events</li>
                        <li>Creating immersive experiences</li>
                        <li>Leveraging influencer partnerships</li>
                        <li>Launching pop-up shops or mobile tours</li>
                    </ul>
                </section>
                
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Benefits</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                        Effective brand activation can lead to increased brand loyalty, greater consumer engagement, and a stronger brand presence in the market. It helps to differentiate your brand from competitors and can result in a more memorable and impactful brand experience for your audience.
                    </p>
                </section>
                
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Call to Action</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                        Ready to take your brand to the next level? Contact us today to learn more about how we can help you create an unforgettable brand activation experience!
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

export default BrandActivation;

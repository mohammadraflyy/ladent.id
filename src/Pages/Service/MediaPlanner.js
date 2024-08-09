import React from 'react';
import '../../App.css';
import AppLayouts from '../../Layouts/AppLayouts';

function MediaPlanner() {
    return (
        <AppLayouts title={null}>
            <div className="py-8 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Media Planner</h1>

                <section className="mb-8 lg:flex lg:items-start lg:space-x-8">
                    <div className="lg:w-1/3">
                        <img
                            src="/assets/images/media-planner.jpg"
                            alt="Media Planner"
                            className="w-full h-auto mb-6 rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="lg:w-2/3">
                        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 md:mt-0">
                            In the rapidly evolving landscape of media and advertising, effective media planning is crucial for ensuring that marketing campaigns reach their intended audience with maximum impact. We offer strategies and methodologies for developing a comprehensive media plan tailored to our client's needs. We identify the target audience, select appropriate media channels, optimize media budget allocation, maximize return on investment (ROI), and track and analyze campaign performance.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                            Understanding the target audience is fundamental to media planning, including demographics (age, gender, income, education level, occupation), psychographics (interests, values, lifestyle, attitudes), and behavioral data (purchasing habits, brand loyalty, product usage). We conduct market research through surveys and focus groups, analyze existing customer data and market reports, and utilize social media analytics and digital footprint analysis. By following a comprehensive media planning approach, we aim to create a highly effective advertising campaign that not only reaches the intended audience but also delivers measurable results. Our goal is to ensure the client’s brand achieves maximum visibility and engagement within the allocated budget.
                        </p>
                    </div>
                </section>

            </div>
        </AppLayouts>
    );
}

export default MediaPlanner;

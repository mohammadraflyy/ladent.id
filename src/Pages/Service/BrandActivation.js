import React from 'react';
import '../../App.css';
import AppLayouts from '../../Layouts/AppLayouts';

function BrandActivation() {
    return (
        <AppLayouts title={null}>
            <div className="py-8 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Brand Activation</h1>

                <section className="mb-8 lg:flex lg:items-start lg:space-x-8">
                    <div className="lg:w-1/3">
                        <img
                            src="/assets/images/brand-activation.jpg"
                            alt="Brand Activation"
                            className="w-full h-auto mb-6 rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="lg:w-2/3">
                        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 md:mt-0">
                            We offer a series of marketing activities aimed at driving consumer action through brand interaction and experiences based on demographic and psychographic target audience. Our comprehensive strategy for effectively implementing brand activation is designed to boost brand awareness, engage consumers, and ultimately drive sales. The strategy includes experiential marketing events, influencer collaborations, digital engagement, guerrilla marketing, and more.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                            Brand activation is a powerful strategy to engage consumers and create lasting impressions. By implementing the outlined activities and maintaining a focus on meaningful interactions, we can elevate our brand presence, foster deeper connections with our audience, and drive significant business growth.
                        </p>
                    </div>
                </section>

            </div>
        </AppLayouts>
    );
}

export default BrandActivation;

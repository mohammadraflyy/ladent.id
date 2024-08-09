import React from 'react';
import '../../App.css';
import AppLayouts from '../../Layouts/AppLayouts';

function ArtistManagement() {
    return (
        <AppLayouts title={null}>
            <div className="py-8 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Artist Management</h1>

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
                          Artist management is an essential component of an artist's professional success. By providing guidance, support, and expertise, artist managers help artists achieve their creative and financial goals while allowing them to focus on their passion and talent. Artist management involves representing, guiding, and developing artists' careers across various industries, such as music, film, art, and entertainment. Artist managers, often known as talent managers or agents, play a crucial role in helping artists navigate their professional journeys, handle business affairs, and achieve their creative goals. We manage some key for artist such as Career Development, Business Management, Marketing and Promotion, Booking and Touring, Networking and Relationships, Creative Guidance, Legal and Compliance and Crisis Management.
                        </p>
                    </div>
                </section>

            </div>
        </AppLayouts>
    );
}

export default ArtistManagement;
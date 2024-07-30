import React from 'react';
import '../../App.css';
import AppLayouts from '../../Layouts/AppLayouts';

function EventManagement() {
    return (
        <AppLayouts title={null}>
            <div className="py-8">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Event Management</h1>
                
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Overview</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                        Our event management services provide end-to-end solutions for all your event needs. From planning and logistics to execution and follow-up, we ensure that your event runs smoothly and leaves a lasting impression on your attendees.
                    </p>
                </section>
                
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Types of Events Managed</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                        We specialize in managing a wide variety of events, including:
                    </p>
                    <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 mt-4">
                        <li>Corporate Conferences and Seminars</li>
                        <li>Product Launches</li>
                        <li>Trade Shows and Exhibitions</li>
                        <li>Weddings and Private Parties</li>
                        <li>Music Concerts and Festivals</li>
                    </ul>
                </section>
                
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Services Offered</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                        Our comprehensive event management services include:
                    </p>
                    <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 mt-4">
                        <li>Event Planning and Strategy</li>
                        <li>Venue Selection and Booking</li>
                        <li>Logistics and Coordination</li>
                        <li>On-site Management</li>
                        <li>Post-Event Analysis</li>
                    </ul>
                </section>
                
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Case Studies / Past Events</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                        Our portfolio showcases a range of successful events, from intimate gatherings to large-scale productions. Explore our case studies to see how we’ve helped clients achieve their event goals and created memorable experiences.
                    </p>
                </section>
                
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Call to Action</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
                        Ready to plan your next event? Contact us today to discuss how we can help you create an unforgettable experience for your attendees.
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

export default EventManagement;

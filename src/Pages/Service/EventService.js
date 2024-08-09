import React from 'react';
import '../../App.css';
import AppLayouts from '../../Layouts/AppLayouts';

function EventService() {
    return (
        <AppLayouts title={null}>
            <div className="py-8 px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Event Service</h1>

                <section className="mb-8 lg:flex lg:justify-start">
                    <div className="lg:w-1/2 lg:pr-8">
                        <img
                            src="/assets/images/event-service.jpg"
                            alt="Event Service"
                            className="w-full h-auto mb-6 rounded-lg shadow-lg object-cover"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 md:mt-0">
                            Event services are essential for creating successful and memorable events, whether it's a small gathering or a large-scale conference. They provide a comprehensive suite of services that can be tailored to meet the specific needs and goals of any event, ensuring everything runs smoothly from start to finish. We provide various services to help plan, organize, and manage events such as Event Planning and Service, Venue Selection, Audio-Visual and Technical Support, Decor and Design, Entertainment and Activities, Logistics and Transportation, also Marketing and Promotion. Various events we can do include:
                        </p>
                        <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 mt-4 space-y-2">
                            <li><span className='font-bold'>Corporate Events</span>: Conferences, seminars, product launches, and corporate retreats.</li>
                            <li><span className='font-bold'>Social Events</span>: Weddings, birthday parties, anniversaries, and family reunions.</li>
                            <li><span className='font-bold'>Public Events</span>: Concerts, festivals, and exhibitions.</li>
                            <li><span className='font-bold'>Non-Profit Events</span>: Fundraisers, charity events, and awareness campaigns.</li>
                        </ul>
                    </div>
                </section>
            </div>
        </AppLayouts>
    );
}

export default EventService;

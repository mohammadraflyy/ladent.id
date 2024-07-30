import React, { useState } from 'react';
import '../App.css';
import AppLayouts from '../Layouts/AppLayouts';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon, ChatBubbleBottomCenterIcon, UserCircleIcon } from '@heroicons/react/24/outline';

function Contact() {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        const mailtoLink = `mailto:official@ladent.id?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;
    };

    return (
        <AppLayouts title="Contact">
            <div className="max-w-2xl mx-auto p-10 bg-gray-800 my-20 rounded-xl">
                <h1 className="text-3xl font-bold text-gray-200 mb-6">Contact Information</h1>
                <div className="space-y-4">
                    <div className="flex items-center">
                        <EnvelopeIcon className="w-6 h-6 text-gray-200 mr-3" />
                        <div>
                            <h2 className="text-xl font-semibold text-gray-100">Email</h2>
                            <p className="text-gray-300">official@ladent.id</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <PhoneIcon className="w-6 h-6 text-gray-200 mr-3" />
                        <div>
                            <h2 className="text-xl font-semibold text-gray-100">Phone</h2>
                            <p className="text-gray-300">+1 (555) 123-4567</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <ChatBubbleBottomCenterIcon className="w-6 h-6 text-gray-200 mr-3" />
                        <div>
                            <h2 className="text-xl font-semibold text-gray-100">WhatsApp</h2>
                            <p className="text-gray-300">+1 (555) 987-6543</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <MapPinIcon className="w-6 h-6 text-gray-200 mr-3" />
                        <div>
                            <h2 className="text-xl font-semibold text-gray-100">Address</h2>
                            <p className="text-gray-300">1234 Example St, City, Country, 56789</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <ClockIcon className="w-6 h-6 text-gray-200 mr-3" />
                        <div>
                            <h2 className="text-xl font-semibold text-gray-100">Business Hours</h2>
                            <p className="text-gray-300">Monday - Friday: 9 AM - 5 PM</p>
                            <p className="text-gray-300">Saturday: 10 AM - 2 PM</p>
                            <p className="text-gray-300">Sunday: Closed</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <UserCircleIcon className="w-6 h-6 text-gray-200 mr-3" />
                        <div>
                            <h2 className="text-xl font-semibold text-gray-100">Instagram</h2>
                            <p className="text-gray-300">@ladent_official</p>
                        </div>
                    </div>
                </div>
                
                <div className="border-t my-5 border-gray-500"></div>

                <h1 className="text-3xl font-bold text-gray-200 mb-6">Send Email</h1>
                <div className="mt-8">
                    <div className="mb-4">
                        <label className="block text-gray-200 font-bold mb-2" htmlFor="subject">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="w-full p-2 bg-gray-700 text-gray-200 border border-gray-600 rounded"
                            placeholder="Enter subject"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-200 font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full p-2 bg-gray-700 text-gray-200 border border-gray-600 rounded"
                            placeholder="Enter your message"
                            rows="5"
                        ></textarea>
                    </div>
                    <button
                        onClick={handleSendMessage}
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </AppLayouts>
    );
}

export default Contact;

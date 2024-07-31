import React, { useState } from 'react';
import '../App.css';
import AppLayouts from '../Layouts/AppLayouts';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon, ChatBubbleBottomCenterIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import SEO from '../Components/SEO';

function Contact() {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const title = 'Contact';

    const handleSendMessage = () => {
        const mailtoLink = `mailto:official@ladent.id?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;
    };

    return (
        <AppLayouts title={null}>
            <SEO title={title} description='Contact page for ladent.id' />
            <div className='max-w-2xl mx-auto md:p-10 dark:bg-gray-900 bg-gray-100 my-5 md:dark:bg-gray-800 md:bg-white mb-10 rounded-xl'>
                <h1 className='text-3xl font-bold dark:dark:text-gray-200 text-gray-800 mb-6'>Contact Information</h1>
                <div className='space-y-4'>
                    <div className='flex items-center'>
                        <EnvelopeIcon className='w-6 h-6 dark:text-gray-200 text-gray-800 mr-3' />
                        <div>
                            <h2 className='text-xl font-semibold dark:text-gray-100 text-gray-800'>Email</h2>
                            <p className='dark:text-gray-300 text-gray-600'>official@ladent.id</p>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <PhoneIcon className='w-6 h-6 dark:text-gray-200 text-gray-800 mr-3' />
                        <div>
                            <h2 className='text-xl font-semibold dark:text-gray-100 text-gray-800'>Phone</h2>
                            <p className='dark:text-gray-300 text-gray-600'>+1 (555) 123-4567</p>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <ChatBubbleBottomCenterIcon className='w-6 h-6 dark:text-gray-200 text-gray-800 mr-3' />
                        <div>
                            <h2 className='text-xl font-semibold dark:text-gray-100 text-gray-800'>WhatsApp</h2>
                            <p className='dark:text-gray-300 text-gray-600'>+1 (555) 987-6543</p>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <MapPinIcon className='w-6 h-6 dark:text-gray-200 text-gray-800 mr-3' />
                        <div>
                            <h2 className='text-xl font-semibold dark:text-gray-100 text-gray-800'>Address</h2>
                            <p className='dark:text-gray-300 text-gray-600'>1234 Example St, City, Country, 56789</p>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <ClockIcon className='w-6 h-6 dark:text-gray-200 text-gray-800 mr-3' />
                        <div>
                            <h2 className='text-xl font-semibold dark:text-gray-100 text-gray-800'>Business Hours</h2>
                            <p className='dark:text-gray-300 text-gray-600'>Monday - Friday: 9 AM - 5 PM</p>
                            <p className='dark:text-gray-300 text-gray-600'>Saturday: 10 AM - 2 PM</p>
                            <p className='dark:text-gray-300 text-gray-600'>Sunday: Closed</p>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <UserCircleIcon className='w-6 h-6 dark:text-gray-200 text-gray-800 mr-3' />
                        <div>
                            <h2 className='text-xl font-semibold dark:text-gray-100 text-gray-800'>Instagram</h2>
                            <p className='dark:text-gray-300 text-gray-600'>@ladent_official</p>
                        </div>
                    </div>
                </div>
                
                <div className='border-t my-5 border-gray-500'></div>

                <h1 className='text-3xl font-bold dark:text-gray-200 text-gray-800 mb-6'>Send Email</h1>
                <div className='mt-8'>
                    <div className='mb-4'>
                        <label className='block dark:text-gray-200 text-gray-800 font-bold mb-2' htmlFor='subject'>
                            Subject
                        </label>
                        <input
                            type='text'
                            id='subject'
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className='w-full p-2 dark:bg-gray-700 bg-white dark:text-gray-200 text-gray-800 border dark:border-gray-600 border-gray-300 rounded-xl'
                            placeholder='Enter subject'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block dark:text-gray-200 text-gray-800 font-bold mb-2' htmlFor='message'>
                            Message
                        </label>
                        <textarea
                            id='message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className='w-full p-2 dark:bg-gray-700 bg-white dark:text-gray-200 text-gray-800 border dark:border-gray-600 border-gray-300 rounded-xl'
                            placeholder='Enter your message'
                            rows='5'
                        ></textarea>
                    </div>
                    <button
                        onClick={handleSendMessage}
                        className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-xl'
                    >
                        Send Message
                    </button>
                </div>
            </div>
        </AppLayouts>
    );
}

export default Contact;

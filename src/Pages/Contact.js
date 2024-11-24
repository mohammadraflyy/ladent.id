import React, { useState } from 'react';
import '../App.css';
import AppLayouts from '../Layouts/AppLayouts';
import { EnvelopeIcon, ClockIcon, MapIcon } from '@heroicons/react/24/outline';
import SEO from '../Components/SEO';

function Contact() {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [phone, setPhone] = useState('');
    const title = 'Contact';

    const handleSendMessage = () => {
        const fullMessage = `Phone Number: ${phone}\n\n${message}`;
        const mailtoLink = `mailto:alex@ladent.id?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(fullMessage)}`;
        window.location.href = mailtoLink;
    };

    return (
        <AppLayouts title={null}>

            <SEO title={title} description='Contact page for ladent.id' />
            <div className='max-w-4xl mx-auto md:p-10 dark:bg-gray-900 bg-gray-100 my-5 md:dark:bg-gray-800 md:bg-white mb-10 rounded-xl'>
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                    <div className="w-full md:w-1/2">
                        <h1 className='text-3xl font-bold dark:text-gray-200 text-gray-800 mb-6 underline'>Send Email</h1>
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
                                <label className='block dark:text-gray-200 text-gray-800 font-bold mb-2' htmlFor='phone'>
                                    Phone Number
                                </label>
                                <input
                                    type='text'
                                    id='phone'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className='w-full p-2 dark:bg-gray-700 bg-white dark:text-gray-200 text-gray-800 border dark:border-gray-600 border-gray-300 rounded-xl'
                                    placeholder='Enter your phone number'
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
                    <div className="w-full md:w-1/2">
                        <h1 className='text-3xl font-bold dark:text-gray-200 text-gray-800 mb-6 underline'>Contact Us</h1>
                        <div className='space-y-4'>
                            <div className='flex items-start'>
                                <ClockIcon className='w-6 h-6 dark:text-gray-200 text-gray-800 mr-3' />
                                <div>
                                    <h2 className='uppercase text-xl font-semibold dark:text-gray-100 text-gray-800'>Working Hours</h2>
                                    <p className='dark:text-gray-300 text-gray-600'>MON - FRI : 08:00 - 16:00</p>
                                </div>
                            </div>

                            <div className='flex items-start'>
                                <EnvelopeIcon className='w-6 h-6 dark:text-gray-200 text-gray-800 mr-3' />
                                <div>
                                    <h2 className='uppercase text-xl font-semibold dark:text-gray-100 text-gray-800'>Management</h2>
                                    <p className='dark:text-gray-300 text-gray-600'>Email: <a href='mailto:alex@ladent.id' target='_blank' className='text-blue-500' rel="noreferrer">alex@ladent.id</a></p>
                                    <p className='dark:text-gray-300 text-gray-600'>WhatsApp: <a href='https://wa.me/6287871717187' target='_blank' className='text-blue-500' rel="noreferrer">+62 878 717171 87</a></p>
                                    <p className='dark:text-gray-300 text-gray-600'>Instagram: <a href='https://instagram.com/ladonentertainment' target='_blank' className='text-blue-500' rel="noreferrer">@ladonentertainment</a></p>
                                    <p className='dark:text-gray-300 text-gray-600'>Tiktok: <a href='https://tiktok.com/@LadonEntertainment' target='_blank' className='text-blue-500' rel="noreferrer">@LadonEntertainment</a></p>
                                    <p className='dark:text-gray-300 text-gray-600'>Youtube: <a href='http://youtube.com/@LadonEntertainment' target='_blank' className='text-blue-500' rel="noreferrer">Ladon Entertainment</a></p>
                                    <p className='dark:text-gray-300 text-gray-600'>Agency: <a href='http://instagram.com/afent.id' target='_blank' className='text-blue-500' rel="noreferrer">@afent.id</a></p>
                                </div>
                            </div>

                            <div className='flex items-start'>
                                <MapIcon className='w-6 h-6 dark:text-gray-200 text-gray-800 mr-3' />
                                <div>
                                    <h2 className='uppercase text-xl font-semibold dark:text-gray-100 text-gray-800'>Office</h2>
                                    <p className='dark:text-gray-300 text-gray-600'>Batu Tourism Mall (BTM) Lt. 2</p>
                                    <p className='dark:text-gray-300 text-gray-600'><a href='https://www.google.com/maps/place/Jl.+Kartini+No.14,+Ngaglik,+Kec.+Batu,+Kota+Batu,+Jawa+Timur+65311/data=!4m2!3m1!1s0x2e7880cca88de7db:0x96b7474ab4551893?sa=X&ved=1t:242&ictx=111' className='text-blue-500'>Jl. Kartini No.14, Ngaglik, Kec. Batu, Kota Batu, Jawa Timur 65311</a></p>
                                    <div className='mt-4'>
                                        <iframe
                                            className='rounded-lg'
                                            title='Office Location'
                                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15926.1399566137!2d112.5235752!3d-7.8048251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78208a214a9b4d%3A0x89a052047e8f8d1!2sJl.%20Kartini%20No.14%2C%20Ngaglik%2C%20Kec.%20Batu%2C%20Kota%20Batu%2C%20Jawa%20Timur%2065311!5e0!3m2!1sen!2sid!4v1624934293063!5m2!1sen!2sid'
                                            width='100%'
                                            height='250'
                                            style={{ border: 0 }}
                                            allowFullScreen=''
                                            loading='lazy'
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayouts>
    );
}

export default Contact;

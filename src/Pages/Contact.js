import React from 'react';
import '../App.css';
import AppLayouts from '../Layouts/AppLayouts';

function Contact() {
    return (
        <AppLayouts title={null}>
            <div className="max-w-2xl mx-auto p-10 bg-gray-800 my-20 rounded-xl">
                <h1 className="text-3xl font-bold text-gray-200 mb-6">Contact Information</h1>
                <div className="space-y-4">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-100">Email</h2>
                        <p className="text-gray-300">contact@example.com</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-100">Phone</h2>
                        <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-100">WhatsApp</h2>
                        <p className="text-gray-300">+1 (555) 987-6543</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-100">Address</h2>
                        <p className="text-gray-300">1234 Example St, City, Country, 56789</p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-100">Business Hours</h2>
                        <p className="text-gray-300">Monday - Friday: 9 AM - 5 PM</p>
                        <p className="text-gray-300">Saturday: 10 AM - 2 PM</p>
                        <p className="text-gray-300">Sunday: Closed</p>
                    </div>
                </div>
            </div>
        </AppLayouts>
    );
}

export default Contact;

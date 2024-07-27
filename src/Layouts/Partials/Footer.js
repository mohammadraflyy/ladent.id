import React from 'react';

const Footer = ({title}) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    &copy; {currentYear} {title}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';

const Footer = ({title}) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto text-center">
                <p className="text-sm font-bold">
                    &copy; {currentYear} {title}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

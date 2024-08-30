import React from 'react';

const Footer = ({title}) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="dark:bg-gray-800 bg-white dark:text-white text-gray-600 py-10">
            <div className="container mx-auto text-center">
                <p className="text-sm font-bold">
                    Ladon Entertainment &copy; {currentYear} All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

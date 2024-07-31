import { useEffect } from 'react';

const GoogleAnalytics = ({ trackingId }) => {
    useEffect(() => {
        if (document.querySelector(`script[src^="https://www.googletagmanager.com/gtag/js?id=${trackingId}"]`)) {
            return; 
        }

        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag() {
            window.dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', trackingId);

    }, [trackingId]);

    return null;
};

export default GoogleAnalytics;

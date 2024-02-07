import React from "react";

const GMapTerna = () => {
    const loadMap = async () => {
        const response = await fetch("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.722616803711!2d73.0139133148842!3d19.03352928710053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8f3d6e6e6e7%3A0x6e6e7e6e6e6e6e6e!2sTerna%20Engineering%20College!5e0!3m2!1sen!2sin!4v1635431234567!5m2!1sen!2sin");
        const script = document.createElement("script");
        script.src = response.url;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
    };

    React.useEffect(() => {
        loadMap();
    }, []);

    return (
        <div>
            <iframe
                title="Terna Engineering College, Nerul"
                width="600"
                height="450"
                loading="lazy"
                allowFullScreen
                src={response}
            ></iframe>
        </div>
    );
};

export default GMapTerna;
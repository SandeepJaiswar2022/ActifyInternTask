import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 mt-auto py-5">
            <div className="text-center text-sm font-bold">
                &copy; {new Date().getFullYear()} Actify. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;

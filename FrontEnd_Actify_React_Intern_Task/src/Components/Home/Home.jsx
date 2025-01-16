import React from "react";

const Home = () => {
    return (
        <section className="bg-black flex-grow text-white">
            <div className="container mx-auto px-4 py-16 text-center md:text-left">
                {/* Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Transform Your Career Path
                </h1>
                {/* Subheading */}
                <p className="mt-4 text-lg md:text-xl">
                    Explore opportunities designed to match your skills and aspirations.
                    Build your profile, connect with top employers, and find your perfect job.
                </p>
                {/* Additional Points */}
                <ul className="mt-6 text-sm md:text-base space-y-3">
                    <li> 1. Personalized job recommendations</li>
                    <li> 2. Seamless profile creation</li>
                    <li> 3. Connect with industry leaders</li>
                </ul>
                {/* Call-to-action Button */}
                <div className="mt-8">
                    <button className="bg-white text-black px-6 py-3 rounded-md shadow-md font-semibold hover:bg-gray-100 transition">
                        Get Started Today
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Home;

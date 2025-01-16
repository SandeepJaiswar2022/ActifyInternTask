import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import React icons for the menu

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggling
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    //Pending : Sorting (name), Filter() or search bar, Download Data Excel

    return (
        <header className="bg-gray-800 text-white shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
                <div className="text-xl font-bold italic">ACTIFY</div>

                {/* Desktop navigation links */}
                <nav className="hidden md:flex gap-6">
                    <Link
                        to="/"
                        className="hover:text-white text-gray-300 transition duration-200"
                    >
                        Home
                    </Link>
                    <Link
                        to="/allAccounts"
                        className="hover:text-white text-gray-300 transition duration-200"
                    >
                        Accounts
                    </Link>
                    <Link
                        to="/profile"
                        className="hover:text-white text-gray-300 transition duration-200"
                    >
                        Profile
                    </Link>
                </nav>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        className="p-2 rounded-lg bg-blue-700 hover:bg-blue-500"
                        aria-label="Open Menu"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? (
                            <FaTimes className="w-6 h-6 text-white" />
                        ) : (
                            <FaBars className="w-6 h-6 text-white" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Links */}
            {isMenuOpen && (
                <div className="md:hidden bg-indigo-600 p-4">
                    <nav className="flex flex-col gap-4">
                        <Link
                            to="/"
                            className="hover:text-white text-gray-300 transition duration-200"
                            onClick={toggleMenu} // Close the menu on link click
                        >
                            Home
                        </Link>
                        <Link
                            to="/allAccounts"
                            className="hover:text-white text-gray-300 transition duration-200"
                            onClick={toggleMenu} // Close the menu on link click
                        >
                            Accounts
                        </Link>
                        <Link
                            to="/profile"
                            className="hover:text-white text-gray-300 transition duration-200"
                            onClick={toggleMenu} // Close the menu on link click
                        >
                            Profile
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;

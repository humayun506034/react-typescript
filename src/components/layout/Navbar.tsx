import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">
              Task Master
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to={"/"}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
              >
                Home
              </Link>
              <Link
                to={"/users"}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
              >
                Users
              </Link>
              <Link
                to={"/login"}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
              >
                Login
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white rounded-md p-2"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to={"/"}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
            >
              Home
            </Link>
            <Link
              to={"/users"}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
            >
              Users
            </Link>
            <Link
              to={"/login"}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

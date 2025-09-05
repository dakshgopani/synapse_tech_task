import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="backdrop-sm bg-transparent border-b-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <h1 className="text-xl font-bold text-white font-[Formative Trial]">Paws n' Play</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Shop Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsShopOpen(true)}
                onMouseLeave={() => setIsShopOpen(false)}
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <span>Shop</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isShopOpen && (
                <div
                  onMouseEnter={() => setIsShopOpen(true)}
                  onMouseLeave={() => setIsShopOpen(false)}
                  className="absolute top-full left-0 mt-1 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-lg py-2 z-50"
                >
                  <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors">Pet Food</a>
                  <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors">Toys</a>
                  <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors">Accessories</a>
                  <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors">Health & Care</a>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 mt-1 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-lg py-2 z-50"
                >
                  <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors">Pet Grooming</a>
                  <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors">Veterinary</a>
                  <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors">Pet Training</a>
                  <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors">Pet Sitting</a>
                </div>
              )}
            </div>

            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Blog</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a>
          </nav>

          {/* Get Started Button */}
          <div className="hidden md:block">
            <button className="bg-white text-slate-800 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Shop</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              <button className="bg-white text-slate-800 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg w-fit">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
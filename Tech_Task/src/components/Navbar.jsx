import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import pawPrints from "../assets/paw-prints.png";

export default function Navbar() {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full bg-black/20 backdrop-blur-sm border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-10 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3 text-xl font-bold">
  <img
    src={pawPrints}
    alt="Paws n' Play Logo"
    className="h-8 sm:h-10 filter invert brightness-200"
  />
  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
    Paws n' Play
  </span>
</div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {/* Shop Dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => setIsShopOpen(true)}
              onMouseLeave={() => setIsShopOpen(false)}
              className="flex items-center gap-1 text-blue/90 hover:text-white transition-all duration-200 font-medium"
            >
              Shop <ChevronDown className="w-4 h-4" />
            </button>
            {isShopOpen && (
              <div
                onMouseEnter={() => setIsShopOpen(true)}
                onMouseLeave={() => setIsShopOpen(false)}
                className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl py-3 border border-white/20"
              >
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">Pet Food</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">Toys & Games</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">Accessories</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">Health & Care</a>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              className="flex items-center gap-1 text-blue/90 hover:text-white transition-all duration-200 font-medium"
            >
              Services <ChevronDown className="w-4 h-4" />
            </button>
            {isServicesOpen && (
              <div
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl py-3 border border-white/20"
              >
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">Pet Grooming</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">Veterinary Care</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">Pet Training</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium">Pet Sitting</a>
              </div>
            )}
          </div>

          <a href="#" className="text-white/90 hover:text-white transition-all duration-200 font-medium">About Us</a>
          <a href="#" className="text-white/90 hover:text-white transition-all duration-200 font-medium">Blog</a>
          <a href="#" className="text-white/90 hover:text-white transition-all duration-200 font-medium">Contact</a>
        </nav>

        {/* Get Started Button */}
        <button className="hidden lg:block bg-white text-gray-800 px-6 py-2.5 rounded-full font-semibold hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white p-2"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-sm border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            <a href="#" className="block text-white/90 hover:text-white transition-colors font-medium">Shop</a>
            <a href="#" className="block text-white/90 hover:text-white transition-colors font-medium">Services</a>
            <a href="#" className="block text-white/90 hover:text-white transition-colors font-medium">About Us</a>
            <a href="#" className="block text-white/90 hover:text-white transition-colors font-medium">Blog</a>
            <a href="#" className="block text-white/90 hover:text-white transition-colors font-medium">Contact</a>
            <button className="w-full bg-white text-gray-800 px-6 py-2.5 rounded-full font-semibold hover:bg-gray-100 transition-colors mt-4">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
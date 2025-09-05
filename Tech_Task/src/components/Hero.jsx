import React from "react";
import dogImage from "../assets/dog.png"; // replace with your image

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={dogImage}
          alt="Happy Dog"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay on top of image */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Text Content ON TOP of image */}
      <div className="relative z-10 flex items-center h-full px-6 sm:px-12">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Pawsitively Perfect: <br />
            Where Every Pet's Dream Comes True! ✨
          </h1>

          <p className="mb-8 text-base sm:text-lg text-gray-200">
            Welcome to Paws n’ Play, the ultimate destination for pet lovers! 
            Explore a world of tail-wagging joy and furry companionship with our
            wide range of products and services.
          </p>

        <button className="px-6 py-3 bg-black text-black rounded-full flex items-center gap-2 hover:bg-gray-800 hover:text-black transition-colors">
            Shop Now 🐾
        </button>


        </div>
      </div>
    </section>
  );
}

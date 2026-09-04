import React from 'react';
// Local Assets se image import kar rahe hain
import imageOne from '../assets/imageone.png';

export default function HeroBanner() {
  return (
    <div className="relative w-full h-[320px] sm:h-[450px] md:h-[520px] lg:h-[580px] overflow-hidden bg-white rounded-2xl shadow-md border border-gray-100">
      <img
        src={imageOne}
        alt="Makhana Special Banner"
        className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}
import React from 'react';
// Local Assets se image import kar rahe hain
import imagehero from '../assets/imagehero.png';

export default function HeroBanner() {
  return (
    <div className="w-full bg-white border-b border-gray-100 shadow-sm rounded-none overflow-hidden">
      <img
        src={imagehero}
        alt="Makhana Special Banner"
        className="w-full h-auto min-h-[180px] sm:min-h-[260px] md:min-h-[340px] lg:min-h-[400px] object-fill object-center block rounded-none"
      />
    </div>
  );
}
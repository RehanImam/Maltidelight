import React from 'react';

export default function TopAnnouncementBar() {
  return (
    <div className="bg-[#1e293b] text-white text-xs sm:text-sm py-1.5 px-4 flex justify-between items-center relative z-50">
      <div className="flex-1 flex justify-center items-center gap-2">
        <button className="hover:text-gray-300">&lt;</button>
        <span className="text-center font-medium">
          🎁 Free Shipping on Orders Above ₹ 499/-. Don't miss a dis...
        </span>
        <button className="hover:text-gray-300">&gt;</button>
      </div>
      <button className="text-gray-400 hover:text-white">✕</button>
    </div>
  );
}
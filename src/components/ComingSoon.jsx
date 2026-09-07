import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export default function ComingSoon() {
  const [searchParams] = useSearchParams();
  const categoryName = searchParams.get('category') || 'Products';

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-12 bg-gradient-to-b from-amber-50/50 to-white">
      <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center text-3xl mb-4 shadow-inner animate-bounce">
        📦
      </div>
      
      <span className="text-xs font-bold text-amber-600 tracking-widest uppercase bg-amber-100/80 px-3 py-1 rounded-full mb-3">
        {categoryName}
      </span>

      <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-2">
        Products Coming Soon!
      </h1>

      <p className="text-sm sm:text-base text-gray-600 max-w-md mb-6 leading-relaxed">
        We are working hard to bring you the finest quality <strong className="text-amber-700">{categoryName}</strong>. Stay tuned for exciting new additions!
      </p>

      <Link
        to="/"
        className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white font-semibold text-sm rounded-full shadow-md transition-all duration-200"
      >
        Back to Home
      </Link>
    </div>
  );
}
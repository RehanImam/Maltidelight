

import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

export default function MobileMenu({ isOpen, onClose }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  if (!isOpen) return null;

  const categories = [
    'Makhana Dessert',
    'Combo Packs',
    'Phool Makhana',
    'Roasted Makhana',
    'Makhana Powder',
    'New Makhana Taste',
  ];

  const handleCloseAll = () => {
    setSelectedCategory(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex">
      <div className="w-4/5 max-w-xs bg-white h-full flex flex-col p-4 shadow-xl relative overflow-hidden">
        
        {/* HEADER */}
        <div className="flex justify-between items-center border-b pb-3">
          <div className="flex items-center gap-2">
            {selectedCategory && (
              <button 
                onClick={() => setSelectedCategory(null)} 
                className="text-amber-600 text-sm font-bold mr-1 hover:underline"
              >
                ←
              </button>
            )}
            <span className="font-extrabold text-lg text-amber-700">Maltidelight</span>
          </div>
          <button 
            onClick={handleCloseAll} 
            className="text-gray-400 hover:text-gray-700 text-xl font-bold p-1"
            aria-label="Close Menu"
          >
            ✕
          </button>
        </div>

        {/* DYNAMIC FRAME CONTENT */}
        {selectedCategory ? (
          /* SINGLE FRAME: COMING SOON VIEW */
          <div className="flex-1 flex flex-col items-center justify-center text-center p-4">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-2xl mb-3 animate-bounce">
              📦
            </div>
            <span className="text-[10px] font-bold text-amber-600 uppercase bg-amber-100 px-2.5 py-0.5 rounded-full mb-2">
              {selectedCategory}
            </span>
            <h3 className="text-lg font-extrabold text-gray-900 mb-1">
              Coming Soon!
            </h3>
            <p className="text-xs text-gray-500 mb-6 leading-relaxed">
              We are preparing fresh stock for this item.
            </p>
            <button
              onClick={() => setSelectedCategory(null)}
              className="px-4 py-2 bg-amber-600 text-white font-semibold text-xs rounded-full shadow hover:bg-amber-700 transition-colors"
            >
              Back to Categories
            </button>
          </div>
        ) : (
          /* SINGLE FRAME: CATEGORIES MENU VIEW */
          <div className="py-4 space-y-4 flex-1 overflow-y-auto">
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-2 px-2">
                Categories
              </span>

              <nav className="space-y-1">
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedCategory(cat)}
                    className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-700 rounded-lg transition-colors flex items-center justify-between group"
                  >
                    <span>{cat}</span>
                    <span className="text-xs text-amber-500 opacity-60 group-hover:opacity-100">
                      ➔
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="pt-3 border-t">
              <button 
                onClick={() => setSelectedCategory('Become Seller')} 
                className="w-full text-left px-3 py-2 text-sm font-semibold text-gray-800 hover:text-red-700 hover:bg-gray-50 rounded-lg transition-colors"
              >
                Become Seller
              </button>
            </div>
          </div>
        )}

        {/* FOOTER */}
        <div className="border-t pt-3 mt-auto">
          <button 
            onClick={handleCloseAll} 
            className="w-full py-2.5 bg-gray-900 hover:bg-black text-white rounded-full text-sm font-semibold flex justify-center items-center gap-2 shadow-sm transition-colors"
          >
            🛒 Cart
          </button>
        </div>

      </div>
    </div>
  );
}
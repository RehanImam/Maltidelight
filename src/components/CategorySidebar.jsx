import React, { useState } from 'react';

const categories = [
  'Combo Packs',
  'Raw Makhana',
  'Plain Makhana',
  'Flavored Makhana',
  'Phol Makhana',
  'Roasted Makhana',
  'Makhana Powder'
];

export default function CategorySidebar({ selectedCategory, onSelectCategory }) {
  // Categories open by default (▲), Price closed by default (▼)
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  return (
    /* Yahan pe humne 'hidden lg:block' lagaya hai:
       - 'hidden' => Phone/Mobile view me ye chhup (hide ho) jayega.
       - 'lg:block' => Laptop/Desktop screen pe ye wapas dikhne lagega.
    */
    <div className="hidden lg:block w-64 bg-white p-4 rounded-md border border-gray-200">
      {/* --- CATEGORIES SECTION --- */}
      <div className="border-b pb-2 mb-3">
        <button
          type="button"
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          className="w-full flex justify-between items-center text-left focus:outline-none cursor-pointer"
        >
          <h3 className="font-bold text-gray-800 text-base">Categories</h3>
          <span className="text-xs text-gray-400">
            {isCategoryOpen ? '▲' : '▼'}
          </span>
        </button>

        {/* Categories List */}
        {isCategoryOpen && (
          <ul className="space-y-2 text-sm text-gray-600 mt-3 transition-all duration-200">
            {categories.map((cat, idx) => (
              <li key={idx}>
                <button
                  type="button"
                  onClick={() => onSelectCategory(cat)}
                  className={`w-full text-left py-1.5 px-3 rounded transition-colors ${
                    selectedCategory === cat
                      ? 'bg-red-50 text-red-700 font-medium'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* --- PRICE SECTION --- */}
      <div className="mt-4 pt-2">
        <button
          type="button"
          onClick={() => setIsPriceOpen(!isPriceOpen)}
          className="w-full flex justify-between items-center text-left focus:outline-none cursor-pointer mb-3"
        >
          <h4 className="font-bold text-gray-800 text-sm">Price</h4>
          <span className="text-xs text-gray-400">
            {isPriceOpen ? '▲' : '▼'}
          </span>
        </button>

        {/* Price Filter Content */}
        {isPriceOpen && (
          <div className="space-y-3 pt-1 pb-2">
            <div className="flex items-center gap-2">
              <input
                type="number"
                placeholder="Min"
                className="w-full border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:border-red-500"
              />
              <span className="text-gray-400 text-xs">-</span>
              <input
                type="number"
                placeholder="Max"
                className="w-full border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:border-red-500"
              />
            </div>
            <button
              type="button"
              className="w-full py-1.5 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Apply
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
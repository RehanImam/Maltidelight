import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MobileMenu({ isOpen, onClose }) {
  const [activeCategory, setActiveCategory] = useState('Makhana Dessert');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex">
      <div className="w-4/5 max-w-xs bg-white h-full flex flex-col p-4 shadow-xl">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="font-bold text-gray-800 text-base">Makhana India</h2>
          <button onClick={onClose} className="text-gray-400 text-xl">✕</button>
        </div>

        <div className="py-4 space-y-3 flex-1 overflow-y-auto">
          <div className="border border-gray-200 rounded p-2">
            <label className="text-xs text-gray-500 font-medium block mb-1">Categories</label>
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full text-sm font-semibold border-none bg-transparent focus:outline-none"
            >
              <option>Makhana Dessert</option>
              <option>Combo Packs</option>
              <option>Phool Makhana</option>
              <option>Flavored Makhana</option>
            </select>
          </div>

          <nav className="space-y-2 text-sm text-gray-700 pl-2">
            <Link to="/" onClick={onClose} className="block py-1 hover:text-red-700">Makhana Dessert</Link>
            <Link to="/" onClick={onClose} className="block py-1 hover:text-red-700">Combo Packs</Link>
            <Link to="/" onClick={onClose} className="block py-1 hover:text-red-700">Phool Makhana</Link>
            <Link to="/" onClick={onClose} className="block py-1 hover:text-red-700">Roasted Makhana</Link>
            <Link to="/" onClick={onClose} className="block py-1 hover:text-red-700">Makhana Powder</Link>
            <Link to="/" onClick={onClose} className="block py-1 hover:text-red-700">New Makhana Taste</Link>
          </nav>

          <div className="pt-4 border-t">
            <Link to="/" onClick={onClose} className="text-sm font-medium text-gray-800 hover:text-red-700">
              Become Seller
            </Link>
          </div>
        </div>

        <div className="border-t pt-3">
          <button onClick={onClose} className="w-full py-2 border rounded-full text-sm flex justify-center items-center gap-2">
            🛒 Cart
          </button>
        </div>
      </div>
    </div>
  );
}
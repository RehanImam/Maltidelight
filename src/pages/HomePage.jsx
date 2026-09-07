

import React, { useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import ProductCard from '../components/ProductCard';
import { mockProducts } from '../data/products';

export default function HomePage({ selectedCategory, setSelectedCategory }) {
  const [sortBy, setSortBy] = useState('Relevance');

  // Active Category Filtering safely handled
  const filteredProducts = selectedCategory === 'All'
    ? mockProducts 
    : mockProducts.filter(p => p.category?.toLowerCase() === selectedCategory?.toLowerCase());

  // Sorting logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'lowToHigh') return a.price - b.price;
    if (sortBy === 'highToLow') return b.price - a.price;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <HeroBanner />

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-5 pb-2 border-b">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            {selectedCategory === 'All' ? 'All Products' : selectedCategory} 
            <span className="text-xs text-gray-500 font-normal ml-2">({sortedProducts.length} items)</span>
          </h2>

          <div className="flex items-center gap-2 text-xs text-gray-600">
            <span>Sort by:</span>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:border-red-600 bg-white"
            >
              <option value="Relevance">Relevance</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Full-width Product Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-gray-500 bg-white rounded border">
              No products found in "{selectedCategory}". Select another category.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
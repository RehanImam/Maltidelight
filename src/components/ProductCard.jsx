import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Safety check
  if (!product) return null;

  const handleBuyNow = () => {
    if (addToCart) addToCart(product, 1);
    navigate('/address');
  };

  const discount = product?.discount || null;
  const price = typeof product?.price === 'number' ? product.price.toFixed(2) : product?.price || '0.00';
  const mrp = typeof product?.mrp === 'number' ? product.mrp.toFixed(2) : product?.mrp || null;
  const productImage = product?.images?.[0] || product?.image || '';
  const productWeight = '100g';

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-2 sm:p-2.5 flex flex-col justify-between hover:shadow-md transition-all duration-200 group">
      
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="block relative h-36 sm:h-52 md:h-60 w-full bg-gray-50 rounded overflow-hidden mb-1.5">
        {discount && (
          <span className="absolute top-1.5 left-1.5 z-10 bg-red-600 text-white text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm">
            -{discount}
          </span>
        )}

        <img 
          src={productImage} 
          alt={product.name || 'Product'} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 block"
        />
      </Link>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-between pt-1">
        <div>
          {/* Pricing */}
          <div className="flex items-center gap-1.5 text-xs mb-1">
            <span className="font-extrabold text-gray-900 text-sm sm:text-base">₹{price}</span>
            {mrp && (
              <span className="line-through text-gray-400 text-[10px] sm:text-xs">₹{mrp}</span>
            )}
          </div>

          {/* Product Name + Weight */}
          <Link to={`/product/${product.id}`} className="block">
            <h3 className="text-[11px] sm:text-sm font-medium text-gray-800 hover:text-red-700 line-clamp-2 leading-tight min-h-[32px] sm:min-h-[36px] mb-2">
              {product.name} <span className="font-semibold text-red-600">({productWeight})</span>
            </h3>
          </Link>
        </div>

        {/* Action Buttons - Optimized for Mobile & Laptop */}
        <div className="grid grid-cols-2 gap-1 sm:gap-1.5 mt-auto pt-1">
          <button
            onClick={() => addToCart && addToCart(product, 1)}
            className="w-full py-1.5 px-1 border border-red-200 text-red-600 hover:bg-red-50 hover:border-red-600 rounded text-[10px] sm:text-[11px] font-bold transition-colors flex items-center justify-center gap-0.5 whitespace-nowrap active:scale-95"
          >
            <span>🛒</span>
            <span className="inline sm:hidden">+ Cart</span>
            <span className="hidden sm:inline">Add to Cart</span>
          </button>
          
          <button
            onClick={handleBuyNow}
            className="w-full py-1.5 px-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-[10px] sm:text-[11px] font-bold transition-colors flex items-center justify-center gap-0.5 whitespace-nowrap active:scale-95"
          >
            <span>⚡</span>
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
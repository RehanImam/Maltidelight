
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Safety check to prevent crash if product is undefined
  if (!product) return null;

  const handleBuyNow = () => {
    if (addToCart) addToCart(product, 1);
    navigate('/address');
  };

  const discount = product?.discount || null;
  const price = typeof product?.price === 'number' ? product.price.toFixed(2) : product?.price || '0.00';
  const mrp = typeof product?.mrp === 'number' ? product.mrp.toFixed(2) : product?.mrp || null;
  const productImage = product?.images?.[0] || product?.image || '';
  
  // Fixed weight set to 100g for all products
  const productWeight = '100g';

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-2.5 flex flex-col justify-between hover:shadow-md transition-all duration-200 group">
      
      {/* Image Container - Full Size for Mobile & Laptop */}
      <Link to={`/product/${product.id}`} className="block relative h-48 sm:h-56 md:h-60 w-full bg-gray-50 rounded overflow-hidden mb-2">
        {/* Discount Tag */}
        {discount && (
          <span className="absolute top-2 left-2 z-10 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
            -{discount}
          </span>
        )}

        {/* Full Frame Object Cover Image */}
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
          <div className="flex items-center gap-2 text-xs mb-1.5">
            <span className="font-extrabold text-gray-900 text-base">₹{price}</span>
            {mrp && (
              <span className="line-through text-gray-400 text-xs">₹{mrp}</span>
            )}
          </div>

          {/* Product Name + Weight */}
          <Link to={`/product/${product.id}`} className="block">
            <h3 className="text-xs sm:text-sm font-medium text-gray-800 hover:text-red-700 line-clamp-2 leading-tight min-h-[36px] mb-2">
              {product.name} <span className="font-semibold text-red-600">({productWeight})</span>
            </h3>
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-1.5 mt-2">
          <button
            onClick={() => addToCart && addToCart(product, 1)}
            className="w-full py-1.5 border border-red-200 text-red-600 hover:bg-red-50 hover:border-red-600 rounded text-[11px] font-semibold transition-colors flex items-center justify-center gap-1"
          >
            <span>🛒</span> Add to Cart
          </button>
          <button
            onClick={handleBuyNow}
            className="w-full py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-[11px] font-semibold transition-colors flex items-center justify-center gap-1"
          >
            <span>⚡</span> Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
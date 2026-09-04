import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    addToCart(product, 1);
    navigate('/address');
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-2.5 flex flex-col justify-between hover:shadow-md transition-all duration-200 relative group">
      {/* Discount Tag */}
      {product.discount && (
        <span className="absolute top-3 left-3 z-10 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
          -{product.discount}
        </span>
      )}

      {/* Image container fixed height to avoid text clipping */}
      <Link to={`/product/${product.id}`} className="block relative h-40 sm:h-48 w-full bg-gray-50 rounded overflow-hidden mb-2">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </Link>

      {/* Content Section */}
      <div className="flex-1 flex flex-col justify-between pt-1">
        <div>
          <div className="flex items-center gap-1.5 text-xs mb-1">
            <span className="font-bold text-gray-900 text-sm">₹{product.price.toFixed(2)}</span>
            <span className="line-through text-gray-400 text-[11px]">₹{product.mrp.toFixed(2)}</span>
          </div>

          <Link to={`/product/${product.id}`} className="block">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-800 hover:text-red-700 line-clamp-2 leading-tight min-h-[32px] mb-3">
              {product.name}
            </h3>
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-1.5 mt-2">
          <button
            onClick={() => addToCart(product, 1)}
            className="w-full py-1.5 border border-gray-300 text-gray-700 hover:border-red-600 hover:text-red-700 rounded text-[11px] font-medium transition-colors"
          >
            Add to Cart
          </button>
          <button
            onClick={handleBuyNow}
            className="w-full py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded text-[11px] font-semibold transition-colors"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { mockProducts } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = mockProducts.find(p => p.id === id) || mockProducts[0];
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleNextImage = () => {
    setSelectedImgIndex((prev) => (prev + 1) % product.images.length);
  };

  const handlePrevImage = () => {
    setSelectedImgIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/address');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 text-xs sm:text-sm">
      {/* Navigation Breadcrumb */}
      <nav className="text-gray-500 mb-6 flex items-center gap-2">
        <Link to="/" className="hover:text-red-700">Home</Link>
        <span>&gt;</span>
        <span className="text-gray-800 font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg border">
        {/* Left Column: Image Slider + 5 Thumbnails */}
        <div>
          <div className="relative border rounded-lg overflow-hidden mb-4 bg-gray-50">
            <img
              src={product.images[selectedImgIndex]}
              alt={product.name}
              className="w-full h-80 sm:h-96 object-contain"
            />
            {/* Nav arrows on big image slider */}
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 border shadow text-gray-700"
            >
              ❮
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 border shadow text-gray-700"
            >
              ❯
            </button>
          </div>

          {/* 5 Thumbnails */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {product.images.map((imgUrl, index) => (
              <button
                key={index}
                onClick={() => setSelectedImgIndex(index)}
                className={`border-2 rounded p-0.5 w-16 h-16 flex-shrink-0 ${
                  selectedImgIndex === index ? 'border-red-600' : 'border-gray-200'
                }`}
              >
                <img src={imgUrl} alt="thumbnail" className="w-full h-full object-cover rounded" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Product details */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>

          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-red-600">₹ {product.price.toFixed(2)}</span>
            <span className="line-through text-gray-400">₹ {product.mrp.toFixed(2)}</span>
            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded font-semibold">
              SAVE ₹ {product.savings.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="text-red-600 font-semibold text-xs">Out of Stock / Available on Order</span>
          </div>

          <div className="text-xs text-gray-600">
            Brand: <strong className="text-gray-800">Makhana</strong>
          </div>

          <p className="text-gray-600 text-xs leading-relaxed border-t border-b py-3">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-y-2 text-xs py-2">
            <div><span className="text-gray-500">Diet Type:</span> <strong>{product.details.dietType}</strong></div>
            <div><span className="text-gray-500">Flavour:</span> <strong>{product.details.flavour}</strong></div>
            <div><span className="text-gray-500">Product Type:</span> <strong>{product.details.productType}</strong></div>
            <div><span className="text-gray-500">Weight:</span> <strong>{product.details.weight}</strong></div>
            <div><span className="text-gray-500">Origin:</span> <strong>{product.details.origin}</strong></div>
          </div>

          {/* Quantity Selector & Action */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center border border-gray-300 rounded">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1.5 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-3 py-1 font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1.5 hover:bg-gray-100"
              >
                +
              </button>
            </div>

            <button
              onClick={handleBuyNow}
              className="flex-1 py-2.5 bg-red-400 hover:bg-red-500 text-white rounded font-semibold text-center transition-colors"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
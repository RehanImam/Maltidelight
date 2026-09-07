import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalMRP, totalDiscount, totalPayable } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 flex justify-end">
      <div className="w-full max-w-md bg-white h-full flex flex-col shadow-xl animate-slide-left">
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Shopping cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-gray-600 text-2xl">
            ✕
          </button>
        </div>

        
        {/* Cart items list */}
        <div className="flex-1 overflow-y-auto px-4 divide-y">
          {cartItems.length === 0 ? (
            <div className="py-12 text-center text-gray-500">Your cart is empty.</div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="py-4 flex gap-3 relative">
                <img src={item.images[0]} alt={item.name} className="w-16 h-20 object-cover rounded border" />
                <div className="flex-1 text-xs space-y-1">
                  <h4 className="font-semibold text-gray-800 text-sm">{item.name}</h4>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span className="line-through text-gray-400">₹ {item.mrp.toFixed(2)}</span>
                    <span className="font-bold text-gray-900">₹ {item.price.toFixed(2)}</span>
                    <span>× {item.quantity} =</span>
                    <span className="font-bold">₹ {(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                  <p className="text-emerald-600 font-medium">
                    You save ₹ {(item.savings * item.quantity).toFixed(2)} total
                  </p>

                  <div className="flex items-center gap-2 mt-2 border border-gray-300 w-max rounded px-2 py-0.5">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-1 text-gray-600">
                      -
                    </button>
                    <span className="px-2 font-semibold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-1 text-gray-600">
                      +
                    </button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 text-sm">
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {/* Summary Footer */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t bg-gray-50 text-sm space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Total MRP:</span>
              <span>₹ {totalMRP.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-emerald-600 font-medium">
              <span>Total Discount:</span>
              <span>- ₹ {totalDiscount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-gray-900 text-base pt-2 border-t">
              <span>Total Payable:</span>
              <span>₹ {totalPayable.toFixed(2)}</span>
            </div>
            <p className="text-emerald-600 text-xs flex items-center gap-1 font-medium pt-1">
              🚚 Free Delivery
            </p>

            <div className="flex gap-2 pt-3">
              <button
                onClick={() => setIsCartOpen(false)}
                className="flex-1 py-2.5 bg-gray-200 text-gray-800 rounded-full font-semibold text-xs hover:bg-gray-300"
              >
                View cart
              </button>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  navigate('/address');
                }}
                className="flex-1 py-2.5 bg-red-500 text-white rounded-full font-semibold text-xs hover:bg-red-600"
              >
                Fill Address
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
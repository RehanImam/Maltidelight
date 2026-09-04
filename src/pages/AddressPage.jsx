import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function AddressPage() {
  const navigate = useNavigate();
  const { totalPayable } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('checkoutAddress', JSON.stringify(formData));
    navigate('/payment');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Delivery Address</h2>

        <form onSubmit={handleSubmit} className="space-y-3 text-xs sm:text-sm">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name *</label>
            <input
              required
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-red-600"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Mobile Number *</label>
            <input
              required
              type="tel"
              placeholder="10-digit mobile number"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-red-600"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Address *</label>
            <textarea
              required
              rows="2"
              placeholder="House No, Building, Street, Area"
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-red-600"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-gray-700 font-medium mb-1">City *</label>
              <input
                required
                type="text"
                placeholder="City"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-red-600"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">PIN Code *</label>
              <input
                required
                type="text"
                placeholder="PIN Code"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-red-600"
                value={formData.pincode}
                onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
              />
            </div>
          </div>

          <div className="border-t pt-4 flex justify-between items-center">
            <div>
              <span className="text-gray-500 text-xs block">Total:</span>
              <span className="font-bold text-base text-gray-800">₹{totalPayable.toFixed(2)}</span>
            </div>
            <button
              type="submit"
              className="py-2.5 px-5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded shadow transition-colors text-xs"
            >
              Proceed to Payment ➔
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
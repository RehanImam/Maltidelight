import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function OrderSuccessPage() {
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem('lastOrderData');
    if (savedOrder) {
      setOrderDetails(JSON.parse(savedOrder));
    } else {
      navigate('/');
    }
  }, [navigate]);

  if (!orderDetails) return null;

  const { amount, orderId, timestamp, items, addressData, sellerPhone } = orderDetails;

  const handleOpenWhatsApp = () => {
    const itemsSummary = items.map(item => `${item.name} (x${item.quantity})`).join(', ');
    const message = `*NEW ORDER CONFIRMATION*\n\n` +
      `*Order ID:* ${orderId}\n` +
      `*Amount Paid:* ₹${parseFloat(amount).toFixed(2)}\n` +
      `*Customer:* ${addressData.name || 'N/A'}\n` +
      `*Phone:* ${addressData.phone || 'N/A'}\n` +
      `*Address:* ${addressData.address || ''}, ${addressData.city || ''} - ${addressData.pincode || ''}\n` +
      `*Items:* ${itemsSummary}\n\n` +
      `Payment screenshot is uploaded and ready for verification!`;

    const cleanPhone = sellerPhone.replace('+', '');
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-[85vh] bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Paytm Style Blue Header */}
        <div className="bg-[#002e6e] text-white p-6 text-center relative">
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg animate-bounce">
            <span className="text-white text-3xl font-black">✓</span>
          </div>
          <h2 className="text-xl font-bold tracking-wide">Payment Successful</h2>
          <p className="text-xs text-blue-200 mt-0.5">Order Received & Verification Pending</p>

          <div className="mt-4 pt-3 border-t border-blue-400/30">
            <span className="text-xs uppercase tracking-wider text-blue-200 block">Amount Paid</span>
            <span className="text-3xl font-extrabold text-white">₹{parseFloat(amount).toFixed(2)}</span>
          </div>
        </div>

        {/* Transaction & Order Details */}
        <div className="p-5 space-y-4 text-xs text-gray-700">
          
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-center">
            <p className="text-emerald-800 font-semibold text-[11px]">
              🎉 Thank you! Your order has been placed.
            </p>
          </div>

          <div className="space-y-2 border-b pb-3">
            <div className="flex justify-between">
              <span className="text-gray-500">Order ID</span>
              <span className="font-mono font-bold text-gray-800">{orderId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Date & Time</span>
              <span className="font-medium text-gray-800">{timestamp}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Payment Status</span>
              <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">SUCCESS</span>
            </div>
          </div>

          {/* Customer Delivery Details */}
          <div className="space-y-1 bg-gray-50 p-3 rounded-lg border">
            <p className="font-bold text-gray-800 border-b pb-1 mb-1">Delivery Details:</p>
            <p><span className="font-medium text-gray-600">Name:</span> {addressData.name}</p>
            <p><span className="font-medium text-gray-600">Phone:</span> {addressData.phone}</p>
            <p className="leading-tight">
              <span className="font-medium text-gray-600">Address:</span> {addressData.address}, {addressData.city} ({addressData.pincode})
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-2">
            <button
              onClick={handleOpenWhatsApp}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>💬</span> Confirm Order on WhatsApp
            </button>

            <Link
              to="/"
              className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl text-center block transition-all active:scale-95"
            >
              Back to Home
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
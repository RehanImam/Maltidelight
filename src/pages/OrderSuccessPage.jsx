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

  const { amount, orderId, timestamp, items = [], addressData = {}, sellerPhone = '' } = orderDetails;

  const handleOpenWhatsApp = () => {
    const itemsSummary = items.map(item => `${item.name || 'Item'} (x${item.quantity || 1})`).join(', ');
    const message = `*NEW ORDER CONFIRMATION*\n\n` +
      `*Order ID:* ${orderId}\n` +
      `*Amount Paid:* ₹${parseFloat(amount || 0).toFixed(2)}\n` +
      `*Customer:* ${addressData.name || 'N/A'}\n` +
      `*Phone:* ${addressData.phone || 'N/A'}\n` +
      `*Address:* ${addressData.address || ''}, ${addressData.city || ''} - ${addressData.pincode || ''}\n` +
      `*Items:* ${itemsSummary}\n\n` +
      `Payment screenshot uploaded and order confirmed!`;

    const cleanPhone = sellerPhone.replace('+', '');
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-[85vh] bg-gray-100 py-6 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto space-y-4">
        
        {/* Flipkart-style Green Banner */}
        <div className="bg-white rounded-lg shadow-sm border border-emerald-100 p-6 text-center relative overflow-hidden">
          <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md animate-bounce">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-black text-gray-800">Order Placed Successfully!</h1>
          <p className="text-sm text-emerald-600 font-medium mt-1">
            Thank you for shopping with us. Your order status is being updated.
          </p>
          <div className="mt-3 inline-block bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs px-3 py-1 rounded-full font-semibold">
            Order ID: <span className="font-mono">{orderId}</span>
          </div>
        </div>

        {/* Order Delivery Tracking Status Bar */}
        <div className="bg-white rounded-lg shadow-sm border p-5">
          <h3 className="text-sm font-bold text-gray-800 mb-4 border-b pb-2">Order Status</h3>
          <div className="flex items-center justify-between text-center relative max-w-md mx-auto">
            <div className="flex flex-col items-center z-10">
              <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-xs shadow">✓</div>
              <span className="text-[11px] font-bold text-emerald-700 mt-1">Order Confirmed</span>
            </div>
            <div className="h-1 flex-1 bg-emerald-500 -mt-4"></div>
            <div className="flex flex-col items-center z-10">
              <div className="w-8 h-8 bg-emerald-100 text-emerald-600 border border-emerald-400 rounded-full flex items-center justify-center font-bold text-xs">2</div>
              <span className="text-[11px] font-medium text-gray-600 mt-1">Processing</span>
            </div>
            <div className="h-1 flex-1 bg-gray-200 -mt-4"></div>
            <div className="flex flex-col items-center z-10">
              <div className="w-8 h-8 bg-gray-100 text-gray-400 border rounded-full flex items-center justify-center font-bold text-xs">3</div>
              <span className="text-[11px] font-medium text-gray-400 mt-1">Dispatched</span>
            </div>
          </div>
        </div>

        {/* Delivery & Payment Details Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Delivery Address */}
          <div className="bg-white rounded-lg shadow-sm border p-4 space-y-2 text-xs text-gray-700">
            <h4 className="font-bold text-gray-800 text-sm border-b pb-1">Delivery Address</h4>
            <p className="font-bold text-gray-900">{addressData.name || 'Customer'}</p>
            <p className="text-gray-600 leading-relaxed">
              {addressData.address || ''}, {addressData.city || ''} <br />
              Pincode: <span className="font-semibold text-gray-800">{addressData.pincode || 'N/A'}</span>
            </p>
            <p className="pt-1"><span className="text-gray-500">Phone:</span> <span className="font-semibold">{addressData.phone || 'N/A'}</span></p>
          </div>

          {/* Payment Summary */}
          <div className="bg-white rounded-lg shadow-sm border p-4 space-y-2 text-xs text-gray-700 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-gray-800 text-sm border-b pb-1">Payment Details</h4>
              <div className="flex justify-between py-1 border-b">
                <span className="text-gray-500">Payment Status</span>
                <span className="font-bold text-emerald-600">PAID (Online)</span>
              </div>
              <div className="flex justify-between py-1 border-b">
                <span className="text-gray-500">Order Date</span>
                <span className="font-medium text-gray-800">{timestamp}</span>
              </div>
            </div>
            <div className="flex justify-between items-center pt-2 text-sm font-black text-gray-900">
              <span>Total Amount:</span>
              <span className="text-emerald-600 text-base">₹{parseFloat(amount || 0).toFixed(2)}</span>
            </div>
          </div>

        </div>

        {/* Ordered Items List */}
        {items.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm border p-4 text-xs">
            <h4 className="font-bold text-gray-800 text-sm border-b pb-2 mb-3">Items Ordered ({items.length})</h4>
            <div className="space-y-3">
              {items.map((item, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-2 last:border-b-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    {item.image && (
                      <img src={item.image} alt={item.name} className="w-12 h-12 object-contain border rounded p-1 bg-gray-50" />
                    )}
                    <div>
                      <p className="font-bold text-gray-800 text-xs">{item.name}</p>
                      <p className="text-gray-500">Qty: {item.quantity || 1}</p>
                    </div>
                  </div>
                  <span className="font-bold text-gray-800">₹{parseFloat((item.price || 0) * (item.quantity || 1)).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          {sellerPhone && (
            <button
              onClick={handleOpenWhatsApp}
              className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow transition-all text-xs flex items-center justify-center gap-2 active:scale-95"
            >
              <span>💬</span> Track Order On WhatsApp
            </button>
          )}

          <Link
            to="/"
            className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow text-center text-xs transition-all active:scale-95"
          >
            Continue Shopping
          </Link>
        </div>

      </div>
    </div>
  );
}
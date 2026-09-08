import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function PaymentPage() {
  const { totalPayable, cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const [screenshot, setScreenshot] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sellerUPI = "165012368@paytm";
  const sellerPhone = "+919473072298";
  const addressData = JSON.parse(localStorage.getItem('checkoutAddress') || '{}');

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=upi://pay?pa=${sellerUPI}&pn=MakhanaIndia&am=${totalPayable}`;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setScreenshot(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSendToSeller = (e) => {
    e.preventDefault();
    if (!screenshot) {
      alert('Please upload the payment screenshot before submitting!');
      return;
    }

    setIsSubmitting(true);

    const orderData = {
      amount: totalPayable,
      orderId: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
      timestamp: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
      items: cartItems,
      addressData: addressData,
      sellerPhone: sellerPhone
    };

    localStorage.getItem('lastOrderData');
    localStorage.setItem('lastOrderData', JSON.stringify(orderData));

    setTimeout(() => {
      setIsSubmitting(false);
      if (clearCart) clearCart();
      navigate('/order-success');
    }, 1200);
  };

  return (
    <div className="max-w-md mx-auto px-4 py-8 text-center">
      <div className="bg-white p-6 rounded-lg border shadow-md space-y-4">
        <h2 className="text-xl font-bold text-gray-800">Scan QR Code to Pay</h2>
        <p className="text-xs text-gray-500">Scan with GPay, PhonePe, Paytm, or any UPI App</p>

        {/* QR Code display */}
        <div className="flex justify-center py-2">
          <div className="border-2 border-red-600 p-2 rounded-lg bg-white inline-block shadow-sm">
            <img src={qrCodeUrl} alt="Payment QR Code" className="w-48 h-48 object-contain" />
          </div>
        </div>

        <div className="bg-red-50 p-2.5 rounded text-xs text-red-800 font-medium">
          Total Amount to Pay: <span className="text-base font-bold text-red-700">₹{totalPayable ? totalPayable.toFixed(2) : '0.00'}</span>
        </div>

        {/* Display Seller Contact Info */}
        <div className="text-xs text-gray-500 space-y-1 bg-gray-50 p-2 rounded border">
          <p>UPI ID: <strong className="text-gray-800">{sellerUPI}</strong></p>
          <p>Seller Support: <strong className="text-gray-800">{sellerPhone}</strong></p>
        </div>

        {/* Screenshot Upload Form */}
        <form onSubmit={handleSendToSeller} className="text-left space-y-3 pt-2 border-t">
          <label className="block text-xs font-semibold text-gray-700">
            Upload Payment Screenshot <span className="text-red-500">*</span>
          </label>
          
          <input
            type="file"
            accept="image/*"
            required
            onChange={handleImageChange}
            className="w-full text-xs text-gray-600 file:mr-3 file:py-1.5 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100 cursor-pointer border rounded"
          />

          {preview && (
            <div className="mt-2 text-center">
              <p className="text-[10px] text-gray-400 mb-1">Preview:</p>
              <img src={preview} alt="Payment Screenshot" className="h-28 mx-auto border rounded object-contain" />
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow transition-colors text-xs flex items-center justify-center gap-2"
          >
            {isSubmitting ? 'Processing Payment...' : 'Submit Payment Screenshot'}
          </button>
        </form>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import TopAnnouncementBar from './components/TopAnnouncementBar';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import MobileMenu from './components/MobileMenu';

import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import AddressPage from './pages/AddressPage';
import PaymentPage from './pages/PaymentPage';

function PageIndicator() {
  const location = useLocation();
  return (
    <div className="bg-gray-100 border-b border-gray-200 text-[11px] text-gray-500 py-1 px-4 text-center">
      Current Route: <span className="font-semibold text-red-700">{location.pathname}</span>
    </div>
  );
}

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-800">
          <TopAnnouncementBar />
          <Navbar 
            onOpenMobileMenu={() => setIsMobileMenuOpen(true)} 
            onSelectCategory={setSelectedCategory}
          />
          <PageIndicator />

          <div className="flex-1">
            <Routes>
              <Route 
                path="/" 
                element={
                  <HomePage 
                    selectedCategory={selectedCategory} 
                    setSelectedCategory={setSelectedCategory} 
                  />
                } 
              />
              <Route path="/product/:id" element={<ProductDetailsPage />} />
              <Route path="/address" element={<AddressPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              {/* Fallback route for unknown paths */}
              <Route 
                path="*" 
                element={
                  <HomePage 
                    selectedCategory={selectedCategory} 
                    setSelectedCategory={setSelectedCategory} 
                  />
                } 
              />
            </Routes>
          </div>

          <CartDrawer />
          <MobileMenu 
            isOpen={isMobileMenuOpen} 
            onClose={() => setIsMobileMenuOpen(false)} 
            onSelectCategory={setSelectedCategory}
          />
        </div>
      </Router>
    </CartProvider>
  );
}

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import TopAnnouncementBar from './components/TopAnnouncementBar';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import MobileMenu from './components/MobileMenu';
import ComingSoon from './components/ComingSoon';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import AddressPage from './pages/AddressPage';
import PaymentPage from './pages/PaymentPage';
import OrderSuccessPage from './pages/OrderSuccessPage';


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
              <Route path="/coming-soon" element={<ComingSoon />} />
              <Route path="/product/:id" element={<ProductDetailsPage />} />
              <Route path="/address" element={<AddressPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/order-success" element={<OrderSuccessPage />} />
              
              {/* Fallback route */}
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

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
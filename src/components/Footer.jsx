import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1f242e] text-gray-300 pt-12 pb-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid - 5 Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10 text-sm">
          
          {/* Column 1: Brand Info & Socials */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-white text-lg font-bold">Makhana India</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Makhana (also called fox nuts or lotus seeds) is an emerging healthy snack product in the FMCG sector, popular for its nutritional benefits like being...
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2 text-gray-300">
              <a href="#" className="hover:text-white transition-colors">
                <i className="fab fa-instagram text-base"></i>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <i className="fab fa-twitter text-sm"></i>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <i className="fab fa-pinterest-p text-sm"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Categories */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Categories</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><Link to="/coming-soon?category=Makhana Dessert" className="hover:text-white transition-colors">Makhana Dessert</Link></li>
              <li><Link to="/coming-soon?category=Phool Makhana" className="hover:text-white transition-colors">Phool Makhana</Link></li>
              <li><Link to="/coming-soon?category=Roasted Makhana" className="hover:text-white transition-colors">Roasted Makhana</Link></li>
              <li><Link to="/coming-soon?category=Makhana Powder" className="hover:text-white transition-colors">Makhana Powder</Link></li>
              <li><Link to="/coming-soon?category=New Makhana Taste" className="hover:text-white transition-colors">New Makhana Taste</Link></li>
            </ul>
          </div>

          {/* Column 3: Account */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Account</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><Link to="/coming-soon" className="hover:text-white transition-colors">My Profile</Link></li>
              <li><Link to="/coming-soon" className="hover:text-white transition-colors">My Orders</Link></li>
              <li><Link to="/address" className="hover:text-white transition-colors">My Addresses</Link></li>
              <li><Link to="/coming-soon" className="hover:text-white transition-colors">Settings</Link></li>
            </ul>
          </div>

          {/* Column 4: Policies */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Policies</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><Link to="/coming-soon" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/coming-soon" className="hover:text-white transition-colors">Return Policy</Link></li>
              <li><Link to="/coming-soon" className="hover:text-white transition-colors">Shipping & Delivery Policy</Link></li>
              <li><Link to="/coming-soon" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/coming-soon" className="hover:text-white transition-colors">Cancellation Policy</Link></li>
              <li><Link to="/coming-soon" className="hover:text-white transition-colors">Disclaimer Policy</Link></li>
            </ul>
          </div>

          {/* Column 5: Business Info & Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact Info</h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li className="flex flex-col">
                <span className="text-gray-200 font-medium">Email:</span>
                <a href="mailto:maltidelight@gmail.com" className="text-red-400 hover:underline break-all">
                  maltidelight@gmail.com
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-200 font-medium">FSSAI Lic. No:</span>
                <span className="text-gray-300 font-mono tracking-wider">10426310000209</span>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-200 font-medium">Address:</span>
                <span className="text-gray-400 leading-relaxed">
                  Bahadurpur, Balbhadarpur,<br />
                  Darbhanga, Bihar
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/80 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>
            © All rights reserved. Made with <span className="text-red-500">❤️</span> by <strong className="text-white font-medium">S.R | App & Web Developer</strong>
          </p>

          {/* Payment Badges */}
          <div className="flex items-center gap-3 text-xs font-bold italic tracking-wide">
            <span className="text-white bg-blue-900/40 px-2 py-0.5 rounded border border-blue-700/50">VISA</span>
            <span className="text-red-500 font-black">●●</span>
            <span className="text-blue-400">PayPal</span>
            <span className="text-white font-normal"><span className="text-blue-500 font-bold">G</span> Pay</span>
            <span className="text-white font-normal"> Pay</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
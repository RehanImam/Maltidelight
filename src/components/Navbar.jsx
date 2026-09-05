// import React, { useState } from 'react';
// import { Link,  } from 'react-router-dom';
// import { useCart } from '../context/CartContext';

// export default function Navbar({ onOpenMobileMenu, onSelectCategory }) {
//   const { cartItems, setIsCartOpen } = useCart();
//   const [searchQuery, setSearchQuery] = useState('');
//   // const navigate = useNavigate();

//   // Defensive array check to prevent runtime errors
//   const safeCartItems = Array.isArray(cartItems) ? cartItems : [];
//   const totalCount = safeCartItems.reduce((acc, item) => acc + (item?.quantity || 1), 0);

//   const categories = [
//     'Home',
//     'Makhana Dessert',
//     'Phool Makhana',
//     'Roasted Makhana',
//     'Makhana Powder',
//     'New Makhana Taste',
//     'Blogs',
//     'Contact'
//   ];

//   const handleCategoryClick = (cat) => {
//     if (onSelectCategory) {
//       if (cat === 'Home') {
//         onSelectCategory('All');
//       } else {
//         onSelectCategory(cat);
//       }
//     }
//   };

//   return (
//     <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
//       <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
        
//         {/* Left: Mobile Menu Trigger & Stylish Brand Logo */}
//         <div className="flex items-center gap-2 sm:gap-3">
//           <button 
//             onClick={onOpenMobileMenu} 
//             className="lg:hidden p-1.5 text-gray-700 hover:text-amber-600 transition-colors rounded-lg active:bg-gray-100"
//             aria-label="Open Menu"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
          
//           {/* STYLISH MALTIDELIGHT LOGO */}
//           <Link to="/" onClick={() => handleCategoryClick('Home')} className="flex items-center gap-2 group">
//             {/* Logo Emblem Icon */}
//             <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-red-600 p-0.5 shadow-md group-hover:scale-105 transition-transform duration-300">
//               <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center relative overflow-hidden">
//                 <span className="text-transparent bg-clip-text bg-gradient-to-tr from-red-700 via-amber-600 to-amber-500 font-black text-lg sm:text-xl tracking-tighter">
//                   M
//                 </span>
//                 <span className="absolute -top-1 -right-1 text-[8px] text-amber-500">✨</span>
//               </div>
//             </div>

//             {/* Logo Text */}
//             <div className="flex flex-col">
//               <span className="text-lg sm:text-2xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-gray-900 via-amber-900 to-red-700 bg-clip-text text-transparent font-serif">
//                 Maltidelight
//               </span>
//               <span className="text-[8px] sm:text-[10px] font-bold text-amber-600 tracking-[0.22em] uppercase leading-tight mt-0.5">
//                 Pure & Nutritious
//               </span>
//             </div>
//           </Link>
//         </div>

//         {/* Center Search Bar */}
//         <div className="flex-1 max-w-xl mx-2 hidden sm:block">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search premium makhana products..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-4 pr-10 py-2 bg-gray-50/80 border border-gray-200 rounded-full text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 transition-all"
//             />
//             <button className="absolute right-3 top-2.5 text-gray-400 hover:text-amber-600 transition-colors">
//               <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Right Side: Bulk Call Enquiry & Cart Button */}
//         <div className="flex items-center gap-3 sm:gap-6">
//           <div className="hidden md:flex flex-col text-right text-xs">
//             <span className="text-gray-400 font-medium text-[10px] uppercase tracking-wider">Bulk Enquiry</span>
//             <span className="font-bold text-gray-800 hover:text-amber-600 transition-colors">
//               +91 88265 64286
//             </span>
//           </div>

//           {/* Cart Icon Button */}
//           <button 
//             onClick={() => setIsCartOpen(true)} 
//             className="relative p-2 text-gray-700 hover:text-amber-600 transition-colors rounded-full hover:bg-amber-50"
//             aria-label="Shopping Cart"
//           >
//             <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
//             </svg>
//             {totalCount > 0 && (
//               <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-black w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
//                 {totalCount}
//               </span>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Search Input (Visible only on phone screens) */}
//       <div className="px-3 pb-2.5 sm:hidden">
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full pl-3.5 pr-9 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs focus:outline-none focus:border-amber-500"
//           />
//           <button className="absolute right-3 top-2 text-gray-400">
//             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Categories Horizontal Links for Laptop Screen */}
//       <nav className="hidden lg:block border-t border-gray-100 bg-gray-50/50">
//         <div className="max-w-7xl mx-auto px-4 flex justify-center space-x-8 py-2 text-xs font-semibold text-gray-700">
//           {categories.map((cat, idx) => (
//             <button 
//               key={idx} 
//               onClick={() => handleCategoryClick(cat)}
//               className="hover:text-amber-600 transition-colors uppercase tracking-wider py-0.5 relative group"
//             >
//               {cat}
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
//             </button>
//           ))}
//         </div>
//       </nav>
//     </header>
//   );
// }


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar({ onOpenMobileMenu, onSelectCategory }) {
  const { cartItems, setIsCartOpen } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  // Defensive array check to prevent runtime errors
  const safeCartItems = Array.isArray(cartItems) ? cartItems : [];
  const totalCount = safeCartItems.reduce((acc, item) => acc + (item?.quantity || 1), 0);

  const categories = [
    'Home',
    'Makhana Dessert',
    'Phool Makhana',
    'Roasted Makhana',
    'Makhana Powder',
    'New Makhana Taste',
    'Blogs',
    'Contact'
  ];

  const handleCategoryClick = (cat) => {
    if (onSelectCategory) {
      if (cat === 'Home') {
        onSelectCategory('All');
      } else {
        onSelectCategory(cat);
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left: Mobile Menu Trigger & Custom Premium Brand Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button 
            onClick={onOpenMobileMenu} 
            className="lg:hidden p-1.5 text-gray-700 hover:text-amber-600 transition-colors rounded-lg active:bg-gray-100"
            aria-label="Open Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          {/* CUSTOM ULTRA-PREMIUM LOGO */}
          <Link to="/" onClick={() => handleCategoryClick('Home')} className="flex items-center gap-2.5 group">
            
            {/* Custom Designed SVG Logo Badge */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-red-700 via-amber-600 to-amber-500 p-[2px] shadow-md group-hover:scale-105 transition-all duration-300">
              <div className="w-full h-full bg-gradient-to-b from-amber-50 via-white to-red-50 rounded-[10px] flex items-center justify-center relative overflow-hidden">
                
                {/* Embedded Lotus & Crown SVG Accent in Background */}
                <svg className="absolute w-8 h-8 opacity-15 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z" />
                </svg>

                {/* Stylish Serif Sharp M Logo */}
                <span className="font-serif font-black text-xl sm:text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-red-700 via-amber-600 to-amber-800 drop-shadow-sm select-none">
                  M
                </span>

                {/* Small Sparkle Icon */}
                <span className="absolute top-1 right-1 text-[9px] text-amber-500 animate-pulse">✨</span>
              </div>
            </div>

            {/* Brand Typography */}
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight leading-none bg-gradient-to-r from-gray-900 via-red-900 to-amber-800 bg-clip-text text-transparent font-serif">
                Maltidelight
              </span>
              <span className="text-[8px] sm:text-[10px] font-extrabold text-amber-700 tracking-[0.24em] uppercase leading-tight mt-0.5">
                Pure & Nutritious
              </span>
            </div>
          </Link>
        </div>

        {/* Center Search Bar */}
        <div className="flex-1 max-w-xl mx-2 hidden sm:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search premium makhana products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2 bg-gray-50/80 border border-gray-200 rounded-full text-xs sm:text-sm focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/20 transition-all"
            />
            <button className="absolute right-3 top-2.5 text-gray-400 hover:text-amber-600 transition-colors">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Side: Bulk Call Enquiry & Cart Button */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden md:flex flex-col text-right text-xs">
            <span className="text-gray-400 font-medium text-[10px] uppercase tracking-wider">Bulk Enquiry</span>
            <span className="font-bold text-gray-800 hover:text-amber-600 transition-colors">
              +91 88265 64286
            </span>
          </div>

          {/* Cart Icon Button */}
          <button 
            onClick={() => setIsCartOpen(true)} 
            className="relative p-2 text-gray-700 hover:text-amber-600 transition-colors rounded-full hover:bg-amber-50"
            aria-label="Shopping Cart"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            {totalCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-black w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                {totalCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search Input */}
      <div className="px-3 pb-2.5 sm:hidden">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-3.5 pr-9 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs focus:outline-none focus:border-amber-500"
          />
          <button className="absolute right-3 top-2 text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Categories Horizontal Navigation */}
      <nav className="hidden lg:block border-t border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 flex justify-center space-x-8 py-2 text-xs font-semibold text-gray-700">
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              onClick={() => handleCategoryClick(cat)}
              className="hover:text-amber-600 transition-colors uppercase tracking-wider py-0.5 relative group"
            >
              {cat}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
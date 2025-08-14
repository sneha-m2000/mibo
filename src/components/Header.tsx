// import React from 'react';
// import { MdPhone } from 'react-icons/md';
// import { RiWhatsappFill } from 'react-icons/ri';

// const Header: React.FC = () => {
//     return (
//         <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
//             <div className="max-w-[1380px] mx-auto flex items-center justify-between px-8 py-4">
//                 {/* Logo & Tagline */}
//                 <div className="flex flex-col items-start">
//                     <h1 className="text-2xl font-bold text-[#34b9a5]">Mibo</h1>
//                     <span className="text-xs text-gray-600 uppercase tracking-wide">Your Mental Health Partner</span>
//                 </div>

//                 {/* Navigation Menu */}
//                 <nav className="flex gap-6 text-sm text-gray-700 font-medium">
//                     {['ABOUT US', 'SERVICES', 'EXPERTS', 'CENTRES', 'PARTNERS', 'RESOURCES'].map((item) => (
//                         <div key={item} className="relative group cursor-pointer">
//                             <span className="group-hover:text-[#34b9a5]">{item} ▾</span>
//                         </div>
//                     ))}
//                 </nav>

//                 {/* Action Buttons */}
//                 <div className="flex items-center gap-4">
//                     <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-[#34b9a5] text-[#34b9a5]">
//                         <MdPhone className="text-xl" />
//                     </button>
//                     <button className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white hover:opacity-90">
//                         <RiWhatsappFill className="text-xl" />
//                     </button>
//                     <button className="bg-[#1c0d54] text-white px-6 py-2 rounded-full hover:bg-opacity-90 font-semibold">
//                         SIGN IN
//                     </button>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;

// import React, { useState } from 'react';
// import { MdPhone } from 'react-icons/md';
// import { RiWhatsappFill } from 'react-icons/ri';
// import { HiMenu, HiX } from 'react-icons/hi';

// const Header: React.FC = () => {
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
//             <div className="max-w-[1480px] mx-auto flex items-center justify-between flex-wrap px-4 sm:px-6 lg:px-8 py-4">
//                 {/* Logo & Tagline */}
//                 <div className="flex flex-col items-start">
//                     <h1 className="text-2xl font-bold text-[#34b9a5]">Mibo</h1>
//                     <span className="text-xs text-gray-600 uppercase tracking-wide">Your Mental Health Partner</span>
//                 </div>

//                 {/* Hamburger for small/medium screens */}
//                 <div className="lg:hidden ml-auto">
//                     <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#34b9a5] text-2xl">
//                         {menuOpen ? <HiX /> : <HiMenu />}
//                     </button>
//                 </div>

//                 {/* Desktop Navigation & Actions */}
//                 <div className="hidden lg:flex items-center justify-between gap-6">
//                     {/* Navigation */}
//                     <nav className="flex gap-5 text-sm text-gray-700 font-medium">
//                         {['ABOUT US', 'SERVICES', 'EXPERTS', 'CENTRES', 'PARTNERS', 'RESOURCES'].map((item) => (
//                             <span key={item} className="hover:text-[#34b9a5] cursor-pointer">
//                                 {item} ▾
//                             </span>
//                         ))}
//                     </nav>

//                     {/* Action Buttons */}
//                     <div className="flex items-center gap-4 ml-6">
//                         <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-[#34b9a5] text-[#34b9a5]">
//                             <MdPhone className="text-xl" />
//                         </button>
//                         <button className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white hover:opacity-90">
//                             <RiWhatsappFill className="text-xl" />
//                         </button>
//                         <button className="bg-[#1c0d54] text-white px-6 py-2 rounded-full hover:bg-opacity-90 font-semibold whitespace-nowrap">
//                             SIGN IN
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile / Tablet Dropdown Menu */}
//             {menuOpen && (
//                 <div className="lg:hidden px-4 py-3 shadow-md bg-white">
//                     {/* Navigation */}
//                     <nav className="flex flex-col gap-3 text-sm text-gray-700 font-medium">
//                         {['ABOUT US', 'SERVICES', 'EXPERTS', 'CENTRES', 'PARTNERS', 'RESOURCES'].map((item) => (
//                             <span key={item} className="hover:text-[#34b9a5] cursor-pointer">
//                                 {item}
//                             </span>
//                         ))}
//                     </nav>

//                     {/* Action Buttons */}
//                     <div className="mt-4 flex flex-col gap-3">
//                         <button className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-full text-[#34b9a5]">
//                             <MdPhone className="mr-2 text-lg" /> Call Us
//                         </button>
//                         <button className="w-full flex items-center justify-center py-2 bg-green-500 text-white rounded-full">
//                             <RiWhatsappFill className="mr-2 text-lg" /> WhatsApp
//                         </button>
//                         <button className="w-full bg-[#1c0d54] text-white py-2 rounded-full font-semibold">SIGN IN</button>
//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// };

// export default Header;

// import React, { useState } from 'react';
// import PhoneIcon from '@mui/icons-material/Phone';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

// const Header: React.FC = () => {
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
//             <div className="max-w-[1480px] mx-auto flex items-center justify-between flex-wrap px-4 sm:px-6 lg:px-8 py-4">
//                 {/* Logo & Tagline */}
//                 <div className="flex flex-col items-start">
//                     <h1 className="text-2xl font-bold text-[#34b9a5]">Mibo</h1>
//                     <span className="text-xs text-gray-600 uppercase tracking-wide">Your Mental Health Partner</span>
//                 </div>

//                 {/* Hamburger for small/medium screens */}
//                 <div className="lg:hidden ml-auto">
//                     <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#34b9a5] text-2xl">
//                         {menuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
//                     </button>
//                 </div>

//                 {/* Desktop Navigation & Actions */}
//                 <div className="hidden lg:flex items-center justify-between gap-6">
//                     {/* Navigation */}
//                     <nav className="flex gap-5 text-sm text-gray-700 font-medium">
//                         {['ABOUT US', 'SERVICES', 'EXPERTS', 'CENTRES', 'PARTNERS', 'RESOURCES'].map((item) => (
//                             <span key={item} className="hover:text-[#34b9a5] cursor-pointer">
//                                 {item} ▾
//                             </span>
//                         ))}
//                     </nav>

//                     {/* Action Buttons */}
//                     <div className="flex items-center gap-6 ml-6">
//                         <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-[#34b9a5] text-[#34b9a5]">
//                             <PhoneIcon />
//                         </button>
//                         <button className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white hover:opacity-90">
//                             <WhatsAppIcon />
//                         </button>
//                         <button className="bg-[#1c0d54] text-white px-6 py-2 rounded-full hover:bg-opacity-90 font-semibold whitespace-nowrap">
//                             SIGN IN
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile / Tablet Dropdown Menu */}
//             {menuOpen && (
//                 <div className="lg:hidden px-4 py-3 shadow-md bg-white">
//                     {/* Navigation */}
//                     <nav className="flex flex-col gap-3 text-sm text-gray-700 font-medium">
//                         {['ABOUT US', 'SERVICES', 'EXPERTS', 'CENTRES', 'PARTNERS', 'RESOURCES'].map((item) => (
//                             <span key={item} className="hover:text-[#34b9a5] cursor-pointer">
//                                 {item}
//                             </span>
//                         ))}
//                     </nav>

//                     {/* Action Buttons */}
//                     <div className="mt-4 flex flex-col gap-3">
//                         <button className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-full text-[#34b9a5]">
//                             <PhoneIcon className="mr-2" /> Call Us
//                         </button>
//                         <button className="w-full flex items-center justify-center py-2 bg-green-500 text-white rounded-full">
//                             <WhatsAppIcon className="mr-2" /> WhatsApp
//                         </button>
//                         <button className="w-full bg-[#1c0d54] text-white py-2 rounded-full font-semibold">SIGN IN</button>
//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// };

// export default Header;

// import React, { useState } from 'react';
// import PhoneIcon from '@mui/icons-material/Phone';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

// const Header: React.FC = () => {
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
//             <div className="max-w-[1480px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 flex-wrap gap-y-2">
//                 {/* Logo & Tagline */}
//                 <div className="flex flex-col items-start flex-shrink-0">
//                     <h1 className="text-xl md:text-xl lg:text-2xl font-bold text-[#34b9a5]">Mibo</h1>
//                     <span className="text-xs md:text-sm text-gray-600 uppercase tracking-wide">
//                         Your Mental Health Partner
//                     </span>
//                 </div>

//                 {/* Hamburger Menu - Visible below lg */}
//                 <div className="flex lg:hidden ml-auto">
//                     <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#34b9a5] text-3xl">
//                         {menuOpen ? <CloseIcon fontSize="inherit" /> : <MenuIcon fontSize="inherit" />}
//                     </button>
//                 </div>

//                 {/* Desktop Navigation - Centered */}
//                 <nav className="hidden lg:flex flex-grow justify-center gap-2 md:gap-3 lg:gap-4 text-sm text-gray-700 font-medium">
//                     {['ABOUT US', 'SERVICES', 'EXPERTS', 'CENTRES', 'PARTNERS', 'RESOURCES'].map((item) => (
//                         <span key={item} className="hover:text-[#34b9a5] cursor-pointer">
//                             {item} ▾
//                         </span>
//                     ))}
//                 </nav>

//                 {/* Desktop Action Buttons */}
//                 <div className="hidden lg:flex items-center gap-2 md:gap-3 flex-shrink-0">
//                     <button className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-[#34b9a5] text-[#34b9a5]">
//                         <PhoneIcon />
//                     </button>
//                     <button className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-green-500 text-white hover:opacity-90">
//                         <WhatsAppIcon />
//                     </button>
//                     <button className="bg-[#1c0d54] text-white px-4 md:px-5 lg:px-6 py-2 rounded-full hover:bg-opacity-90 font-semibold whitespace-nowrap text-sm">
//                         SIGN IN
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile / Tablet Dropdown Menu */}
//             {menuOpen && (
//                 <div className="lg:hidden px-4 py-3 shadow-md bg-white space-y-4 max-w-[768px] mx-auto">
//                     {/* Navigation */}
//                     <nav className="flex flex-col gap-3 text-sm text-gray-700 font-medium">
//                         {['ABOUT US', 'SERVICES', 'EXPERTS', 'CENTRES', 'PARTNERS', 'RESOURCES'].map((item) => (
//                             <span key={item} className="hover:text-[#34b9a5] cursor-pointer">
//                                 {item}
//                             </span>
//                         ))}
//                     </nav>

//                     {/* Action Buttons */}
//                     <div className="flex flex-col gap-3">
//                         <button className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-full text-[#34b9a5] text-sm">
//                             <PhoneIcon className="mr-2" /> Call Us
//                         </button>
//                         <button className="w-full flex items-center justify-center py-2 bg-green-500 text-white rounded-full text-sm">
//                             <WhatsAppIcon className="mr-2" /> WhatsApp
//                         </button>
//                         <button className="w-full bg-[#1c0d54] text-white py-2 rounded-full font-semibold text-sm">
//                             SIGN IN
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// };

// export default Header;

// import React, { useState, useEffect } from 'react';
// import PhoneIcon from '@mui/icons-material/Phone';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

// const Header: React.FC = () => {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         // Trigger animation on mount
//         const timer = setTimeout(() => {
//             setIsVisible(true);
//         }, 100);

//         return () => clearTimeout(timer);
//     }, []);

//     return (
//         <header
//             className={`w-full fixed top-0 left-0 z-50 bg-transparent backdrop-blur-none shadow-none transition-all duration-1000 ease-out ${
//                 isVisible ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-full opacity-0'
//             }`}
//         >
//             <div className="max-w-[1480px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 flex-wrap gap-y-2">
//                 {/* Logo & Tagline */}
//                 <div
//                     className={`flex flex-col items-start flex-shrink-0 transition-all duration-800 delay-300 ease-out ${
//                         isVisible ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-8 opacity-0'
//                     }`}
//                 >
//                     <h1 className="text-xl md:text-xl lg:text-2xl font-bold text-[#34b9a5]">Mibo</h1>
//                     <span className="text-xs md:text-sm text-black-400 uppercase">
//                         Your Mental Health Partner
//                     </span>
//                 </div>

//                 {/* Hamburger Menu - Visible below lg */}
//                 <div
//                     className={`flex lg:hidden ml-auto transition-all duration-600 delay-500 ease-out ${
//                         isVisible ? 'transform scale-100 opacity-100' : 'transform scale-0 opacity-0'
//                     }`}
//                 >
//                     <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#34b9a5] text-3xl">
//                         {menuOpen ? <CloseIcon fontSize="inherit" /> : <MenuIcon fontSize="inherit" />}
//                     </button>
//                 </div>

//                 {/* Desktop Navigation - Centered */}
//                 <nav
//                     className={`hidden lg:flex flex-grow justify-center gap-2 md:gap-3 lg:gap-4 text-sm text-black font-medium transition-all duration-800 delay-400 ease-out ${
//                         isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-0'
//                     }`}
//                 >
//                     {['ABOUT US', 'SERVICES', 'EXPERTS', 'CENTRES', 'PARTNERS', 'RESOURCES'].map((item, index) => (
//                         <span
//                             key={item}
//                             className={`hover:text-[#34b9a5] cursor-pointer transition-all duration-300 ${
//                                 isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-2 opacity-0'
//                             }`}
//                             style={{
//                                 transitionDelay: `${600 + index * 100}ms`,
//                             }}
//                         >
//                             {item} ▾
//                         </span>
//                     ))}
//                 </nav>

//                 {/* Desktop Action Buttons */}
//                 <div
//                     className={`hidden lg:flex items-center gap-2 md:gap-3 flex-shrink-0 transition-all duration-800 delay-600 ease-out ${
//                         isVisible ? 'transform translate-x-0 opacity-100' : 'transform translate-x-8 opacity-0'
//                     }`}
//                 >
//                     <button
//                         className={`w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-[#34b9a5] text-[#34b9a5] bg-white bg-opacity-10 transition-all duration-300 ${
//                             isVisible ? 'transform scale-100 opacity-100' : 'transform scale-0 opacity-0'
//                         }`}
//                         style={{ transitionDelay: '800ms' }}
//                     >
//                         <PhoneIcon />
//                     </button>
//                     <button
//                         className={`w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-green-500 text-white hover:opacity-90 transition-all duration-300 ${
//                             isVisible ? 'transform scale-100 opacity-100' : 'transform scale-0 opacity-0'
//                         }`}
//                         style={{ transitionDelay: '900ms' }}
//                     >
//                         <WhatsAppIcon />
//                     </button>
//                     <button
//                         className={`bg-[#1c0d54] text-white px-4 md:px-5 lg:px-6 py-2 rounded-full hover:bg-opacity-90 font-semibold whitespace-nowrap text-sm transition-all duration-300 ${
//                             isVisible ? 'transform scale-100 opacity-100' : 'transform scale-0 opacity-0'
//                         }`}
//                         style={{ transitionDelay: '1000ms' }}
//                     >
//                         SIGN IN
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile / Tablet Dropdown Menu */}
//             {menuOpen && (
//                 <div
//                     className={`lg:hidden px-4 py-3 shadow-md bg-white bg-opacity-90 backdrop-blur-md space-y-4 max-w-[768px] mx-auto transition-all duration-500 ease-out ${
//                         menuOpen ? 'animate-slide-down opacity-100' : 'opacity-0'
//                     }`}
//                 >
//                     {/* Navigation */}
//                     <nav className="flex flex-col gap-3 text-sm text-gray-800 font-medium">
//                         {['ABOUT US', 'SERVICES', 'EXPERTS', 'CENTRES', 'PARTNERS', 'RESOURCES'].map((item, index) => (
//                             <span
//                                 key={item}
//                                 className="hover:text-[#34b9a5] cursor-pointer transition-all duration-300"
//                                 style={{
//                                     animationDelay: `${index * 50}ms`,
//                                     animation: menuOpen ? 'fadeInUp 0.3s ease-out forwards' : 'none',
//                                 }}
//                             >
//                                 {item}
//                             </span>
//                         ))}
//                     </nav>

//                     {/* Action Buttons */}
//                     <div className="flex flex-col gap-3">
//                         <button
//                             className="w-full flex items-center justify-center py-2 border border-gray-300 rounded-full text-[#34b9a5] text-sm bg-white bg-opacity-70 transition-all duration-300"
//                             style={{
//                                 animationDelay: '300ms',
//                                 animation: menuOpen ? 'fadeInUp 0.3s ease-out forwards' : 'none',
//                             }}
//                         >
//                             <PhoneIcon className="mr-2" /> Call Us
//                         </button>
//                         <button
//                             className="w-full flex items-center justify-center py-2 bg-green-500 text-white rounded-full text-sm transition-all duration-300 "
//                             style={{
//                                 animationDelay: '350ms',
//                                 animation: menuOpen ? 'fadeInUp 0.3s ease-out forwards' : 'none',
//                             }}
//                         >
//                             <WhatsAppIcon className="mr-2" /> WhatsApp
//                         </button>
//                         <button
//                             className="w-full bg-[#1c0d54] text-white py-2 rounded-full font-semibold text-sm transition-all duration-300"
//                             style={{
//                                 animationDelay: '400ms',
//                                 animation: menuOpen ? 'fadeInUp 0.3s ease-out forwards' : 'none',
//                             }}
//                         >
//                             SIGN IN
//                         </button>
//                     </div>
//                 </div>
//             )}

//             <style>{`
//                 @keyframes fadeInUp {
//                     from {
//                         opacity: 0;
//                         transform: translateY(10px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }

//                 @keyframes slide-down {
//                     from {
//                         opacity: 0;
//                         transform: translateY(-10px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }

//                 .animate-slide-down {
//                     animation: slide-down 0.3s ease-out;
//                 }
//             `}</style>
//         </header>
//     );
// };

// // Demo component to show the header
// const App = () => {
//     return (
//         // <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-blue-900 to-teal-800">
//         //     <Header />
//         //     <div className="pt-32 px-8 text-center text-white">
//         //         <h2 className="text-4xl font-bold mb-4">Your Header with Entrance Animation</h2>
//         //         <p className="text-lg opacity-80 max-w-2xl mx-auto">
//         //             The header now slides down smoothly when the page loads, keeping all your original content and styling
//         //             intact.
//         //         </p>
//         //         <div className="mt-16 space-y-4">
//         //             <div className="h-40 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm"></div>
//         //             <div className="h-40 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm"></div>
//         //             <div className="h-40 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm"></div>
//         //         </div>
//         //     </div>
//         // </div>
//         <div className="relative w-full min-h-screen overflow-hidden">
//             {/* 🔹 Fullscreen Video */}
//             <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
//                 <source src="/home_vedio.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>

//             {/* 🔹 Optional: Dark overlay for readability */}

//             {/* 🔹 Page content (Header + others) */}
//             <div className="relative z-20">
//                 <Header />
//                 {/* More content here */}
//             </div>
//         </div>
//     );
// };

// export default App;

// import React, { useState, useEffect } from 'react';
// import { Phone, MessageCircle, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

// const Header = () => {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setIsVisible(true);
//         }, 100);
//         return () => clearTimeout(timer);
//     }, []);

//     return (
//         // <header
//         //     className={`w-full fixed top-0 left-0 z-50 bg-gradient-to-b from-black/50 to-transparent  transition-all duration-1000 ease-out ${
//         //         isVisible ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-full opacity-0'
//         //     }`}
//         // >
//         <header
//     className={`w-full fixed top-0 left-0 z-50
//         bg-gradient-to-b from-black to-black
//         md:from-black/50 md:to-transparent
//         transition-all duration-1000 ease-out
//         ${isVisible ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-full opacity-0'}
//     `}
// >

//             <div className="max-w-[1480px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 flex-wrap gap-y-2">
//                 {/* Logo & Tagline */}
//                 <div
//                     className={`flex flex-col items-start flex-shrink-0 transition-all duration-800 delay-300 ease-out ${
//                         isVisible ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-8 opacity-0'
//                     }`}
//                 >
//                     <h1 className="text-xl md:text-xl lg:text-2xl font-bold text-[#34b9a5] drop-shadow-lg">Mibo</h1>
//                     <span className="text-xs md:text-sm text-white/90 uppercase tracking-wider drop-shadow">
//                         Your Mental Health Partner
//                     </span>
//                 </div>

//                 {/* Hamburger Menu - Mobile */}
//                 <div
//                     className={`flex lg:hidden ml-auto transition-all duration-600 delay-500 ease-out ${
//                         isVisible ? 'transform scale-100 opacity-100' : 'transform scale-0 opacity-0'
//                     }`}
//                 >
//                     <button
//                         onClick={() => setMenuOpen(!menuOpen)}
//                         className="text-white hover:text-[#34b9a5] text-3xl transition-colors duration-300 drop-shadow-lg"
//                     >
//                         {menuOpen ? <X size={32} /> : <Menu size={32} />}
//                     </button>
//                 </div>

//                 {/* Desktop Navigation */}
//                 <nav
//                     className={`hidden lg:flex flex-grow justify-center gap-6 text-sm text-white font-medium transition-all duration-800 delay-400 ease-out ${
//                         isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-0'
//                     }`}
//                 >
//                     {['ABOUT US', 'WHO IT S FOR', 'SERVICES', 'WHY MIBO', 'LOCATIONS', 'EXPERTS', 'BLOG'].map(
//                         (item, index) => (
//                             <span
//                                 key={item}
//                                 className={`hover:text-[#34b9a5] cursor-pointer transition-all duration-300 drop-shadow ${
//                                     isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-2 opacity-0'
//                                 }`}
//                                 style={{
//                                     transitionDelay: `${600 + index * 100}ms`,
//                                 }}
//                             >
//                                 {item} ▾
//                             </span>
//                         )
//                     )}
//                 </nav>

//                 {/* Desktop Action Buttons */}
//                 <div
//                     className={`hidden lg:flex items-center gap-3 flex-shrink-0 transition-all duration-800 delay-600 ease-out ${
//                         isVisible ? 'transform translate-x-0 opacity-100' : 'transform translate-x-8 opacity-0'
//                     }`}
//                 >
//                     <button
//                         className={`w-10 h-10 flex items-center justify-center rounded-full border border-white/30 hover:border-[#34b9a5] text-white hover:text-[#34b9a5] bg-black/20 backdrop-blur-sm transition-all duration-300 ${
//                             isVisible ? 'transform scale-100 opacity-100' : 'transform scale-0 opacity-0'
//                         }`}
//                         style={{ transitionDelay: '800ms' }}
//                     >
//                         <Phone size={18} />
//                     </button>
//                     <button
//                         className={`w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300 ${
//                             isVisible ? 'transform scale-100 opacity-100' : 'transform scale-0 opacity-0'
//                         }`}
//                         style={{ transitionDelay: '900ms' }}
//                     >
//                         <MessageCircle size={18} />
//                     </button>
//                     <button
//                         className={`bg-[#1c0d54] text-white px-6 py-2 rounded-full hover:bg-[#2a1470] font-semibold whitespace-nowrap text-sm transition-all duration-300 shadow-lg ${
//                             isVisible ? 'transform scale-100 opacity-100' : 'transform scale-0 opacity-0'
//                         }`}
//                         style={{ transitionDelay: '1000ms' }}
//                     >
//                         SIGN IN
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Dropdown Menu */}
//             {menuOpen && (
//                 <div className="lg:hidden px-4 py-6 bg-black/90 backdrop-blur-lg border-t border-white/10">
//                     <nav className="flex flex-col gap-4 text-white font-medium mb-6">
//                         {['ABOUT US', 'WHO IT S FOR', 'SERVICES', 'WHY MIBO', 'LOCATIONS', 'EXPERTS', 'BLOG'].map(
//                             (item, index) => (
//                                 <span
//                                     key={item}
//                                     className="hover:text-[#34b9a5] cursor-pointer transition-colors duration-300 py-2 border-b border-white/10"
//                                     style={{
//                                         animationDelay: `${index * 50}ms`,
//                                         animation: 'fadeInUp 0.3s ease-out forwards',
//                                     }}
//                                 >
//                                     {item}
//                                 </span>
//                             )
//                         )}
//                     </nav>

//                     <div className="flex flex-col gap-3">
//                         <button className="w-full flex items-center justify-center py-3 border border-white/20 rounded-full text-white bg-black/30 backdrop-blur-sm">
//                             <Phone size={18} className="mr-2" /> Call Us
//                         </button>
//                         <button className="w-full flex items-center justify-center py-3 bg-green-500 text-white rounded-full">
//                             <MessageCircle size={18} className="mr-2" /> WhatsApp
//                         </button>
//                         <button className="w-full bg-[#1c0d54] text-white py-3 rounded-full font-semibold">SIGN IN</button>
//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// };

// const PremiumSlider = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [isPaused, setIsPaused] = useState(false);

//     // Sample service images - replace with your actual service images
//     const slides = [
//         {
//             id: 1,
//             image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
//             title: 'Individual Therapy',
//             subtitle: 'Personalized mental health support',
//         },
//         {
//             id: 2,
//             image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop',
//             title: 'Group Sessions',
//             subtitle: 'Community-based healing',
//         },
//         {
//             id: 3,
//             image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop',
//             title: 'Online Counseling',
//             subtitle: 'Remote support from anywhere',
//         },
//         {
//             id: 4,
//             image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
//             title: 'Family Therapy',
//             subtitle: 'Strengthening family bonds',
//         },
//         {
//             id: 5,
//             image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
//             title: 'Wellness Programs',
//             subtitle: 'Holistic mental health approach',
//         },
//     ];

//     // Auto-scroll functionality
//     useEffect(() => {
//         if (!isPaused) {
//             const interval = setInterval(() => {
//                 setCurrentSlide((prev) => (prev + 1) % slides.length);
//             }, 4000);
//             return () => clearInterval(interval);
//         }
//     }, [isPaused, slides.length]);

//     const nextSlide = () => {
//         setCurrentSlide((prev) => (prev + 1) % slides.length);
//     };

//     const prevSlide = () => {
//         setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     };

//     return (
//         <div
//             className="relative w-full h-[70vh] overflow-hidden bg-black"
//             onMouseEnter={() => setIsPaused(true)}
//             onMouseLeave={() => setIsPaused(false)}
//         >
//             {/* Slides Container */}
//             <div
//                 className="flex h-full transition-transform duration-700 ease-out"
//                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//             >
//                 {slides.map((slide) => (
//                     <div key={slide.id} className="relative w-full h-full flex-shrink-0">
//                         {/* Background Image */}
//                         <img
//                             src={slide.image}
//                             alt={slide.title}
//                             className="absolute inset-0 w-full h-full object-cover md:object-contain"
//                         />

//                         {/* Gradient Overlay */}
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

//                         {/* Content Overlay */}
//                         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white p-4 max-w-md">
//                             <h3 className="text-2xl font-bold mb-2 drop-shadow-lg animate-fade-in-up">{slide.title}</h3>
//                             <p className="text-sm opacity-90 drop-shadow animate-fade-in-up delay-200">{slide.subtitle}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Navigation Arrows */}
//             <button
//                 onClick={prevSlide}
//                 className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-black/50 transition-all duration-300"
//             >
//                 <ChevronLeft size={20} />
//             </button>

//             <button
//                 onClick={nextSlide}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-black/50 transition-all duration-300"
//             >
//                 <ChevronRight size={20} />
//             </button>

//             {/* Slide Indicators */}
//             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
//                 {slides.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => setCurrentSlide(index)}
//                         className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
//                             index === currentSlide ? 'bg-[#34b9a5] scale-125' : 'bg-white/50 hover:bg-white/70'
//                         }`}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// //             {/* Progress Bar */}
// //             <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
// //                 <div
// //                     className="h-full bg-[#34b9a5] transition-all duration-300"
// //                     style={{
// //                         width: `${((currentSlide + 1) / slides.length) * 100}%`
// //                     }}
// //                 />
// //             </div>
// //         </div>`
// //     );
// // };

// const DesktopVideo = () => {
//     return (
//         <div className="relative w-full h-screen overflow-hidden">
//             <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
//                 <source src="/home_vedio.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>

//             {/* Dark overlay for readability */}
//             <div className="absolute inset-0 bg-black/20 z-10" />
//         </div>
//     );
// };

// const App = () => {
//     const [isMobile, setIsMobile] = useState(false);

//     useEffect(() => {
//         const checkDevice = () => {
//             setIsMobile(window.innerWidth < 768);
//         };

//         checkDevice();
//         window.addEventListener('resize', checkDevice);
//         return () => window.removeEventListener('resize', checkDevice);
//     }, []);

//     return (
//         <div className="relative w-full min-h-screen overflow-hidden">
//             {/* Background - Mobile Slider or Desktop Video */}
//             {isMobile ? <PremiumSlider /> : <DesktopVideo />}

//             {/* Header */}
//             <div className="relative z-50">
//                 <Header />
//             </div>

//             <style>{`
//                 @keyframes fadeInUp {
//                     from {
//                         opacity: 0;
//                         transform: translateY(20px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }

//                 @keyframes fade-in-up {
//                     from {
//                         opacity: 0;
//                         transform: translateY(30px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }

//                 .animate-fade-in-up {
//                     animation: fade-in-up 0.8s ease-out forwards;
//                 }

//                 .delay-200 {
//                     animation-delay: 200ms;
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import LiquidButton from './Button';
import PremiumFlipDropdown from './who_its_for';
import miboIcon from '../assets/logo.png.png';
import PremiumSlider from './slider';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <header
            className={`w-full fixed top-0 left-0 z-50 
   bg-gradient-to-b from-[#2FA19A] to-[rgba(255,255,255,0.8)] backdrop-blur-md
    md:from-transparent md:to-transparent md:backdrop-blur-none
    transition-all duration-1000 ease-out
    ${isVisible ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-full opacity-0'}
  `}
        >
            <div className="max-w-[1480px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 flex-wrap gap-y-2">
                {/* Logo & Tagline */}
                <div
                    className={`flex flex-col items-start flex-shrink-0 transition-all duration-800 delay-300 ease-out ${
                        isVisible ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-8 opacity-0'
                    }`}
                >
                    {/* <h1 className="text-xl md:text-xl lg:text-2xl font-bold text-[#34b9a5] drop-shadow-lg">Mibo</h1> */}
                    <img
                        src={miboIcon}
                        alt="Mibo Icon"
                        className="w-12 h-12 md:w-14 md:h-14 lg:w-14 lg:h-14 drop-shadow-lg"
                    />
                    {/* <img
                        src={miboIcon}
                        alt="Mibo Icon"
                        className="
    w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12
    drop-shadow-lg
    rounded-full
    border-2 border-[#004687]
    bg-white/5
    p-1
    hover:scale-110 hover:shadow-[0_0_10px_#FFD700]
    transition-all duration-300 ease-in-out
  "
                    /> */}

                    {/* <span className="text-xs md:text-sm text-white/90 uppercase tracking-wider drop-shadow">
                        Your Mental Health Partner
                    </span> */}
                </div>

                {/* Hamburger Menu - Mobile */}
                <div
                    className={`flex lg:hidden ml-auto transition-all duration-600 delay-500 ease-out ${
                        isVisible ? 'transform scale-100 opacity-100' : 'transform scale-0 opacity-0'
                    }`}
                >
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-[#18356C] hover:text-[#34b9a5] text-3xl transition-colors duration-300 drop-shadow-lg"
                    >
                        {menuOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>

                {/* Desktop Navigation */}
                <nav
                    className={`hidden lg:flex flex-grow justify-center gap-6 text-sm text-white font-medium transition-all duration-800 delay-400 ease-out ${
                        isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-0'
                    }`}
                >
                    {['ABOUT US', "WHO IT'S FOR", 'SERVICES', 'WHY MIBO', 'LOCATIONS', 'EXPERTS', 'BLOG'].map(
                        (item, index) => (
                            <span
                                key={item}
                                className={`hover:text-[#34b9a5] cursor-pointer transition-all duration-300 drop-shadow-lg hover:scale-105 ${
                                    isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-2 opacity-0'
                                }`}
                                style={{
                                    transitionDelay: `${600 + index * 100}ms`,
                                }}
                            >
                                {item} ▾
                            </span>
                        )
                    )}
                </nav>

                {/* Desktop Action Buttons */}
                <div
                    className={`hidden lg:flex items-center gap-3 flex-shrink-0 transition-all duration-800 delay-600 ease-out ${
                        isVisible ? 'transform translate-x-0 opacity-100' : 'transform translate-x-8 opacity-0'
                    }`}
                >
                    <button
                        className={`w-10 h-10 flex items-center justify-center rounded-full border border-white/30 hover:border-[#34b9a5] text-white hover:text-[#34b9a5] bg-black/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
                            isVisible ? 'transform scale-100 opacity-100' : 'transform scale-0 opacity-0'
                        }`}
                        style={{ transitionDelay: '800ms' }}
                    >
                        <Phone size={18} />
                    </button>
                    <button
                        className={`w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300 hover:scale-110 ${
                            isVisible ? 'transform scale-100 opacity-100' : 'transform scale-0 opacity-0'
                        }`}
                        style={{ transitionDelay: '900ms' }}
                    >
                        <MessageCircle size={18} />
                    </button>
                    <button
                        className={`bg-[#1c0d54] text-white px-6 py-2 rounded-full hover:bg-[#2a1470] font-semibold whitespace-nowrap text-sm transition-all duration-300 shadow-lg hover:scale-105 ${
                            isVisible ? 'transform scale-100 opacity-100' : 'transform scale-0 opacity-0'
                        }`}
                        style={{ transitionDelay: '1000ms' }}
                    >
                        SIGN IN
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="lg:hidden px-4 py-6 bg-black/95 backdrop-blur-lg border-t border-white/20">
                    <nav className="flex flex-col gap-4 text-white font-medium mb-6">
                        {['ABOUT US', "WHO IT'S FOR", 'SERVICES', 'WHY MIBO', 'LOCATIONS', 'EXPERTS', 'BLOG'].map(
                            (item, index) => (
                                <span
                                    key={item}
                                    className="hover:text-[#34b9a5] cursor-pointer transition-colors duration-300 py-2 border-b border-white/10 hover:border-[#34b9a5]/30"
                                    style={{
                                        animationDelay: `${index * 50}ms`,
                                        animation: 'fadeInUp 0.3s ease-out forwards',
                                    }}
                                >
                                    {item}
                                </span>
                            )
                        )}
                    </nav>

                    <div className="flex flex-col gap-3">
                        <button className="w-full flex items-center justify-center py-3 border border-white/20 rounded-full text-white bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-all duration-300">
                            <Phone size={18} className="mr-2" /> Call Us
                        </button>
                        <button className="w-full flex items-center justify-center py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300">
                            <MessageCircle size={18} className="mr-2" /> WhatsApp
                        </button>
                        <button className="w-full bg-[#1c0d54] text-white py-3 rounded-full font-semibold hover:bg-[#2a1470] transition-all duration-300">
                            SIGN IN
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};


const DesktopVideo = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Fallback background for when video is loading */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                // poster="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=1080&fit=crop"
            >
                <source src="/home_vedio.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Enhanced overlay with subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 z-10" />
        </div>
    );
};

// const App = () => {
//     const [isMobile, setIsMobile] = useState(false);

//     useEffect(() => {
//         const checkDevice = () => {
//             setIsMobile(window.innerWidth < 768);
//         };

//         checkDevice();
//         window.addEventListener('resize', checkDevice);
//         return () => window.removeEventListener('resize', checkDevice);
//     }, []);

//     return (
//         <div className="relative w-full min-h-screen overflow-hidden">
//             {/* Header */}
//             <div className="relative z-50">
//                 <Header />
//             </div>

//             {/* Content - Mobile Slider positioned after header, Desktop Video full screen */}
//             <div className={`${isMobile ? 'pt-20' : 'pt-0'}`}>{isMobile ? <PremiumSlider /> : <DesktopVideo />}</div>

//             <style>{`
//                 @keyframes fadeInUp {
//                     from {
//                         opacity: 0;
//                         transform: translateY(20px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }

//                 @keyframes fade-in-up {
//                     from {
//                         opacity: 0;
//                         transform: translateY(30px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }

//                 .animate-fade-in-up {
//                     animation: fade-in-up 0.8s ease-out forwards;
//                 }

//                 .delay-200 {
//                     animation-delay: 200ms;
//                 }

//                 /* Custom scrollbar for webkit browsers */
//                 ::-webkit-scrollbar {
//                     width: 6px;
//                 }

//                 ::-webkit-scrollbar-track {
//                     background: rgba(0, 0, 0, 0.1);
//                 }

//                 ::-webkit-scrollbar-thumb {
//                     background: #34b9a5;
//                     border-radius: 3px;
//                 }

//                 ::-webkit-scrollbar-thumb:hover {
//                     background: #2a9d8f;
//                 }
//             `}</style>
//         </div>
//     );
// };

const App = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    // Assuming header height is 64px (adjust if different)
    // const headerHeight = 64;

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Header */}
            <div className="fixed top-0 left-0 w-full z-50">
                <Header />
            </div>

            {/* Content */}
            <div>
                {isMobile ? (
                    <>
                        <PremiumSlider />
                        {/* Place your Book Appointment button here */}
                        <div className="flex justify-center pt-5 pb-0">
                            <LiquidButton />
                        </div>
                        <PremiumFlipDropdown />
                    </>
                ) : (
                    <DesktopVideo />
                )}
            </div>

            {/* your styles */}
        </div>
    );
};

export default App;

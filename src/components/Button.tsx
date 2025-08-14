// import React from 'react';

// const LiquidButton = () => {
//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-900">
//             <button className="liquid-button relative px-8 py-4 text-lg font-semibold text-white bg-transparent border-none cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105">
//                 <span className="relative z-10">Click Me</span>

//                 {/* Liquid background layers */}
//                 <div className="liquid-bg absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full transform scale-75 opacity-80 transition-all duration-700 ease-out"></div>

//                 {/* Additional liquid layers for more complex animation */}
//                 <div className="liquid-bg-2 absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full transform scale-50 opacity-60 transition-all duration-500 ease-out"></div>

//                 <div className="liquid-bg-3 absolute inset-0 bg-gradient-to-r from-pink-400 via-blue-400 to-purple-400 rounded-full transform scale-25 opacity-40 transition-all duration-300 ease-out"></div>

//                 <style>{`
//                     .liquid-button {
//                         border-radius: 50px;
//                         backdrop-filter: blur(10px);
//                         box-shadow: 0 0 20px rgba(168, 85, 247, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.1);
//                     }

//                     .liquid-button:hover .liquid-bg {
//                         transform: scale(1.2) rotate(10deg);
//                         opacity: 1;
//                         border-radius: 40px;
//                         animation: liquidPulse 2s ease-in-out infinite;
//                     }

//                     .liquid-button:hover .liquid-bg-2 {
//                         transform: scale(1.4) rotate(-15deg);
//                         opacity: 0.8;
//                         border-radius: 35px;
//                         animation: liquidPulse 2s ease-in-out infinite 0.2s;
//                     }

//                     .liquid-button:hover .liquid-bg-3 {
//                         transform: scale(1.6) rotate(20deg);
//                         opacity: 0.6;
//                         border-radius: 30px;
//                         animation: liquidPulse 2s ease-in-out infinite 0.4s;
//                     }

//                     .liquid-button:active {
//                         transform: scale(0.95);
//                     }

//                     .liquid-button:active .liquid-bg,
//                     .liquid-button:active .liquid-bg-2,
//                     .liquid-button:active .liquid-bg-3 {
//                         animation: liquidSplash 0.3s ease-out;
//                     }

//                     @keyframes liquidPulse {
//                         0%,
//                         100% {
//                             border-radius: 50px;
//                             transform: scale(1.2) rotate(10deg);
//                         }
//                         25% {
//                             border-radius: 60px;
//                             transform: scale(1.3) rotate(15deg);
//                         }
//                         50% {
//                             border-radius: 40px;
//                             transform: scale(1.1) rotate(5deg);
//                         }
//                         75% {
//                             border-radius: 55px;
//                             transform: scale(1.25) rotate(12deg);
//                         }
//                     }

//                     @keyframes liquidSplash {
//                         0% {
//                             transform: scale(1.2);
//                             border-radius: 50px;
//                         }
//                         50% {
//                             transform: scale(1.8);
//                             border-radius: 20px;
//                             opacity: 0.3;
//                         }
//                         100% {
//                             transform: scale(1.2);
//                             border-radius: 50px;
//                         }
//                     }
//                 `}</style>
//             </button>

//             {/* Additional example buttons */}
//             <div className="ml-8 space-y-4">
//                 <button className="liquid-button-alt relative px-6 py-3 text-white font-medium bg-transparent border-none cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105">
//                     <span className="relative z-10">Hover Me</span>
//                     <div className="liquid-alt absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full transform scale-0 transition-all duration-500 ease-out"></div>

//                     <style>{`
//                         .liquid-button-alt {
//                             border-radius: 25px;
//                             border: 2px solid rgba(6, 182, 212, 0.5);
//                         }

//                         .liquid-button-alt:hover .liquid-alt {
//                             transform: scale(1);
//                             border-radius: 25px;
//                             animation: liquidWave 1.5s ease-in-out infinite;
//                         }

//                         @keyframes liquidWave {
//                             0%,
//                             100% {
//                                 border-radius: 25px;
//                             }
//                             33% {
//                                 border-radius: 15px 35px 25px 35px;
//                             }
//                             66% {
//                                 border-radius: 35px 15px 35px 15px;
//                             }
//                         }
//                     `}</style>
//                 </button>

//                 <button className="liquid-button-minimal relative px-8 py-2 text-white font-light bg-transparent border border-white border-opacity-30 cursor-pointer overflow-hidden transition-all duration-300 hover:text-black">
//                     <span className="relative z-10">Minimal</span>
//                     <div className="liquid-minimal absolute inset-0 bg-white transform origin-left scale-x-0 transition-transform duration-300 ease-out"></div>

//                     <style>{`
//             .liquid-button-minimal {
//               border-radius: 30px;
//             }
            
//             .liquid-button-minimal:hover .liquid-minimal {
//               transform: scale-x-1;
//               animation: liquidFill 0.6s ease-out;
//             }
            
//             @keyframes liquidFill {
//               0% {
//                 border-radius: 30px;
//                 transform: scale-x-0);
//               }
//               50% {
//                 border-radius: 15px;
//                 transform: scale-x-0.5 scale-y(1.1);
//               }
//               100% {
//                 border-radius: 30px;
//                 transform: scale-x-1 scale-y(1);
//               }
//             }
//           `}</style>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default LiquidButton;

// // components/Button.jsx
// import React from 'react';

// const LiquidButton = () => {
//   return (
//       <div className="flex items-center justify-center -mt-32">
//           <button className="liquid-button-alt relative px-6 py-3 text-gray-800 font-medium bg-transparent border-none cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105">
//               <span className="relative z-10">Book Appointment</span>
//               <div className="liquid-alt absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full transform scale-0 transition-all duration-500 ease-out"></div>

//               <style>{`
//           .liquid-button-alt {
//             border-radius: 25px;
//             border: 2px solid rgba(6, 182, 212, 0.5);
//           }
          
//           .liquid-button-alt:hover .liquid-alt {
//             transform: scale(1);
//             border-radius: 25px;
//             animation: liquidWave 1.5s ease-in-out infinite;
//           }
          
//           .liquid-button-alt:hover span {
//             color: white;
//           }
          
//           @keyframes liquidWave {
//             0%, 100% {
//               border-radius: 25px;
//             }
//             33% {
//               border-radius: 15px 35px 25px 35px;
//             }
//             66% {
//               border-radius: 35px 15px 35px 15px;
//             }
//           }
//         `}</style>
//           </button>
//       </div>
//   );
// };

// export default LiquidButton;



import React, { useEffect, useState } from 'react';

const LiquidButton = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Start animation a short moment after component mounts
        const timer = setTimeout(() => setAnimate(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex items-center justify-center" style={{ marginTop: 0, paddingTop: 0 }}>
            <button className="liquid-button-alt relative px-6 py-3 text-gray-800 font-medium bg-transparent border-none cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105">
                <span className={`relative z-10 ${animate ? 'text-white' : ''}`}>Book Appointment</span>
                <div
                    className={`liquid-alt absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full transform transition-all duration-500 ease-out ${
                        animate ? 'scale-100 animate-liquidWave' : 'scale-0'
                    }`}
                ></div>

                <style>{`
          .liquid-button-alt {
            border-radius: 25px;
            border: 2px solid rgba(6, 182, 212, 0.5);
          }

          @keyframes liquidWave {
            0%, 100% {
              border-radius: 25px;
            }
            33% {
              border-radius: 15px 35px 25px 35px;
            }
            66% {
              border-radius: 35px 15px 35px 15px;
            }
          }

          .animate-liquidWave {
            animation: liquidWave 1.5s ease-in-out infinite;
          }
        `}</style>
            </button>
        </div>
    );
};

export default LiquidButton;

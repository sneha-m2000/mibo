// // import React, { useState, useEffect } from 'react';

// // const MouseMovementAnimation = () => {
// //     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
// //     const [trail, setTrail] = useState([]);

// //     useEffect(() => {
// //         const handleMouseMove = (e) => {
// //             const newPosition = {
// //                 x: e.clientX,
// //                 y: e.clientY,
// //                 id: Date.now(),
// //             };

// //             setMousePosition(newPosition);

// //             // Update trail with new position
// //             setTrail((prevTrail) => {
// //                 const newTrail = [newPosition, ...prevTrail.slice(0, 6)];
// //                 return newTrail;
// //             });
// //         };

// //         document.addEventListener('mousemove', handleMouseMove);

// //         return () => {
// //             document.removeEventListener('mousemove', handleMouseMove);
// //         };
// //     }, []);

// //     return (
// //         <>
// //             {/* Background gradient overlay that follows mouse */}
// //             <div
// //                 className="fixed inset-0 pointer-events-none z-[9999] transition-all duration-1000 ease-out"
// //                 style={{
// //                     background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(52, 185, 165, 0.03) 0%, transparent 50%)`,
// //                     opacity: mousePosition.x || mousePosition.y ? 1 : 0,
// //                 }}
// //             />

// //             {/* Main cursor follower */}
// //             <div
// //                 className="fixed pointer-events-none z-[9999] transition-transform duration-100 ease-out"
// //                 style={{
// //                     left: mousePosition.x - 10,
// //                     top: mousePosition.y - 10,
// //                     opacity: mousePosition.x || mousePosition.y ? 1 : 0,
// //                 }}
// //             >
// //                 <div
// //                     className="w-6 h-6 rounded-full border-2"
// //                     style={{
// //                         borderColor: '#34b9a5',
// //                         backgroundColor: 'rgba(52, 185, 165, 0.1)',
// //                         animation: 'pulse 2s infinite',
// //                     }}
// //                 />
// //             </div>

// //             {/* Delayed secondary cursor */}
// //             <div
// //                 className="fixed pointer-events-none z-[9999] transition-all duration-300 ease-out"
// //                 style={{
// //                     left: mousePosition.x - 3,
// //                     top: mousePosition.y - 3,
// //                     opacity: mousePosition.x || mousePosition.y ? 0.8 : 0,
// //                 }}
// //             >
// //                 <div
// //                     className="w-2 h-2 rounded-full"
// //                     style={{
// //                         backgroundColor: '#1c0d54',
// //                     }}
// //                 />
// //             </div>

// //             {/* Mouse trail */}
// //             {trail.map((point, index) => (
// //                 <div
// //                     key={point.id}
// //                     className="fixed pointer-events-none transition-opacity duration-200 ease-out"
// //                     style={{
// //                         left: point.x - 1,
// //                         top: point.y - 1,
// //                         opacity: (6 - index) / 10,
// //                         zIndex: 30 - index,
// //                     }}
// //                 >
// //                     <div
// //                         className="rounded-full"
// //                         style={{
// //                             width: Math.max(1, 3 - index * 0.3),
// //                             height: Math.max(1, 3 - index * 0.3),
// //                             backgroundColor: index % 2 === 0 ? '#34b9a5' : '#1c0d54',
// //                         }}
// //                     />
// //                 </div>
// //             ))}

// //             {/* Floating ambient particles */}
// //             <div className="fixed inset-0 pointer-events-none z-[9999]">
// //                 {[...Array(8)].map((_, i) => (
// //                     <div
// //                         key={i}
// //                         className="absolute w-1 h-1 rounded-full opacity-30"
// //                         style={{
// //                             left: `${20 + i * 12}%`,
// //                             top: `${25 + i * 10}%`,
// //                             backgroundColor: i % 2 === 0 ? '#34b9a5' : '#1c0d54',
// //                             transform: `translate(${
// //                                 (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) /
// //                                 (100 + i * 20)
// //                             }px, ${
// //                                 (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) /
// //                                 (100 + i * 20)
// //                             }px)`,
// //                             transition: 'transform 0.8s ease-out',
// //                             animation: `float ${3 + i * 0.5}s ease-in-out infinite alternate`,
// //                         }}
// //                     />
// //                 ))}
// //             </div>

// //             {/* CSS animations */}
// //             <style jsx>{`
// //                 @keyframes float {
// //                     0% {
// //                         transform: translateY(0px);
// //                     }
// //                     100% {
// //                         transform: translateY(-10px);
// //                     }
// //                 }

// //                 @keyframes pulse {
// //                     0%,
// //                     100% {
// //                         opacity: 1;
// //                     }
// //                     50% {
// //                         opacity: 0.5;
// //                     }
// //                 }

// //                 * {
// //                     cursor: none !important;
// //                 }

// //                 a,
// //                 button,
// //                 input,
// //                 select,
// //                 textarea {
// //                     cursor: none !important;
// //                 }

// //                 a:hover ~ .mouse-cursor,
// //                 button:hover ~ .mouse-cursor {
// //                     transform: scale(1.5);
// //                 }
// //             `}</style>
// //         </>
// //     );
// // };

// // export default MouseMovementAnimation;


// import React, { useState, useEffect } from 'react';

// const MouseMovementAnimation = () => {
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//     const [trail, setTrail] = useState([]);
//     const [isDesktop, setIsDesktop] = useState(true);

//     useEffect(() => {
//         // Check screen width
//         const checkDevice = () => {
//             setIsDesktop(window.innerWidth >= 768); // Enable only for desktop
//         };

//         checkDevice();
//         window.addEventListener('resize', checkDevice);

//         return () => {
//             window.removeEventListener('resize', checkDevice);
//         };
//     }, []);

//     useEffect(() => {
//         if (!isDesktop) return; // Disable animation on mobile

//         const handleMouseMove = (e) => {
//             const newPosition = {
//                 x: e.clientX,
//                 y: e.clientY,
//                 id: Date.now(),
//             };

//             setMousePosition(newPosition);

//             // Update trail
//             setTrail((prevTrail) => {
//                 const newTrail = [newPosition, ...prevTrail.slice(0, 6)];
//                 return newTrail;
//             });
//         };

//         document.addEventListener('mousemove', handleMouseMove);

//         return () => {
//             document.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, [isDesktop]);

//     // If mobile, don't render anything
//     if (!isDesktop) return null;

//     return (
//         <>
//             {/* Background gradient overlay */}
//             <div
//                 className="fixed inset-0 pointer-events-none z-[9999] transition-all duration-1000 ease-out"
//                 style={{
//                     background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(52, 185, 165, 0.03) 0%, transparent 50%)`,
//                     opacity: mousePosition.x || mousePosition.y ? 1 : 0,
//                 }}
//             />

//             {/* Main cursor */}
//             <div
//                 className="fixed pointer-events-none z-[9999] transition-transform duration-100 ease-out"
//                 style={{
//                     left: mousePosition.x - 10,
//                     top: mousePosition.y - 10,
//                     opacity: mousePosition.x || mousePosition.y ? 1 : 0,
//                 }}
//             >
//                 <div
//                     className="w-6 h-6 rounded-full border-2"
//                     style={{
//                         borderColor: '#34b9a5',
//                         backgroundColor: 'rgba(52, 185, 165, 0.1)',
//                         animation: 'pulse 2s infinite',
//                     }}
//                 />
//             </div>

//             {/* Secondary cursor */}
//             <div
//                 className="fixed pointer-events-none z-[9999] transition-all duration-300 ease-out"
//                 style={{
//                     left: mousePosition.x - 3,
//                     top: mousePosition.y - 3,
//                     opacity: mousePosition.x || mousePosition.y ? 0.8 : 0,
//                 }}
//             >
//                 <div
//                     className="w-2 h-2 rounded-full"
//                     style={{
//                         backgroundColor: '#1c0d54',
//                     }}
//                 />
//             </div>

//             {/* Mouse trail */}
//             {trail.map((point, index) => (
//                 <div
//                     key={point.id}
//                     className="fixed pointer-events-none transition-opacity duration-200 ease-out"
//                     style={{
//                         left: point.x - 1,
//                         top: point.y - 1,
//                         opacity: (6 - index) / 10,
//                         zIndex: 30 - index,
//                     }}
//                 >
//                     <div
//                         className="rounded-full"
//                         style={{
//                             width: Math.max(1, 3 - index * 0.3),
//                             height: Math.max(1, 3 - index * 0.3),
//                             backgroundColor: index % 2 === 0 ? '#34b9a5' : '#1c0d54',
//                         }}
//                     />
//                 </div>
//             ))}

//             {/* Ambient particles */}
//             <div className="fixed inset-0 pointer-events-none z-[9999]">
//                 {[...Array(8)].map((_, i) => (
//                     <div
//                         key={i}
//                         className="absolute w-1 h-1 rounded-full opacity-30"
//                         style={{
//                             left: `${20 + i * 12}%`,
//                             top: `${25 + i * 10}%`,
//                             backgroundColor: i % 2 === 0 ? '#34b9a5' : '#1c0d54',
//                             transform: `translate(${
//                                 (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0)) /
//                                 (100 + i * 20)
//                             }px, ${
//                                 (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)) /
//                                 (100 + i * 20)
//                             }px)`,
//                             transition: 'transform 0.8s ease-out',
//                             animation: `float ${3 + i * 0.5}s ease-in-out infinite alternate`,
//                         }}
//                     />
//                 ))}
//             </div>

//             {/* CSS animations */}
//             <style jsx>{`
//                 @keyframes float {
//                     0% {
//                         transform: translateY(0px);
//                     }
//                     100% {
//                         transform: translateY(-10px);
//                     }
//                 }

//                 @keyframes pulse {
//                     0%,
//                     100% {
//                         opacity: 1;
//                     }
//                     50% {
//                         opacity: 0.5;
//                     }
//                 }

//                 * {
//                     cursor: none !important;
//                 }

//                 a,
//                 button,
//                 input,
//                 select,
//                 textarea {
//                     cursor: none !important;
//                 }

//                 a:hover ~ .mouse-cursor,
//                 button:hover ~ .mouse-cursor {
//                     transform: scale(1.5);
//                 }
//             `}</style>
//         </>
//     );
// };

// export default MouseMovementAnimation;

import React, { useState, useEffect } from 'react';
import AppointmentBookingDemo from './animation_button';

const PremiumFlipDropdown = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const dropdownData = [
        {
            id: 'individuals',
            title: 'For Individuals',
            description:
                'When clicked a brief description of service appears in drop down, and a CTA button to book appointment now/learn more button directing user to the section explaining how mibo handles each type of mental health problems.',
            ctaText: 'Book Appointment Now',
        },
        {
            id: 'families',
            title: 'For Families',
            description:
                'Comprehensive family therapy services that address family dynamics, communication patterns, and behavioral issues. We help families develop stronger bonds, resolve conflicts, and create healthier family environments for all members.',
            ctaText: 'Book Appointment Now',
        },
        {
            id: 'couples',
            title: 'For Couples',
            description:
                'Specialized therapy sessions designed for couples looking to strengthen their relationship, improve communication, and work through challenges together. Our experienced therapists provide a safe space for both partners to express themselves and grow.',
            ctaText: 'Book Appointment Now',
        },
        {
            id: 'Childrens',
            title: 'For Children',
            description:
                'Specialized therapy programs designed to support children’s emotional, social, and cognitive development. We create a safe, engaging environment that helps children express themselves, build confidence, and overcome challenges.',
            ctaText: 'Book Appointment Now',
        },
        {
            id: 'Corporates',
            title: 'For Corporates',
            description:
                'Wellness and mental health programs tailored for corporate teams. Boost productivity, reduce workplace stress, and foster a positive culture through expert-led workshops and counseling sessions.',
            ctaText: 'Book Appointment Now',
        },
    ];

    useEffect(() => {
        // Add loading animation delay
        setTimeout(() => setIsLoaded(true), 200);
    }, []);

    const toggleDropdown = (dropdownId) => {
        setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
    };

    const handleCTA = (category) => {
        console.log(`CTA clicked for: ${category}`);
        alert(`Navigating to ${category} booking page...`);
    };

    const ChevronIcon = ({ isActive }) => (
        <svg
            className={`w-6 h-6 transition-all duration-400 ease-out ${
                isActive ? 'transform rotate-180 text-blue-500' : 'text-slate-500'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{
                transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), color 0.3s ease',
            }}
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
    );

    const DropdownCard = ({ item, index }) => {
        const isActive = activeDropdown === item.id;

        return (
            <div
                className={`dropdown-container perspective-1000 mb-5 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                    transition: `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
                    transitionDelay: `${index * 150 + 200}ms`,
                }}
            >
                <div
                    className={`dropdown-card bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl border border-white/20 overflow-hidden transition-all duration-400 ease-out transform-gpu hover:-translate-y-1 hover:shadow-2xl ${
                        isActive ? '-translate-y-1 shadow-2xl' : ''
                    }`}
                    style={{
                        transformStyle: 'preserve-3d',
                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    }}
                >
                    <div
                        className={`dropdown-header p-6 sm:p-8 cursor-pointer select-none flex justify-between items-center relative overflow-hidden transition-all duration-300 ${
                            isActive
                                ? 'bg-gradient-to-r from-[#2FA19A] to-[rgba(255,255,255,0.8)] '
                                : 'bg-gradient-to-r from-[#2FA19A] to-[#18356C]   border-2 border-[#fff] rounded-3xl '
                        }`}
                        onClick={() => toggleDropdown(item.id)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                toggleDropdown(item.id);
                            }
                        }}
                        tabIndex={0}
                        role="button"
                        aria-expanded={isActive}
                        style={
                            {
                                // borderBottom: '1px solid rgba(0,0,0,0.05)',
                            }
                        }
                    >
                        {/* Shimmer effect */}
                        <div
                            className="absolute top-0 left-0 w-full h-full pointer-events-none"
                            style={{
                                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                                transform: 'translateX(-100%)',
                                transition: 'transform 0.6s ease',
                            }}
                        />

                        <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 m-0">{item.title}</h2>

                        <ChevronIcon isActive={isActive} />
                    </div>

                    <div
                        className={`dropdown-content overflow-hidden transition-all duration-500 ease-out ${
                            isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                        style={{
                            transformOrigin: 'top',
                            transform: isActive ? 'rotateX(0deg)' : 'rotateX(-90deg)',
                            transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        }}
                    >
                        <div className="dropdown-content-inner p-6 sm:p-8 bg-white">
                            <p className="text-lg leading-relaxed text-slate-600 mb-6">{item.description}</p>

                            <AppointmentBookingDemo/>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div
            className=" flex items-center justify-center p-5 mt-4"
            style={{
                // background: 'linear-gradient(135deg, #34b9a5 0%, #aef0e6 50%, #ffffff 100%)',
                background: 'linear-gradient(to bottom, white 0%, #34b9a5 60%, #aef0e6 80%)',
            }}
        >
            <div className="container max-w-4xl w-full">
                <div className="section-title text-center mb-10 text-black font-quicksand ">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-3" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                        Who It's For
                    </h1>
                    {/* <p className="text-lg sm:text-xl opacity-90 font-light">
                        Individual drop downs for each category, when clicked animated dropdown shows detailed info
                    </p> */}
                    {/* <div className="mt-4 w-20 h-1 mb-0 bg-gradient-to-r from-[#18276c] to-[#2FA19A]   rounded-full mx-auto shadow-md"></div> */}
                    <style>
                        {`
  @keyframes premium-underline {
    0% { transform: translateX(-100%); }
    50% { transform: translateX(0%); }
    100% { transform: translateX(100%); }
  }
`}
                    </style>

                    <div className="relative mt-4 h-1 w-20 mx-auto mb-0 overflow-hidden rounded-full shadow-lg">
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-[#18276c] via-[#2FA19A] to-[#18276c]"
                            style={{
                                animation: 'premium-underline 3s ease-in-out infinite',
                            }}
                        ></div>
                    </div>
                </div>

                {dropdownData.map((item, index) => (
                    <DropdownCard key={item.id} item={item} index={index} />
                ))}
            </div>

            <style jsx>{`
                .perspective-1000 {
                    perspective: 1000px;
                }

                .dropdown-header:hover::before {
                    transform: translateX(100%) !important;
                }

                .cta-button:hover::before {
                    transform: translateX(100%) !important;
                }

                @media (max-width: 768px) {
                    .section-title h1 {
                        font-size: 2rem;
                    }

                    .dropdown-header {
                        padding: 1.25rem;
                    }

                    .dropdown-content-inner {
                        padding: 1.25rem;
                    }
                }

                .dropdown-card:focus-within {
                    outline: 2px solid #3b82f6;
                    outline-offset: 2px;
                }

                .dropdown-header:focus {
                    outline: none;
                }
            `}</style>
        </div>
    );
};

export default PremiumFlipDropdown;

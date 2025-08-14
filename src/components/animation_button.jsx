import React, { useState } from 'react';

const BookAppointmentButton = ({ onClick, className = '', disabled = false, ...props }) => {
    const [isHovered, setIsHovered] = useState(false);

    // const buttonStyles = {
    //     background: '#191970',
    //     padding: '16px 20px',
    //     margin: '12px',
    //     display: 'inline-block',
    //     transform: 'translate(0%, 0%)',
    //     overflow: 'hidden',
    //     color: '#d4e0f7',
    //     fontSize: '20px',
    //     letterSpacing: '2.5px',
    //     textAlign: 'center',
    //     textTransform: 'uppercase',
    //     textDecoration: 'none',
    //     boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
    //     border: 'none',
    //     cursor: disabled ? 'not-allowed' : 'pointer',
    //     position: 'relative',
    //     fontFamily:
    //         "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
    //     opacity: disabled ? 0.6 : 1,
    //     transition: 'opacity 0.3s ease',
    // };
    const buttonStyles = {
        background: '#18356C', // gradient theme
        padding: '16px 20px',
        margin: '12px 0', // top-bottom spacing, no horizontal centering
        display: 'block', // makes it align to the left
        transform: 'translate(0%, 0%)',
        overflow: 'hidden',
        color: '#ffffff',
        fontSize: '20px',
        // letterSpacing: '2px',
        textAlign: 'center',
        // textTransform: 'uppercase',
        textDecoration: 'none',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        position: 'relative',
        fontFamily:
            "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
        opacity: disabled ? 0.6 : 1,
        transition: 'opacity 0.3s ease',
        borderRadius: '12px', // Added border radius
    };


    const beforeStyles = {
        content: "''",
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        backgroundColor: '#8592ad',
        opacity: isHovered && !disabled ? 0.2 : 0,
        transition: '0.2s opacity ease-in-out',
        pointerEvents: 'none',
    };

    const spanStyles = {
        position: 'absolute',
        pointerEvents: 'none',
    };

    // Top border animation
    const topBorderStyles = {
        ...spanStyles,
        top: '0px',
        left: '0px',
        width: '100%',
        height: '2px',
        background: '#2FA19A',
        animation: disabled ? 'none' : 'animateTop 2s linear infinite',
    };

    // Right border animation
    const rightBorderStyles = {
        ...spanStyles,
        top: '0px',
        right: '0px',
        height: '100%',
        width: '2px',
        background: '#2FA19A',
        animation: disabled ? 'none' : 'animateRight 2s linear -1s infinite',
    };

    // Bottom border animation
    const bottomBorderStyles = {
        ...spanStyles,
        bottom: '0px',
        left: '0px',
        width: '100%',
        height: '2px',
        background: '#2FA19A',
        animation: disabled ? 'none' : 'animateBottom 2s linear infinite',
    };

    // Left border animation
    const leftBorderStyles = {
        ...spanStyles,
        top: '0px',
        left: '0px',
        height: '100%',
        width: '2px',
        background: '#2FA19A',
        animation: disabled ? 'none' : 'animateLeft 2s linear -1s infinite',
    };

    const handleClick = (e) => {
        if (disabled) return;
        if (onClick) onClick(e);
    };

    return (
        <>
            <style jsx>{`
                @keyframes animateTop {
                    0% {
                        transform: translateX(100%);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }

                @keyframes animateRight {
                    0% {
                        transform: translateY(100%);
                    }
                    100% {
                        transform: translateY(-100%);
                    }
                }

                @keyframes animateBottom {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }

                @keyframes animateLeft {
                    0% {
                        transform: translateY(-100%);
                    }
                    100% {
                        transform: translateY(100%);
                    }
                }
            `}</style>

            <button
                style={buttonStyles}
                className={className}
                onClick={handleClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                disabled={disabled}
                {...props}
            >
                {/* Hover overlay */}
                <div style={beforeStyles} />

                {/* Animated borders */}
                <span style={topBorderStyles} />
                <span style={rightBorderStyles} />
                <span style={bottomBorderStyles} />
                <span style={leftBorderStyles} />

                {/* Button content */}
                <span style={{ position: 'relative', zIndex: 1 }}>Book Appointment</span>
            </button>
        </>
    );
};

export default BookAppointmentButton;

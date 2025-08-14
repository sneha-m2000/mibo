import React, { useState, useEffect, useRef } from 'react';
import {
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
    Area,
    AreaChart,
    PieChart,
    Pie,
    Cell,
    RadialBarChart,
    RadialBar,
} from 'recharts';
import {
    TrendingUp,
    TrendingDown,
    Users,
    Star,
    Award,
    Activity,
    Heart,
    Brain,
    Scissors,
    Baby,
    Shield,
    Eye,
    Stethoscope,
    Search,
    MoreVertical,
    ArrowUp,
    ArrowDown,
    ChevronDown,
} from 'lucide-react';

// Custom Dropdown Component
const CustomDropdown = ({
    value,
    onChange,
    options,
    placeholder = 'Select...',
    className = '',
    optionClassName = '',
    dropdownClassName = '',
    ...props
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedOption = options.find((option) => option.value === value);

    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-4 py-2 bg-white/90 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 text-[10px] whitespace-nowrap text-center flex items-center justify-between"
                {...props}
            >
                <span className={selectedOption ? 'text-gray-900' : 'text-gray-500'}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <ChevronDown
                    className={`w-4 h-4 ml-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {isOpen && (
                <div
                    className={`absolute top-full left-0 right-0 mt-1 bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg z-50 max-h-60 overflow-auto ${dropdownClassName}`}
                >
                    {options.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                                onChange(option.value);
                                setIsOpen(false);
                            }}
                            className={`w-full px-4 py-2 text-left text-[10px] whitespace-nowrap hover:bg-white/50 transition-colors duration-150 first:rounded-t-xl last:rounded-b-xl ${
                                value === option.value ? 'bg-white/30 text-gray-900 font-medium' : 'text-gray-700'
                            } ${optionClassName}`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

// Counter Animation Hook
const useCounterAnimation = (end, duration = 2000, start = 0) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
        if (start === end) return;

        let startTime;
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = start + (end - start) * easeOutQuart;

            if (typeof end === 'number' && end % 1 !== 0) {
                setCount(Math.min(currentCount, end));
            } else {
                setCount(Math.floor(Math.min(currentCount, end)));
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration, start]);

    return count;
};

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, decimals = 0, suffix = '' }) => {
    const count = useCounterAnimation(end, duration);
    const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

    return (
        <span>
            {displayValue}
            {suffix}
        </span>
    );
};

const PremiumDepartmentDashboard = () => {
    const [selectedView, setSelectedView] = useState('grid');
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCriteria, setFilterCriteria] = useState('all');
    const [animatedData, setAnimatedData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hoveredDept, setHoveredDept] = useState(null);
    const [sortBy, setSortBy] = useState('satisfaction');
    const [sortOrder, setSortOrder] = useState('desc');

    // Filter and Sort Options for Custom Dropdown
    const filterOptions = [
        { value: 'all', label: 'All Departments' },
        { value: 'excellent', label: 'Excellent (95%+)' },
        { value: 'good', label: 'Good (90-95%)' },
        { value: 'average', label: 'Average (<90%)' },
    ];

    const sortOptions = [
        { value: 'satisfaction-desc', label: 'Satisfaction (High to Low)' },
        { value: 'satisfaction-asc', label: 'Satisfaction (Low to High)' },
        { value: 'patients-desc', label: 'Patients (Most to Least)' },
        { value: 'patients-asc', label: 'Patients (Least to Most)' },
        { value: 'nps-desc', label: 'NPS (High to Low)' },
        { value: 'trend-desc', label: 'Trend (Best to Worst)' },
    ];

    const handleSortChange = (value) => {
        const [criteria, order] = value.split('-');
        setSortBy(criteria);
        setSortOrder(order);
    };

    const departmentData = [
        {
            id: 1,
            name: 'Cardiology',
            icon: Heart,
            satisfaction: 94.2,
            patients: 1247,
            avgRating: 4.7,
            responseRate: 89,
            nps: 78,
            waitTime: 12,
            staffRating: 4.8,
            facilityRating: 4.6,
            treatmentRating: 4.9,
            trend: 5.2,
            color: '#ef4444',
            gradient: 'from-red-500 to-pink-600',
            bgGradient: 'from-red-50 to-pink-50',
            reviews: [
                { rating: 5, count: 987, name: '5 Star' },
                { rating: 4, count: 201, name: '4 Star' },
                { rating: 3, count: 45, name: '3 Star' },
                { rating: 2, count: 12, name: '2 Star' },
                { rating: 1, count: 2, name: '1 Star' },
            ],
            monthlyTrend: [
                { month: 'Jan', satisfaction: 89, patients: 1100 },
                { month: 'Feb', satisfaction: 91, patients: 1150 },
                { month: 'Mar', satisfaction: 93, patients: 1200 },
                { month: 'Apr', satisfaction: 94.2, patients: 1247 },
            ],
        },
        {
            id: 2,
            name: 'Neurology',
            icon: Brain,
            satisfaction: 92.8,
            patients: 856,
            avgRating: 4.6,
            responseRate: 85,
            nps: 72,
            waitTime: 18,
            staffRating: 4.7,
            facilityRating: 4.5,
            treatmentRating: 4.8,
            trend: 3.1,
            color: '#8b5cf6',
            gradient: 'from-purple-500 to-indigo-600',
            bgGradient: 'from-purple-50 to-indigo-50',
            reviews: [
                { rating: 5, count: 678, name: '5 Star' },
                { rating: 4, count: 142, name: '4 Star' },
                { rating: 3, count: 28, name: '3 Star' },
                { rating: 2, count: 7, name: '2 Star' },
                { rating: 1, count: 1, name: '1 Star' },
            ],
            monthlyTrend: [
                { month: 'Jan', satisfaction: 88, patients: 780 },
                { month: 'Feb', satisfaction: 90, patients: 820 },
                { month: 'Mar', satisfaction: 91, patients: 840 },
                { month: 'Apr', satisfaction: 92.8, patients: 856 },
            ],
        },
        {
            id: 3,
            name: 'Surgery',
            icon: Scissors,
            satisfaction: 96.1,
            patients: 634,
            avgRating: 4.8,
            responseRate: 91,
            nps: 82,
            waitTime: 8,
            staffRating: 4.9,
            facilityRating: 4.7,
            treatmentRating: 4.9,
            trend: 7.3,
            color: '#10b981',
            gradient: 'from-emerald-500 to-teal-600',
            bgGradient: 'from-emerald-50 to-teal-50',
            reviews: [
                { rating: 5, count: 545, name: '5 Star' },
                { rating: 4, count: 78, name: '4 Star' },
                { rating: 3, count: 9, name: '3 Star' },
                { rating: 2, count: 2, name: '2 Star' },
                { rating: 1, count: 0, name: '1 Star' },
            ],
            monthlyTrend: [
                { month: 'Jan', satisfaction: 92, patients: 580 },
                { month: 'Feb', satisfaction: 94, patients: 600 },
                { month: 'Mar', satisfaction: 95, patients: 620 },
                { month: 'Apr', satisfaction: 96.1, patients: 634 },
            ],
        },
        {
            id: 4,
            name: 'Pediatrics',
            icon: Baby,
            satisfaction: 97.5,
            patients: 1123,
            avgRating: 4.9,
            responseRate: 94,
            nps: 85,
            waitTime: 15,
            staffRating: 4.9,
            facilityRating: 4.8,
            treatmentRating: 4.9,
            trend: 4.7,
            color: '#f59e0b',
            gradient: 'from-amber-500 to-orange-600',
            bgGradient: 'from-amber-50 to-orange-50',
            reviews: [
                { rating: 5, count: 978, name: '5 Star' },
                { rating: 4, count: 128, name: '4 Star' },
                { rating: 3, count: 15, name: '3 Star' },
                { rating: 2, count: 2, name: '2 Star' },
                { rating: 1, count: 0, name: '1 Star' },
            ],
            monthlyTrend: [
                { month: 'Jan', satisfaction: 94, patients: 1000 },
                { month: 'Feb', satisfaction: 96, patients: 1050 },
                { month: 'Mar', satisfaction: 97, patients: 1100 },
                { month: 'Apr', satisfaction: 97.5, patients: 1123 },
            ],
        },
        {
            id: 5,
            name: 'Emergency',
            icon: Shield,
            satisfaction: 87.3,
            patients: 2156,
            avgRating: 4.4,
            responseRate: 76,
            nps: 58,
            waitTime: 25,
            staffRating: 4.5,
            facilityRating: 4.2,
            treatmentRating: 4.6,
            trend: -2.1,
            color: '#dc2626',
            gradient: 'from-red-600 to-rose-700',
            bgGradient: 'from-red-50 to-rose-50',
            reviews: [
                { rating: 5, count: 1234, name: '5 Star' },
                { rating: 4, count: 567, name: '4 Star' },
                { rating: 3, count: 234, name: '3 Star' },
                { rating: 2, count: 89, name: '2 Star' },
                { rating: 1, count: 32, name: '1 Star' },
            ],
            monthlyTrend: [
                { month: 'Jan', satisfaction: 90, patients: 2000 },
                { month: 'Feb', satisfaction: 89, patients: 2080 },
                { month: 'Mar', satisfaction: 88, patients: 2120 },
                { month: 'Apr', satisfaction: 87.3, patients: 2156 },
            ],
        },
        {
            id: 6,
            name: 'Ophthalmology',
            icon: Eye,
            satisfaction: 95.7,
            patients: 445,
            avgRating: 4.8,
            responseRate: 88,
            nps: 79,
            waitTime: 10,
            staffRating: 4.8,
            facilityRating: 4.7,
            treatmentRating: 4.8,
            trend: 6.2,
            color: '#3b82f6',
            gradient: 'from-blue-500 to-cyan-600',
            bgGradient: 'from-blue-50 to-cyan-50',
            reviews: [
                { rating: 5, count: 378, name: '5 Star' },
                { rating: 4, count: 56, name: '4 Star' },
                { rating: 3, count: 9, name: '3 Star' },
                { rating: 2, count: 2, name: '2 Star' },
                { rating: 1, count: 0, name: '1 Star' },
            ],
            monthlyTrend: [
                { month: 'Jan', satisfaction: 92, patients: 400 },
                { month: 'Feb', satisfaction: 94, patients: 420 },
                { month: 'Mar', satisfaction: 95, patients: 435 },
                { month: 'Apr', satisfaction: 95.7, patients: 445 },
            ],
        },
        {
            id: 7,
            name: 'General Medicine',
            icon: Stethoscope,
            satisfaction: 89.4,
            patients: 1789,
            avgRating: 4.5,
            responseRate: 82,
            nps: 63,
            waitTime: 20,
            staffRating: 4.6,
            facilityRating: 4.4,
            treatmentRating: 4.7,
            trend: 1.8,
            color: '#06b6d4',
            gradient: 'from-cyan-500 to-blue-500',
            bgGradient: 'from-cyan-50 to-blue-50',
            reviews: [
                { rating: 5, count: 1234, name: '5 Star' },
                { rating: 4, count: 389, name: '4 Star' },
                { rating: 3, count: 123, name: '3 Star' },
                { rating: 2, count: 34, name: '2 Star' },
                { rating: 1, count: 9, name: '1 Star' },
            ],
            monthlyTrend: [
                { month: 'Jan', satisfaction: 87, patients: 1650 },
                { month: 'Feb', satisfaction: 88, patients: 1700 },
                { month: 'Mar', satisfaction: 89, patients: 1750 },
                { month: 'Apr', satisfaction: 89.4, patients: 1789 },
            ],
        },
        {
            id: 8,
            name: 'Orthopedics',
            icon: Activity,
            satisfaction: 91.6,
            patients: 967,
            avgRating: 4.6,
            responseRate: 87,
            nps: 69,
            waitTime: 16,
            staffRating: 4.7,
            facilityRating: 4.5,
            treatmentRating: 4.8,
            trend: 3.9,
            color: '#84cc16',
            gradient: 'from-lime-500 to-green-600',
            bgGradient: 'from-lime-50 to-green-50',
            reviews: [
                { rating: 5, count: 723, name: '5 Star' },
                { rating: 4, count: 189, name: '4 Star' },
                { rating: 3, count: 45, name: '3 Star' },
                { rating: 2, count: 8, name: '2 Star' },
                { rating: 1, count: 2, name: '1 Star' },
            ],
            monthlyTrend: [
                { month: 'Jan', satisfaction: 88, patients: 900 },
                { month: 'Feb', satisfaction: 90, patients: 930 },
                { month: 'Mar', satisfaction: 91, patients: 950 },
                { month: 'Apr', satisfaction: 91.6, patients: 967 },
            ],
        },
    ];

    const filteredData = animatedData
        .filter(
            (dept) =>
                dept.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (filterCriteria === 'all' ||
                    (filterCriteria === 'excellent' && dept.satisfaction >= 95) ||
                    (filterCriteria === 'good' && dept.satisfaction >= 90 && dept.satisfaction < 95) ||
                    (filterCriteria === 'average' && dept.satisfaction < 90))
        )
        .sort((a, b) => {
            const aVal = a[sortBy];
            const bVal = b[sortBy];
            return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
        });

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setAnimatedData(departmentData);
            setIsLoading(false);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    const handleSort = (criteria) => {
        if (sortBy === criteria) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(criteria);
            setSortOrder('desc');
        }
    };

    // Custom Tooltip Components
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
                    <p className="font-semibold text-gray-800">{`${label}: ${payload[0].value}`}</p>
                </div>
            );
        }
        return null;
    };

    const CustomPieTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
                    <p className="font-semibold text-gray-800">{`${data.name}: ${data.count} reviews`}</p>
                </div>
            );
        }
        return null;
    };

    const DepartmentCard = ({ dept, index }) => {
        const IconComponent = dept.icon;
        const delay = index * 100;

        // Premium Pie Chart Colors
        const pieColors = ['#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

        return (
            <div
                className={`
    group relative 
    bg-gradient-to-br ${dept.bgGradient} 
    rounded-xl sm:rounded-2xl  
    shadow-lg border border-white/20 
    backdrop-blur-sm overflow-hidden 
    w-full max-w-sm mx-auto 
    p-3 sm:p-4 md:p-5 lg:p-6 
    transform transition-all duration-500 
    hover:scale-105 hover:shadow-2xl hover:-translate-y-2
  `}
                style={{
                    animationDelay: `${delay}ms`,
                    animation: 'slideInUp 0.8s ease-out forwards',
                }}
                onMouseEnter={() => setHoveredDept(dept.id)}
                onMouseLeave={() => setHoveredDept(null)}
            >
                <div
                    className={`absolute inset-0 bg-gradient-to-r ${dept.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 rounded-full animate-float"
                            style={{
                                left: `${20 + i * 15}%`,
                                top: `${10 + i * 10}%`,
                                animationDelay: `${i * 0.5}s`,
                                animationDuration: `${3 + i * 0.5}s`,
                            }}
                        />
                    ))}
                </div>

                <div className="relative p-4 sm:p-6 z-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-3 sm:space-y-0">
                        <div className="flex items-center space-x-3">
                            <div
                                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${dept.gradient} flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}
                            >
                                <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-base sm:text-lg">{dept.name}</h3>
                                <p className="text-xs sm:text-sm text-gray-600">
                                    <AnimatedCounter end={dept.patients} /> patients
                                </p>
                            </div>
                        </div>
                        <div className="relative flex justify-end sm:justify-center">
                            <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                        {/* Satisfaction Rate */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                            <span className="text-xs sm:text-sm font-medium text-gray-600">Satisfaction Rate</span>
                            <div className="flex items-center space-x-2">
                                <span className="text-lg sm:text-2xl font-bold text-gray-900">
                                    <AnimatedCounter end={dept.satisfaction} decimals={1} suffix="%" />
                                </span>
                                <div
                                    className={`flex items-center text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-full ${
                                        dept.trend > 0 ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'
                                    }`}
                                >
                                    {dept.trend > 0 ? (
                                        <ArrowUp className="w-3 h-3 mr-1" />
                                    ) : (
                                        <ArrowDown className="w-3 h-3 mr-1" />
                                    )}
                                    <AnimatedCounter end={Math.abs(dept.trend)} decimals={1} suffix="%" />
                                </div>
                            </div>
                        </div>

                        {/* Ratings & NPS */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <div className="text-center">
                                <div className="flex items-center justify-center space-x-1 mb-1">
                                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                                    <span className="text-base sm:text-lg font-bold text-gray-900">
                                        <AnimatedCounter end={dept.avgRating} decimals={1} />
                                    </span>
                                </div>
                                <p className="text-[10px] sm:text-xs text-gray-600">Avg Rating</p>
                            </div>
                            <div className="text-center">
                                <div className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                                    <AnimatedCounter end={dept.nps} />
                                </div>
                                <p className="text-[10px] sm:text-xs text-gray-600">NPS Score</p>
                            </div>
                        </div>
                    </div>

                    {/* Premium Donut Chart */}
                    <div className="h-20 mb-4 flex justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={dept.reviews}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={25}
                                    outerRadius={40}
                                    paddingAngle={2}
                                    dataKey="count"
                                    animationDuration={1500}
                                    animationDelay={delay}
                                >
                                    {dept.reviews.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                                    ))}
                                </Pie>
                                <Tooltip content={<CustomPieTooltip />} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="text-center p-2 bg-white/50 rounded-lg backdrop-blur-sm">
                            <div className="font-semibold text-gray-900">
                                <AnimatedCounter end={dept.responseRate} suffix="%" />
                            </div>
                            <div className="text-gray-600">Response</div>
                        </div>
                        <div className="text-center p-2 bg-white/50 rounded-lg backdrop-blur-sm">
                            <div className="font-semibold text-gray-900">
                                <AnimatedCounter end={dept.waitTime} suffix="m" />
                            </div>
                            <div className="text-gray-600">Wait Time</div>
                        </div>
                        <div className="text-center p-2 bg-white/50 rounded-lg backdrop-blur-sm">
                            <div className="font-semibold text-gray-900">
                                <AnimatedCounter end={dept.staffRating} decimals={1} />
                            </div>
                            <div className="text-gray-600">Staff</div>
                        </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
            </div>
        );
    };

    const DetailedCard = ({ dept, index }) => {
        const IconComponent = dept.icon;
        const delay = index * 50;

        // Premium colors for charts
        const pieColors = ['#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

        return (
            <div
                className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                style={{
                    animationDelay: `${delay}ms`,
                    animation: 'slideInLeft 0.6s ease-out forwards',
                }}
            >
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                            <div
                                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${dept.gradient} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                            >
                                <IconComponent className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">{dept.name}</h3>
                                <p className="text-gray-600">
                                    <AnimatedCounter end={dept.patients} /> patients served
                                </p>
                            </div>
                        </div>
                        <div
                            className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-semibold ${
                                dept.trend > 0 ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'
                            }`}
                        >
                            {dept.trend > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                            <AnimatedCounter end={Math.abs(dept.trend)} decimals={1} suffix="%" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Left: Satisfaction Radial Chart */}
                        <div className="md:col-span-1">
                            <div className="text-center">
                                <div className="relative w-32 h-32 mx-auto mb-4">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <RadialBarChart
                                            cx="50%"
                                            cy="50%"
                                            innerRadius="75%" // Reduced thickness
                                            outerRadius="85%"
                                            barSize={10} // Controls thickness
                                            data={[
                                                { name: 'Satisfaction', value: dept.satisfaction, fill: dept.color }, // Darker color
                                                { name: 'Remaining', value: 100 - dept.satisfaction, fill: '#E5E7EB' }, // Gray color
                                            ]}
                                            startAngle={90}
                                            endAngle={-270}
                                        >
                                            <RadialBar
                                                background
                                                clockWise
                                                dataKey="value"
                                                cornerRadius={50} // Smooth edges
                                            />
                                        </RadialBarChart>
                                    </ResponsiveContainer>

                                    {/* Center Text */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-gray-900">
                                                <AnimatedCounter end={dept.satisfaction} decimals={1} suffix="%" />
                                            </div>
                                            <div className="text-xs text-gray-600">Satisfaction</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Middle: Stats Cards */}
                        <div className="md:col-span-1 space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className=" rounded-xl p-3">
                                    <div className="flex items-center space-x-2 mb-1">
                                        <Star className="w-4 h-4 text-yellow-400" />
                                        <span className="text-sm font-medium text-gray-600">Average Rating</span>
                                    </div>
                                    <div className="text-xl font-bold text-gray-900">
                                        <AnimatedCounter end={dept.avgRating} decimals={1} />
                                    </div>
                                </div>

                                <div className="rounded-xl p-3">
                                    <div className="flex items-center space-x-2 mb-1">
                                        <Award className="w-4 h-4 text-blue-500" />
                                        <span className="text-sm font-medium text-gray-600">NPS Score</span>
                                    </div>
                                    <div className="text-xl font-bold text-gray-900">
                                        <AnimatedCounter end={dept.nps} />
                                    </div>
                                </div>

                                <div className=" rounded-xl p-3">
                                    <div className="flex items-center space-x-2 mb-1">
                                        <Users className="w-4 h-4 text-green-500" />
                                        <span className="text-sm font-medium text-gray-600">Response Rate</span>
                                    </div>
                                    <div className="text-xl font-bold text-gray-900">
                                        <AnimatedCounter end={dept.responseRate} suffix="%" />
                                    </div>
                                </div>

                                <div className=" rounded-xl p-3">
                                    <div className="flex items-center space-x-2 mb-1">
                                        <Activity className="w-4 h-4 text-purple-500" />
                                        <span className="text-sm font-medium text-gray-600">Wait Time</span>
                                    </div>
                                    <div className="text-xl font-bold text-gray-900">
                                        <AnimatedCounter end={dept.waitTime} suffix="m" />
                                    </div>
                                </div>
                            </div>

                            {/* Premium Trend Line Chart */}
                            <div className=" rounded-xl p-4">
                                <h4 className="text-sm font-semibold text-gray-900 mb-3">Monthly Trend</h4>
                                <div className="h-24">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={dept.monthlyTrend}>
                                            <defs>
                                                <linearGradient id={`colorGradient${dept.id}`} x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor={dept.color} stopOpacity={0.3} />
                                                    <stop offset="95%" stopColor={dept.color} stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <XAxis
                                                dataKey="month"
                                                tick={{ fontSize: 12 }}
                                                axisLine={false}
                                                tickLine={false}
                                            />
                                            <YAxis hide />
                                            <Tooltip content={<CustomTooltip />} />
                                            <Area
                                                type="monotone"
                                                dataKey="satisfaction"
                                                stroke={dept.color}
                                                strokeWidth={2}
                                                fill={`url(#colorGradient${dept.id})`}
                                                animationDuration={2000}
                                                animationDelay={delay + 500}
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>

                        {/* Right: Rating Distribution */}
                        <div className="md:col-span-1">
                            <div className="space-y-4">
                                {/* Premium Donut Chart for Reviews */}
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Review Distribution</h4>
                                    <div className="h-32">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                <Pie
                                                    data={dept.reviews}
                                                    cx="50%"
                                                    cy="50%"
                                                    innerRadius={30}
                                                    outerRadius={50}
                                                    paddingAngle={3}
                                                    dataKey="count"
                                                    animationDuration={2000}
                                                    animationDelay={delay + 200}
                                                >
                                                    {dept.reviews.map((entry, index) => (
                                                        <Cell
                                                            key={`cell-${index}`}
                                                            fill={pieColors[index % pieColors.length]}
                                                        />
                                                    ))}
                                                </Pie>
                                                <Tooltip content={<CustomPieTooltip />} />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>

                                {/* Rating Breakdown */}
                                <div className="space-y-2">
                                    <h4 className="text-sm font-semibold text-gray-900">Rating Breakdown</h4>
                                    {dept.reviews.map((review, idx) => (
                                        <div key={idx} className="flex items-center space-x-3">
                                            <div className="flex items-center space-x-1 w-12">
                                                <span className="text-xs font-medium text-gray-600">{review.rating}</span>
                                                <Star className="w-3 h-3 text-yellow-400" />
                                            </div>
                                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                                                <div
                                                    className={`h-full rounded-full transition-all duration-1000`}
                                                    style={{
                                                        backgroundColor: pieColors[idx % pieColors.length],
                                                        width: `${
                                                            (review.count / Math.max(...dept.reviews.map((r) => r.count))) *
                                                            100
                                                        }%`,
                                                        animationDelay: `${delay + idx * 100}ms`,
                                                    }}
                                                />
                                            </div>
                                            <span className="text-xs font-medium text-gray-600 w-8">
                                                <AnimatedCounter end={review.count} duration={1500} />
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Stats Row */}
                    <div className="mt-6 grid grid-cols-3 gap-4">
                        <div className="text-center p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                            <div className="text-lg font-bold text-gray-900">
                                <AnimatedCounter end={dept.staffRating} decimals={1} />
                            </div>
                            <div className="text-xs text-gray-600">Staff Rating</div>
                        </div>
                        <div className="text-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                            <div className="text-lg font-bold text-gray-900">
                                <AnimatedCounter end={dept.facilityRating} decimals={1} />
                            </div>
                            <div className="text-xs text-gray-600">Facility Rating</div>
                        </div>
                        <div className="text-center p-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl">
                            <div className="text-lg font-bold text-gray-900">
                                <AnimatedCounter end={dept.treatmentRating} decimals={1} />
                            </div>
                            <div className="text-xs text-gray-600">Treatment Rating</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="relative">
                        <div className="w-20 h-20 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 border-2 border-pink-200 border-t-pink-500 rounded-full animate-spin animate-reverse"></div>
                        </div>
                    </div>
                    <p className="text-gray-700 font-semibold text-lg animate-pulse">Loading Premium Dashboard...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
            <div className="relative overflow-hidden bg-gradient-to-r from-[#2FA19A] to-[#18356C] font-quicksand shadow-2xl">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 lg:py-16">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 animate-fadeInUp">
                            Department Analytics
                        </h1>
                        <p
                            className="text-base sm:text-lg lg:text-xl text-purple-100 max-w-2xl mx-auto animate-fadeInUp"
                            style={{ animationDelay: '200ms' }}
                        >
                            Premium healthcare department performance insights with real-time satisfaction metrics
                        </p>
                    </div>

                    {/* Controls */}
                    <div
                        className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4 animate-fadeInUp"
                        style={{ animationDelay: '400ms' }}
                    >
                        {/* Search + Filter */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0 w-full lg:w-auto">
                            <div className="relative w-full sm:w-auto">
                                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search departments..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full sm:w-64 pl-10 pr-4 py-2 bg-white/90 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300"
                                />
                            </div>

                            {/* Filter + Sort with Custom Dropdowns */}
                            <div className="flex flex-row space-x-3 w-full sm:w-auto">
                                <CustomDropdown
                                    value={filterCriteria}
                                    onChange={setFilterCriteria}
                                    options={filterOptions}
                                    className="w-[150px]"
                                    placeholder="Filter departments..."
                                />

                                <CustomDropdown
                                    value={`${sortBy}-${sortOrder}`}
                                    onChange={handleSortChange}
                                    options={sortOptions}
                                    className="min-w-[120px]"
                                    placeholder="Sort by..."
                                />
                            </div>
                        </div>

                        {/* View Toggle */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0 w-full lg:w-auto">
                            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-xl p-1 w-full sm:w-auto">
                                <button
                                    onClick={() => setSelectedView('grid')}
                                    className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                        selectedView === 'grid'
                                            ? 'bg-white font-semibold text-[#18356C] shadow-lg'
                                            : 'text-white hover:bg-white/10'
                                    }`}
                                >
                                    Grid View
                                </button>
                                <button
                                    onClick={() => setSelectedView('detailed')}
                                    className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                        selectedView === 'detailed'
                                            ? 'bg-white font-semibold text-[#18356C] shadow-lg'
                                            : 'text-white hover:bg-white/10'
                                    }`}
                                >
                                    Detailed View
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cards */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <style jsx>{`
                    @keyframes slideInLeft {
                        from {
                            transform: translateX(-50px);
                            opacity: 0;
                        }
                        to {
                            transform: translateX(0);
                            opacity: 1;
                        }
                    }

                    @keyframes fadeInUp {
                        from {
                            transform: translateY(30px);
                            opacity: 0;
                        }
                        to {
                            transform: translateY(0);
                            opacity: 1;
                        }
                    }

                    .scrollbar-hide {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }

                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>

                {selectedView === 'grid' ? (
                    <div className="overflow-x-auto scrollbar-hide">
                        <div
                            className="flex gap-6 pb-4 animate-slide-in"
                            style={{
                                minWidth: 'max-content',
                                animation: 'slideInLeft 0.8s ease-out',
                            }}
                        >
                            {filteredData.map((dept, index) => (
                                <div
                                    key={dept.id}
                                    className="flex-shrink-0 w-80 transform transition-all duration-300 hover:scale-105"
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                        opacity: 0,
                                        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                                    }}
                                >
                                    <DepartmentCard dept={dept} index={index} />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {filteredData.map((dept, index) => (
                            <DetailedCard key={dept.id} dept={dept} index={index} />
                        ))}
                    </div>
                )}

                {filteredData.length === 0 && (
                    <div className="text-center py-12">
                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search className="w-12 h-12 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No departments found</h3>
                        <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                    </div>
                )}
            </div>
            {/* Floating Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <button className="px-5 py-3 bg-gradient-to-r from-[#2FA19A] to-[#18356C] text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-bounce font-semibold">
                    Book Appointment
                </button>
            </div>

            <style jsx>{`
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes expandWidth {
                    from {
                        width: 0%;
                    }
                    to {
                        width: var(--target-width);
                    }
                }

                @keyframes float {
                    0%,
                    100% {
                        transform: translateY(0px) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-10px) rotate(180deg);
                    }
                }

                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out forwards;
                    opacity: 0;
                }

                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }

                .animate-reverse {
                    animation-direction: reverse;
                }
            `}</style>
        </div>
    );
};

export default PremiumDepartmentDashboard;
// import React, { useState, useEffect, useRef } from 'react';
// import {
//     XAxis,
//     YAxis,
//     ResponsiveContainer,
//     Tooltip,
//     Area,
//     AreaChart,
//     PieChart,
//     Pie,
//     Cell,
//     RadialBarChart,
//     RadialBar,
// } from 'recharts';
// import {
//     TrendingUp,
//     TrendingDown,
//     Users,
//     Star,
//     Award,
//     Activity,
//     Heart,
//     Brain,
//     Scissors,
//     Baby,
//     Shield,
//     Eye,
//     Stethoscope,
//     Search,
//     MoreVertical,
//     ArrowUp,
//     ArrowDown,
//     ChevronDown,
// } from 'lucide-react';

// // Custom Dropdown Component
// const CustomDropdown = ({
//     value,
//     onChange,
//     options,
//     placeholder = 'Select...',
//     className = '',
//     optionClassName = '',
//     dropdownClassName = '',
//     ...props
// }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     // Close dropdown when clicking outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsOpen(false);
//             }
//         };
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, []);

//     const selectedOption = options.find((option) => option.value === value);

//     return (
//         <div className={`relative ${className}`} ref={dropdownRef}>
//             <button
//                 type="button"
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="w-full px-4 py-2 bg-white/90 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 text-[10px] whitespace-nowrap text-center flex items-center justify-between"
//                 {...props}
//             >
//                 <span className={selectedOption ? 'text-gray-900' : 'text-gray-500'}>
//                     {selectedOption ? selectedOption.label : placeholder}
//                 </span>
//                 <ChevronDown
//                     className={`w-4 h-4 ml-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
//                 />
//             </button>

//             {isOpen && (
//                 <div
//                     className={`absolute top-full left-0 right-0 mt-1 bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg z-50 max-h-60 overflow-auto ${dropdownClassName}`}
//                 >
//                     {options.map((option) => (
//                         <button
//                             key={option.value}
//                             type="button"
//                             onClick={() => {
//                                 onChange(option.value);
//                                 setIsOpen(false);
//                             }}
//                             className={`w-full px-4 py-2 text-left text-[10px] whitespace-nowrap hover:bg-white/50 transition-colors duration-150 first:rounded-t-xl last:rounded-b-xl ${
//                                 value === option.value ? 'bg-white/30 text-gray-900 font-medium' : 'text-gray-700'
//                             } ${optionClassName}`}
//                         >
//                             {option.label}
//                         </button>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// // Counter Animation Hook
// const useCounterAnimation = (end, duration = 2000, start = 0) => {
//     const [count, setCount] = useState(start);

//     useEffect(() => {
//         if (start === end) return;

//         let startTime;
//         const animate = (currentTime) => {
//             if (!startTime) startTime = currentTime;
//             const progress = Math.min((currentTime - startTime) / duration, 1);

//             const easeOutQuart = 1 - Math.pow(1 - progress, 4);
//             const currentCount = start + (end - start) * easeOutQuart;

//             if (typeof end === 'number' && end % 1 !== 0) {
//                 setCount(Math.min(currentCount, end));
//             } else {
//                 setCount(Math.floor(Math.min(currentCount, end)));
//             }

//             if (progress < 1) {
//                 requestAnimationFrame(animate);
//             }
//         };

//         requestAnimationFrame(animate);
//     }, [end, duration, start]);

//     return count;
// };

// // Animated Counter Component
// const AnimatedCounter = ({ end, duration = 2000, decimals = 0, suffix = '' }) => {
//     const count = useCounterAnimation(end, duration);
//     const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

//     return (
//         <span>
//             {displayValue}
//             {suffix}
//         </span>
//     );
// };

// const PremiumDepartmentDashboard = () => {
//     const [selectedView, setSelectedView] = useState('grid');
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filterCriteria, setFilterCriteria] = useState('all');
//     const [animatedData, setAnimatedData] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [hoveredDept, setHoveredDept] = useState(null);
//     const [sortBy, setSortBy] = useState('satisfaction');
//     const [sortOrder, setSortOrder] = useState('desc');

//     // Filter and Sort Options for Custom Dropdown
//     const filterOptions = [
//         { value: 'all', label: 'All Departments' },
//         { value: 'excellent', label: 'Excellent (95%+)' },
//         { value: 'good', label: 'Good (90-95%)' },
//         { value: 'average', label: 'Average (<90%)' },
//     ];

//     const sortOptions = [
//         { value: 'satisfaction-desc', label: 'Satisfaction (High to Low)' },
//         { value: 'satisfaction-asc', label: 'Satisfaction (Low to High)' },
//         { value: 'patients-desc', label: 'Patients (Most to Least)' },
//         { value: 'patients-asc', label: 'Patients (Least to Most)' },
//         { value: 'nps-desc', label: 'NPS (High to Low)' },
//         { value: 'trend-desc', label: 'Trend (Best to Worst)' },
//     ];

//     const handleSortChange = (value) => {
//         const [criteria, order] = value.split('-');
//         setSortBy(criteria);
//         setSortOrder(order);
//     };

//     const departmentData = [
//         {
//             id: 1,
//             name: 'Cardiology',
//             icon: Heart,
//             satisfaction: 94.2,
//             patients: 1247,
//             avgRating: 4.7,
//             responseRate: 89,
//             nps: 78,
//             waitTime: 12,
//             staffRating: 4.8,
//             facilityRating: 4.6,
//             treatmentRating: 4.9,
//             trend: 5.2,
//             color: '#ef4444',
//             gradient: 'from-red-500 to-pink-600',
//             bgGradient: 'from-red-50 to-pink-50',
//             reviews: [
//                 { rating: 5, count: 987, name: '5 Star' },
//                 { rating: 4, count: 201, name: '4 Star' },
//                 { rating: 3, count: 45, name: '3 Star' },
//                 { rating: 2, count: 12, name: '2 Star' },
//                 { rating: 1, count: 2, name: '1 Star' },
//             ],
//             monthlyTrend: [
//                 { month: 'Jan', satisfaction: 89, patients: 1100 },
//                 { month: 'Feb', satisfaction: 91, patients: 1150 },
//                 { month: 'Mar', satisfaction: 93, patients: 1200 },
//                 { month: 'Apr', satisfaction: 94.2, patients: 1247 },
//             ],
//         },
//         {
//             id: 2,
//             name: 'Neurology',
//             icon: Brain,
//             satisfaction: 92.8,
//             patients: 856,
//             avgRating: 4.6,
//             responseRate: 85,
//             nps: 72,
//             waitTime: 18,
//             staffRating: 4.7,
//             facilityRating: 4.5,
//             treatmentRating: 4.8,
//             trend: 3.1,
//             color: '#8b5cf6',
//             gradient: 'from-purple-500 to-indigo-600',
//             bgGradient: 'from-purple-50 to-indigo-50',
//             reviews: [
//                 { rating: 5, count: 678, name: '5 Star' },
//                 { rating: 4, count: 142, name: '4 Star' },
//                 { rating: 3, count: 28, name: '3 Star' },
//                 { rating: 2, count: 7, name: '2 Star' },
//                 { rating: 1, count: 1, name: '1 Star' },
//             ],
//             monthlyTrend: [
//                 { month: 'Jan', satisfaction: 88, patients: 780 },
//                 { month: 'Feb', satisfaction: 90, patients: 820 },
//                 { month: 'Mar', satisfaction: 91, patients: 840 },
//                 { month: 'Apr', satisfaction: 92.8, patients: 856 },
//             ],
//         },
//         {
//             id: 3,
//             name: 'Surgery',
//             icon: Scissors,
//             satisfaction: 96.1,
//             patients: 634,
//             avgRating: 4.8,
//             responseRate: 91,
//             nps: 82,
//             waitTime: 8,
//             staffRating: 4.9,
//             facilityRating: 4.7,
//             treatmentRating: 4.9,
//             trend: 7.3,
//             color: '#10b981',
//             gradient: 'from-emerald-500 to-teal-600',
//             bgGradient: 'from-emerald-50 to-teal-50',
//             reviews: [
//                 { rating: 5, count: 545, name: '5 Star' },
//                 { rating: 4, count: 78, name: '4 Star' },
//                 { rating: 3, count: 9, name: '3 Star' },
//                 { rating: 2, count: 2, name: '2 Star' },
//                 { rating: 1, count: 0, name: '1 Star' },
//             ],
//             monthlyTrend: [
//                 { month: 'Jan', satisfaction: 92, patients: 580 },
//                 { month: 'Feb', satisfaction: 94, patients: 600 },
//                 { month: 'Mar', satisfaction: 95, patients: 620 },
//                 { month: 'Apr', satisfaction: 96.1, patients: 634 },
//             ],
//         },
//         {
//             id: 4,
//             name: 'Pediatrics',
//             icon: Baby,
//             satisfaction: 97.5,
//             patients: 1123,
//             avgRating: 4.9,
//             responseRate: 94,
//             nps: 85,
//             waitTime: 15,
//             staffRating: 4.9,
//             facilityRating: 4.8,
//             treatmentRating: 4.9,
//             trend: 4.7,
//             color: '#f59e0b',
//             gradient: 'from-amber-500 to-orange-600',
//             bgGradient: 'from-amber-50 to-orange-50',
//             reviews: [
//                 { rating: 5, count: 978, name: '5 Star' },
//                 { rating: 4, count: 128, name: '4 Star' },
//                 { rating: 3, count: 15, name: '3 Star' },
//                 { rating: 2, count: 2, name: '2 Star' },
//                 { rating: 1, count: 0, name: '1 Star' },
//             ],
//             monthlyTrend: [
//                 { month: 'Jan', satisfaction: 94, patients: 1000 },
//                 { month: 'Feb', satisfaction: 96, patients: 1050 },
//                 { month: 'Mar', satisfaction: 97, patients: 1100 },
//                 { month: 'Apr', satisfaction: 97.5, patients: 1123 },
//             ],
//         },
//         {
//             id: 5,
//             name: 'Emergency',
//             icon: Shield,
//             satisfaction: 87.3,
//             patients: 2156,
//             avgRating: 4.4,
//             responseRate: 76,
//             nps: 58,
//             waitTime: 25,
//             staffRating: 4.5,
//             facilityRating: 4.2,
//             treatmentRating: 4.6,
//             trend: -2.1,
//             color: '#dc2626',
//             gradient: 'from-red-600 to-rose-700',
//             bgGradient: 'from-red-50 to-rose-50',
//             reviews: [
//                 { rating: 5, count: 1234, name: '5 Star' },
//                 { rating: 4, count: 567, name: '4 Star' },
//                 { rating: 3, count: 234, name: '3 Star' },
//                 { rating: 2, count: 89, name: '2 Star' },
//                 { rating: 1, count: 32, name: '1 Star' },
//             ],
//             monthlyTrend: [
//                 { month: 'Jan', satisfaction: 90, patients: 2000 },
//                 { month: 'Feb', satisfaction: 89, patients: 2080 },
//                 { month: 'Mar', satisfaction: 88, patients: 2120 },
//                 { month: 'Apr', satisfaction: 87.3, patients: 2156 },
//             ],
//         },
//         {
//             id: 6,
//             name: 'Ophthalmology',
//             icon: Eye,
//             satisfaction: 95.7,
//             patients: 445,
//             avgRating: 4.8,
//             responseRate: 88,
//             nps: 79,
//             waitTime: 10,
//             staffRating: 4.8,
//             facilityRating: 4.7,
//             treatmentRating: 4.8,
//             trend: 6.2,
//             color: '#3b82f6',
//             gradient: 'from-blue-500 to-cyan-600',
//             bgGradient: 'from-blue-50 to-cyan-50',
//             reviews: [
//                 { rating: 5, count: 378, name: '5 Star' },
//                 { rating: 4, count: 56, name: '4 Star' },
//                 { rating: 3, count: 9, name: '3 Star' },
//                 { rating: 2, count: 2, name: '2 Star' },
//                 { rating: 1, count: 0, name: '1 Star' },
//             ],
//             monthlyTrend: [
//                 { month: 'Jan', satisfaction: 92, patients: 400 },
//                 { month: 'Feb', satisfaction: 94, patients: 420 },
//                 { month: 'Mar', satisfaction: 95, patients: 435 },
//                 { month: 'Apr', satisfaction: 95.7, patients: 445 },
//             ],
//         },
//         {
//             id: 7,
//             name: 'General Medicine',
//             icon: Stethoscope,
//             satisfaction: 89.4,
//             patients: 1789,
//             avgRating: 4.5,
//             responseRate: 82,
//             nps: 63,
//             waitTime: 20,
//             staffRating: 4.6,
//             facilityRating: 4.4,
//             treatmentRating: 4.7,
//             trend: 1.8,
//             color: '#06b6d4',
//             gradient: 'from-cyan-500 to-blue-500',
//             bgGradient: 'from-cyan-50 to-blue-50',
//             reviews: [
//                 { rating: 5, count: 1234, name: '5 Star' },
//                 { rating: 4, count: 389, name: '4 Star' },
//                 { rating: 3, count: 123, name: '3 Star' },
//                 { rating: 2, count: 34, name: '2 Star' },
//                 { rating: 1, count: 9, name: '1 Star' },
//             ],
//             monthlyTrend: [
//                 { month: 'Jan', satisfaction: 87, patients: 1650 },
//                 { month: 'Feb', satisfaction: 88, patients: 1700 },
//                 { month: 'Mar', satisfaction: 89, patients: 1750 },
//                 { month: 'Apr', satisfaction: 89.4, patients: 1789 },
//             ],
//         },
//         {
//             id: 8,
//             name: 'Orthopedics',
//             icon: Activity,
//             satisfaction: 91.6,
//             patients: 967,
//             avgRating: 4.6,
//             responseRate: 87,
//             nps: 69,
//             waitTime: 16,
//             staffRating: 4.7,
//             facilityRating: 4.5,
//             treatmentRating: 4.8,
//             trend: 3.9,
//             color: '#84cc16',
//             gradient: 'from-lime-500 to-green-600',
//             bgGradient: 'from-lime-50 to-green-50',
//             reviews: [
//                 { rating: 5, count: 723, name: '5 Star' },
//                 { rating: 4, count: 189, name: '4 Star' },
//                 { rating: 3, count: 45, name: '3 Star' },
//                 { rating: 2, count: 8, name: '2 Star' },
//                 { rating: 1, count: 2, name: '1 Star' },
//             ],
//             monthlyTrend: [
//                 { month: 'Jan', satisfaction: 88, patients: 900 },
//                 { month: 'Feb', satisfaction: 90, patients: 930 },
//                 { month: 'Mar', satisfaction: 91, patients: 950 },
//                 { month: 'Apr', satisfaction: 91.6, patients: 967 },
//             ],
//         },
//     ];

//     const filteredData = animatedData
//         .filter(
//             (dept) =>
//                 dept.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//                 (filterCriteria === 'all' ||
//                     (filterCriteria === 'excellent' && dept.satisfaction >= 95) ||
//                     (filterCriteria === 'good' && dept.satisfaction >= 90 && dept.satisfaction < 95) ||
//                     (filterCriteria === 'average' && dept.satisfaction < 90))
//         )
//         .sort((a, b) => {
//             const aVal = a[sortBy];
//             const bVal = b[sortBy];
//             return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
//         });

//     useEffect(() => {
//         setIsLoading(true);
//         const timer = setTimeout(() => {
//             setAnimatedData(departmentData);
//             setIsLoading(false);
//         }, 800);

//         return () => clearTimeout(timer);
//     }, []);

//     const handleSort = (criteria) => {
//         if (sortBy === criteria) {
//             setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
//         } else {
//             setSortBy(criteria);
//             setSortOrder('desc');
//         }
//     };

//     // Custom Tooltip Components
//     const CustomTooltip = ({ active, payload, label }) => {
//         if (active && payload && payload.length) {
//             return (
//                 <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
//                     <p className="font-semibold text-gray-800">{`${label}: ${payload[0].value}`}</p>
//                 </div>
//             );
//         }
//         return null;
//     };

//     const CustomPieTooltip = ({ active, payload }) => {
//         if (active && payload && payload.length) {
//             const data = payload[0].payload;
//             return (
//                 <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
//                     <p className="font-semibold text-gray-800">{`${data.name}: ${data.count} reviews`}</p>
//                 </div>
//             );
//         }
//         return null;
//     };

//     const DepartmentCard = ({ dept, index }) => {
//         const IconComponent = dept.icon;
//         const delay = index * 100;

//         // Premium Pie Chart Colors
//         const pieColors = ['#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

//         return (
//             <div
//                 className={`
//     group relative
//     bg-gradient-to-br ${dept.bgGradient}
//     rounded-xl sm:rounded-2xl
//     shadow-lg border border-white/20
//     backdrop-blur-sm overflow-hidden
//     w-full max-w-sm mx-auto
//     p-3 sm:p-4 md:p-5 lg:p-6
//     transform transition-all duration-500
//     hover:scale-105 hover:shadow-2xl hover:-translate-y-2
//   `}
//                 style={{
//                     animationDelay: `${delay}ms`,
//                     animation: 'slideInUp 0.8s ease-out forwards',
//                 }}
//                 onMouseEnter={() => setHoveredDept(dept.id)}
//                 onMouseLeave={() => setHoveredDept(null)}
//             >
//                 <div
//                     className={`absolute inset-0 bg-gradient-to-r ${dept.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
//                 />

//                 <div className="absolute inset-0 overflow-hidden">
//                     {[...Array(6)].map((_, i) => (
//                         <div
//                             key={i}
//                             className="absolute w-2 h-2 rounded-full animate-float"
//                             style={{
//                                 left: `${20 + i * 15}%`,
//                                 top: `${10 + i * 10}%`,
//                                 animationDelay: `${i * 0.5}s`,
//                                 animationDuration: `${3 + i * 0.5}s`,
//                             }}
//                         />
//                     ))}
//                 </div>

//                 <div className="relative p-4 sm:p-6 z-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
//                     {/* Header */}
//                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-3 sm:space-y-0">
//                         <div className="flex items-center space-x-3">
//                             <div
//                                 className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${dept.gradient} flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}
//                             >
//                                 <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//                             </div>
//                             <div>
//                                 <h3 className="font-bold text-gray-900 text-base sm:text-lg">{dept.name}</h3>
//                                 <p className="text-xs sm:text-sm text-gray-600">
//                                     <AnimatedCounter end={dept.patients} /> patients
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="relative flex justify-end sm:justify-center">
//                             <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
//                         </div>
//                     </div>

//                     {/* Stats */}
//                     <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
//                         {/* Satisfaction Rate */}
//                         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
//                             <span className="text-xs sm:text-sm font-medium text-gray-600">Satisfaction Rate</span>
//                             <div className="flex items-center space-x-2">
//                                 <span className="text-lg sm:text-2xl font-bold text-gray-900">
//                                     <AnimatedCounter end={dept.satisfaction} decimals={1} suffix="%" />
//                                 </span>
//                                 <div
//                                     className={`flex items-center text-[10px] sm:text-xs font-semibold px-2 py-1 rounded-full ${
//                                         dept.trend > 0 ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'
//                                     }`}
//                                 >
//                                     {dept.trend > 0 ? (
//                                         <ArrowUp className="w-3 h-3 mr-1" />
//                                     ) : (
//                                         <ArrowDown className="w-3 h-3 mr-1" />
//                                     )}
//                                     <AnimatedCounter end={Math.abs(dept.trend)} decimals={1} suffix="%" />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Ratings & NPS */}
//                         <div className="grid grid-cols-2 gap-3 sm:gap-4">
//                             <div className="text-center">
//                                 <div className="flex items-center justify-center space-x-1 mb-1">
//                                     <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
//                                     <span className="text-base sm:text-lg font-bold text-gray-900">
//                                         <AnimatedCounter end={dept.avgRating} decimals={1} />
//                                     </span>
//                                 </div>
//                                 <p className="text-[10px] sm:text-xs text-gray-600">Avg Rating</p>
//                             </div>
//                             <div className="text-center">
//                                 <div className="text-base sm:text-lg font-bold text-gray-900 mb-1">
//                                     <AnimatedCounter end={dept.nps} />
//                                 </div>
//                                 <p className="text-[10px] sm:text-xs text-gray-600">NPS Score</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Premium Donut Chart */}
//                     <div className="h-20 mb-4 flex justify-center">
//                         <ResponsiveContainer width="100%" height="100%">
//                             <PieChart>
//                                 <Pie
//                                     data={dept.reviews}
//                                     cx="50%"
//                                     cy="50%"
//                                     innerRadius={25}
//                                     outerRadius={40}
//                                     paddingAngle={2}
//                                     dataKey="count"
//                                     animationDuration={1500}
//                                     animationDelay={delay}
//                                 >
//                                     {dept.reviews.map((entry, index) => (
//                                         <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
//                                     ))}
//                                 </Pie>
//                                 <Tooltip content={<CustomPieTooltip />} />
//                             </PieChart>
//                         </ResponsiveContainer>
//                     </div>

//                     <div className="grid grid-cols-3 gap-2 text-xs">
//                         <div className="text-center p-2 bg-white/50 rounded-lg backdrop-blur-sm">
//                             <div className="font-semibold text-gray-900">
//                                 <AnimatedCounter end={dept.responseRate} suffix="%" />
//                             </div>
//                             <div className="text-gray-600">Response</div>
//                         </div>
//                         <div className="text-center p-2 bg-white/50 rounded-lg backdrop-blur-sm">
//                             <div className="font-semibold text-gray-900">
//                                 <AnimatedCounter end={dept.waitTime} suffix="m" />
//                             </div>
//                             <div className="text-gray-600">Wait Time</div>
//                         </div>
//                         <div className="text-center p-2 bg-white/50 rounded-lg backdrop-blur-sm">
//                             <div className="font-semibold text-gray-900">
//                                 <AnimatedCounter end={dept.staffRating} decimals={1} />
//                             </div>
//                             <div className="text-gray-600">Staff</div>
//                         </div>
//                     </div>

//                     <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
//                 </div>
//             </div>
//         );
//     };

//     const DetailedCard = ({ dept, index }) => {
//         const IconComponent = dept.icon;
//         const delay = index * 50;

//         // Premium colors for charts
//         const pieColors = ['#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

//         return (
//             <div
//                 className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
//                 style={{
//                     animationDelay: `${delay}ms`,
//                     animation: 'slideInLeft 0.6s ease-out forwards',
//                 }}
//             >
//                 <div className="p-6">
//                     <div className="flex items-center justify-between mb-4">
//                         <div className="flex items-center space-x-4">
//                             <div
//                                 className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${dept.gradient} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
//                             >
//                                 <IconComponent className="w-8 h-8 text-white" />
//                             </div>
//                             <div>
//                                 <h3 className="text-xl font-bold text-gray-900">{dept.name}</h3>
//                                 <p className="text-gray-600">
//                                     <AnimatedCounter end={dept.patients} /> patients served
//                                 </p>
//                             </div>
//                         </div>
//                         <div
//                             className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-semibold ${
//                                 dept.trend > 0 ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'
//                             }`}
//                         >
//                             {dept.trend > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
//                             <AnimatedCounter end={Math.abs(dept.trend)} decimals={1} suffix="%" />
//                         </div>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                         {/* Left: Satisfaction Radial Chart */}
//                         <div className="md:col-span-1">
//                             <div className="text-center">
//                                 <div className="relative w-32 h-32 mx-auto mb-4">
//                                     <ResponsiveContainer width="100%" height="100%">
//                                         <RadialBarChart
//                                             cx="50%"
//                                             cy="50%"
//                                             innerRadius="75%" // Reduced thickness
//                                             outerRadius="85%"
//                                             barSize={10} // Controls thickness
//                                             data={[
//                                                 { name: 'Satisfaction', value: dept.satisfaction, fill: dept.color }, // Darker color
//                                                 { name: 'Remaining', value: 100 - dept.satisfaction, fill: '#E5E7EB' }, // Gray color
//                                             ]}
//                                             startAngle={90}
//                                             endAngle={-270}
//                                         >
//                                             <RadialBar
//                                                 background
//                                                 clockWise
//                                                 dataKey="value"
//                                                 cornerRadius={50} // Smooth edges
//                                             />
//                                         </RadialBarChart>
//                                     </ResponsiveContainer>

//                                     {/* Center Text */}
//                                     <div className="absolute inset-0 flex items-center justify-center">
//                                         <div className="text-center">
//                                             <div className="text-2xl font-bold text-gray-900">
//                                                 <AnimatedCounter end={dept.satisfaction} decimals={1} suffix="%" />
//                                             </div>
//                                             <div className="text-xs text-gray-600">Satisfaction</div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Middle: Stats Cards */}
//                         <div className="md:col-span-1 space-y-4">
//                             <div className="grid grid-cols-2 gap-4">
//                                 <div className=" rounded-xl p-3">
//                                     <div className="flex items-center space-x-2 mb-1">
//                                         <Star className="w-4 h-4 text-yellow-400" />
//                                         <span className="text-sm font-medium text-gray-600">Average Rating</span>
//                                     </div>
//                                     <div className="text-xl font-bold text-gray-900">
//                                         <AnimatedCounter end={dept.avgRating} decimals={1} />
//                                     </div>
//                                 </div>

//                                 <div className="rounded-xl p-3">
//                                     <div className="flex items-center space-x-2 mb-1">
//                                         <Award className="w-4 h-4 text-blue-500" />
//                                         <span className="text-sm font-medium text-gray-600">NPS Score</span>
//                                     </div>
//                                     <div className="text-xl font-bold text-gray-900">
//                                         <AnimatedCounter end={dept.nps} />
//                                     </div>
//                                 </div>

//                                 <div className=" rounded-xl p-3">
//                                     <div className="flex items-center space-x-2 mb-1">
//                                         <Users className="w-4 h-4 text-green-500" />
//                                         <span className="text-sm font-medium text-gray-600">Response Rate</span>
//                                     </div>
//                                     <div className="text-xl font-bold text-gray-900">
//                                         <AnimatedCounter end={dept.responseRate} suffix="%" />
//                                     </div>
//                                 </div>

//                                 <div className=" rounded-xl p-3">
//                                     <div className="flex items-center space-x-2 mb-1">
//                                         <Activity className="w-4 h-4 text-purple-500" />
//                                         <span className="text-sm font-medium text-gray-600">Wait Time</span>
//                                     </div>
//                                     <div className="text-xl font-bold text-gray-900">
//                                         <AnimatedCounter end={dept.waitTime} suffix="m" />
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Premium Trend Line Chart */}
//                             <div className=" rounded-xl p-4">
//                                 <h4 className="text-sm font-semibold text-gray-900 mb-3">Monthly Trend</h4>
//                                 <div className="h-24">
//                                     <ResponsiveContainer width="100%" height="100%">
//                                         <AreaChart data={dept.monthlyTrend}>
//                                             <defs>
//                                                 <linearGradient id={`colorGradient${dept.id}`} x1="0" y1="0" x2="0" y2="1">
//                                                     <stop offset="5%" stopColor={dept.color} stopOpacity={0.3} />
//                                                     <stop offset="95%" stopColor={dept.color} stopOpacity={0} />
//                                                 </linearGradient>
//                                             </defs>
//                                             <XAxis
//                                                 dataKey="month"
//                                                 tick={{ fontSize: 12 }}
//                                                 axisLine={false}
//                                                 tickLine={false}
//                                             />
//                                             <YAxis hide />
//                                             <Tooltip content={<CustomTooltip />} />
//                                             <Area
//                                                 type="monotone"
//                                                 dataKey="satisfaction"
//                                                 stroke={dept.color}
//                                                 strokeWidth={2}
//                                                 fill={`url(#colorGradient${dept.id})`}
//                                                 animationDuration={2000}
//                                                 animationDelay={delay + 500}
//                                             />
//                                         </AreaChart>
//                                     </ResponsiveContainer>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Right: Rating Distribution */}
//                         <div className="md:col-span-1">
//                             <div className="space-y-4">
//                                 {/* Premium Donut Chart for Reviews */}
//                                 <div className="bg-gray-50 rounded-xl p-4">
//                                     <h4 className="text-sm font-semibold text-gray-900 mb-3">Review Distribution</h4>
//                                     <div className="h-32">
//                                         <ResponsiveContainer width="100%" height="100%">
//                                             <PieChart>
//                                                 <Pie
//                                                     data={dept.reviews}
//                                                     cx="50%"
//                                                     cy="50%"
//                                                     innerRadius={30}
//                                                     outerRadius={50}
//                                                     paddingAngle={3}
//                                                     dataKey="count"
//                                                     animationDuration={2000}
//                                                     animationDelay={delay + 200}
//                                                 >
//                                                     {dept.reviews.map((entry, index) => (
//                                                         <Cell
//                                                             key={`cell-${index}`}
//                                                             fill={pieColors[index % pieColors.length]}
//                                                         />
//                                                     ))}
//                                                 </Pie>
//                                                 <Tooltip content={<CustomPieTooltip />} />
//                                             </PieChart>
//                                         </ResponsiveContainer>
//                                     </div>
//                                 </div>

//                                 {/* Rating Breakdown */}
//                                 <div className="space-y-2">
//                                     <h4 className="text-sm font-semibold text-gray-900">Rating Breakdown</h4>
//                                     {dept.reviews.map((review, idx) => (
//                                         <div key={idx} className="flex items-center space-x-3">
//                                             <div className="flex items-center space-x-1 w-12">
//                                                 <span className="text-xs font-medium text-gray-600">{review.rating}</span>
//                                                 <Star className="w-3 h-3 text-yellow-400" />
//                                             </div>
//                                             <div className="flex-1 bg-gray-200 rounded-full h-2">
//                                                 <div
//                                                     className={`h-full rounded-full transition-all duration-1000`}
//                                                     style={{
//                                                         backgroundColor: pieColors[idx % pieColors.length],
//                                                         width: `${
//                                                             (review.count / Math.max(...dept.reviews.map((r) => r.count))) *
//                                                             100
//                                                         }%`,
//                                                         animationDelay: `${delay + idx * 100}ms`,
//                                                     }}
//                                                 />
//                                             </div>
//                                             <span className="text-xs font-medium text-gray-600 w-8">
//                                                 <AnimatedCounter end={review.count} duration={1500} />
//                                             </span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Bottom Stats Row */}
//                     <div className="mt-6 grid grid-cols-3 gap-4">
//                         <div className="text-center p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
//                             <div className="text-lg font-bold text-gray-900">
//                                 <AnimatedCounter end={dept.staffRating} decimals={1} />
//                             </div>
//                             <div className="text-xs text-gray-600">Staff Rating</div>
//                         </div>
//                         <div className="text-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
//                             <div className="text-lg font-bold text-gray-900">
//                                 <AnimatedCounter end={dept.facilityRating} decimals={1} />
//                             </div>
//                             <div className="text-xs text-gray-600">Facility Rating</div>
//                         </div>
//                         <div className="text-center p-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl">
//                             <div className="text-lg font-bold text-gray-900">
//                                 <AnimatedCounter end={dept.treatmentRating} decimals={1} />
//                             </div>
//                             <div className="text-xs text-gray-600">Treatment Rating</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     if (isLoading) {
//         return (
//             <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="relative">
//                         <div className="w-20 h-20 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4"></div>
//                         <div className="absolute inset-0 flex items-center justify-center">
//                             <div className="w-12 h-12 border-2 border-pink-200 border-t-pink-500 rounded-full animate-spin animate-reverse"></div>
//                         </div>
//                     </div>
//                     <p className="text-gray-700 font-semibold text-lg animate-pulse">Loading Premium Dashboard...</p>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-[#aef0e6] via-white to-[#aef0e6]">
//             <div className="section-title text-center  text-black font-quicksand ">
//                 <h1 className="text-4xl sm:text-5xl font-bold pt-2" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
//                     Department Analytics
//                 </h1>
//                 {/* <p className="text-lg sm:text-xl opacity-90 font-light">
//                         Individual drop downs for each category, when clicked animated dropdown shows detailed info
//                     </p> */}
//                 {/* <div className="mt-4 w-20 h-1 mb-0 bg-gradient-to-r from-[#18276c] to-[#2FA19A]   rounded-full mx-auto shadow-md"></div> */}
//                 <style>
//                     {`
//                             @keyframes premium-underline {
//                                 50% { transform: translateX(0%); }
//                                 0% { transform: translateX(-100%); }
//                                 }
//                                 100% { transform: translateX(100%); }
//                             `}
//                 </style>
//                 <div className="relative mt-4 h-1 w-40 mx-auto mb-0 overflow-hidden rounded-full shadow-lg">
//                     <div
//                         className="absolute inset-0 bg-gradient-to-r from-[#18276c] via-[#2FA19A] to-[#18276c]"
//                         style={{
//                             animation: 'premium-underline 3s ease-in-out infinite',
//                         }}
//                     ></div>
//                 </div>
//             </div>

//             {/* Cards */}
//             <div className="max-w-7xl mx-auto px-4 py-8">
//                 <style jsx>{`
//                     @keyframes slideInLeft {
//                         from {
//                             transform: translateX(-50px);
//                             opacity: 0;
//                         }
//                         to {
//                             transform: translateX(0);
//                             opacity: 1;
//                         }
//                     }

//                     @keyframes fadeInUp {
//                         from {
//                             transform: translateY(30px);
//                             opacity: 0;
//                         }
//                         to {
//                             transform: translateY(0);
//                             opacity: 1;
//                         }
//                     }

//                     .scrollbar-hide {
//                         -ms-overflow-style: none;
//                         scrollbar-width: none;
//                     }

//                     .scrollbar-hide::-webkit-scrollbar {
//                         display: none;
//                     }
//                 `}</style>

//                 {selectedView === 'grid' ? (
//                     <div className="overflow-x-auto scrollbar-hide">
//                         <div
//                             className="flex gap-6 pb-4 animate-slide-in"
//                             style={{
//                                 minWidth: 'max-content',
//                                 animation: 'slideInLeft 0.8s ease-out',
//                             }}
//                         >
//                             {filteredData.map((dept, index) => (
//                                 <div
//                                     key={dept.id}
//                                     className="flex-shrink-0 w-80 transform transition-all duration-300 hover:scale-105"
//                                     style={{
//                                         animationDelay: `${index * 0.1}s`,
//                                         opacity: 0,
//                                         animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
//                                     }}
//                                 >
//                                     <DepartmentCard dept={dept} index={index} />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ) : (
//                     <div className="space-y-6">
//                         {filteredData.map((dept, index) => (
//                             <DetailedCard key={dept.id} dept={dept} index={index} />
//                         ))}
//                     </div>
//                 )}

//                 {filteredData.length === 0 && (
//                     <div className="text-center py-12">
//                         <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                             <Search className="w-12 h-12 text-gray-400" />
//                         </div>
//                         <h3 className="text-xl font-semibold text-gray-900 mb-2">No departments found</h3>
//                         <p className="text-gray-600">Try adjusting your search or filter criteria</p>
//                     </div>
//                 )}
//             </div>
//             {/* Floating Button */}
//             <div className="fixed bottom-6 right-6 z-50">
//                 <button className="px-5 py-3 bg-gradient-to-r from-[#2FA19A] to-[#18356C] text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-bounce font-semibold">
//                     Book Appointment
//                 </button>
//             </div>

//             <style jsx>{`
//                 @keyframes slideInUp {
//                     from {
//                         opacity: 0;
//                         transform: translateY(30px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }

//                 @keyframes slideInLeft {
//                     from {
//                         opacity: 0;
//                         transform: translateX(-30px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateX(0);
//                     }
//                 }

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

//                 @keyframes expandWidth {
//                     from {
//                         width: 0%;
//                     }
//                     to {
//                         width: var(--target-width);
//                     }
//                 }

//                 @keyframes float {
//                     0%,
//                     100% {
//                         transform: translateY(0px) rotate(0deg);
//                     }
//                     50% {
//                         transform: translateY(-10px) rotate(180deg);
//                     }
//                 }

//                 .animate-fadeInUp {
//                     animation: fadeInUp 0.8s ease-out forwards;
//                     opacity: 0;
//                 }

//                 .animate-float {
//                     animation: float 3s ease-in-out infinite;
//                 }

//                 .animate-reverse {
//                     animation-direction: reverse;
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default PremiumDepartmentDashboard;

// import React, { useState, useEffect, useRef } from 'react';
// import {
//     XAxis,
//     YAxis,
//     ResponsiveContainer,
//     Tooltip,
//     Area,
//     AreaChart,
//     PieChart,
//     Pie,
//     Cell,
//     RadialBarChart,
//     RadialBar,
// } from 'recharts';
// import {
//     TrendingUp,
//     TrendingDown,
//     Users,
//     Star,
//     Award,
//     Activity,
//     Heart,
//     Brain,
//     Scissors,
//     Baby,
//     Shield,
//     Eye,
//     Stethoscope,
//     Search,
//     MoreVertical,
//     ArrowUp,
//     ArrowDown,
//     ChevronDown,
// } from 'lucide-react';

// // Custom Dropdown Component
// const CustomDropdown = ({
//     value,
//     onChange,
//     options,
//     placeholder = 'Select...',
//     className = '',
//     optionClassName = '',
//     dropdownClassName = '',
//     ...props
// }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     // Close dropdown when clicking outside
//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsOpen(false);
//             }
//         };
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, []);

//     const selectedOption = options.find((option) => option.value === value);

//     return (
//         <div className={`relative ${className}`} ref={dropdownRef}>
//             <button
//                 type="button"
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="w-full px-4 py-2 bg-white/90 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 text-[10px] whitespace-nowrap text-center flex items-center justify-between"
//                 {...props}
//             >
//                 <span className={selectedOption ? 'text-gray-900' : 'text-gray-500'}>
//                     {selectedOption ? selectedOption.label : placeholder}
//                 </span>
//                 <ChevronDown
//                     className={`w-4 h-4 ml-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
//                 />
//             </button>

//             {isOpen && (
//                 <div
//                     className={`absolute top-full left-0 right-0 mt-1 bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg z-50 max-h-60 overflow-auto ${dropdownClassName}`}
//                 >
//                     {options.map((option) => (
//                         <button
//                             key={option.value}
//                             type="button"
//                             onClick={() => {
//                                 onChange(option.value);
//                                 setIsOpen(false);
//                             }}
//                             className={`w-full px-4 py-2 text-left text-[10px] whitespace-nowrap hover:bg-white/50 transition-colors duration-150 first:rounded-t-xl last:rounded-b-xl ${
//                                 value === option.value ? 'bg-white/30 text-gray-900 font-medium' : 'text-gray-700'
//                             } ${optionClassName}`}
//                         >
//                             {option.label}
//                         </button>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// // Counter Animation Hook
// const useCounterAnimation = (end, duration = 2000, start = 0) => {
//     const [count, setCount] = useState(start);

//     useEffect(() => {
//         if (start === end) return;

//         let startTime;
//         const animate = (currentTime) => {
//             if (!startTime) startTime = currentTime;
//             const progress = Math.min((currentTime - startTime) / duration, 1);

//             const easeOutQuart = 1 - Math.pow(1 - progress, 4);
//             const currentCount = start + (end - start) * easeOutQuart;

//             if (typeof end === 'number' && end % 1 !== 0) {
//                 setCount(Math.min(currentCount, end));
//             } else {
//                 setCount(Math.floor(Math.min(currentCount, end)));
//             }

//             if (progress < 1) {
//                 requestAnimationFrame(animate);
//             }
//         };

//         requestAnimationFrame(animate);
//     }, [end, duration, start]);

//     return count;
// };

// // Animated Counter Component
// const AnimatedCounter = ({ end, duration = 2000, decimals = 0, suffix = '' }) => {
//     const count = useCounterAnimation(end, duration);
//     const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

//     return (
//         <span>
//             {displayValue}
//             {suffix}
//         </span>
//     );
// };

// const PremiumDepartmentDashboard = () => {
//     const [selectedView, setSelectedView] = useState('grid');
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filterCriteria, setFilterCriteria] = useState('all');
//     const [animatedData, setAnimatedData] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [hoveredDept, setHoveredDept] = useState(null);
//     const [sortBy, setSortBy] = useState('satisfaction');
//     const [sortOrder, setSortOrder] = useState('desc');

//     // Filter and Sort Options for Custom Dropdown
//     const filterOptions = [
//         { value: 'all', label: 'All Departments' },
//         { value: 'excellent', label: 'Excellent (95%+)' },
//         { value: 'good', label: 'Good (90-95%)' },
//         { value: 'average', label: 'Average (<90%)' },
//     ];

//     const sortOptions = [
//         { value: 'satisfaction-desc', label: 'Satisfaction (High to Low)' },
//         { value: 'satisfaction-asc', label: 'Satisfaction (Low to High)' },
//         { value: 'patients-desc', label: 'Patients (Most to Least)' },
//         { value: 'patients-asc', label: 'Patients (Least to Most)' },
//         { value: 'nps-desc', label: 'NPS (High to Low)' },
//         { value: 'trend-desc', label: 'Trend (Best to Worst)' },
//     ];

//     const handleSortChange = (value) => {
//         const [criteria, order] = value.split('-');
//         setSortBy(criteria);
//         setSortOrder(order);
//     };

//     const departmentData = [
//         {
//             id: 1,
//             name: 'Cardiology',
//             icon: Heart,
//             satisfaction: 94.2,
//             patients: 1247,
//             avgRating: 4.7,
//             responseRate: 89,
//             nps: 78,
//             waitTime: 12,
//             staffRating: 4.8,
//             facilityRating: 4.6,
//             treatmentRating: 4.9,
//             trend: 5.2,
//             color: '#ef4444',
//             gradient: 'from-red-500 to-pink-600',
//             bgGradient: 'from-red-50 to-pink-50',
//             reviews: [
//                 { rating: 5, count: 987, name: '5 Star' },
//                 { rating: 4, count: 201, name: '4 Star' },
//                 { rating: 3, count: 45, name: '3 Star' },
//                 { rating: 2, count: 12, name: '2 Star' },
//                 { rating: 1, count: 2, name: '1 Star' },
//             ],
//             monthlyTrend: [
//                 { month: 'Jan', satisfaction: 89, patients: 1100 },
//                 { month: 'Feb', satisfaction: 91, patients: 1150 },
//                 { month: 'Mar', satisfaction: 93, patients: 1200 },
//                 { month: 'Apr', satisfaction: 94.2, patients: 1247 },
//             ],
//         },
//         {
//             id: 2,
//             name: 'Neurology',
//             icon: Brain,
//             satisfaction: 92.8,
//             patients: 856,
//             avgRating: 4.6,
//             responseRate: 85,
//             nps: 72,
//             waitTime: 18,
//             staffRating: 4.7,
//             facilityRating: 4.5,
//             treatmentRating: 4.8,
//             trend: 3.1,
//             color: '#8b5cf6',
//             gradient: 'from-purple-500 to-indigo-600',
//             bgGradient: 'from-purple-50 to-indigo-50',
//             reviews: [
//                 { rating: 5, count: 678, name: '5 Star' },
//                 { rating: 4, count: 142, name: '4 Star' },
//                 { rating: 3, count: 28, name: '3 Star' },
//                 { rating: 2, count: 7, name: '2 Star' },
//                 { rating: 1, count: 1, name: '1 Star' },
//             ],
//             monthlyTrend: [
//                 { month: 'Jan', satisfaction: 88, patients: 780 },
//                 { month: 'Feb', satisfaction: 90, patients: 820 },
//                 { month: 'Mar', satisfaction: 91, patients: 840 },
//                 { month: 'Apr', satisfaction: 92.8, patients: 856 },
//             ],
//         },
//         {
//             id: 3,
//             name: 'Surgery',
//             icon: Scissors,
//             satisfaction: 96.1,
//             patients: 634,
//             avgRating: 4.8,
//             responseRate: 91,
//             nps: 82,
//             waitTime: 8,
//             staffRating: 4.9,
//             facilityRating: 4.7,
//             treatmentRating: 4.9,
//             trend: 7.3,
//             color: '#10b981',
//             gradient: 'from-emerald-500 to-teal-600',
//             bgGradient: 'from-emerald-50 to-teal-50',
//             reviews: [
//                 { rating: 5, count: 545, name: '5 Star' },
//                 { rating: 4, count: 78, name: '4 Star' },
//                 { rating: 3, count: 9, name: '3 Star' },
//                 { rating: 2, count: 2, name: '2 Star' },
//                 { rating: 1, count: 0, name: '1 Star' },
//             ],
//             monthlyTrend: [
//                 { month: 'Jan', satisfaction: 92, patients: 580 },
//                 { month: 'Feb', satisfaction: 94, patients: 600 },
//                 { month: 'Mar', satisfaction: 95, patients: 620 },
//                 { month: 'Apr', satisfaction: 96.1, patients: 634 },
//             ],
//         },
//         {
//             id: 4,
//             name: 'Pediatrics',
//             icon: Baby,
//             satisfaction: 97.5,
//             patients: 1123,
//             avgRating: 4.9,
//             responseRate: 94,
//             nps: 85,
//             waitTime: 15,
//             staffRating: 4.9,
//             facilityRating: 4.8,
//             treatmentRating: 4.9,
//             trend: 4.7,
//             color: '#f59e0b',
//             gradient: 'from-amber-500 to-orange-600',
//             bgGradient: 'from-amber-50 to-orange-50',
//             reviews: [
//                 { rating: 5, count: 978, name: '5 Star' },
//                 { rating: 4, count: 128, name: '4 Star' },
//                 { rating: 3, count: 15, name: '3 Star' },
//                 { rating: 2, count: 2, name: '2 Star' },
//                 { rating: 1, count: 0, name: '1 Star' },
//             ],
//             monthlyTrend: [
//                 { month: 'Jan', satisfaction: 94, patients: 1000 },
//                 { month: 'Feb', satisfaction: 96, patients: 1050 },
//                 { month: 'Mar', satisfaction: 97, patients: 1100 },
//                 { month: 'Apr', satisfaction: 97.5, patients: 1123 },
//             ],
//         },
//         {
//             id: 5,
//             name: 'Emergency',
//             icon: Shield,
//             satisfaction: 87.3,
//             patients: 2156,
//             avgRating: 4.4,
//             responseRate: 76,
//             nps: 58,
//             waitTime: 25,
//             staffRating: 4.5,
//             facilityRating: 4.2,
//             treatmentRating: 4.6,
//             trend: -2.1,
//             color: '#dc2626',
//             gradient: 'from-red-600 to-rose-700',
//             bgGradient: 'from-red-50 to-rose-50',
//             reviews: [
//                 { rating: 5, count: 1234, name: '5 Star' },
//                 { rating: 4, count: 567, name: '4 Star' },
//                 { rating: 3, count: 234, name: '3 Star' },
//                 { rating: 2, count: 89, name: '2 Star' },
//                 { rating: 1, count: 32, name: '1 Star' },
//             ],
//             monthlyTrend: [
//                 { month: 'Jan', satisfaction: 90, patients: 2000 },
//                 { month: 'Feb', satisfaction: 89, patients: 2080 },
//                 { month: 'Mar', satisfaction: 88, patients: 2120 },
//                 { month: 'Apr', satisfaction: 87.3, patients: 2156 },
//             ],
//         },
//         {
//             id: 6,
//             name: 'Ophthalmology',
//             icon: Eye,
//             satisfaction: 95.7,
//             patients: 445,
//             avgRating: 4.8,
//             responseRate: 88,
//             nps: 79,
//             waitTime: 10,
//             staffRating: 4.8,
//             facilityRating: 4.7,
//             treatmentRating: 4.8,
//             trend: 6.2,
//             color: '#3b82f6',
//             gradient: 'from-blue-500 to-cyan-600',
//             bgGradient: 'from-blue-50 to-cyan-50',
//             reviews: [
//                 { rating: 5, count: 378, name: '5 Star' },
//                 { rating: 4, count: 56, name: '4 Star' },
//                 { rating: 3, count: 9, name: '3 Star' },
//                 { rating: 2, count: 2, name: '2 Star' },
//                 { rating: 1, count: 0, name: '1 Star' },
//             ],
//             monthlyTrend: [
//                 { month: 'Jan', satisfaction: 92, patients: 400 },
//                 { month: 'Feb', satisfaction: 94, patients: 420 },
//                 { month: 'Mar', satisfaction: 95, patients: 435 },
//                 { month: 'Apr', satisfaction: 95.7, patients: 445 },
//             ],
//         },
//         {
//             id: 7,
//             name: 'General Medicine',
//             icon: Stethoscope,
//             satisfaction: 89.4,
//             patients: 1789,
//             avgRating: 4.5,
//             responseRate: 82,
//             nps: 63,
//             waitTime: 20,
//             staffRating: 4.6,
//             facilityRating: 4.4,
//             treatmentRating: 4.7,
//             trend: 1.8,
//             color: '#06b6d4',
//             gradient: 'from-cyan-500 to-blue-500',
//             bgGradient: 'from-cyan-50 to-blue-50',
//             reviews: [
//                 { rating: 5, count: 1234, name: '5 Star' },
//                 { rating: 4, count: 389, name: '4 Star' },
//                 { rating: 3, count: 123, name: '3 Star' },
//                 { rating: 2, count: 34, name: '2 Star' },
//                 { rating: 1, count: 9, name: '1 Star' },
//             ],
//             monthlyTrend: [
//                 { month: 'Jan', satisfaction: 87, patients: 1650 },
//                 { month: 'Feb', satisfaction: 88, patients: 1700 },
//                 { month: 'Mar', satisfaction: 89, patients: 1750 },
//                 { month: 'Apr', satisfaction: 89.4, patients: 1789 },
//             ],
//         },
//         {
//             id: 8,
//             name: 'Orthopedics',
//             icon: Activity,
//             satisfaction: 91.6,
//             patients: 967,
//             avgRating: 4.6,
//             responseRate: 87,
//             nps: 69,
//             waitTime: 16,
//             staffRating: 4.7,
//             facilityRating: 4.5,
//             treatmentRating: 4.8,
//             trend: 3.9,
//             color: '#84cc16',
//             gradient: 'from-lime-500 to-green-600',
//             bgGradient: 'from-lime-50 to-green-50',
//             reviews: [
//                 { rating: 5, count: 723, name: '5 Star' },
//                 { rating: 4, count: 189, name: '4 Star' },
//                 { rating: 3, count: 45, name: '3 Star' },
//                 { rating: 2, count: 8, name: '2 Star' },
//                 { rating: 1, count: 2, name: '1 Star' },
//             ],
//             monthlyTrend: [
//                 { month: 'Jan', satisfaction: 88, patients: 900 },
//                 { month: 'Feb', satisfaction: 90, patients: 930 },
//                 { month: 'Mar', satisfaction: 91, patients: 950 },
//                 { month: 'Apr', satisfaction: 91.6, patients: 967 },
//             ],
//         },
//     ];

//     const filteredData = animatedData
//         .filter(
//             (dept) =>
//                 dept.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//                 (filterCriteria === 'all' ||
//                     (filterCriteria === 'excellent' && dept.satisfaction >= 95) ||
//                     (filterCriteria === 'good' && dept.satisfaction >= 90 && dept.satisfaction < 95) ||
//                     (filterCriteria === 'average' && dept.satisfaction < 90))
//         )
//         .sort((a, b) => {
//             const aVal = a[sortBy];
//             const bVal = b[sortBy];
//             return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
//         });

//     useEffect(() => {
//         setIsLoading(true);
//         const timer = setTimeout(() => {
//             setAnimatedData(departmentData);
//             setIsLoading(false);
//         }, 800);

//         return () => clearTimeout(timer);
//     }, []);

//     const handleSort = (criteria) => {
//         if (sortBy === criteria) {
//             setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
//         } else {
//             setSortBy(criteria);
//             setSortOrder('desc');
//         }
//     };

//     // Custom Tooltip Components
//     const CustomTooltip = ({ active, payload, label }) => {
//         if (active && payload && payload.length) {
//             return (
//                 <div className="bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-xl border border-white/20">
//                     <p className="font-semibold text-gray-800">{`${label}: ${payload[0].value}`}</p>
//                 </div>
//             );
//         }
//         return null;
//     };

//     const CustomPieTooltip = ({ active, payload }) => {
//         if (active && payload && payload.length) {
//             const data = payload[0].payload;
//             return (
//                 <div className="bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-xl border border-white/20">
//                     <p className="font-semibold text-gray-800">{`${data.name}: ${data.count} reviews`}</p>
//                 </div>
//             );
//         }
//         return null;
//     };

//     const DepartmentCard = ({ dept, index }) => {
//         const IconComponent = dept.icon;
//         const delay = index * 100;

//         // Premium Pie Chart Colors with teal/blue theme
//         const pieColors = ['#2FA19A', '#18276c', '#20B2AA', '#4682B4', '#5F9EA0'];

//         return (
//             <div
//                 className={`
//                     group relative
//                     bg-gradient-to-br from-[#18276c]/10 via-[#2FA19A]/10 to-[#18276c]/10
//                     rounded-3xl
//                     shadow-2xl border border-[#2FA19A]/20
//                     backdrop-blur-lg overflow-hidden
//                     w-full max-w-sm mx-auto
//                     p-6 sm:p-7 md:p-8
//                     transform transition-all duration-700
//                     hover:scale-110 hover:shadow-3xl hover:-translate-y-4
//                     hover:bg-gradient-to-br hover:from-[#18276c]/20 hover:via-[#2FA19A]/20 hover:to-[#18276c]/20
//                 `}
//                 style={{
//                     animationDelay: `${delay}ms`,
//                     animation: 'slideInUp 0.8s ease-out forwards',
//                     boxShadow: '0 25px 50px rgba(24, 39, 108, 0.15), 0 0 0 1px rgba(47, 161, 154, 0.1)'
//                 }}
//                 onMouseEnter={() => setHoveredDept(dept.id)}
//                 onMouseLeave={() => setHoveredDept(null)}
//             >
//                 {/* Premium Gradient Border Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#18276c] via-[#2FA19A] to-[#18276c] opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-3xl" />

//                 {/* Animated Floating Particles */}
//                 <div className="absolute inset-0 overflow-hidden rounded-3xl">
//                     {[...Array(8)].map((_, i) => (
//                         <div
//                             key={i}
//                             className="absolute w-1.5 h-1.5 rounded-full animate-float bg-gradient-to-r from-[#2FA19A] to-[#18276c] opacity-40"
//                             style={{
//                                 left: `${15 + i * 12}%`,
//                                 top: `${5 + i * 8}%`,
//                                 animationDelay: `${i * 0.7}s`,
//                                 animationDuration: `${4 + i * 0.3}s`,
//                             }}
//                         />
//                     ))}
//                 </div>

//                 {/* Main Content */}
//                 <div className="relative z-10">
//                     {/* Premium Header Section */}
//                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
//                         <div className="flex items-center space-x-4">
//                             <div
//                                 className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl
//                                 bg-gradient-to-r from-[#18276c] via-[#2FA19A] to-[#18276c]
//                                 flex items-center justify-center shadow-2xl
//                                 transform group-hover:rotate-12 group-hover:scale-110
//                                 transition-all duration-500
//                                 border-2 border-white/20 backdrop-blur-sm`}
//                             >
//                                 <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-lg" />
//                             </div>
//                             <div>
//                                 <h3 className="font-bold text-gray-900 text-xl sm:text-2xl tracking-tight">
//                                     {dept.name}
//                                 </h3>
//                                 <p className="text-sm sm:text-base text-[#18276c]/70 font-medium">
//                                     <AnimatedCounter end={dept.patients} /> patients served
//                                 </p>
//                             </div>
//                         </div>
//                         <div className="relative">
//                             <MoreVertical className="w-5 h-5 sm:w-6 sm:h-6 text-[#18276c]/50 group-hover:text-[#2FA19A] transition-colors duration-300" />
//                         </div>
//                     </div>

//                     {/* Premium Satisfaction Display */}
//                     <div className="mb-8">
//                         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
//                             <span className="text-sm sm:text-base font-semibold text-[#18276c]/80 uppercase tracking-wide">
//                                 Satisfaction Rate
//                             </span>
//                             <div className="flex items-center space-x-3">
//                                 <span className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#18276c] to-[#2FA19A] bg-clip-text text-transparent">
//                                     <AnimatedCounter end={dept.satisfaction} decimals={1} suffix="%" />
//                                 </span>
//                                 <div
//                                     className={`flex items-center text-xs sm:text-sm font-bold px-3 py-2 rounded-full backdrop-blur-sm ${
//                                         dept.trend > 0
//                                             ? 'text-[#2FA19A] bg-[#2FA19A]/20 border border-[#2FA19A]/30'
//                                             : 'text-red-600 bg-red-100/80 border border-red-200'
//                                     }`}
//                                 >
//                                     {dept.trend > 0 ? (
//                                         <ArrowUp className="w-4 h-4 mr-1" />
//                                     ) : (
//                                         <ArrowDown className="w-4 h-4 mr-1" />
//                                     )}
//                                     <AnimatedCounter end={Math.abs(dept.trend)} decimals={1} suffix="%" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Premium Ratings Grid */}
//                     <div className="grid grid-cols-2 gap-4 mb-8">
//                         <div className="text-center p-4 bg-gradient-to-br from-white/60 via-[#2FA19A]/5 to-white/40
//                                         backdrop-blur-md rounded-2xl border border-white/30 shadow-lg">
//                             <div className="flex items-center justify-center space-x-2 mb-2">
//                                 <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 fill-current drop-shadow-md" />
//                                 <span className="text-xl sm:text-2xl font-black text-[#18276c]">
//                                     <AnimatedCounter end={dept.avgRating} decimals={1} />
//                                 </span>
//                             </div>
//                             <p className="text-xs sm:text-sm text-[#18276c]/70 font-semibold uppercase tracking-wide">
//                                 Average Rating
//                             </p>
//                         </div>
//                         <div className="text-center p-4 bg-gradient-to-br from-white/60 via-[#18276c]/5 to-white/40
//                                         backdrop-blur-md rounded-2xl border border-white/30 shadow-lg">
//                             <div className="text-xl sm:text-2xl font-black text-[#18276c] mb-2">
//                                 <AnimatedCounter end={dept.nps} />
//                             </div>
//                             <p className="text-xs sm:text-sm text-[#18276c]/70 font-semibold uppercase tracking-wide">
//                                 NPS Score
//                             </p>
//                         </div>
//                     </div>

//                     {/* Premium Donut Chart */}
//                     <div className="h-24 mb-6 flex justify-center">
//                         <div className="relative">
//                             <ResponsiveContainer width={120} height={96}>
//                                 <PieChart>
//                                     <Pie
//                                         data={dept.reviews}
//                                         cx="50%"
//                                         cy="50%"
//                                         innerRadius={30}
//                                         outerRadius={45}
//                                         paddingAngle={3}
//                                         dataKey="count"
//                                         animationDuration={2000}
//                                         animationDelay={delay}
//                                     >
//                                         {dept.reviews.map((entry, index) => (
//                                             <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
//                                         ))}
//                                     </Pie>
//                                     <Tooltip content={<CustomPieTooltip />} />
//                                 </PieChart>
//                             </ResponsiveContainer>
//                             {/* Center Glow Effect */}
//                             <div className="absolute inset-0 bg-gradient-to-r from-[#2FA19A]/20 to-[#18276c]/20 rounded-full blur-xl opacity-30" />
//                         </div>
//                     </div>

//                     {/* Premium Stats Grid */}
//                     <div className="grid grid-cols-3 gap-3 text-xs sm:text-sm">
//                         <div className="text-center p-3 bg-gradient-to-br from-[#2FA19A]/20 via-white/50 to-[#2FA19A]/10
//                                         backdrop-blur-md rounded-xl border border-[#2FA19A]/20 shadow-lg">
//                             <div className="font-black text-[#18276c] text-base sm:text-lg">
//                                 <AnimatedCounter end={dept.responseRate} suffix="%" />
//                             </div>
//                             <div className="text-[#18276c]/70 font-semibold uppercase tracking-wider">Response</div>
//                         </div>
//                         <div className="text-center p-3 bg-gradient-to-br from-[#18276c]/20 via-white/50 to-[#18276c]/10
//                                         backdrop-blur-md rounded-xl border border-[#18276c]/20 shadow-lg">
//                             <div className="font-black text-[#18276c] text-base sm:text-lg">
//                                 <AnimatedCounter end={dept.waitTime} suffix="m" />
//                             </div>
//                             <div className="text-[#18276c]/70 font-semibold uppercase tracking-wider">Wait Time</div>
//                         </div>
//                         <div className="text-center p-3 bg-gradient-to-br from-[#2FA19A]/20 via-white/50 to-[#2FA19A]/10
//                                         backdrop-blur-md rounded-xl border border-[#2FA19A]/20 shadow-lg">
//                             <div className="font-black text-[#18276c] text-base sm:text-lg">
//                                 <AnimatedCounter end={dept.staffRating} decimals={1} />
//                             </div>
//                             <div className="text-[#18276c]/70 font-semibold uppercase tracking-wider">Staff</div>
//                         </div>
//                     </div>

//                     {/* Premium Hover Glow Effect */}
//                     <div className="absolute inset-0 bg-gradient-to-r from-[#18276c]/10 via-[#2FA19A]/10 to-[#18276c]/10
//                                     opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none rounded-3xl
//                                     shadow-2xl group-hover:shadow-[0_0_50px_rgba(47,161,154,0.3)]" />
//                 </div>
//             </div>
//         );
//     };

//     const DetailedCard = ({ dept, index }) => {
//         const IconComponent = dept.icon;
//         const delay = index * 50;

//         // Premium colors for charts with teal/blue theme
//         const pieColors = ['#2FA19A', '#18276c', '#20B2AA', '#4682B4', '#5F9EA0'];

//         return (
//             <div
//                 className="group bg-gradient-to-br from-white/80 via-[#2FA19A]/5 to-[#18276c]/10
//                           rounded-3xl shadow-2xl border border-[#2FA19A]/20 backdrop-blur-lg overflow-hidden
//                           transform transition-all duration-700 hover:shadow-3xl hover:-translate-y-2
//                           hover:bg-gradient-to-br hover:from-white/90 hover:via-[#2FA19A]/10 hover:to-[#18276c]/20"
//                 style={{
//                     animationDelay: `${delay}ms`,
//                     animation: 'slideInLeft 0.6s ease-out forwards',
//                     boxShadow: '0 25px 50px rgba(24, 39, 108, 0.15), 0 0 0 1px rgba(47, 161, 154, 0.1)'
//                 }}
//             >
//                 <div className="p-8">
//                     {/* Premium Header */}
//                     <div className="flex items-center justify-between mb-8">
//                         <div className="flex items-center space-x-6">
//                             <div
//                                 className={`w-20 h-20 rounded-3xl bg-gradient-to-r from-[#18276c] via-[#2FA19A] to-[#18276c]
//                                           flex items-center justify-center shadow-2xl transform group-hover:scale-125 group-hover:rotate-12
//                                           transition-all duration-500 border-2 border-white/30 backdrop-blur-sm`}
//                             >
//                                 <IconComponent className="w-10 h-10 text-white drop-shadow-lg" />
//                             </div>
//                             <div>
//                                 <h3 className="text-2xl sm:text-3xl font-black text-[#18276c] tracking-tight">
//                                     {dept.name}
//                                 </h3>
//                                 <p className="text-[#18276c]/70 text-lg font-semibold">
//                                     <AnimatedCounter end={dept.patients} /> patients served
//                                 </p>
//                             </div>
//                         </div>
//                         <div
//                             className={`flex items-center space-x-3 px-4 py-2 rounded-2xl text-sm font-bold backdrop-blur-sm ${
//                                 dept.trend > 0
//                                     ? 'text-[#2FA19A] bg-[#2FA19A]/20 border border-[#2FA19A]/30'
//                                     : 'text-red-600 bg-red-100/80 border border-red-200'
//                             }`}
//                         >
//                             {dept.trend > 0 ? <TrendingUp className="w-5 h-5" /> : <TrendingDown className="w-5 h-5" />}
//                             <AnimatedCounter end={Math.abs(dept.trend)} decimals={1} suffix="%" />
//                         </div>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         {/* Left: Premium Satisfaction Radial Chart */}
//                         <div className="md:col-span-1">
//                             <div className="text-center">
//                                 <div className="relative w-40 h-40 mx-auto mb-6">
//                                     <ResponsiveContainer width="100%" height="100%">
//                                         <RadialBarChart
//                                             cx="50%"
//                                             cy="50%"
//                                             innerRadius="70%"
//                                             outerRadius="90%"
//                                             barSize={12}
//                                             data={[
//                                                 { name: 'Satisfaction', value: dept.satisfaction, fill: '#2FA19A' },
//                                                 { name: 'Remaining', value: 100 - dept.satisfaction, fill: '#E5E7EB' },
//                                             ]}
//                                             startAngle={90}
//                                             endAngle={-270}
//                                         >
//                                             <RadialBar
//                                                 background
//                                                 clockWise
//                                                 dataKey="value"
//                                                 cornerRadius={50}
//                                             />
//                                         </RadialBarChart>
//                                     </ResponsiveContainer>

//                                     {/* Premium Center Display */}
//                                     <div className="absolute inset-0 flex items-center justify-center">
//                                         <div className="text-center">
//                                             <div className="text-3xl font-black bg-gradient-to-r from-[#18276c] to-[#2FA19A] bg-clip-text text-transparent">
//                                                 <AnimatedCounter end={dept.satisfaction} decimals={1} suffix="%" />
//                                             </div>
//                                             <div className="text-sm text-[#18276c]/70 font-semibold uppercase tracking-wide">
//                                                 Satisfaction
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Glow Effect */}
//                                     <div className="absolute inset-0 bg-gradient-to-r from-[#2FA19A]/20 to-[#18276c]/20 rounded-full blur-2xl opacity-30" />
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Middle: Premium Stats Cards */}
//                         <div className="md:col-span-1 space-y-6">
//                             <div className="grid grid-cols-2 gap-4">
//                                 <div className="bg-gradient-to-br from-[#2FA19A]/20 via-white/60 to-[#2FA19A]/10
//                                               backdrop-blur-md rounded-2xl p-4 border border-[#2FA19A]/20 shadow-lg">
//                                     <div className="flex items-center space-x-2 mb-2">
//                                         <Star className="w-5 h-5 text-yellow-500 drop-shadow-md" />
//                                         <span className="text-sm font-bold text-[#18276c]/80 uppercase tracking-wide">
//                                             Average Rating
//                                         </span>
//                                     </div>
//                                     <div className="text-2xl font-black text-[#18276c]">
//                                         <AnimatedCounter end={dept.avgRating} decimals={1} />
//                                     </div>
//                                 </div>

//                                 <div className="bg-gradient-to-br from-[#18276c]/20 via-white/60 to-[#18276c]/10
//                                               backdrop-blur-md rounded-2xl p-4 border border-[#18276c]/20 shadow-lg">
//                                     <div className="flex items-center space-x-2 mb-2">
//                                         <Award className="w-5 h-5 text-[#2FA19A] drop-shadow-md" />
//                                         <span className="text-sm font-bold text-[#18276c]/80 uppercase tracking-wide">
//                                             NPS Score
//                                         </span>
//                                     </div>
//                                     <div className="text-2xl font-black text-[#18276c]">
//                                         <AnimatedCounter end={dept.nps} />
//                                     </div>
//                                 </div>

//                                 <div className="bg-gradient-to-br from-[#2FA19A]/20 via-white/60 to-[#2FA19A]/10
//                                               backdrop-blur-md rounded-2xl p-4 border border-[#2FA19A]/20 shadow-lg">
//                                     <div className="flex items-center space-x-2 mb-2">
//                                         <Users className="w-5 h-5 text-[#18276c] drop-shadow-md" />
//                                         <span className="text-sm font-bold text-[#18276c]/80 uppercase tracking-wide">
//                                             Response Rate
//                                         </span>
//                                     </div>
//                                     <div className="text-2xl font-black text-[#18276c]">
//                                         <AnimatedCounter end={dept.responseRate} suffix="%" />
//                                     </div>
//                                 </div>

//                                 <div className="bg-gradient-to-br from-[#18276c]/20 via-white/60 to-[#18276c]/10
//                                               backdrop-blur-md rounded-2xl p-4 border border-[#18276c]/20 shadow-lg">
//                                     <div className="flex items-center space-x-2 mb-2">
//                                         <Activity className="w-5 h-5 text-[#2FA19A] drop-shadow-md" />
//                                         <span className="text-sm font-bold text-[#18276c]/80 uppercase tracking-wide">
//                                             Wait Time
//                                         </span>
//                                     </div>
//                                     <div className="text-2xl font-black text-[#18276c]">
//                                         <AnimatedCounter end={dept.waitTime} suffix="m" />
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Premium Trend Line Chart */}
//                             <div className="bg-gradient-to-br from-white/70 via-[#2FA19A]/5 to-white/50
//                                           backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg">
//                                 <h4 className="text-lg font-black text-[#18276c] mb-4 uppercase tracking-wide">
//                                     Monthly Trend
//                                 </h4>
//                                 <div className="h-32">
//                                     <ResponsiveContainer width="100%" height="100%">
//                                         <AreaChart data={dept.monthlyTrend}>
//                                             <defs>
//                                                 <linearGradient id={`colorGradient${dept.id}`} x1="0" y1="0" x2="0" y2="1">
//                                                     <stop offset="5%" stopColor="#2FA19A" stopOpacity={0.4} />
//                                                     <stop offset="95%" stopColor="#18276c" stopOpacity={0.1} />
//                                                 </linearGradient>
//                                             </defs>
//                                             <XAxis
//                                                 dataKey="month"
//                                                 tick={{ fontSize: 12, fill: '#18276c' }}
//                                                 axisLine={false}
//                                                 tickLine={false}
//                                             />
//                                             <YAxis hide />
//                                             <Tooltip content={<CustomTooltip />} />
//                                             <Area
//                                                 type="monotone"
//                                                 dataKey="satisfaction"
//                                                 stroke="#2FA19A"
//                                                 strokeWidth={3}
//                                                 fill={`url(#colorGradient${dept.id})`}
//                                                 animationDuration={2500}
//                                                 animationDelay={delay + 500}
//                                             />
//                                         </AreaChart>
//                                     </ResponsiveContainer>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Right: Premium Rating Distribution */}
//                         <div className="md:col-span-1">
//                             <div className="space-y-6">
//                                 {/* Premium Donut Chart for Reviews */}
//                                 <div className="bg-gradient-to-br from-white/70 via-[#18276c]/5 to-white/50
//                                               backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-lg">
//                                     <h4 className="text-lg font-black text-[#18276c] mb-4 uppercase tracking-wide">
//                                         Review Distribution
//                                     </h4>
//                                     <div className="h-40 relative">
//                                         <ResponsiveContainer width="100%" height="100%">
//                                             <PieChart>
//                                                 <Pie
//                                                     data={dept.reviews}
//                                                     cx="50%"
//                                                     cy="50%"
//                                                     innerRadius={40}
//                                                     outerRadius={65}
//                                                     paddingAngle={4}
//                                                     dataKey="count"
//                                                     animationDuration={2500}
//                                                     animationDelay={delay + 200}
//                                                 >
//                                                     {dept.reviews.map((entry, index) => (
//                                                         <Cell
//                                                             key={`cell-${index}`}
//                                                             fill={pieColors[index % pieColors.length]}
//                                                         />
//                                                     ))}
//                                                 </Pie>
//                                                 <Tooltip content={<CustomPieTooltip />} />
//                                             </PieChart>
//                                         </ResponsiveContainer>
//                                         {/* Center Glow */}
//                                         <div className="absolute inset-0 bg-gradient-to-r from-[#2FA19A]/10 to-[#18276c]/10 rounded-full blur-xl opacity-40" />
//                                     </div>
//                                 </div>

//                                 {/* Premium Rating Breakdown */}
//                                 <div className="space-y-3">
//                                     <h4 className="text-lg font-black text-[#18276c] uppercase tracking-wide">
//                                         Rating Breakdown
//                                     </h4>
//                                     {dept.reviews.map((review, idx) => (
//                                         <div key={idx} className="flex items-center space-x-4">
//                                             <div className="flex items-center space-x-2 w-16">
//                                                 <span className="text-sm font-bold text-[#18276c]">{review.rating}</span>
//                                                 <Star className="w-4 h-4 text-yellow-500 fill-current" />
//                                             </div>
//                                             <div className="flex-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full h-3 overflow-hidden">
//                                                 <div
//                                                     className={`h-full rounded-full transition-all duration-1500 bg-gradient-to-r`}
//                                                     style={{
//                                                         background: `linear-gradient(90deg, ${pieColors[idx % pieColors.length]}, ${pieColors[idx % pieColors.length]}aa)`,
//                                                         width: `${
//                                                             (review.count / Math.max(...dept.reviews.map((r) => r.count))) *
//                                                             100
//                                                         }%`,
//                                                         animationDelay: `${delay + idx * 150}ms`,
//                                                     }}
//                                                 />
//                                             </div>
//                                             <span className="text-sm font-bold text-[#18276c] w-12">
//                                                 <AnimatedCounter end={review.count} duration={1800} />
//                                             </span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Premium Bottom Stats Row */}
//                     <div className="mt-8 grid grid-cols-3 gap-6">
//                         <div className="text-center p-4 bg-gradient-to-br from-[#2FA19A]/20 via-white/60 to-[#2FA19A]/10
//                                         backdrop-blur-md rounded-2xl border border-[#2FA19A]/20 shadow-lg">
//                             <div className="text-2xl font-black text-[#18276c]">
//                                 <AnimatedCounter end={dept.staffRating} decimals={1} />
//                             </div>
//                             <div className="text-sm text-[#18276c]/70 font-bold uppercase tracking-wide">Staff Rating</div>
//                         </div>
//                         <div className="text-center p-4 bg-gradient-to-br from-[#18276c]/20 via-white/60 to-[#18276c]/10
//                                         backdrop-blur-md rounded-2xl border border-[#18276c]/20 shadow-lg">
//                             <div className="text-2xl font-black text-[#18276c]">
//                                 <AnimatedCounter end={dept.facilityRating} decimals={1} />
//                             </div>
//                             <div className="text-sm text-[#18276c]/70 font-bold uppercase tracking-wide">Facility Rating</div>
//                         </div>
//                         <div className="text-center p-4 bg-gradient-to-br from-[#2FA19A]/20 via-white/60 to-[#2FA19A]/10
//                                         backdrop-blur-md rounded-2xl border border-[#2FA19A]/20 shadow-lg">
//                             <div className="text-2xl font-black text-[#18276c]">
//                                 <AnimatedCounter end={dept.treatmentRating} decimals={1} />
//                             </div>
//                             <div className="text-sm text-[#18276c]/70 font-bold uppercase tracking-wide">Treatment Rating</div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Premium Hover Glow Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#18276c]/5 via-[#2FA19A]/5 to-[#18276c]/5
//                                 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none rounded-3xl
//                                 shadow-2xl group-hover:shadow-[0_0_60px_rgba(47,161,154,0.4)]" />
//             </div>
//         );
//     };

//     if (isLoading) {
//         return (
//             <div className="min-h-screen bg-gradient-to-br from-[#18276c]/10 via-[#2FA19A]/5 to-white flex items-center justify-center">
//                 <div className="text-center">
//                     <div className="relative">
//                         <div className="w-24 h-24 border-4 border-[#2FA19A]/30 border-t-[#18276c] rounded-full animate-spin mx-auto mb-6"></div>
//                         <div className="absolute inset-0 flex items-center justify-center">
//                             <div className="w-16 h-16 border-3 border-[#18276c]/30 border-t-[#2FA19A] rounded-full animate-spin animate-reverse"></div>
//                         </div>
//                     </div>
//                     <p className="text-[#18276c] font-black text-xl animate-pulse bg-gradient-to-r from-[#18276c] to-[#2FA19A] bg-clip-text text-transparent">
//                         Loading Premium Dashboard...
//                     </p>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-[#aef0e6] via-white to-[#aef0e6]">
//             <div className="section-title text-center text-black font-quicksand">
//                 <h1 className="text-4xl sm:text-5xl font-bold pt-2" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
//                     Department Analytics
//                 </h1>
//                 <style>
//                     {`
//                         @keyframes premium-underline {
//                             50% { transform: translateX(0%); }
//                             0% { transform: translateX(-100%); }
//                         }
//                         100% { transform: translateX(100%); }
//                     `}
//                 </style>
//                 <div className="relative mt-4 h-1 w-40 mx-auto mb-0 overflow-hidden rounded-full shadow-lg">
//                     <div
//                         className="absolute inset-0 bg-gradient-to-r from-[#18276c] via-[#2FA19A] to-[#18276c]"
//                         style={{
//                             animation: 'premium-underline 3s ease-in-out infinite',
//                         }}
//                     ></div>
//                 </div>
//             </div>

//             {/* Cards */}
//             <div className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto px-4 py-6">
//                 <style jsx>{`
//                     @keyframes slideInLeft {
//                         from {
//                             transform: translateX(-50px);
//                             opacity: 0;
//                         }
//                         to {
//                             transform: translateX(0);
//                             opacity: 1;
//                         }
//                     }

//                     @keyframes fadeInUp {
//                         from {
//                             transform: translateY(30px);
//                             opacity: 0;
//                         }
//                         to {
//                             transform: translateY(0);
//                             opacity: 1;
//                         }
//                     }

//                     .scrollbar-hide {
//                         -ms-overflow-style: none;
//                         scrollbar-width: none;
//                     }

//                     .scrollbar-hide::-webkit-scrollbar {
//                         display: none;
//                     }
//                 `}</style>

//                 {selectedView === 'grid' ? (
//                     <div className="overflow-x-auto scrollbar-hide">
//                         <div
//                             className="flex gap-8 pb-4 animate-slide-in"
//                             style={{
//                                 minWidth: 'max-content',
//                                 animation: 'slideInLeft 0.8s ease-out',
//                             }}
//                         >
//                             {filteredData.map((dept, index) => (
//                                 <div
//                                     key={dept.id}
//                                     className="flex-shrink-0 w-96 transform transition-all duration-500 hover:scale-105"
//                                     style={{
//                                         animationDelay: `${index * 0.1}s`,
//                                         opacity: 0,
//                                         animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
//                                     }}
//                                 >
//                                     <DepartmentCard dept={dept} index={index} />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 ) : (
//                     <div className="space-y-8">
//                         {filteredData.map((dept, index) => (
//                             <DetailedCard key={dept.id} dept={dept} index={index} />
//                         ))}
//                     </div>
//                 )}

//                 {filteredData.length === 0 && (
//                     <div className="text-center py-12">
//                         <div
//                             className="w-32 h-32 bg-gradient-to-br from-[#2FA19A]/20 to-[#18276c]/20
//                                         rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md"
//                         >
//                             <Search className="w-16 h-16 text-[#18276c]/60" />
//                         </div>
//                         <h3 className="text-2xl font-black text-[#18276c] mb-3">No departments found</h3>
//                         <p className="text-[#18276c]/70 text-lg">Try adjusting your search or filter criteria</p>
//                     </div>
//                 )}
//             </div>

//             {/* Premium Floating Button */}
//             <div className="fixed bottom-8 right-8 z-50">
//                 <button
//                     className="px-8 py-4 bg-gradient-to-r from-[#18276c] via-[#2FA19A] to-[#18276c]
//                                  text-white rounded-full shadow-2xl hover:shadow-3xl
//                                  transform hover:scale-110 transition-all duration-500 animate-bounce
//                                  font-black text-lg uppercase tracking-wide backdrop-blur-sm
//                                  border border-white/20 hover:border-white/40
//                                  hover:shadow-[0_0_40px_rgba(47,161,154,0.6)]"
//                 >
//                     Book Appointment
//                 </button>
//             </div>

//             <style jsx>{`
//                 @keyframes slideInUp {
//                     from {
//                         opacity: 0;
//                         transform: translateY(30px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }

//                 @keyframes slideInLeft {
//                     from {
//                         opacity: 0;
//                         transform: translateX(-30px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateX(0);
//                     }
//                 }

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

//                 @keyframes expandWidth {
//                     from {
//                         width: 0%;
//                     }
//                     to {
//                         width: var(--target-width);
//                     }
//                 }

//                 @keyframes float {
//                     0%,
//                     100% {
//                         transform: translateY(0px) rotate(0deg);
//                     }
//                     50% {
//                         transform: translateY(-10px) rotate(180deg);
//                     }
//                 }

//                 .animate-fadeInUp {
//                     animation: fadeInUp 0.8s ease-out forwards;
//                     opacity: 0;
//                 }

//                 .animate-float {
//                     animation: float 3s ease-in-out infinite;
//                 }

//                 .animate-reverse {
//                     animation-direction: reverse;
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default PremiumDepartmentDashboard;

// import React, { useState, useEffect, useRef } from 'react';
// import {
//     XAxis,
//     YAxis,
//     ResponsiveContainer,
//     Tooltip,
//     Area,
//     AreaChart,
//     PieChart,
//     Pie,
//     Cell,
//     RadialBarChart,
//     RadialBar,
// } from 'recharts';
// import {
//     TrendingUp,
//     TrendingDown,
//     Users,
//     Star,
//     Award,
//     Activity,
//     Heart,
//     Brain,
//     ArrowRight,
//     Shield,
//     Search,
//     MoreVertical,
//     ArrowUp,
//     ArrowDown,
//     ChevronDown,
//     Pill,
//     HandHelping,
// } from 'lucide-react';
// import { FaStar, FaRegSmile } from 'react-icons/fa';

// // Custom Dropdown Component
// const CustomDropdown = ({ value, onChange, options, placeholder = 'Select...', className = '' }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setIsOpen(false);
//             }
//         };
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, []);

//     const selectedOption = options.find((option) => option.value === value);

//     return (
//         <div className={`relative ${className}`} ref={dropdownRef}>
//             <button
//                 type="button"
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="w-full px-3 py-2 bg-white/90 backdrop-blur-sm border border-white/20 rounded-xl
//                          focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300
//                          text-xs whitespace-nowrap text-center flex items-center justify-between"
//             >
//                 <span className={selectedOption ? 'text-gray-900' : 'text-gray-500'}>
//                     {selectedOption ? selectedOption.label : placeholder}
//                 </span>
//                 <ChevronDown
//                     className={`w-4 h-4 ml-2 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
//                 />
//             </button>

//             {isOpen && (
//                 <div
//                     className="absolute top-full left-0 right-0 mt-1 bg-white/95 backdrop-blur-sm border border-white/20
//                                rounded-xl shadow-lg z-50 max-h-60 overflow-auto"
//                 >
//                     {options.map((option) => (
//                         <button
//                             key={option.value}
//                             type="button"
//                             onClick={() => {
//                                 onChange(option.value);
//                                 setIsOpen(false);
//                             }}
//                             className={`w-full px-3 py-2 text-left text-xs whitespace-nowrap hover:bg-white/50
//                                        transition-colors duration-150 first:rounded-t-xl last:rounded-b-xl
//                                        ${
//                                            value === option.value
//                                                ? 'bg-white/30 text-gray-900 font-medium'
//                                                : 'text-gray-700'
//                                        }`}
//                         >
//                             {option.label}
//                         </button>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// // Counter Animation Hook
// const useCounterAnimation = (end, duration = 2000, start = 0) => {
//     const [count, setCount] = useState(start);

//     useEffect(() => {
//         if (start === end) return;

//         let startTime;
//         const animate = (currentTime) => {
//             if (!startTime) startTime = currentTime;
//             const progress = Math.min((currentTime - startTime) / duration, 1);
//             const easeOutQuart = 1 - Math.pow(1 - progress, 4);
//             const currentCount = start + (end - start) * easeOutQuart;

//             if (typeof end === 'number' && end % 1 !== 0) {
//                 setCount(Math.min(currentCount, end));
//             } else {
//                 setCount(Math.floor(Math.min(currentCount, end)));
//             }

//             if (progress < 1) {
//                 requestAnimationFrame(animate);
//             }
//         };

//         requestAnimationFrame(animate);
//     }, [end, duration, start]);

//     return count;
// };

// // Animated Counter Component
// const AnimatedCounter = ({ end, duration = 2000, decimals = 0, suffix = '' }) => {
//     const count = useCounterAnimation(end, duration);
//     const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

//     return (
//         <span>
//             {displayValue}
//             {suffix}
//         </span>
//     );
// };

// const PremiumDepartmentDashboard = () => {
//     const [selectedView, setSelectedView] = useState('grid');
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filterCriteria, setFilterCriteria] = useState('all');
//     const [animatedData, setAnimatedData] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [hoveredDept, setHoveredDept] = useState(null);
//     const [sortBy, setSortBy] = useState('satisfaction');
//     const [sortOrder, setSortOrder] = useState('desc');

//     // Filter and Sort Options
//     // const filterOptions = [
//     //     { value: 'all', label: 'All Departments' },
//     //     { value: 'excellent', label: 'Excellent (95%+)' },
//     //     { value: 'good', label: 'Good (90-95%)' },
//     //     { value: 'average', label: 'Average (<90%)' },
//     // ];

//     // const sortOptions = [
//     //     { value: 'satisfaction-desc', label: 'Satisfaction ↓' },
//     //     { value: 'satisfaction-asc', label: 'Satisfaction ↑' },
//     //     { value: 'patients-desc', label: 'Patients ↓' },
//     //     { value: 'patients-asc', label: 'Patients ↑' },
//     //     { value: 'nps-desc', label: 'NPS ↓' },
//     //     { value: 'trend-desc', label: 'Trend ↓' },
//     // ];

//     // const handleSortChange = (value) => {
//     //     const [criteria, order] = value.split('-');
//     //     setSortBy(criteria);
//     //     setSortOrder(order);
//     // };

//     const departmentData = [
//         {
//             id: 1,
//             name: 'Psychology',
//             icon: Heart,
//             satisfaction: 94.2,
//             patients: 1247,
//             avgRating: 4.7,
//             responseRate: 89,
//             nps: 78,
//             waitTime: 12,
//             staffRating: 4.8,
//             facilityRating: 4.6,
//             treatmentRating: 4.9,
//             trend: 5.2,
//             reviews: [
//                 { rating: 5, count: 987, name: '5 Star' },
//                 { rating: 4, count: 201, name: '4 Star' },
//                 { rating: 3, count: 45, name: '3 Star' },
//                 { rating: 2, count: 12, name: '2 Star' },
//                 { rating: 1, count: 2, name: '1 Star' },
//             ],
//             monthlyTrend: [
//                 { month: 'Jan', satisfaction: 89, patients: 1100 },
//                 { month: 'Feb', satisfaction: 91, patients: 1150 },
//                 { month: 'Mar', satisfaction: 93, patients: 1200 },
//                 { month: 'Apr', satisfaction: 94.2, patients: 1247 },
//             ],
//         },
//         {
//             id: 2,
//             name: 'Psychiatry,',
//             icon: Brain,
//             satisfaction: 92.8,
//             patients: 856,
//             avgRating: 4.6,
//             responseRate: 85,
//             nps: 72,
//             waitTime: 18,
//             staffRating: 4.7,
//             facilityRating: 4.5,
//             treatmentRating: 4.8,
//             trend: 3.1,
//             reviews: [
//                 { rating: 5, count: 678, name: '5 Star' },
//                 { rating: 4, count: 142, name: '4 Star' },
//                 { rating: 3, count: 28, name: '3 Star' },
//                 { rating: 2, count: 7, name: '2 Star' },
//                 { rating: 1, count: 1, name: '1 Star' },
//             ],
//             monthlyTrend: [
//                 { month: 'Jan', satisfaction: 88, patients: 780 },
//                 { month: 'Feb', satisfaction: 90, patients: 820 },
//                 { month: 'Mar', satisfaction: 91, patients: 840 },
//                 { month: 'Apr', satisfaction: 92.8, patients: 856 },
//             ],
//         },
//         {
//             id: 3,
//             name: 'Rehabilitation',
//             icon: HandHelping,
//             satisfaction: 96.1,
//             patients: 634,
//             avgRating: 4.8,
//             responseRate: 91,
//             nps: 82,
//             waitTime: 8,
//             staffRating: 4.9,
//             facilityRating: 4.7,
//             treatmentRating: 4.9,
//             trend: 7.3,
//             reviews: [
//                 { rating: 5, count: 545, name: '5 Star' },
//                 { rating: 4, count: 78, name: '4 Star' },
//                 { rating: 3, count: 9, name: '3 Star' },
//                 { rating: 2, count: 2, name: '2 Star' },
//                 { rating: 1, count: 0, name: '1 Star' },
//             ],
//             monthlyTrend: [
//                 { month: 'Jan', satisfaction: 92, patients: 580 },
//                 { month: 'Feb', satisfaction: 94, patients: 600 },
//                 { month: 'Mar', satisfaction: 95, patients: 620 },
//                 { month: 'Apr', satisfaction: 96.1, patients: 634 },
//             ],
//         },
//         {
//             id: 4,
//             name: ' De-addiction',
//             icon: Pill,
//             satisfaction: 97.5,
//             patients: 1123,
//             avgRating: 4.9,
//             responseRate: 94,
//             nps: 85,
//             waitTime: 15,
//             staffRating: 4.9,
//             facilityRating: 4.8,
//             treatmentRating: 4.9,
//             trend: 4.7,
//             reviews: [
//                 { rating: 5, count: 978, name: '5 Star' },
//                 { rating: 4, count: 128, name: '4 Star' },
//                 { rating: 3, count: 15, name: '3 Star' },
//                 { rating: 2, count: 2, name: '2 Star' },
//                 { rating: 1, count: 0, name: '1 Star' },
//             ],
//             monthlyTrend: [
//                 { month: 'Jan', satisfaction: 94, patients: 1000 },
//                 { month: 'Feb', satisfaction: 96, patients: 1050 },
//                 { month: 'Mar', satisfaction: 97, patients: 1100 },
//                 { month: 'Apr', satisfaction: 97.5, patients: 1123 },
//             ],
//         },
//         {
//             id: 5,
//             name: 'Couples therapy',
//             icon: Shield,
//             satisfaction: 87.3,
//             patients: 2156,
//             avgRating: 4.4,
//             responseRate: 76,
//             nps: 58,
//             waitTime: 25,
//             staffRating: 4.5,
//             facilityRating: 4.2,
//             treatmentRating: 4.6,
//             trend: -2.1,
//             reviews: [
//                 { rating: 5, count: 1234, name: '5 Star' },
//                 { rating: 4, count: 567, name: '4 Star' },
//                 { rating: 3, count: 234, name: '3 Star' },
//                 { rating: 2, count: 89, name: '2 Star' },
//                 { rating: 1, count: 32, name: '1 Star' },
//             ],
//             monthlyTrend: [
//                 { month: 'Jan', satisfaction: 90, patients: 2000 },
//                 { month: 'Feb', satisfaction: 89, patients: 2080 },
//                 { month: 'Mar', satisfaction: 88, patients: 2120 },
//                 { month: 'Apr', satisfaction: 87.3, patients: 2156 },
//             ],
//         },
//     ];

//     const filteredData = animatedData
//         .filter(
//             (dept) =>
//                 dept.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//                 (filterCriteria === 'all' ||
//                     (filterCriteria === 'excellent' && dept.satisfaction >= 95) ||
//                     (filterCriteria === 'good' && dept.satisfaction >= 90 && dept.satisfaction < 95) ||
//                     (filterCriteria === 'average' && dept.satisfaction < 90))
//         )
//         .sort((a, b) => {
//             const aVal = a[sortBy];
//             const bVal = b[sortBy];
//             return sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
//         });

//     useEffect(() => {
//         setIsLoading(true);
//         const timer = setTimeout(() => {
//             setAnimatedData(departmentData);
//             setIsLoading(false);
//         }, 800);

//         return () => clearTimeout(timer);
//     }, []);

//     // Custom Tooltip Components
//     const CustomTooltip = ({ active, payload, label }) => {
//         if (active && payload && payload.length) {
//             return (
//                 <div className="bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-xl border border-white/20">
//                     <p className="font-semibold text-gray-800">{`${label}: ${payload[0].value}`}</p>
//                 </div>
//             );
//         }
//         return null;
//     };

//     const CustomPieTooltip = ({ active, payload }) => {
//         if (active && payload && payload.length) {
//             const data = payload[0].payload;
//             return (
//                 <div className="bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-xl border border-white/20">
//                     <p className="font-semibold text-gray-800">{`${data.name}: ${data.count} reviews`}</p>
//                 </div>
//             );
//         }
//         return null;
//     };

//     const DepartmentCard = ({ dept, index }) => {
//         const IconComponent = dept.icon;
//         const delay = index * 100;
//         const pieColors = ['#2FA19A', '#18276c', '#20B2AA', '#4682B4', '#5F9EA0'];

//         return (
//             <div
//                 className="group relative bg-gradient-to-br from-[#18276c]/10 via-[#2FA19A]/10 to-[#18276c]/10
//                           rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-[#2FA19A]/20
//                           backdrop-blur-lg overflow-hidden w-full max-w-sm mx-auto
//                           p-4 sm:p-6 md:p-8 transform transition-all duration-700
//                           hover:scale-105 hover:shadow-2xl hover:-translate-y-2
//                           hover:bg-gradient-to-br hover:from-[#18276c]/20 hover:via-[#2FA19A]/20 hover:to-[#18276c]/20"
//                 style={{
//                     animationDelay: `${delay}ms`,
//                     animation: 'slideInUp 0.8s ease-out forwards',
//                 }}
//                 onMouseEnter={() => setHoveredDept(dept.id)}
//                 onMouseLeave={() => setHoveredDept(null)}
//             >
//                 {/* Header Section */}
//                 <div className="flex items-center justify-between mb-4 sm:mb-6">
//                     <div className="flex items-center space-x-3 sm:space-x-4">
//                         <div
//                             className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl sm:rounded-2xl
//                                       bg-gradient-to-r from-[#18276c] via-[#2FA19A] to-[#18276c]
//                                       flex items-center justify-center shadow-lg sm:shadow-2xl
//                                       transform group-hover:rotate-12 group-hover:scale-110
//                                       transition-all duration-500 border-2 border-white/20"
//                         >
//                             <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
//                         </div>
//                         <div>
//                             <h3 className="font-bold text-gray-900 text-base sm:text-lg md:text-xl lg:text-2xl">
//                                 {dept.name}
//                             </h3>
//                             <p className="text-xs sm:text-sm text-[#18276c]/70 font-medium">
//                                 <AnimatedCounter end={dept.patients} /> patients
//                             </p>
//                         </div>
//                     </div>
//                     <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5 text-[#18276c]/50 group-hover:text-[#2FA19A]" />
//                 </div>

//                 {/* Satisfaction Display */}
//                 <div className="mb-4 sm:mb-6">
//                     {/* <div className="flex items-center justify-between">
//                         <span className="text-xs sm:text-sm font-semibold text-[#18276c]/80 uppercase">Satisfaction Rate</span>
//                         <div className="flex items-center space-x-2">
//                             <span className="text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-[#18276c] to-[#2FA19A] bg-clip-text text-transparent">
//                                 <AnimatedCounter end={dept.satisfaction} decimals={1} suffix="%" />
//                             </span>
//                             <div
//                                 className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${
//                                     dept.trend > 0 ? 'text-[#2FA19A] bg-[#2FA19A]/20' : 'text-red-600 bg-red-100/80'
//                                 }`}
//                             >
//                                 {dept.trend > 0 ? (
//                                     <ArrowUp className="w-3 h-3 mr-1" />
//                                 ) : (
//                                     <ArrowDown className="w-3 h-3 mr-1" />
//                                 )}
//                                 <AnimatedCounter end={Math.abs(dept.trend)} decimals={1} suffix="%" />
//                             </div>
//                         </div>
//                     </div> */}
//                     <div className="flex items-center justify-between">
//                         {/* Left side with span + arrow */}
//                         <div className="flex items-center space-x-1">
//                             <span className="text-sm sm:text-sm font-semibold text-[#18276c]/80 uppercase">
//                                 Satisfaction Rate
//                             </span>
//                             <ArrowRight className="w-4 h-4 text-[#18276c]/80" />
//                         </div>

//                         {/* Right side with counter + trend */}
//                         <div className="flex items-center space-x-2">
//                             <span className="text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-[#18276c] to-[#2FA19A] bg-clip-text text-transparent">
//                                 <AnimatedCounter end={dept.satisfaction} decimals={1} suffix="%" />
//                             </span>
//                             <div
//                                 className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${
//                                     dept.trend > 0 ? 'text-[#2FA19A] bg-[#2FA19A]/20' : 'text-red-600 bg-red-100/80'
//                                 }`}
//                             >
//                                 {dept.trend > 0 ? (
//                                     <ArrowUp className="w-3 h-3 mr-1" />
//                                 ) : (
//                                     <ArrowDown className="w-3 h-3 mr-1" />
//                                 )}
//                                 <AnimatedCounter end={Math.abs(dept.trend)} decimals={1} suffix="%" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Rating Grid */}
//                 <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
//                     <div
//                         className="text-center p-3 sm:p-4 bg-gradient-to-br from-white/60 to-white/40
//                                   backdrop-blur-md rounded-xl border border-white/30"
//                     >
//                         <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-1 sm:mb-2">
//                             <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#2FA19A] fill-current" />
//                             <span className="text-lg sm:text-xl font-black text-[#18276c]">
//                                 <AnimatedCounter end={dept.avgRating} decimals={1} />
//                             </span>
//                         </div>
//                         <p className="text-xs text-[#18276c]/70 font-semibold uppercase">Rating</p>
//                     </div>
//                     <div
//                         className="text-center p-3 sm:p-4 bg-gradient-to-br from-white/60 to-white/40
//                                   backdrop-blur-md rounded-xl border border-white/30"
//                     >
//                         {/* <div className="text-lg sm:text-xl font-black text-[#18276c] mb-1 sm:mb-2">
//                             <AnimatedCounter end={dept.nps} />
//                         </div>
//                         <p className="text-xs text-[#18276c]/70 font-semibold uppercase">NPS</p> */}
//                         <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-1 sm:mb-2">
//                             <FaRegSmile className="w-5 h-5 text-[#2FA19A] " />
//                             <span className="text-lg sm:text-xl font-black text-[#18276c]">
//                                 <AnimatedCounter end={dept.nps} />
//                             </span>
//                         </div>
//                         <p className="text-xs text-[#18276c]/70 font-semibold uppercase">Nps</p>
//                     </div>
//                 </div>

//                 {/* Pie Chart */}
//                 <div className="h-16 sm:h-20 md:h-24 mb-4 sm:mb-6 flex justify-center">
//                     <ResponsiveContainer width={80} height={64}>
//                         <PieChart>
//                             <Pie
//                                 data={dept.reviews}
//                                 cx="50%"
//                                 cy="50%"
//                                 innerRadius={20}
//                                 outerRadius={30}
//                                 paddingAngle={3}
//                                 dataKey="count"
//                                 animationDuration={2000}
//                                 animationDelay={delay}
//                             >
//                                 {dept.reviews.map((entry, index) => (
//                                     <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
//                                 ))}
//                             </Pie>
//                             <Tooltip content={<CustomPieTooltip />} />
//                         </PieChart>
//                     </ResponsiveContainer>
//                 </div>

//                 {/* Stats Grid */}
//                 <div className="grid grid-cols-3 gap-2 sm:gap-3 text-xs">
//                     <div
//                         className="text-center p-2 sm:p-3 bg-gradient-to-br from-[#2FA19A]/20 to-[#2FA19A]/10
//                                   backdrop-blur-md rounded-lg sm:rounded-xl border border-[#2FA19A]/20"
//                     >
//                         <div className="font-black text-[#18276c] text-sm sm:text-base">
//                             <AnimatedCounter end={dept.responseRate} suffix="%" />
//                         </div>
//                         <div className="text-[#18276c]/70 font-semibold uppercase text-xs">Response</div>
//                     </div>
//                     <div
//                         className="text-center p-2 sm:p-3 bg-gradient-to-br from-[#18276c]/20 to-[#18276c]/10
//                                   backdrop-blur-md rounded-lg sm:rounded-xl border border-[#18276c]/20"
//                     >
//                         <div className="font-black text-[#18276c] text-sm sm:text-base">
//                             <AnimatedCounter end={dept.waitTime} suffix="m" />
//                         </div>
//                         <div className="text-[#18276c]/70 font-semibold uppercase text-xs">Wait</div>
//                     </div>
//                     <div
//                         className="text-center p-2 sm:p-3 bg-gradient-to-br from-[#2FA19A]/20 to-[#2FA19A]/10
//                                   backdrop-blur-md rounded-lg sm:rounded-xl border border-[#2FA19A]/20"
//                     >
//                         <div className="font-black text-[#18276c] text-sm sm:text-base">
//                             <AnimatedCounter end={dept.staffRating} decimals={1} />
//                         </div>
//                         <div className="text-[#18276c]/70 font-semibold uppercase text-xs">Staff</div>
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     const DetailedCard = ({ dept, index }) => {
//         const IconComponent = dept.icon;
//         const delay = index * 50;
//         const pieColors = ['#2FA19A', '#18276c', '#20B2AA', '#4682B4', '#5F9EA0'];

//         return (
//             <div
//                 className="group bg-gradient-to-br from-white/80 via-[#2FA19A]/5 to-[#18276c]/10
//                           rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-[#2FA19A]/20
//                           backdrop-blur-lg overflow-hidden transform transition-all duration-700
//                           hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2"
//                 style={{ animationDelay: `${delay}ms`, animation: 'slideInLeft 0.6s ease-out forwards' }}
//             >
//                 <div className="p-4 sm:p-6 md:p-8">
//                     {/* Header */}
//                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0">
//                         <div className="flex items-center space-x-4 sm:space-x-6">
//                             <div
//                                 className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl sm:rounded-3xl
//                                           bg-gradient-to-r from-[#18276c] via-[#2FA19A] to-[#18276c]
//                                           flex items-center justify-center shadow-xl transform group-hover:scale-110
//                                           group-hover:rotate-12 transition-all duration-500 border-2 border-white/30"
//                             >
//                                 <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
//                             </div>
//                             <div>
//                                 <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#18276c]">{dept.name}</h3>
//                                 <p className="text-sm sm:text-base md:text-lg text-[#18276c]/70 font-semibold">
//                                     <AnimatedCounter end={dept.patients} /> patients served
//                                 </p>
//                             </div>
//                         </div>
//                         <div
//                             className={`flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 rounded-xl sm:rounded-2xl
//                                        text-xs sm:text-sm font-bold ${
//                                            dept.trend > 0
//                                                ? 'text-[#2FA19A] bg-[#2FA19A]/20 border border-[#2FA19A]/30'
//                                                : 'text-red-600 bg-red-100/80 border border-red-200'
//                                        }`}
//                         >
//                             {dept.trend > 0 ? (
//                                 <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
//                             ) : (
//                                 <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5" />
//                             )}
//                             <AnimatedCounter end={Math.abs(dept.trend)} decimals={1} suffix="%" />
//                         </div>
//                     </div>

//                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
//                         {/* Left: Satisfaction Radial Chart */}
//                         <div className="lg:col-span-1">
//                             <div className="text-center">
//                                 <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 sm:mb-6">
//                                     <ResponsiveContainer width="100%" height="100%">
//                                         <RadialBarChart
//                                             cx="50%"
//                                             cy="50%"
//                                             innerRadius="70%"
//                                             outerRadius="90%"
//                                             barSize={10}
//                                             data={[
//                                                 { name: 'Satisfaction', value: dept.satisfaction, fill: '#2FA19A' },
//                                                 { name: 'Remaining', value: 100 - dept.satisfaction, fill: '#E5E7EB' },
//                                             ]}
//                                             startAngle={90}
//                                             endAngle={-270}
//                                         >
//                                             <RadialBar background clockWise dataKey="value" cornerRadius={50} />
//                                         </RadialBarChart>
//                                     </ResponsiveContainer>

//                                     <div className="absolute inset-0 flex items-center justify-center">
//                                         <div className="text-center">
//                                             <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#18276c] to-[#2FA19A] bg-clip-text text-transparent">
//                                                 <AnimatedCounter end={dept.satisfaction} decimals={1} suffix="%" />
//                                             </div>
//                                             <div className="text-xs sm:text-sm text-[#18276c]/70 font-semibold uppercase">
//                                                 Satisfaction
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Middle: Stats Cards */}
//                         <div className="lg:col-span-1 space-y-4 sm:space-y-6">
//                             <div className="grid grid-cols-2 gap-3 sm:gap-4">
//                                 <div
//                                     className="bg-gradient-to-br from-[#2FA19A]/20 via-white/60 to-[#2FA19A]/10
//                                               backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-[#2FA19A]/20"
//                                 >
//                                     <div className="flex items-center space-x-2 mb-2">
//                                         <FaStar className="w-5 h-5 text-blue-500" />
//                                         <span className="text-xs sm:text-sm font-bold text-[#18276c]/80 uppercase">
//                                             Rating
//                                         </span>
//                                     </div>
//                                     <div className="text-xl sm:text-2xl font-black text-[#18276c]">
//                                         <AnimatedCounter end={dept.avgRating} decimals={1} />
//                                     </div>
//                                 </div>

//                                 <div
//                                     className="bg-gradient-to-br from-[#18276c]/20 via-white/60 to-[#18276c]/10
//                                               backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-[#18276c]/20"
//                                 >
//                                     <div className="flex items-center space-x-2 mb-2">
//                                         {/* <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#2FA19A]" /> */}
//                                         <Award className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
//                                         <span className="text-xs sm:text-sm font-bold text-[#18276c]/80 uppercase">
//                                             NPS
//                                         </span>
//                                     </div>
//                                     <div className="text-xl sm:text-2xl font-black text-[#18276c]">
//                                         <AnimatedCounter end={dept.nps} />
//                                     </div>
//                                 </div>

//                                 <div
//                                     className="bg-gradient-to-br from-[#2FA19A]/20 via-white/60 to-[#2FA19A]/10
//                                               backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-[#2FA19A]/20"
//                                 >
//                                     <div className="flex items-center space-x-2 mb-2">
//                                         <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#18276c]" />
//                                         <span className="text-xs sm:text-sm font-bold text-[#18276c]/80 uppercase">
//                                             Response
//                                         </span>
//                                     </div>
//                                     <div className="text-xl sm:text-2xl font-black text-[#18276c]">
//                                         <AnimatedCounter end={dept.responseRate} suffix="%" />
//                                     </div>
//                                 </div>

//                                 <div
//                                     className="bg-gradient-to-br from-[#18276c]/20 via-white/60 to-[#18276c]/10
//                                               backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-[#18276c]/20"
//                                 >
//                                     <div className="flex items-center space-x-2 mb-2">
//                                         <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-[#2FA19A]" />
//                                         <span className="text-xs sm:text-sm font-bold text-[#18276c]/80 uppercase">
//                                             Wait
//                                         </span>
//                                     </div>
//                                     <div className="text-xl sm:text-2xl font-black text-[#18276c]">
//                                         <AnimatedCounter end={dept.waitTime} suffix="m" />
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Trend Chart */}
//                             <div
//                                 className="bg-gradient-to-br from-white/70 via-[#2FA19A]/5 to-white/50
//                                           backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/30"
//                             >
//                                 <h4 className="text-base sm:text-lg font-black text-[#18276c] mb-3 sm:mb-4 uppercase">
//                                     Monthly Trend
//                                 </h4>
//                                 <div className="h-24 sm:h-32">
//                                     <ResponsiveContainer width="100%" height="100%">
//                                         <AreaChart data={dept.monthlyTrend}>
//                                             <defs>
//                                                 <linearGradient id={`colorGradient${dept.id}`} x1="0" y1="0" x2="0" y2="1">
//                                                     <stop offset="5%" stopColor="#2FA19A" stopOpacity={0.4} />
//                                                     <stop offset="95%" stopColor="#18276c" stopOpacity={0.1} />
//                                                 </linearGradient>
//                                             </defs>
//                                             <XAxis
//                                                 dataKey="month"
//                                                 tick={{ fontSize: 10, fill: '#18276c' }}
//                                                 axisLine={false}
//                                                 tickLine={false}
//                                             />
//                                             <YAxis hide />
//                                             <Tooltip content={<CustomTooltip />} />
//                                             <Area
//                                                 type="monotone"
//                                                 dataKey="satisfaction"
//                                                 stroke="#2FA19A"
//                                                 strokeWidth={2}
//                                                 fill={`url(#colorGradient${dept.id})`}
//                                                 animationDuration={2500}
//                                                 animationDelay={delay + 500}
//                                             />
//                                         </AreaChart>
//                                     </ResponsiveContainer>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Right: Review Distribution */}
//                         <div className="lg:col-span-1">
//                             <div className="space-y-4 sm:space-y-6">
//                                 {/* Donut Chart */}
//                                 <div
//                                     className="bg-gradient-to-br from-white/70 via-[#18276c]/5 to-white/50
//                                                 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/30"
//                                 >
//                                     <h4 className="text-base sm:text-lg font-black text-[#18276c] mb-3 sm:mb-4 uppercase">
//                                         Reviews
//                                     </h4>
//                                     <div className="h-32 sm:h-40 relative">
//                                         <ResponsiveContainer width="100%" height="100%">
//                                             <PieChart>
//                                                 <Pie
//                                                     data={dept.reviews}
//                                                     cx="50%"
//                                                     cy="50%"
//                                                     innerRadius={30}
//                                                     outerRadius={55}
//                                                     paddingAngle={4}
//                                                     dataKey="count"
//                                                     animationDuration={2500}
//                                                     animationDelay={delay + 200}
//                                                 >
//                                                     {dept.reviews.map((entry, index) => (
//                                                         <Cell
//                                                             key={`cell-${index}`}
//                                                             fill={pieColors[index % pieColors.length]}
//                                                         />
//                                                     ))}
//                                                 </Pie>
//                                                 <Tooltip content={<CustomPieTooltip />} />
//                                             </PieChart>
//                                         </ResponsiveContainer>
//                                     </div>
//                                 </div>

//                                 {/* Rating Breakdown */}
//                                 <div className="space-y-2 sm:space-y-3">
//                                     <h4 className="text-base sm:text-lg font-black text-[#18276c] uppercase">Breakdown</h4>
//                                     {dept.reviews.map((review, idx) => (
//                                         <div key={idx} className="flex items-center space-x-3 sm:space-x-4">
//                                             <div className="flex items-center space-x-1 sm:space-x-2 w-12 sm:w-16">
//                                                 <span className="text-xs sm:text-sm font-bold text-[#18276c]">
//                                                     {review.rating}
//                                                 </span>
//                                                 <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
//                                             </div>
//                                             <div className="flex-1 bg-gray-200 rounded-full h-2 sm:h-3 overflow-hidden">
//                                                 <div
//                                                     className="h-full rounded-full transition-all duration-1500"
//                                                     style={{
//                                                         background: `linear-gradient(90deg, ${
//                                                             pieColors[idx % pieColors.length]
//                                                         }, ${pieColors[idx % pieColors.length]}aa)`,
//                                                         width: `${
//                                                             (review.count / Math.max(...dept.reviews.map((r) => r.count))) *
//                                                             100
//                                                         }%`,
//                                                         animationDelay: `${delay + idx * 150}ms`,
//                                                     }}
//                                                 />
//                                             </div>
//                                             <span className="text-xs sm:text-sm font-bold text-[#18276c] w-8 sm:w-12">
//                                                 <AnimatedCounter end={review.count} duration={1800} />
//                                             </span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Bottom Stats */}
//                     <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-4 sm:gap-6">
//                         <div
//                             className="text-center p-3 sm:p-4 bg-gradient-to-br from-[#2FA19A]/20 via-white/60 to-[#2FA19A]/10
//                                         backdrop-blur-md rounded-xl sm:rounded-2xl border border-[#2FA19A]/20"
//                         >
//                             <div className="text-lg sm:text-xl md:text-2xl font-black text-[#18276c]">
//                                 <AnimatedCounter end={dept.staffRating} decimals={1} />
//                             </div>
//                             <div className="text-xs sm:text-sm text-[#18276c]/70 font-bold uppercase">Staff</div>
//                         </div>
//                         <div
//                             className="text-center p-3 sm:p-4 bg-gradient-to-br from-[#18276c]/20 via-white/60 to-[#18276c]/10
//                                         backdrop-blur-md rounded-xl sm:rounded-2xl border border-[#18276c]/20"
//                         >
//                             <div className="text-lg sm:text-xl md:text-2xl font-black text-[#18276c]">
//                                 <AnimatedCounter end={dept.facilityRating} decimals={1} />
//                             </div>
//                             <div className="text-xs sm:text-sm text-[#18276c]/70 font-bold uppercase">Facility</div>
//                         </div>
//                         <div
//                             className="text-center p-3 sm:p-4 bg-gradient-to-br from-[#2FA19A]/20 via-white/60 to-[#2FA19A]/10
//                                         backdrop-blur-md rounded-xl sm:rounded-2xl border border-[#2FA19A]/20"
//                         >
//                             <div className="text-lg sm:text-xl md:text-2xl font-black text-[#18276c]">
//                                 <AnimatedCounter end={dept.treatmentRating} decimals={1} />
//                             </div>
//                             <div className="text-xs sm:text-sm text-[#18276c]/70 font-bold uppercase">Treatment</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     };

//     if (isLoading) {
//         return (
//             <div className="min-h-screen bg-gradient-to-br from-[#18276c]/10 via-[#2FA19A]/5 to-white flex items-center justify-center p-4">
//                 <div className="text-center">
//                     <div className="relative">
//                         <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-4 border-[#2FA19A]/30 border-t-[#18276c] rounded-full animate-spin mx-auto mb-4 sm:mb-6"></div>
//                         <div className="absolute inset-0 flex items-center justify-center">
//                             <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border-3 border-[#18276c]/30 border-t-[#2FA19A] rounded-full animate-spin"></div>
//                         </div>
//                     </div>
//                     <p className="text-[#18276c] font-black text-base sm:text-lg md:text-xl animate-pulse bg-gradient-to-r from-[#18276c] to-[#2FA19A] bg-clip-text text-transparent">
//                         Loading Dashboard...
//                     </p>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-[#aef0e6] via-white to-[#aef0e6] pb-20">
//             {/* Header */}
//             <div className="text-center py-6 sm:py-8 md:py-12 px-4">
//                 <h1
//                     className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black font-quicksand mb-4 sm:mb-6"
//                     style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
//                 >
//                     Department Analytics
//                 </h1>
//                 <div className="relative h-1 w-24 sm:w-32 md:w-40 mx-auto overflow-hidden rounded-full shadow-lg">
//                     <div className="absolute inset-0 bg-gradient-to-r from-[#18276c] via-[#2FA19A] to-[#18276c] animate-pulse"></div>
//                 </div>
//             </div>

//             {/* Controls */}
//             {/* <div className="px-4 sm:px-6 md:px-8 mb-6 sm:mb-8"> */}
//             {/* <div className="max-w-7xl mx-auto"> */}
//             {/* <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-between"> */}
//             {/* Search */}
//             {/* <div className="relative w-full sm:w-auto sm:flex-1 max-w-md">
//                             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
//                             <input
//                                 type="text"
//                                 placeholder="Search departments..."
//                                 value={searchTerm}
//                                 onChange={(e) => setSearchTerm(e.target.value)}
//                                 className="w-full pl-10 pr-4 py-2 sm:py-3 bg-white/90 backdrop-blur-sm border border-white/20
//                                             rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2FA19A]/30
//                                             text-sm sm:text-base transition-all duration-300"
//                             />
//                         </div> */}

//             {/* Filter & Sort */}
//             {/* <div className="flex gap-3 sm:gap-4 w-full sm:w-auto">
//                             <CustomDropdown
//                                 value={filterCriteria}
//                                 onChange={setFilterCriteria}
//                                 options={filterOptions}
//                                 placeholder="Filter"
//                                 className="flex-1 sm:flex-none sm:w-40 md:w-48"
//                             />
//                             <CustomDropdown
//                                 value={`${sortBy}-${sortOrder}`}
//                                 onChange={handleSortChange}
//                                 options={sortOptions}
//                                 placeholder="Sort"
//                                 className="flex-1 sm:flex-none sm:w-40 md:w-48"
//                             />
//                         </div> */}

//             {/* View Toggle */}
//             {/* <div className="flex bg-white/90 rounded-xl p-1 border border-white/20">
//                             <button
//                                 onClick={() => setSelectedView('grid')}
//                                 className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
//                                     selectedView === 'grid'
//                                         ? 'bg-[#2FA19A] text-white shadow-lg'
//                                         : 'text-gray-600 hover:text-[#18276c]'
//                                 }`}
//                             >
//                                 Grid
//                             </button>
//                             <button
//                                 onClick={() => setSelectedView('detailed')}
//                                 className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
//                                     selectedView === 'detailed'
//                                         ? 'bg-[#18276c] text-white shadow-lg'
//                                         : 'text-gray-600 hover:text-[#18276c]'
//                                 }`}
//                             >
//                                 Detailed
//                             </button>
//                         </div> */}
//             {/* </div>
//                 </div>
//             </div> */}

//             {/* Content */}
//             <div className="px-4 sm:px-6 md:px-8">
//                 <div className="max-w-7xl mx-auto">
//                     {selectedView === 'grid' ? (
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
//                             {filteredData.map((dept, index) => (
//                                 <DepartmentCard key={dept.id} dept={dept} index={index} />
//                             ))}
//                         </div>
//                     ) : (
//                         <div className="space-y-6 sm:space-y-8">
//                             {filteredData.map((dept, index) => (
//                                 <DetailedCard key={dept.id} dept={dept} index={index} />
//                             ))}
//                         </div>
//                     )}

//                     {filteredData.length === 0 && (
//                         <div className="text-center py-12 sm:py-16">
//                             <div
//                                 className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#2FA19A]/20 to-[#18276c]/20
//                                             rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
//                             >
//                                 <Search className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 text-[#18276c]/60" />
//                             </div>
//                             <h3 className="text-xl sm:text-2xl font-black text-[#18276c] mb-2 sm:mb-3">
//                                 No departments found
//                             </h3>
//                             <p className="text-sm sm:text-base md:text-lg text-[#18276c]/70">
//                                 Try adjusting your search or filter criteria
//                             </p>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {/* Floating Action Button */}
//             <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50">
//                 <button
//                     className="px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 bg-gradient-to-r from-[#18276c] via-[#2FA19A] to-[#18276c]
//                     transform hover:scale-110 transition-all duration-500 animate-bounce
//                     font-bold text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-wide
//                     text-white rounded-full shadow-xl hover:shadow-2xl
//                                  border border-white/20 hover:border-white/40"
//                 >
//                     Book Appointment
//                 </button>
//             </div>

//             <style jsx>{`
//                 @keyframes slideInUp {
//                     from {
//                         opacity: 0;
//                         transform: translateY(30px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateY(0);
//                     }
//                 }

//                 @keyframes slideInLeft {
//                     from {
//                         opacity: 0;
//                         transform: translateX(-30px);
//                     }
//                     to {
//                         opacity: 1;
//                         transform: translateX(0);
//                     }
//                 }

//                 .scrollbar-hide {
//                     -ms-overflow-style: none;
//                     scrollbar-width: none;
//                 }

//                 .scrollbar-hide::-webkit-scrollbar {
//                     display: none;
//                 }
//             `}</style>
//         </div>
//     );
// };

// export default PremiumDepartmentDashboard;

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
    ArrowRight,
    Shield,
    Search,
    MoreVertical,
    ArrowUp,
    ArrowDown,
    ChevronDown,
    Pill,
    HandHelping,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';

// Custom Dropdown Component
const CustomDropdown = ({ value, onChange, options, placeholder = 'Select...', className = '' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

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
                className="w-full px-3 py-2 bg-white/90 backdrop-blur-sm border border-white/20 rounded-xl 
                         focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 
                         text-xs whitespace-nowrap text-center flex items-center justify-between"
            >
                <span className={selectedOption ? 'text-gray-900' : 'text-gray-500'}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <ChevronDown
                    className={`w-4 h-4 ml-2 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {isOpen && (
                <div
                    className="absolute top-full left-0 right-0 mt-1 bg-white/95 backdrop-blur-sm border border-white/20 
                               rounded-xl shadow-lg z-50 max-h-60 overflow-auto"
                >
                    {options.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                                onChange(option.value);
                                setIsOpen(false);
                            }}
                            className={`w-full px-3 py-2 text-left text-xs whitespace-nowrap hover:bg-white/50 
                                       transition-colors duration-150 first:rounded-t-xl last:rounded-b-xl 
                                       ${
                                           value === option.value
                                               ? 'bg-white/30 text-gray-900 font-medium'
                                               : 'text-gray-700'
                                       }`}
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
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    // Filter and Sort Options
    const filterOptions = [
        { value: 'all', label: 'All Departments' },
        { value: 'excellent', label: 'Excellent (95%+)' },
        { value: 'good', label: 'Good (90-95%)' },
        { value: 'average', label: 'Average (<90%)' },
    ];

    const sortOptions = [
        { value: 'satisfaction-desc', label: 'Satisfaction ↓' },
        { value: 'satisfaction-asc', label: 'Satisfaction ↑' },
        { value: 'patients-desc', label: 'Patients ↓' },
        { value: 'patients-asc', label: 'Patients ↑' },
        { value: 'nps-desc', label: 'NPS ↓' },
        { value: 'trend-desc', label: 'Trend ↓' },
    ];

    const handleSortChange = (value) => {
        const [criteria, order] = value.split('-');
        setSortBy(criteria);
        setSortOrder(order);
    };

    const departmentData = [
        {
            id: 1,
            name: 'Psychology',
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
            name: 'Psychiatry',
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
            name: 'Rehabilitation',
            icon: HandHelping,
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
            name: 'De-addiction',
            icon: Pill,
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
            name: 'Couples therapy',
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

    const scrollToCard = (direction) => {
        if (!scrollContainerRef.current) return;

        const container = scrollContainerRef.current;
        const cardWidth = 400; // Approximate card width + gap

        if (direction === 'next') {
            setCurrentIndex((prev) => (prev + 1) % filteredData.length);
        } else {
            setCurrentIndex((prev) => (prev - 1 + filteredData.length) % filteredData.length);
        }

        const scrollAmount = direction === 'next' ? cardWidth : -cardWidth;
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    // Custom Tooltip Components
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-xl border border-white/20">
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
                <div className="bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-xl border border-white/20">
                    <p className="font-semibold text-gray-800">{`${data.name}: ${data.count} reviews`}</p>
                </div>
            );
        }
        return null;
    };

    const DepartmentCard = ({ dept, index }) => {
        const IconComponent = dept.icon;
        const delay = index * 100;
        const pieColors = ['#2FA19A', '#18276c', '#20B2AA', '#4682B4', '#5F9EA0'];

        return (
            <div
                className="group relative bg-gradient-to-br from-[#18276c]/10 via-[#2FA19A]/10 to-[#18276c]/10
                          rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-[#2FA19A]/20
                          backdrop-blur-lg overflow-hidden flex-shrink-0
                          p-4 sm:p-6 md:p-8 transform transition-all duration-700 
                          hover:scale-105 hover:shadow-2xl hover:-translate-y-2
                          hover:bg-gradient-to-br hover:from-[#18276c]/20 hover:via-[#2FA19A]/20 hover:to-[#18276c]/20
                          w-80 sm:w-96"
                style={{
                    animationDelay: `${delay}ms`,
                    animation: 'slideInUp 0.8s ease-out forwards',
                }}
                onMouseEnter={() => setHoveredDept(dept.id)}
                onMouseLeave={() => setHoveredDept(null)}
            >
                {/* Header Section */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                        <div
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl sm:rounded-2xl 
                                      bg-gradient-to-r from-[#18276c] via-[#2FA19A] to-[#18276c]
                                      flex items-center justify-center shadow-lg sm:shadow-2xl 
                                      transform group-hover:rotate-12 group-hover:scale-110 
                                      transition-all duration-500 border-2 border-white/20"
                        >
                            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 text-base sm:text-lg md:text-xl lg:text-2xl">
                                {dept.name}
                            </h3>
                            <p className="text-xs sm:text-sm text-[#18276c]/70 font-medium">
                                <AnimatedCounter end={dept.patients} /> patients
                            </p>
                        </div>
                    </div>
                    <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5 text-[#18276c]/50 group-hover:text-[#2FA19A]" />
                </div>

                {/* Satisfaction Display */}
                <div className="mb-4 sm:mb-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                            <span className="text-sm sm:text-sm font-semibold text-[#18276c]/80 uppercase">
                                Satisfaction Rate
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#18276c]/80" />
                        </div>

                        <div className="flex items-center space-x-2">
                            <span className="text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-[#18276c] to-[#2FA19A] bg-clip-text text-transparent">
                                <AnimatedCounter end={dept.satisfaction} decimals={1} suffix="%" />
                            </span>
                            <div
                                className={`flex items-center text-xs font-bold px-2 py-1 rounded-full ${
                                    dept.trend > 0 ? 'text-[#2FA19A] bg-[#2FA19A]/20' : 'text-red-600 bg-red-100/80'
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
                </div>

                {/* Rating Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div
                        className="text-center p-3 sm:p-4 bg-gradient-to-br from-white/60 to-white/40 
                                  backdrop-blur-md rounded-xl border border-white/30"
                    >
                        <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-1 sm:mb-2">
                            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#2FA19A] fill-current" />
                            <span className="text-lg sm:text-xl font-black text-[#18276c]">
                                <AnimatedCounter end={dept.avgRating} decimals={1} />
                            </span>
                        </div>
                        <p className="text-xs text-[#18276c]/70 font-semibold uppercase">Rating</p>
                    </div>
                    <div
                        className="text-center p-3 sm:p-4 bg-gradient-to-br from-white/60 to-white/40 
                                  backdrop-blur-md rounded-xl border border-white/30"
                    >
                        <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-1 sm:mb-2">
                            <Users className="w-5 h-5 text-[#2FA19A] " />
                            <span className="text-lg sm:text-xl font-black text-[#18276c]">
                                <AnimatedCounter end={dept.nps} />
                            </span>
                        </div>
                        <p className="text-xs text-[#18276c]/70 font-semibold uppercase">Nps</p>
                    </div>
                </div>

                {/* Pie Chart */}
                <div className="h-16 sm:h-20 md:h-24 mb-4 sm:mb-6 flex justify-center">
                    <ResponsiveContainer width={80} height={64}>
                        <PieChart>
                            <Pie
                                data={dept.reviews}
                                cx="50%"
                                cy="50%"
                                innerRadius={20}
                                outerRadius={30}
                                paddingAngle={3}
                                dataKey="count"
                                animationDuration={2000}
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

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 text-xs">
                    <div
                        className="text-center p-2 sm:p-3 bg-gradient-to-br from-[#2FA19A]/20 to-[#2FA19A]/10 
                                  backdrop-blur-md rounded-lg sm:rounded-xl border border-[#2FA19A]/20"
                    >
                        <div className="font-black text-[#18276c] text-sm sm:text-base">
                            <AnimatedCounter end={dept.responseRate} suffix="%" />
                        </div>
                        <div className="text-[#18276c]/70 font-semibold uppercase text-xs">Response</div>
                    </div>
                    <div
                        className="text-center p-2 sm:p-3 bg-gradient-to-br from-[#18276c]/20 to-[#18276c]/10 
                                  backdrop-blur-md rounded-lg sm:rounded-xl border border-[#18276c]/20"
                    >
                        <div className="font-black text-[#18276c] text-sm sm:text-base">
                            <AnimatedCounter end={dept.waitTime} suffix="m" />
                        </div>
                        <div className="text-[#18276c]/70 font-semibold uppercase text-xs">Wait</div>
                    </div>
                    <div
                        className="text-center p-2 sm:p-3 bg-gradient-to-br from-[#2FA19A]/20 to-[#2FA19A]/10 
                                  backdrop-blur-md rounded-lg sm:rounded-xl border border-[#2FA19A]/20"
                    >
                        <div className="font-black text-[#18276c] text-sm sm:text-base">
                            <AnimatedCounter end={dept.staffRating} decimals={1} />
                        </div>
                        <div className="text-[#18276c]/70 font-semibold uppercase text-xs">Staff</div>
                    </div>
                </div>
            </div>
        );
    };

    const DetailedCard = ({ dept, index }) => {
        const IconComponent = dept.icon;
        const delay = index * 50;
        const pieColors = ['#2FA19A', '#18276c', '#20B2AA', '#4682B4', '#5F9EA0'];

        return (
            <div
                className="group bg-gradient-to-br from-white/80 via-[#2FA19A]/5 to-[#18276c]/10 
                          rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border border-[#2FA19A]/20 
                          backdrop-blur-lg overflow-hidden transform transition-all duration-700 
                          hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2"
                style={{ animationDelay: `${delay}ms`, animation: 'slideInLeft 0.6s ease-out forwards' }}
            >
                <div className="p-4 sm:p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0">
                        <div className="flex items-center space-x-4 sm:space-x-6">
                            <div
                                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl sm:rounded-3xl 
                                          bg-gradient-to-r from-[#18276c] via-[#2FA19A] to-[#18276c] 
                                          flex items-center justify-center shadow-xl transform group-hover:scale-110 
                                          group-hover:rotate-12 transition-all duration-500 border-2 border-white/30"
                            >
                                <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#18276c]">{dept.name}</h3>
                                <p className="text-sm sm:text-base md:text-lg text-[#18276c]/70 font-semibold">
                                    <AnimatedCounter end={dept.patients} /> patients served
                                </p>
                            </div>
                        </div>
                        <div
                            className={`flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 py-2 rounded-xl sm:rounded-2xl 
                                       text-xs sm:text-sm font-bold ${
                                           dept.trend > 0
                                               ? 'text-[#2FA19A] bg-[#2FA19A]/20 border border-[#2FA19A]/30'
                                               : 'text-red-600 bg-red-100/80 border border-red-200'
                                       }`}
                        >
                            {dept.trend > 0 ? (
                                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                            ) : (
                                <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5" />
                            )}
                            <AnimatedCounter end={Math.abs(dept.trend)} decimals={1} suffix="%" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                        {/* Left: Satisfaction Radial Chart */}
                        <div className="lg:col-span-1">
                            <div className="text-center">
                                <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 sm:mb-6">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <RadialBarChart
                                            cx="50%"
                                            cy="50%"
                                            innerRadius="70%"
                                            outerRadius="90%"
                                            barSize={10}
                                            data={[
                                                { name: 'Satisfaction', value: dept.satisfaction, fill: '#2FA19A' },
                                                { name: 'Remaining', value: 100 - dept.satisfaction, fill: '#E5E7EB' },
                                            ]}
                                            startAngle={90}
                                            endAngle={-270}
                                        >
                                            <RadialBar background clockWise dataKey="value" cornerRadius={50} />
                                        </RadialBarChart>
                                    </ResponsiveContainer>

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#18276c] to-[#2FA19A] bg-clip-text text-transparent">
                                                <AnimatedCounter end={dept.satisfaction} decimals={1} suffix="%" />
                                            </div>
                                            <div className="text-xs sm:text-sm text-[#18276c]/70 font-semibold uppercase">
                                                Satisfaction
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Middle: Stats Cards */}
                        <div className="lg:col-span-1 space-y-4 sm:space-y-6">
                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                <div
                                    className="bg-gradient-to-br from-[#2FA19A]/20 via-white/60 to-[#2FA19A]/10 
                                              backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-[#2FA19A]/20"
                                >
                                    <div className="flex items-center space-x-2 mb-2">
                                        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                                        <span className="text-xs sm:text-sm font-bold text-[#18276c]/80 uppercase">
                                            Rating
                                        </span>
                                    </div>
                                    <div className="text-xl sm:text-2xl font-black text-[#18276c]">
                                        <AnimatedCounter end={dept.avgRating} decimals={1} />
                                    </div>
                                </div>

                                <div
                                    className="bg-gradient-to-br from-[#18276c]/20 via-white/60 to-[#18276c]/10 
                                              backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-[#18276c]/20"
                                >
                                    <div className="flex items-center space-x-2 mb-2">
                                        <Award className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                                        <span className="text-xs sm:text-sm font-bold text-[#18276c]/80 uppercase">
                                            NPS
                                        </span>
                                    </div>
                                    <div className="text-xl sm:text-2xl font-black text-[#18276c]">
                                        <AnimatedCounter end={dept.nps} />
                                    </div>
                                </div>

                                <div
                                    className="bg-gradient-to-br from-[#2FA19A]/20 via-white/60 to-[#2FA19A]/10 
                                              backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-[#2FA19A]/20"
                                >
                                    <div className="flex items-center space-x-2 mb-2">
                                        <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#18276c]" />
                                        <span className="text-xs sm:text-sm font-bold text-[#18276c]/80 uppercase">
                                            Response
                                        </span>
                                    </div>
                                    <div className="text-xl sm:text-2xl font-black text-[#18276c]">
                                        <AnimatedCounter end={dept.responseRate} suffix="%" />
                                    </div>
                                </div>

                                <div
                                    className="bg-gradient-to-br from-[#18276c]/20 via-white/60 to-[#18276c]/10 
                                              backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-[#18276c]/20"
                                >
                                    <div className="flex items-center space-x-2 mb-2">
                                        <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-[#2FA19A]" />
                                        <span className="text-xs sm:text-sm font-bold text-[#18276c]/80 uppercase">
                                            Wait
                                        </span>
                                    </div>
                                    <div className="text-xl sm:text-2xl font-black text-[#18276c]">
                                        <AnimatedCounter end={dept.waitTime} suffix="m" />
                                    </div>
                                </div>
                            </div>

                            {/* Trend Chart */}
                            <div
                                className="bg-gradient-to-br from-white/70 via-[#2FA19A]/5 to-white/50 
                                          backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/30"
                            >
                                <h4 className="text-base sm:text-lg font-black text-[#18276c] mb-3 sm:mb-4 uppercase">
                                    Monthly Trend
                                </h4>
                                <div className="h-24 sm:h-32">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart data={dept.monthlyTrend}>
                                            <defs>
                                                <linearGradient id={`colorGradient${dept.id}`} x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#2FA19A" stopOpacity={0.4} />
                                                    <stop offset="95%" stopColor="#18276c" stopOpacity={0.1} />
                                                </linearGradient>
                                            </defs>
                                            <XAxis
                                                dataKey="month"
                                                tick={{ fontSize: 10, fill: '#18276c' }}
                                                axisLine={false}
                                                tickLine={false}
                                            />
                                            <YAxis hide />
                                            <Tooltip content={<CustomTooltip />} />
                                            <Area
                                                type="monotone"
                                                dataKey="satisfaction"
                                                stroke="#2FA19A"
                                                strokeWidth={2}
                                                fill={`url(#colorGradient${dept.id})`}
                                                animationDuration={2500}
                                                animationDelay={delay + 500}
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>

                        {/* Right: Review Distribution */}
                        <div className="lg:col-span-1">
                            <div className="space-y-4 sm:space-y-6">
                                {/* Donut Chart */}
                                <div
                                    className="bg-gradient-to-br from-white/70 via-[#18276c]/5 to-white/50 
                                                backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/30"
                                >
                                    <h4 className="text-base sm:text-lg font-black text-[#18276c] mb-3 sm:mb-4 uppercase">
                                        Reviews
                                    </h4>
                                    <div className="h-32 sm:h-40 relative">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                <Pie
                                                    data={dept.reviews}
                                                    cx="50%"
                                                    cy="50%"
                                                    innerRadius={30}
                                                    outerRadius={55}
                                                    paddingAngle={4}
                                                    dataKey="count"
                                                    animationDuration={2500}
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
                                <div className="space-y-2 sm:space-y-3">
                                    <h4 className="text-base sm:text-lg font-black text-[#18276c] uppercase">Breakdown</h4>
                                    {dept.reviews.map((review, idx) => (
                                        <div key={idx} className="flex items-center space-x-3 sm:space-x-4">
                                            <div className="flex items-center space-x-1 sm:space-x-2 w-12 sm:w-16">
                                                <span className="text-xs sm:text-sm font-bold text-[#18276c]">
                                                    {review.rating}
                                                </span>
                                                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                                            </div>
                                            <div className="flex-1 bg-gray-200 rounded-full h-2 sm:h-3 overflow-hidden">
                                                <div
                                                    className="h-full rounded-full transition-all duration-1500"
                                                    style={{
                                                        background: `linear-gradient(90deg, ${
                                                            pieColors[idx % pieColors.length]
                                                        }, ${pieColors[idx % pieColors.length]}aa)`,
                                                        width: `${
                                                            (review.count / Math.max(...dept.reviews.map((r) => r.count))) *
                                                            100
                                                        }%`,
                                                        animationDelay: `${delay + idx * 150}ms`,
                                                    }}
                                                />
                                            </div>
                                            <span className="text-xs sm:text-sm font-bold text-[#18276c] w-8 sm:w-12">
                                                <AnimatedCounter end={review.count} duration={1800} />
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Stats */}
                    <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-4 sm:gap-6">
                        <div
                            className="text-center p-3 sm:p-4 bg-gradient-to-br from-[#2FA19A]/20 via-white/60 to-[#2FA19A]/10 
                                        backdrop-blur-md rounded-xl sm:rounded-2xl border border-[#2FA19A]/20"
                        >
                            <div className="text-lg sm:text-xl md:text-2xl font-black text-[#18276c]">
                                <AnimatedCounter end={dept.staffRating} decimals={1} />
                            </div>
                            <div className="text-xs sm:text-sm text-[#18276c]/70 font-bold uppercase">Staff</div>
                        </div>
                        <div
                            className="text-center p-3 sm:p-4 bg-gradient-to-br from-[#18276c]/20 via-white/60 to-[#18276c]/10 
                                        backdrop-blur-md rounded-xl sm:rounded-2xl border border-[#18276c]/20"
                        >
                            <div className="text-lg sm:text-xl md:text-2xl font-black text-[#18276c]">
                                <AnimatedCounter end={dept.facilityRating} decimals={1} />
                            </div>
                            <div className="text-xs sm:text-sm text-[#18276c]/70 font-bold uppercase">Facility</div>
                        </div>
                        <div
                            className="text-center p-3 sm:p-4 bg-gradient-to-br from-[#2FA19A]/20 via-white/60 to-[#2FA19A]/10 
                                        backdrop-blur-md rounded-xl sm:rounded-2xl border border-[#2FA19A]/20"
                        >
                            <div className="text-lg sm:text-xl md:text-2xl font-black text-[#18276c]">
                                <AnimatedCounter end={dept.treatmentRating} decimals={1} />
                            </div>
                            <div className="text-xs sm:text-sm text-[#18276c]/70 font-bold uppercase">Treatment</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#18276c]/10 via-[#2FA19A]/5 to-white flex items-center justify-center p-4">
                <div className="text-center">
                    <div className="relative">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-4 border-[#2FA19A]/30 border-t-[#18276c] rounded-full animate-spin mx-auto mb-4 sm:mb-6"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 border-3 border-[#18276c]/30 border-t-[#2FA19A] rounded-full animate-spin"></div>
                        </div>
                    </div>
                    <p className="text-[#18276c] font-black text-base sm:text-lg md:text-xl animate-pulse bg-gradient-to-r from-[#18276c] to-[#2FA19A] bg-clip-text text-transparent">
                        Loading Dashboard...
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-b from-[#aef0e6] via-white to-[#aef0e6] pb-10 ">
            {/* Header */}
            <div className="text-center py-6 sm:py-8 md:py-12 px-4">
                <h1
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black font-quicksand mb-4 sm:mb-6"
                    style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
                >
                    Department Analytics
                </h1>
                <div className="relative h-1 w-24 sm:w-32 md:w-40 mx-auto overflow-hidden rounded-full shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#18276c] via-[#2FA19A] to-[#18276c] animate-pulse"></div>
                </div>
            </div>

            {/* Controls */}
            {/* <div className="px-4 sm:px-6 md:px-8 mb-6 sm:mb-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-between"> */}
            {/* Search */}
            {/* <div className="relative w-full sm:w-auto sm:flex-1 max-w-md"> */}
            {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search departments..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 sm:py-3 bg-white/90 backdrop-blur-sm border border-white/20 
                                            rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2FA19A]/30 
                                            text-sm sm:text-base transition-all duration-300"
                            />
                        </div> */}

            {/* Filter & Sort */}
            {/* <div className="flex gap-3 sm:gap-4 w-full sm:w-auto">
                            <CustomDropdown
                                value={filterCriteria}
                                onChange={setFilterCriteria}
                                options={filterOptions}
                                placeholder="Filter"
                                className="flex-1 sm:flex-none sm:w-40 md:w-48"
                            />
                            <CustomDropdown
                                value={`${sortBy}-${sortOrder}`}
                                onChange={handleSortChange}
                                options={sortOptions}
                                placeholder="Sort"
                                className="flex-1 sm:flex-none sm:w-40 md:w-48"
                            />
                        </div> */}

            {/* View Toggle */}
            {/* <div className="flex bg-white/90 rounded-xl p-1 border border-white/20">
                            <button
                                onClick={() => setSelectedView('grid')}
                                className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                                    selectedView === 'grid'
                                        ? 'bg-[#2FA19A] text-white shadow-lg'
                                        : 'text-gray-600 hover:text-[#18276c]'
                                }`}
                            >
                                Horizontal
                            </button>
                            <button
                                onClick={() => setSelectedView('detailed')}
                                className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                                    selectedView === 'detailed'
                                        ? 'bg-[#18276c] text-white shadow-lg'
                                        : 'text-gray-600 hover:text-[#18276c]'
                                }`}
                            >
                                Detailed
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Content */}
            <div className="px-4 sm:px-6 md:px-8">
                <div className="max-w-7xl mx-auto">
                    {selectedView === 'grid' ? (
                        // Horizontal Scrolling Cards
                        <div className="relative">
                            {/* Navigation Buttons */}
                            {/* <button
                                onClick={() => scrollToCard('prev')}
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 
                                         w-12 h-12 bg-gradient-to-r from-[#18276c] to-[#2FA19A] 
                                         rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl
                                         hover:scale-110 transition-all duration-300 text-white"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            <button
                                onClick={() => scrollToCard('next')}
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 
                                         w-12 h-12 bg-gradient-to-r from-[#18276c] to-[#2FA19A] 
                                         rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl
                                         hover:scale-110 transition-all duration-300 text-white"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button> */}

                            {/* Cards Container */}
                            <div
                                ref={scrollContainerRef}
                                className="flex items-center space-x-6 overflow-x-auto  rounded-2xl sm:rounded-3xl scrollbar-hide px-16 py-4  bg-gradient-to-t from-[#aef0e6] via-white to-[#aef0e6]
                                            snap-x snap-mandatory"
                                style={{ scrollBehavior: 'smooth' }}
                            >
                                {filteredData.map((dept, index) => (
                                    <div key={dept.id} className="snap-center flex-shrink-0">
                                        <DepartmentCard dept={dept} index={index} />
                                    </div>
                                ))}
                            </div>

                            {/* Indicators */}
                            {/* <div className="flex justify-center mt-8 space-x-2">
                                {filteredData.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            index === currentIndex ? 'bg-[#2FA19A] scale-125' : 'bg-[#18276c]/30'
                                        }`}
                                    />
                                ))}
                            </div> */}
                            {/* Indicators with Buttons */}
                            <div className="flex items-center justify-between mt-8 space-x-4">
                                {/* Left Button */}
                                <button
                                    onClick={() => scrollToCard('prev')}
                                    className="w-6 h-6 bg-gradient-to-r from-[#18276c] to-[#2FA19A] 
                                    rounded-full flex items-center justify-center shadow-md 
                                    hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-400"
                                >
                                    <ChevronLeft className="w-5 h-4" />
                                </button>

                                {/* Indicators */}
                                <div className="flex space-x-2">
                                    {filteredData.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                index === currentIndex ? 'bg-[#2FA19A] scale-125' : 'bg-[#18276c]/30'
                                            }`}
                                        />
                                    ))}
                                </div>

                                {/* Right Button */}
                                <button
                                    onClick={() => scrollToCard('next')}
                                    className="w-6 h-6 bg-gradient-to-r from-[#18276c] to-[#2FA19A] 
                                    rounded-full flex items-center justify-center shadow-md 
                                    hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-400"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-6 sm:space-y-8">
                            {filteredData.map((dept, index) => (
                                <DetailedCard key={dept.id} dept={dept} index={index} />
                            ))}
                        </div>
                    )}

                    {filteredData.length === 0 && (
                        <div className="text-center py-12 sm:py-16">
                            <div
                                className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#2FA19A]/20 to-[#18276c]/20 
                                            rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6"
                            >
                                <Search className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 text-[#18276c]/60" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-black text-[#18276c] mb-2 sm:mb-3">
                                No departments found
                            </h3>
                            <p className="text-sm sm:text-base md:text-lg text-[#18276c]/70">
                                Try adjusting your search or filter criteria
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Floating Action Button */}
            <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50">
                <button
                    className="px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 bg-gradient-to-r from-[#18276c] via-[#2FA19A] to-[#18276c] 
                    transform hover:scale-110 transition-all duration-500 animate-bounce 
                    font-bold text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-wide 
                    text-white rounded-full shadow-xl hover:shadow-2xl 
                    border border-white/20 hover:border-white/40"
                >
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

                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }

                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
};

export default PremiumDepartmentDashboard;

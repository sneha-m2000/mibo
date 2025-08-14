import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';

// Custom Dropdown Component
const CustomDropdown = ({
    value,
    onChange,
    options,
    placeholder = 'Select...',
    className = '',
    optionClassName = '',
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
                className="w-full px-4 py-2 bg-white/90 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 text-[12px] text-left flex items-center justify-between"
                {...props}
            >
                <span className={selectedOption ? 'text-gray-900' : 'text-gray-500'}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white/95 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg z-50 max-h-60 overflow-auto">
                    {options.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => {
                                onChange(option.value);
                                setIsOpen(false);
                            }}
                            className={`w-full px-4 py-2 text-left text-[12px] hover:bg-white/50 transition-colors duration-150 first:rounded-t-xl last:rounded-b-xl ${
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

// Main Component with your current content
const DepartmentFilters = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCriteria, setFilterCriteria] = useState('all');
    const [sortBy, setSortBy] = useState('satisfaction');
    const [sortOrder, setSortOrder] = useState('desc');

    // Filter options
    const filterOptions = [
        { value: 'all', label: 'All Departments' },
        { value: 'excellent', label: 'Excellent (95%+)' },
        { value: 'good', label: 'Good (90-95%)' },
        { value: 'average', label: 'Average (<90%)' },
    ];

    // Sort options
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

    return (
        <div className="p-6 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 min-h-screen">
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

                    {/* Filter + Sort in one line */}
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
            </div>

            {/* Debug info to show current state */}
            <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                <h3 className="text-white font-semibold mb-2">Current State:</h3>
                <div className="text-white/80 text-sm space-y-1">
                    <p>Search: "{searchTerm}"</p>
                    <p>Filter: {filterCriteria}</p>
                    <p>
                        Sort: {sortBy} ({sortOrder})
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DepartmentFilters;

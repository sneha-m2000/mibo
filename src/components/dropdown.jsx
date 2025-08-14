import React, { useState } from 'react';
import { ChevronRight, ChevronDown, User, Users, Monitor, Heart, Brain, Zap, Shield, Eye, Activity } from 'lucide-react';

const MentalHealthApp = () => {
    const [expandedService, setExpandedService] = useState(null);
    const [currentPage, setCurrentPage] = useState('home');
    const [selectedCondition, setSelectedCondition] = useState(null);

    const services = [
        {
            id: 'in-patient',
            title: 'In-Patient',
            icon: <User className="w-6 h-6" />,
            description: 'Comprehensive residential care for intensive mental health treatment',
            details:
                'When clicked a brief description of service appears in drop down, and a CTA button to book appointment now/learn more button directing user to the section explaining how mibo handles each type of mental health problems',
        },
        {
            id: 'in-person',
            title: 'In-Person',
            icon: <Users className="w-6 h-6" />,
            description: 'Face-to-face therapy sessions with qualified mental health professionals',
            details:
                'Personalized therapy sessions in a comfortable, professional environment with experienced therapists.',
        },
        {
            id: 'online',
            title: 'Online Services',
            icon: <Monitor className="w-6 h-6" />,
            description: 'Convenient virtual therapy and counseling sessions from anywhere',
            details: 'Access mental health support through secure video calls, chat, and digital tools.',
        },
    ];

    const conditions = [
        {
            id: 'depression',
            title: 'Depression',
            icon: <Heart className="w-6 h-6" />,
            color: 'bg-gradient-to-r from-blue-600 to-blue-700',
            description:
                'Comprehensive treatment for depression including therapy, medication management, and lifestyle interventions.',
            symptoms: [
                'Persistent sadness',
                'Loss of interest',
                'Fatigue',
                'Sleep disturbances',
                'Difficulty concentrating',
            ],
            treatments: [
                'Cognitive Behavioral Therapy (CBT)',
                'Medication management',
                'Group therapy',
                'Lifestyle counseling',
            ],
        },
        {
            id: 'anxiety',
            title: 'Generalised Anxiety Disorder (GAD)',
            icon: <Zap className="w-6 h-6" />,
            color: 'bg-gradient-to-r from-orange-600 to-orange-700',
            description: 'Specialized care for anxiety disorders with evidence-based treatments and coping strategies.',
            symptoms: ['Excessive worry', 'Restlessness', 'Muscle tension', 'Difficulty sleeping', 'Irritability'],
            treatments: ['Exposure therapy', 'Relaxation techniques', 'Medication if needed', 'Mindfulness training'],
        },
        {
            id: 'ocd',
            title: 'Obsessive Compulsive Disorder (OCD)',
            icon: <Shield className="w-6 h-6" />,
            color: 'bg-gradient-to-r from-purple-600 to-purple-700',
            description: 'Expert treatment for OCD using proven therapeutic approaches and personalized care plans.',
            symptoms: [
                'Intrusive thoughts',
                'Repetitive behaviors',
                'Compulsions',
                'Anxiety when unable to perform rituals',
            ],
            treatments: [
                'Exposure and Response Prevention (ERP)',
                'Cognitive Behavioral Therapy',
                'Medication management',
                'Family therapy',
            ],
        },
        {
            id: 'bipolar',
            title: 'Bipolar Disorder',
            icon: <Activity className="w-6 h-6" />,
            color: 'bg-gradient-to-r from-green-600 to-green-700',
            description: 'Comprehensive bipolar disorder management with mood stabilization and ongoing support.',
            symptoms: [
                'Mood swings',
                'Manic episodes',
                'Depressive episodes',
                'Energy fluctuations',
                'Sleep pattern changes',
            ],
            treatments: ['Mood stabilizers', 'Psychotherapy', 'Lifestyle management', 'Crisis intervention planning'],
        },
        {
            id: 'adhd',
            title: 'Adult ADHD',
            icon: <Brain className="w-6 h-6" />,
            color: 'bg-gradient-to-r from-teal-600 to-teal-700',
            description:
                'Adult ADHD diagnosis and treatment with focus on improving daily functioning and quality of life.',
            symptoms: ['Inattention', 'Hyperactivity', 'Impulsivity', 'Difficulty organizing', 'Time management issues'],
            treatments: ['Stimulant medications', 'Behavioral therapy', 'Coaching', 'Organizational skills training'],
        },
        {
            id: 'social-anxiety',
            title: 'Social Anxiety',
            icon: <Eye className="w-6 h-6" />,
            color: 'bg-gradient-to-r from-indigo-600 to-indigo-700',
            description: 'Specialized treatment for social anxiety to help build confidence in social situations.',
            symptoms: [
                'Fear of social situations',
                'Physical symptoms in social settings',
                'Avoidance behaviors',
                'Self-consciousness',
            ],
            treatments: [
                'Social skills training',
                'Graduated exposure therapy',
                'Group therapy',
                'Confidence building exercises',
            ],
        },
    ];

    const toggleService = (serviceId) => {
        setExpandedService(expandedService === serviceId ? null : serviceId);
    };

    const goToConditionDetail = (condition) => {
        setSelectedCondition(condition);
        setCurrentPage('detail');
    };

    const goToHome = () => {
        setCurrentPage('home');
        setSelectedCondition(null);
    };

    if (currentPage === 'detail' && selectedCondition) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
                <div className="max-w-4xl mx-auto p-6">
                    {/* Header */}
                    <div className="mb-8">
                        <button
                            onClick={goToHome}
                            className="flex items-center text-slate-600 hover:text-slate-800 mb-4 transition-colors"
                        >
                            <ChevronRight className="w-5 h-5 rotate-180 mr-2" />
                            Back to Services
                        </button>
                        <div className={`${selectedCondition.color} rounded-2xl p-8 text-white shadow-2xl`}>
                            <div className="flex items-center mb-4">
                                {selectedCondition.icon}
                                <h1 className="text-3xl font-bold ml-4">{selectedCondition.title}</h1>
                            </div>
                            <p className="text-lg opacity-90">{selectedCondition.description}</p>
                        </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Symptoms */}
                        <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
                            <h2 className="text-2xl font-bold text-slate-800 mb-6">Common Symptoms</h2>
                            <div className="space-y-3">
                                {selectedCondition.symptoms.map((symptom, index) => (
                                    <div key={index} className="flex items-center p-3 bg-slate-50 rounded-lg">
                                        <div className="w-2 h-2 bg-slate-400 rounded-full mr-3"></div>
                                        <span className="text-slate-700">{symptom}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Treatments */}
                        <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
                            <h2 className="text-2xl font-bold text-slate-800 mb-6">Our Treatment Approaches</h2>
                            <div className="space-y-3">
                                {selectedCondition.treatments.map((treatment, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center p-3 bg-green-50 rounded-lg border border-green-100"
                                    >
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                        <span className="text-slate-700">{treatment}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-12 bg-white rounded-2xl p-8 shadow-xl border border-slate-200 text-center">
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Start Your Journey?</h3>
                        <p className="text-slate-600 mb-6">
                            Take the first step towards better mental health with our expert care.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                                Book Appointment
                            </button>
                            <button className="border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-xl font-semibold hover:border-slate-400 hover:bg-slate-50 transition-all duration-200">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
            <div className="max-w-4xl mx-auto p-6">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2FA19A] to-[#18356C] drop-shadow-lg mb-2 tracking-tight">
                        Mental Health Services
                    </h1>
                    <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Comprehensive care for your mental wellbeing
                    </p>
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

                {/* Services Section */}
                <div className="mb-14">
                    <div className="space-y-3">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className={`relative rounded-3xl
        bg-gradient-to-r from-[#2FA19A] to-[#1E3A8A] p-[1px] 
        shadow-xl overflow-hidden transition-all duration-500 
        ${expandedService === service.id ? 'shadow-[0_0_30px_rgba(47,161,154,0.6)]' : ''}`}
                            >
                                <div className="bg-white/20 backdrop-blur-lg rounded-2xl">
                                    <button
                                        onClick={() => toggleService(service.id)}
                                        className="w-full flex items-center justify-between p-4 text-left 
  bg-transparent hover:bg-white/10 rounded-2xl transition-all duration-300"
                                    >
                                        {/* Title & description container */}
                                        <div>
                                            <h3 className="text-xl font-extrabold text-slate-800">{service.title}</h3>
                                            {/* <p className="text-slate-100 text-xs">{service.description}</p> */}
                                        </div>

                                        {/* Chevron on far right */}
                                        <ChevronDown
                                            className={`w-6 h-6 text-slate-800 transform transition-transform duration-500 ease-in-out 
    ${expandedService === service.id ? 'rotate-180 scale-110' : 'rotate-0'}`}
                                        />
                                    </button>

                                    {/* Animated Dropdown */}
                                    <div
                                        className={`transition-all duration-500 ease-in-out overflow-hidden 
            ${expandedService === service.id ? 'max-h-96 opacity-100 p-6' : 'max-h-0 opacity-0 p-0'}`}
                                    >
                                        <p className="text-white mb-4 leading-relaxed">{service.details}</p>
                                        <button
                                            className="bg-gradient-to-r from-[#2FA19A] to-[#18356C] text-white 
              px-6 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg 
              transform hover:scale-105 active:scale-95 transition-all duration-300"
                                        >
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Conditions Section */}
                {/* <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">What are you struggling with?</h2>
                    <p className="text-slate-600 mb-8">Mibo is here to support you with all your mental health needs.</p>

                    <div className="grid gap-4">
                        {conditions.map((condition) => (
                            <button
                                key={condition.id}
                                onClick={() => goToConditionDetail(condition)}
                                className={`${condition.color} text-white p-6 rounded-2xl flex items-center justify-between group hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 shadow-lg`}
                            >
                                <div className="flex items-center">
                                    <div className="bg-white bg-opacity-20 p-3 rounded-xl mr-4">{condition.icon}</div>
                                    <span className="text-lg font-semibold">{condition.title}</span>
                                </div>
                                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
                            </button>
                        ))}
                    </div>
                </div> */}
                <div className="relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-teal-500 to-purple-600 opacity-10 blur-3xl"></div>

                    <h2
                        className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight 
        bg-gradient-to-r from-[#2FA19A] via-[#1E3A8A] to-[#2FA19A] 
        bg-clip-text text-transparent"
                    >
                        What are you struggling with?
                    </h2>

                    <p
                        className="text-slate-600 mb-8 text-xs animate-fadeInUp delay-200 
        max-w-2xl mx-auto leading-relaxed typewriter"
                    >
                        Mibo is here to support you with all your mental health needs.
                    </p>

                    <div className="grid gap-6">
                        {conditions.map((condition, index) => (
                            <button
                                key={condition.id}
                                onClick={() => goToConditionDetail(condition)}
                                className={`${condition.color} relative text-white p-4 rounded-2xl flex items-center justify-between group shadow-lg overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl hover:scale-105 perspective-container`}
                                style={{ animation: `fadeInUp 0.5s ease ${index * 0.1}s both` }}
                            >
                                {/* shimmer effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500 bg-gradient-to-r from-white/30 to-transparent animate-shimmer"></div>

                                <div className="flex items-center">
                                    <div className=" mr-4 icon-3d-spin">{condition.icon}</div>
                                    <span className="text-xs whitespace-nowrap font-semibold">{condition.title}</span>
                                </div>
                                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
                            </button>
                        ))}
                    </div>

                    <style jsx>{`
                        @keyframes fadeInUp {
                            0% {
                                opacity: 0;
                                transform: translateY(20px);
                            }
                            100% {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }
                        @keyframes shimmer {
                            0% {
                                transform: translateX(-100%);
                            }
                            100% {
                                transform: translateX(100%);
                            }
                        }
                        @keyframes spin3d {
                            0% {
                                transform: rotateY(0deg) rotateX(0deg);
                            }
                            50% {
                                transform: rotateY(180deg) rotateX(10deg);
                            }
                            100% {
                                transform: rotateY(360deg) rotateX(0deg);
                            }
                        }
                        .animate-shimmer {
                            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
                            animation: shimmer 1.5s infinite;
                        }
                        .perspective-container {
                            perspective: 1000px;
                        }
                        .icon-3d-spin {
                            transform-style: preserve-3d;
                            animation: spin3d 5s linear infinite;
                        }
                    `}</style>
                </div>

                {/* Footer CTA */}
                <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl border border-slate-200 text-center">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Take the Next Step?</h3>
                    <p className="text-slate-600 mb-6">Connect with our mental health professionals today</p>
                    <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                        Get Started Today
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MentalHealthApp;

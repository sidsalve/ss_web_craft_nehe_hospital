
"use client";
import React from 'react';
import { businessContent } from '../data/business';

interface ServicesProps {
    lang: 'en' | 'mr';
    theme: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
        heading: string;
        text: string;
    };
}

const Services: React.FC<ServicesProps> = ({ lang, theme }) => {
    const services = businessContent[lang].services;
    // Example icons for demonstration (replace with your own or use a library)
    const icons = [
        '🖼️', // Flex board
        '🎨', // Radium artwork
        '💌', // Wedding invitation
        '🚗', // Number plate
        '🏷️', // Signage
        '🔖', // Logo/branding
    ];

    return (
        <section
            id="services"
            className="py-16 px-4 md:px-16 text-center opacity-0 translate-y-8 transition-all duration-700 will-change-transform"
            style={{ background: theme.background }}
            data-animate-on-scroll
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: theme.heading }}>
                {lang === 'en' ? 'Our Services' : 'आमच्या सेवा'}
            </h2>
            <div className="w-full overflow-x-auto flex justify-center md:block" style={{ maxHeight: '420px' }}>
                <ul className="flex flex-col md:flex-row items-center gap-6 mt-8 md:mt-8 md:gap-6 w-max pb-4 pt-4">
                    {services.map((service, idx) => (
                        <li
                            key={idx}
                            className="rounded-2xl shadow-lg px-8 py-10 text-xl font-semibold min-w-[260px] max-w-xs md:max-w-sm break-words text-center flex flex-col items-center justify-center bg-white transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl group cursor-pointer"
                            style={{ background: theme.accent, color: theme.primary }}
                        >
                            <span className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                                {icons[idx % icons.length]}
                            </span>
                            <span>{service}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Services;

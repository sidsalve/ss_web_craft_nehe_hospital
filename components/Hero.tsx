

"use client";
import React from 'react';
import { businessContent } from '../data/business';

interface HeroProps {
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

const Hero: React.FC<HeroProps> = ({ lang, theme }) => {
    const heroData = businessContent[lang].hero;
    return (
        <section
            id="hero"
            className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 md:px-0 opacity-0 translate-y-8 transition-all duration-700 will-change-transform bg-gradient-to-br from-blue-100 via-blue-50 to-white"
            style={{ background: `linear-gradient(to bottom right, ${theme.accent}, #e0e7ff, ${theme.background})` }}
            data-animate-on-scroll
        >
            <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ color: theme.heading }}>{heroData.heading}</h1>
            <p className="text-lg md:text-2xl mb-8" style={{ color: theme.text }}>{heroData.subheading}</p>
            <button
                type="button"
                onClick={() => {
                    const section = document.getElementById('contact');
                    if (section) section.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{ background: theme.secondary, color: '#fff' }}
                className="inline-block hover:opacity-90 font-semibold py-3 px-8 rounded-lg shadow transition duration-200"
            >
                {heroData.contactBtn}
            </button>
        </section>
    );
};

export default Hero;

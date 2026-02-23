

"use client";
import React from 'react';
import { businessContent } from '../data/business';

interface AboutProps {
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

const About: React.FC<AboutProps> = ({ lang, theme }) => {
    const aboutData = businessContent[lang].aboutSection;
    const aboutText = businessContent[lang].about;
    return (
        <section
            id="about"
            className="flex flex-col md:flex-row items-center justify-center py-16 px-4 md:px-16 opacity-0 translate-y-8 transition-all duration-700 will-change-transform"
            style={{ background: theme.background }}
            data-animate-on-scroll
        >
            <div className="md:w-1/2 mb-8 md:mb-0 md:mr-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: theme.heading }}>{aboutData.heading}</h2>
                <p className="text-lg mb-6" style={{ color: theme.text }}>
                    {aboutText}
                </p>
                <ul className="list-disc list-inside" style={{ color: theme.primary }}>
                    {aboutData.highlights.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <img src="/logo.jpeg" alt={businessContent[lang].name} className="rounded-xl shadow-lg w-full max-w-xs md:max-w-md" />
            </div>
        </section>
    );
};

export default About;

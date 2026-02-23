



"use client";
import React, { useState } from 'react';

interface NavbarProps {
    lang: 'en' | 'mr';
    setLang: (lang: 'en' | 'mr') => void;
    labels: {
        home: string;
        services: string;
        showcase?: string;
        about: string;
        contact: string;
        business: string;
        lang: string;
    };
    theme: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
        heading: string;
        text: string;
    };
}


const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, labels, theme }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarNav = (id: string) => {
        scrollToSection(id);
        setSidebarOpen(false);
    };

    return (
        <>
            <nav style={{ background: theme.background }} className="w-full shadow-md fixed top-0 left-0 z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
                    <div className="text-2xl font-bold" style={{ color: theme.primary }}>{labels.business}</div>
                    <ul className="hidden md:flex space-x-8 font-medium">
                        <li><button type="button" className="hover:underline bg-transparent border-none" style={{ color: theme.text }} onClick={() => scrollToSection('hero')}>{labels.home}</button></li>
                        <li><button type="button" className="hover:underline bg-transparent border-none" style={{ color: theme.text }} onClick={() => scrollToSection('services')}>{labels.services}</button></li>
                        <li><button type="button" className="hover:underline bg-transparent border-none" style={{ color: theme.text }} onClick={() => scrollToSection('showcase')}>{labels.showcase || 'Showcase'}</button></li>
                        <li><button type="button" className="hover:underline bg-transparent border-none" style={{ color: theme.text }} onClick={() => scrollToSection('about')}>{labels.about}</button></li>
                        <li><button type="button" className="hover:underline bg-transparent border-none" style={{ color: theme.text }} onClick={() => scrollToSection('contact')}>{labels.contact}</button></li>
                    </ul>
                    <div className="flex items-center space-x-4">
                        <button
                            style={{ background: theme.accent, color: theme.primary }}
                            className="font-semibold py-1 px-4 rounded transition"
                            onClick={() => setLang(lang === 'en' ? 'mr' : 'en')}
                            aria-label="Toggle language"
                        >
                            {labels.lang}
                        </button>
                        <button className="md:hidden" style={{ color: theme.primary }} tabIndex={0} aria-label="Open menu" onClick={() => setSidebarOpen(true)}>
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
            {/* Mobile Sidebar */}
            <div className={`fixed inset-0 z-50 flex ${sidebarOpen ? '' : 'pointer-events-none'}`} style={{ pointerEvents: sidebarOpen ? 'auto' : 'none' }}>
                {/* Overlay */}
                <div
                    className={`bg-black w-full h-full absolute top-0 left-0 transition-opacity duration-300 ${sidebarOpen ? 'opacity-50' : 'opacity-0'}`}
                    onClick={() => setSidebarOpen(false)}
                />
                {/* Sidebar */}
                <div
                    className={`bg-white w-64 h-full p-6 flex flex-col pointer-events-auto relative transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}`}
                    style={{ background: theme.background }}
                >
                    <div className="flex justify-between items-center mb-8">
                        <span className="text-xl font-bold" style={{ color: theme.primary }}>{labels.business}</span>
                        <button onClick={() => setSidebarOpen(false)} aria-label="Close menu" style={{ color: theme.primary }}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <ul className="flex flex-col space-y-6 font-medium">
                        <li><button type="button" className="hover:underline bg-transparent border-none text-left" style={{ color: theme.text }} onClick={() => handleSidebarNav('hero')}>{labels.home}</button></li>
                        <li><button type="button" className="hover:underline bg-transparent border-none text-left" style={{ color: theme.text }} onClick={() => handleSidebarNav('services')}>{labels.services}</button></li>
                        <li><button type="button" className="hover:underline bg-transparent border-none text-left" style={{ color: theme.text }} onClick={() => handleSidebarNav('showcase')}>{labels.showcase || 'Showcase'}</button></li>
                        <li><button type="button" className="hover:underline bg-transparent border-none text-left" style={{ color: theme.text }} onClick={() => handleSidebarNav('about')}>{labels.about}</button></li>
                        <li><button type="button" className="hover:underline bg-transparent border-none text-left" style={{ color: theme.text }} onClick={() => handleSidebarNav('contact')}>{labels.contact}</button></li>
                    </ul>
                    <button
                        style={{ background: theme.accent, color: theme.primary }}
                        className="font-semibold py-2 px-4 rounded mt-8 transition"
                        onClick={() => setLang(lang === 'en' ? 'mr' : 'en')}
                        aria-label="Toggle language"
                    >
                        {labels.lang}
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;

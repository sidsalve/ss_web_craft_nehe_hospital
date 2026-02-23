
"use client";
import React from 'react';
import { businessContent } from '../data/business';

interface FooterProps {
    lang: 'en' | 'mr';
    theme: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
        heading: string;
        text: string;
    };
    date: string;
    businessName: string;
}


const Footer: React.FC<FooterProps> = ({ lang, theme, date, businessName }) => {
    return (
        <footer className="w-full py-6 text-center mt-8" style={{ background: theme.primary, color: '#fff' }}>
            <div className="mb-2 font-bold text-lg">{businessName}</div>
            <div className="text-sm">
                {lang === 'en'
                    ? `© ${date} ${businessName}. All rights reserved.`
                    : `© ${date} ${businessName}. सर्व हक्क राखीव.`}
            </div>
            <div className="mt-2 text-xs opacity-80">
                {lang === 'en'
                    ? 'Website created by SS WebCraft | Contact: +91-7709991427'
                    : 'ही वेबसाईट SS WebCraft ने तयार केली आहे | संपर्क: +91-7709991427'}
            </div>
        </footer>
    );
};

export default Footer;

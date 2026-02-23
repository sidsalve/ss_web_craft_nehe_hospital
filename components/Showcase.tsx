"use client";
import React from "react";


import { businessContent } from "../data/business";

interface ShowcaseProps {
    lang: 'en' | 'mr';
}


const Showcase: React.FC<ShowcaseProps> = ({ lang }) => {
    const showcaseImages = businessContent[lang].showcase;
    const showcaseTitle = businessContent[lang].navbar?.showcase || 'Showcase';
    return (
        <section
            id="showcase"
            className="py-16 px-4 md:px-16 bg-gradient-to-br from-blue-50 to-white text-center opacity-0 translate-y-8 transition-all duration-700 will-change-transform"
            data-animate-on-scroll
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-900">{showcaseTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {showcaseImages.map((img, idx) => (
                    <div
                        key={idx}
                        className="rounded-2xl overflow-hidden shadow-lg bg-white group transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="p-4">
                            <div className="font-semibold text-lg text-blue-900 mb-2">{img.caption}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Showcase;

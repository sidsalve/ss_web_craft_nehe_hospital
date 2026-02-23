
"use client";
import React from 'react';
import { businessContent } from '../data/business';

interface ContactProps {
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

const Contact: React.FC<ContactProps> = ({ lang, theme }) => {
    const contactData = businessContent[lang].contact;
    const social = businessContent[lang].socialMedia;
    return (
        <section
            id="contact"
            className="py-20 px-4 md:px-0 flex justify-center items-center min-h-[60vh] bg-gradient-to-br from-blue-50 via-white to-blue-100 opacity-0 translate-y-8 transition-all duration-700 will-change-transform"
            style={{ background: `linear-gradient(135deg, ${theme.accent}, #fff 60%, ${theme.primary}10)` }}
            data-animate-on-scroll
        >
            <div className="backdrop-blur-lg bg-white/70 border border-blue-100 rounded-3xl shadow-2xl p-8 md:p-12 max-w-xl w-full mx-auto animate-fade-in-up">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900 tracking-tight flex items-center justify-center gap-2">
                    <svg width="36" height="36" fill="none" viewBox="0 0 24 24" className="inline-block text-blue-600"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M3 6l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {lang === 'en' ? 'Contact Us' : 'संपर्क करा'}
                </h2>
                <p className="text-lg mb-8 text-blue-700/80">
                    {lang === 'en' ? 'Reach out to us for any queries or support.' : 'कुठल्याही प्रश्नांसाठी किंवा मदतीसाठी आमच्याशी संपर्क साधा.'}
                </p>
                <div className="flex flex-col gap-4 mb-6">
                    <div className="flex items-center gap-3 text-blue-900/90 bg-blue-50 rounded-xl px-4 py-2 shadow-sm">
                        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="text-blue-600"><path d="M2 6.5V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M22 6.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v.5l10 6 10-6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        <span className="font-medium">{lang === 'en' ? 'Email:' : 'ईमेल:'}</span> {contactData.email}
                    </div>
                    <div className="flex items-center gap-3 text-blue-900/90 bg-blue-50 rounded-xl px-4 py-2 shadow-sm">
                        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="text-blue-600"><path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13A2.5 2.5 0 0 1 19.5 21h-15A2.5 2.5 0 0 1 2 18.5v-13Z" stroke="currentColor" strokeWidth="1.5" /><path d="M6 7h.01M6 11h.01M6 15h.01M10 7h4M10 11h4M10 15h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                        <span className="font-medium">{lang === 'en' ? 'Phone:' : 'फोन:'}</span> {contactData.phone}
                    </div>
                    <div className="flex items-center gap-3 text-blue-900/90 bg-blue-50 rounded-xl px-4 py-2 shadow-sm">
                        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="text-blue-600"><path d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.5 11 9 11s9-5.75 9-11c0-4.97-4.03-9-9-9Z" stroke="currentColor" strokeWidth="1.5" /><circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" /></svg>
                        <span className="font-medium">{lang === 'en' ? 'Address:' : 'पत्ता:'}</span> {contactData.address}
                    </div>
                </div>
                <a
                    href={contactData.location}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 underline font-semibold transition-colors mb-8"
                    style={{ color: theme.secondary }}
                >
                    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="inline-block text-blue-600"><path d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.5 11 9 11s9-5.75 9-11c0-4.97-4.03-9-9-9Z" stroke="currentColor" strokeWidth="1.5" /><circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" /></svg>
                    {lang === 'en' ? 'View on Google Maps' : 'Google नकाशावर पहा'}
                </a>
                <div className="flex gap-6 mt-4 justify-center">
                    <a href={social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="rounded-full bg-green-50 p-2 hover:bg-green-100 shadow transition-transform hover:-translate-y-1">
                        {/* WhatsApp SVG */}
                        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" className="text-green-500">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.363.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.421h-.001a8.933 8.933 0 01-4.533-1.232l-.325-.192-3.363.896.898-3.273-.211-.336a8.933 8.933 0 01-1.367-4.725c.001-4.962 4.037-8.998 9-8.998 2.406 0 4.663.936 6.364 2.637a8.924 8.924 0 012.636 6.363c-.003 4.962-4.039 8.998-9.001 8.998m7.539-16.398A10.92 10.92 0 0012.05 1.999C6.477 2 1.999 6.477 2 12.051c0 1.884.491 3.733 1.418 5.354L.999 22.001l4.725-1.256A10.96 10.96 0 0012.051 22c5.572 0 10.051-4.478 10.051-10.049a9.96 9.96 0 00-2.939-7.028" />
                        </svg>
                    </a>
                    <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full bg-pink-50 p-2 hover:bg-pink-100 shadow transition-transform hover:-translate-y-1">
                        {/* Instagram SVG */}
                        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" className="text-pink-500">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.775.13 4.602.388 3.545 1.445 2.488 2.502 2.23 3.675 2.172 4.952.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.058 1.277.316 2.45 1.373 3.507 1.057 1.057 2.23 1.315 3.507 1.373C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.058 2.45-.316 3.507-1.373 1.057-1.057 1.315-2.23 1.373-3.507.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.058-1.277-.316-2.45-1.373-3.507C19.398.388 18.225.13 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
                        </svg>
                    </a>
                    <a href={social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full bg-blue-50 p-2 hover:bg-blue-100 shadow transition-transform hover:-translate-y-1">
                        {/* Facebook SVG */}
                        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" className="text-blue-700">
                            <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                        </svg>
                    </a>
                    <a href={social.x} target="_blank" rel="noopener noreferrer" aria-label="X" className="rounded-full bg-gray-100 p-2 hover:bg-gray-200 shadow transition-transform hover:-translate-y-1">
                        {/* X SVG */}
                        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" className="text-black">
                            <path d="M22.162 0h-4.327l-5.835 8.228L6.162 0H.001l7.728 11.13L.001 24h4.327l6.173-8.7L17.838 24h6.161l-7.728-11.13L22.162 0zm-2.47 21.5l-5.692-8.13-5.692 8.13H2.64l7.36-10.59L2.64 2.5h3.668l5.692 8.13 5.692-8.13h3.668l-7.36 10.59 7.36 10.59h-3.668z" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;

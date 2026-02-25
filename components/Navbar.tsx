"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar({
    content,
    lang,
    setLang,
}: any) {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <Image
                            src={content.hospital.logo}
                            width={40}
                            height={40}
                            alt="logo"
                            className="rounded-md"
                        />
                        <span className="font-bold text-lg sm:text-xl text-slate-900">
                            {content.hospital.name}
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
                        <a href="#services" className="hover:text-blue-600 transition">
                            {content.navbar.services}
                        </a>
                        <a href="#doctors" className="hover:text-blue-600 transition">
                            {content.navbar.doctors}
                        </a>
                        <a href="#contact" className="hover:text-blue-600 transition">
                            {content.navbar.contact}
                        </a>

                        <button
                            onClick={() => setLang(lang === "en" ? "mr" : "en")}
                            className="ml-4 px-4 py-1.5 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
                        >
                            {content.navbar.lang}
                        </button>
                    </nav>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden flex flex-col gap-1"
                    >
                        <span className={`h-0.5 w-6 bg-slate-800 transition ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                        <span className={`h-0.5 w-6 bg-slate-800 transition ${menuOpen ? "opacity-0" : ""}`} />
                        <span className={`h-0.5 w-6 bg-slate-800 transition ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
                    </button>

                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96" : "max-h-0"}`}>
                <div className="px-4 pb-6 pt-2 space-y-4 bg-white border-t border-slate-100">

                    <a
                        href="#services"
                        className="block text-slate-700 hover:text-blue-600 transition"
                        onClick={() => setMenuOpen(false)}
                    >
                        {content.navbar.services}
                    </a>

                    <a
                        href="#doctors"
                        className="block text-slate-700 hover:text-blue-600 transition"
                        onClick={() => setMenuOpen(false)}
                    >
                        {content.navbar.doctors}
                    </a>

                    <a
                        href="#contact"
                        className="block text-slate-700 hover:text-blue-600 transition"
                        onClick={() => setMenuOpen(false)}
                    >
                        {content.navbar.contact}
                    </a>

                    <button
                        onClick={() => {
                            setLang(lang === "en" ? "mr" : "en");
                            setMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
                    >
                        {content.navbar.lang}
                    </button>

                </div>
            </div>

        </header>
    );
}
"use client";
import React from "react";

export default function Footer({ data, lang }: any) {
  return (
    <footer className="bg-gradient-to-b from-blue-950 to-blue-900 text-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Main Content */}
        <div className="grid gap-8 md:grid-cols-2 items-center">

          {/* Left */}
          <div>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed max-w-md">
              {data.description}
            </p>
          </div>

          {/* Right */}
          <div className="text-left md:text-right">
            <p className="text-sm text-blue-200">
              {data.copyright}
            </p>

            <div className="mt-4 text-xs text-blue-300">
              {lang === "en"
                ? "Website created by SS WebCraft | Contact: +91-7709991427"
                : "ही वेबसाईट SS WebCraft ने तयार केली आहे | संपर्क: +91-7709991427"}
            </div>
          </div>

          </div>

          {/* Bottom Divider */}
          <div className="mt-10 pt-6 border-t border-blue-800 text-center text-xs text-blue-400">
            © {new Date().getFullYear()} • All Rights Reserved
          </div>

            </div>
        </footer>
    );
}
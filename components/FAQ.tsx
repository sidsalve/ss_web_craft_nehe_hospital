// components/FAQ.tsx

"use client";

import { useState } from "react";

export default function FAQ({ data, heading }: any) {

    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        {heading}
                    </h2>
                    <div className="mt-4 h-1 w-16 bg-blue-600 mx-auto rounded-full" />
                </div>

                {/* FAQ List */}
                <div className="space-y-4">

                    {data?.map((f: any, i: number) => {

                        const isOpen = open === i;

                        return (
                            <div
                                key={i}
                                className="border border-gray-200 rounded-2xl bg-white shadow-sm transition-all duration-300"
                            >

                                {/* Question */}
                                <button
                                    onClick={() => setOpen(isOpen ? null : i)}
                                    className="
                                        w-full 
                                        flex 
                                        justify-between 
                                        items-center 
                                        text-left 
                                        p-4 sm:p-6
                                        font-medium 
                                        text-gray-800
                                        hover:bg-gray-50
                                        transition
                                    "
                                >
                                    <span className="text-sm sm:text-base">
                                        {f.question}
                                    </span>

                                    <span
                                        className={`ml-4 text-xl transition-transform duration-300 ${isOpen ? "rotate-45" : ""
                                            }`}
                                    >
                                        +
                                    </span>
                                </button>

                                {/* Answer */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-600 text-sm sm:text-base leading-relaxed">
                                        {f.answer}
                                    </div>
                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}
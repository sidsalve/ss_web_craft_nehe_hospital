// components/Insurance.tsx
"use client";

export default function Insurance({ data, heading }: any) {
    return (
        <section id="insurance" className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-slate-900">
                    {heading}
                </h2>

                {/* Scrollable Cards */}
                <div className="flex space-x-4 overflow-x-auto scrollbar-hide py-4">
                    {data?.map((item: any, i: number) => (
                        <div
                            key={i}
                            className="flex-none w-64 sm:w-72 bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-transform transform hover:-translate-y-2"
                        >
                            <div className="flex items-center justify-center mb-4">
                                <img
                                    src={item.logo}
                                    alt={item.name}
                                    className="h-16 w-auto object-contain"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 text-center">
                                {item.name}
                            </h3>
                            {item.cashless && (
                                <p className="mt-2 text-center text-green-600 font-medium">
                                    Cashless Available
                                </p>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
// components/Services.tsx

export default function Services({ data, heading }: any) {
    return (
        <section
            id="services"
            className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        {heading}
                    </h2>
                    <div className="mt-4 h-1 w-16 bg-blue-600 mx-auto rounded-full" />
                </div>

                {/* Scroll Container */}
                <div className="relative">

                    <div
                        className="
                            flex gap-6 
                            overflow-x-auto 
                            scroll-smooth 
                            snap-x snap-mandatory
                            pb-4
                            scrollbar-hide
                        "
                    >
                        {data?.map((s: any, i: number) => (
                            <div
                                key={i}
                                className="
                                    min-w-[280px] 
                                    sm:min-w-[320px] 
                                    lg:min-w-[350px]
                                    bg-white 
                                    rounded-2xl 
                                    p-6 sm:p-8
                                    shadow-sm 
                                    hover:shadow-xl
                                    transition-all duration-300
                                    hover:-translate-y-2
                                    snap-start
                                    border border-gray-100
                                "
                            >
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                                    {s.title}
                                </h3>

                                <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                                    {s.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
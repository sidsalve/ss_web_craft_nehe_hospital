// components/Testimonials.tsx

export default function Testimonials({ data, heading }: any) {
    return (
        <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        {heading}
                    </h2>
                    <div className="mt-4 h-1 w-16 bg-blue-600 mx-auto rounded-full" />
                </div>

                {/* Scroll Container */}
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
                    {data?.map((t: any, i: number) => (
                        <div
                            key={i}
                            className="
                                min-w-[300px]
                                sm:min-w-[380px]
                                lg:min-w-[420px]
                                bg-white
                                border border-gray-100
                                rounded-2xl
                                p-6 sm:p-8
                                shadow-sm
                                hover:shadow-xl
                                transition-all duration-300
                                snap-start
                            "
                        >
                            {/* Quote */}
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
                                “{t.text}”
                            </p>

                            {/* Divider */}
                            <div className="mt-6 h-px bg-gray-100" />

                            {/* Name */}
                            <div className="mt-4 font-semibold text-gray-800">
                                {t.name}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
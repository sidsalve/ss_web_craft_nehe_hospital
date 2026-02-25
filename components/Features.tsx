// components/Features.tsx

export default function Features({ data }: any) {
    return (
        <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="
                    grid 
                    gap-6 sm:gap-8
                    grid-cols-1 
                    sm:grid-cols-2 
                    lg:grid-cols-4
                ">

                    {data?.map((item: any, i: number) => (
                        <div
                            key={i}
                            className="
                                group
                                bg-white 
                                border border-slate-100
                                rounded-2xl 
                                p-6 sm:p-8
                                shadow-sm 
                                hover:shadow-xl
                                hover:-translate-y-2
                                transition-all duration-300
                            "
                        >
                            {/* Title */}
                            <h3 className="
                                text-lg sm:text-xl 
                                font-semibold 
                                text-slate-900
                                group-hover:text-blue-600
                                transition-colors
                            ">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="
                                mt-3 
                                text-slate-600 
                                text-sm sm:text-base 
                                leading-relaxed
                            ">
                                {item.description}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
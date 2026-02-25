import Image from "next/image";

export default function AboutHospital({ data }: any) {
    return (
        <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-slate-50">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="
                    grid 
                    gap-12 
                    items-center
                    grid-cols-1 
                    lg:grid-cols-2
                ">

                    {/* Left Content */}
                    <div className="order-2 lg:order-1">

                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                            {data?.heading}
                        </h2>

                        <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                            {data?.description}
                        </p>

                        {/* Highlights */}
                        <ul className="mt-8 space-y-4">

                            {data?.highlights?.map((item: string, i: number) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-3 text-slate-700"
                                >
                                    <span className="
                                        flex items-center justify-center
                                        w-6 h-6 
                                        rounded-full 
                                        bg-blue-100 
                                        text-blue-600 
                                        text-sm 
                                        font-bold
                                        shrink-0
                                    ">
                                        ✓
                                    </span>

                                    <span className="text-sm sm:text-base">
                                        {item}
                                    </span>
                                </li>
                            ))}

                        </ul>

                    </div>

                    {/* Right Image */}
                    <div className="relative order-1 lg:order-2">

                        <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[450px]">

                            <Image
                                src={data?.image}
                                alt="Hospital"
                                fill
                                className="
                                    object-cover 
                                    rounded-2xl 
                                    shadow-xl
                                "
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}
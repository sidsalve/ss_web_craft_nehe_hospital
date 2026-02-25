import Image from "next/image";

export default function AboutDoctors({
    aboutDoctors,
    doctors,
}: any) {
    return (
        <section
            id="doctors"
            className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                        {aboutDoctors.heading}
                    </h2>

                    <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                        {aboutDoctors.description}
                    </p>

                    <div className="mt-6 h-1 w-16 bg-blue-600 mx-auto rounded-full" />
                </div>

                {/* Doctors Grid */}
                <div className="
                    grid 
                    gap-8 
                    grid-cols-1 
                    sm:grid-cols-2 
                    lg:grid-cols-3
                ">

                    {doctors?.map((doctor: any, i: number) => (
                        <div
                            key={i}
                            className="
                                group
                                bg-white 
                                rounded-2xl 
                                p-8 
                                text-center
                                border border-slate-100
                                shadow-sm
                                hover:shadow-2xl
                                hover:-translate-y-2
                                transition-all duration-300
                            "
                        >

                            {/* Doctor Image */}
                            <div className="relative w-32 h-32 mx-auto mb-6">
                                <Image
                                    src={doctor.image}
                                    alt={doctor.name}
                                    fill
                                    className="
                                        rounded-full 
                                        object-cover
                                        border-4 border-blue-50
                                        group-hover:border-blue-200
                                        transition
                                    "
                                />
                            </div>

                            {/* Doctor Name */}
                            <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                                {doctor.name}
                            </h3>

                            {/* Qualification */}
                            <p className="mt-2 text-blue-600 text-sm sm:text-base font-medium">
                                {doctor.qualification}
                            </p>

                            {/* Experience */}
                            <p className="mt-1 text-slate-500 text-sm">
                                {doctor.experience}
                            </p>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}